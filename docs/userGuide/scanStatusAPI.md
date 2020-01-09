Cloudneeti offers scan API to get scan status in Cloudneeti for provided cloud account.

        get https://api.cloudneeti.com/api/jobId/<JOBID>/scanStatus

### URI Parameters 

| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| JOBID     |          [Cloud Account Scan Job Id](#account-id)              | Required|

### Responses

| Name           |           Type       |          Description  |
|----------------|----------------------|-----------------------|
| 200 OK	     |           Scan Status     | Cloudneeti cloud account scan job status      |
| Other Status Codes |      Error     | Error response describing why the operation failed.     |


### Examples

#### Sample Request

        get https://api.cloudneeti.com/api/license/9085e05b-c5fe-49e1-9511-af4002aad6c4/account/7b227c87-2fb2-4fe4-bbab-c7318de12f5e/scanStatus

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