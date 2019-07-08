# AWS Onboarding Guide
The purpose of this document is to outline the concept of Cloudneeti application integration with the customer’s amazonWebServiceAccounts, the required preparations and prerequisites, and the specific onboarding steps.

Follow these steps to onboard the AWS account:


| # | Step                                     | Portal                        |
|---|------------------------------------------|-------------------------------|
| 1 | Prerequisites |   |
| 2 | Create an AWS role for Cloudneeti access | Powershell or AWS Portal |
| 3 | Add your AWS Account to Cloudneeti       | Cloudneeti application portal |
| 4 | Verify Data Collection                   | Cloudneeti application portal |
| 5 | Notification Configuration             | Cloudneeti application portal |


 ![AWSOnboardingOverview](.././images/amazonWebServiceAccounts/AWSOnboardingOverview.png#thumbnail)

## 1. Prerequisites
Upon customer request, Cloudneeti license(s) will be configured and email invitation(s) will be sent to License Administrator(s). Additional users within Cloudneeti applications will be provisioned by the customer’s License Administrator.

The following activities need to be completed by the customer prior to onboarding.

#### 1.1	Users and Roles


| Activity                                 | Description                              |
|------------------------------------------|------------------------------------------|
| 1. Engage a user with **AWS account user with Administrator Access role** | The customer’s AWS administrator must have enough permissions to create a role as a trusted entity with the [SecurityAudit access policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions.html#jf_security-auditor). |
| 2. Have the **AWS account id** handy         | This is a mandatory field for onboarding an AWS account to Cloudneeti. <br><br>1. Sign into your AWS account<br>2. Click your name located on the top right navigation pane<br>3. Select “My Account”. <br>4. Your AWS ID is the twelve-digit number located underneath the Account Settings section. |
| 3. Have the **Cloudneeti's AWS account id**          | This is a mandatory field fto create a role as a trusted entity with the [SecurityAudit access policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions.html#jf_security-auditor).  <br> Please contact Cloudneeti Team. |
| 4. Have the **AWS account access key id and secret** handy | This is a mandatory field for onboarding an AWS account to Cloudneeti.<br><br>1. Sign into your AWS account<br>2. Click your name located on the top right navigation pane.<br>3. Select “My Security Credentials”. <br>4. Access key id is under the section “Access keys for CLI, SDK, & API access”. If access key secret is not recorded while creation for this id, please create a new access key by clicking on “Create access key” button. |

#### 1.2	Workstation readiness
Prerequiistes listed below are required only if automation script is used to create a role in AWS account to mark Cloudneeti's account as a trusted entity with the SecurityAudit access policy.

| Activity                                 | Description                              |
|------------------------------------------|------------------------------------------|
| 1. Download and review “**serverless.yml**” file for creation of role | A YAML template is used to create a role in AWS account to mark Cloudneeti's account as a trusted entity with the SecurityAudit access policy. <a href="https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/serverless.yml" download>Download Link</a>. |
| 2. **Workstation**: Ensure you have the latest PowerShell version (v5 and above)  | Verify PowerShell version by running the below command on the workstation where you will execute commands to add a role. <br><br>$PSVersionTable.PSVersion   <br><br>If PowerShell version is lower than 5, then follow this link for installation of a later version:<a href="https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell?view=powershell-6" download>Download Link</a>. |
| 3. **Workstation**: Install AWS Command Line Interface  | To install AWS cli follow [link](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html)<br>AWS Command Line Interface (CLI) is a unified tool to manage your AWS services. |
| 4. **Workstation**: Install Nodejs           | Download latest stable version of nodejs from [here](https://nodejs.org/en/) and install on the workstation. |
| 5. **Workstation**: Install serverless npm module | Serverless Framework is a CLI tool to manage AWS deployments.<br>Execute below command to install serverless module,<br># npm install –g serverless |


## 2.	Create an AWS role for Cloudneeti access
 
#### 2.1 Manual

1.	Login to [AWS portal](https://console.aws.amazon.com) with AWS administrator access role.
2.  Navigate to Services > IAM > Roles
3.	Click on "Create Role" button
4.	Select "Another AWS account" and enter detils like
    
    a. Enter Cloudneeti's Account ID and click on Next button
    ![Activate License](.././images/amazonWebServiceAccounts/Another_AWS_Account.png#thumbnail)   
    b. Attach policy permission "SecurityAudit" and click on Next button    
    ![Activate License](.././images/amazonWebServiceAccounts/AWS_Attach_PermissionPolicy.png#thumbnail)
    c. Adding tags is optional, click Next
    d. Enter details like Role Name, Role description  
    e. Click on "Create role"

5.	An AWS role will be created in the customer's account to mark Cloudneeti's account as a trusted entity with the SecurityAudit access policy.


#### 2.2 Automated
Use serverless.yml file to create a role to mark Cloudneeti's account as a trusted entity with the SecurityAudit access policy. 

1.	Open PowerShell application as an administrator (right click on PowerShell and select run as administrator)
2.	In PowerShell application, navigate to folder location where you downloaded the file “serverless.yml” (e.g. “cd C:\Downloads”)
3.	Type “aws configure” and enter 
    a.	Account access key id and secret access key of an AWS IAM User (with **Administrator Access** policy) 
    b.	Default region name(eg. us-east-1). 
    c.	Default output format as "json" only.
4.	To add Cloudneeti data provisioning resource, execute the command “serverless deploy”

    ![Serverless Deploy](.././images/amazonWebServiceAccounts/Serverless_Deploy.png#thumbnail)
5.	An AWS role will be created in the customer's account to mark Cloudneeti's account as a trusted entity with the SecurityAudit access policy. 

### 3	Add your AWS Account to Cloudneeti
1.	Log in to the Cloudneeti portal using the license admin user credentials.
2.	If the license is not activated, click on the ‘Activate License’ button to activate the license. This step is needed if this is the first cloud account you are adding to the License.

    ![Activate License](.././images/amazonWebServiceAccounts/4.2_2_Activate_License.png#thumbnail)

    OR

    If the license is already activated, 

    a. Please go to Settings > Manage Accounts on Cloudneeti portal
        ![Activate License](.././images/azureSubscriptions/Manage_Accounts.png#thumbnail)
    
    b. Click on "Add Cloud Account" button
        ![Activate License](.././images/azureSubscriptions/Add_Account.png#thumbnail)

    c. Select License to add cloud account
        ![Select License](.././images/azureSubscriptions/select_license.png#thumbnail)

3.	Select AWS connector. 

    ![AWS Connector](.././images/amazonWebServiceAccounts/Connector_Type.png#thumbnail)

4.	Enter details Account Name, AWS Account Id

    ![Add AWS Account](.././images/amazonWebServiceAccounts/Add_Account.png#thumbnail) 

5.	Click on ‘Add Account’.

### 4	Verify Data Collection
1.	Click on ‘Go To Dashboard’ to see the data.

    ![Success](.././images/amazonWebServiceAccounts/Success.png#thumbnail)
2.	Wait approx. 5 minutes for the data to be collected, processed, and rendered to the Cloudneeti Dashboard. 

    ![Dashboard](.././images/amazonWebServiceAccounts/Dashborad.png#thumbnail)

Congratulations! You have just on-boarded an AWS account to Cloudneeti. Subsequent onboardings will take less time (usually less than 10 minutes).

## 5	Notification Configuration
Scan notifications allow a cloud account user to subscribe to changes in security posture. To receive email notifications on a scan from Cloudneeti Bot, please refer following steps.

1.	On Cloudneeti portal, navigate to settings

2.	Select desired License and Account 

3.	Click on configure button to select “Configure Notifications”

4.	Enter comma separated email addresses.
    
    ![Configure Notifications](.././images/amazonWebServiceAccounts/Configure_notifications.png#thumbnail)

5.	Click on save button.
