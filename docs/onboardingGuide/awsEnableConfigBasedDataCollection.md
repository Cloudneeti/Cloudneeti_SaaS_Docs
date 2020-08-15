**STEP 2 : Enable AWS Config based data collection (Optional)**(Preview)
========================================================================

**This step is optional.**

Involves enabling AWS Config and setting up Aggregator. This enables you to assess, audit and evaluate configurations of your AWS resources. Using AWS Config APIs, Cloudneeti will now be able to pull out resource configuration metadata at scale. This optional onboarding configuration will be used by default for accounts with larger number of resources.

AWS Data collection and processing mechanisms to use AWS config to support massive scale requirements for the following AWS services [listed here](../../onboardingGuide/awsEnableConfigBasedDataCollection/#services-supported-by-aws-config-enabled-data-collection)


##  2.1 Provision resources for config based data collection (Manual)

### 2.1.1 Config set-up

Set-up config in primary region and all other required regions using below steps.

Login to AWS portal with AWS Administrator role.

1. Under **Service**, select **Config**

#### **First time configuration**

2. Click **Get Started** 

    ![AWS Config](.././images/awsConfig/getting_started.jpg#thumbnail)

3. Select **Record all resources supported in this region** 

4. Include global resources should be checked in any one region (primary region) where the aggregator is planned to be created. 

5. Create/select **Amazon S3 bucket** to store config log 

6. Choose an existing service role for **AWS Config role**

    **Note** If you are using an already existing bucket, making sure you provide required permissions to the config for the bucket access, using bucket policies

7. Click Next

    ![AWS Config](.././images/awsConfig/config_setup.jpg#thumbnail)

8. **Step 2 : Rules** can be skipped 

9. Review details and click **Confirm** 

    ![AWS Config](.././images/awsConfig/config_create_reviewscreen.jpg#thumbnail)

10. Please repeat above steps for rest all regions keeping **Include global resources (e.g., AWS IAM resources)** unchecked in step 3.

#### **Config is already setup**

If config is already setup, verify and configure below on the config setting page, repeat below steps for all regions.

 1. All resources checkbox is checked in all the regions 
 
 2. Include global resources should be checked in any one region (primary region) where the aggregator is planned to be created.

    ![AWS Config](.././images/awsConfig/config_setup.jpg#thumbnail)


###  2.1.2 Create config Aggregator

Select a primary region to set up the Aggregator.

1. Navigate to the config dashboard in primary region

2. In the left navigation pane, click on **Aggregators** (1) and 

3. Click **Add Aggregator** (2)

    ![AWS Config](.././images/awsConfig/aggregator.jpg#thumbnail)

4. Select the check box to **Allow data replication** (1)

6. Enter a suitable **Aggregator name** (2)

7. Select **Add individual account IDs** (3) and add self-account id

    ![AWS Config](.././images/awsConfig/aggregator_setup.jpg#thumbnail)

8. In **Regions**, select all regions (1) as well as **Include future AWS regions** (2)

9. Click **Save** (3)

    ![AWS Config](.././images/awsConfig/aggregator_setup1.png#thumbnail)


##  2.1 Provision resources for config based data collection (Automated)


#### Workstation readiness

| Activity                                                                      | Description                                              |
|-------------------------------------------------------------------------------|----------------------------------------------------------|                                                
| **Workstation:** Install AWS Command Line Interface                           | To install AWS cli follow [link](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html){target=_blank} **AWS Command Line** Interface (CLI) is a unified tool to manage your AWS services.             |                                                      |
|**Workstation:** download config deployment scripts | Download files for deployment of config and related resources for config based data collection from git [link](https://github.com/Cloudneeti/docs_cloudneeti/tree/master/scripts/aws-config-onboarding){target=_blank}   |
| **Workstation:** Install serverless npm module      | Serverless Framework is a CLI tool to manage AWS deployments. Execute below command to install serverless module, \# npm install –g serverless                                              |
| **Workstation:** Install JQ for bash terminal     | Download latest stable version of JQ from [here](https://stedolan.github.io/jq/){target=_blank} and install on the workstation                                              |

### Note
- This script will existing setup will be modified in entered regions of the AWS Account. 

- Cloudneeti recommends following [AWS Config best practices](https://aws.amazon.com/blogs/mt/aws-config-best-practices/){target=_blank}

- AWS Config aggregation data is subject to delay. For details, please follow [link](https://docs.aws.amazon.com/config/latest/developerguide/viewing-the-aggregate-dashboard.html){target=_blank}

### Steps 

1.  Open any terminal which has AWS CLI configured
2.  On terminal navigate to folder location where you cloned the repository **aws-config-onboarding**  
3.  Type **aws configure** and enter
    
    a.  Account access key id and secret access key generated in [step](.././awsEnableConfigBasedDataCollection/#generate-aws-account-access-key-id-and-secret){target=_blank}
    
    b.  Default region name(eg. us-east-1).
    
    c.  Default output format as "json" only.

4.  To enable Config and Aggregator execute below command
    
            bash deploy-config.sh -a <AWS-acount-id> -e <Cloudneeti-environment-prefix> -n <Config-aggregator-name> -p <primary-aggregator-region> -s <list of regions(secondary) where config is to enabled>

    - (-a)Account Id: 12-digit AWS account Id of the account where you want to deploy AWS Config setup
    
    - (-e)Environment prefix: Enter any suitable prefix for your deployment
    
    - (-n)Config Aggregator Name: Suitable name for the config aggregator
    
    - (-p)Config Aggregator region(primary): Programmatic name of the region where the primary 
    config with an aggregator is to be created(eg:us-east-1). 
       [AWS Config supported in regions](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/){target=_blank}. 
    
    - (-s)Region list(secondary): Comma separated list(with no spaces) of the regions where the config(secondary) is to be enabled(eg: us-east-1,us-east-2)
        **Pass "all" if you want to enable config in all other available regions
        **Pass "na" if you do not want to enable config in any other region

    ![Create access key](.././images/awsConfig/deployScript.png#thumbnail)

5. Verify script executed successfully

    ![Create access key](.././images/awsConfig/deployScript_Success.png#thumbnail)

## 2.2 Verify Config related resources created on AWS Portal

1. Cloudformation stack deployed in all selected regions. 

    - Primary region

    ![Primary region stack](.././images/awsConfig/stack_primary.png#thumbnail)

    - Secondary region

    ![Secondary region stack](.././images/awsConfig/stack_secondary.png#thumbnail)

2. S3 Bucket

    ![S3 Bucket](.././images/awsConfig/s3_Bucket.png#thumbnail)

3. Config service role created [config-role-<prefix>](https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSConfigRole$serviceLevelSummary){target=_blank}

4. Config recording is on primary and secondary regions where the config is enabled

    ![Config_Primary](.././images/awsConfig/Config_Primary.png#thumbnail)

5. Aggregator is setup in primary region

    ![aggregation_progress](.././images/awsConfig/aggregation_progress.png#thumbnail)


## 2.3 Verify Aggregation is completed

After setup, AWS Config starts aggregating data from the specified regions into an aggregator. It might take a few minutes for Data collection from all source aregions to complete.

Once completed, [AWS account onboarding](../../onboardingGuide/amazonWebServiceAccounts/#step-5-add-aws-account){target=_blank} at Cloudneeti can be initiated.

![aggregation_success](.././images/awsConfig/aggregation_success.png#thumbnail)


## Appendix 

### Services supported by AWS Config enabled data collection

-   Updated AWS Data collection and processing mechanisms to use AWS config to
    support massive scale requirements for the following AWS services.

    -   AWS::EC2::Instance

    -   AWS::EC2::Volume

    -   AWS::EC2::SecurityGroup

    -   AWS::S3::Bucket

    -   AWS::CloudFormation::Stack 

### Generate AWS account access key id and secret 

1.	Click **your name** located on the top right navigation pane

2.	Select **My Security** Credentials 

3.	**Access key id** is under the section **Access keys for CLI, SDK, & API access**

    ![Create access key](.././images/amazonWebServiceAccounts/AWS_Account_Access_Key.png#thumbnail)

4.	If access key secret is not available for this id, please create a new access key by clicking on **Create access key** button.

    ![Create access key](.././images/amazonWebServiceAccounts/Access_Key_Success.png#thumbnail)

## Decommission AWS Config 

### 1. Disable AWS Config Based Data Collection

1. Navigate to **Cloud Account** (2) from **Configurations** (1)

    ![Create access key](.././images/awsConfig/CloudAccounts.png#thumbnail)

2. Select **Update Cloud Account** (3) in **Configure Accounts** (2)

    ![Create access key](.././images/awsConfig/Account_Update.png#thumbnail)

3. Disable **AWS Config Based Data Collection** (1) and **Save** (2)

    ![Create access key](.././images/awsConfig/Account_Update_Config.png#thumbnail)

### 2. Delete deployment bucket

Delete config deployment bucket using AWS console. Search for deployment bucket with name **config-bucket** having below tags

| S. No. | Tag Name                      | Tag Value                 |
|--------|-------------------------------|---------------------------|
| 1      | ServiceName | config-bucket           |
| 2      | Description | Bucket for config data collection|

### 3. Execute decommission script

1.  Open bash terminal

2.  Download files from git [link](https://github.com/Cloudneeti/docs_cloudneeti/tree/master/scripts/aws-config-onboarding){target=_blank} 

3.  Go to config onboarding downloaded directory

        cd aws-config-onboarding 

4.  Decommission config resources in AWS account 

        bash decommission-config.sh -a <AWS-acount-id> -e <environment-prefix> -p <primary-aggregator-region> 

    (-a)Account Id: 12-digit AWS account Id of the account where you want to delete the AWS Config setup

    (-e)Environment prefix: Enter any suitable prefix for your deployment

    (-p) Config Aggregator region(primary): Programmatic name of the region where the primary config with an aggregator is to be decommissioned(eg:us-east-1)
