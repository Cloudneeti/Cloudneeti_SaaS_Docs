Cloudneeti offers scan API to get scan status in Cloudneeti for provided cloud account.

        GET https://<CLOUDNEETI API DOMAIN>/api/compliance/license/<LICENSE ID>/account/<ACCOUNT ID>/job/<JOB ID>/status


| Environment	| Values for Cloudneeti API domain     |
|---------------|--------------------------------------|
| PROD 	        |   api.cloudneeti.com                 |
| TRIAL 	| trialapi.cloudneeti.com              |


### URI Parameters 

| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| JOB ID     |          [Cloud Account Scan Job Id](#account-id)              | Required|


### Header

| Key	        | Value                                |
|---------------|--------------------------------------|
| Ocp-Apim-Subscription-Key 	| [Cloudneeti API key generated](../../administratorGuide/configureCloudneetiAPIAccess/)             |


### Response

| Name           |           Type       |          Description  |
|----------------|----------------------|-----------------------|
| jobStatus	 |           String     | Cloudneeti cloud account scan job status       |
| statusCode |     Integer      | Cloudneeti API response status code      |
| message	 |           String     | Response describing operation result as success or failed.      |


<!-- ### Examples

#### Sample Request

        GET https://api.cloudneeti.com/api/compliance/jobId/7b227c87-2fb2-4fe4-bbab-c7318de12f5e/scanStatus -->


### Sample Response

        {
                "result": {
                        "jobStatus": "Success"
                },
                "statusCode": 200,
                "message": "Request Successful"
        }

### Definations

#### JobStatus
| Name           |           Type       |
|----------------|----------------------|
| New            |      String          |
| Running	 |      String          |
| Completed      |      String          |
| Failed         |      String          |