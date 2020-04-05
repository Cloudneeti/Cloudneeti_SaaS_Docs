# Override security policy status

## Overview

Cloudneeti allows users to override security policy status. Overriding policy status indicates that you have completed resolution and if done without caution, it might carry an inherent security risk. New resolution status will be effective at a cloud account level across all benchmarks post next successful Cloud account scan.

![Override overview](.././images/overridePolicyStatus/overview.png#thumbnail_1)

## Required roles

Following roles are required to override the security policy status.
- **License Admin**
- **Account Admin**

## Override status options

One of the below status can be chosen to override the security policy status

### Pass – 3rd Party
Override a security policy to resolve status to **Pass – 3rd Party** where there are compensating controls available. 


### Pass – Manual override

Security policy can be reviewed using audit procedure and if resources' configurations are compliant, user can mark override policy status "Manual" and mark it **Pass – Manual override**. User is advised to periodically review resource configurations compliance state. 


### Pass – Time bound exception

**Pass – Time bound exception** can be used when there is a need to exceptionaly pass a policy with a time bound date. Policy status will be overridden till given date. Once the time bound period is over, next successful scan will show policy status compliance as per scan results.

### Exclude – Not applicable

**Exclude – Not applicable** disables data collection at a security policy level

Note: For bulk exclusion use [Security policies under configurations](../../securityPolicyExclusions/) to exclude security policies at global and account level.


## Override state flow

User can override security policy status once policy status available  i.e. at lease one scan is successful upon cloud account onboarding. Policy should not be excluded at account or license level.

![Override overview](.././images/overridePolicyStatus/OverrideFlow.png#thumbnail_1)

## Override security policy at a cloud account level

### STEP 1: Navigate to security policy details page

1. Navigate to Secuirty policy page from Benchmark Summary page

    ![Navigate](.././images/overridePolicyStatus/benchmark.png#thumbnail)

    ![Policy details page](.././images/overridePolicyStatus/policy_details_page.png#thumbnail)


### STEP 2: Override security policy at a cloud account level 

1. Click Override

    ![Override](.././images/overridePolicyStatus/override.png#thumbnail)

2. Select new security policy status

    ![Override](.././images/overridePolicyStatus/override_1.png#thumbnail)

3. Add security policy new resolution notes and resolve

    ![Override](.././images/overridePolicyStatus/override_2.png#thumbnail_1)

4. Check success message

    ![Override](.././images/overridePolicyStatus/rescan_1.png#thumbnail_1)


### STEP 3: Scan cloud account or wait for a scheduled scan to happen

1. Initiate cloud account scan or wait for next scheduled scan

    ![Scan](.././images/overridePolicyStatus/rescan_2.png#thumbnail_1)

2. Check success message

    ![Scan](.././images/overridePolicyStatus/rescan_3.png#thumbnail_1)

### STEP 4: Verify overridden security policy status

1. Verify new resolution state for security policy

    ![Scan](.././images/overridePolicyStatus/Overridden_1.png#thumbnail_1)

### Dashboards 

 <!-- brief explanation of the Risk, policy compliance and trend charts. Just 1 image and highlight the override status on the dashboard -->
 New resolution status will be effective from the next data collection cycle in all dashboards.

#### Compliance

Increase in the number of passed policies and compliance percentage if polcies overridden resolved as passed.

![UI post override](.././images/overridePolicyStatus/Overridden_Compliance.png#thumbnail_1)

#### Risk

Decrease in the number of policies if policies overridden resolved as passed.

![UI post override](.././images/overridePolicyStatus/Overridden_Risk.png#thumbnail_1)

#### Asset Security

Related policy status is updated to Pass if policies overridden resolved as passed.

![UI post override](.././images/overridePolicyStatus/Overridden_Asset.png#thumbnail_1)


### UI (summary and details) 

#### Summary 

​New resolution status will be effective from the next data collection cycle in all benchmarks. Please find below benchmark summary page.

![UI post override](.././images/overridePolicyStatus/BenchmarkSummary.png#thumbnail_1)


1. **Risk Matrix (based on ISO 27005)** will have decrease  in number of policies overridden resolved as passed.

    ![UI post override](.././images/overridePolicyStatus/risk.png#thumbnail_1)

2. **Compliance posture** will increase the passed policies and compliance percentage if policies overridden resolved as passed.

    ![UI post override](.././images/overridePolicyStatus/policyCompliance.png#thumbnail_1)

3. **Policy Compliance Trend** will show updates policies overridden resolved as passed.

    ![UI post override](.././images/overridePolicyStatus/trend.png#thumbnail_1)

#### Policy Details

New resolution status will be effective from the next data collection cycle on Policy details page. Details like Policy status with details (1), Resolution Note (2), Override Initiated by (3) will appear.

![UI post override](.././images/overridePolicyStatus/Overridden_1.png#thumbnail_1)


### Reports

New resolution status will be effective in reports from the next data collection cycle.


### Audit Logs

![Audit Logs](.././images/overridePolicyStatus/AuditLog.png#thumbnail_1)


## Undo override security policy 

1. Navigate to policy details page

    ![Undo](.././images/overridePolicyStatus/undo_1.png#thumbnail_1)

2. Click on **Undo Override**

    ![Undo](.././images/overridePolicyStatus/undo_2.png#thumbnail_1)

3. Confirm by clicking **Yes Please**

    ![Undo](.././images/overridePolicyStatus/undo_3.png#thumbnail_1)

4. A success message will appear

    ![Undo](.././images/overridePolicyStatus/undo_4.png#thumbnail_1)

5. Undone resolution status will be effective from the next data collection cycle.



