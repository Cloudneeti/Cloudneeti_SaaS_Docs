# API User Scenarios (Preview)

## Actors: Customer Auditor

### Use case : Get compliance summary result against configuration metadata for current infrastructure.

![Auditor Use Case](.././images/customerAPI/apiUseCaseAuditor.png#thumbnail_1)

#### Prerequisites

1. Cloudneeti has the Cloud Account onboarded.

2. [Configure Cloudneeti API access](../../administratorGuide/configureCloudneetiAPIAccess/)

#### Description

1. [Get Cloudneeti access token for Cloud Account](../../administratorGuide/configureCloudneetiAPIAccess/#account-token/)

2. [Download audit report of Cloud Account for given benchmark](../../userGuide/auditReportAPI/)
 

## Actors: Customer Dev-ops

### Use Case 1 : Scan configuration metadata for recently deployed infrastructure changes

![Devops Use Case](.././images/customerAPI/apiUseCaseDevops.png#thumbnail_1)

#### Prerequisites

1. Cloudneeti has the Cloud Account onboarded.

2. [Configure Cloudneeti API access](../../administratorGuide/configureCloudneetiAPIAccess/)

#### Description
1. Dev-ops pipeline deploys new infrastructure changes.

2. [Get Cloudneeti access token for Cloud Account](../../administratorGuide/configureCloudneetiAPIAccess/#account-token/).

3. [Scan Cloudneeti Cloud Account for recently deployed infrastructure](../../userGuide/initiateScanAPI/)

4. [Check Cloudneeti Cloud Account scan status](../../userGuide/scanStatusAPI/)

5. [Download audit report of Cloud Account for given benchmark](../../userGuide/auditReportAPI/)

6. Verify compliance status, promote or roll back recently deployed infrastructure changes.



### Use Case 2: Onboard and audit configuration metadata for recently deployed infrastructure changes

![Devops Use Case](.././images/customerAPI/apiUseCaseOnboard.png#thumbnail_1)

#### Prerequisites

1. Cloudneeti has the license onboarded and activated in Cloudneeti.

2. [Configure Cloudneeti API access](../../administratorGuide/configureCloudneetiAPIAccess/)

#### Description
1. Dev-ops pipeline deploys new infrastructure changes.

2. [Get Cloudneeti access token for License](../../administratorGuide/configureCloudneetiAPIAccess/#license-token/).

3. [Onboard Cloud Account in Cloudneeti for recently deployed infrastructure](../../administratorGuide/configureCloudneetiAPIAccess/#account-token/)

4. [Add Cloud Account to Cloudneeti API application access scope](../../administratorGuide/configureCloudneetiAPIAccess/#license-token/).


5. [Get Cloudneeti access token for Cloud Account](../../userGuide/updateAPIAppAccessScope/).

5. [Check Cloudneeti Cloud Account scan status](../../userGuide/scanStatusAPI/)

5. [Download audit report of Cloud Account for given benchmark](../../userGuide/auditReportAPI/)

6. Verify compliance status, promote or roll back recently deployed infrastructure changes.
