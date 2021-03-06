# AWS Accounts Onboarding Guide

## Onboarding Steps

The following steps are required to onboard AWS to the Cloudneeti application.

![AWS Overview](.././images/amazonWebServiceAccounts/AWS_Overview.png#thumbnail_1)

| S. No.| Step                                     | Product                        | Role               | Type |
|----|------------------------------------------|--------------------------------|--------------------|----------|
| 1  | Create an AWS role for Cloudneeti        | AWS        | AWS Administrator      |  mandatory |
| 2  | Enable AWS Config Based Data Collection  | AWS        | AWS Administrator      |  optional  |
| 3  | AWS inspector OS Baseline Configurations (Optional)                | AWS        | AWS Administrator      |  optional  |
| 4  | AWS inspector Vulnerability Configurations (Optional)              | AWS        | AWS Administrator      |  optional  |
| 5  | Configure Cloudneeti agent on EKS and EC2-instance based Kubernetes       | AWS        | AWS Administrator      |  optional  |
| 6  | Add AWS Account                          | Cloudneeti | License Admin          |  mandatory |
| 7  | Verify cloud account health status       | Cloudneeti | License Admin          |  optional |

**1. Creating an AWS role for Cloudneeti** includes registering a new AWS role for the Cloudneeti application and granting the required access permissions.

**2. Enable AWS Config Based Data Collection (optional)** involves enabling AWS Config and setting up Aggregator. This enables you to assess, audit and evaluate configurations of your AWS resources. Using AWS Config APIs, Cloudneeti will now be able to pull out resource configuration metadata at scale. This optional onboarding configuration will be used by default for accounts with larger number of resources.

**3. AWS inspector OS Baseline Configurations (Optional)** includes installing AWS Inspector Agent to assess your assessment target EC2 instances. Amazon Inspector is a security assessment service for your Amazon EC2 instances and the applications running on those instances.
Enabling AWS Inspector for a host assessment allows various OS baselines as defined by CIS automatically light up on the Cloudneeti dashboards.

**4. AWS inspector Vulnerability Configurations (Optional)** includes installing AWS Inspector Agent to assess your assessment target EC2 instances. Amazon Inspector is a security assessment service for your Amazon EC2 instances and the applications running on those instances.
Enabling AWS Inspector for a host assessment allows Cloudneeti to collect common vulnerabilities and exposures (CVEs) and associate them to each of the cloud assets.


**5. Configure Cloudneeti agent on EKS and EC2-instance based Kubernetes (optional)** inlcudes Deploying Cloudneeti agent on Amazon Elastic Kubernetes Service (Amazon EKS) enables compliance monitoring of Kubernetes cluster. A docker agent is deployed to collect data for additional security policies. Cloudneeti then provides out-of-box mappings for all 13+ compliance frameworks included in the product.


**6. Add AWS Account** to the Cloudneeti application includes adding AWS account information to the respective Cloudneeti cloud account and waiting until the first data collection is complete.

**7. Verify cloud account health status** for prerequisite permissions and configurations can be verified post every scan.

### Required Roles
One or more people with the following roles are required to complete Amazon Web Service Account onboarding process.

| Role          | Product    |
|---------------|------------|
| License Admin     | Cloudneeti |
| AWS Administrator | AWS        |

Cloudneeti application **License Admin** is assigned to an individual in the customer’s organization who will be responsible for configuration of the respective Cloudneeti application License.

### Collect information

Information can be retrived from email notification recieved by License Admin on License creation sent by Cloudneeti Notification Bot. This information is required in [step 1](.././amazonWebServiceAccounts/#step-1-create-an-aws-role-for-cloudneeti-manually-or-using-automated-script) 

#### Cloudneeti AWS account id (1) 
To be added as **Another AWS account**

#### License id (2) 
To be added as **External Id** 


![AWS Portal](.././images/amazonWebServiceAccounts/Welcome_Email.png#thumbnail)

## STEP 1: Create an AWS role for Cloudneeti Manually or using automated script
AWS **Administrator** role is required for granting Cloudneeti application access rights to AWS account(s). The administrator must have enough permissions to create a role as a trusted entity with the [SecurityAudit access policy.](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions.html#jf_security-auditor)

The following steps are executed by AWS **Administrator** role. AWS role for Cloudneeti can be created manually or using an automation script. 

### 1.1 Manual
#### Grant Permissions
Login to [AWS portal](https://console.aws.amazon.com/) with AWS **Administrator** role.

1.	Navigate to **Services** (1)

2.  Click **IAM** (2)
    
    ![AWS Portal](.././images/amazonWebServiceAccounts/AWS_Portal.png#thumbnail)

3.	Click on **Roles** (1) and **Create Role** 
    
    ![Create Role](.././images/amazonWebServiceAccounts/Roles.png#thumbnail)

4.	Select **Another AWS account** (1) and enter Cloudneeti's AWS account ID (2)

5.  Select **Options** for Require external ID (Best practice when a third party will assume this role) (3)

6.  Enter the license id as **External ID** (4)

7.	Click **Next: Permissions** (5)

     ![Activate License](.././images/amazonWebServiceAccounts/Another_AWS_Account_ExternalId.png#thumbnail)

8.	Select policy name **SecurityAudit**

9.	Click **Next**

    ![Create Role](.././images/amazonWebServiceAccounts/Attatch_policies.png#thumbnail)

10.	Click **Next: Tags**

11.	Enter **Role Name** (1), the same role name should be added while creating an AWS Cloud Account in Cloudneeti.

12.	Click on **Create role** (2)
     ![Create Role](.././images/amazonWebServiceAccounts/Role_Information.png#thumbnail)

An AWS role will be created in the customer's account to mark Cloudneeti's account as a trusted entity with the SecurityAudit access policy.

### 1.2 Automated script
Automation script can be used for creation of a role to mark Cloudneeti's account as a trusted entity with the SecurityAudit access policy.

#### Workstation readiness

| Activity                                                                      | Description                                              |
|-------------------------------------------------------------------------------|----------------------------------------------------------|                                                
| **Workstation:** Install AWS Command Line Interface                           | To install AWS cli follow [link](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html){target=_blank} **AWS Command Line** Interface (CLI) is a unified tool to manage your AWS services.             |                                                      |
|**Workstation:** Download script provision-datacollection-role.yml| To download provision-datacollection-role.yml script follow [link](https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/provision-datacollection-role.yml){target=_blank} |

#### Generate AWS account access key id and secret 

1.	Click **your name** located on the top right navigation pane

2.	Select **My Security** Credentials 

3.	**Access key id** is under the section **Access keys for CLI, SDK, & API access**

    ![Create access key](.././images/amazonWebServiceAccounts/AWS_Account_Access_Key.png#thumbnail)

4.	If access key secret is not available for this id, please create a new access key by clicking on **Create access key** button.

    ![Create access key](.././images/amazonWebServiceAccounts/Access_Key_Success.png#thumbnail)

#### Create an AWS role for Cloudneeti using automation script
Use serverless.yml file to create a role to mark Cloudneeti's account as a
trusted entity with the SecurityAudit access policy.

1.  Open any termial which has AWS CLI configured
2.  On terminal navigate to folder location where you downloaded the file “provision-datacollection-role.yml” (e.g. “cd C:\\Downloads”)
3.  Type **aws configure** and enter
    
    a.  Account access key id and secret access key generated in [step](.././amazonWebServiceAccounts/#generate-aws-account-access-key-id-and-secret)
    
    b.  Default region name(eg. us-east-1).
    
    c.  Default output format as "json" only.

4.  To add Cloudneeti data provisioning resource, execute the below command by providing values for
        
    stack-name : User friendly name 
    
    RoleName : Role name for Cloudneeti AWS account
    
    ExternalId : [License Id](.././amazonWebServiceAccounts/#cloudneeti-aws-account-id)
    
    CloudneetiAWSAccountId : [Cloudneeti AWS Account Id](.././amazonWebServiceAccounts/#cloudneeti-aws-account-id)


        aws cloudformation deploy --template-file provision-datacollection-role.yml --stack-name <Stack Name> --parameter-overrides RoleName=<Role Name> ExternalId=<License Id> CloudneetiAWSAccountId=<Cloudneeti AWS Account Id> --capabilities CAPABILITY_NAMED_IAM

5.  An AWS role will be created in the customer's account to mark Cloudneeti's
    account as a trusted entity with the SecurityAudit access policy.

## STEP 2: [Enable AWS Config Based Data Collection (Optional)](../../onboardingGuide/awsEnableConfigBasedDataCollection/)

Involves enabling AWS Config and setting up Aggregator. This enables you to assess, audit and evaluate configurations of your AWS resources. Using AWS Config APIs, Cloudneeti will now be able to pull out resource configuration metadata at scale. This optional onboarding configuration will be used by default for accounts with larger number of resources.

AWS Data collection and processing mechanisms to use AWS config to support massive scale requirements for the following AWS services [listed here](../../onboardingGuide/awsEnableConfigBasedDataCollection/#services-supported-by-aws-config-enabled-data-collection)


## STEP 3: [AWS inspector OS Baseline Configurations (Optional)](../../onboardingGuide/awsVMBaselineConfiguration/)
Includes installing AWS Inspector Agent to assess your assessment target EC2 instances. Amazon Inspector is a security assessment service for your Amazon EC2 instances and the applications running on those instances.
Enabling AWS Inspector for a host assessment allows various OS baselines as defined by CIS automatically light up on the Cloudneeti dashboards.

## STEP 4: [AWS inspector Vulnerability Configurations (Optional)](../../onboardingGuide/awsVulnerabilities/)
includes installing AWS Inspector Agent to assess your assessment target EC2 instances. Amazon Inspector is a security assessment service for your Amazon EC2 instances and the applications running on those instances.
Enabling AWS Inspector for a host assessment allows Cloudneeti to collect common vulnerabilities and exposures (CVEs) and associate them to each of the cloud assets.


## STEP 4: [Configuring Cloudneeti agent in Amazon Elastic Kubernetes Service (Amazon EKS) (Optional)](../../onboardingGuide/configureCloudneetiAgentInEKS/) 

Cloudneeti includes CIS recommendations for EKS and EC2-instance based Kubernetes Clusters by deploying a Cloudneeti agent to Amazon Kubernetes Cluster. A docker container agent is deployed to collect data for additional security policies. Cloudneeti then provides out-of-box mappings for all 13+ compliance frameworks included in the product. 

Deploying Cloudneeti agent on Amazon Elastic Kubernetes Service (Amazon EKS) enables compliance monitoring of Kubernetes cluster for security policies [listed here](../../securityPolicies/kubernetes/awsK8SSecurityPolcies/){target=_blank}.

## STEP 5: Add AWS Account
The following steps are executed by Cloudneeti application **License Admin** role.

### 5.1 Activate the License

1.  Log in to the Cloudneeti application with **License Admin** role.
2.  Click on **Activate License**
    ![Activate License](.././images/azureSubscriptions/Activate_License.png#thumbnail)

### 5.2 Add AWS Account

Log into the Cloudneeti application.

1.	Select **AWS connector** (1) and click **Continue** (2)

    ![Add account](.././images/amazonWebServiceAccounts/connector-type.png#thumbnail)

2.	Enter details: Account Name, AWS Account Id

    ![Add account](.././images/amazonWebServiceAccounts/Add_Account.png#thumbnail)   

3.  Enable **AWS Config Based Data Collection** (Optional) 

    a. Enter **AWS Config Aggregator Region** as provisioned in [Step 3](../../onboardingGuide/awsEnableConfigAndAggregator/)

    b. Enter **AWS Config Aggregator Name** as provisioned in [Step 3](../../onboardingGuide/awsEnableConfigAndAggregator/)

4.	Click **Add Account**

    ![Add account](.././images/amazonWebServiceAccounts/Add_Account_Config.png#thumbnail)


### 5.3 Data Collection
Once the AWS account is added to the cloud account under the Cloudneeti License, it requires about 5 minutes for the data to be collected and processed,before they can be displayed in Cloudneeti dashboards. 

1.	Select **Dashboard** on the menu

2.	Review the data on dashboard

    ![AWS Dashboard](.././images/amazonWebServiceAccounts/AWS-Account_Dashboard.png#thumbnail)

    Congratulations! You have added an AWS account to Cloudneeti application.



## STEP 6. Verify cloud account health status

Verify [cloud account health status](../../onboardingGuide/azureAccountHealthStatus/) for prerequisite permissions and configurations, can be verfied on every scan.

## OFFBOARDING

### Delete Role for each AWS account

Security audit role created during onboarding of a specific AWS account should be removed. This step needs to be repeated for each AWS account.

Login to [AWS portal](https://console.aws.amazon.com/) with AWS **Administrator** role.

1.  Go to **IAM in Services**

2.  Click on **Roles** (1)

3.  Select role created for Cloudneeti's AWS account while onboarding AWS account (2)

4.  Click on **Delete** to remove the role (3)
   
	![AWS Offboarding](.././images/amazonWebServiceAccounts/AWS_Offboarding.png#thumbnail)

### Delete cloud account in Cloudneeti application 

Please send a request to [support@cloudneeti.com](mailto:support@cloudneeti.com) to delete this cloud account under your license.

## Appendix

### Collect AWS account information
The following steps are executed by the AWS **Administrator** role.

#### AWS account id 
Sign into your AWS account.

1.	Click **your name** located on the top right navigation pane

2.	Select **My Account** 

3.	Your AWS ID is the twelve-digit number located underneath the Account Settings section. Copy paste it to your notepad.

    ![SignIn AWS](.././images/amazonWebServiceAccounts/AWS_Management_Console.png#thumbnail)
