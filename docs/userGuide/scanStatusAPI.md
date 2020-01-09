Cloudneeti offers scan API to get scan status in Cloudneeti for provided cloud account.

        https://api.cloudneeti.com/api/license/<LICENSE>/account/<ACCOUNT>/scanStatus

### GET

| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| LICENSE   |          [Cloudneeti License Id​](#license-id)                  | Required|
| ACCOUNT   |          [Cloud Account Id​](#account-id)                       | Required|
| JOBID     |          [Cloud Account Scan Job Id](#account-id)              | Optional|

### Responses

| Name           |           Type       |          Description  |
|----------------|----------------------|-----------------------|
| 200 OK	     |           Scan Status     | Cloudneeti cloud account scan job id      |
| Other Status Codes |      Error     | Error response describing why the operation failed.     |

### Sample Response
Status code: 200

        {
            "jobStatus" : "Completed"
        }