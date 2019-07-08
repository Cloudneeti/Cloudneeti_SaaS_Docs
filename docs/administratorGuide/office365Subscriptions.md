# Office 365 Onboarding Guide
Onboarding an Office 365 subscription to Cloudneeti is the process of granting Cloudneeti platform access to the customer’s cloud accounts. The onboarding process is in two Parts: 

**Part 1: Onboarding Office 365 account**

**Part 2: Advanced security configuration** 

![m365Overview](.././images/office365Subscriptions/m365OnboardOverview.png#thumbnail)

Follow these steps to onboard an Office 365 Subscription to Cloudneeti:


| Step No | Description                                     | Portal                        |
|---|------------------------------------------|-------------------------------|
| 1 | Prerequisites |                     |
|   | **Part 1: Onboarding Office 365 account**    |                               |
| 2 | Register Cloudneeti Application in the Customer’s Azure AD | Azure AD portal or Powershell                    |
| 3 | Grant admin consent to the Service Principal          | Azure AD portal               |
| 4 | Add Office 365 Account to Cloudneeti     | Cloudneeti application portal |
| 5 | Verify Data Collection                   | Cloudneeti application portal |
| 6 | Notification Configuration               | Cloudneeti application portal |
|  | **Part 2: Advanced security configuration**  |                               |
| 7 | Create application password              | Office 365 My Account portal  |
| 8 | Generate Cloudneeti API key              | Cloudneeti API portal         |
| 9 | Provision M365 Data Collector to your Azure Subscription | Azure portal                  |
| 10 | Apply delete lock                        | Azure portal                  |




## 1 Prerequisites
Upon customer request, Cloudneeti license(s) will be configured and email invitation(s) will be sent to License Administrator(s). Additional users within Cloudneeti applications will be provisioned by the customer’s License Administrator.

The following activities need to be completed prior to onboarding.


| Users & Roles                            | Description                              | Part   |
|------------------------------------------|------------------------------------------|--------|
| 1. Engage a user with Global AD administrator rights  | The customer’s Azure administrator must have enough permissions in the Azure AD to create the required service principal for Cloudneeti.  | Part 1 |
| 2. Engage a user with Office 365 Global administrator role | The customer’s Office 365 administrator must have enough permissions to generate app password MFA enabled.  | Part 2 |
| 3. Engage a user to generate Cloudneeti API Key | Cloudneeti Team will help in generating Cloudneeti API key. | Part 2 |
| 4. Cloudneeti Artifacts Name, Data Collector Version and Artifacts Access Key | Cloudneeti Team will provide these details. | Part 2 |
| 5. Engage a user with contributor or owner access to the Azure subscription | Execute Office 365 data collector on-boarding script must be executed only on Azure CloudShell. | Part 2 |



| Readiness                                | Description                              |
|------------------------------------------|------------------------------------------|
| 1. Workstation: Ensure you have the latest PowerShell version (v5 and above)  | Verify PowerShell version by running the below command on the workstation where you will run the ServicePrincipal creation script.<br> `$PSVersionTable.PSVersion`  <br>If PowerShell version is lower than 5, then follow this link for installation of a later version: <a href="https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell?view=powershell-6" download>Download Link</a>. |
| 2. Workstation: Ensure there are no restrictions to run the PowerShell script   | Use this command: <br>**Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass** <br><br>PowerShell contains built-in execution policies that limit its use as an attack vector. By default, the execution policy is set to Restricted, which is the primary policy for script execution. The bypass allows for running scripts and keeps the lowered permissions isolated to just the current running process. |
| 3. Workstation: Ensure latest Azure AD modules to run Powershell commands. | **Install-Module -Name AzureAD -MinimumVersion 2.0.0.131**<br><br>It is a roll-up module for the Azure Resource Manager cmdlets.<br> |
| 4. Download and review PowerShell script for creation of the service principal | The PowerShell script is used to create a service principal in Azure Tenant AD: <a href="https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/Create-ServicePrincipal-Office365Onboarding.ps1" download>Download Link</a>. |
| 5. Have the Azure Directory/Tenant ID associated with your Office 365 subscription | This is a mandatory field for onboarding an Office 365 subscription to Cloudneeti. |




## Part 1: Onboarding Office 365 account

## 2	Register Cloudneeti Application in the Customer’s Azure AD
Registering Cloudneeti Service Principal in the Azure AD can be done manually or using automation script.  

#### 2.1 Manual
1. Register Cloudneeti Service Principal

    a. Login to [Azure Portal](https://portal.azure.com) with Global Administrator role

    b. Go to  Azure Active Directory in the sidebar then select App Registrations
    
    ![Service Principal - Azure Portal](.././images/azureSubscriptions/AzureManual_AddSP.png#thumbnail)

    c. Enter the Name for example "Cloudneeti" 
      
    d. Click on "Register" button to create application.
    
2. Add Client Secret to Cloudneeti Service Principal

    a. Click on "New Client Secret" in "Client Secret" section
    
    ![Client Secret](.././images/azureSubscriptions/Azure_SP_AddClientSecret.png#thumbnail)
    
    b. Add Description and select expiry time 
    c. Click on "Add" button
    d. Please copy and save the "Client Secret"
    
    ![Client Secret](.././images/azureSubscriptions/AzureSP_CaptureClientSecret.png#thumbnail)

3. Add the Microsoft Graph permissions 

    The Microsoft graph permission Directory.Read.All allows the app to read data in the organization's directory, such as user attributes, groups, and applications, without a signed-in user. Microsoft graph permission SecurityEvents.Read.All allow app to read Office 365 Secure Score data. You can find more details about Microsoft Graph API permission [here](https://docs.microsoft.com/en-us/graph/permissions-reference).

    a. Click on API Permissions

    ![Service Principal - Azure Portal](.././images/office365Subscriptions/APIPermission.png#thumbnail)

    b. Add below permission.     

    | API             | Permission Name                | Type        |
    |-----------------|--------------------------------|-------------|
    | Microsoft.Graph | Directory.Read.All | Application |
    | Microsoft.Graph | SecurityEvents.Read.All | Application |

    c. Click on the 'Grant admin consent’ button in the ‘Grant consent’ section.


#### 2.2 Automation
Use the ***`Create-ServicePrincipal-Office365Onboarding.ps1`*** script to create and register a Cloudneeti data collector application. 

1.	Open PowerShell in administrator mode. An administrative prompt is needed only to install missing Azure PowerShell modules.
2.	Change directory to where Create-ServicePrincipal-Office365Onboarding.ps1 was downloaded earlier.
3.	Run the below command to create service principal by replacing
    
    a. Active_Directory_Id with Azure directory id of Office 365 Subscription to be onboarded.
   
    b. data_collector_name with any friendly name for Cloudneeti data collector.
        <pre>
        <code>```
         .\Create-ServicePrincipal-Office365Onboarding.ps1 `
                -azureActiveDirectoryId <Active_Directory_Id> `
                -servicePrincipalName <data_collector_name> `
                -expirationPeriod 1year
        ```
        </code>
        </pre>


4.	The script will prompt the login screen; you need to log in with **Global AD Administrator** or **Application Administrator** user credentials.

5.	Store service principal information from the output in a secure place. This information **will be needed** while onboarding the Office 365 account in the Cloudneeti application.

    ![storeSPInfo](.././images/office365Subscriptions/storeSPInfo.png#thumbnail)

## 3	Grant admin consent to the Service Principal

The Azure AD Global Administrator needs to grant permissions to Cloudneeti in order to collect the Azure AD data. 

Follow the steps below to grant permission:

1. Log in to Azure Portal.
2. Click on ‘Azure Active Directory’.
3. Click on ‘Service principal’ in the ‘App registrations’ section.
4. Select Cloudneeti service principal.

    ![azurePortal](.././images/office365Subscriptions/azurePortal.png#thumbnail)

5. Go to 'API permissions' and confirm Microsoft Graph permissions.

6. Click on the 'Grant admin consent’ button in the ‘Grant consent’ section.

    ![APIPermission](.././images/office365Subscriptions/APIPermission.png#thumbnail)

## 4	Add Office 365 Account to Cloudneeti

1.	Log in to the Cloudneeti portal using the license admin user credentials.
2.	If the license is not activated, click on the ‘Activate License’ button to activate the license. This step is needed    if this is the first cloud account you are adding to the License.

    ![activateLicense](.././images/office365Subscriptions/activateLicense.png#thumbnail)

    OR

    If the license is already activated, 

    a. Please go to Settings > Manage Accounts on Cloudneeti portal
        ![Activate License](.././images/azureSubscriptions/Manage_Accounts.png#thumbnail)
    
    b. Click on "Add Cloud Account" button
        ![Activate License](.././images/azureSubscriptions/Add_Account.png#thumbnail)
        
    c. Select License to add cloud account
        ![Select License](.././images/azureSubscriptions/select_license.png#thumbnail)

3.	Select Office 365 connector.

    ![m365Connector](.././images/office365Subscriptions/m365Connector.png#thumbnail)

4.	Fill in the account and service principal information displayed in step 
2.1 or 2.2 output.
    ![accountInfo](.././images/office365Subscriptions/accountInfo.png#thumbnail) 

5.	Click on ‘Add Account’.

## 5	Verify Data Collection**

1.	Click on ‘Go To Dashboard’ to see the data.
    ![Success](.././images/office365Subscriptions/Success.png#thumbnail)

2.	Wait approx. 5 minutes for the data to be collected, processed, and rendered to the Cloudneeti Dashboard. 
    ![Dashboard](.././images/office365Subscriptions/Dashboard.png#thumbnail)

## 6	Notification Configuration

To receive email notifications from Cloudneeti Bot, please refer following steps.

1.	On Cloudneeti portal, navigate to settings
2.	Select desired License and Account 
3.	Click on configure button to select “Configure Notifications”
4.	Enter comma separated email addresses.

    ![configureNotification](.././images/office365Subscriptions/configureNotifications.png#thumbnail)

5.	Click on save button.

## Part 2: Advanced security configuration

An Azure Automation Account resource is deployed to collect data for additional 19 advanced security policies. Office 365 control plane exposes the data only through PowerShell that needs to run under a Global AD administrator credential (with MFA access). To ensure that Cloudneeti does not ever store/have access to a global AD administrator, the recommended way to deploy a small PowerShell script under customer’s control in their own Azure subscription. The metadata collected after running a script is then pushed to a Cloudneeti API that you have registered during the Cloudneeti API key generation procedure steps. 

The advanced security policy data collector enables the following 19 policies as available in the Center for Internet Security (CIS) Microsoft 365 benchmark. Refer [here](https://www.cloudneeti.com/2019/01/assure-microsoft-365-security-and-compliance-with-cloudneeti/) 


| Policy-Id | Policy Name                              | Category                         |
|-----------|------------------------------------------|----------------------------------|
| 1.6       | 1. (L1) Ensure modern authentication for SharePoint applications is required | Account / Authentication         |
| 2.2       | 2. (L2) Ensure calendar details sharing with external users is disabled | Application Permissions          |
| 2.3       | 3. (L2) Ensure Office 365 ATP SafeLinks for Office Applications is Enabled | Application Permissions          |
| 2.4       | 4. (L2) Ensure Office 365 ATP for SharePoint, OneDrive, and Microsoft Teams is Enabled | Application Permissions          |
| 3.5       | 5. (L2) Ensure that external users cannot share files, folders, and sites they do not own | Data Management                  |
| 4.10      | 6. (L1) Ensure that DKIM is enabled for all Exchange Online Domains | Email Security / Exchange Online |
| 4.1       | 7. (L1) Ensure Common Attachment Types Filter is set to ON | Email Security / Exchange Online |
| 4.11      | 8. (L1) Ensure that SPF records are published for all Exchange Domains | Email Security / Exchange Online |
| 4.12      | 9. (L1) Ensure DMARC Records for all Exchange Online domains are published | Email Security / Exchange Online |
| 4.13      | 10. (L1) Ensure notifications for internal users sending malware is Enabled | Email Security / Exchange Online |
| 4.2       | 11. (L1) Ensure Exchange Online Spam Policies is set to copy and notify someone when a sender in your tenant has been blocked for sending excessive or spam emails | Email Security / Exchange Online |
| 4.4       | 12. (L1) Ensure Exchange Online mail transport rules do not whitelist specific domains | Email Security / Exchange Online |
| 4.5       | 13. (L2) Ensure Client Rules Forwarding Block is enabled | Email Security / Exchange Online |
| 4.9       | 14. (L1) Ensure that an anti-phishing policy has been created | Email Security / Exchange Online |
| 5.1       | 15. (L1) Enable Microsoft 365 audit log search | Auditing                         |
| 5.10      | 16. (L1) Ensure account provisioning activity report is reviewed weekly | Auditing                         |
| 5.12      | 17. (L1) Ensure the spoofed domains report is review weekly | Auditing                         |
| 5.6       | 18. (L1) Ensure user role group changes is reviewed at least every week | Auditing                         |
| 6.1       | 19. (L2) Ensure that document sharing is being controlled by domains with white/black list | Storage                          |


## 7	Create application password
Cloudneeti platform queries and processes Office 365 meta-data using a non-interactive login credential. As the background job processing is non-interactive it’ll require a service account credential. 
The following is the process outlined to create a secure service account credential. 

1.	Sign in to your Office 365 portal (e.g. https://outlook.office.com/mail/inbox)

2.	Choose My Account Settings button on the right-hand side > Office 365 portal 

    ![m365MyAccount](.././images/office365Subscriptions/m365MyAccount.png#thumbnail)

3.	Choose Security & Privacy > Additional security verification, And Click on Create and manage app passwords option

    ![securityAndPrivacy](.././images/office365Subscriptions/securityAndPrivacy.png#thumbnail)       

4.	At the top of the page, choose App Passwords. and choose create to get an app password.

    ![createAppPassword](.././images/office365Subscriptions/createAppPassword.png#thumbnail) 

5.	**OR** You may see option "Add security info", on clicking choose "App password" option 

    ![addSecurityInfo](.././images/office365Subscriptions/addSecurityInfo.png#thumbnail)
    a.	Add security info

    ![addSecurityInfo1](.././images/office365Subscriptions/addSecurityInfo1.png#thumbnail)
    b.	Choose "App password", enter name for app password and click on "Next" button.

6.	Choose copy password to clipboard. You won't need to memorize this password.
    ![savePassword](.././images/office365Subscriptions/savePassword.png#thumbnail)


## 8	Generate Cloudneeti API key

1.	Sign-up on Cloudneeti API portal.

    a.	Go to API portal and Sign up: < Environment > portal.cloudneeti.com Example: trialportal.cloudneeti.com (check with your support/consulting team on the specific Cloudneeti platform environment you are planning an onboarding to)

    
    b.	Fill the required fields in the sign-up form

    
    c.	You will receive a confirmation mail for sign-up, Click on the confirmation link.

    
    d.	The confirmation link will ask you for change password (info: You can use a password which used while signup)

    
    e.	You are signed up successfully


2.	Retrieve and activate your API key using the Cloudneeti API portal 

    a.	Click on the PRODUCTS tab > Unlimited Option
    
    ![cloudneetiAPI](.././images/office365Subscriptions/cloudneetiAPI.png#thumbnail)  
    
    b.	Click on Subscribe & Confirm. (Note: This will notify to Cloudneeti team and Cloudneeti team will Active your API subscription access. Please wait for approval)
    
    ![Subscribe](.././images/office365Subscriptions/Subscribe.png#thumbnail)
    
    c.	Once Cloudneeti team activate your subscription, you will get notification through and email.
    
    d.	Once you get the confirmation. Click on Username and select PROFILE Now, To get the Cloudneeti API key click on Show. It will show hidden value and just copy the API key
    
    ![captureKeys](.././images/office365Subscriptions/captureKeys.png#thumbnail)

## 9	Office 365 data collector provisioning

1.	Login to Azure portal: https://portal.azure.com 

2.	Switch to Azure Active Directory with the Azure Subscription with pre-requisite access.

3.	Open CloudShell, Click on Cloudshell icon on the navigation bar to open Cloudshell and Choose PowerShell from shell drop down

    ![Cloudshell](.././images/office365Subscriptions/Cloudshell.png#thumbnail) 

4.	Execute below command in Cloudshell to download the Cloudneeti data collector provisioning script.
    <pre><code>```
    wget https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/Provision-M365DataCollector.ps1 -O Provision-M365DataCollector.ps1
    ```</code></pre>

5. Switch to the User directory
    <pre><code>```
    cd $User
    ```</code></pre>
    
6. Run provisioning script with inline parameters
    <pre><code>```
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
        -AzureSubscriptionId <Azure Subscription Id where office 365 data collector resouces will be created> `
        -DataCollectorName <Office 365 Data Collector Name> `
        -Location <Default EastUs2>
```
    </code></pre>
    **Note: Contact Cloudneeti Team for ArtifactsName, DataCollectorVersion and ArtifactsAccessKey**
7.	Then script execution will prompt you for below details: (Enter requested information)

    a:	Cloudneeti API key

    b:	Cloudneeti data collector Service Principal secret

    c:	Cloudneeti M365 data collector artifacts storage access Key

    d:	Office 365 App Password
    

## 10	Apply delete lock 

Apply delete lock to prevent accidental deletion of the data collection resource group


1.	Navigate to M365 data collector resource group in your Azure Subscription (something like cloudneeti-m365-datacollector-rg)

2.	Click on Locks under settings

3.	Press Add button to create resource lock

4.	Enter Lock Name and select Lock Type as Delete

5.	Press OK to save the lock

    ![addLock](.././images/office365Subscriptions/addLock.png#thumbnail)

6.	Modify the automation account schedule. Set the automation account schedule before the Cloudneeti data collection schedule using the below steps,

    a.	Go to M365 data collector resource group
    
    b.	Select Automation account
    
    c.	Click on Schedules under Shared Resources
    
    d.	Select Schedule
    
    ![addSchedule](.././images/office365Subscriptions/addSchedule.png#thumbnail)
    
    e.	Modify the schedule timings and press Save button 
    
    ![saveSchedule](.././images/office365Subscriptions/saveSchedule.png#thumbnail)
    
    Congratulations! 
    You have just on-boarded an Office 365 account to Cloudneeti. 
    


