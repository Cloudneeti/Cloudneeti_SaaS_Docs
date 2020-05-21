**STEP 2 : Enable AWS Config Based Data Collection**
====================================================

#### Workstation readiness

| Activity                                                                      | Description                                              |
|-------------------------------------------------------------------------------|----------------------------------------------------------|                                                
| **Workstation:** Install AWS Command Line Interface                           | To install AWS cli follow [link](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html){target=_blank} **AWS Command Line** Interface (CLI) is a unified tool to manage your AWS services.             |                                                      |
|**Workstation:** Clone config repository | To clone repository for deployment of config and related resources for config based data collection execute <br> git clone https://github.com/Cloudneeti/aws-config-onboarding  |


##  3.1 Provision resources for config based data collection 

1.  Open any terminal which has AWS CLI configured
2.  On terminal navigate to folder location where you cloned the repository **aws-config-onboarding**  
3.  Type **aws configure** and enter
    
    a.  Account access key id and secret access key generated in [step](.././awsEnableConfigAndAggregator/#generate-aws-account-access-key-id-and-secret){target=_blank}
    
    b.  Default region name(eg. us-east-1).
    
    c.  Default output format as "json" only.

4.  To enable Config and Aggregator execute below command 
    
            bash deploy-config.sh -a <AWS-acount-id> -e <Cloudneeti-environment-prefix> -n <Config-aggregator-name> -p <primary-aggregator-region> -s <list of regions(secondary) where config is to enabled>

    - (-a)Account Id: 12-digit AWS account Id of the account where you want the remediation framework to be deployed
    
    - (-e)Environment prefix: Enter any suitable prefix for your deployment
    
    - (-n)Config Aggregator Name: Suitable name for the config aggregator
    
    - (-p)Config Aggregator region(primary): Programmatic name of the region where the primary 
    config with an aggregator is to be created(eg:us-east-1)
    
    - (-s)Region list(secondary): Comma separated list(with no spaces) of the regions where the config(secondary) is to be enabled(eg: us-east-1,us-east-2)
        **Pass "all" if you want to enable config in all other available regions
        **Pass "na" if you do not want to enable config in any other region

    ![Create access key](.././images/awsConfig/deployScript.png#thumbnail)

5. Verify script executed successfully

    ![Create access key](.././images/awsConfig/deployScript_Success.png#thumbnail)

## 3.2 Verify Config related resources created on AWS Portal

1. Cloudformation stack deployed in all selected regions. 

    - Primary region

    ![Primary region stack](.././images/awsConfig/stack_primary.png#thumbnail)

    - Secondary region

    ![Secondary region stack](.././images/awsConfig/stack_secondary.png#thumbnail)

2. S3 Buckets

    ![S3 Buckets](.././images/awsConfig/s3_Bucket.png#thumbnail)

3. [config-role-scaletest3](https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSConfigRole$serviceLevelSummary){target=_blank}

4. Config recording is on primary and secondary regions

    ![Create access key](.././images/awsConfig/Config_Primary.png#thumbnail)

5. Aggregator is setup in primary region

    ![Create access key](.././images/awsConfig/aggregation_progress.png#thumbnail)


## 3.3 Verify Aggregation is completed

![Create access key](.././images/awsConfig/aggregation_success.png#thumbnail)


## Appendix 

### Services supported by AWS Config enabled data collection

-   Updated AWS Data collection and processing mechanisms to use AWS config to
    support massive scale requirements for the following AWS services.

    -   EC2::Instance

    -   EC2::Volume

    -   EC2::SecurityGroup

    -   S3::Bucket

### Generate AWS account access key id and secret 

1.	Click **your name** located on the top right navigation pane

2.	Select **My Security** Credentials 

3.	**Access key id** is under the section **Access keys for CLI, SDK, & API access**

    ![Create access key](.././images/amazonWebServiceAccounts/AWS_Account_Access_Key.png#thumbnail)

4.	If access key secret is not available for this id, please create a new access key by clicking on **Create access key** button.

    ![Create access key](.././images/amazonWebServiceAccounts/Access_Key_Success.png#thumbnail)

## Decommission AWS Config 

### Step 1. Disable AWS Config Based Data Collection

1. Navigate to **Cloud Account** (2) from **Configurations** (1)

    ![Create access key](.././images/awsConfig/CloudAccounts.png#thumbnail)

2. Select **Update Cloud Account** (3) in **Configure Accounts** (2)

    ![Create access key](.././images/awsConfig/Account_Update.png#thumbnail)

3. Disable **AWS Config Based Data Collection** (1) and **Save** (2)

    ![Create access key](.././images/awsConfig/Account_Update_Config.png#thumbnail)

### Step 2. Delete deployment bucket

Delete config deployment bucket using AWS console. Search for deployment bucket with name **config-bucket** having below tags

| S. No. | Tag Name                      | Tag Value                 |
|--------|-------------------------------|---------------------------|
| 1      | ServiceName | config-bucket           |
| 2      | Description | Bucket for config data collection|

### Step 3. Execute decommission script

    1.  Open bash terminal

    2.  Clone the aws-config-onboarding from the git

            git clone https://github.com/Cloudneeti/aws-config-onboarding

    3.  Go to config onboarding repository

            cd git aws-config-onboarding 

    4.  Decommission config resources in AWS account 

            bash decommission-config.sh a <AWS-acount-id> -e <environment-prefix> -p <primary-aggregator-region> -s <list of regions(secondary) where config is to enabled>

    (-a) Account Id: 12-digit AWS account Id of the account where the remediation framework is deployed 

    (-e)Environment prefix: Enter any suitable prefix for your deployment

    (-p) Config Aggregator region(primary): Programmatic name of the region where the the primary config with an aggregator is to be decommisioned(eg:us-east-1)
