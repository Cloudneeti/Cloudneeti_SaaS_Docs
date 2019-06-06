Azure Active Directory **Global Administrator** needs to grant permissions to the Cloudneeti application in order to collect the Azure active directory data. 
Skip this step if user created Cloudneeti service principal without the Microsoft graph permissions.

Follow below steps to grant permission,

1. Login to Azure Portal
2. Click on Azure Active Directory
3. Click on service principal in 'App Registrations' section
4. Select Cloudneeti service principal

![](images/11.png?raw=true)

5. Go to 'API Permissions' and confirm Microsoft Graph permissions
6. Click on 'Grant admin Consent’ button in Grant Consent section

![](images/12.png?raw=true)
