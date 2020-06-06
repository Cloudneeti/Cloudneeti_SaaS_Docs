Get cloud account health status API 
===================================

The benchmarks API provides account health status for given cloud account in Cloudneeti.

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
| statusCode |     Integer      | Cloudneeti API response status code      |
| message	 |           String     | Response describing operation result as success or failed.      |


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


