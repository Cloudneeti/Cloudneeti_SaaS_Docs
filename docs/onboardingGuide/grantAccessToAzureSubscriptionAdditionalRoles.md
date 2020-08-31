# STEP 3: Grant access to Azure subscription additional roles
**This step is optional** 

[Azure custom role](https://docs.microsoft.com/en-us/azure/role-based-access-control/custom-roles) needs to be granted to the Cloudneeti App registered in the previous step with following permission.

-   Custom role with permission **"Microsoft.Web/sites/config/list/action"** for Azure Subscription level scope.

    -   The Cloudneeti application needs "Microsoft.Web/sites/config/list/action" action present in [Website Contributor role](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#custom-role-with-permission-microsoftwebsitesconfiglistaction) in order to collect authentication and authorization configuration of Web/API/Mobile/Function Apps which is hosted on the App Service Plan. The current subscription Reader role given doesn't have sufficient permissions to collect web site configuration details.

    -   If the custom role with "Microsoft.Web/sites/config/list/action" is not assigned, Cloudneeti application will not be able to collect data of security policies [listed here.](.././grantAccessToAzureSubscriptionAdditionalRoles/#website-contributor-role)

-   Custom role with permission **"Microsoft.Storage/storageAccounts/listkeys/action"** for Azure Subscription level scope.

    -   Cloudneeti needs "Microsoft.Storage/storageAccounts/listkeys/action" action present in [Storage Account Contributor role](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage) in order to collect metadata configuration of blobs.  The current subscription [Reader role](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#reader) given doesn't have sufficient permissions to list blob keys. 

    -   If the custom role with "Microsoft.Storage/storageAccounts/listkeys/action" is not assigned, Cloudneeti application will not be able to collect data of security policies [listed here.](.././grantAccessToAzureSubscriptionAdditionalRoles/#custom-role-with-permission-microsoftstoragestorageaccountslistkeysaction)

The following steps are done by Microsoft Azure **Subscription Owner** role.


### 3.1 Create custom role(s)
1.	Go to the subscription’s **Access control (IAM)** in the menu
2.	Click **Add custom role**

    ![Assign role](.././images/azureSubscriptions/customRole1.png#thumbnail)

3. Enter **Name** 

    ![Assign role](.././images/azureSubscriptions/customRole2.png#thumbnail)

4. Navigate to **Permissions** tab

    ![Assign role](.././images/azureSubscriptions/customRole3.png#thumbnail)

5. Select below permissions

    ![Assign role](.././images/azureSubscriptions/customRole4.png#thumbnail)

6. **Add** permission

    ![Assign role](.././images/azureSubscriptions/customRole5.png#thumbnail)

7. **Review and create** custom role

    ![Assign role](.././images/azureSubscriptions/customRole6.png#thumbnail)

8. **Create**

    ![Assign role](.././images/azureSubscriptions/customRole7.png#thumbnail)


### 3.2 Grant Azure Subscription custom role 
**This step is optional**

1.	Go to the subscription’s **Access control (IAM)** in the menu
2.	Click **Add** and select **Add role assignment**
3.	Select **Custom role** created in above step and Cloudneeti application
4.	Click **Save** to complete the role assignment

    ![Assign role](.././images/azureSubscriptions/Website_Contributor_Role.png#thumbnail)


## Security Polices with required roles, permissions

The following Security Policies will be excluded if one or multiple roles are
not assigned.

| Permissions                                                  | Number of Excluded Security Policies     |
|--------------------------------------------------------------|------------------------------------------|
| Read All Microsoft Graph permissions                         | 5                                        |
| Reader role for Azure Subscription level scope.              | 0                                        |
| Custom role with permission 'Microsoft.Web/sites/config/list/action' | 11           |
| Custom role with permission 'Microsoft.Storage/storageAccounts/listkeys/action' | 1                                       |

### Custom role with permission "Microsoft.Web/sites/config/list/action" 

Custom role with permission "Microsoft.Web/sites/config/list/action" access is needed to collect data for security policies listed below.

| Policy Title                                                                          | Category                              |
|--------------------------------------------------------------------------------------|---------------------------------------|
| Ensure that WEBSITE_LOAD_CERTIFICATES parameter is not set to '\*' for Mobile Apps   | Azure - Compute (PaaS and Serverless) |
| Ensure that WEBSITE_LOAD_CERTIFICATES parameter is not set to '\*' for API Apps      | Azure - Compute (PaaS and Serverless) |
| Ensure that WEBSITE_LOAD_CERTIFICATES parameter is not set to '\*' for Function Apps | Azure - Compute (PaaS and Serverless) |
| Ensure that WEBSITE_LOAD_CERTIFICATES parameter is not set to '\*' for Web Apps | Azure - Compute (PaaS and Serverless) |
| Ensure that 'App Service Authentication' is enabled for Function apps                | Azure - Compute (PaaS and Serverless) |
| Ensure that 'App Service Authentication' is enabled for API apps                     | Azure - Compute (PaaS and Serverless) |
| Ensure that 'App Service Authentication' is enabled for Mobile apps                  | Azure - Compute (PaaS and Serverless) |
| Ensure that 'App Service Authentication' is enabled for Web apps                     | Azure - Compute (PaaS and Serverless) |
| Ensure that 'App Insights' are configured for Azure Mobile Apps                      | Azure - Compute (PaaS and Serverless) |
| Ensure that 'App Insights' are configured for Azure Function Apps                    | Azure - Compute (PaaS and Serverless) |
| Ensure that 'App Insights' are configured for Azure API Apps                         | Azure - Compute (PaaS and Serverless) |

### Custom role with permission 'Microsoft.Storage/storageAccounts/listkeys/action'

Custom role with permission 'Microsoft.Storage/storageAccounts/listkeys/action' access is needed to collect data for security policies listed below.

| Policy Title                                                                          | Category                              |
|--------------------------------------------------------------------------------------|---------------------------------------|
| Ensure that 'Public access level' is set to Private for Blob Containers                         | Storage Accounts |

