Cloudneeti offers scan API to initiate scan in Cloudneeti for given cloud account.

       GET https://<CLOUDNEETI API DOMAIN>/api/compliance/license/<LICENSE ID>/account/<ACCOUNT ID>/rescan


| Environment	| Values for Cloudneeti API domain     |
|---------------|--------------------------------------|
| PROD 	        |   api.cloudneeti.com                 |
| TRIAL 	| trialapi.cloudneeti.com              |


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
| jobId 	 |           String     | Cloudneeti cloud account scan job id       |
| statusCode |     Integer      | Cloudneeti API response status code      |
| message	 |           String     | Response describing operation result as success or failed.      |


<!-- ### Examples -->

<!-- #### Sample Request

        GET https://api.cloudneeti.com/api/compliance/license/9085e05b-c5fe-49e1-9511-af4002aad6c4/account/7b227c87-2fb2-4fe4-bbab-c7318de12f5e/scan -->

### Sample Response
    
        {
            "result": {
                "jobId": "15723a00-bbb3-4279-b48c-2bb8c1e78283"
            },
            "statusCode": 200,
            "message": "Request Successful"
        }