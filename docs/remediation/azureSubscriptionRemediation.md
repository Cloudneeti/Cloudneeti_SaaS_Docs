Remediation of Azure Resources
------------
Resources that are non-compliant to a security policy can be put into a compliant state through remediation. Remediation is accomplished by instructing Security Policy to update the configuration of your existing resources and is effective for new resource deployment. This article shows the steps needed to understand and accomplish remediation with Cloudneeti.  

![Remediation of Azure Resources](.././images/cloudneetiRemediation/Azure_Remediation_Steps.png#thumbnail_1)

1.	**Assign permission to Cloudneeti Application** includes giving the Cloudneeti application access to the Azure subscription, assigning a Resource Policy Contributor (Preview)

2.	**Configure Policy Remediation** includes configuring security policies in the respective cloud account, upon enabling policy remediation triggers creation of policy assignments in Azure subscription.

3.	**Assign permissions to Assignments** includes assigning required roles to policy assignments in Azure. 

4.	**Initiate Remediation** includes triggering remediation feature to remediate resources that are non-compliant to a security policy.

5.	**Verify results** includes verifying policy result post next data scan on Cloudneeti.


| **Step**                               | **Product**      | **Role**                     |
|----------------------------------------|------------------|------------------------------|
| Assign permission to Service Principal | Azure Portal     | Subscription Owner           |
| Configure Policy Remediation           | Cloudneeti       | License Admin/ Account Admin |
| Assign permissions to Assignments      | Azure CloudShell | Subscription Owner           |
| Initiate Remediation                   | Cloudneeti       | License Admin/ Account Admin |
| Verify results                         | Cloudneeti       | License Admin/ Account Admin |


## Required Roles
One or more people with the following roles are required to complete Azure Remediation process.

| **Pre-requisite Role**      | **Portal to use**      |
|-----------------------------|------------------------|
| License Admin/Account Admin | Cloudneeti application |
| Subscription Owner          | Microsoft Azure        |


* Enabling policy remediation and initializing remediation requires the logged in user to be assigned the **License Admin** role in the Cloudneeti application.

* The Microsoft Azure **Subscription Owner** role is required for providing Cloudneeti application required access to the Subscription and Assignments in Azure.

## Required Permissions

The **Cloudneeti Application registered** while onboarding the Azure Account to Cloudneeti needs to be granted a Resource Policy Contributor (Preview) role. 

| **Information**                   | **Portal to use** | **Role**                                                                                                                                                                | **Step** |
|-----------------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Registered Cloudneeti Application | Microsoft Azure   | Resource Policy Contributor (Preview) [Refer here](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#resource-policy-contributor-preview) | STEP 1   |
| Azure Assignments                 | Microsoft Azure   | Roles as per policies enabled for remediation [Refer here](../azureSubscriptionRemediation/#roles-as-per-policies-enabled-for-remediation) | STEP 4   |


## STEP 1: Assign permission to Service Principal
Login to [Azure Portal](https://portal.azure.com/)  with Subscription Owner role.

1.	Click **Subscriptions in primary menu** (1)
2.	Select desired **Subscription**
3.	Click on **Access Control (IAM)** (2)
4.	Click **Add** (3)
5.	Select **Add role assignment** (4)
6.	Select **Resource Policy Contributor (Preview)** role (5)
7.	Select **Cloudneeti Application** (6)
8.	**Save** (7)

    ![STEP 1: Assign permission to Service Principal](.././images/cloudneetiRemediation/Azure_Remediation_Step1.png#thumbnail_1)

## STEP 2: Configure remediation policies
Login to Cloudneeti portal with **License Admin** role 

1.	Select desired **License** (1) and **Cloud Account** (2)
2.	Click **Configure** 
3.	Select **Configure security policies**

    ![STEP 2: Configure remediation policies](.././images/cloudneetiRemediation/Azure_Remediation_Step2.png#thumbnail_1)

4. Select **Remediation available** in filter (1)

5. **Enable** policies for remediation (2) (3)

6. Click **Save** (4)

    ![STEP 2: Configure remediation policies](.././images/cloudneetiRemediation/Azure_Remediation_Step2.1.png#thumbnail_1)

7. Confirm by hitting “Yes Please” on confirmation message box.

    ![STEP 2: Configure remediation policies](.././images/cloudneetiRemediation/Azure_Remediation_Step2.2.png#thumbnail_1)

**Note:**

* If Resource Policy Contributor (Preview) role is not assigned as mentioned in step1, enabling policy remediation will fail. Email notification to configured email ids will be sent.

* Assigning **Resource Policy Contributor (Preview)** role to Cloudneeti Application in Azure is prerequisite for this step.

## STEP 3: Assigning roles to MSI generated for remediation policies
Login to [Azure Portal](https://portal.azure.com/) with **Subscription Owner** role.

1. Open **Cloud Shell**

2. Choose **PowerShell** from shell drop 

    ![STEP 3: Assigning roles to MSI generated for remediation policies](.././images/cloudneetiRemediation/Azure_Remediation_Step3.png#thumbnail_1)

3. Download Assign-RolesToRemediationPolicy script

        wget https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/Assign-RolesToRemediationPolicy.ps1 -O Assign-RolesToRemediationPolicy.ps1

4.	Switch to the User directory

        cd $user

5.	Run role assignment script with inline parameters
        
        ./Assign-RolesToRemediationPolicy.ps1 `
        -azureActiveDirectoryId <Azure active directory Id> `
        -subscriptionId <Subscription Id>


Azure will start evaluation of resources related to enabled policies.

**Note:**

* Azure policy framework takes some time to evaluate the state of the resources internally. It may vary depending on the number of resources present in Azure subscription.

* Perform this step whenever user adds new or configures existing remediation policies.

## STEP 4: Initiate Remediation
Cloudneeti supports two ways to remediate non-compliant resources.

**Auto Remediation [for new resources]**- Cloudneeti remediation functionality make use of policy framework provided by Azure. Once we enable the remediation policies in Cloudneeti, the new resources get remediated at the time of deployment. It means all the resource are by default remediated. 

**Manually Triggered [for existing resources]**- To remediate all the existing non-compliant resources, follow below procedure.

### Manually Triggered [for existing resources]
Login to Cloudneeti portal with **License Admin** role

1. Select desired **License** (1) and **Cloud Account** (2)

2. Click **Cloud Security Best Practices** (3)

3. Click **Remediate** (4)
    
    ![Manually Triggered [for existing resources]](.././images/cloudneetiRemediation/Manually_Triggered1.png#thumbnail_1)

4. All remediation enabled policies will appear. If the selection checkbox is disable state please check all prerequisites are met.

5. Select desired **policy/policies** (1) (2)

6. Click **Remediate Now** (3)

    ![Manually Triggered [for existing resources]](.././images/cloudneetiRemediation/Manually_Triggered2.png#thumbnail_1)

7. Remediation will change the configuration for resources to make them compliant with the policy with deploy if not exist.

    ![Manually Triggered [for existing resources]](.././images/cloudneetiRemediation/Manually_Triggered3.png#thumbnail_1)

 **Note:**

*	In case Azure evaluation is not complete a message will appear “Evaluation in progress, please try after sometime”

*	If Azure policy evaluation is done, the remediation process for selected policies will start. It will take some time to change resource configuration as per policy. This will change configuration for existing resources.

## STEP 5: Verify Resource Remediation
On remediation of non-compliant resources using manually triggered or auto-remediation will not show the updated resource configuration in Cloudneeti immediately. Verification of latest resource configurations can be done after next scan in the Cloudneeti portal. To get the latest configuration perform an on-demand re-scan the in Cloudneeti portal using below steps,

Login to Cloudneeti portal with **License Admin** role

1.	Select desired **License** (1) and **Cloud Account** (2)

2.	Click **Configure** (3)

3.	Select **Re-scan** (4)

    ![STEP 5: Verify Resource Remediation](.././images/cloudneetiRemediation/Azure_Remediation_Step5.1.png#thumbnail_1)

4. It will take a few minutes to scan and process data. On Dashboards **Last Scanned On** will be updated once data scan and processing is done.

5. Verify data on **Dashboard**

    ![STEP 5: Verify Resource Remediation](.././images/cloudneetiRemediation/Azure_Remediation_Step5.2.png#thumbnail_1)

## Decommission of remediation
To decommission the remediation functionality in Azure subscription,

**Disable all the remediation policies**- Azure account security policy remediation functionality can be disabled from Cloudneeti portal. On disabling the remediation policies stops the auto-remediation of new resources whenever deployed.

**Remove Resource Policy Contributor (Preview) role** access of Cloudneeti application from the subscription.

### 1. Disable Remediation policies
Login to Cloudneeti portal with **License Admin** role

1. Select desired License and Account 

2. Click **Configure**

3. Select **Configure security policies**

    ![Disable Remediation policies](.././images/cloudneetiRemediation/Azure_Remediation_Step5.3.png#thumbnail_1)

4. Select **Remediation Available** in filter to see only the policies with remediation available.

5. Disable the policy remediation 

6. Click **Save**

    ![Disable Remediation policies](.././images/cloudneetiRemediation/Azure_Remediation_Step5.4.png#thumbnail_1)

**Note:**

* Disabling remediation of security policies does not immediately effective, it will take some time to delete internal assignment present in Azure policy framework.

* The resource configuration updated during remediation will remain the same after disabling the remediation policies.

### 2. Remove “Policy Resource Contributor (Preview)” access

1. Click **Subscriptions** in primary menu (1)

2. Select desired **Subscription**

3. Click on **Access Control (IAM)** (2)

4. Select **Roles** tab

5. Select **Resource Policy Contributor (Preview)**

    ![Remove “Policy Resource Contributor (Preview)” access](.././images/cloudneetiRemediation/Azure_Remediation_Step5.5.png#thumbnail_1)

6. Select **Cloudneeti Application** (1)

7. Click **Remove** (2)

    ![Remove “Policy Resource Contributor (Preview)” access](.././images/cloudneetiRemediation/Azure_Remediation_Step5.6.png#thumbnail_1)

## Annexure
### Roles as per policies enabled for remediation

| **Policy-Id** | **Information**   | **Portal to use** | **Role**                                         | **Step** |
|---------------|-------------------|-------------------|--------------------------------------------------|----------|
| **1300.8**    | Azure Assignments | Microsoft Azure   | Network Contributor                              | STEP 4   |
| **1600.2**    | Azure Assignments | Microsoft Azure   | SQL DB Contributor                               | STEP 4   |
| **1600.6**    | Azure Assignments | Microsoft Azure   | SQL Security Manager                             | STEP 4   |
| **1600.23**   | Azure Assignments | Microsoft Azure   | SQL Security Manager Storage Account Contributor | STEP 4   |



