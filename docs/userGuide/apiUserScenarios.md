# API User Scenarios (Preview)

### Actors: Customer Auditor

##### Use case : Get compliance summary result against configuration metadata for current infrastructure.

![Auditor Use Case](.././images/customerAPI/apiUseCaseAuditor.png#thumbnail_1)

##### Prerequisites

1. Cloudneeti has the Cloud Account onboarded.

2. [Configure Cloudneeti API Access](../../administratorGuide/configureCloudneetiAPIAccess)

##### Description

1. [Get Cloudneeti access token](../../userGuide/getAccessTokenAPI)

2. [Download audit report of Cloud Account for given Benhcmark](../../userGuide/auditReportAPI)
 

### Actors: Customer Dev-ops

##### Use Case : Scan configuration metadata for recently deployed infrastructure changes

![Devops Use Case](.././images/customerAPI/apiUseCaseDevops.png#thumbnail_1)

##### Prerequisites

1. Cloudneeti has the Cloud Account onboarded.

2. [Configure Cloudneeti API Access](../../administratorGuide/configureCloudneetiAPIAccess)

##### Description
1. Dev-ops pipeline deploys new infrastructure changes.

2. [Get Cloudneeti access token](../../userGuide/getAccessTokenAPI).

3. [Scan Cloudneeti Cloud Account for recently deployed infrastructure](../../userGuide/getAccessTokenAPI)

4. [Download audit report of Cloud Account for given Benhcmark](../../userGuide/auditReportAPI)

5. Verify compliance status, promote or roll back recently deployed infrastructure changes.
