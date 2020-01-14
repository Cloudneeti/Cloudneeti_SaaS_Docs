Cloudneeti offers scan API to get scan status in Cloudneeti for provided cloud account.

        get https://<CLOUDNEETI API DOMAIN>/api/scan/status?jobId=<JOB ID>


| Environment	| Values for CLOUDNEETI API DOMAIN |
|---------------|--------------------------------------|
| PROD 	        |   api.cloudneeti.com                 |
| TRIAL 	| trialapi.cloudneeti.com              |


### URI Parameters 

| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| JOB ID     |          [Cloud Account Scan Job Id](#account-id)              | Required|

### Responses

| Name           |           Type       |          Description  |
|----------------|----------------------|-----------------------|
| 200 OK	     |           Scan Status     | Cloudneeti cloud account scan job status      |
| Other Status Codes |      Error     | Error response describing why the operation failed.     |


### Examples

#### Sample Request

        GET https://api.cloudneeti.com/api/compliance/jobId/7b227c87-2fb2-4fe4-bbab-c7318de12f5e/scanStatus

#### Sample Response
Status code: 200

        {
            "jobStatus" : "Completed"
        }

#### Definations

##### JobStatus
| Name           |           Type       |
|----------------|----------------------|
| New    	     |      String          |
| Running	     |      String          |
| Completed      |      String          |
| Failed         |      String          |