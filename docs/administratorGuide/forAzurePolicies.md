# Azure Policy Remediation
## 1	Introduction
The purpose of this document is to outline the concept of Cloudneeti application automated policy remediation to the customer’s cloud accounts, the required preparations and prerequisites, and the specific remediation steps. 

### 1.1	Cloudneeti Policy remediation overview
Resources that are non-compliant to a security policy can be put into a compliant state through Remediation. Remediation is accomplished by instructing Security Policy to update the configuration of your existing resources and is effective for new resource deployment. This article shows the steps needed to understand and accomplish remediation with Cloudneeti Remediation.

![RemediationOverview](.././images/RemediationOverview.png#thumbnail)

### 1.2	Cloudneeti Application Permissions 
The following permissions are required for Azure subscription to Cloudneeti. 
#### 1.2.1	Azure Subscription Permissions
The service principal generated while onboarding the Azure Account to Cloudneeti needs to be granted a Resource Policy Contributor (Preview) role. 

| Azure Built-in Role                      | Description                              | Explicit Granting of Permission Required? |
|------------------------------------------|------------------------------------------|------------------------------------------|
| Resource Policy Contributor (Preview)<br>Refer [here](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#resource-policy-contributor-preview) | The permission lets Cloudneeti create/modify resource policy, create support ticket and read resources/hierarchy. Cloudneeti can read resources of all types, except secrets.<br>At no time will Cloudneeti be able to read/view data stored within the application/databases.<br> | Yes                                      |

 
## 2	Automated policy remediation preparation
Cloudneeti automated policy remediation to Azure subscription is the process of granting Service Principal access and change the resource configurations in the customer’s cloud account. 

### 2.1	Customer Team
Before onboarding, please ensure that users with the following roles are available:

| Role                                     | Action to Perform                        |
|------------------------------------------|------------------------------------------|
| IT Manager / Architect                   | Ensure that a user is appointed as a customer [Cloudneeti License Administrator or Cloudneeti License Administrator][1] |
| Cloudneeti License Administrator         | Enable policy remediation on Cloudneeti portal. |
| Cloudneeti Account Administrator         | Enable policy remediation on Cloudneeti portal. |
| An Individual with Azure Subscription Owner/Contributor Permissions  | Assign Resource Policy Contributor (Preview) role<br>[Referral Link](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#resource-policy-contributor-preview)<br> |


### 2.2	Prerequisites
The following activities need to be completed by the customer prior to automated policy remediation to Azure subscription

| Activity                                 | Description                              |
|------------------------------------------|------------------------------------------|
| 1. Engage a user with **owner access permissions to the Azure subscription** | Assign ‘Resource Policy Contributor (Preview)  role permission to the service principal into the Azure subscription. Please follow section 2.2.1 |
| 2. Download and review **PowerShell script** for creation of the service principal | The PowerShell script is used to create a service principal in Azure Tenant AD: [Download Link](https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/Assign-RolesToRemediationPolicy.ps1). |
| 3. Have the Azure Subscription ID        | Details can be fetched from Azure portal or are available on Cloudneeti portal. |
| 4. Have the Azure Directory/Tenant ID    | Details can be fetched from Azure portal or are available on Cloudneeti portal. |
| 5. **CloudShell** : Execute script to assign roles to MSI generated for Cloudneei Remediation policies. | This script helps Azure subscription 'owner'/'User Access Administrator' to assign the role to MSI generated for Cloudneei Remediation policies. |

#### 2.2.1 Assign ‘Resource Policy Contributor (Preview) role permission to the service principal into the Azure subscription.
1. Get service principal id from Cloudneeti Portal
    a.	Login as Cloudneeti Admin
    b.	Go to Settings → Click on Manage Accounts
    c.	Select ‘Update Account’ from ‘Configure Account’
    d.	Copy Azure Application Id
2. Grant Resource Policy Contributor (Preview) role to Azure Application
    a.	Go To Azure Portal and Select Azure Subscription
    b.	Click on Access Control(IAM)
    c.	Click On Add and Select Add role assignment
    d.	Grant Resource Policy Contributor (Preview) role to Azure Application Id

## 3	Automated policy remediation
Follow these steps for automated policy remediation on the Azure subscription:


| # | Step                                     |
|---|------------------------------------------|
| 1 | Enable Policy Remediation                |
| 2 | Assign Role to MSI generated for remediation policies |
| 3 | Remediate                                |
| 4 | Verification of data                     |

### 3.1	Enable policy remediation
1.	On Cloudneeti portal, navigate to settings
2.	Select desired License and Account 
3.	Click on configure button to select “Configure security policies”
4.	Enable policies for remediation.
a.	A filter to see only the policies which are available for remediation can be used.

![EnablePolicyRemediation](.././images/EnablePolicyRemediation.png#thumbnail)
 
5.	Click on Save and confirm by hitting “Yes Please” on confirmation message box.

![EnablePolicyRemediationConfirmationBox](.././images/EnablePolicyRemediationConfirmationBox.png#thumbnail)

6.	If Resource Policy Contributor (Preview) role is not assigned as mentioned in prerequisite, enabling policy remediation will fail. Email notification to configured email ids will be sent.
7.	To enable policy remediation, please follow steps mentioned in prerequisite then enable policies remediation on Cloudneeti portal by following above steps.

### 3.2	Assign Role to MSI generated for remediation policies
1.	Login to Azure portal  
2.	Switch to Azure active directory where you have a subscription with pre-requisite access
3.	Open CloudShell, Click on Cloudshell icon on the navigation bar to open Cloudshell and Choose PowerShell from shell drop down

![AssignRoleAzurePortalCloudshell](.././images/AssignRoleAzurePortalCloudshell.png#thumbnail)

4.	Run below commands on CloudShell:
a.	Download script 
```powershell
wget https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/Assign-RolesToRemediationPolicy.ps1 -O Assign-RolesToRemediationPolicy.ps1
```



 Switch to the User directory
```powershell
cd $user
```



b.	Run provisioning script with inline parameters
```powershell
./Assign-RolesToRemediationPolicy.ps1 -azureActiveDirectoryId<Azure active directory Id> `
                            -subscriptionId<Subscription Id > `
```



5.	Azure will start evaluation of resources related to enabled policies.

### 3.3	Remediate 
1.	On Cloudneeti portal, navigate to “Cloud Security and Risk Posture (Preview)” and click on Remediate button
2.	All remediation enabled policies will appear. If the selection checkbox is disabled please check all prerequisites are met.
3.	Select the policy and click on “Remediate Now” button.
4.	In case Azure evaluation is not complete a message will appear “Evaluation in progress, please try after some time”.

![RemediateEvaluationStatus](.././images/RemediateEvaluationStatus.png#thumbnail)

5.	If Azure evaluation is done, the remediation process for selected policies will start. It will take some time to change resource configuration as per policy.

![Success](.././images/Success.png#thumbnail)

6.	This will change configuration for existing resources and will be effective for new resource deployment too.

### 3.4	Verification of data
You can verify data on Cloudneet portal after next scan or below steps can be followed to rescan 
1.	On Cloudneeti portal, navigate to settings
2.	Select desired License and Account 
3.	Click on configure button to select “re-scan”.
4.	It will take a few minutes to scan and process data.
5.	Go To Dashboard’ to see the data.
4	Disable Automated policy remediation
Azure account security policy remediation can be disabled from Cloudneeti portal. It will stop remediation of new resources deployed, However, please note that assignment deletion triggered by disabling remediation of security policies is not immediately effective for new resource deployment. The resource configuration updated during remediation will remain the same.

Please follow below steps to disable the remediation:
1.	On Cloudneeti portal, navigate to settings
2.	Select desired License and Account 
3.	Click on configure button to select “Configure security policies”
4.	Enable policies for remediation.
    a.	A filter to see only the policies which are available for remediation can be used.

![EnablePolicyRemediation](.././images/EnablePolicyRemediation.png#thumbnail)

5.	Disable the policy remediation and click on Save button.
