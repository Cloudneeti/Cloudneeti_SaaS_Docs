# AWS Onboarding Guide

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


## 2.	AWS Onboarding Steps
Follow these steps to onboard the AWS account:


| # | Step                                     |
|---|------------------------------------------|
| 1 | Create an AWS role for Cloudneeti access |
| 2 | Add your AWS Account to Cloudneeti       |
| 3 | Verify Data Collection                   |
| 4 | Configure scan notifications             |


 ![AWSOnboardingOverview](.././images/amazonWebServiceAccounts/AWSOnboardingOverview.png#thumbnail)

### 2.1	Create an AWS role for Cloudneeti access

Use serverless.yml file to create a role to mark Cloudneeti's account as a trusted entity with the SecurityAudit access policy. 

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

### 2.2	Add your AWS Account to Cloudneeti
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

### 2.3	Verify Data Collection
1.	Click on ‘Go To Dashboard’ to see the data.

    ![Success](.././images/amazonWebServiceAccounts/Success.png#thumbnail)
2.	Wait approx. 5 minutes for the data to be collected, processed, and rendered to the Cloudneeti Dashboard. 

    ![Dashboard](.././images/amazonWebServiceAccounts/Dashborad.png#thumbnail)

Congratulations! You have just on-boarded an AWS account to Cloudneeti. Subsequent onboardings will take less time (usually less than 10 minutes).

## 3.	AWS Post-Onboarding Configurations
### 3.1	Configure scan notifications
Scan notifications allow a cloud account user to subscribe to changes in security posture. To receive email notifications on a scan from Cloudneeti Bot, please refer following steps.

1.	On Cloudneeti portal, navigate to settings

2.	Select desired License and Account 

3.	Click on configure button to select “Configure Notifications”

4.	Enter comma separated email addresses.
    
    ![Configure Notifications](.././images/amazonWebServiceAccounts/Configure_notifications.png#thumbnail)

5.	Click on save button.
