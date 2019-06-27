# Azure Policy Remediation

Automated remediation procedure or tools are helpful for the ensuring security of system by configuring existing cloud resources automatically or at the time of creation.

Resources that are non-compliant to a security policies can be put into a compliant state through Remediation. Remediation is accomplished by instructing Security Policy to update the configuration of your existing resources and newly deployed resources are remediated automatically at the time of creation. 

This article shows the steps needed to understand and accomplish remediation with Cloudneeti Remediation.

Cloudneeti policy remediation for Azure policies is divided in 2 major parts

**Part 1 : Enable remediation policies**

The remediation policies can be configured through Cloudneeti policy configuration page which internally create Azure policies in customer Azure subscription.


**Part 2 : Remediate resources**

Here, the process to put exiting resources that are non-compliant to a security policy into a compliant state is initiated. Azure remediation policy framework by default remediate the newly deployed resources at the time of creation.


![RemediationOverview](.././images/forAzurePolicies/Remediation_Overview.png#thumbnail)




## 2	Prerequisites

The following activities need to be completed by the customer prior to automated policy remediation to Azure subscription,


| Activity                                 | Description                              | 
|------------------------------------------|------------------------------------------|
| 1. Have the Azure Subscription ID        | Details can be fetched from Azure portal or are available on Cloudneeti portal. | 
| 2. Have the Azure Directory/Tenant ID    | Details can be fetched from Azure portal or are available on Cloudneeti portal. | 
| 3. Engage a user with **owner access permissions to the Azure subscription** | Assign ‘Resource Policy Contributor (Preview)  role permission to Cloudneeti data collector service principal into the Azure subscription. Please follow section 2.2 | 



### 2.1. Get service principal, subscription and tenant Id from Cloudneeti portal

1.	Login as Cloudneeti Admin on Cloudneeti portal

2.	Go to Settings → Click on Manage Accounts

3.	Select ‘Update Account’ from ‘Configure Account’
    
4.	Copy Azure application and subscription id

### 2.2 Assign ‘Resource Policy Contributor (Preview) role permission to the Cloudneeti data collector service principal on Azure subscription.

The "Resource Policy Contributor (Preview)" permission allow Cloudneeti to create, modify, delete,and trigger policies in Azure Policy Framework. Find more details [here](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#resource-policy-contributor-preview).

Grant Resource Policy Contributor (Preview) role to Azure Application

1.	Go To [Azure portal](https://portal.azure.com) and select Azure subscription
    
2.	Click on Access Control(IAM)
    
3.	Click On "Add" and select "Add role assignment"
    
4.	Grant "Resource Policy Contributor (Preview)" role to Azure application id

## 3	Automated policy remediation
Follow these steps for automated policy remediation on the Azure subscription:


| # | Step                                     |
|---|------------------------------------------|
|   | **Part 1 : Enable remediation**                |
| 1 | Configure policy remediation                |
| 2 | Assign role to MSI generated for remediation policies |
|   | **Part 2 : Remediation**                |
| 3 | Remediate                                |


### 3.1	Enable policy remediation
1.	On Cloudneeti portal, navigate to settings
2.	Select desired license and account 
3.	Click on configure button to select “Configure security policies”
4.	Enable policies for remediation.
    a.	A filter to see only the policies which are available for remediation can be used.

    ![EnablePolicyRemediation](.././images/forAzurePolicies/EnablePolicyRemediation.png#thumbnail)
 
5.	Click on Save and confirm by hitting “Yes Please” on confirmation message box.

    ![EnablePolicyRemediationConfirmationBox](.././images/forAzurePolicies/EnablePolicyRemediationConfirmationBox.png#thumbnail)
6. This will initiate the process of creation of policies in customer's Azure subscription.

    ![Remediation_PolicyCreation_Initiated](.././images/forAzurePolicies/Remediation_PolicyCreation_Initiated.png#thumbnail)

7.	If Resource Policy Contributor (Preview) role is not assigned as mentioned in prerequisite, enabling policy remediation will fail. Email notification to configured email ids will be sent.

8.	To enable policy remediation, please follow steps mentioned in prerequisite then enable policies remediation on Cloudneeti portal by following above steps.

### 3.2	Assign roles to MSI generated for remediation policies

Once the remediation policies are configured on the subscription, Azure policy framework needs resource specific contributor access (e.g. SQL contributor for remediation of SQL related policies).

Follow below steps to assign required roles to remediation policies configured from Cloudneeti. This is a required step, every time the policy remediation configuration is changed. 

1.	Login to [Azure portal](https://portal.azure.com)  

2.	Switch to Azure active directory where you have a subscription with pre-requisite access

3.	Open Cloudshell, click on Cloudshell icon on the navigation bar to open Cloudshell and choose "PowerShell" from shell drop down

    ![AssignRoleAzurePortalCloudshell](.././images/forAzurePolicies/AssignRoleAzurePortalCloudshell.png#thumbnail)

4.	Run below commands on CloudShell:

    a.	Download script 
        <pre><code>
        wget https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/Assign-RolesToRemediationPolicy.ps1 -O Assign-RolesToRemediationPolicy.ps1
        </pre></code>
    b.  Switch to the User directory
        <pre><code>
        cd $user
        </pre></code>  
    c.  Run provisioning script with inline parameters
        <pre><code>
        ./Assign-RolesToRemediationPolicy.ps1 -azureActiveDirectoryId<Azure active directory Id> `
                                    -subscriptionId<Subscription Id > `
        </pre></code>

5.	Azure will start evaluation of resources related to enabled policies.


### 3.3	Remediate Resources

Follow below steps to remeidate non-compliant resources,

1.	On Cloudneeti portal, navigate to “Cloud Security and Risk Posture (Preview)” and click on Remediate button

2.	All remediation enabled policies will appear. If the selection checkbox is disabled please check all prerequisites are met.

3.	Select the policy and click on “Remediate Now” button.

4.	In case Azure evaluation is not complete a message will appear “Evaluation in progress, please try after some time”.

    ![RemediateEvaluationStatus](.././images/forAzurePolicies/RemediateEvaluationStatus.png#thumbnail)

5.	If Azure evaluation is done, the remediation process for selected policies will start. It will take some time to change resource configuration as per policy. 

    ![Success](.././images/forAzurePolicies/Success.png#thumbnail)


Note:
Azure remediation policy framework by default remediate the newly deployed resources at the time of creation.

### 4	Verification of data
You can verify data on Cloudneeti portal after next scheduled scan or below steps can be followed to re-scan.

1.	On Cloudneeti portal, navigate to settings

2.	Select desired License and Account 

3.	Click on configure button to select “re-scan”.

4.	It will take a few minutes to scan and process data.

5.	Go To Dashboard’ to see the data.

6.	Disable Automated policy remediation

Azure account security policy remediation can be disabled from Cloudneeti portal. It will stop remediation of new resources deployed, However, please note that assignment deletion triggered by disabling remediation of security policies is not immediately effective for new resource deployment. The resource configuration updated during remediation will remain the same.

## 5. Disable policy remediation
Remediation policies can be disabled from Cloudneeti to stop the remediation of new resources. The related Azure policies created on enabling remediation will be deleted from customer's Azure subscription. Please note that the deletion of Azure policy may take some time to be effective.

Please follow below steps to disable the remediation:

1.	On Cloudneeti portal, navigate to settings

2.	Select desired license and account 

3.	Click on configure button to select “Configure security policies”

4.	Enable policies for remediation.
    a.	A filter to see only the policies which are available for remediation can be used.

    ![EnablePolicyRemediation](.././images/forAzurePolicies/EnablePolicyRemediation.png#thumbnail)


5.	Disable the policy remediation and click on Save button.
