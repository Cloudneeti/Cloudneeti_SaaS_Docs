# Azure Subscription Onboarding Guide
## Overview
### Onboarding Steps

The following steps are required to onboard Microsoft Azure to the Cloudneeti application.

![Onboarding Steps](.././images/azureSubscriptions/Onboarding_Steps.png#thumbnail)

1.  **Registering the Cloudneeti application** includes registering the
    Cloudneeti application with Azure tenant, providing access to Microsoft
    Graph and granting admin consent to the Cloudneeti application.

2.  **Granting access to the Azure subscription** includes giving the Cloudneeti
    application access to the Azure subscription, assigning a Website
    contributor role, and collecting Subscription ID, Directory ID, Domain Name
    information.

3.  **Adding Azure subscription** includes adding Azure subscription information
    to the respective Cloud Account and waiting until the first data collection
    is complete.

| Nr | Step                           | Portal to use | Role                |
|--------|------------------------------------|-------------------|-------------------------|
| 1      | Register Cloudneeti application    | Microsoft Azure   | Global AD Administrator |
| 2      | Grant access to Azure subscription | Microsoft Azure   | Subscription Owner      |
| 3      | Add Azure subscription             | Cloudneeti        | License Admin           |

Required Roles
--------------

One or more people with the following roles are required to complete Microsoft
Azure onboarding process.

| **Nr** | **Pre-requisite Role**  | **Portal to use**      |
|--------|-------------------------|------------------------|
| 1      | License Admin           | Cloudneeti application |
| 2      | Global AD Administrator | Microsoft Azure        |
| 3      | Subscription Owner      | Microsoft Azure        |

-   Onboarding a cloud account (in this case an Azure Subscription) requires the
    logged in user to be assigned the **License Admin** role in the Cloudneeti
    application.

-   Microsoft Azure **Global AD Administrator** role is required for App
    Registration of the Cloudneeti application and granting access rights to the
    Cloudneeti application.

-   The Microsoft Azure **Subscription Owner** role is required for providing
    Cloudneeti application required read access to the Azure Subscription.

Required Permissions
--------------------

Cloudneeti application will be granted five read permissions to Azure AD and
Azure subscriptions. Four of these permissions are optional. Each optional read
permission is linked to a number of security policies where this permission is
needed for data collection. If an optional permission will not be provided,
Cloudneeti application will not be able to collect the data for the related
policies. Excluded security policies by permission are listed later in this
document.

| **Information**                                             | **Portal to use** | **Role**           | **Step** | **Type**  | **Policies** |
|-------------------------------------------------------------|-------------------|--------------------|----------|-----------|--------------|
| Directory Read All Microsoft Graph permissions              | Microsoft Azure   | Global AD Admin    | STEP 1   | optional  | 5            |
| Reader role for Azure Subscription level scope              | Microsoft Azure   | Subscription Owner | STEP 2   | mandatory | 0            |
| Backup reader role for Azure Subscription level scope       | Microsoft Azure   | Subscription Owner | STEP 2   | optional  | 4            |
| Website contributor role for Azure Subscription level scope | Microsoft Azure   | Subscription Owner | STEP 2   | optional  | 15           |
| Key Vault access policies for specific managed Key Vaults   | Microsoft Azure   | Subscription Owner | STEP 2   | optional  | 1            |

STEP 1: Register Cloudneeti application
=======================================

The following steps are executed by the Microsoft Azure **Global AD
Administrator** role on the Microsoft Azure Portal.

The Cloudneeti application can be registered either manually or using automation
script.

Manual Steps
------------

### Register Cloudneeti Application 

Login to [Azure Portal](https://portal.azure.com/) with **Global AD
Administrator** role.

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

Add Microsoft Graph permissions and grant admin consent


This step is needed to gain access to Azure AD related policies. If customer doesn’t want to grant Cloudneeti application access to customer’s Azure AD, this step can be skipped. Cloudneeti application will not be able to provide Azure AD related security policies information [listed here.](https://docs.cloudneeti.com/administratorGuide/azureSubscriptions/#security-policies-exceptions)

1. Click on **Azure Active Directory**
2. Click **API Permissions**
3. Click **Add permission** and add the following information:

    | API             | Permission Name                | Type        |
    |-----------------|--------------------------------|-------------|
    | Microsoft.Graph | Directory.Read.All [Refer here](https://docs.microsoft.com/en-us/graph/permissions-reference#directory-permissions) | Application |

4. Click on **Grant admin consent for …** button in the Grant consent section. 

    ![Service Principal - Azure Portal](.././images/azureSubscriptions/Azure_API_Permissions.png#thumbnail)


### Automated Steps
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
        -expirationPeriod 1year
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

## 2.Grant access to Azure subscription
The following roles need to be granted to the Cloudneeti App registered in the previous step

1.	[Reader role for Azure Subscription level scope.](.././azureSubscriptions/#grant-azure-subscription-reader-role)
2.	[Backup reader role for Azure Subscription level scope.](.././azureSubscriptions/#grant-azure-subscription-backup-reader-role)
3.	[Website contributor role for Azure Subscription level scope.](.././azureSubscriptions/#grant-azure-subscription-website-contributor-role)
4.	[Key Vault access policies for specific managed Key Vaults](.././azureSubscriptions/#add-key-vault-access-policy-for-specific-managed-key-vaults)

The following steps are done by Microsoft Azure **Subscription Owner** role.

### Grant Azure Subscription Reader role
Add reader role for Cloudneeti application in Azure Subscription.

Login to [Azure Portal](https://portal.azure.com/) with Microsoft Azure **Subscription Owner** role.

1.	Go to the subscription’s **Access control (IAM)** in the third level menu
2.	Click on the **Add** button and select **Add role assignment**
3.	Select **Reader** role and Cloudneeti
4.	Select **Save** to complete the role assignment

    ![Assign role](.././images/azureSubscriptions/Azure_Assign_Role.png#thumbnail)
 
### Grant Azure Subscription Backup Reader Role 
**This step is optional**

The Cloudneeti application requires Backup Reader role access to the Subscription in order to view application settings. 

If the Backup Reader Role is not assigned, Cloudneeti application will not be able to collect data of security policies [listed here](.././azureSubscriptions/#require-backup-reader-role).

1.	Go to the subscription’s **Access control (IAM)** in the third level menu
2.	Click on the **Add** button and select **Add role assignment**
3.	Select **Reader** role and Cloudneeti
4.	Select **Save** to complete the role assignment
 
     ![Assign role](.././images/azureSubscriptions/Backup_Reader_Role.png#thumbnail)

### Grant Azure Subscription Website Contributor Role
**This step is optional**

The Cloudneeti application requires Website Contributor role access to the Subscription in order to view application settings. 

If the Website Contributor Role is not assigned, Cloudneeti application will not be able to collect data of security policies [listed here.](.././azureSubscriptions/#require-website-contributor-role)

1.	Go to the subscription’s **Access control (IAM)** in the menu
2.	Click **Add** and select **Add role assignment**
3.	Select **Website Contributor** role and Cloudneeti application
4.	Click **Save** to complete the role assignment

    ![Assign role](.././images/azureSubscriptions/Website_Contributor_Role.png#thumbnail)

### Add Key Vault access policy for specific managed Key Vaults
**This step is optional**

The Cloudneeti application requires special permission on desired key vaults to get policies data related to secrets. 
If the Key Vault access policy is not added, Cloudneeti application will not be able to collect data of security policies [listed here](.././azureSubscriptions/#require-backup-reader-role).

1.	Login to Azure portal.
2.	Go to the **Key vaults** (1)
3.	Select **key vault** (2)

    ![Access Policy](.././images/azureSubscriptions/Add_KeyVault_Access.png#thumbnail)

4.	Select **Access policies** (1)
5.	Click on **Add Access Policy** (2)
   
    ![Access Policy](.././images/azureSubscriptions/Add_Access_Policy.png#thumbnail)

6.	Select **List** in **Secret Permission** (1)
7.	Select **Principal** as Cloudneeti Application registered in [step 1](.././azureSubscriptions/#1-register-cloudneeti-application) (2)
8.	Click **Add** access policy (3)
   
   ![Access Policy](.././images/azureSubscriptions/Select_Permission.png#thumbnail)

Note: Perform this step on all the key vaults present in your subscription.

### Collect information

The Cloudneeti application **License Admin** requires this information to add an Azure subscription as a cloud account.


| Information                              |Portal to use      |User                |
|------------------------------------------|-------------------|--------------------|
| Azure Subscription ID                    | Microsoft Azure   | Subscription Owner |
| Azure Directory ID                       | Microsoft Azure   | Subscription Owner |
| Azure Directory Domain name              | Microsoft Azure   | Subscription Owner |
| Registered Cloudneeti Application ID     | Microsoft Azure   | Subscription Owner |
| Registered Cloudneeti Application Secret | Microsoft Azure   | Subscription Owner |

#### Azure Subscription ID

1.  Choose your Azure AD tenant by selecting your **Azure subscription** in the top right corner of the page
2.  Select **Default Directory**

    ![Azure Subscription](.././images/azureSubscriptions/Azure_Subscription_Id.png#thumbnail)

3.  Click on **Subscriptions** (1) on the primary menu

4.  Select the desired **Azure subscription** (2)

    ![Azure Subscription](.././images/azureSubscriptions/Select_Azure_Subscription.png#thumbnail)

5.  Copy **Subscription ID** to a notepad

    ![Azure Subscription](.././images/azureSubscriptions/Azure_AppReg_App_ID.png#thumbnail)

#### Azure Directory ID

1.  Click on **Azure Active Directory** on the primary menu

2.  Click on **Properties** on the secondary menu

3.  Copy **Directory ID** to a notepad

    ![Azure Directory](.././images/azureSubscriptions/Azure_Directory_ID.png#thumbnail)

#### Azure Domain Name

1.  Click on **Azure Active Directory** on the primary menu

2.  Click on **Custom domain names** on the secondary menu

3.  Copy **Domain name** to a notepad

    ![Azure Domain](.././images/azureSubscriptions/DomainName.png#thumbnail)

#### Registered Cloudneeti Application ID 

1.  Select **Azure Active Directory** in the primary menu

2.  Select **App Registrations** in the secondary menu

3.  Select Cloudneeti Application registered in [step1](.././azureSubscriptions/#1-register-cloudneeti-application)

    ![Azure Domain](.././images/azureSubscriptions/Grant_Permission.png#thumbnail)

4.  Copy the Cloudneeti Application id

    ![Azure Domain](.././images/azureSubscriptions/Azure_AppReg_App_ID.png#thumbnail)

#### Registered Cloudneeti Application Secret 

1.  Select **Azure Active Directory** in the primary menu

2.  Select **App Registrations** in the secondary menu

3.  Select Cloudneeti Application registered in [step 1](.././azureSubscriptions/#1-register-cloudneeti-application)

4.  Click on **new client secret** in **Certificates & secrets** section

5.  Add **Description** and select expiry time

6.  Click on **Add**

7.  **Copy to clipboard** and paste the Client Secret to your notepad. **Note:**
    You will not be able to copy this value after you move away from this
    screen.

    ![Application Secret](.././images/azureSubscriptions/AzureSP_CaptureClientSecret.png#thumbnail)

## 3. Add Azure Subscription to Cloudneeti

The following steps are done by Cloudneeti application **License Admin** role.

### Activate the License

1.  Log in to the Cloudneeti application with **License Admin** role.

2.  Click on **Activate License**

    ![Activate License](.././images/azureSubscriptions/Activate_License.png#thumbnail)

### Add Cloud Account

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

### Data Collection

Once the Azure subscription is added to the cloud account under Cloudneeti
License, it requires about 5 minutes for the data to be collected and processed,
before they can be displayed in Cloudneeti dashboards.

1.  Select **Dashboard** on the menu

2.  Review the data on dashboard

    ![Data Collection](.././images/azureSubscriptions/Dashboard.png#thumbnail)

Congratulations! You have added an Azure subscription to Cloudneeti application.

## Annexure - Security Policies Exceptions
### Require Microsoft Graph permissions

Microsoft graph permissions are needed to collect data for Azure AD related
security policies listed below.

| Policy-Id | Policy Name   | AAD Entity Used for Evaluating Misconfiguration  | Data Stored in Cloudneeti Data Store   |
|-----------|---------------|--------------------------------------------------|----------------------------------------|
| 1800.1    | Ensure that AD Application Keys are Rotated Before They Expire   |*passwordCredentials*<br><br>Metadata information contained within the data entity will be key start-date, end-date, and expiry policies. No actual values are retrievable.| <ul><li>AD Application Name</li><li>AD Application ID</li><li>Expiry Date</li></ul> |       
| 1100.11   | Ensure that Service Principal Certificate is Renewed Before It Expires | *keyCredentials*<br><br>Metadata information contained within the data involves start-date and end-date. Refer to documentation [here](https://docs.microsoft.com/en-us/powershell/module/azuread/new-azureadserviceprincipalkeycredential?view=azureadps-2.0).| <ul><li>AD Application Name</li><li>AD Application ID</li><li>Expiry Date</li></ul> |
| 1100.12   | Ensure that There are No Guest Users | *userType*<br><br>Member or guest. | <ul><li>No data is stored in the Cloudneeti database. This policy only retrieves the count of total users and how many are guest users.</li></ul> |
| 1100.4    | Enforce the Policy to Set Password to ‘Always’ Expire in Azure Active Directory for All Organization Users | *passwordPolicies*<br><br>Metadata involving the length of the password, password strength, and password restrictions. Refer to documentation [here](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-sspr-policy#password-policies-that-only-apply-to-cloud-user-accounts). | <ul><li>No data is stored in the Cloudneeti database. This policy only retrieves the count of all organization users and how many of them have set ‘Password always expired’ to ‘On’.</li></ul>  |
| 1100.8    | Ensure that Azure Resources are Accessible Only Through the Organization Account | *userType*<br><br>Member or [guest](https://docs.microsoft.com/en-us/azure/active-directory/b2b/what-is-b2b). | <ul><li>No data is stored in the Cloudneeti database. This policy only retrieves the count of external users in an organization who can access resources under the Azure Subscription.</ul></li> |

### Require List permissions on Key-vault
Special permission on key vaults is needed to collect data for security policies
listed below.

| Policy-Id     | Policy Name                                                       | Category       |
|---------------|-------------------------------------------------------------------|----------------|
| 1800.2        | Ensure that the expiry date is set on all Secrets in a Key Vault  | Key Management |

### Require Backup Reader role

Backup Reader role access is needed to collect data for security policies listed
below.

| Policy-Id  | Policy Name   | Category               |
|------------|---------------|------------------------|
| 1700.10       | Ensure that Backup feature is configured for App Service deployed on Standard and above App Service Plan   | Business continuity and DR |
| 1700.11       | Ensure that Backup feature is configured for API Apps deployed on Standard and above App Service Plan      | Business continuity and DR |
| 1700.12       | Ensure that Backup feature is configured for Function Apps deployed on Standard and above App Service Plan | Business continuity and DR |
| 1700.13       | Ensure that Backup feature is configured for Mobile Apps deployed on Standard and above App Service Plan   | Business continuity and DR |

### Require Website Contributor role

Website Contributor role access is needed to collect data for security policies
listed below.

| Policy ID     | Policy Name                                                                          | Category                              |
|---------------|--------------------------------------------------------------------------------------|---------------------------------------|
| 1900.42       | Ensure that 'App Insights' are configured for Azure Web Apps                         | Azure - Compute (PaaS and Serverless) |
| 1900.43       | Ensure that WEBSITE_LOAD_CERTIFICATES parameter is not set to '\*' for Mobile Apps   | Azure - Compute (PaaS and Serverless) |
| 1900.44       | Ensure that WEBSITE_LOAD_CERTIFICATES parameter is not set to '\*' for API Apps      | Azure - Compute (PaaS and Serverless) |
| 1900.51       | Ensure that latest supported Node.js version is used for Web Application             | Azure - Compute (PaaS and Serverless) |
| 1900.63       | Ensure that WEBSITE_LOAD_CERTIFICATES parameter is not set to '\*' for Function Apps | Azure - Compute (PaaS and Serverless) |
| 1900.72       | Ensure that 'App Service Authentication' is enabled for Function apps                | Azure - Compute (PaaS and Serverless) |
| 1900.73       | Ensure that 'App Service Authentication' is enabled for API apps                     | Azure - Compute (PaaS and Serverless) |
| 1900.74       | Ensure that 'App Service Authentication' is enabled for Mobile apps                  | Azure - Compute (PaaS and Serverless) |
| 1900.75       | Ensure that 'App Service Authentication' is enabled for Web apps                     | Azure - Compute (PaaS and Serverless) |
| 1900.78       | Ensure that latest supported Node.js version is used for Function Apps               | Azure - Compute (PaaS and Serverless) |
| 1900.79       | Ensure that latest supported Node.js version is used for API Apps                    | Azure - Compute (PaaS and Serverless) |
| 1900.80       | Ensure that latest supported Node.js version is used for Mobile Apps                 | Azure - Compute (PaaS and Serverless) |
| 1900.84       | Ensure that 'App Insights' are configured for Azure Mobile Apps                      | Azure - Compute (PaaS and Serverless) |
| 1900.85       | Ensure that 'App Insights' are configured for Azure Function Apps                    | Azure - Compute (PaaS and Serverless) |
| 1900.86       | Ensure that 'App Insights' are configured for Azure API Apps                         | Azure - Compute (PaaS and Serverless) |


## NEXT STEPS

[Configure Notifications](./../configureNotifications/)