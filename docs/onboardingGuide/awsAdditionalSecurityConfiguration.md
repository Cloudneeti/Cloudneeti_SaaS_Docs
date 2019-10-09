**AWS Account Additional Security Configuration**
=================================================

For the existing AWS accounts’, Cloudneeti AWS account role
“Cloudneeti-SecurityAudit” needs to be updated to have License id as external id
within timeframe mentioned below

| **Cloudneeti Product**                   | **Start date** | **End date** |
|------------------------------------------|-----------------------------|----------------------------------------|
| [Trial](https://trial.cloudneeti.com)    | 9 October 2019              | 23 October 2019                        |
| [Production](https://app.cloudneeti.com) | 14 October 2019             | 30 October 2019                        |

To ensures a smooth transition, please follow below two steps for each AWS
account:

1.  Link external id to existing Cloudneeti AWS account role “Cloudneeti-SecurityAudit” or Create a new role with external id : includes updating role on AWS Console created while onboarding AWS account or creation of new IAM role.

2.  Verify/update role name for Cloud Account :  includes updating AWS cloud account in Cloudneeti Portal

## Required Information

### Cloudneeti AWS account id
Cloudneeti AWS account id can be retrived from email notification recieved by License Admin on License creation sent by Cloudneeti Notification Bot. 

![AWS Portal](.././images/amazonWebServiceAccounts/Welcome_Email.png#thumbnail)

### License id
License id can be retrived from Cloudneeti Portal **Features and Quotas** page

![License Id](.././images/updateAWSConfiguration/LicenseId.png#thumbnail_1)

**STEP 1: Link external id to Cloudneeti AWS account role Cloudneeti-SecurityAudit or Create a new role with external id**
--------------------------------------------------------------------------------------------------------------------------

Login to [AWS Console](https://aws.amazon.com/console/) with AWS **Administrator** role

### **1.1 Link external id to Cloudneeti AWS account role Cloudneeti-SecurityAudit**

1.  Navigate to **Services \> IAM**

2.  Click on **Roles** (1)

3.  Select role **Cloudneeti-SecurityAudit**

4.  Select **Trust relationships** tab (2)

5.  Click **Edit trust relationship** (3)

    ![EditRole](.././images/updateAWSConfiguration/AWS_IAM.png#thumbnail_1)

6.  **Update Trust Policy** by overriding the existing content with the below
    .json after replacing

    1.  Cloudneeti AWS Account Id

    2.  License Id

            { 
                "Version": "2012-10-17", 
                "Statement": 
                [ 
                    { 
                        "Effect": "Allow", 
                        "Principal": 
                        { 
                            "AWS": "arn:aws:iam:: <Cloudneeti AWS Account Id>:root" 
                        }, 
                        "Action": "sts:AssumeRole", 
                        "Condition": 
                        { 
                            "StringEquals": 
                            { 
                                "sts:ExternalId": "\<License Id\>" 
                            } 
                        } 
                    } 
                ] 
            } 

**Step 2 Re-scan Cloud Account to verify successful update to role**
----------------------------------------------------

Login to Cloudneeti portal with License Admin role

1.  Select desire **License** (1) and **Cloud Account** (2)

2.  Click **Configure** (3)

3.  Select **Re-scan** (4)

    ![Update Account](.././images/updateAWSConfiguration/UpdateCloudAccount.png#thumbnail_1)

4.  It will take sometime to complete the data scan. Verify that last scan time is updated. Please contact support@cloudneeti.com in case of any issues.

    ![Update Account](.././images/updateAWSConfiguration/verifyUpdatedRole.png#thumbnail_1)