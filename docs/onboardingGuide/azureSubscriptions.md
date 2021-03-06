# Azure Subscription Onboarding Guide
## Onboarding Steps

The following steps are required to onboard Microsoft Azure to the Cloudneeti application.

![Onboarding Steps](.././images/azureSubscriptions/Onboarding_Steps.png#thumbnail_1)

1.  [**Registering the Cloudneeti application**](.././onboardingGuide/azureSubscriptions/#create-new-azure-app-registration_1){target=_blank} includes registering the
    Cloudneeti application with Azure tenant, providing access to Microsoft
    Graph and granting admin consent to the Cloudneeti application.

2.  [**Granting access to the Azure subscription**](.././azureSubscriptions/#step-2-grant-access-to-cloudneeti-registered-app-existing){target=_blank} includes giving the Cloudneeti
    application reader access to the Azure subscription and collecting Subscription ID, Directory ID, Domain Name information.

3. [**Grant access to Azure subscription additional roles (Optional)**](../../onboardingGuide/grantAccessToAzureSubscriptionAdditionalRoles/){target=_blank} includes giving the Cloudneeti
    application access to the Azure subscription, assigning [Azure custom role.](https://docs.microsoft.com/en-us/azure/role-based-access-control/custom-roles) 
    
    -   Custom role with permission **"Microsoft.Web/sites/config/list/action"** for Azure Subscription level scope.
    The Cloudneeti application needs "Microsoft.Web/sites/config/list/action" action present in [Website Contributor role](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#custom-role-with-permission-microsoftwebsitesconfiglistaction) in order to collect authentication and authorization configuration of Web/API/Mobile/Function Apps which is hosted on the App Service Plan. The current subscription Reader role given doesn't have sufficient permissions to collect web site configuration details.

    -   Custom role with permission **"Microsoft.Storage/storageAccounts/listkeys/action"** for Azure Subscription level scope.
    Cloudneeti needs "Microsoft.Storage/storageAccounts/listkeys/action" action present in [Storage Account Contributor role](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage) in order to collect metadata configuration of blobs.  The current subscription [Reader role](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#reader) given doesn't have sufficient permissions to list blob keys. 


4. [**Grant access to key vaults (Optional)**](../../onboardingGuide/grantAccessToKeyVaults/){target=_blank} includes giving the Cloudneeti application special permission on desired key vaults to get policy data related to secrets.

5. [**Advanced Security configurations (Optional)**](../../onboardingGuide/azureAdvancedSecurityConfigurations/){target=_blank} includes adding a script to the customer’s Azure account and granting the required access rights.

    Advanced security configurations (step 5) requires a Cloudneeti PowerShell agent to be installed in an Azure subscription under the same tenant where the Azure subscription is located. The Cloudneeti PowerShell agent retrieves (A) additional configuration information from the Azure Active Directory  (there are no Azure APIs to retrieve this information) and pushes (B) this information as a JSON file to the Cloudneeti application.

6. [**Enable Azure Security Center audit policies (Optional)**](../../onboardingGuide/azureSubscriptions/#step-6-enable-azure-security-center-audit-policies){target=_blank} includes enabling Azure Security Center audit policies (Optional) includes configuring  Azure Security Center free tier in order for Zscaler CSPM to pull all security recommendations and make it available within the product.

    - Note : Please note that it is not required to have Azure Defender enabled (ASC Standard tier).

7. [**Configure OS baseline and Vulnerability Assessment Solution (Optional)**](../../onboardingGuide/azureVulnerability/){target=_blank} inlcudes connecting VMs to OMS workspace. Also deploy partner Vulnerability Assessment Solution in Azure Security Center and installing the solution on multiple VMs allows to provide visibility into missing updates, misconfigured OS security settings, endpoint protection status, and health and threat protection.

8. [**Configure Cloudneeti agent on AKS, AKS Engine and VM Based Kubernetes Clusters (Optional)**](../../onboardingGuide/configureCloudneetiAgentInAKS/){target=_blank} inlcudes Deploying Cloudneeti agent on Azure Kubernetes Service enables compliance monitoring of Azure Kubernetes Clusters - AKS, AKS-Engine and VM hosted Kubernetes Clusters.
An Azure docker agent is deployed to collect data for additional security policies.

9. [**Adding Azure subscription**](.././azureSubscriptions/#step-9-add-azure-subscription){target=_blank} includes adding Azure subscription information to the respective Cloud Account and waiting until the first data collection is complete.

| S. No. | Step                                      | Portal to use  | Role                    | Type      | Policies     |
|---|-------------------------------------------|----------------|-------------------------|-------------------|-------------------------|
| 1  | [Create new Azure App Registration ](.././azureSubscriptions/#step-1-create-new-azure-app-registration-manually-or-using-azure-powershell-script){target=_blank}           | Microsoft Azure| Global AD Administrator | mandatory | 0            |
| 2  | [Grant access to Azure subscription](.././azureSubscriptions/#step-2-grant-access-to-cloudneeti-registered-app)        | Microsoft Azure| Subscription Owner      | mandatory | 0            |
| 3  | [Grant access to Azure subscription additional roles](../../onboardingGuide/grantAccessToAzureSubscriptionAdditionalRoles/){target=_blank} | Microsoft Azure| Subscription Owner           | optional  | 12            |
| 4 | [Grant access to key vaults](../../onboardingGuide/grantAccessToKeyVaults/){target=_blank}                 | Microsoft Azure| Subscription Owner          | optional  | 1            |
| 5 | [Advanced Security configuration](../../onboardingGuide/azureAdvancedSecurityConfigurations/){target=_blank}            | Microsoft Azure| Subscription Owner, Global AD Reader          | optional  | 18            |
| 6 | [Enable Azure Security Center audit policies](../../onboardingGuide/enableASCAuditPolicies/){target=_blank}                     | Microsoft Azure| Subscription Owner           | optional  | 115            |
| 7 | [Configure OS baseline and Vulnerability Assessment Solution](../../onboardingGuide/azureVulnerability/){target=_blank}                   | Microsoft Azure     | Subscription Owner           | optional | 513            |
| 8 | [Configure Cloudneeti agent on AKS, AKS Engine and VM Based Kubernetes Clusters](../../onboardingGuide/configureCloudneetiAgentInAKS/){target=_blank}                   | Microsoft Azure     | Subscription Owner           | optional | 73            |
| 9 | [Add Azure subscription](../../onboardingGuide/azureSubscriptions/#step-9-add-azure-subscription){target=_blank}                    | Cloudneeti     | License Admin           | mandatory | 0            |

### Required Roles

One or more people with the following roles are required to complete Microsoft
Azure onboarding process.

| **Pre-requisite Role**  | **Portal to use**      |
|-------------------------|------------------------|
| License Admin           | Cloudneeti application |
| Global AD Administrator | Microsoft Azure        |
| Subscription Owner      | Microsoft Azure        |

-   Onboarding a cloud account (in this case an Azure Subscription) requires the
    logged in user to be assigned the **License Admin** role in the Cloudneeti
    application.

-   Microsoft Azure **Global AD Administrator** role is required for App
    Registration of the Cloudneeti application and granting access rights to the
    Cloudneeti application.

-   The Microsoft Azure **Subscription Owner** role is required for providing
    Cloudneeti application required read access to the Azure Subscription.

### Required Permissions

Cloudneeti application will be granted five read permissions to Azure AD and
Azure subscriptions. Four of these permissions are optional. Each optional read
permission is linked to a number of security policies where this permission is
needed for data collection. If an optional permission will not be provided,
Cloudneeti application will not be able to collect the data for the related
policies. Excluded security policies by permission are listed later in this
document.

| Object | Role / Permission                                                 | Portal to use     | Required Role               | Step     | Type      | Policies     |
|------|-------------------------------------------------------------|-------------------|--------------------|----------|-----------|--------------|
| Azure Active Directory | Directory Read All Microsoft Graph              | Microsoft Azure   | Global AD Admin    | STEP 1   | optional  | 5            |
| Azure Subscription | Reader              | Microsoft Azure   | Subscription Owner | STEP 2   | mandatory | 0            |
| Azure Subscription | Custom role | Microsoft Azure   | Subscription Owner | STEP 3   | optional  | 11           |
| Azure Subscription | Custom role | Microsoft Azure   | Subscription Owner | STEP 3   | optional  | 1            |
| Key Vault | Access Policy   | Microsoft Azure   | Subscription Owner | STEP 4   | optional  | 1            |

## STEP 1: Create new Azure App Registration Manually or using Azure powershell script


The following steps are executed by the Microsoft Azure **Global AD
Administrator** role on the Microsoft Azure Portal.

The Cloudneeti application can be registered either manually or using automation
script.

### 1.1 Manual Steps

Following manual steps allow you to understand the actual steps and permissions needed to create the Azure Application. If you prefer to automate this steps, please refer to 1.1 (Automated) section

#### Create new Azure App Registration 

Login to [Azure Portal](https://portal.azure.com/){target=_blank} with **Global AD Administrator** role.

1.  Select **Azure Active Directory** in the primary menu

2.  Select **App Registrations** in the secondary menu

3.  Click on **New Registration**

    ![Service Principal - Azure Portal](.././images/azureSubscriptions/AzureManual_AddSP.png)

4. Enter the name, for example "Cloudneeti"
5. Click **Register**     
    
    ![Service Principal - Azure Portal](.././images/azureSubscriptions/AzureManual_Register.png#thumbnail)

6. **Copy to clipboard** and paste the Application id to your notepad

    ![Service Principal - Azure Portal](.././images/azureSubscriptions/Azure_AppReg_App_ID.png#thumbnail)

#### Add Client Secret

1.	Click on **new client secret** in **Certificates & secrets** section
2.	Add **Description** and select expiry time 
3.	Click on **Add** 
4.	**Copy** to clipboard and paste the Client Secret to your notepad. **Note:** You will not be able to copy this value after you move away from this screen.

    ![Client Secret](.././images/azureSubscriptions/AzureSP_CaptureClientSecret.png#thumbnail)

#### Grant admin consent for API permissions
**This step is optional**

Add Read All Microsoft Graph permissions and grant admin consent

This step is needed to gain access to Azure AD related policies. If the customer
doesn’t want to grant Cloudneeti application access to customer’s Azure AD, this
step can be skipped. The Cloudneeti application will not be able to provide
Azure AD related security policy information.

1. Click **API Permissions**
2. Click **Add permission** and add the following information:

    | API             | Permission Name                | Type        |
    |-----------------|--------------------------------|-------------|
    | Microsoft.Graph | Directory.Read.All [Refer here](https://docs.microsoft.com/en-us/graph/permissions-reference#directory-permissions){target=_blank} | Application |

3. Click on **Grant admin consent for …** button in the Grant consent section. 

    ![Service Principal - Azure Portal](.././images/azureSubscriptions/Azure_API_Permissions.png#thumbnail)


### 1.1 Automated Steps

Automated steps allow you to apply repeatability and consistency in provisioning. These steps replace 1.1 (Manual) section above.

#### Create new Azure App Registration 

##### Prerequisites 
The below steps are required for registering Cloudneeti application in Azure Tenant using PowerShell script.

| Activity             | Description                |
|----------------------|----------------------------|
| 1.	Download and review **PowerShell script** for creation of the service principal | The PowerShell script is used to create a service principal in Azure Tenant AD: [Download Link.](https://github.com/Cloudneeti/docs_cloudneeti/blob/master/scripts/Create-ServicePrincipal-AzureOnboarding.ps1){target=_blank} |
| 2.	**Workstation**: Ensure you have the latest PowerShell version (v5 and above) | Verify PowerShell version by running the following command<br>`$PSVersionTable.PSVersion`<br>on the workstation where you will run the ServicePrincipal creation script. If PowerShell version is lower than 5, then follow this link for installation of a later version: [Download Link.](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell?view=powershell-6){target=_blank} |
| 3.	**Workstation:** Before executing the script, make sure there are no restrictions in running the PowerShell script  | Use this PowerShell command:<br>``Set-ExecutionPolicy ` ``<br>``-Scope Process ` ``<br>``-ExecutionPolicy Bypass``<br>PowerShell contains built-in execution policies that limit its use as an attack vector. By default, the execution policy is set to Restricted, which is the primary policy for script execution. The bypass allows for running scripts and keeps the lowered permissions isolated to just the current running process. |
| 4.	**Workstation:** Install Azure Modules to execute PowerShell commands within service principal automation script | ``Install-Module ` ``<br>``-Name AzureAD ` ``<br>``-MinimumVersion 2.0.0.131``<br><br>It is a roll-up module for the Azure Resource Manager cmdlets. |

##### Register Cloudneeti Application

Use the Create-ServicePrincipal-AzureOnboarding.ps1 script to create and register a Cloudneeti Application.

1. Open PowerShell in administrator mode.
2. Go to the directory where Create-ServicePrincipal-AzureOnboarding.ps1 was downloaded earlier.
3. Run the below command to create a service principal
    <pre>
    <code>```
    .\Create-ServicePrincipal-AzureOnboarding.ps1 `
        -azureActiveDirectoryId <Active_Directory_Id> `
        -servicePrincipalName <data_collector_name> `
        -expirationPeriod 1year
    ```</code>
    </pre>
    
4. The script will prompt the login screen
5. Log in with Global AD Administrator or Application Administrator user credentials.
6. Store service principal information from the output in a notepad. This information will be needed while onboarding the Azure account in the Cloudneeti portal.
 
    ![Service Principal Screenshot](.././images/azureSubscriptions/Azure_SP_Creatoin.png#thumbnail)

**Note:**<br>In case the user doesn’t want to provide the Microsoft Graph permissions given in section Azure Active Directory Permissions, you can use the disableADPolicies switch in the Create-ServicePrincipal-AzureOnboarding.ps1 command:
    <pre>
	<code>```
    .\Create-ServicePrincipal-AzureOnboarding.ps1 `
        -azureActiveDirectoryId <Active_Directory_Id> `
        -servicePrincipalName <data_collector_name> `
        -expirationPeriod 1year `
        -disableADPolicies
	```</code>
	</pre>
    
##### Grant admin consent for API permissions

**This step is optional**

1.	Login to [Azure Portal](https://portal.azure.com/){target=_blank} with **Global AD Administrator role**.
2.	Click on **Azure Active Directory** 
3.	Select **App registrations**
4.	Select Cloudneeti Application

    ![Service Principal - Azure Portal](.././images/azureSubscriptions/Grant_Permission.png#thumbnail)
     
 5. Go to **API permissions** (1)
 6. Click **Add a permission** (2)
 7. Click on the **Grant admin consent for…** (3) in the Grant consent section.
 8. A notification is displayed (4) “Successfully granted admin consent for the requested permissions”

    ![Grant permission ](.././images/azureSubscriptions/Azure_API_Permissions.png#thumbnail)

## STEP 2: Grant access to Cloudneeti registered app existing

Reader role need to be granted to the Cloudneeti App registered in the previous step

The following steps are done by Microsoft Azure **Subscription Owner** role.

### 2.1 Grant Azure Subscription Reader role

**This step is mandatory**

Add reader role for Cloudneeti application in Azure Subscription.

Login to [Azure Portal](https://portal.azure.com/){target=_blank} with Microsoft Azure **Subscription Owner** role.

1.	Go to the subscription’s **Access control (IAM)** in the third level menu
2.	Click on the **Add** button and select **Add role assignment**
3.	Select **Reader** role and Cloudneeti
4.	Select **Save** to complete the role assignment

    ![Assign role](.././images/azureSubscriptions/Azure_Assign_Role.png#thumbnail)
 
### 2.3 Collect information

The Cloudneeti application **License Admin** requires this information to add an Azure subscription as a cloud account.


| Information                              |Portal to use      |User                |
|------------------------------------------|-------------------|--------------------|
| Azure Directory ID                       | Microsoft Azure   | Subscription Owner |
| Azure Active Directory Domain name       | Microsoft Azure   | Subscription Owner |
| Registered Cloudneeti Application ID     | Microsoft Azure   | Subscription Owner |
| Registered Cloudneeti Application Secret | Microsoft Azure   | Subscription Owner |

#### Azure Directory Id and Domain Name

1.  Navigate to **Azure Active Directory** (1)

2.  Copy **Domain Name** (2) to a notepad

3.  Copy **Directory ID** (3) to a notepad

    ![Azure Directory](.././images/azureSubscriptions/Azure_Directory_ID.png#thumbnail)

#### Registered Cloudneeti Application ID 

1.  Select **Azure Active Directory** in the primary menu

2.  Select **App Registrations** in the secondary menu

3.  Select Cloudneeti Application registered in [step 1](.././azureSubscriptions/#step-1-create-new-azure-app-registration-manually-or-using-azure-powershell-script)

    ![Azure Domain](.././images/azureSubscriptions/Grant_Permission.png#thumbnail)

4.  Copy the Cloudneeti Application id
    ![Azure Domain](.././images/azureSubscriptions/Azure_AppReg_App_ID.png#thumbnail)

#### Registered Cloudneeti Application Secret 

1.  Select **Azure Active Directory** in the primary menu

2.  Select **App Registrations** in the secondary menu

3.  Select Cloudneeti Application registered in [step 1](.././azureSubscriptions/#step-1-register-cloudneeti-application-manually-or-using-azure-powershell-script)

4.  Click on **new client secret** in **Certificates & secrets** section

5.  Add **Description** and select expiry time

6.  Click on **Add**

7.  **Copy to clipboard** and paste the Client Secret to your notepad. **Note:**
    You will not be able to copy this value after you move away from this
    screen.
    ![Application Secret](.././images/azureSubscriptions/AzureSP_CaptureClientSecret.png#thumbnail)


## STEP 3: Grant access to Azure subscription additional roles
**This step is optional**

[Azure custom role](https://docs.microsoft.com/en-us/azure/role-based-access-control/custom-roles) needs to be granted to the Cloudneeti App registered in the previous step with following permission.

Custom role with permission **"Microsoft.Web/sites/config/list/action"** for Azure Subscription level scope.

-   The Cloudneeti application needs "Microsoft.Web/sites/config/list/action" action present in [Website Contributor role](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#custom-role-with-permission-microsoftwebsitesconfiglistaction) in order to collect authentication and authorization configuration of Web/API/Mobile/Function Apps which is hosted on the App Service Plan. The current subscription Reader role given doesn't have sufficient permissions to collect web site configuration details.

-   If the custom role with "Microsoft.Web/sites/config/list/action" is not assigned, Cloudneeti application will not be able to collect data of security policies [listed here.](.././grantAccessToAzureSubscriptionAdditionalRoles/#custom-role-with-permission-microsoftwebsitesconfiglistaction)

Custom role with permission **"Microsoft.Storage/storageAccounts/listkeys/action"** for Azure Subscription level scope.

-   Cloudneeti needs "Microsoft.Storage/storageAccounts/listkeys/action" action present in [Storage Account Contributor role](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage) in order to collect metadata configuration of blobs.  The current subscription [Reader role](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#reader) given doesn't have sufficient permissions to list blob keys. 

-   If the custom role with "Microsoft.Storage/storageAccounts/listkeys/action" is not assigned, Cloudneeti application will not be able to collect data of security policies [listed here.](.././grantAccessToAzureSubscriptionAdditionalRoles/#custom-role-with-permission-microsoftstoragestorageaccountslistkeysaction)


The following roles need to be granted to the Cloudneeti App registered in the previous step. Please follow [link](../../onboardingGuide/grantAccessToAzureSubscriptionAdditionalRoles/){target=_blank} for steps.

## STEP 4: Grant access to key vaults 
**This step is optional.**
The Cloudneeti application requires special permission on desired key vaults to get policy data related to secrets. 
If the Key Vault access policy is not added, Cloudneeti application will not be able to collect data of security policies [listed here](.././grantAccessToKeyVaults/#key-vault-list){target=_blank}.

Please follow [link](../../onboardingGuide/grantAccessToKeyVaults/){target=_blank} for steps.

## STEP 5: Advanced Security configurations 
**This step is optional.**
An Azure Automation Account resource is deployed to collect data for additional security policies listed here . The Azure Active Directory control plane exposes the data only through PowerShell that needs to run under a Global AD reader credential.

To ensure that Cloudneeti does not ever store/have access to a global AD reader, it is recommended to deploy a small PowerShell script under customer’s control in their own Azure subscription. The metadata collected after running a script is then pushed to a Cloudneeti API that you registered during the Cloudneeti API key generation.

Please follow [link](../../onboardingGuide/azureAdvancedSecurityConfigurations/){target=_blank} for steps.

## STEP 6: Enable Azure Security Center audit policies

Enable pull integration with Azure Security Center free tier using either manual steps or automated scripts. 
Automated scripts will update configurations to enable data collection for the policies [listed here](../../onboardingGuide/enableASCAuditPolicies/#asc-policy-list){target=_blank}.

Note : Please note that it is not required to have Azure Defender enabled (ASC Standard tier).

Please follow [link](../../onboardingGuide/enableASCAuditPolicies/){target=_blank} for steps.

## STEP 7: Configure OS baseline and Vulnerability Assessment Solution
**This step is optional.** 
Enabling Auto Provisioning of Azure Security Center monitoring agent and connect VMs to OMS workspace allows various OS baselines as defined by CIS automatically light up on the Cloudneeti dashboards.

Deploy partner Vulnerability Assessment Solution in Azure Security Center and installing the solution on multiple VMs allows to provide visibility into protection status and threat protection.

Please follow [link](../../onboardingGuide/azureVulnerability/){target=_blank} for steps.


## STEP 8: Configure Cloudneeti agent on AKS, AKS Engine and VM based Kubernetes Clusters
**This step is optional.** 

Cloudneeti includes and extends Azure Security center recommendations for AKS by deploying a Cloudneeti agent to Azure Kubernetes Cluster. A docker container agent is deployed to collect data for additional security policies. Cloudneeti then provides out-of-box mappings for all 13+ compliance frameworks included in the product. 

Please follow [link](../../onboardingGuide/configureCloudneetiAgentInAKS/){target=_blank} for steps.

## STEP 9: Add Azure Subscription

The following steps are done by Cloudneeti application **License Admin** role.

### 9.1 Activate the License

1.  Log in to the Cloudneeti application with **License Admin** role.
2.  Click on **Activate License**
    ![Activate License](.././images/azureSubscriptions/Activate_License.png#thumbnail)

### 9.2 Add Cloud Account

1.  Select cloud connector for **Microsoft Azure**
    ![Add Account](.././images/azureSubscriptions/Azure_Select_Connector_Type.png#thumbnail)
2.  Fill in the Account Name, Domain name, Azure Tenant Id (Domain ID) Azure
    Application ID and Azure Application Password.
    ![Add Account](.././images/azureSubscriptions/Azure_Create_Account.png#thumbnail)
3.  Click on **Get Subscriptions** to get the list of Azure subscriptions that
    Cloudneeti application can access in the selected azure tenant. If your
    subscription does not exist on the list then please check access to service
    principal
4.  **Select Subscription** in the dropdown menu
5.  Click **Save & Continue**
    ![Add Account](.././images/azureSubscriptions/Add_Azure_Account_Select_Subscription.png#thumbnail)
6.  You will receive a confirmation that the Azure subscription has been added.
    ![Add Account](.././images/azureSubscriptions/Account_Success.png#thumbnail)

### 9.3 Data Collection and verfication

Once the Azure subscription is added to the cloud account under Cloudneeti
License, it requires about 5 minutes for the data to be collected and processed,
before they can be displayed in Cloudneeti dashboards.


1.  Select **Dashboard** on the menu

2.  Review the data on dashboard
    ![Data Collection](.././images/azureSubscriptions/Dashboard.png#thumbnail)

    Congratulations! You have added an Azure subscription to Cloudneeti application.

4. Verify [cloud account health status](../../onboardingGuide/azureAccountHealthStatus/) for prerequisite permissions and configurations verfied on every scan.   


**Note:**
Cloudneeti uses the App Registration (aka service principal) to register Cloudneeti’s MPN ID (4758633) as a Partner to your Azure subscription. It usually takes about a month for Microsoft to reflect this association on the [Customer's Partner Admin Link (PAL) portal page](https://portal.azure.com/#blade/Microsoft_Azure_Billing/managementpartnerblade){target=_blank}.
 
Microsoft’s PAL program makes it easier for Cloudneeti to be recognized as a cloud partner to the customer. This allows Microsoft to share information to Cloudneeti on the health of Azure Subscription (Active/Disabled) and Account Management Support (Technical/Billing) as and when requested by Customer.
For more information, refer to the documentation link here [Link a Partner ID to your Azure accounts](https://docs.microsoft.com/en-us/azure/billing/billing-partner-admin-link-started){target=_blank}.


## Next Steps

### Onboard another Microsoft Azure Subscription to the Cloudneeti application

Please follow [STEP 1](../../onboardingGuide/azureSubscriptions/#step-1-create-new-azure-app-registration-manually-or-using-azure-powershell-script) to [STEP 8](../../onboardingGuide/azureSubscriptions/#step-8-configure-cloudneeti-agent-on-aks) for required prerequisites configurations. Then add Azure subscription to Cloudneeti Application using below steps:

#### 1. Azure subscription is in same Azure Active Directory as of already added Cloud accounts.

1. Navigate to **Cloud Accounts** (2) page in **Configutrations** (1)

2. Click **Add Cloud Account** (3)

    ![Add another account](.././images/azureSubscriptions/another_1.png#thumbnail)

2. Select **License** to add a Cloud account 

    ![Add another account](.././images/azureSubscriptions/another_2.png#thumbnail)

3. Select cloud connector as **Azure**

    ![Add another account](.././images/azureSubscriptions/another_3.png#thumbnail)

4. **Select existing Tenant**

    ![Add another account](.././images/azureSubscriptions/another_4a.png#thumbnail)

5. Fill in the **Account Name**

6. Click **Get Subscription**

    ![Add another account](.././images/azureSubscriptions/another_4b.png#thumbnail)

7. This will list subscriptions in the selected azure tenant. If your subscription does not exist in list then please check access to Cloudneeti Application is as stated in[prerequisite step 2](../../onboardingGuide/azureSubscriptions/#step-2-grant-access-to-cloudneeti-registered-app-existing) 

8. Select **subscription** to onboard new cloud account.

    ![Add another account](.././images/azureSubscriptions/another_4c.png#thumbnail)

9. **Save**

10. You will receive a confirmation that the Azure subscription has been added.
    ![Add Account](.././images/azureSubscriptions/Account_Success.png#thumbnail)


#### 2. Azure subscription is in different Azure Active Directory as of already added Cloud accounts.

1. Navigate to **Cloud Accounts** (2) page in **Configutrations** (1)

2. Click **Add Cloud Account** (3)

    ![Add another account](.././images/azureSubscriptions/another_1.png#thumbnail)

2. Select **License** to add a Cloud account 

    ![Add another account](.././images/azureSubscriptions/another_2.png#thumbnail)

3. Select cloud connector as **Azure**

    ![Add another account](.././images/azureSubscriptions/another_3.png#thumbnail)

4. Keep **Select existing Tenant** blank

    ![Add another account](.././images/azureSubscriptions/another_4a.png#thumbnail)

5. Fill in the 
    **Account Name**
    **Domain name**
    **Azure Tenant Id (Domain ID)**, 
    **Azure Application ID** 
    and **Azure Application Password**

6. Click **Get Subscription**

    ![Add another account](.././images/azureSubscriptions/another_5.png#thumbnail)

7. This will list subscriptions in the selected azure tenant. If your subscription does not exist in list then please check access to Cloudneeti Application is as stated in[prerequisite step 2](../../onboardingGuide/azureSubscriptions/#step-2-grant-access-to-cloudneeti-registered-app-existing) 

8. Select **subscription** to onboard new cloud account.

    ![Add another account](.././images/azureSubscriptions/another_6.png#thumbnail)

9. **Add Account**

    ![Add another account](.././images/azureSubscriptions/another_7.png#thumbnail)

10. You will receive a confirmation that the Azure subscription has been added.
    
    ![Add Account](.././images/azureSubscriptions/Account_Success.png#thumbnail)


## Security Polices with required roles, permissions

The following Security Policies will be excluded if one or multiple roles are
not assigned.

| Permissions                                                  | Number of Excluded Security Policies     |
|--------------------------------------------------------------|------------------------------------------|
| Read All Microsoft Graph permissions                         | 5         |
| Reader role for Azure Subscription level scope.              | 0         |
| Custom role with permission 'Microsoft.Web/sites/config/list/action' | 11        |
| Custom role with permission 'Microsoft.Storage/storageAccounts/listkeys/action' | 1        |
| Key Vault access policies for specific managed Key Vaults    | 1         |

### Microsoft Graph

Microsoft graph permissions are needed to collect data for Azure AD related
security policies listed below.

| Policy Title   | AAD Entity Used for Evaluating Misconfiguration  | Data Stored in Cloudneeti Data Store   |
|---------------|--------------------------------------------------|----------------------------------------|
| Ensure that AD Application keys are rotated before they expires   |*passwordCredentials*<br><br>Metadata information contained within the data entity will be key start-date, end-date, and expiry policies. No actual values are retrievable.| <ul><li>AD Application Name</li><li>AD Application ID</li><li>Expiry Date</li></ul> |       
| Ensure that Service Principal Certificate are renewed before it expires | *keyCredentials*<br><br>Metadata information contained within the data involves start-date and end-date. Refer to documentation [here](https://docs.microsoft.com/en-us/powershell/module/azuread/new-azureadserviceprincipalkeycredential?view=azureadps-2.0){target=_blank}.| <ul><li>AD Application Name</li><li>AD Application ID</li><li>Expiry Date</li></ul> |
| Ensure that there are no guest users | *userType*<br><br>Member or guest. | <ul><li>No data is stored in the Cloudneeti database. This policy only retrieves the count of total users and how many are guest users.</li></ul> |
| Enforce the policy to set Password to ‘always' expire in Azure Active Directory for all Organization Users | *passwordPolicies*<br><br>Metadata involving the length of the password, password strength, and password restrictions. Refer to documentation [here](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-sspr-policy#password-policies-that-only-apply-to-cloud-user-accounts){target=_blank}. | <ul><li>No data is stored in the Cloudneeti database. This policy only retrieves the count of all organization users and how many of them have set ‘Password always expired’ to ‘On’.</li></ul>  |
| Ensure that Azure resources are accessible only through Organization Accoun | *userType*<br><br>Member or [guest](https://docs.microsoft.com/en-us/azure/active-directory/b2b/what-is-b2b){target=_blank}. | <ul><li>No data is stored in the Cloudneeti database. This policy only retrieves the count of external users in an organization who can access resources under the Azure Subscription.</ul></li> |

<!-- ## Configuration

[Configure Notifications](../../administratorGuide/configureNotifications/){target=_blank}
 -->

##	OFFBOARDING

### Delete App Registration for each Azure Subscription


Login to [Azure Portal](https://portal.azure.com/){target=_blank} with **Subscription Owner**
role.

Cloudneeti application registration created during onboarding an Azure Subscription should be deleted which will remove permissions and assigned roles on subscription/subscriptions.

1.  Go to **Azure Active Directory**

2.  Click on **App Registration**

3.  Select **Cloudneeti Application** which has role assignment to Azure
    Subscription to be offboarded

4.  Click on **Delete** to remove Cloudneeti Application registration
	![Azure Offboarding](.././images/azureSubscriptions/Azure_Offboarding.png#thumbnail)

### Delete cloud account in Cloudneeti application 

Please send a request to [support@cloudneeti.com](mailto:support@cloudneeti.com) to delete this cloud account under your license.