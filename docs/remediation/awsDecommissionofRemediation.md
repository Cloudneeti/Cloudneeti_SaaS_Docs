To decommission the remediation functionality in AWS Account,

**Disable all the remediation policies** - AWS cloud account security policy
remediation functionality can be disabled from Cloudneeti portal. On disabling
the remediation policies stops the auto-remediation of new resources whenever
deployed.

## Disable Remediation policies

Login to Cloudneeti portal with **License Admin** role

1.  Select desired License and Account

2.  Click **Configure**

3. Select **Configure security policies**

    ![Decommission of remediation](.././images/cloudneetiRemediation/AWS_RemediationStep5.3.png#thumbnail_1)

4. Select **Remediation Available** in filter to see only the policies with
    remediation available. (1)

5. Disable the policy remediation (2)

6. Click **Save** (3)

    ![Decommission of remediation](.././images/cloudneetiRemediation/AWS_RemediationStep5.4.png#thumbnail_1)

**Note:**

-   The resource configuration updated during remediation will remain the same
    after disabling the remediation policies.

## Disable AWS account Remediation

1.  Select desired **License** (1) and **Cloud Account** (2)

2.  Click **Configure**

3.  Select **Configure Account Remediation**

    ![Disable AWS account Remediation](.././images/cloudneetiRemediation/AWS_RemediationStep5.5.png#thumbnail_1)

4. Disable Remediation (1)

5. **Save** (2)

6. After successful change in the configuration policies enabled earlier will get deleted.
  In case remediation policies are to be enabled again then policies
  remediation needs to be reconfigured.

## Decommission Remediation framework

Decommission of remediation framework take place in two phases.

<!-- Delete deployment bucket using AWS console -->

### Remove remediation configuration of multi-account remediation

1.  Open bash

2.  Clone the aws-remediation framework from the git

        git clone https://github.com/Cloudneeti/aws-auto-remediation

3.  Go to remediation framework repository

        cd aws-auto-remediation

4.	Remove remediation configuration of multi-account remediation

        bash decommission-multi-mode-remediation.sh -a <12-digit-account-id> -e <environment-prefix>

(-a) Account Id: 12-digit AWS account Id of the account for which you want to disable remediation 
(-e) Environment prefix: Enter any suitable prefix for your deployment
 


## Remove remediation framework

1.  Open bash

2.  Clone the aws-remediation framework from the git

        git clone https://github.com/Cloudneeti/aws-auto-remediation

3.  Go to remediation framework repository

        cd aws-auto-remediation 

4.  Deploy remediation framework in AWS account which need to be remediated.

        bash decommission-remediation-framework.sh [-a <12-digit-account-id>] [-e <environment-prefix>]

    (-a) Account Id: 12-digit AWS account Id of the account where the remediation framework is deployed
    (-e) Environment prefix: Enter any suitable prefix for your deployment
