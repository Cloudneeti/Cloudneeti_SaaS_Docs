# Azure Subscription Onboarding Guide
## Onboarding Steps

The following steps are required to onboard Microsoft Azure to the Cloudneeti application.

![Onboarding Steps](.././images/azureSubscriptions/Onboarding_Steps.png#thumbnail_1)

1.  [**Registering the Cloudneeti application**](.././azureSubscriptions/#step-1-register-cloudneeti-application-manually-or-using-azure-powershell-script) includes registering the
    Cloudneeti application with Azure tenant, providing access to Microsoft
    Graph and granting admin consent to the Cloudneeti application.

2.  [**Granting access to the Azure subscription**](.././azureSubscriptions/#step-2-grant-access-to-cloudneeti-registered-app) includes giving the Cloudneeti
    application reader access to the Azure subscription and collecting Subscription ID, Directory ID, Domain Name information.

3. [**Grant access to Azure subscription additional roles (Optional)**](../../onboardingGuide/grantAccessToAzureSubscriptionAdditionalRoles/) includes giving the Cloudneeti
    application access to the Azure subscription, assigning below roles:
    Backup Reader Role
    Website Contributor Role
    Storage Account Contributor Role
    Network Contributor Role

4. [**Grant access to key vaults (Optional)**](../../onboardingGuide/grantAccessToKeyVaults/) includes giving the Cloudneeti application special permission on desired key vaults to get policy data related to secrets.

5. [**Advance Security configuration (Optional)**](../../onboardingGuide/azureAdvanceSecurityConfiguration/) includes adding a script to the customer’s Azure account and granting the required access rights.

    Advanced security configuration (step 5) requires a Cloudneeti PowerShell agent to be installed in an Azure subscription under the same tenant where the Azure subscription is located. The Cloudneeti PowerShell agent retrieves (A) additional configuration information from the Azure Active Directory  (there are no Azure APIs to retrieve this information) and pushes (B) this information as a JSON file to the Cloudneeti application.

6. [**Configure quick wins (Optional)**](../../onboardingGuide/azureQuickWins/) includes updating configurations and settings to make the Azure Cloud account compliant for listed policies using scripts.

7. [**Adding Azure subscription**](.././azureSubscriptions/#step-7-add-azure-subscription) includes adding Azure subscription information to the respective Cloud Account and waiting until the first data collection is complete.

| S. No. | Step                                      | Portal to use  | Role                    | Type      | Policies     |
|---|-------------------------------------------|----------------|-------------------------|-------------------|-------------------------|
| 1  | Register Cloudneeti application           | Microsoft Azure| Global AD Administrator | mandatory | 0            |
| 2  | Grant access to Azure subscription        | Microsoft Azure| Subscription Owner      | mandatory | 0            |
| 3  | Grant access to Azure subscription additional roles | Microsoft Azure| Subscription Owner           | optional  | 39            |
| 4 | Grant access to key vaults                | Microsoft Azure| Subscription Owner          | optional  | 1            |
| 5 | Advance Security configuration            | Microsoft Azure| Subscription Owner, Global AD Reader          | optional  | 18            |
| 6 | Configure quick wins                      | Microsoft Azure| Subscription Owner           | optional  | 137            |
| 7 | Add Azure subscription                    | Cloudneeti     | License Admin           | mandatory | 0            |

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
| Azure Subscription | Website contributor | Microsoft Azure   | Subscription Owner | STEP 3   | optional  | 15           |
| Azure Subscription | Storage Account Contributor | Microsoft Azure   | Subscription Owner | STEP 3   | optional  | 1            |
| Azure Subscription | Network Contributor Role  | Microsoft Azure   | Subscription Owner | STEP 3   | optional  | 1           |
| Key Vault | Access Policy   | Microsoft Azure   | Subscription Owner | STEP 4   | optional  | 1            |

## STEP 1: Register Cloudneeti application Manually or using Azure powershell script


The following steps are executed by the Microsoft Azure **Global AD
Administrator** role on the Microsoft Azure Portal.

The Cloudneeti application can be registered either manually or using automation
script.

### 1.1 Manual Steps

#### Register Cloudneeti Application 

Login to [Azure Portal](https://portal.azure.com/) with **Global AD Administrator** role.

1.  Select **Azure Active Directory** in the primary menu

2.  Select **App Registrations** in the secondary menu

3.  Click on **New Registration**

    ![Service Principal - Azure Portal](.././images/azureSubscriptions/AzureManual_AddSP.png#thumbnail)

4. Enter the name, for example "Cloudneeti"
5. Click **Register**     
    
    ![Service Principal - Azure Portal](.././images/azureSubscriptions/AzureManual_Register.png#thumbnail)

6.	**Copy to clipboard** and paste the Application id to your notepad

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
    | Microsoft.Graph | Directory.Read.All [Refer here](https://docs.microsoft.com/en-us/graph/permissions-reference#directory-permissions) | Application |

3. Click on **Grant admin consent for …** button in the Grant consent section. 

    ![Service Principal - Azure Portal](.././images/azureSubscriptions/Azure_API_Permissions.png#thumbnail)


### 1.2 Automated Steps
#### Prerequisites 
The below steps are required for registering Cloudneeti application in Azure Tenant using PowerShell script.

| Activity             | Description                |
|----------------------|----------------------------|
| 1.	Download and review **PowerShell script** for creation of the service principal | The PowerShell script is used to create a service principal in Azure Tenant AD: [Download Link.](https://github.com/Cloudneeti/docs_cloudneeti/blob/master/scripts/Create-ServicePrincipal-AzureOnboarding.ps1) |
| 2.	**Workstation**: Ensure you have the latest PowerShell version (v5 and above) | Verify PowerShell version by running the following command<br>`$PSVersionTable.PSVersion`<br>on the workstation where you will run the ServicePrincipal creation script. If PowerShell version is lower than 5, then follow this link for installation of a later version: [Download Link.](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell?view=powershell-6) |
| 3.	**Workstation:** Before executing the script, make sure there are no restrictions in running the PowerShell script  | Use this PowerShell command:<br>``Set-ExecutionPolicy ` ``<br>``-Scope Process ` ``<br>``-ExecutionPolicy Bypass``<br>PowerShell contains built-in execution policies that limit its use as an attack vector. By default, the execution policy is set to Restricted, which is the primary policy for script execution. The bypass allows for running scripts and keeps the lowered permissions isolated to just the current running process. |
| 4.	**Workstation:** Install Azure Modules to execute PowerShell commands within service principal automation script | ``Install-Module ` ``<br>``-Name AzureAD ` ``<br>``-MinimumVersion 2.0.0.131``<br><br>It is a roll-up module for the Azure Resource Manager cmdlets. |

#### Register Cloudneeti Application

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
    
#### Grant admin consent for API permissions

**This step is optional**

1.	Login to [Azure Portal](https://portal.azure.com/) with **Global AD Administrator role**.
2.	Click on **Azure Active Directory** 
3.	Select **App registrations**
4.	Select Cloudneeti Application

    ![Service Principal - Azure Portal](.././images/azureSubscriptions/Grant_Permission.png#thumbnail)
     
 5. Go to **API permissions** (1)
 6. Click **Add a permission** (2)
 7. Click on the **Grant admin consent for…** (3) in the Grant consent section.
 8. A notification is displayed (4) “Successfully granted admin consent for the requested permissions”

    ![Grant permission ](.././images/azureSubscriptions/Azure_API_Permissions.png#thumbnail)

## STEP 2: Grant access to Cloudneeti registered app 

The following roles need to be granted to the Cloudneeti App registered in the previous step

1.	Reader role for Azure Subscription level scope.
2.	Backup reader role for Azure Subscription level scope.
3.	Website contributor role for Azure Subscription level scope.
4.  Key Vault access policies for specific managed Key Vaults.

The following steps are done by Microsoft Azure **Subscription Owner** role.

### 2.1 Grant Azure Subscription Reader role

**This step is mandatory**

Add reader role for Cloudneeti application in Azure Subscription.

Login to [Azure Portal](https://portal.azure.com/) with Microsoft Azure **Subscription Owner** role.

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

#### Azure Directory ID

1.  Click on **Azure Active Directory** on the primary menu

2.  Click on **Properties** on the secondary menu

3.  Copy **Directory ID** to a notepad
    ![Azure Directory](.././images/azureSubscriptions/Azure_Directory_ID.png#thumbnail)

#### Azure AD Domain Name

1.  Click on **Azure Active Directory** on the primary menu

2.  Click on **Overview** on the secondary menu

3.  Copy **Domain name** to a notepad
    ![Azure Domain](.././images/azureSubscriptions/Azure_Domain_Name.png#thumbnail)

#### Registered Cloudneeti Application ID 

1.  Select **Azure Active Directory** in the primary menu

2.  Select **App Registrations** in the secondary menu

3.  Select Cloudneeti Application registered in [step1](.././azureSubscriptions/#step-1-register-cloudneeti-application)
    ![Azure Domain](.././images/azureSubscriptions/Grant_Permission.png#thumbnail)

4.  Copy the Cloudneeti Application id
    ![Azure Domain](.././images/azureSubscriptions/Azure_AppReg_App_ID.png#thumbnail)

#### Registered Cloudneeti Application Secret 

1.  Select **Azure Active Directory** in the primary menu

2.  Select **App Registrations** in the secondary menu

3.  Select Cloudneeti Application registered in [step 1](.././azureSubscriptions/#step-1-register-cloudneeti-application)

4.  Click on **new client secret** in **Certificates & secrets** section

5.  Add **Description** and select expiry time

6.  Click on **Add**

7.  **Copy to clipboard** and paste the Client Secret to your notepad. **Note:**
    You will not be able to copy this value after you move away from this
    screen.
    ![Application Secret](.././images/azureSubscriptions/AzureSP_CaptureClientSecret.png#thumbnail)

## [STEP 3: Grant access to Azure subscription additional roles](../../onboardingGuide/grantAccessToAzureSubscriptionAdditionalRoles/)

## [STEP 4: Grant access to key vaults](../../onboardingGuide/grantAccessToKeyVaults/) 

## [STEP 5: Advance Security configuration](../../onboardingGuide/azureAdvanceSecurityConfiguration/) 

## [STEP 6: Configure quick wins](../../remediation/azureQuickWins/)

## STEP 7: Add Azure Subscription

The following steps are done by Cloudneeti application **License Admin** role.

### 7.1 Activate the License

1.  Log in to the Cloudneeti application with **License Admin** role.
2.  Click on **Activate License**
    ![Activate License](.././images/azureSubscriptions/Activate_License.png#thumbnail)

### 7.2 Add Cloud Account

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

### 7.3 Data Collection

Once the Azure subscription is added to the cloud account under Cloudneeti
License, it requires about 5 minutes for the data to be collected and processed,
before they can be displayed in Cloudneeti dashboards.

1.  Select **Dashboard** on the menu

2.  Review the data on dashboard
    ![Data Collection](.././images/azureSubscriptions/Dashboard.png#thumbnail)

Congratulations! You have added an Azure subscription to Cloudneeti application.

**Note:**
Cloudneeti uses the App Registration (aka service principal) to register Cloudneeti’s MPN ID (4758633) as a Partner to your Azure subscription. It usually takes about a month for Microsoft to reflect this association on the [Customer's Partner Admin Link (PAL) portal page](https://portal.azure.com/#blade/Microsoft_Azure_Billing/managementpartnerblade).
 
Microsoft’s PAL program makes it easier for Cloudneeti to be recognized as a cloud partner to the customer. This allows Microsoft to share information to Cloudneeti on the health of Azure Subscription (Active/Disabled) and Account Management Support (Technical/Billing) as and when requested by Customer.
For more information, refer to the documentation link here [Link a Partner ID to your Azure accounts](https://docs.microsoft.com/en-us/azure/billing/billing-partner-admin-link-started).


## Security Polices with required roles, permissions

The following Security Policies will be excluded if one or multiple roles are
not assigned.

| Permissions                                                  | Number of Excluded Security Policies     |
|--------------------------------------------------------------|------------------------------------------|
| Read All Microsoft Graph permissions                         | 5                                        |
| Reader role for Azure Subscription level scope.              | 0                                        |
| Backup reader role for Azure Subscription level scope.       | 4                                        |
| Website contributor role for Azure Subscription level scope. | 15                                       |
| Key Vault access policies for specific managed Key Vaults    | 1                                        |

### Microsoft Graph

Microsoft graph permissions are needed to collect data for Azure AD related
security policies listed below.

| Control No | Policy Title   | AAD Entity Used for Evaluating Misconfiguration  | Data Stored in Cloudneeti Data Store   |
|-----------|---------------|--------------------------------------------------|----------------------------------------|
| 1700.1   | Ensure that AD Application keys are rotated before they expires   |*passwordCredentials*<br><br>Metadata information contained within the data entity will be key start-date, end-date, and expiry policies. No actual values are retrievable.| <ul><li>AD Application Name</li><li>AD Application ID</li><li>Expiry Date</li></ul> |       
| 1600.11   | Ensure that Service Principal Certificate are renewed before it expires | *keyCredentials*<br><br>Metadata information contained within the data involves start-date and end-date. Refer to documentation [here](https://docs.microsoft.com/en-us/powershell/module/azuread/new-azureadserviceprincipalkeycredential?view=azureadps-2.0).| <ul><li>AD Application Name</li><li>AD Application ID</li><li>Expiry Date</li></ul> |
| 1600.12   | Ensure that there are no guest users | *userType*<br><br>Member or guest. | <ul><li>No data is stored in the Cloudneeti database. This policy only retrieves the count of total users and how many are guest users.</li></ul> |
| 1600.4    | Enforce the policy to set Password to ‘always' expire in Azure Active Directory for all Organization Users | *passwordPolicies*<br><br>Metadata involving the length of the password, password strength, and password restrictions. Refer to documentation [here](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-sspr-policy#password-policies-that-only-apply-to-cloud-user-accounts). | <ul><li>No data is stored in the Cloudneeti database. This policy only retrieves the count of all organization users and how many of them have set ‘Password always expired’ to ‘On’.</li></ul>  |
| 1600.8    | Ensure that Azure resources are accessible only through Organization Accoun | *userType*<br><br>Member or [guest](https://docs.microsoft.com/en-us/azure/active-directory/b2b/what-is-b2b). | <ul><li>No data is stored in the Cloudneeti database. This policy only retrieves the count of external users in an organization who can access resources under the Azure Subscription.</ul></li> |

## Configuration

[Configure Notifications](../../administratorGuide/configureNotifications/)



##	OFFBOARDING

### Delete App Registration for each Azure Subscription


Login to [Azure Portal](https://portal.azure.com/) with **Subscription Owner**
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