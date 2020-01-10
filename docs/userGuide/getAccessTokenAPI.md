Acquire an access token

## Configure Cloudneeti API Access
Please refer page [Configure Cloudneeti API Access](../../administratorGuide/configureCloudneetiAPIAccess)

        https://<CLOUDNEETI API DOMAIN>/api/token


| Environment	| Values for CLOUDNEETI API DOMAIN |
|---------------|--------------------------------------|
| PROD 	        |   api.cloudneeti.com                 |
| TRIAL 	| trialapi.cloudneeti.com              |

### GET

| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| Connected App Id   |          [Cloudneeti Connected App Id​](#license-id)                  | Required|
| Connected App Secret   |          [Cloud Connected App Secret](#account-id)                          | Required|

### Responses

| Name           |           Type       |          Description  |
|----------------|----------------------|-----------------------|
| 200 OK	     |           Access Token     | Cloudneeti API access token      |
| Other Status Codes |      Error     | Error response describing why the operation failed.     |




