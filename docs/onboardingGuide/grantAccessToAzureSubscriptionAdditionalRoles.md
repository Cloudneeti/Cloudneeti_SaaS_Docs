# STEP 3: Grant access to Azure subscription additional roles
**This step is optional** 

The following roles need to be granted to the Cloudneeti App registered in the previous step

1.	Backup reader role for Azure Subscription level scope.
2.	Website contributor role for Azure Subscription level scope.
3.  Key Vault access policies for specific managed Key Vaults.

The following steps are done by Microsoft Azure **Subscription Owner** role.

### 3.1 Grant Azure Subscription Backup Reader Role 
**This step is optional**

The Cloudneeti application requires Backup Reader role access to the Subscription in order to view application settings. 

If the Backup Reader Role is not assigned,the Cloudneeti application will not be able to collect data of security policies [listed here](.././grantAccessToAzureSubscriptionAdditionalRoles/#backup-reader-role).

1.	Go to the subscription’s **Access control (IAM)** in the third level menu
2.	Click on the **Add** button and select **Add role assignment**
3.	Select **Reader** role and Cloudneeti
4.	Select **Save** to complete the role assignment
 
     ![Assign role](.././images/azureSubscriptions/Backup_Reader_Role.png#thumbnail)

### 3.2 Grant Azure Subscription Website Contributor Role
**This step is optional**

The Cloudneeti application requires Website Contributor role access to the Subscription in order to view application settings. 

If the Website Contributor Role is not assigned, Cloudneeti application will not be able to collect data of security policies [listed here.](.././grantAccessToAzureSubscriptionAdditionalRoles/#website-contributor-role)

1.	Go to the subscription’s **Access control (IAM)** in the menu
2.	Click **Add** and select **Add role assignment**
3.	Select **Website Contributor** role and Cloudneeti application
4.	Click **Save** to complete the role assignment

    ![Assign role](.././images/azureSubscriptions/Website_Contributor_Role.png#thumbnail)

### 3.3 Grant Azure Subscription Storage Account Contributor Role
**This step is optional**

The Cloudneeti application requires Storage Account Contributor or Storage Account Key Operator Service role access to the Subscription in order to view application settings. 

If the Storage Account Contributor or Storage Account Key Operator Service role access Role is not assigned, Cloudneeti application will not be able to collect data of security policies [listed here.](.././grantAccessToAzureSubscriptionAdditionalRoles/#storage-account-contributor-role)

1.	Go to the subscription’s **Access control (IAM)** in the menu
2.	Click **Add** and select **Add role assignment**
3.	Select **Storage Account Contributor** or **Storage Account Key Operator Service role access** role and Cloudneeti application
4.	Click **Save** to complete the role assignment

    ![Assign role](.././images/azureSubscriptions/Storage_Account_Contributor.png#thumbnail)

    OR

    ![Assign role](.././images/azureSubscriptions/Storage_Account_Key_Operator_Service_Role.png#thumbnail)

### 3.4 Grant Azure Subscription Network Contributor Role
**This step is optional**

The Cloudneeti application requires Website Contributor role access to the Subscription in order to view application settings. 

If the Website Contributor Role is not assigned, Cloudneeti application will not be able to collect data of security policies [listed here.](.././grantAccessToAzureSubscriptionAdditionalRoles/#network-contributor-role)

1.	Go to the subscription’s **Access control (IAM)** in the menu
2.	Click **Add** and select **Add role assignment**
3.	Select **Network Contributor** role and Cloudneeti application
4.	Click **Save** to complete the role assignment

    ![Assign role](.././images/azureSubscriptions/Network_Contributor_Role.png#thumbnail)


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

### Backup Reader Role

Backup Reader role access is needed to collect data for security policies listed
below.

| Control No  | Policy Title   | Category               |
|------------|---------------|------------------------|
| 1700.10       | Ensure that Backup feature is configured for App Service deployed on Standard and above App Service Plan   | Business continuity and DR |
| 1700.11       | Ensure that Backup feature is configured for API Apps deployed on Standard and above App Service Plan      | Business continuity and DR |
| 1700.12       | Ensure that Backup feature is configured for Function Apps deployed on Standard and above App Service Plan | Business continuity and DR |
| 1700.13       | Ensure that Backup feature is configured for Mobile Apps deployed on Standard and above App Service Plan   | Business continuity and DR |

### Website Contributor role

Website Contributor role access is needed to collect data for security policies
listed below.

| Control No     | Policy Title                                                                          | Category                              |
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

### Storage Account Contributor role 

Storage Account Contributor role or Storage Account Key Operator Servic role access is needed to collect data for security policies
listed below.

| Control No     | Policy Title                                                                          | Category                              |
|---------------|--------------------------------------------------------------------------------------|---------------------------------------|
| 1600.13       | Ensure that 'Public access level' is set to Private for Blob Containers                         | Storage Accounts |

### Network Contributor Role

Network Account Contributor role is needed to collect data for security policies listed below.

| Control No     | Policy Title                                                                          | Category                              |
|---------------|--------------------------------------------------------------------------------------|---------------------------------------|
| 2000.11       | Ensure that Flow Log Status is set to On for Network Security Groups                         | Azure - Networking |