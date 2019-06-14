# Azure Onboarding Guide
## 1	Introduction
The purpose of this document is to outline the concept of Cloudneeti application integration with the customer’s Microsoft Azure subscriptions, the required preparations and prerequisites, and the specific onboarding steps. Onboarding of Amazon Web Services (AWS) and Office 365 cloud accounts are described in separate documents.

### 1.1	Cloudneeti Application Permissions 
The following permissions are required for Azure subscription onboarding to Cloudneeti. 

#### 1.1.1	Azure Subscription Permissions
The generated service principal needs to be granted a Reader role. 


| Azure Built-in Role | Description                              | Description Explicit Granting of Permission Required? |
|---------------------|------------------------------------------|------------------------------------------|
| Reader<br>Refer [here](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#reader) | The permission lets Cloudneeti list Azure resources and read configuration metadata for each of the resources, but not make any changes. At no time will Cloudneeti be able to read/view data stored within the application/databases. | Yes                                      |



#### 1.1.2	Azure Active Directory Permissions
Cloudneeti requires the following permissions:


| API             | Permission Name                | Type        | Admin Consent Required? |
|-----------------|--------------------------------|-------------|-------------------------|
| Microsoft.Graph | Directory.Read.All<br>Refer [here](https://docs.microsoft.com/en-us/graph/permissions-reference#directory-permissions) | Application | Yes                     |



The graph permission above allows the app to read data in the organization's directory, such as user attributes, groups, and applications, without a signed-in user. You can find more details about Microsoft Graph API permission here: https://docs.microsoft.com/en-us/graph/permissions-reference.

The following security policies require Active Directory (Microsoft.Graph) permissions: 


| Policy-Id | Policy Name                              | AAD Entity Used for Evaluating Misconfiguration | Data Stored in Cloudneeti Data Store     |
|-----------|------------------------------------------|------------------------------------------|------------------------------------------|
| 1800.1    | Ensure that AD Application Keys are Rotated Before They Expire | passwordCredentials <br><br>Metadata information contained within the data entity will be key start-date, end-date, and expiry policies. No actual values are retrievable. | • AD Application Name<br>• AD Application ID<br>• Expiry Date<br> |
| 1100.11   | Ensure that Service Principal Certificate is Renewed Before It Expires | keyCredentials<br><br>Metadata information contained within the data involves start-date and end-date. Refer to documentation [here](https://docs.microsoft.com/en-us/powershell/module/azuread/new-azureadserviceprincipalkeycredential?view=azureadps-2.0). | • AD Application Name<br>• AD Application ID<br>• Expiry Date |
| 1100.12   | Ensure that There are No Guest Users     | userType <br><br>Member or guest.        | • No data is stored in the Cloudneeti database. This policy only retrieves the count of total users and how many are guest users. |
| 1100.4    | Enforce the Policy to Set Password to ‘Always’ Expire in Azure Active Directory for All Organization Users | passwordPolicies <br><br>Metadata involving the length of the password, password strength, and password restrictions. Refer to documentation [here](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-sspr-policy#password-policies-that-only-apply-to-cloud-user-accounts). | • No data is stored in the Cloudneeti database. This policy only retrieves the count of all organization users and how many of them have set ‘Password always expired’ to ‘On’. |
| 1100.8    | Ensure that Azure Resources are Accessible Only Through the Organization Account | userType <br><br>Member or [guest](https://docs.microsoft.com/en-us/azure/active-directory/b2b/what-is-b2b).        | • No data is stored in the Cloudneeti database. This policy only retrieves the count of external users in an organization who can access resources under the Azure Subscription. |



### 1.2	Customer Data Protection 

Cloudneeti customers retain control and ownership of their own data. 

The collected metadata about configurations of customer cloud accounts (Azure subscriptions) is well-protected within the Cloudneeti data store. The following information security policies are implemented by Cloudneeti:

•	**Data encryption at rest:** The customer’s data is always stored encrypted. Various cloud service components and encryption schemes (e.g. key vaults, AES symmetric key algorithms, higher-level cipher suites) are used.

•	**Data encryption in-transit:** TLS 2.0 encryption or higher is applied for encrypting data during transmission.

•	**Data access:** The production support team has access to the management plane at the data store level. They won’t have access to decrypt the configuration data unless a support request makes it necessary. Customers have to explicitly grant access to the support team to retrieve the data for a time-boxed period of time required for resolving a ticket.

•	**Customer lockbox:** Lockbox is a feature that ensures the Cloudneeti support team cannot access customer data to perform a service operation without explicit approval. 

•	**Data classification:** A data classification of ‘Restricted’ is applied to the data store.

•	**Audit logging:** All access requests are monitored through Privileged Identity Management (PIM) as well as operational logs.

•	**Data erasure:** Expiry/termination of a contract will result in automatic clean-up of all data collected.

•	**Data backup:** All backed up data is stored encrypted, and RBAC permissions are applied for the recovery team.

•	**Data retention:** Data retention for active contracts is applied at the contract provisioning level. Typically, this will be 30-90 days.

## 2	Azure Onboarding Preparation
Azure onboarding to Cloudneeti is the process of granting Cloudneeti access to the customer’s cloud accounts.

### 2.1	Customer Team
Before onboarding, please ensure that users with the following roles are available:


| Role                                     | Action to Perform                        |
|------------------------------------------|------------------------------------------|
| ❑ IT Manager / Architect                 | Ensure that a user is appointed as a customer [Application Administrator](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-assign-admin-roles#available-roles) |
| ❑ Application Administrator              | Create service principal [Manual](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal) OR Automation Script |
| ❑ An Individual with Global Azure AD Administrator Role  | [**Preferred**] Assign an Application Administrator role to any user who will be onboardingAzure subscription to Cloudneeti [Referral Link](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-assign-admin-roles#available-roles) <br>**OR**<br>Create a service principal <br>[Manual](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal) OR Automation Script<br>**AND**<br>Grant permissions on service principal in Azure AD |
| ❑ An Individual with Azure Subscription Owner/Contributor Permissions  | Add service principal created above to the Azure subscription and assign reader role<br>[Referral Link](https://docs.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal) |
| ❑ Agree on an Onboarding Call            | Agree on a timeslot for an onboarding call with our consulting team |
| ❑ Sign appropriate Agreement documents   | Review and sign the following documentation:<br>1. Mutual NDA <br>2. Cloud Services Agreements (necessary for a long-term contract) |



### 2.2	Consulting Team
The consulting team supporting the onboarding will typically consist of:

**•	Program Manager** - responsible for planning and delivery

**•	Cloud Architect** – supports technical dialog 

Below is a high-level checklist of things to review before the actual onboarding begins:

❑ Understand the customer’s environment and select appropriate cloud accounts for the onboarding.
   1.	Do you have Azure subscriptions (or environments) in a separate Azure AD (where the company’s users are)?
   2.	Is the Azure subscription you want to onboard associated with a production Azure AD (where user IDs are)?

❑ Provide a demo of the Cloudneeti product.

❑ Provide a walkthrough of the product onboarding. 

❑ Allow the customer to receive appropriate permissions for onboarding.

❑ Explain prerequisites for onboarding.

### 2.3	Prerequisites
Upon customer request, Cloudneeti license(s) will be configured and email invitation(s) will be sent to License Administrator(s). Additional users within Cloudneeti applications will be provisioned by the customer’s License Administrator.

The following activities need to be completed by the customer prior to onboarding.


| Activity                                 | Description                              |
|------------------------------------------|------------------------------------------|
| 1. Engage a user with **Global AD administrator** rights  | The customer’s Azure administrator must have enough permissions in the Azure AD to create the required service principal for Cloudneeti.  |
| 2. Engage a user with **owner access permissions to the Azure subscription** | Assign ‘Reader’ permission to the service principal into the Azure subscription. |
| 3. Download and review **PowerShell script** for creation of the service principal | The PowerShell script is used to create a service principal in Azure Tenant AD: [Download Link](https://github.com/Cloudneeti/docs_cloudneeti/blob/master/scripts/Create-ServicePrincipal-AzureOnboarding.ps1). |
| 4. Have the Azure Subscription ID        | This is a mandatory field for onboarding an Azure subscription to Cloudneeti. |
| 5. Have the Azure Directory/Tenant ID    | This is a mandatory field for onboarding an Azure subscription to Cloudneeti. |
| 6. **Workstation**: Ensure you have the latest PowerShell version (v5 and above)  | Verify PowerShell version by running the $PSVersionTable.PSVersion command on the workstation where you will run the ServicePrincipal creation script. If PowerShell version is lower than 5, then follow this link for installation of a later version: [Download Link.](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell?view=powershell-6) |
| 7. **Workstation**: Before executing the script, make sure there are no restrictions in running the PowerShell script   | Use this command: <br>Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass <br><br>PowerShell contains built-in execution policies that limit its use as an attack vector. By default, the execution policy is set to Restricted, which is the primary policy for script execution. The bypass allows for running scripts and keeps the lowered permissions isolated to just the current running process. |
| 8. **Workstation**: Install Azure Modules to execute PowerShell commands within service principal automation script | Install-Module -Name AzureAD -MinimumVersion 2.0.0.131<br><br>It is a roll-up module for the Azure Resource Manager cmdlets. |



 
## 3	Azure Onboarding Steps
Follow these steps to onboard the Azure subscription:


| # | Step                                     |
|---|------------------------------------------|
| 1 | Registering Cloudneeti in the Customer’s Azure AD |
| 2 | Granting Permissions to Cloudneeti       |
| 3 | Assigning Reader Role on Customer Subscription to Cloudneeti |
| 4 | Activating Cloudneeti License and Onboarding Azure Subscription Account |
| 5 | Verification of Data Collection          |


![Azure Overview](/images/Azure_Onboarding_Overview.png#thumbnail)

### 3.1	Registering Cloudneeti in the Customer’s Azure AD

Use the Create-ServicePrincipal-AzureOnboarding.ps1 script to create and register a Cloudneeti data collector application. 

1.	Open PowerShell in administrator mode. An administrative prompt is needed only to install missing Azure PowerShell modules.
2.	Go to the directory where Create-ServicePrincipal-AzureOnboarding.ps1 was downloaded earlier.
3.	Run the below command to create service principal:

```powershell
.\Create-ServicePrincipal-AzureOnboarding.ps1 -azureActiveDirectoryId <Active_Directory_Id> -servicePrincipalName <data_collector_name> -expirationPeriod 1year
```

4.	The script will prompt the login screen; you need to log in with **Global AD Administrator** or **Application Administrator** user credentials.
5.	Store service principal information from the output in a secure place. This information will be needed while onboarding the Azure account in the Cloudneeti application.
 
![Service Principal Screenshot](/images/Service_Principal_Screenshot.png#thumbnail)

In case the user doesn’t want to provide the Microsoft Graph permissions given in section Azure Active Directory Permissions, you can use the disableADPolicies switch in the Create-ServicePrincipal-AzureOnboarding.ps1 command:

```powershell
.\Create-ServicePrincipal-AzureOnboarding.ps1 -azureActiveDirectoryId <Active_Directory_Id> -disableADPolicies -servicePrincipalName <data_collector_name> -expirationPeriod 1year
```

### 3.2	Granting Permissions to Cloudneeti
If you have already onboarded an Azure subscription associated to this Azure AD tenant, you can immediately proceed to the next step - Assigning Reader Role on Customer Subscription to Cloudneeti.

The Azure AD **Global Administrator** needs to grant permissions to Cloudneeti in order to collect the Azure AD data. 

Skip this step if the user has created the Cloudneeti service principal without the Microsoft Graph permissions.

Follow the steps below to grant permission:

1. Log in to Azure Portal.
2. Click on ‘Azure Active Directory’.
3. Click on ‘Service principal’ in the ‘App registrations’ section.
4. Select Cloudneeti service principal.

![Service Principal - Azure Portal](/images/Grant_Permission.png#thumbnail)

5. Go to 'API permissions' and confirm Microsoft Graph permissions.
6. Click on the 'Grant admin consent’ button in the ‘Grant consent’ section.

![Grant permission ](/images/Grant_Permission_2.png#thumbnail)

### 3.3	Assigning Reader Role on Customer Subscription to Cloudneeti
Follow the steps below to assign reader and backup reader roles to Cloudneeti on the Azure subscription:
1.	Go to the subscription’s IAM setting.
2.	Click on the ’Add’ button and select ‘Add role assignment’.

![Add role](/images/Assign_role.png#thumbnail)

3.	Select ‘Reader’ role and Cloudneeti service principal.

![Assign role](/images/Assign_role_2.png#thumbnail)

4.	Select ‘Save’ to complete the role assignment. 

### 3.4	Activating Cloudneeti License and Onboarding Azure Subscription Account
1.	Log in to the Cloudneeti portal using the license admin user credentials.
2.	Click on the ‘Activate License’ button to activate the license.

![Activate License](/images/Activate_License.png#thumbnail)

3.	Select Azure connector.

![Azure connector](/images/Connector.png#thumbnail)

4.	Fill in the account and service principal information displayed in step 4.5.1 output.

![Add account](/images/Add_Account.png#thumbnail)

5.	Click on ‘Get Subscriptions’ to get the list of subscriptions on which Cloudneeti service principal has reader access.
6.	Select the Azure subscription to onboard and click ‘Save & Continue’.
 
![Add Account - save and continue](/images/Add_Account_2.png#thumbnail)

### 3.5	Verification of Data Collection
1.	Click on ‘Go To Dashboard’ to see the data.

![Dashborad](/images/Success.png#thumbnail)

2.	Wait approx. 5 minutes for the data to be collected, processed, and rendered to the Cloudneeti Dashboard.

![Dashboard](/images/Verify.png#thumbnail)

Congratulations! You have just on-boarded an Azure subscription to Cloudneeti. Subsequent onboardings will take less time (usually less than 10 minutes).

### 3.6	Notification Configuration
To receive email notifications from Cloudneeti Bot, please refer following steps.
1.	On Cloudneeti portal, navigate to settings
2.	Select desired License and Account 
3.	Click on configure button to select “Configure Notifications”
4.	Enter comma separated email addresses.

![Configure Notifications](/images/Configure_notifications.png#thumbnail)

5.	Click on save button.



