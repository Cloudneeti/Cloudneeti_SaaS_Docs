Cloud account health status API 
===============================

The benchmarks API provides account health status for given cloud account in Cloudneeti to get insights into the state of your cloud account onboarded in Cloudneeti like missing pre-requisite permissions, configurations and scan quota consumed on every cloud account scan. The filters available through the API enable you to view your status across different cloud accounts.

        GET https://<CLOUDNEETI API DOMAIN>/audit/license/<LICENSE ID>/account/<ACCOUNT ID>/healthstatus

| Environment	| Values for Cloudneeti API domain     |
|---------------|--------------------------------------|
| PROD 	        |   api.cloudneeti.com                 |
| TRIAL 	    | trialapi.cloudneeti.com              |

### URI Parameters

| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| LICENSE ID  |          [Cloudneeti license id​](#license-id)                  | Required|
| ACCOUNT ID  |          [Cloud account id​](#account-id)                          | Required|

### Authorization
| Type           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| Bearer Token  |          [Account Token](../../userGuide/tokenAPI/#account-token)                   | Required|

### Header

| Key	        | Value                                |
|---------------|--------------------------------------|
| Ocp-Apim-Subscription-Key 	| [Cloudneeti API key generated](../../administratorGuide/configureCloudneetiAPIAccess/)             |


### Response

| Name           |           Type       |          Description  |
|----------------|----------------------|-----------------------|
| result 	 |           Object     | Cloudneeti cloud account account health status details      |
| statusCode |     Integer          | Cloudneeti API response status code      |
| message	 |           String     | Response describing operation result as success or failed.      |


### Sample response

#### Azure

        {
            "result": {
                "prerequisites": [
                    {
                        "name": "Web Site Contributor",
                        "isHealthy": "complete",
                        "description": "Required to collect Api/Mobile/Web/Function app metadata",
                        "noOfPolicies": "11",
                        "required": false,
                        "category": "Permissions",
                        "referLink": "https://docs.cloudneeti.com/onboardingGuide/grantAccessToAzureSubscriptionAdditionalRoles/#31-grant-azure-subscription-website-contributor-role"
                    },
                    {
                        "name": "Storage Account Contributor/Storage Account Key Operator Service",
                        "isHealthy": "incomplete",
                        "description": "Required to collect data for blob metadata",
                        "noOfPolicies": "1",
                        "required": false,
                        "category": "Permissions",
                        "referLink": "https://docs.cloudneeti.com/onboardingGuide/grantAccessToAzureSubscriptionAdditionalRoles/#32-grant-azure-subscription-storage-account-contributor-role"
                    },
                    {
                        "name": "Network Contributor",
                        "isHealthy": "incomplete",
                        "description": "Required to collect data for Network Security Groups metadata",
                        "noOfPolicies": "1",
                        "required": false,
                        "category": "Permissions",
                        "referLink": "https://docs.cloudneeti.com/onboardingGuide/grantAccessToAzureSubscriptionAdditionalRoles/#33-grant-azure-subscription-network-contributor-role"
                    },
                    {
                        "name": "IAM data collector",
                        "isHealthy": "incomplete",
                        "description": "An Azure Automation Account resource is deployed to collect data from Azure Active Directory control plane which exposes the data only through PowerShell.In case of pre-requisite failure, data from past 30 days is utilized for compliance",
                        "noOfPolicies": "18",
                        "required": false,
                        "category": "Pre-Requisites - Advanced Security Configurations",
                        "referLink": "https://docs.cloudneeti.com/onboardingGuide/azureAdvancedSecurityConfigurations/"
                    },
                    {
                        "name": "Cloudneeti Kubernetes agent",
                        "isHealthy": "incomplete",
                        "description": "The Cloudneeti Kubernetes agent scans the Kubernetes cluster configurations metadata. The agent runs periodically as per the cron-job schedule selected.In case of pre-requisite failure, data from past 30 days is utilized for compliance",
                        "noOfPolicies": "73",
                        "required": false,
                        "category": "Pre-Requisites - Kubernetes Baseline",
                        "referLink": "https://docs.cloudneeti.com/onboardingGuide/configureCloudneetiAgentInAKS/"
                    },
                    {
                        "name": "Security Center quick win",
                        "isHealthy": "incomplete",
                        "description": "Azure Security Center(ASC) helps to audit the security configurations of resource along with security recommendations. Configure ASC configuration using quick wins.",
                        "noOfPolicies": "117",
                        "required": false,
                        "category": "Pre-Requisites - Enable Azure Security Center audit policies",
                        "referLink": "https://docs.cloudneeti.com/onboardingGuide/enableASCAuditPolicies/"
                    },
                    {
                        "name": "Application.Read.All/Directory.Read.All",
                        "isHealthy": "complete",
                        "description": "Required to collect azure active directory applications metadata",
                        "noOfPolicies": "2",
                        "required": false,
                        "category": "Permissions",
                        "referLink": "https://docs.cloudneeti.com/onboardingGuide/azureSubscriptions/#grant-admin-consent-for-api-permissions_1"
                    },
                    {
                        "name": "User.Read.All/Directory.Read.All",
                        "isHealthy": "complete",
                        "description": "Required to collect azure active directory users metadata",
                        "noOfPolicies": "3",
                        "required": false,
                        "category": "Permissions",
                        "referLink": "https://docs.cloudneeti.com/onboardingGuide/azureSubscriptions/#grant-admin-consent-for-api-permissions_1"
                    },
                    {
                        "name": "Subscription Reader",
                        "isHealthy": "complete",
                        "description": "Required to collect azure resource configuration metadata from azure subscription",
                        "noOfPolicies": "All",
                        "required": true,
                        "category": "Permissions",
                        "referLink": "https://docs.cloudneeti.com/onboardingGuide/azureSubscriptions/#21-grant-azure-subscription-reader-role"
                    },
                    {
                        "name": "OS Baseline",
                        "isHealthy": "incomplete",
                        "description": "Required to collect OS Baseline configuration metadata",
                        "noOfPolicies": "513",
                        "required": false,
                        "category": "Pre-Requisites - OS Baseline Configurations",
                        "referLink": "https://docs.cloudneeti.com/onboardingGuide/azureVulnerability/"
                    }
                ],
                "lastScannedTime": "2020-06-08T12:48:49Z",
                "accountScanQuotaDetails": {
                    "allocatedQuota": 5,
                    "consumedQuota": 7
                }
            },
            "statusCode": 200,
            "message": "Request Successful"
        }

Appendix 
---------

### Cloudneeti license and account details

Login to Cloudneeti portal as a License Admin.

##### LICENSE ID

1.  Navigate to **Features and Quota​s** under **Configurations**

2.  Copy License id and paste to notepad.

    ![License id](.././images/onboardingOffice365Subscription/License_Id.png#thumbnail)

##### ACCOUNT ID

1.  Navigate to **Cloud Accounts** in **Configurations**

2.  Copy Cloud Account id and paste to notepad.

    ![Manage Accounts](.././images/onboardingOffice365Subscription/Manage_Accounts.png#thumbnail)


