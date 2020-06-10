Get License Accounts API (Preview)
=================================

The benchmarks API provides list of the list of Cloud Accounts for given License in Cloudneeti.

        GET https://<CLOUDNEETI API DOMAIN>/onboarding/license/<LICENSE ID>/licenseAccounts

| Environment	| Values for Cloudneeti API domain     |
|---------------|--------------------------------------|
| PROD 	        |   api.cloudneeti.com                 |
| TRIAL 	    | trialapi.cloudneeti.com              |

### URI Parameters

| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| LICENSE ID  |          [Cloudneeti license id​](#license-id)                  | Required|

### Authorization
| Type           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| Bearer Token  |           [License Token](../../userGuide/tokenAPI/#license-token)  | Required|

### Header

| Key	        | Value                                |
|---------------|--------------------------------------|
| Ocp-Apim-Subscription-Key 	| [Cloudneeti API key generated](../../administratorGuide/configureCloudneetiAPIAccess/)             |


### Response

| Name           |           Type       |          Description  |
|----------------|----------------------|-----------------------|
| result 	 |     Object       | List of cloud accounts in given License                         |
| statusCode |     Integer      | Cloudneeti API response status code                             |
| message	 |     String       | Response describing operation result as success or failed.      |


### Sample response

                {
                "result": {
                        "licenseId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx",
                        "accounts": [
                        {
                                "accountId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx",
                                "accountName": "Azure",
                                "isInApiScope": true,
                                "connectorType": "Azure"
                        },
                        {
                                "accountId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx",
                                "accountName": "office",
                                "isInApiScope": true,
                                "connectorType": "Office365"
                        }
                        ],
                        "apis": [
                        "Account.Audit",
                        "Account.Health",
                        "Account.Rescan",
                        "Account.GetJobstatus",
                        "Account.InsertKubernetesClusterData",
                        "License.AddAccount",
                        "License.UpdateAPIAccess",
                        "License.GetAPIAccess"
                        ]
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



