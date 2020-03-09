Cloudneeti offers config API to update API application access scope to add a Cloud Account in Cloudneeti.


        PUT https://<CLOUDNEETI API DOMAIN>/api/onboarding/license/<LICENSE ID>/config

| Environment	| Values for Cloudneeti API domain      |
|---------------|--------------------------------------|
| PROD 	        |   api.cloudneeti.com                 |
| TRIAL 	| trialapi.cloudneeti.com              |


### URI Parameters

| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| LICENSE ID   |          Cloudneeti license id                    | Required|


### Authorization
| Type           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| Bearer Token  |          [License Token](../../userGuide/tokenAPI/##license-token)                   | Required|

### Header

| Key	        | Value                                |
|---------------|--------------------------------------|
| Content-Type 	                |   application/json                 |
| Ocp-Apim-Subscription-Key 	| [Cloudneeti API key generated](../../administratorGuide/configureCloudneetiAPIAccess/)             |


### Request body
        {
            "accountId": <Cloud account id>
        }


### Response

| Name           |           Type       |          Description  |
|----------------|----------------------|-----------------------|
| result	 |           String     | On successful addition of Cloud Account to scope       |
| statusCode |     Integer      | Cloudneeti API response status code      |
| message	 |           String     | Response describing operation result as success or failed.      |

### Sample Response
    
        {
            "result": "Account Added",
            "statusCode": 200,
            "message": "Request Successful"
        }

