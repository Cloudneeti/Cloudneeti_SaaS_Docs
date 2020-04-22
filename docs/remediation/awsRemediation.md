# Auto Remediation of AWS Resources

Resources that are non-compliant to a security policy can be put into a
compliant state through Remediation. Remediation is accomplished by instructing
Security Policy to update the configuration of your existing resources and is
effective for new resource deployment. This article shows the steps needed to
understand and accomplish remediation with Cloudneeti Remediation.The following
steps are required to onboard Microsoft Azure to the Cloudneeti application.

![Remediation of AWS Resources](.././images/cloudneetiRemediation/AWS_Remediation1.png#thumbnail_1)

1.  **Deploy the Cloudneeti remediation framework on AWS account** includes
    provisioning remediation framework. Cloudneeti remediation framework has
    in-built capability to automatically remediate the non-compliant resources.
    Once remediation policies are enabled in Cloudneeti, the new resources get
    automatically remediated in near real time

2.  **Configure Cloud Account for remediation** includes enabling Cloud Account
    remediation and linking Cloudneeti Remediation framework deployed AWS
    account.

3.  **Configure Policy Remediation** includes configuring security policies in
    the respective cloud account.

4.  **Initiate Remediation** includes triggering remediation feature to
    remediate resources that are non-compliant to a security policy.

5.  **Verify results** includes verifying policy result post next data scan on
    Cloudneeti.

       | **Step**                                                       | **Product**     | **Role**              |
|------------------------------------------------------------|-------------|-------------------|
| Deploy the Cloudneeti remediation framework on AWS account | AWS Console | AWS Account Admin |
| Configure Cloud Account for remediation                    | Cloudneeti  | License Admin     |
| Configure Policy Remediation                               | Cloudneeti  | License Admin     |
| Initiate Remediation                                       | Cloudneeti  | License Admin     |
| Verify results                                             | Cloudneeti  | License Admin     |

Required Roles
--------------

One or more people with the following roles are required to complete Microsoft
Azure onboarding process.

 | **Pre-requisite Role** | **Portal to use**      |
|------------------------|------------------------|
| License Admin          | Cloudneeti application |
| AWS Account Admin      | AWS Console            |

-   Enabling policy remediation and initializing remediation requires the logged
    in user to be assigned the **License Admin** role in the Cloudneeti
    application.

-   **AWS Account Admin** role is required for provisioning the required roles and remediation framework.

Required Permissions
--------------------

Cloudneeti AWS account requires the invoke lambda function permission to invoke
the remediation actions.

The same role is used by the AWS account to be remediated on remediation
framework for auto-remediation purpose in multi account remediation.

Remediation framework will require the below role and actions to perform the
remediation action. This role will gets updated upon new remediation policy
additions in remediation framework.

| **Information**        | **Portal to use** | **Role**                       | **Step** |
|------------------------|-------------------|--------------------------------|----------|
| Cloudneeti AWS Account | AWS Console       | CN-Remediation-Invocation-Role | STEP 3   |
| Remediation Framework  | AWS Console       | CN-Auto-Remediation-Role       | STEP 1   |
| Remediation Framework  | AWS Console       | CN-Auto-Remediation-Invoker    | STEP 1   |

Workstation Readiness
---------------------

| **Activity**                                        | **Description**                                                                                                                                                                             |
|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Workstation:** Install Bash                       | Either a Linux workstation or Windows Subsystem for Linux can be used.                                                                                                                      |
| **Workstation:** Install AWS Command Line Interface | To install AWS cli follow [link](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html){target=_blank} **AWS Command Line** Interface (CLI) is a unified tool to manage your AWS services. |
| **Workstation:** Install Nodejs                     | Download latest stable version of nodejs from [here](https://nodejs.org/en/){target=_blank} and install on the workstation.                                                                                |
| **Workstation:** Install serverless npm module      | Serverless Framework is a CLI tool to manage AWS deployments. Execute below command to install serverless module, \# npm install –g serverless                                              |
| **Workstation:** Install JQ for bash terminal     | Download latest stable version of JQ from [here](https://stedolan.github.io/jq/){target=_blank} and install on the workstation                                              |


STEP 1: Provision Remediation framework on same or different AWS Account
------------------------------------------------------------------------

### 1.1 Local Account Remediation

1.  Open bash terminal

2.  Clone the aws-remediation framework from the git

        git clone https://github.com/Cloudneeti/aws-auto-remediation

3.  Go to remediation framework repository

        cd aws-auto-remediation 

4.  Configure AWS account where remediation framework is to be deployed

        aws configure

5.  Deploy remediation framework in AWS account which need to be remediated.

        bash deploy-remediation-framework.sh -a <AWS-acount-id> -e <Cloudneeti-environment-prefix> -v 2.0 -s <list of regions where auto-remediation is to be enabled>

    (-a) Account Id: 12-digit AWS account Id of the account where you want the remediation framework to be deployed

    (-e) Environment prefix: Enter any suitable prefix for your deployment

    (-v) Version: Enter the remediation framework version (Would be provided by Cloudneeti)

    (-s) Secondary Region(s): List of Region(s) where auto-remediation is to be
    enabled it should be in programmatic format e.g. us-east-1 or you can
    provide ‘all’ for all regions deployment or ‘na’ if you do not want to
    configure auto-remediation in other regions.


6.  Verify the Remediation framework deployment. Run the below commands to validate remediation
    framework deployments and necessary permissions.

        bash verify-remediation-setup.sh -a <AWS-account-id> -p <primary-deployment-region> -e <environment-prefix> -s <list of regions where auto-remediation is to be verified>
    
    (-a) Account Id: 12-digit AWS account Id of the account for which you want
    to verify if remediation framework is deployed or not.

    (-p) Primary AWS Region where main framework is be deployed

    (-e) Environment prefix: Enter any suitable prefix for your deployment

    (-s) Secondary Region(s): List of Region(s) where auto-remediation is to be
    verified it should be in programmatic format e.g. us-east-1 or you can
    provide ‘all’ for all regions verification or ‘na’ if you do not want to
    verify regions where auto-remediation is enabled or not.


### 1.2 (Optional) Multi Account Remediation

1.  Open bash terminal

2.  Clone the aws-remediation framework from the git

        git clone https://github.com/Cloudneeti/aws-auto-remediation  

3. Go to remediation framework repository

        cd aws-auto-remediation 

4. Configure remediation framework

    a. Configure AWS account where remediation framework is to be deployed, using below command.
    
        aws configure 

    b. Deploy remediation framework in AWS account which will be used as the remediator in multi-mode: 

    This step is optional if framework is already provisioned using [step 1.1](.././awsRemediation/#11-local-account-remediation)
    
        bash deploy-remediation-framework.sh -a <AWS-account-id> -p <primary-deployment-region> -e <Cloudneeti-environment-prefix> -v <2.0> -s <list of regions where auto-remediation is to be enabled>

    (-a) Account Id: 12-digit AWS account Id of the account where you want the
    remediation framework to be deployed

    (-p) Primary AWS Region where main framework will be deployed

    (-e) Environment prefix: Enter any suitable prefix for your deployment

    (-v) Version: Enter the remediation framework version (Would be provided by
    Cloudneeti)

    (-s) Secondary Region(s): List of Region(s) where auto-remediation is to be
    enabled it should be in programmatic format e.g. us-east-1 or you can
    provide ‘all’ for all regions deployment or ‘na’ if you do not want to
    configure auto-remediation in other regions.
 
    
    c. Update the role in the account with the remediation framework so that it is aware of the new account that is/ will be added for remediation. (Make sure you have configured the account with the       remediation framework until this step using “aws configure”)

        bash update-remediation-role.sh -r <AWS-account-id> -a <AWS-account-id>

    (-r) Remediation Account Id: 12-digit AWS account Id of the account where the remediation framework is deployed

    (-a) New AWS Account Id: 12-digit AWS Account Id of the account which is newly added to use the remediation framework

5.  Configure AWS account to be remediated

    a.  Go to multi-mode remediation framework repository

        cd aws-auto-remediation\multi-mode-remediation

    b.  Execute below command to configure your aws account and region where remediation is to be enabled
    
    **Region** should be same as remediation framework provisioned in [step 1.1](.././awsRemediation/#11-local-account-remediation) or [step 1.2](.././awsRemediation/#12-optional-multi-account-remediation)

        aws configure


    c.  Deploy automatic remediation invoker resources and associated role on AWS account which is to be remediated.

        bash configure-multi-mode-remediation.sh -a <AWS-account-id> -r <AWS-account-id> -p <primary-deployment-region> -e <Cloudneeti-environment-prefix> -v <2.0> -s <list of regions where auto-remediation is to be enabled>

    
    (-a) Account Id: 12-digit AWS account Id of the account for which you want
    to enable the remediation

    (-r) Remediation Account Id: 12-digit AWS account Id of the account where
    the remediation framework is deployed.

    (-p) Primary AWS Region where main framework will be deployed

    (-e) Environment prefix: Enter any suitable prefix for your deployment

    (-v) Version: Enter the remediation framework version (Would be provided by
    Cloudneeti)

    (-s) Secondary Region(s): List of Region(s) where auto-remediation is to be
    enabled it should be in programmatic format e.g us-east-1 or you can provide
    ‘all’ for all regions deployment or ‘na’ if you do not want to configure
    auto-remediation in other regions.

6.  Verify the Remediation framework deployment. After deployment of remediation
    invoker resources on AWS account which is to be remediate, run the below
    commands to validate remediation invoker resources along with necessary
    permissions along with remediation framework.

        bash verify-multi-mode-remediation-setup.sh -a <AWS-account-id> -r <AWS-account-id> -p <primary-deployment-region> -e <environment-prefix> -s <list of regions where auto-remediation is to be verified>


    (-a) New AWS Account Id: 12-digit AWS Account Id of the account which is newly added to use the remediation framework. 

    (-r) Remediation Account Id: 12-digit AWS account Id of the account where the remediation framework is deployed

    (-p) Primary AWS Region where main framework will be deployed

    (-e) Environment prefix: Enter any suitable prefix for your deployment
 
    (-s) Secondary Region(s): List of Region(s) where auto-remediation is to be
    verified it should be in programmatic format e.g. us-east-1 or you can
    provide ‘all’ for all regions verification or ‘na’ if you do not want to
    verify regions where auto-remediation is enabled or not.


STEP 2: Configure Cloud Account for remediation 
------------------------------------------------

Login to Cloudneeti portal with **License Admin** role

1.  Select desired **License** (1) and **Cloud Account** (2)

2.  Click **Configure**

3.  Select **Configure Account Remediation**

    ![STEP 2: Configure Cloud Account for remediation ](.././images/cloudneetiRemediation/AWS_RemediationStep2.1.png#thumbnail_1)

4. **Enable** remediation (1)

5. Enter the AWS account id (2)

    This can be same as AWS account or different account id where Cloudneeti remediation framework is deployed.

6. **Save** (3)

    This will validate Cloudneeti Remediation framework on given AWS account and enable remediation on success.

    ![STEP 2: Configure Cloud Account for remediation ](.././images/cloudneetiRemediation/AWS_RemediationStep2.2.png#thumbnail_1)

**Note:**

In case of invalid remediation account id, missing remediation framework or
roles on the provided remediation account id, Cloudneeti displays the error
message.

Configured email ids will receive an email with details and steps for fixing
the issues, once fixed please repeat above steps to enable* [Cloud Account
Remediation](#_STEP_2:_Configure).

STEP 3: Configure policy remediation 
-------------------------------------

Login to Cloudneeti portal with **License Admin** role

1. Select desired **License** (1) and **Cloud Account** (2)

2. Navigate to **Configurations** (3) and **Security Policies** (4)

3.  Select **Account Level** (5)

4. Select **Remediation available** in filter (6)

5. **Enable** policies for remediation (7)

6. Click **Save** (8)

    ![STEP 3: Configure policy remediation ](.././images/cloudneetiRemediation/AWS_RemediationStep3.2.png#thumbnail_1)

7. Confirm by hitting “Yes Please” on confirmation message box.

    ![STEP 3: Configure policy remediation ](.././images/cloudneetiRemediation/AWS_RemediationStep3.3.png#thumbnail_1)


STEP 4: Remediate non-compliant resources
-----------------------------------------

Cloudneeti supports two ways to remediate non-compliant resources.

**Manually Triggered [for existing resources]** - To remediate all the existing
non-compliant resources, follow below procedure.

**Auto Remediation [for new resources] -** Cloudneeti remediation framework has
in-built capability to automatically remediate the non-compliant resources. Once
the remediation policies are enabled in Cloudneeti, the new resources get
automatically remediated in near real time.

### Manually Triggered [for existing resources]

Login to Cloudneeti portal with **License Admin** role

1.  Select desired **License** (1) and **Cloud Account** (2)

2.  Click **Cloud Security Best Practices** (3)

3.  Click **Remediate** (4)

    ![STEP 4: Remediate non-compliant resources ](.././images/cloudneetiRemediation/AWS_RemediationStep4.1.png#thumbnail_1)

4. All remediation enabled policies will appear. If the selection checkbox is
    disable state please check all prerequisites are met.

5. Select desired **policy/policies** (1)

6. Click **Remediate Now** (2)

    ![STEP 4: Remediate non-compliant resources ](.././images/cloudneetiRemediation/AWS_RemediationStep4.2.png#thumbnail_1)

7. Remediation will change the configuration for resources to make them compliant with the policy with deploy if not exist.

    ![STEP 4: Remediate non-compliant resources ](.././images/cloudneetiRemediation/AWS_RemediationStep4.3.png#thumbnail_1)

STEP 5: Verify Resource Remediation
-----------------------------------

On remediation of non-compliant resources using manually triggered or
auto-remediation will not show the updated resource configuration in Cloudneeti
immediately. Verification of latest resource configurations can be done after
next scan in the Cloudneeti portal. To get the latest configuration perform an
on-demand re-scan the in Cloudneeti portal using below steps,

Login to Cloudneeti portal with **License Admin** role

1. Select desired **License** (1) and **Cloud Account** (2)

2. Click **Configure** (3)

3. Select **re-scan (4)**

    ![STEP 5: Verify Resource Remediation](.././images/cloudneetiRemediation/AWS_RemediationStep5.1.png#thumbnail_1)

4. It will take a few minutes to scan and process data. On Dashboards **Last Scanned On** will be updated once data scan and processing done.

5. Verify data on **Dashboard**

    ![STEP 5: Verify Resource Remediation](.././images/cloudneetiRemediation/AWS_RemediationStep5.2.png#thumbnail_1)


Upgrade of Remediation framework
--------------------------------

Cloudneeti periodically releases new sets of remediation policies to the customer. To use the latest remediation policies, customer needs to upgrade their AWS remediation framework. Cloudneeti will notify customers whenever new version of remediation framework gets release.
To upgrade the remediation framework, you need to use the deployment commands as it is with the same input parameters.


Cloudneeti Remediation Framework
--------------------------------

### Local Account Remediation

The remediation framework uses CloudTrail, CloudWatch event rules, the remediation lambda functions, Invoker lambda function in multiple regions, and the appropriate IAM roles.

![Local Account Remediation](.././images/cloudneetiRemediation/AWS_RemediationLocal1.png#thumbnail_1)

1. AWS account administrator creates/updates/reconfigure resources in aws account

2. CloudTrail and CloudWatch event bus collects the events occurred in AWS account and trigger appropriate event rule

3. CloudWatch event rule trigger the auto-remediation invoker in near real-time in its region

4. From different aws region Auto-remediation-invoker lambda calls the orchestrator which then call appropriate remediation functions present in the remediation framework

5. Remediation functions setup required security configuration on the resources

### Multi Account Remediation

![Multi Account Remediation](.././images/cloudneetiRemediation/AWS_RemediationMulti.png#thumbnail_1)


## Annexure
### Policies enabled for auto-remediation  

Remediation lambda functions are assigned with permissions listed as per policies for related AWS services.

| Category_Name                        | Policy_Title                                                                                                            |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| AWS - Identity and Access Management | Ensure IAM password policy requires at least one uppercase letter                                                       |
| AWS - Identity and Access Management | Ensure IAM password policy require at least one lowercase letter                                                        |
| AWS - Identity and Access Management | Ensure IAM password policy require at least one symbol                                                                  |
| AWS - Identity and Access Management | Ensure IAM password policy require at least one number                                                                  |
| AWS - Identity and Access Management | Ensure IAM password policy requires minimum length of 14 or greater                                                     |
| AWS - Identity and Access Management | Ensure IAM password policy prevents password reuse                                                                      |
| AWS - Identity and Access Management | Ensure IAM password policy expires passwords within 90 days or less                                                     |
| AWS - Identity and Access Management | Ensure IAM Database Authentication feature is enabled for Amazon Neptune clusters                                       |
| AWS - Identity and Access Management | Ensure IAM Database Authentication feature is enabled for RDS PostgreSQL Instances                                      |
| AWS - Identity and Access Management | Ensure IAM Database Authentication feature is enabled for RDS Aurora Cluster                                            |
| AWS - Identity and Access Management | Ensure that Amazon RDS database snapshots are not accessible to all AWS accounts                                        |
| AWS - Identity and Access Management | Ensure IAM Database Authentication feature is enabled for RDS MySQL Instances                                           |
| AWS - Audit and Logging              | Ensure CloudTrail is enabled in all regions                                                                             |
| AWS - Audit and Logging              | Ensure CloudTrail log file validation is enabled                                                                        |
| AWS - Audit and Logging              | Ensure Global resources are included into Amazon Config service configuration                                           |
| AWS - Audit and Logging              | Ensure Log Exports feature is enabled for RDS Aurora MySQL Serverless Cluster                                           |
| AWS - Audit and Logging              | Ensure Log Exports feature is enabled for RDS MySQL Instance                                                            |
| AWS - Audit and Logging              | Ensure Log Exports feature is enabled for RDS Mariadb Instance                                                          |
| AWS - Audit and Logging              | Ensure Log Exports feature is enabled for Aurora cluster                                                                |
| AWS - Audit and Logging              | Ensure Log Exports feature is enabled for Oracle instances                                                              |
| AWS - Audit and Logging              | Ensure that CloudTrail trail have logging enabled                                                                       |
| AWS - Monitoring                     | Ensure that S3 buckets are not publicly accessible                                                                      |
| AWS - Networking                     | Ensure Deletion Protection feature is enabled for your AWS Application load balancers to follow security best practices |
| AWS - Networking                     | Ensure Deletion Protection feature is enabled for your AWS Network load balancers to follow security best practices     |
| AWS - Networking                     | Ensure Connection Draining is enabled for your AWS Classic Load Balancer                                                |
| AWS - Networking                     | Ensure that public access is not given to RDS PostgreSQL Instance                                                       |
| AWS - Networking                     | Ensure that public access is not given to RDS MariaDB Instance                                                          |
| AWS - Networking                     | Ensure that public access is not given to RDS Oracle Instances                                                          |
| AWS - Networking                     | Ensure that public access is not given to RDS SQL Server Instances                                                      |
| AWS - Networking                     | Ensure that public access is not given to RDS Aurora SQL Instances                                                      |
| AWS - Networking                     | Ensure that public access is not given to RDS MySQL Instance                                                            |
| AWS - Data Protection                | Ensure that Server-Side Encryption is enabled for Amazon SQS queues                                                     |
| AWS - Data Protection                | Ensure Deletion Protection feature is enabled for RDS PostgreSQL Instances                                              |
| AWS - Data Protection                | Ensure Performance Insights feature is enabled for RDS PostgreSQL Instances                                             |
| AWS - Data Protection                | Ensure Deletion Protection feature is enabled for RDS MariaDB Instances                                                 |
| AWS - Data Protection                | Ensure Performance Insights feature is enabled for RDS MariaDB Instances                                                |
| AWS - Data Protection                | Ensure that Deletion Protection feature is enabled for RDS Aurora Cluster                                               |
| AWS - Data Protection                | Ensure Deletion Protection feature is enabled for RDS Oracle Instances                                                  |
| AWS - Data Protection                | Ensure Performance Insights feature is enabled for RDS Oracle Instances                                                 |
| AWS - Data Protection                | Ensure Deletion Protection feature is enabled for RDS SQL Server Instances                                              |
| AWS - Data Protection                | Ensure Performance Insights feature is enabled for RDS SQL Server Instances                                             |
| AWS - Data Protection                | Ensure Performance Insights feature is enabled for Aurora SQL Instances                                                 |
| AWS - Data Protection                | Ensure that Deletion Protection feature is enabled for RDS Aurora MySQL Serverless Cluster                              |
| AWS - Data Protection                | Ensure that Deletion Protection feature is enabled for RDS Aurora PostgreSQL Serverless Cluster                         |
| AWS - Data Protection                | Ensure that latest block encryption algorithms is used for RDS MySQL Instance                                           |
| AWS - Data Protection                | Ensure to enable FIPS standards on the server side for RDS MySQL Instance                                               |
| AWS - Data Protection                | Ensure Deletion Protection feature is enabled for RDS MySQL Instances                                                   |
| AWS - Data Protection                | Ensure Performance Insights feature is enabled for RDS MySQL Instances                                                  |
| AWS - Business Continuity            | Ensure S3 buckets have versioning enabled                                                                               |
| AWS - Business Continuity            | Ensure Amazon Auto Scaling Groups are utilizing cooldown periods                                                        |
| AWS - Business Continuity            | Ensure that Termination Protection feature is enabled for AWS CloudFormation stacks                                     |
| AWS - Business Continuity            | Ensure Amazon Neptune instances have Auto Minor Version Upgrade feature enabled                                         |
| AWS - Business Continuity            | Ensure AWS Neptune clusters have a sufficient backup retention period set for compliance purposes                       |
| AWS - Business Continuity            | Ensure Auto Minor Version Upgrade feature is Enabled for RDS PostgreSQL Instances                                       |
| AWS - Business Continuity            | Ensure backup retention policy is set for RDS PostgreSQL Instances                                                      |
| AWS - Business Continuity            | Ensure Multi-AZ feature is Enabled for RDS PostgreSQL Instance                                                          |
| AWS - Business Continuity            | Ensure that sufficient backup retention period is applied to RDS PostgreSQL Instances                                   |
| AWS - Business Continuity            | Ensure Auto Minor Version Upgrade feature is Enabled for RDS MariaDB Instances                                          |
| AWS - Business Continuity            | Ensure backup retention policy is set for RDS MariaDB Instances                                                         |
| AWS - Business Continuity            | Ensure Multi-AZ feature is Enabled for RDS MariaDB Instance                                                             |
| AWS - Business Continuity            | Ensure that sufficient backup retention period is applied to RDS MariaDB Instances                                      |
| AWS - Business Continuity            | Ensure backup retention policy is set for RDS Aurora Cluster                                                            |
| AWS - Business Continuity            | Ensure that sufficient backup retention period is applied to RDS Aurora Cluster                                         |
| AWS - Business Continuity            | Ensure Auto Minor Version Upgrade feature is Enabled for RDS Oracle Instances                                           |
| AWS - Business Continuity            | Ensure backup retention policy is set for RDS Oracle Instances                                                          |
| AWS - Business Continuity            | Ensure Multi-AZ feature is Enabled for RDS Oracle Instances                                                             |
| AWS - Business Continuity            | Ensure that sufficient backup retention period is applied to RDS Oracle Instances                                       |
| AWS - Business Continuity            | Ensure Auto Minor Version Upgrade feature is Enabled for RDS SQL Server Instances                                       |
| AWS - Business Continuity            | Ensure backup retention policy is set for RDS SQL Server Instance                                                       |
| AWS - Business Continuity            | Ensure that sufficient backup retention period is applied to RDS SQL Server Instances                                   |
| AWS - Business Continuity            | Ensure Multi-AZ feature is Enabled for RDS SQL Server Instances                                                         |
| AWS - Business Continuity            | Ensure Auto Minor Version Upgrade feature is Enabled for RDS Aurora SQL Instances                                       |
| AWS - Business Continuity            | Ensure that sufficient backup retention period is applied to RDS Aurora MySQL Serverless Cluster                        |
| AWS - Business Continuity            | Ensure that sufficient backup retention period is applied to RDS Aurora PostgreSQL Serverless Cluster                   |
| AWS - Business Continuity            | Ensure Auto Minor Version Upgrade feature is Enabled for RDS MySQL Instances                                            |
| AWS - Business Continuity            | Ensure backup retention policy is set for RDS MySQL Instances                                                           |
| AWS - Business Continuity            | Ensure that sufficient backup retention period is applied to RDS MySQL Instances                                        |
| AWS - Business Continuity            | Ensure Multi-AZ feature is Enabled for RDS MySQL Instance                                                               |
| AWS - Key Management                 | Ensure rotation for customer created CMKs is enabled                                                                    |
| AWS - Compute                        | Ensure that detailed monitoring is enabled for the AWS EC2 instances that you need to monitor closely                   |
| AWS - Compute                        | Ensure Termination Protection feature is enabled for EC2 instances that are not part of ASGs                            |
| AWS - Storage and Databases          | Ensure Amazon S3 buckets have Default Encryption feature enabled                                                        |
| AWS - Storage and Databases          | Ensure that your AWS S3 buckets are not publicly exposed to the Internet                                                |
| AWS - Storage and Databases          | Ensure AWS S3 buckets do not allow public READ access                                                                   |
| AWS - Storage and Databases          | Ensure AWS S3 buckets do not allow public READ_ACP access                                                               |
| AWS - Storage and Databases          | Ensure AWS S3 buckets do not allow public WRITE_ACP access                                                              |
| AWS - Storage and Databases          | Ensure AWS S3 buckets do not allow public WRITE access                                                                  |
| AWS - Storage and Databases          | Ensure that Amazon S3 buckets use Transfer Acceleration feature for faster data transfers                               |
| AWS - Storage and Databases          | Ensure S3 buckets do not allow FULL_CONTROL access to AWS authenticated users via S3 ACLs                               |
| AWS - Storage and Databases          | Ensure S3 buckets do not allow READ access to AWS authenticated users through ACLs                                      |
| AWS - Storage and Databases          | Ensure AWS S3 buckets do not allow READ_ACP access to AWS authenticated users using ACLs                                |
| AWS - Storage and Databases          | Ensure S3 buckets do not allow WRITE access to AWS authenticated users through S3 ACLs                                  |
| AWS - Storage and Databases          | Ensure S3 buckets do not allow WRITE_ACP access to AWS authenticated users using S3 ACLs                                |
| AWS - Storage and Databases          | Ensure Amazon DynamoDB tables have continuous backups enabled                                                           |
| AWS - Storage and Databases          | Ensure Redshift clusters are not publicly accessible to minimize security risks                                         |
| AWS - Storage and Databases          | Ensure Version Upgrade is enabled for Redshift clusters to automatically receive upgrades during the maintenance window |
| AWS - Storage and Databases          | Ensure that retention period is enabled for Amazon Redshift automated snapshots                                         |
| AWS - Storage and Databases          | Ensure enhanced monitoring is enabled for your AWS Kinesis streams using shard-level metrics                            |
| AWS - Storage and Databases          | Ensure Amazon Kinesis streams enforce Server-Side Encryption (SSE)                                                      |
| AWS - Governance                     | Ensure that Copy Tags to Snapshots feature is enabled for RDS PostgreSQL Instances                                      |
| AWS - Governance                     | Ensure that Copy Tags to Snapshots feature is enabled for RDS MariaDB Instances                                         |
| AWS - Governance                     | Ensure that Copy Tags to Snapshots feature is enabled for RDS Aurora Cluster                                            |
| AWS - Governance                     | Ensure that Copy Tags to Snapshots feature is enabled for RDS Oracle Instances                                          |
| AWS - Governance                     | Ensure that Copy Tags to Snapshots feature is enabled for RDS SQL Server Instances                                      |
| AWS - Governance                     | Ensure that Copy Tags to Snapshots feature is enabled for RDS Aurora MySQL Serverless Cluster                           |
| AWS - Governance                     | Ensure that AutoPause feature is enabled for RDS Aurora MySQL Serverless Cluster                                        |
| AWS - Governance                     | Ensure that Copy Tags to Snapshots feature is enabled for RDS Aurora PostgreSQL Serverless Cluster                      |
| AWS - Governance                     | Ensure that AutoPause feature is enabled for RDS Aurora PostgreSQL Serverless Cluster                                   |
| AWS - Governance                     | Ensure that Copy Tags to Snapshots feature is enabled for RDS MySQL Instances                                           |

