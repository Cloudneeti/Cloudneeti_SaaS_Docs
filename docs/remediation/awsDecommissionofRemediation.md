To decommission the remediation functionality in AWS Account,

**Disable all the remediation policies** - AWS cloud account security policy
remediation functionality can be disabled from Cloudneeti portal. On disabling
the remediation policies stops the auto-remediation of new resources whenever
deployed.

## STEP 1 Disable Remediation policies

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

## STEP 2 Disable AWS account Remediation

1.  Select desired **License** (1) and **Cloud Account** (2)

2.  Click **Configure**

3.  Select **Configure Account Remediation**

    ![Disable AWS account Remediation](.././images/cloudneetiRemediation/AWS_RemediationStep5.5.png#thumbnail_1)

4. Disable Remediation (1)

5. **Save** (2)

    ![Disable AWS account Remediation](.././images/cloudneetiRemediation/AWS_Decommission.png#thumbnail_1)


6. After successful change in the configuration policies enabled earlier will get deleted.
  In case remediation policies are to be enabled again then policies
  remediation needs to be reconfigured.


## STEP 3 Delete deployment bucket
 
Delete remediation framework deployment bucket using AWS console.

1. Login to AWS console

2. Search for deployment bucket with name **cn-rem-$env-$acc_sha** having below tags

    | S. No. | Tag Name                      | Tag Value                                                                                                                                                                                             |
|--------|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | aws:cloudformation:stack-name | cn-rem-$env-$acc_sha >                                                                                                                    |
| 2      | aws:cloudformation:logical-id | S3Bucket                                                                                                                                                                                              |
| 3      | Description                   | Cloudneeti automatic remediation solution for making cloud resource compliant                                                                                                                         |
| 4      | aws:cloudformation:stack-id   | arn:aws:cloudformation:us-west-1:< AWSAccountID >:stack/cn-rem-$env-$acc_sha   |
| 5      | ServiceName                   | auto-remediation-deployment-bucket       

3. Delete deployment bucket

## STEP 4 Decommission Remediation framework

Decommission of remediation framework take place in two phases.

### 4.1 Remove remediation configuration of multi-account remediation

1.  Open bash terminal

2.  Clone the aws-remediation framework from the git

        git clone https://github.com/Cloudneeti/aws-auto-remediation

3.  Go to remediation framework repository

        cd aws-auto-remediation/multi-mode-remediation

4.	Remove remediation configuration of multi-account remediation

        bash decommission-multi-mode-remediation.sh -a <AWS-account-id> -p <primary-deployment-region> -e <Cloudneeti-environment-prefix> -s <list of regions from where the auto-remediation is to be decommissioned>

(-a) Account Id: 12-digit AWS account Id of the account for which you want to disable remediation 

(-p) Primary AWS Region where main framework is deployed

(-e) Environment prefix: Enter any suitable prefix for your deployment

(-s) Secondary Region(s): List of region(s) from where the auto-remediation is to be decommissioned it should be in programmatic format e.g. us-east-1 or you can provide  ‘all’ for all regions or ‘na’ if you do not want to decommission auto-remediation from other regions.



### 4.2 Remove remediation framework

1.  Open bash terminal

2.  Clone the aws-remediation framework from the git

        git clone https://github.com/Cloudneeti/aws-auto-remediation

3.  Go to remediation framework repository

        cd aws-auto-remediation 

4.  Decommission remediation framework in AWS account 

        bash decommission-remediation-framework.sh -a <AWS-account-id> -p <primary-deployment-region> -e < Cloudneeti-environment-prefix> -s <list of regions from where the auto-remediation is to be decommissioned>

(-a) Account Id: 12-digit AWS account Id of the account where the remediation framework is deployed 

(-p) Primary AWS Region where main framework is deployed

(-e) Environment prefix: Enter any suitable prefix for your deployment

(-s) Secondary Region(s): List of region(s) from where the auto-remediation is to be decommissioned it should be in programmatic format e.g. us-east-1 or you can provide  ‘all’ for all regions or ‘na’ if you do not want to decommission auto-remediation from other regions.
