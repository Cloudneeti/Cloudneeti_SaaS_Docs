# STEP 4: Grant access to key vaults
**This step is optional** 

The Cloudneeti application requires special permission on desired key vaults to get policy data related to secrets. 
If the Key Vault access policy is not added, Cloudneeti application will not be able to collect data of security policies [listed here](.././grantAccessToKeyVaults/#key-vault-list).

Access policy can be added using either an automation account or manual steps.  

## 4.1 Manual Steps

1.	Login to Azure portal.
2.	Go to the **Key vaults** (1)
3.	Select **key vault** (2)
    ![Access Policy](.././images/azureSubscriptions/Add_KeyVault_Access.png#thumbnail)
4.	Select **Access policies** (1)
5.	Click on **Add Access Policy** (2)
    ![Access Policy](.././images/azureSubscriptions/Add_Access_Policy.png#thumbnail)
6.	Select **List** in **Key Permissions** and **Secret Permissions** (1) (2)
7.	Select **Principal** as Cloudneeti Application registered in [step 1](.././azureSubscriptions/#step-1-register-cloudneeti-application) (3)
8.	Click **Add** access policy (4)
   ![Access Policy](.././images/azureSubscriptions/Select_Permission.png#thumbnail)
Note: Perform this step on all the key vaults present in your subscription.



## 4.2 Automatically add Key Vault access policy for Key Vaults within Azure subscriptions

### 4.2.1 Register Contributor Application 

#### Register Contributor Application
Login to [Azure Portal](https://portal.azure.com/){target=_blank} with **Global AD
Administrator** role.

1.  Select **Azure Active Directory** in the primary menu

2.  Select **App Registrations** in the secondary menu

3.  Click on **New Registration**

    ![Service Principal - Azure Portal](.././images/azureSubscriptions/AzureManual_AddSP.png#thumbnail)

4. Enter the name
5. Click **Register**     
    
     ![Service Principal - Azure Portal](.././images/azureSubscriptions/Keyvault_Register.png#thumbnail)

6.	**Copy to clipboard** and paste the Application id to your notepad

    ![Service Principal - Azure Portal](.././images/azureSubscriptions/Keyvault_AppId.png#thumbnail)

#### Add Client Secret

1.	Click on **new client secret** in **Certificates & secrets** section
2.	Add **Description** and select expiry time 
3.	Click on **Add** 
4.	**Copy** to clipboard and paste the Client Secret to your notepad. **Note:** You will not be able to copy this value after you move away from this screen.

    ![Client Secret](.././images/azureSubscriptions/Keyvault_AppSecret.png#thumbnail)

#### Grant admin consent for API permissions

Add Read All Microsoft Graph permissions and grant admin consent

The Contributor Application should have "Azure Active Directory Graph - Application.ReadWrite.All" permission over tenant.

1. Click **API Permissions**
2. Click **Add permission** and add the following information:

    | API             | Permission Name                | Type        |
    |-----------------|--------------------------------|-------------|
    | Microsoft.Graph | Application.ReadWrite.All [Refer here](https://docs.microsoft.com/en-us/graph/permissions-reference#application-permissions-4){target=_blank} | Application |

3. Click on **Grant admin consent for …** button in the Grant consent section. 


#### Grant Azure Subscription Contributor role

Add [contributor role](https://docs.microsoft.com/en-us/azure/key-vault/key-vault-secure-your-key-vault#data-plane-and-access-policies){target=_blank} for Cloudneeti application in Azure Subscription.

Login to [Azure Portal](https://portal.azure.com/){target=_blank} with Microsoft Azure **Subscription Owner** role.

1.	Go to the subscription’s **Access control (IAM)** in the third level menu
2.	Click on the **Add** button and select **Add role assignment**
3.	Select **Contributor** role and Cloudneeti
4.	Select **Save** to complete the role assignment

    ![Assign role](.././images/azureSubscriptions/KeyVault_ContributorRole.png#thumbnail)

### 4.2.2 Provision automation account 
Provision automation account to check and assign List permissions to key-vaults within given subscriptions, at scheduled time.

Login to Azure portal [https://portal.azure.com](https://portal.azure.com){target=_blank} as Subscription Contributor or
Subscription Owner access.

Switch to Azure AD with the Azure Subscription with pre-requisite access.

1. Open **CloudShell**

2. Click on **Cloudshell** icon on the navigation bar to open Cloudshell

3. Choose PowerShell from shell drop down

4. Select **storage**

5. Execute below command in Cloudshell to download the Cloudneeti data
    collector provisioning script.
	<pre>
	<code>```
		wget https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/Provision-KeyVaultAccessAutomation.ps1 -O Provision-KeyVaultAccessAutomation.ps1
	```</code>
	</pre>

    <pre>
	<code>```
        wget https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/AutoAssign-PermissionsToKeyvault.ps1 -O AutoAssign-PermissionsToKeyvault.ps1
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
		./Provision-KeyVaultAccessAutomation.ps1 `
		-CloudneetiRegisteredApplicationObjectId <Data Collector Object Id> `
		-ApplicationId  <Contributor Application Id>`
        -SubscriptionId <Azure Subscription Id where keyvaults are present>`
        -AzureActiveDirectoryId <Azure Active Directory Id> `
        -AutomationAccountName <Automation Account Name> `
        -Location <Location>
    ```</code>
	</pre>

8. The script will execute and prompt you for below details:
   Cloudneeti data collector Contributor Application secret

    ![CloudShell](.././images/azureSubscriptions/Keyvault_Cloudshell.png#thumbnail)

9. This will create a runbook inside automation account with a schedule to start the runbook which will assign List permissions to all key-vaults.

## Security Polices with required roles, permissions

The following Security Policies will be excluded if one or multiple roles are
not assigned.

### Key Vault List

Special permission on key vaults is needed to collect data for security policies
listed below.

| Policy Title                                                      | Category       |
|------------------------------------------------------------------|----------------|
| Ensure that the expiry date is set on all Secrets in a Key Vault | Key Management |


