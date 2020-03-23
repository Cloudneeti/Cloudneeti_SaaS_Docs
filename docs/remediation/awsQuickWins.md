# Quick Wins

Includes creation of metrices and alarms for various events in the AWS Account. Onces created user needs to subscribe to the SNS using the link you will receive in the email mentioned while executing above script, to start receiving notificatins of the alarms.

## Pre-requisites

### Required Roles
Roles are required to complete Amazon Web Service Account onboarding process.

| Role          | Product    |
|---------------|------------|
| Administrator | AWS        |


### Workstation readiness

| Activity                                                                      | Description                                              |
|-------------------------------------------------------------------------------|----------------------------------------------------------|                                                
| **Workstation:** Install AWS Command Line Interface                           | To install AWS cli follow [link](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html){target=_blank} **AWS Command Line** Interface (CLI) is a unified tool to manage your AWS services.             |                                                      |
|**Workstation:** Download script remediate-monitoring-policies.yml| To download remediate-monitoring-policies.yml script follow [link](https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/remediate-monitoring-policies.yml){target=_blank} |


## Monitoring

Create metrices and alarms for various events in the AWS Account

1. Open any termial which has AWS CLI configured

2. On terminal navigate to folder location where you downloaded the file “remediate-monitoring-policies.yml” (e.g. “cd C:\Downloads”) 

3. Configure AWS account and region where remediation framework is to be deployed

        aws configure

4. Execute quick wins script

        aws cloudformation deploy --template-file remediate-monitoring-policies.yml --stack-name <stack-name> --parameter-overrides env=<environment-prefix> region=<region-name> awsaccountid=<12-digit AWS account Id> emailid=<email-id where you wish to receive notifications> --capabilities CAPABILITY_NAMED_IAM

    - stack-name: User friendly stack name that will be created
    - env: Environment prefix (e.g: prod)
    - region: Programmatic region name where you want to deploy the resources (eg: us-east-1)
    - awsaccountid: 12-digit AWS Account Id of the account where you need to set up the alarms
    - emailid: valid email id where to receive the notifications

    ![AWS Quick Wins](.././images/cloudneetiRemediation/AWS_Quick_Wins.png#thumbnail_1)

5. Script creates resources and alarms. 

    ![AWS Quick Wins](.././images/cloudneetiRemediation/AWS_Quick_Wins_1.png#thumbnail_1)    

6. Please subscribe to the SNS using the link you will receive in the email mentioned while executing above script, to start receiving notificatins of the alarms.

    <!-- ![AWS Quick Wins](.././images/cloudneetiRemediation/AWS_Quick_Wins_2.png#thumbnail_1)  -->

7. Verify policy results on Cloudneeti portal

    ![AWS Quick Wins](.././images/cloudneetiRemediation/AWS_Quick_Wins_2.png#thumbnail_1)   

## Annexure
### Policies enabled with quick wins 

#### Monitoring

The following monitoring policies gets enabled.

| **Policy_Title**                                                                                        | **Category_Name** |
|---------------------------------------------------------------------------------------------------------|-------------------|
| Ensure a log metric filter and alarm exist for unauthorized API calls                                   | AWS - Monitoring  |
| Ensure a log metric filter and alarm exist for Management Console sign-in without MFA                   | AWS - Monitoring  |
| Ensure a log metric filter and alarm exist for usage of 'root' account                                  | AWS - Monitoring  |
| Ensure a log metric filter and alarm exist for IAM policy changes                                       | AWS - Monitoring  |
| Ensure a log metric filter and alarm exist for CloudTrail configuration changes                         | AWS - Monitoring  |
| Ensure a log metric filter and alarm exist for AWS Management Console authentication failures           | AWS - Monitoring  |
| Ensure a log metric filter and alarm exist for disabling or scheduled deletion of customer created CMKs | AWS - Monitoring  |
| Ensure a log metric filter and alarm exist for S3 bucket policy changes                                 | AWS - Monitoring  |
| Ensure a log metric filter and alarm exist for AWS Config configuration changes                         | AWS - Monitoring  |
| Ensure a log metric filter and alarm exist for security group changes                                   | AWS - Monitoring  |
| Ensure a log metric filter and alarm exist for changes to Network Access Control Lists (NACL)           | AWS - Monitoring  |
| Ensure a log metric filter and alarm exist for changes to network gateways                              | AWS - Monitoring  |
| Ensure a log metric filter and alarm exist for route table changes                                      | AWS - Monitoring  |
| Ensure a log metric filter and alarm exist for VPC changes                                              | AWS - Monitoring  |
| Ensure a log metric filter and alarm exist for S3 bucket object read operations                         | AWS - Monitoring  |
| Ensure a log metric filter and alarm exist for S3 bucket object write operations                        | AWS - Monitoring  |



