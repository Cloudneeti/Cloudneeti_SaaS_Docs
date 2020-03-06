# STEP 5: Azure Advanced security configuration
**This step is optional.**

The following steps are done by Microsoft Azure **Subscription Owner (or
Subscription Contributor)** role.

An Azure Automation Account resource is deployed to collect data for additional
security policies [listed here](.././azureAdvanceSecurityConfiguration/#advanced-security-configuration). The Azure Active Directory control plane exposes the data only through
PowerShell that needs to run under a Global AD reader credential.

To ensure that Cloudneeti does not ever store/have access to a global AD
reader, it is recommended to deploy a small PowerShell script under
customer’s control in their own Azure subscription. The metadata collected after
running a script is then pushed to a Cloudneeti API that you registered during
the Cloudneeti API key generation.

## 5.1 Collect Information

| **Information**                                                                                 | **Source / Portal to use** | **User**                |
|-------------------------------------------------------------------------------------------------|----------------------------|-------------------------|
| [Cloudneeti License Id](.././azureAdvanceSecurityConfiguration/#license-id)                        | Cloudneeti                 | License Admin           |
| [Cloudneeti Account Id ](.././azureAdvanceSecurityConfiguration/#account-id)                         | Cloudneeti                 | License Admin           |
| [Azure Active Directory Id  ](.././azureAdvanceSecurityConfiguration/#azure-directory-id)                     | Cloudneeti                 | License Admin           |
| [Azure Subscription Id ](.././azureAdvanceSecurityConfiguration/#azure-subscription-id)    | Cloudneeti            | License Admin      |
| Azure Active Directory Global Reader Id    |  Microsoft Azure                 | Global Reader          |
| Azure Active Directory Global Reader password  | Microsoft Azure            | Global Reader     |
| [Cloudneeti data collector Application Id](.././azureAdvanceSecurityConfiguration/#registered-cloudneeti-application-id)  | Microsoft Azure            | Subscription Owner      |
| [Cloudneeti data collector Application secret](.././azureAdvanceSecurityConfiguration/#registered-cloudneeti-application-secret)  | Microsoft Azure            | Subscription Owner      |
| [Cloudneeti Environment ](.././azureAdvanceSecurityConfiguration/#cloudneeti-artifacts-and-data-collector-details)  | Cloudneeti Team            | License Admin           |
| [Cloudneeti API key](.././azureAdvanceSecurityConfiguration/#generate-cloudneeti-api-key)   | Cloudneeti Team            | License Admin           |
| [Cloudneeti Azure IAM Data Collector Artifacts Storage Name ](.././azureAdvanceSecurityConfiguration/#cloudneeti-artifacts-and-data-collector-details) | Cloudneeti Team            | License Admin           |
| [Cloudneeti Azure IAM Data Collector Version ](.././azureAdvanceSecurityConfiguration/#cloudneeti-artifacts-and-data-collector-details) | Cloudneeti Team            | License Admin           |
| [Cloudneeti Azure data collector artifacts storage access Key](.././azureAdvanceSecurityConfiguration/#cloudneeti-artifacts-and-data-collector-details) | Cloudneeti Team            | License Admin           |

### Cloudneeti license and account details

Login to Cloudneeti portal as a License Admin.

#### License id

1. Navigate to **Features and Quota​s** under **Configurations**
2. Copy license ID and paste to notepad.
	![License id](.././images/onboardingOffice365Subscription/License_Id.png#thumbnail)

#### Account id
1. Navigate to **Cloud Accounts** in **Configurations**
2. Copy account ID and paste to notepad.
	![Manage Accounts](.././images/azureSubscriptions/Manage_Accounts_ID.png#thumbnail)

### Generate Cloudneeti API key

#### Sign-up on Cloudneeti API portal.

1. Go to [API portal](https://portal.cloudneeti.com/) and Sign up.

2. Fill the required fields in the sign-up form

3. You will receive a confirmation mail for sign-up, Click on the confirmation
    link.

4. The confirmation link will ask you for change password (info: You can use
    the password your used when signing up)

5. You are signed up successfully

#### Retrieve and activate API key

Retrieve and activate your API key using the Cloudneeti API portal

1. Click on **PRODUCTS**
2. Select **Unlimited**
	![Cloudneeti API](.././images/onboardingOffice365Subscription/Cloudneeti_API.png#thumbnail)
3. Click on **Subscribe**
	![Subscribe](.././images/azureSubscriptions/API_Subscribe.png#thumbnail)

This will notify Cloudneeti to activate your API subscription access. Please
wait for the activation to be done. When Cloudneeti activates your subscription, you
will get an email notification.

Once you receive the confirmation, proceed with the following steps.

1. Click on **Username**
2. Select **Profile**
3. Click on **Show**
4. Copy the **Primary key** to your notepad.
	![Primary key](.././images/onboardingOffice365Subscription/Primary_key.png#thumbnail)


### Cloudneeti artifacts and data collector details
Contact Cloudneeti Team for:

- Cloudneeti Environment 
- Cloudneeti Azure IAM Data Collector Artifacts Storage Name 
- Cloudneeti Azure IAM Data Collector Artifacts Storage Access Key 
- Cloudneeti Azure IAM Data Collector Version 


### Azure details

Login to Azure portal <https://portal.azure.com> as a subscription owner.
#### Azure Directory ID

1. Click on **Azure Active Directory** on the primary menu
2. Click on **Properties** on the secondary menu
3. Copy **Directory ID** to a notepad
	![Directory ID](.././images/onboardingOffice365Subscription/Directory_ID.png#thumbnail)

#### Azure Subscription ID

1. Choose your Azure AD tenant by selecting your **Azure subscription** in the
    top right corner of the page
2. Select **Default Directory**
	![Default Directory](.././images/onboardingOffice365Subscription/Default_Directory.png#thumbnail)
3. Click on **Subscriptions** (1) on the primary menu
4. Select the desired **Azure subscription** (2)
	![Azure subscription](.././images/onboardingOffice365Subscription/Azure_Subscription.png#thumbnail)
5. Copy **Subscription ID** to a notepad
	![Subscription ID](.././images/onboardingOffice365Subscription/Subscription_Id.png#thumbnail)

#### Registered Cloudneeti Application ID 
1. Select **Azure Active Directory** in the primary menu
2. Select **App Registrations** in the secondary menu
3. Select Cloudneeti Application registered in [Step 1](.././onboardingGuide/azureSubscriptions/#step-1-register-cloudneeti-application-manually-or-using-azure-powershell-script)
	![Registered Cloudneeti Application ID](.././images/onboardingOffice365Subscription/Cloudneeti_Application_ID.png#thumbnail)
4. Copy the Cloudneeti Application id
	![Cloudneeti Application id](.././images/onboardingOffice365Subscription/Copy_AppID.png#thumbnail)

#### Registered Cloudneeti Application Secret 

1. Select **Azure Active Directory** in the primary menu
2. Select **App Registrations** in the secondary menu
3. Select Cloudneeti Application registered in [Step 1](.././onboardingGuide/azureSubscriptions/#step-1-register-cloudneeti-application-manually-or-using-azure-powershell-script)
4. Click on **new client secret** in **Certificates & secrets** section (1)
5. Add **Description** and select expiry time
6. Click on **Add** (2)
7. **Copy to clipboard** and paste the Client Secret to your notepad. **Note:**
    You will not be able to copy this value after you move away from this
    screen. (3)
	![Registered Cloudneeti Application Secret](.././images/onboardingOffice365Subscription/Copy_to_Clipboard.png#thumbnail)


## 5.2 Provision Azure IAM data collector 


Login to Azure portal <https://portal.azure.com> as Subscription Contributor or
Subscription Owner access.

Switch to Azure AD with the Azure Subscription with pre-requisite access.

1. Open **CloudShell**
2. Click on **Cloudshell** icon on the navigation bar to open Cloudshell
3. Choose PowerShell from shell dropdown
4. Select **storage**
	![CloudShell](.././images/onboardingOffice365Subscription/CloudShell.png#thumbnail)
5. Execute below command in Cloudshell to download the Cloudneeti data
    collector provisioning script.
	<pre>
	<code>```
		wget https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/Provision-AzureIAM-DataCollector.ps1 -O Provision-AzureIAM-DataCollector.ps1
	```</code>
	</pre>
6. Switch to the User directory
	<pre>
	<code>```
		cd $User
	```</code>
	</pre>
7. Run provisioning script with inline parameters
	<pre>
	<code>```
		./Provision-AzureIAM-DataCollector.ps1 `
            -CloudneetiLicenseId <Cloudneeti License Id> `
            -CloudneetiAccountId <Cloudneeti Account Id> `
            -CloudneetiEnvironment <Cloudneeti Environment> `
            -CloudneetiApplicationId <Cloudneeti Data Collector Registered Application Id> `
            -ArtifactsName <Cloudneeti Azure IAM Data Collector Artifact Name> `
            -DataCollectorVersion <Cloudneeti Azure IAM Data Collector Version> `
            -AzureActiveDirectoryId <Azure Active Directory Id> `
            -AzureGlobalReaderEmailId <Azure Global Reader Email Id> `
            -AzureSubscriptionId <Azure Subscription Id where Azure IAM datacollector resources will be created> `
            -DataCollectorName <Friendly name for Azure IAM Data Collector resources>
	```</code>
	</pre>
Note: Contact Cloudneeti Team for ArtifactsName, DataCollectorVersion and
ArtifactsAccessKey

8. The script will execute and prompt you for below details:
   Cloudneeti API key </br>
   Cloudneeti Data Collector Service Principal Secret </br>
   Cloudneeti Azure IAM Data Collector Artifacts Storage Access Key </br>
   Azure Active Directory reader password</br>

9. This will create a runbook inside automation account

## 5.3 Apply delete lock

Apply a delete lock to prevent accidental deletion of the data collection resource
group in your Azure Subscription.

1. Navigate to Azure IAM data collector resource group

2. Click on **Locks** (1)

3. Click **Add** (2)

4. Enter **Lock name** DoNotDelete (3)

5. Select **Lock type** as Delete (4)

6. Add **Notes** (Do not delete M365 data collector resource group) (5)

7. Click **OK** (6)
	![Apply Delete Lock](.././images/azureSubscriptions/Locks.png#thumbnail)

## 5.4 Modify the data collection schedule

Set the automation account schedule before the daily Cloudneeti data collection
time.

1. Go to **Azure IAM data collector** resource group
2. Select **Automation account**
3. Click on **Schedules**
4. Select **Schedule**
	![Schedule](.././images/azureSubscriptions/Schedule.png#thumbnail)
5. Modify the schedule **Time** (set time about 1 hour before the daily
    Cloudneeti data collection time)
6. Click **Save**
	![Modify and Save](.././images/azureSubscriptions/Modify_Save.png#thumbnail)

Cloudneeti portal will show details for policies from next scan.

## Advanced security configuration

The advanced security policy data collector enables the following 18 policies as
available in the Center for Internet Security (CIS) Azure benchmark
(Reference
[here](https://www.cloudneeti.com/2018/03/cloudneeti-delivers-industry-first-automation-for-cis-azure-foundations-benchmark/)).

| Control No | Policy Title                                                                                                         | Category                    |
|------------|----------------------------------------------------------------------------------------------------------------------|-----------------------------|
| 1600.13    | Ensure that 'Users can consent to apps accessing company data on their behalf' is set to 'No'                        | Azure - Identity and Access |
| 1600.14    | Ensure that 'Users can add gallery apps to their Access Panel' is set to 'No'                                        | Azure - Identity and Access |
| 1600.15    | Ensure that 'Restrict access to Azure AD administration portal' is set to 'Yes'                                      | Azure - Identity and Access |
| 1600.16    | Ensure that 'Users can register applications' is set to 'No'                                                         | Azure - Identity and Access |
| 1600.17    | Ensure that 'Guest user permissions are limited' is set to 'Yes'                                                     | Azure - Identity and Access |
| 1600.18    | Ensure that 'Members can invite' is set to 'No'                                                                      | Azure - Identity and Access |
| 1600.19    | Ensure that 'Guests can invite' is set to 'No'                                                                       | Azure - Identity and Access |
| 1600.20    | Ensure that 'Self-service group management enabled' is set to 'No'                                                   | Azure - Identity and Access |
| 1600.21    | Ensure that 'Users can create security groups' is set to 'No'                                                        | Azure - Identity and Access |
| 1600.22    | Ensure that 'Users who can manage security groups' is set to 'None'                                                  | Azure - Identity and Access |
| 1600.23    | Ensure that 'Users can create Office 365 groups' is set to 'No'                                                      | Azure - Identity and Access |
| 1600.24    | Ensure that 'Users who can manage Office 365 groups' is set to 'None'                                                | Azure - Identity and Access |
| 1600.25    | Ensure that 'Enable "All Users" group' is set to 'Yes'                                                               | Azure - Identity and Access |
| 1600.26    | Ensure that 'Require Multi-Factor Auth to join devices' is set to 'Yes'                                              | Azure - Identity and Access |
| 1600.27    | Ensure that 'Number of methods required to reset' is set to '2'                                                      | Azure - Identity and Access |
| 1600.28    | Ensure that 'Number of days before users are asked to re-confirm their authentication information' is not set to '0' | Azure - Identity and Access |
| 1600.29    | Ensure that 'Notify all admins when other admins reset their password?' is set to 'Yes'                              | Azure - Identity and Access |
| 1600.30    | Ensure that 'Notify all admins when other admins reset their password?' is set to 'Yes'                 | Azure - Identity and Access |

