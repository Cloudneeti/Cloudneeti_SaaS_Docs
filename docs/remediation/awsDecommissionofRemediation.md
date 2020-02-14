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

6. After successful change in the configuration policies enabled earlier will get deleted.
  In case remediation policies are to be enabled again then policies
  remediation needs to be reconfigured.


## STEP 3 Delete deployment bucket
 
Delete remediation framework deployment bucket using AWS console.

1. Login to AWS console

2. Search for deployment bucket with name **cn-awsrem-$env** having below tags

    | S. No. | Tag Name                      | Tag Value                                                                                                                                                                                             |
|--------|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | aws:cloudformation:stack-name | ptreg-< stack name >                                                                                                                    |
| 2      | aws:cloudformation:logical-id | S3Bucket                                                                                                                                                                                              |
| 3      | Description                   | Cloudneeti automatic remediation solution for making cloud resource compliant                                                                                                                         |
| 4      | aws:cloudformation:stack-id   | arn:aws:cloudformation:us-west-1:< AWSAccountID >:stack/ptreg-< stack id >  |
| 5      | ServiceName                   | auto-remediation-deployment-bucket       

3. Delete deployment bucket

## STEP 4 Decommission Remediation framework

Decommission of remediation framework take place in two phases.

### 4.1 Remove remediation configuration of multi-account remediation

1.  Open bash

2.  Clone the aws-remediation framework from the git

        git clone https://github.com/Cloudneeti/aws-auto-remediation

3.  Go to remediation framework repository

        cd aws-auto-remediation/multi-mode-remediation

4.	Remove remediation configuration of multi-account remediation

        bash decommission-multi-mode-remediation.sh -a <12-digit-account-id> -e <environment-prefix>

(-a) Account Id: 12-digit AWS account Id of the account for which you want to disable remediation 
(-e) Environment prefix: Enter any suitable prefix for your deployment
 


### 4.2 Remove remediation framework

1.  Open bash

2.  Clone the aws-remediation framework from the git

        git clone https://github.com/Cloudneeti/aws-auto-remediation

3.  Go to remediation framework repository

        cd aws-auto-remediation 

4.  Decommission remediation framework in AWS account which need to be remediated.

        bash decommission-remediation-framework.sh [-a <12-digit-account-id>] [-e <environment-prefix>]

    (-a) Account Id: 12-digit AWS account Id of the account where the remediation framework is deployed
    (-e) Environment prefix: Enter any suitable prefix for your deployment
