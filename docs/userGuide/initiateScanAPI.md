Cloudneeti offers scan API to initiate scan in Cloudneeti for provided cloud account.

        https://api.cloudneeti.com/api/license/<LICENSE>/account/<ACCOUNT>/scan

### GET

| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| LICENSE   |          [Cloudneeti License Id​](#license-id)                  | Required|
| ACCOUNT   |          [Cloud Account Id​](#account-id)                          | Required|


### Responses

| Name           |           Type       |          Description  |
|----------------|----------------------|-----------------------|
| 200 OK	     |           Job Id     | Cloudneeti cloud account scan job id      |
| Other Status Codes |      Error     | Error response describing why the operation failed.     |

### Sample Response
Status code: 200

        {
            "jobId" : "5d64408e-4ca3-41f7-b725-6914f3012afa"
        }