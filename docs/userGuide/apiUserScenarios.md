# API User Scenarios (Preview)

### Actors: Customer Auditor

#### Use case 1
Get compliance summary result against configuration metadata for current infrastructure.

#### Prerequisite: Cloudneeti has the Cloud Account onboarded.

#### Description:
1. Customer requests summary result.

2. On successful authorization, Cloudneeti Compliance API returns the compliance summary result
Customer Dev-ops pipeline then logs the summary result.
 

### Actors: Customer Dev-ops

#### Use Case 1
Scan configuration metadata for recently deployed infrastructure changes

#### Pre –requisite: Dev-ops obtained the authorization token using connected app details

#### Description:
1. Dev-ops pipeline deploys new infrastructure changes.

2. Dev-ops pipeline requests Cloudneeti Compliance API to scan resources.

3. Cloudneeti Compliance API performs authorization on request made.
On successful authorization, Compliance API creates job and triggers data collection.

4. Data collection process scans the configuration metadata against Cloudneeti policies and summarize the result.

5. Compliance API returns control back to dev-ops pipeline after triggering the data collection


#### Use Case 2
Provide compliance summary result for recently deployed infrastructure changes

#### Pre –requisite: 

1. Customer Dev-ops obtained the authorization token using connected app details

2. Data collection completed for current deployed changes

Description:

1. Customer Dev-ops pipeline requests summary result using job id.

2. On successful authorization, Cloudneeti Compliance API returns the compliance summary result
Customer Dev-ops pipeline then logs the summary result.
