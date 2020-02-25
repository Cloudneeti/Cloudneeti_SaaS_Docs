Cloudneeti offers scan API to initiate scan in Cloudneeti for given cloud account.

       GET https://<CLOUDNEETI API DOMAIN>/api/compliance/license/<LICENSE ID>/account/<ACCOUNT ID>/rescan


| Environment	| Values for CLOUDNEETI API DOMAIN |
|---------------|--------------------------------------|
| PROD 	        |   api.cloudneeti.com                 |
| TRIAL 	| trialapi.cloudneeti.com              |

### URI Parameters

| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| LICENSE ID  |          [Cloudneeti License Id​](#license-id)                  | Required|
| ACCOUNT ID  |          [Cloud Account Id​](#account-id)                          | Required|

### Header

| Key	        | Value                                |
|---------------|--------------------------------------|
| Ocp-Apim-Subscription-Key 	| [Cloudneeti API key generated](../../administratorGuide/configureCloudneetiAPIAccess/)             |

### Responses

| Name           |           Type       |          Description  |
|----------------|----------------------|-----------------------|
| 200 OK	     |           Job Id     | Cloudneeti cloud account scan job id      |
| Other Status Codes |      Error     | Error response describing why the operation failed.     |


### Examples

#### Sample Request

        GET https://api.cloudneeti.com/api/compliance/license/9085e05b-c5fe-49e1-9511-af4002aad6c4/account/7b227c87-2fb2-4fe4-bbab-c7318de12f5e/scan

#### Sample Response
{
    "result": {
        "accountId": "7b227c87-2fb2-4fe4-bbab-c7318de12f5e",
        "jobId": "\"8e2ca002-cb1c-4344-966b-1053d09642c5\""
    },
    "statusCode": 200,
    "message": "Request Successful"
}