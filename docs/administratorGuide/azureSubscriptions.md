# Azure Onboarding Guide

## 1.	Prerequisites
Upon customer request, Cloudneeti license(s) will be configured and email invitation(s) will be sent to License Administrator(s). Additional users within Cloudneeti applications will be provisioned by the customer’s License Administrator.

The following activities need to be completed by the customer prior to onboarding.


| Activity                                 | Description                              |
|------------------------------------------|------------------------------------------|
| 1. Engage a user with **Global AD administrator** rights  | Azure administrator must have enough permissions in the Azure AD to create the required service principal for Cloudneeti.  |
| 2. Engage a user with **owner access permissions to the Azure subscription** | Assign ‘Reader’ permission to the Cloudneeti Service Principal into the Azure subscription. |
| 3. Engage a user with **owner access permissions to the Azure subscription** | Assign ‘Website Contributor’ permission to the Cloudneeti Service Principal into the Azure subscription. <br> <br> Cloudneeti Service Principal needs Website Contributor role access to the Subscription in order to view application settings. **This step is optional**, if the Website Contributor Role is not assigned then 15 policies (Refer Section 3.2.2) will show "No Data" on Cloudneeti portal.|
| 4. Download and review **PowerShell script** for creation of Cloudneeti  Service Principal | The PowerShell script is used to create a Cloudneeti  Service Principal in Azure Tenant AD: [Download Link](https://github.com/Cloudneeti/docs_cloudneeti/blob/master/scripts/Create-ServicePrincipal-AzureOnboarding.ps1). |
| 5. Have the Azure Subscription ID        | This is a mandatory field for onboarding an Azure Subscription to Cloudneeti. |
| 6. Have the Azure Directory/Tenant ID    | This is a mandatory field for onboarding an Azure Subscription to Cloudneeti. |
| 7. **Workstation**: Ensure you have the latest PowerShell version (v5 and above)  | Verify PowerShell version by running the below command on the workstation where you will run the Cloudneeti Service Principal creation script. <br>`$PSVersionTable.PSVersion`<br> If PowerShell version is lower than 5, then follow this link for installation of a later version: [Download Link.](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell?view=powershell-6) |
| 8. **Workstation**: Before executing the script, make sure there are no restrictions in running the PowerShell script   | Use this command: <br>`Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` <br>PowerShell contains built-in execution policies that limit its use as an attack vector. By default, the execution policy is set to Restricted, which is the primary policy for script execution. The bypass allows for running scripts and keeps the lowered permissions isolated to just the current running process. |
| 9. **Workstation**: Install Azure Modules to execute PowerShell commands within service principal automation script | `Install-Module -Name AzureAD -MinimumVersion 2.0.0.131`<br>It is a roll-up module for the Azure Resource Manager cmdlets. |


### 1.1 Getting Azure Tenant ID and Domain name
1. Login to the Azure Portal, choose your Azure AD tenant by selecting your account in the top right corner of the page

    ![Azure Overview](.././images/azureSubscriptions/Getting_TenantID.png#thumbnail)


2. Click on Azure Active Directory from left pan of the portal and click on properties to get Tenant ID
    ![Azure Overview](.././images/azureSubscriptions/Domain_Name.png#thumbnail)

 
## 2.	Onboarding Steps
Follow these steps to onboard the Azure subscription:


| Step No  | Description                                      |
|----------|------------------------------------------        |
| 1        | Register Cloudneeti Service Principal in the Azure AD       |
| 2        | Grant admin consent to Cloudneeti Service Principal       |
| 3        | Assigning Role on Azure Subscription to Cloudneeti Service Principal |
| 4        | Activating Cloudneeti License and Onboarding Azure Account |
| 5        | Verification of Data Collection          |


 
 ![Azure Overview](.././images/azureSubscriptions/Azure_Onboarding_overview.png#thumbnail)

### 2.1	Register Cloudneeti Service Principal in the Azure AD

Use the `Create-ServicePrincipal-AzureOnboarding.ps1` script to create and register a Cloudneeti Service Principal. 

1.	Open PowerShell in administrator mode. An administrative prompt is needed only to install missing Azure PowerShell modules.

2.	Go to the directory where `Create-ServicePrincipal-AzureOnboarding.ps1` was downloaded earlier.

3.	Run the below command to create a service principal:
    ```powershell
    .\Create-ServicePrincipal-AzureOnboarding.ps1 -azureActiveDirectoryId <Active_Directory_Id> -servicePrincipalName <data_collector_name> -expirationPeriod 1year
    ```
4.	The script will prompt the login screen; you need to log in with **Global AD Administrator** or **Application Administrator** user credentials.

5.	Store service principal information from the output in a secure place. This information will be needed while onboarding the Azure account in the Cloudneeti application.
 
     ![Service Principal Screenshot](.././images/azureSubscriptions/Service_Principal_Screenshot.png#thumbnail)

In case the user doesn’t want to provide the Microsoft Graph permissions given in section Azure Active Directory Permissions, you can use the `disableADPolicies` switch in the `Create-ServicePrincipal-AzureOnboarding.ps1` command:

    ```powershell
    .\Create-ServicePrincipal-AzureOnboarding.ps1 -azureActiveDirectoryId <Active_Directory_Id> -disableADPolicies -servicePrincipalName <data_collector_name> -expirationPeriod 1year
    ```


### 2.2 Grant admin consent to Cloudneeti Service Principal


The Azure AD **Global Administrator** needs to grant permissions to Cloudneeti in order to collect the Azure AD data. 

Skip this step if the user has created the Cloudneeti service principal without the Microsoft Graph permissions.

Follow the steps below to grant permission:

1. Sign in to the Azure portal as a global administrator.
2. Click on `Azure Active Directory`.
3. Navigate to the App Registrations blade.
4. Select Cloudneeti service principal.

     ![Service Principal - Azure Portal](.././images/azureSubscriptions/Grant_Permission.png#thumbnail)
     

5. Go to 'API permissions' and confirm Microsoft Graph permissions.

6. Click on the 'Grant admin consent’ button in the ‘Grant consent’ section.

     ![Grant permission ](.././images/azureSubscriptions/Grant_Permission_2.png#thumbnail)

### 2.3	Assigning Role on Customer Subscription to Cloudneeti Service Principal


#### 2.3.1 Follow the steps below to assign reader and backup reader roles to Cloudneeti Service Principal on the Azure subscription:
1.	Go to the subscription’s Access control (IAM) in the menu..
2.	Click on the ’Add’ button and select ‘Add role assignment’.
     ![Add role](.././images/azureSubscriptions/Assign_role.png#thumbnail)
 
3.	Select ‘Reader’ role and Cloudneeti service principal.

    ![Assign role](.././images/azureSubscriptions/Assign_role_2.png#thumbnail)
 
4.	Select ‘Save’ to complete the role assignment. 

#### 2.3.2	Assigning "Website Contributor" Role on Customer Subscription to Cloudneeti 
 
 Cloudneeti Service principal needs Website Contributor role access to the Subscription in order to view application settings. **This step is optional**, if the Website Contributor Role is not assigned then below 15 policies will show "No Data" on Cloudneeti portal.
 
 
| Policy ID | Policy Name                              | Category |
|-----------|------------------------------------------|----------|
| 1900.42   | Ensure that 'App Insights' are configured for Azure Web Apps | Azure - Compute (PaaS and Serverless)          |
| 1900.43   | Ensure that WEBSITE_LOAD_CERTIFICATES parameter is not set to '*' for Mobile Apps |Azure - Compute (PaaS and Serverless)          |
| 1900.44   | Ensure that WEBSITE_LOAD_CERTIFICATES parameter is not set to '*' for API Apps |Azure - Compute (PaaS and Serverless)          |
| 1900.51   | Ensure that latest supported Node.js version is used for Web Application |Azure - Compute (PaaS and Serverless)          |
| 1900.63   | Ensure that WEBSITE_LOAD_CERTIFICATES parameter is not set to '*' for Function Apps |Azure - Compute (PaaS and Serverless)          |
| 1900.72   | Ensure that 'App Service Authentication' is enabled for Function apps |Azure - Compute (PaaS and Serverless)         |
| 1900.73   | Ensure that 'App Service Authentication' is enabled for API apps |Azure - Compute (PaaS and Serverless)          |
| 1900.74   | Ensure that 'App Service Authentication' is enabled for Mobile apps |Azure - Compute (PaaS and Serverless)          |
| 1900.75   | Ensure that 'App Service Authentication' is enabled for Web apps |Azure - Compute (PaaS and Serverless)          |
| 1900.78   | Ensure that latest supported Node.js version is used for Function Apps |Azure - Compute (PaaS and Serverless)          |
| 1900.79   | Ensure that latest supported Node.js version is used for API Apps |Azure - Compute (PaaS and Serverless)          |
| 1900.80   | Ensure that latest supported Node.js version is used for Mobile Apps |Azure - Compute (PaaS and Serverless)          |
| 1900.84   | Ensure that 'App Insights' are configured for Azure Mobile Apps |Azure - Compute (PaaS and Serverless)          |
| 1900.85   | Ensure that 'App Insights' are configured for Azure Function Apps |Azure - Compute (PaaS and Serverless)          |
| 1900.86   | Ensure that 'App Insights' are configured for Azure API Apps |Azure - Compute (PaaS and Serverless)          |



 Follow the steps below to assign Website Contributor role to Cloudneeti Service Principal on the Azure subscription.

1.	Go to the subscription’s Access control (IAM) in the menu..

2.	Click on the ’Add’ button and select ‘Add role assignment’.
 ![Add role](.././images/azureSubscriptions/Assign_role.png#thumbnail)
 

3.	Select ‘Website Contributor’ role and Cloudneeti service principal.

    ![Assign role](.././images/azureSubscriptions/Website_Contributor_Role.png#thumbnail)
 

4.	Select ‘Save’ to complete the role assignment. 

### 2.4	Activating Cloudneeti License and Onboarding Azure Subscription Account

1.	Log in to the Cloudneeti portal using the license admin user credentials.
2.	Click on the ‘Activate License’ button to activate the license.
     ![Activate License](.././images/azureSubscriptions/Activate_License.png#thumbnail)
3.	Select Azure connector.
 
    ![Azure connector](.././images/azureSubscriptions/Connector.png#thumbnail)

4.	Fill in the account and service principal information displayed in step 2.1 output.
 
    ![Add account](.././images/azureSubscriptions/Add_Azure_Account.png#thumbnail)

5.	Click on ‘Get Subscriptions’ to get the list of subscriptions on which Cloudneeti service principal has reader access.

6.	Select the Azure subscription to onboard and click ‘Save & Continue’.
 
    ![Add Account - save and continue](.././images/azureSubscriptions/Add_Azure_Account_2.png#thumbnail)


### 2.5	Verification of Data Collection
Once account is onboarded to Cloudneeti, it requires few minutes for the data to be collected, processed, and rendered to the Cloudneeti Dashboard. Please perform steps under section 2.6 for setting up the Cloudneeti account notifications.

1.	Click on ‘Go To Dashboard’ to see the data.

    ![Dashborad](.././images/azureSubscriptions/Success.png#thumbnail)

2.	Verify data on dashboard
    
    ![Dashboard](.././images/azureSubscriptions/Verify.png#thumbnail)

Congratulations! You have just on-boarded an Azure subscription to Cloudneeti. Subsequent onboardings will take less time (usually less than 10 minutes).


### 2.6	Notification Configuration
To receive email notifications from Cloudneeti Bot, please refer following steps.

1.	On Cloudneeti portal, navigate to settings
2.	Select desired License and Account 
3.	Click on configure button to select “Configure Notifications”
4.	Enter comma separated email addresses.

    ![Configure Notifications](.././images/azureSubscriptions/Configure_notifications.png#thumbnail)

5.	Click on save button.

