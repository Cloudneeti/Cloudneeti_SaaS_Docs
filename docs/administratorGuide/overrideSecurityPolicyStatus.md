# Override security policy status

## Overview

Cloudneeti allows users to override the security policy status. Overriding policy status indicates that you have completed resolution and if done without caution, it might carry an inherent security risk. New resolution status will be effective at clodu account level across all bechmarks post next successful Cloud account scan.


![Override overview](.././images/overridePolicyStatus/overview.png#thumbnail_1)


## Required roles

Following roles are required to override the security policy status.
- **License Admin**
- **Account Admin**


## Override status options

One of the below status can be chosen to override the security policy status

### Pass – 3rd Party
User can override a security policy to **Pass – 3rd Party** where there are compensating controls available. 


### Pass – Manual override

Security policy can be reviewed by customer using audit procedure and if resources' configuration are compliant, user can mark override policy status "Manual" and mark it **Pass – Manual override**. User is advised to periodically review resource configurations compliance state. 


### Pass – Time bound exception

**Pass – Time bound exception** can be used when there is a need to exceptionaly pass a policy with a time bound. Policy status will be overridden till given date. Once the time bound is over, next successful scan will show policy status compliance as per scan results.

### Exclude – Not applicable


Note: For bulk exclusion use [Security policies under configurations](../../securityPolicyExclusions/) to enable and disable data collection at a security policy level. Please refer page to exclude security policies at global and account level.


## Override state flow

User can override security policy status once policy status avaiable i.e. at lease first scan is successful upon cloud account onboarding. Policy should not be exluded at account or license level.

![Override overview](.././images/overridePolicyStatus/OverrideFlow.png#thumbnail_1)

## Override security policy at cloud account level

### STEP 1: Navigate to security policy details page

1. Navigate to Secuirty policy page from Benchamrk Summary page

    ![Navigate](.././images/overridePolicyStatus/benchmark.png#thumbnail)

    ![Policy details page](.././images/overridePolicyStatus/policy_details_page.png#thumbnail)


### STEP 2: Override security policy at cloud account level 
1. Click Override

    ![Override](.././images/overridePolicyStatus/override.png#thumbnail)

2. Select new security policy status

    ![Override](.././images/overridePolicyStatus/override_1.png#thumbnail)

3. Add security policy new resolution notes and resolve

    ![Override](.././images/overridePolicyStatus/override_2.png#thumbnail_1)

4. Check success message

    ![Override](.././images/overridePolicyStatus/rescan_1.png#thumbnail_1)

### STEP 3: Scan cloud account or wait for scheduled scan to happen

1. Initiate cloud account scan ot wait for next scheduled scan

    ![Sacn](.././images/overridePolicyStatus/rescan_2.png#thumbnail_1)

2. Check success message

    ![Sacn](.././images/overridePolicyStatus/rescan_3.png#thumbnail_1)

### STEP 4: Verify overidden security policy status

1. Verify new resolution state for security policy

    ![Sacn](.././images/overridePolicyStatus/Overridden_1.png#thumbnail_1)



### Dashboards 

 <!-- brief explanation of the Risk, policy compliance and trend charts. Just 1 image and highlight the override status on the dashboard -->

#### Compliance

#### Risk

#### Asset


### UI (summary and details) 

#### Summary

#### Details


### Reports

#### PDF

#### CSV



### Audit Logs

#### Override

#### Update override

#### Undo override



## Undo override security policy 





