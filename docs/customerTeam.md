Azure Onboarding to Cloudneeti application is the process of granting Cloudneeti application access to customer’s cloud accounts.

Before onboarding, please ensure that users with the following roles are available.

| Role     | Action to perform   |
| --------|---------|
| IT Manager / Architect  | Ensure a user is appointed as a customer [Application Administrator](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-assign-admin-roles#available-roles)|
| Application Administrator  | Create Service Principal [Manually or using Automation script] [Manual](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal) OR Automation Script |
| An Individual with Global Azure AD Administrator role   | **[Preferred]** Assign an Application Administrator role to any user who will be onboarding Azure subscription to Cloudneeti. [Refer Link](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-assign-admin-roles#available-roles) **OR** Create a Service Principal [Manual](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal) OR Automation Script **AND** Grant Permissions on Service principal in Azure AD |
| An Individual with Owner/Contributor permissions   | Add Service Principal created above to the Azure Subscription and assign reader role [Refer Link](https://docs.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal)|