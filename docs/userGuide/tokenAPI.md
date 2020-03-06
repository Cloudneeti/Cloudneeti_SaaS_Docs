# Acquire an access token

Cloudneeti advised not to store token in localstorage.

### License token

        POST https://<CLOUDNEETI API DOMAIN>/api/authorize/license/<LICENSE ID>/token

| Environment	| Values for CLOUDNEETI API DOMAIN     |
|---------------|--------------------------------------|
| PROD 	        |   api.cloudneeti.com                 |
| TRIAL 	| trialapi.cloudneeti.com              |

#### URI Parameters

| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| LICENSE ID   |          Cloudneeti license id​              | Required|

#### Header

| Key	        | Value                                |
|---------------|--------------------------------------|
| Content-Type 	                |   application/json                 |
| Ocp-Apim-Subscription-Key 	| [Cloudneeti API key generated](../../administratorGuide/configureCloudneetiAPIAccess/#retrieve-cloudneeti-api-key)             |


#### Request body
        {
            APIApplicationId:<API Application Id>, 
            Secret:<API Application Secret>
        }

#### Responses

| Name           |           Type       |          Description  |
|----------------|----------------------|-----------------------|
| token	     |     Access Token     | Cloudneeti API access token      |
| statusCode |      Integer     | Cloudneeti API status code      |
| message    |      String     | Response describing operation result as success or failed.     |


### Account token

        POST https://<CLOUDNEETI API DOMAIN>/api/authorize/license/<LICENSE ID>/token?accountId=<ACCOUNT ID>

| Environment	| Values for CLOUDNEETI API DOMAIN     |
|---------------|--------------------------------------|
| PROD 	        |   api.cloudneeti.com                 |
| TRIAL 	| trialapi.cloudneeti.com              |


#### URI Parameters

| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| LICENSE ID   |          Cloudneeti license id                    | Required|
| ACCOUNT ID   |          Cloudneeti cloud account id              | Required|

#### Header

| Key	        | Value                                |
|---------------|--------------------------------------|
| Content-Type 	                |   application/json                 |
| Ocp-Apim-Subscription-Key 	| [Cloudneeti API key generated](../../administratorGuide/configureCloudneetiAPIAccess/#retrieve-cloudneeti-api-key)             |


#### Request body
        {
            APIApplicationId:<API Application Id>,
            Secret:<API Application Secret>
        }


#### Responses

| Name           |           Type       |          Description  |
|----------------|----------------------|-----------------------|
| token	     |     Access Token         | Cloudneeti API access token      |
| statusCode |      Integer             | Cloudneeti API status code      |
| message    |      String              | Response describing operation result as success or failed.     |

