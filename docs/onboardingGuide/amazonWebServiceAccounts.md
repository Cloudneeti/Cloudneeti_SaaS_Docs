# AWS Accounts Onboarding Guide
## Overview
### Onboarding Steps

The following steps are required to onboard AWS to the Cloudneeti application.

| Nr | Step                                     | Product                        | Role               |
|----|------------------------------------------|--------------------------------|--------------------|
| 1  | Create an AWS role for Cloudneeti        | AWS                            | Administrator      |
| 2  | Collect AWS account information          | AWS                            | Administrator      |
| 3  | Add AWS Account                          | Cloudneeti                     | License Admin      |


**1. Registering Cloudneeti application** includes registering the Cloudneeti application with the Azure Active Directory (AD) tenant, providing access to Microsoft Graph and granting admin consent to the Cloudneeti application.

**2. Adding the Office 365 subscription** includes adding Office 365 subscription information to the respective Cloud Account and waiting until the first data collection is complete.

**3. Advanced security configuration** includes adding a script to the customer’s Azure account and granting the required access rights.

#### Required Roles
One or more people with the following roles are required to complete Microsoft Azure onboarding process.

| Nr | Role          | Product    |
|----|---------------|------------|
| 1  | License Admin | Cloudneeti |
| 2  | Administrator | AWS        |

Cloudneeti application **License Admin** is assigned to an individual in the customer’s organization who will be responsible for configuration of the respective Cloudneeti application License.

AWS **Administrator** role is required for granting Cloudneeti application access rights to AWS account(s). The administrator must have enough permissions to create a role as a trusted entity with the [SecurityAudit access policy.](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions.html#jf_security-auditor)

#### Request Cloudneeti AWS account ID
**Note:**<br>`Request Cloudneeti to provide the Cloudneeti AWS account ID. This is a mandatory field to create a role as a trusted 
entity with the SecurityAudit access policy.`

## STEP 1: Create an AWS role for Cloudneeti
The following steps are executed by AWS **Administrator** role. AWS role for Cloudneeti can be created manually or using an automated script. 

### Manual
#### Grant Permissions
Login to [AWS portal](https://console.aws.amazon.com/) with AWS **Administrator** role.

1.	Navigate to **Services > IAM**
    ![AWS Portal](.././images/amazonWebServiceAccounts/AWS_Portal.png#thumbnail)
2.	Click on **Roles** and **Create Role**
    ![Create Role](.././images/amazonWebServiceAccounts/Roles.png#thumbnail)
3.	Select **Another AWS account** and enter Cloudneeti's Account ID 
4.	Click **Next: Permissions**
     ![Activate License](.././images/amazonWebServiceAccounts/Another_AWS_Account.png#thumbnail)
5.	Select policy name **SecurityAudit**
6.	Click **Next**
    ![Create Role](.././images/amazonWebServiceAccounts/Attatch_policies.png#thumbnail)
7.	Click **Next: Tags**
8.	Enter details like Role Name, Role description
9.	Click on **Create role**
     ![Create Role](.././images/amazonWebServiceAccounts/Role_Information.png#thumbnail)

An AWS role will be created in the customer's account to mark Cloudneeti's account as a trusted entity with the SecurityAudit access policy.

### Automated
#### Workstation readiness

Use serverless.yml file to create a role to mark Cloudneeti's account as a
trusted entity with the SecurityAudit access policy.

| Activity                                                                      | Description                                              |
|-------------------------------------------------------------------------------|----------------------------------------------------------|
| **Workstation:** Ensure you have the latest PowerShell version (v5 and above) | Verify PowerShell version by running the \$PSVersionTable.PSVersion command on the workstation where you will execute commands to add a role. If PowerShell version is lower than 5, then follow this link for installation of a later version: [Download Link](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell?view=powershell-6).                                                                                          |
| **Workstation:** Install AWS Command Line Interface                           | To install AWS cli follow [link](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html) **AWS Command Line** Interface (CLI) is a unified tool to manage your AWS services.             |
| **Workstation:** Install Nodejs                                               | Download latest stable version of nodejs from [here](https://nodejs.org/en/) and install on the workstation.                                                                                            |
| **Workstation:** Install serverless npm module                                | Serverless Framework is a CLI tool to manage AWS deployments. Execute below command to install serverless module, \# npm install –g serverless                                                           |

1.  **Open PowerShell** application as an administrator (right click on PowerShell
    and select run as administrator)
2.  In PowerShell application, navigate to folder location where you downloaded
    the file “serverless.yml” (e.g. “cd C:\\Downloads”)
3.  Type **aws configure** and enter
    a.  Account access key id and secret access key of an AWS IAM User (with
        **Administrator Access** policy)
    b.  Default region name(eg. us-east-1).
    c.  Default output format as "json" only.

4.  To add Cloudneeti data provisioning resource, execute the command
    **serverless deploy**
    ![Administrator Access](.././images/amazonWebServiceAccounts/Serverless_Deploy.png#thumbnail)
5.  An AWS role will be created in the customer's account to mark Cloudneeti's
    account as a trusted entity with the SecurityAudit access policy.

## STEP 2: Collect AWS account information
The following steps are executed by the AWS **Administrator** role.

### AWS account id 
Sign into your AWS account.

1.	Click **your name** located on the top right navigation pane
2.	Select **My Account**
3.	Your AWS ID is the twelve-digit number located underneath the Account Settings section. Copy paste it to your notepad.
    ![SignIn AWS](.././images/amazonWebServiceAccounts/AWS_Management_Console.png#thumbnail)

### AWS account access key id and secret 

1.	Click **your name** located on the top right navigation pane
2.	Select **My Security** Credentials 
3.	**Access key id** is under the section **Access keys for CLI, SDK, & API access**
    ![Create access key](.././images/amazonWebServiceAccounts/AWS_Account_Access_Key.png#thumbnail)
4.	If access key secret is not available for this id, please create a new access key by clicking on **Create access key** button.
    ![Create access key](.././images/amazonWebServiceAccounts/Access_Key_Success.png#thumbnail)

## STEP 3: Add AWS Account
The following steps are executed by Cloudneeti application **License Admin** role.

### Add AWS Account
Log into the Cloudneeti application.

1.	Select **AWS connector**  
    ![Add account](.././images/amazonWebServiceAccounts/Connector_Type.png#thumbnail)
2.	Enter details: Account Name, AWS Account Id
3.	Click **Add Account**
    ![Add account](.././images/amazonWebServiceAccounts/Add_Account.png#thumbnail)


### Data Collection
Once the AWS account is added to the cloud account under the Cloudneeti License, it requires about 5 minutes for the data to be collected and processed,before they can be displayed in Cloudneeti dashboards. 

1.	Select **Dashboard** on the menu
2.	Review the data on dashboard
    ![AWS Dashboard](.././images/amazonWebServiceAccounts/AWS-Account_Dashboard.png#thumbnail)

Congratulations! You have added an AWS account to Cloudneeti application.

## NEXT STEPS

[Configure Notifications](../../administratorGuide/configureNotifications/)