# AWS Accounts Onboarding Guide

## Onboarding Steps

The following steps are required to onboard AWS to the Cloudneeti application.

![AWS Overview](.././images/amazonWebServiceAccounts/AWS_Overview.png#thumbnail_1)

| S. No. | Step                                     | Product                        | Role               |
|----|------------------------------------------|--------------------------------|--------------------|
| 1  | Create an AWS role for Cloudneeti        | AWS                            | Administrator      |
| 2  | Collect AWS account information          | AWS                            | Administrator      |
| 3  | Add AWS Account                          | Cloudneeti                     | License Admin      |

**1. Creating an AWS role for Cloudneeti** includes registering a new AWS role for the Cloudneeti application and granting the required access permissions.

**2. Collecting AWS account information** involves taking a copy of the AWS account id and providing it to License Admin.

**3. Add AWS Account** to the Cloudneeti application includes adding AWS account information to the respective Cloudneeti cloud account and waiting until the first data collection is complete.


### Required Roles
One or more people with the following roles are required to complete Amazon Web Service Account onboarding process.

| Role          | Product    |
|---------------|------------|
| License Admin | Cloudneeti |
| Administrator | AWS        |

Cloudneeti application **License Admin** is assigned to an individual in the customer’s organization who will be responsible for configuration of the respective Cloudneeti application License.

AWS **Administrator** role is required for granting Cloudneeti application access rights to AWS account(s). The administrator must have enough permissions to create a role as a trusted entity with the [SecurityAudit access policy.](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions.html#jf_security-auditor)

### Collect information

Information can be retrived from email notification recieved by License Admin on License creation sent by Cloudneeti Notification Bot

#### Cloudneeti AWS account id (1)

#### License id (2) to be added as **External Id** in [step 1](.././amazonWebServiceAccounts/#step-1-create-an-aws-role-for-cloudneeti-manually-or-using-automated-script) 


![AWS Portal](.././images/amazonWebServiceAccounts/Welcome_Email.png#thumbnail)

## STEP 1: Create an AWS role for Cloudneeti Manually or using automated script
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
| **Workstation:** Install AWS Command Line Interface                           | To install AWS cli follow [link](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html) **AWS Command Line** Interface (CLI) is a unified tool to manage your AWS services.             |                                                      |
|**Workstation:** Download script provision-datacollection-role.yml| To download provision-datacollection-role.yml script follow [link](https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/provision-datacollection-role.yml) |

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

## STEP 2: Collect AWS account information
The following steps are executed by the AWS **Administrator** role.

### 2.1 AWS account id 
Sign into your AWS account.

1.	Click **your name** located on the top right navigation pane

2.	Select **My Account** 

3.	Your AWS ID is the twelve-digit number located underneath the Account Settings section. Copy paste it to your notepad.

    ![SignIn AWS](.././images/amazonWebServiceAccounts/AWS_Management_Console.png#thumbnail)


## STEP 3: Add AWS Account
The following steps are executed by Cloudneeti application **License Admin** role.

### 3.1 Activate the License

1.  Log in to the Cloudneeti application with **License Admin** role.
2.  Click on **Activate License**
    ![Activate License](.././images/azureSubscriptions/Activate_License.png#thumbnail)

### 3.2 Add AWS Account
Log into the Cloudneeti application.

1.	Select **AWS connector** (1) and click **Continue**(2)

    ![Add account](.././images/amazonWebServiceAccounts/Connector_Type.png#thumbnail)

2.	Enter details: Account Name, AWS Account Id

3.	Click **Add Account**

    ![Add account](.././images/amazonWebServiceAccounts/Add_Account.png#thumbnail)


### 3.3 Data Collection
Once the AWS account is added to the cloud account under the Cloudneeti License, it requires about 5 minutes for the data to be collected and processed,before they can be displayed in Cloudneeti dashboards. 

1.	Select **Dashboard** on the menu

2.	Review the data on dashboard

    ![AWS Dashboard](.././images/amazonWebServiceAccounts/AWS-Account_Dashboard.png#thumbnail)

Congratulations! You have added an AWS account to Cloudneeti application.

## Configuration

[Configure Notifications](../../administratorGuide/configureNotifications/)

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