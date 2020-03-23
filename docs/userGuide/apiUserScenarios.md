# API User Scenarios

## Actors: Customer Auditor

### Use case : Get compliance summary result against configuration metadata for current infrastructure.

![Auditor Use Case](.././images/customerAPI/apiUseCaseAuditor.png#thumbnail_1)

#### Prerequisites

1. Cloudneeti has the Cloud Account onboarded.

2. [Configure Cloudneeti API access](../../administratorGuide/configureCloudneetiAPIAccess/){target=_blank}

#### Description

1. [Get Cloudneeti access token for Cloud Account](../../administratorGuide/configureCloudneetiAPIAccess/#account-token/){target=_blank}

2. [Download audit report of Cloud Account for given benchmark](../../userGuide/auditReportAPI/){target=_blank}
 

## Actors: Customer Dev-ops

### Use Case 1 : Scan configuration metadata for recently deployed infrastructure changes

![Devops Use Case](.././images/customerAPI/apiUseCaseDevops.png#thumbnail_1)

#### Prerequisites

1. Cloudneeti has the Cloud Account onboarded.

2. [Configure Cloudneeti API access](../../administratorGuide/configureCloudneetiAPIAccess/){target=_blank}

#### Description
1. Dev-ops pipeline deploys new infrastructure changes.

2. [Get Cloudneeti access token for Cloud Account](../../administratorGuide/configureCloudneetiAPIAccess/#account-token/){target=_blank}.

3. [Scan Cloudneeti Cloud Account for recently deployed infrastructure](../../userGuide/initiateScanAPI/)

4. [Check Cloudneeti Cloud Account scan status](../../userGuide/scanStatusAPI/){target=_blank}

5. [Download audit report of Cloud Account for given benchmark](../../userGuide/auditReportAPI/){target=_blank}

6. Verify compliance status, promote or roll back recently deployed infrastructure changes.



### Use Case 2: Onboard and audit configuration metadata for recently deployed infrastructure changes

![Devops Use Case](.././images/customerAPI/apiUseCaseOnboard.png#thumbnail_1)

#### Prerequisites

1. Cloudneeti has the license onboarded and activated in Cloudneeti.

2. [Configure Cloudneeti API access](../../administratorGuide/configureCloudneetiAPIAccess/){target=_blank}

#### Description
1. Dev-ops pipeline deploys new infrastructure changes.

2. [Get Cloudneeti access token for License](../../administratorGuide/configureCloudneetiAPIAccess/#license-token/){target=_blank}.

3. [Onboard Cloud Account in Cloudneeti for recently deployed infrastructure](../../userGuide/onboardCloudAccount/){target=_blank}

4. [Add Cloud Account to Cloudneeti API application access scope](../../userGuide/updateAPIAppAccessScope/){target=_blank}.

5. [Get Cloudneeti access token for Cloud Account](../../administratorGuide/configureCloudneetiAPIAccess/#account-token/){target=_blank}.

5. [Check Cloudneeti Cloud Account scan status](../../userGuide/scanStatusAPI/){target=_blank}

5. [Download audit report of Cloud Account for given benchmark](../../userGuide/auditReportAPI/){target=_blank}

6. Verify compliance status, promote or roll back recently deployed infrastructure changes.
