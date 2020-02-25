Cloudneeti offers config API to update API application access scope to add a Cloud Account in Cloudneeti.


        POST https://<CLOUDNEETI API DOMAIN>/api/onboarding/license/<LICENSE ID>/config

| Environment	| Values for CLOUDNEETI API DOMAIN     |
|---------------|--------------------------------------|
| PROD 	        |   api.cloudneeti.com                 |
| TRIAL 	| trialapi.cloudneeti.com              |


### Header

| Key	        | Value                                |
|---------------|--------------------------------------|
| Content-Type 	                |   application/json                 |
| Ocp-Apim-Subscription-Key 	| [Cloudneeti API key generated](../../administratorGuide/configureCloudneetiAPIAccess/)             |


### Request body
        {
            "accountId": <Cloud Account Id>
        }



| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| API App Id   |          [Cloudneeti API App Id​](#license-id)                  | Required|
| API App Secret   |          [Cloudneeti API App Secret](#account-id)                          | Required|

### Responses

| Name           |           Type       |          Description  |
|----------------|----------------------|-----------------------|
| accountId	 |           String     | Cloudneeti API access token      |
| jobId  	 |           String     | Cloudneeti API access token      |
| 200 OK	 |     Access Token     | Cloudneeti API access token      |
| Other Status Codes |      Error     | Error response describing why the operation failed.     |

### Sample Response
{
    "result": "Account Added",
    "statusCode": 200,
    "message": "Request Successful"
}

