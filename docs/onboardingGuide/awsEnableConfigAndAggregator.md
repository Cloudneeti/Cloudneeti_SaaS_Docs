**Enable AWS Config and Aggregator**
=================================================

#### Workstation readiness

| Activity                                                                      | Description                                              |
|-------------------------------------------------------------------------------|----------------------------------------------------------|                                                
| **Workstation:** Install AWS Command Line Interface                           | To install AWS cli follow [link](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html) **AWS Command Line** Interface (CLI) is a unified tool to manage your AWS services.             |                                                      |
|**Workstation:** Download script provision-datacollection-role.yml| To download provision-datacollection-role.yml script follow [link](https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/provision-datacollection-role.yml) |

#### Generate AWS account access key id and secret 

1.	Click **your name** located on the top right navigation pane

2.	Select **My Security** Credentials 

3.	**Access key id** is under the section **Access keys for CLI, SDK, & API access**

    ![Create access key](.././images/amazonWebServiceAccounts/AWS_Account_Access_Key.png#thumbnail)

4.	If access key secret is not available for this id, please create a new access key by clicking on **Create access key** button.

    ![Create access key](.././images/amazonWebServiceAccounts/Access_Key_Success.png#thumbnail)

#### Enable Config in all regions

1.  Open any termial which has AWS CLI configured
2.  On terminal navigate to folder location where you downloaded the file “provision-datacollection-role.yml” (e.g. “cd C:\\Downloads”)
3.  Type **aws configure** and enter
    
    a.  Account access key id and secret access key generated in [step](.././amazonWebServiceAccounts/#generate-aws-account-access-key-id-and-secret)
    
    b.  Default region name(eg. us-east-1).
    
    c.  Default output format as "json" only.

4.  To enable Config and Aggregator execute below command 
    
            bash deploy-config.sh [-a <12-digit-account-id>] [-e <environment-prefix>] [-n <config-aggregator-name] [-p <primary-aggregator-region>] [-s <list of regions(secondary) where config is to enabled>]

    (-a)Account Id: 12-digit AWS account Id of the account where you want the remediation framework to be deployed
    (-e)Environment prefix: Enter any suitable prefix for your deployment
    (-n)Config Aggregator Name: Suitable name for the config aggregator
    (-p)Config Aggregator region(primary): Programmatic name of the region where the the primary config with an aggregator is to be created(eg:us-east-1)
    (-s)Region list(secondary): Comma seperated list(with nos spaces) of the regions where the config(secondary) is to be enabled(eg: us-east-1,us-east-2)
        **Pass "all" if you want to enable config in all other available regions
        **Pass "na" if you do not want to enable config in any other region


#### Set up Aggregator

