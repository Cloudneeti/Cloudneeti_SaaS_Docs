# Overview
## Onboarding Steps

The following steps are required to onboard Office 365 to Cloudneeti
application.

![onBoarding Steps](.././images/onboardingOffice365Subscription/Onboarding_Steps.png#thumbnail)

**1. Registering Cloudneeti application** includes registering the Cloudneeti
application with the Azure Active Directory (AD) tenant, providing access to
Microsoft Graph and granting admin consent to the Cloudneeti application.

**2. Adding the Office 365 subscription** includes adding Office 365
subscription information to the respective Cloud Account and waiting until the
first data collection is complete.

**3. Advanced security configuration** includes adding a script to the
customer’s Azure account and granting the required access rights.

Advanced security configuration (step 3) requires a Cloudneeti PowerShell agent
to be installed in an Azure subscription under the same tenant where the Office
365 subscription is located. The Cloudneeti PowerShell agent retrieves (A)
additional configuration information from the Office 365 subscription (there are
no Office 365 APIs to retrieve this information) and pushes (B) this information
as a JSON file to the Cloudneeti application.

![Advanced Security Configuration](.././images/onboardingOffice365Subscription/Advanced_Security_Configuration.png#thumbnail)

| Nr	 | Step                                                         | Product                      | Role                                                 |
|--------|--------------------------------------------------------------|------------------------------|------------------------------------------------------|
| 1      | Register Cloudneeti application                              | Microsoft Azure AD           | Global AD Administrator                              |
| 2      | Add Office 365 subscription                                  | Cloudneeti                   | License Admin                                        |
| 3      | Advanced security configuration (optional)                   |                              |                                                      |
|        | a. Create application password                               | Office 365 My Account portal | Global AD Administrator                              |
|        | b. Generate Cloudneeti API key                               | Cloudneeti API portal        | License Admin                                        |
|        | c. Provision M365 Data Collector to your Azure Subscription  | Microsoft Azure              | Subscription Owner or Azure Subscription Contributor |
|        | d .Apply delete lock                                         | Microsoft Azure              | Subscription Owner or Azure Subscription Contributor |

### Required Roles


People with the following roles are required to complete the Office 365
onboarding process.

| Nr     | Role                    | Product                |
|--------|-------------------------|------------------------|
| 1      | License Admin           | Cloudneeti application |
| 2      | Global AD Administrator | Microsoft Azure AD     |
| 3      | Global Administrator    | Microsoft Office 365   |
| 4      | Subscription Owner      | Microsoft Azure        |

The Cloudneeti application **License Admin** is assigned to an individual in the
customer’s organization who will be responsible for the configuration of the
respective Cloudneeti application License.

The Microsoft Azure **Global AD Administrator** role is required for App
Registration of the Cloudneeti application and granting access rights to the
Cloudneeti application.

Microsoft Office 365 **Global Administrator** role is required for App
Registration of the Cloudneeti application and granting access rights to the
Cloudneeti application.

For Advanced security configuration (optional) the following roles are required.

| **Nr** | **Role**                                                   | **Product**            |
|--------|------------------------------------------------------------|------------------------|
| 1      | License Admin                                              | Cloudneeti application |
| 2      | Azure Subscription Owner or Azure Subscription Contributor | Microsoft Azure        |

The Microsoft Azure **Subscription Owner or Contributor** role is required to
provision a PowerShell agent to pull advanced security configuration information
and ingest to the Cloudneeti application.

### Required Permissions


The Cloudneeti application will be granted three read permissions to the Azure
AD and Office 365 subscriptions. Four of these permissions are optional. Each
optional permission is linked to a number of security policies where this
permission is needed for data collection. If an optional permission is not
provided, Cloudneeti application will not collect the data for the related
policies. Security policies that require such permissions are listed later in
this document.

| Information                                          | Portal to use     | Role               | Step     |
|------------------------------------------------------|-------------------|--------------------|----------|
| Directory Read All Microsoft Graph permissions       | Microsoft Azure   | Global AD Admin    | STEP 1   |
| Security Events Read All Microsoft Graph permissions | Microsoft Azure   | Global AD Admin    | STEP 1   |
| Advanced security configuration                      | Microsoft Azure   | Subscription Owner | STEP 3   |

## STEP 1: Register Cloudneeti Application


The following steps are executed by the Microsoft Azure **Global AD
Administrator** role.

Cloudneeti application can be registered either manually or using automation
script.

### Manual
#### Register Cloudneeti application

Login to [Azure Portal](https://portal.azure.com/) with **Global AD
Administrator** associated to your Office 365 Subscription role.

1.  Select **Azure Active Directory** associated to your Office 365 Subscription
    in the primary menu
2.  Select **App Registrations** in the secondary menu
3.  Click on **New Registration**
![New Registration](.././images/onboardingOffice365Subscription/New_Registration.png#thumbnail)
4.  Enter the name, for example "Cloudneeti"
5.  Click **Register**
![Register](.././images/onboardingOffice365Subscription/Register.png#thumbnail)
6.  **Copy to clipboard** and paste the Application id to your notepad
![Copy AppID](.././images/onboardingOffice365Subscription/Copy_AppID.png#thumbnail)

#### Add Client Secret

1.  Click on **new client secret** in **Certificates & secrets** section (1)

2.  Add **Description** and select expiry time

3.  Click on **Add** (2)

4.  **Copy to clipboard** (3) and paste the Client Secret to your notepad.
    **Note:** You will not be able to copy this value after you move away from
    this screen.

![Certificates & secrets](.././images/onboardingOffice365Subscription/Copy_to_Clipboard.png#thumbnail)

#### Grant admin consent for API permissions

Add Microsoft Graph permissions and grant admin consent

The Microsoft graph permission **Directory.Read.All** allows the app to read
data in the organization's directory, such as user attributes, groups, and
applications, without a signed-in user.

Microsoft graph permission **SecurityEvents.Read.All** allows the app to read
Office 365 Secure Score data. You can find more details about the Microsoft
Graph API
permission [here](https://docs.microsoft.com/en-us/graph/permissions-reference).

1.  Click **API Permissions**

2.  Select **Microsoft Graph**

![API Permissions](.././images/onboardingOffice365Subscription/API_Permissions.png#thumbnail)
3.  Select **Application**

![Application](.././images/onboardingOffice365Subscription/Application.png#thumbnail)
4.  Click **Add permission** and add the following information (1)

| API             | Permission Name                                                                                                     | Type        |
|-----------------|---------------------------------------------------------------------------------------------------------------------|-------------|
| Microsoft.Graph | Directory.Read.All [Refer here](https://docs.microsoft.com/en-us/graph/permissions-reference#directory-permissions) | Application |
| Microsoft.Graph | SecurityEvents.Read.All                                                                                             | Application |

5.  Click **Grant admin consent** in the Grant consent section (2)

![API Permission](.././images/onboardingOffice365Subscription/Grant_Admin_Consent.png#thumbnail)

### Automated


#### Prerequisites 

The below steps are required for registering the Cloudneeti application in Azure
Tenant using PowerShell script.

| Activity                                                                                                              | Description                                                                                                                                                                                                               |
|-----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1. Download and review **PowerShell script** for creation of the service principal                                    | The PowerShell script is used to create a service principal in Azure Tenant AD: [Download Link.](https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/Create-ServicePrincipal-Office365Onboarding.ps1) |
| 2. **Workstation:** Ensure you have the latest PowerShell version (v5 and above)                                      | Verify PowerShell version by running the following command<br>`$PSVersionTable.PSVersion`<br>on the workstation where you will run the ServicePrincipal creation script. If the PowerShell version is lower than 5, then follow this link for installation of a later version: [Download Link.]()|
| 3. **Workstation:** Before executing the script, make sure there are no restrictions in running the PowerShell script | Use this PowerShell command:<br>``Set-ExecutionPolicy ` ``<br>``-Scope Process ` ``<br>`-ExecutionPolicy Bypass`<br>PowerShell contains built-in execution policies that limit its use as an attack vector. By default, the execution policy is set to Restricted, which is the primary policy for script execution. The bypass allows for running scripts and keeps the lowered permissions isolated to just the current running process. |
| 4. **Workstation:** Install Azure Modules to execute PowerShell commands within service principal automation script   | ``Install-Module ` ``<br>``-Name AzureAD ` ``<br>`-MinimumVersion 2.0.0.131`<br>It is a roll-up module for the Azure Resource Manager cmdlets. |

#### Register Cloudneeti Application 

Use the Create-ServicePrincipal-Office365Onboarding.ps1 script to create and
register a Cloudneeti Application.

1.  Open PowerShell in administrator mode.

2.  Go to the directory where Create-ServicePrincipal-Office365Onboarding.ps1
    was downloaded earlier.

3.  Run the below command to create a service principal
<pre>
	<code>```
    .\Create-ServicePrincipal-Office365Onboarding.ps1 `
		-azureActiveDirectoryId <Active_Directory_Id> `
		-servicePrincipalName <data_collector_name> `
		-expirationPeriod 1year
    ```</code>
</pre>
4.  The script will prompt the login screen

5.  Log in with Global AD Administrator or Application Administrator user
    credentials.

6.  Store service principal information from the output in a notepad. This
    information will be needed while onboarding the Azure account in the
    Cloudneeti portal.

![Register Cloudneeti Application](.././images/onboardingOffice365Subscription/Register_Cloudneeti_Application.png#thumbnail)

#### Grant admin consent for API permissions

The Azure **Global AD Administrator** needs to grant permissions to the
Cloudneeti application to be able to collect the Azure AD data.

1.  Click **Azure Active Directory**
2.  Click **App registrations**
3.  Find and select Cloudneeti application under Display NameGo to **API
    permissions**
4.  Click **Grant admin consent** in the Grant consent section
5.  Review permissions as below listed (1)

| API             | Permission Name                                                                                                     | Type        |
|-----------------|---------------------------------------------------------------------------------------------------------------------|-------------|
| Microsoft.Graph | Directory.Read.All [Refer here](https://docs.microsoft.com/en-us/graph/permissions-reference#directory-permissions) | Application |
| Microsoft.Graph | SecurityEvents.Read.All                                                                                             | Application |

6.  Click **Grant admin consent** in the Grant consent section (2)
![Grant_Admin_Consent](.././images/onboardingOffice365Subscription/Grant_Admin_Consent.png#thumbnail)

### Collect Information


The Cloudneeti application **License Admin** requires this information to add an
Azure subscription as a cloud account.

| Information                              | Portal to use     | User               |
|------------------------------------------|-------------------|--------------------|
| Azure Directory ID                       | Microsoft Azure   | Subscription Owner |
| Azure Directory Domain name              | Microsoft Azure   | Subscription Owner |
| Registered Cloudneeti Application ID     | Microsoft Azure   | Subscription Owner |
| Registered Cloudneeti Application Secret | Microsoft Azure   | Subscription Owner |

#### Azure Directory ID

1.  Click on **Azure Active Directory** on the primary menu

2.  Click on **Properties** on the secondary menu

3.  Copy **Directory ID** to a notepad

![Directory ID](.././images/onboardingOffice365Subscription/Directory_ID.png#thumbnail)

#### Azure Domain Name

1.  Click on **Azure Active Directory** on the primary menu

2.  Click on **Custom domain names** on the secondary menu

3.  Copy **Domain name** to a notepad

![Azure Domain Name](.././images/onboardingOffice365Subscription/Domain_Name.png#thumbnail)

#### Registered Cloudneeti Application ID 

1.  Select **Azure Active Directory** in the primary menu

2.  Select **App Registrations** in the secondary menu

3.  Select Cloudneeti Application registered in [Step 1]()
![Registered Cloudneeti Application ID](.././images/onboardingOffice365Subscription/Cloudneeti_Application_ID.png#thumbnail)
4.  Copy the Cloudneeti Application id
![Cloudneeti Application id](.././images/onboardingOffice365Subscription/Copy_AppID.png#thumbnail)

#### Registered Cloudneeti Application Secret 

1.  Select **Azure Active Directory** in the primary menu

2.  Select **App Registrations** in the secondary menu

3.  Select Cloudneeti Application registered in [Step 1]()

4.  Click on **new client secret** in **Certificates & secrets** section (1)

5.  Add **Description** and select expiry time

6.  Click on **Add** (2)

7.  **Copy to clipboard** and paste the Client Secret to your notepad. **Note:**
    You will not be able to copy this value after you move away from this
    screen. (3)

![Registered Cloudneeti Application Secret](.././images/onboardingOffice365Subscription/Copy_to_Clipboard.png#thumbnail)

## STEP 2: Add Office 365 subscription


The following steps are done by the Cloudneeti application **License Admin**
role.

### Activate the License


1.  Log in to the Cloudneeti application with **License Admin** role.

2.  Click on **Activate License**

![Activate License](.././images/onboardingOffice365Subscription/Activate_License.png#thumbnail)

### Add Cloud Account


1.  Select cloud connector for **Office 365**

![Add Cloud Account](.././images/onboardingOffice365Subscription/Add_Cloud_Account.png#thumbnail)
2.  Fill in the Account Name, Domain name, Azure Tenant Id (Domain ID) Azure
    Application ID and Azure Application Password.
3.  Click on **Add Account**
![Add Account](.././images/onboardingOffice365Subscription/Add_Account.png#thumbnail)
4.  You receive a confirmation that Office 365 has been added and data
    collection started.
![confirmation](.././images/onboardingOffice365Subscription/Confirmation.png#thumbnail)

### Data Collection


Once Azure subscription is added to the cloud account under Cloudneeti License,
it requires about 5 minutes for the data to be collected and processed, before
they can be displayed in Cloudneeti dashboards.

1.  Select **Dashboard** on the menu
2.  Review the data on dashboard
![Dashboard](.././images/onboardingOffice365Subscription/Dashboard.png#thumbnail)

## STEP 3: Advanced security configuration


**This step is optional.**

The following steps are done by Microsoft Azure **Subscription Owner (or
Subscription Contributor)** role.

An Azure Automation Account resource is deployed to collect data for additional
security policies. The Office 365 control plane exposes the data only through
PowerShell that needs to run under a Global AD administrator credential (with
MFA access).

To ensure that Cloudneeti does not ever store/have access to a global AD
administrator, it is recommended to deploy a small PowerShell script under
customer’s control in their own Azure subscription. The metadata collected after
running a script is then pushed to a Cloudneeti API that you registered during
the Cloudneeti API key generation.

### Collect Information


| **Information**                                                                                 | **Source / Portal to use** | **User**                |
|-------------------------------------------------------------------------------------------------|----------------------------|-------------------------|
| [Cloudneeti License Id](#RANGE!_License_id)                                                     | Cloudneeti                 | License Admin           |
| [Cloudneeti Account Id ](#RANGE!_Account_id)                                                    | Cloudneeti                 | License Admin           |
| [Office Tenant Id ](#RANGE!_Azure_Subscription_ID)                                              | Cloudneeti                 | License Admin           |
| [Service Principal Id ](#RANGE!_Registered_Cloudneeti_Applicatio)                               | Cloudneeti                 | License Admin           |
| [Cloudneeti Environment ](#RANGE!_Cloudneeti_Artifacts_and_1)                                   | Cloudneeti Team            | License Admin           |
| [Cloudneeti API key](#RANGE!_Generate_Cloudneeti_API)                                           | Cloudneeti Team            | License Admin           |
| [Artifacts Name ](#RANGE!_Cloudneeti_Artifacts_and)                                             | Cloudneeti Team            | License Admin           |
| [Data Collector Version ](#RANGE!_Cloudneeti_Artifacts_and)                                     | Cloudneeti Team            | License Admin           |
| [Cloudneeti M365 data collector artifacts storage access Key](#RANGE!_Cloudneeti_Artifacts_and) | Cloudneeti Team            | License Admin           |
| [Cloudneeti data collector Service Principal secret](#RANGE!_Registered_Cloudneeti_Applicatio)  | Microsoft Azure            | Subscription Owner      |
| [Azure Subscription Id ](#RANGE!_Azure_Subscription_ID_1)                                       | Microsoft Azure            | Subscription Owner      |
| [Office Domain ](#RANGE!_Office_365_details)                                                    | Office 365 portal          | Office 365 Global Admin |
| [Office Admin Id ](#RANGE!_Create_application_password)                                         | Office 365 portal          | Office 365 Global Admin |
| [Office 365 App Password](#RANGE!_Create_application_password)                                  | Office 365 portal          | Office 365 Global Admin |

#### Cloudneeti license and account details

Login to Cloudneeti portal as a License Admin.

<em>**License id**</em>

1.  Navigate to **View License** under **Settings**

2.  Copy license ID and paste to notepad.

![License id](.././images/onboardingOffice365Subscription/License_Id.png#thumbnail)

<em>**Account id**</em>

1.  Navigate to **Manage Accounts** in **Settings**

2.  Copy account ID and paste to notepad.

![Manage Accounts](.././images/onboardingOffice365Subscription/Manage_Accounts.png#thumbnail)

#### Cloudneeti artifacts and data collector details

Contact Cloudneeti Team for:

-   Cloudneeti environment

-   ArtifactsName

-   DataCollectorVersion

-   ArtifactsAccessKey.

<em>**Azure details**</em>

Login to Azure portal <https://portal.azure.com> as subscription owner.

<em>**Azure Subscription ID**</em>

1.  Choose your Azure AD tenant by selecting your **Azure subscription** in the
    top right corner of the page
2.  Select **Default Directory**
![Default Directory](.././images/onboardingOffice365Subscription/Default_Directory.png#thumbnail)
3.  Click on **Subscriptions** (1) on the primary menu
4.  Select the desired **Azure subscription** (2)
![Azure subscription](.././images/onboardingOffice365Subscription/Azure_Subscription.png#thumbnail)
5.  Copy **Subscription ID** to a notepad
![Subscription ID](.././images/onboardingOffice365Subscription/Copy_AppID.png#thumbnail)

#### Generate Cloudneeti API key

<em>**Sign-up on Cloudneeti API portal.**</em>

1.  Go to API portal and Sign up: \< Environment \> portal.cloudneeti.com
    Example: trialportal.cloudneeti.com (check with your support/consulting team
    on the specific Cloudneeti platform environment you are planning an
    onboarding to)

2.  Fill the required fields in the sign-up form

3.  You will receive a confirmation mail for sign-up, Click on the confirmation
    link.

4.  The confirmation link will ask you for change password (info: You can use
    the password your used when signing up)

5.  You are signed up successfully

<em>**Retrieve and activate API key**</em>

Retrieve and activate your API key using the Cloudneeti API portal

1.  Click on **PRODUCTS**
2.  Select **Unlimited**
![Cloudneeti API](.././images/onboardingOffice365Subscription/Cloudneeti_API.png#thumbnail)
3.  Click on **Subscribe**
![Subscribe](.././images/onboardingOffice365Subscription/API_Subscribe.png#thumbnail)

This will notify Cloudneeti to activate your API subscription access. Please
wait for activation to be done. When Cloudneeti activates your subscription, you
will get an email notification.

Once you receive the confirmation, proceed with the following steps.

1.  Click on **Username**

2.  Select **Profile**

3.  Click on **Show**

4.  Copy the **Primary key** to your notepad.

![Primary key](.././images/onboardingOffice365Subscription/Primary_key.png#thumbnail)

#### Office 365 details

Office Admin id and office domain can be retrieved from the user id used for
signing-in like userid\@domain.com.

<em>**Enable MFA and Create application password**</em>

Cloudneeti platform queries and processes Office 365 meta-data using a
non-interactive login credential. As the background job processing is
non-interactive it’ll require a service account credential. The following is the
process outlined to create a secure service account credential.

Sign into your Office 365 portal (e.g. <https://outlook.office.com/mail/inbox>)
as global administrator.

1.  Choose **My Account Settings**

![My Account Settings](.././images/onboardingOffice365Subscription/My_Account_Settings.png#thumbnail)
2.  Select **Security & privacy**
3.  Select **Additional security verification**
4.  Click **Create and manage app passwords**
![Create and manage app passwords](.././images/onboardingOffice365Subscription/Manage_Password.png#thumbnail)
5.  Select **app passwords**
6.  Click **create**
7.  Get an app password
![App Password](.././images/onboardingOffice365Subscription/App_Password.png#thumbnail)

### Provision Office 365 data collector 


Login to Azure portal <https://portal.azure.com> as Subscription Contributor or
Subscription Owner access.

Switch to Azure AD with the Azure Subscription with pre-requisite access.

1.  Open **CloudShell**
2.  Click on **Cloudshell** icon on the navigation bar to open Cloudshell
3.  Choose PowerShell from shell drop down
4.  Select **storage**
![CloudShell](.././images/onboardingOffice365Subscription/CloudShell.png#thumbnail)
5.  Execute below command in Cloudshell to download the Cloudneeti data
    collector provisioning script.
<pre>
<code>```
	wget 
	https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/Provision-M365DataCollector.ps1 -O Provision-M365DataCollector.ps1
```</code>
</pre>
6.  Switch to the User directory
<pre>
<code>```
	cd \$User
```</code>
</pre>
7.  Run provisioning script with inline parameters
<pre>
<code>```
./Provision-M365DataCollector.ps1 `
	-CloudneetiLicenseId <Cloudneeti License Id> `
	-CloudneetiAccountId <Cloudneeti Account Id> `
	-CloudneetiEnvironment <Cloudneeti Environment> `
	-ServicePrincipalId <Cloudneeti Data Collector Service Principal Id> `
	-ArtifactsName <Cloudneeti office 365 Data Collector Artifact Name> `
	-DataCollectorVersion <Cloudneeti Office 365 Data Collector Version> `
	-OfficeDomain <Office 365 Domain Name> `
	-OfficeTenantId <Office 365 Tenant Id> `
	-OfficeAdminId <Office 365 Administator Id> `
	-AzureSubscriptionId <Azure Subscription Id where office 365 datacollector resouces will be created> `
	-DataCollectorName <Office 365 Data Collector Name> `
	-Location <Default EastUs2>
```</code>
</pre>
Note: Contact Cloudneeti Team for ArtifactsName, DataCollectorVersion and
ArtifactsAccessKey
8.  The script will execute and prompt you for below details:
   Cloudneeti API key </br>
   Cloudneeti data collector Service Principal secret </br>
   Cloudneeti M365 data collector artifacts storage access Key </br>
   Office 365 App Password </br>
9.  This will create a runbook inside automation account

### Apply delete lock


Apply delete lock to prevent accidental deletion of the data collection resource
group in your Azure Subscription.

1.  Navigate to M365 data collector resource group
    (**cloudneeti-m365-datacollector-rg**).

2.  Click on **Locks** (1)

3.  Click **Add** (2)

4.  Enter **Lock name** DoNotDelete (3)

5.  Select **Lock type** as Delete (4)

6.  Add **Notes** (Do not delete M365 data collector resource group) (5)

7.  Click **OK** (6)

![Apply Delete Lock](.././images/onboardingOffice365Subscription/Locks.png#thumbnail)

### Modify the data collection schedule

Set the automation account schedule before the daily Cloudneeti data collection
time.

1.  Go to **M365 data collector** resource group

2.  Select **Automation account**

3.  Click on **Schedules**

4.  Select **Schedule**
![Schedule](.././images/onboardingOffice365Subscription/Schedule.png#thumbnail)
5.  Modify the schedule **Time** (set time about 1 hour before the daily
    Cloudneeti data collection time)
6.  Click **Save**
![Modify and Save](.././images/onboardingOffice365Subscription/Modify_Save.png#thumbnail)

Cloudneeti portal will show details for policies from next scan.

## Security Policies that Require Permissions


The following Security Policies will be excluded if advanced security
configuration is not done.

### Advanced security configuration

The advanced security policy data collector enables the following 19 policies as
available in the Center for Internet Security (CIS) Microsoft 365 benchmark
(Reference
[here](https://www.cloudneeti.com/2019/01/assure-microsoft-365-security-and-compliance-with-cloudneeti/)).

| **Policy-Id** | **Policy Name**                                                                                                                                                    | **Category**                     |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| 1.6           | 1. (L1) Ensure modern authentication for SharePoint applications is required                                                                                       | Account / Authentication         |
| 2.2           | 2. (L2) Ensure calendar details sharing with external users is disabled                                                                                            | Application Permissions          |
| 2.3           | 3. (L2) Ensure Office 365 ATP SafeLinks for Office Applications is Enabled                                                                                         | Application Permissions          |
| 2.4           | 4. (L2) Ensure Office 365 ATP for SharePoint, OneDrive, and Microsoft Teams is Enabled                                                                             | Application Permissions          |
| 3.5           | 5. (L2) Ensure that external users cannot share files, folders, and sites they do not own                                                                          | Data Management                  |
| 4.10          | 6. (L1) Ensure that DKIM is enabled for all Exchange Online Domains                                                                                                | Email Security / Exchange Online |
| 4.1           | 7. (L1) Ensure Common Attachment Types Filter is set to ON                                                                                                         | Email Security / Exchange Online |
| 4.11          | 8. (L1) Ensure that SPF records are published for all Exchange Domains                                                                                             | Email Security / Exchange Online |
| 4.12          | 9. (L1) Ensure DMARC Records for all Exchange Online domains are published                                                                                         | Email Security / Exchange Online |
| 4.13          | 10. (L1) Ensure notifications for internal users sending malware is Enabled                                                                                        | Email Security / Exchange Online |
| 4.2           | 11. (L1) Ensure Exchange Online Spam Policies is set to copy and notify someone when a sender in your tenant has been blocked for sending excessive or spam emails | Email Security / Exchange Online |
| 4.4           | 12. (L1) Ensure Exchange Online mail transport rules do not whitelist specific domains                                                                             | Email Security / Exchange Online |
| 4.5           | 13. (L2) Ensure Client Rules Forwarding Block is enabled                                                                                                           | Email Security / Exchange Online |
| 4.9           | 14. (L1) Ensure that an anti-phishing policy has been created                                                                                                      | Email Security / Exchange Online |
| 5.1           | 15. (L1) Enable Microsoft 365 audit log search                                                                                                                     | Auditing                         |
| 5.10          | 16. (L1) Ensure account provisioning activity report is reviewed weekly                                                                                            | Auditing                         |
| 5.12          | 17. (L1) Ensure the spoofed domains report is review weekly                                                                                                        | Auditing                         |
| 5.6           | 18. (L1) Ensure user role group changes is reviewed at least every week                                                                                            | Auditing                         |
| 6.1           | 19. (L2) Ensure that document sharing is being controlled by domains with white/blacklist                                                                          | Storage                          |