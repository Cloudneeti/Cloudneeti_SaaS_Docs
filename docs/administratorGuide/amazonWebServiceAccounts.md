# AWS Onboarding Guide
## 1	Introduction
The purpose of this document is to outline the concept of Cloudneeti application integration with the customer’s Amazon Web Services accounts, the required preparations and prerequisites, and the specific onboarding steps. Onboarding of Micorsoft Azure and Office 365 cloud accounts are described in separate documents.

## 2	Cloudneeti Product 
### 2.1	Software-as-a-Service (SaaS)
Cloud technologies enable a fast-paced digital transformation. However, businesses are struggling to protect their public cloud workloads, which impedes their digital transformation. 
1.	Not able to prevent data breaches:
    a.	Nearly all successful attacks on cloud services are the result of cloud misconfiguration or mismanagement
    b.	Increased complexity due to frequent release cycles, multi-cloud and multi-workloads (300+ services on Azure and AWS)
2.	Not able to prove security:
    a.	Traditional tools don’t work for the public cloud (84% of organizations surveyed) to monitor, baseline, and adjust security posture
    b.	Not able to prove compliance to internal/external auditors

Cloudneeti is Gartner-recognized and CIS-certified. The product provides:
1.	Visibility into misconfigurations, compare against the defined standard (security baseline) to identify deviations,
2.	Enforcement of remediations of discovered misconfigurations via automatic and guided remediations,
3.	Governance capabilities in managing policy exceptions, IT system integrations to adjust posture, 
4.	Reporting for 11+ compliance frameworks, deviation notifications and various data-feed integrations with IT and compliance oversight tooling 

![Cloudneeti Product](../../image/Cloudneeti_Product.png#thumbnail)

The Cloudneeti product is a multi-tenant software-as-a-service (SaaS) application. Cloudneeti application leverages cloud-native APIs to continuously discover customer workloads and monitor their configurations. 

### 2.2	Cloudneeti Application
The Cloudneeti application is hosted on the public cloud platforms utilizing Microsoft Azure, Amazon Web Services and Office 365 service components. The platform consists of a data collection service, data processing service, data visualization service, and external IT systems integrations. 

•	The data collection service is granted read-only access to the customer’s cloud accounts and collects configuration information of cloud workloads (resources) within the cloud account. 

•	The data processing service compares this information against cloud security best practices and compliance controls. 

•	The data visualization service provides dashboards and reports about the comparison of actual configuration to cloud security best practices.

•	The IT systems integration service enables data sharing with external tools via API integration.

### 2.3	Customer Cloud Accounts
Cloudneeti platform can connect to multiple cloud accounts. The term “cloud account” is used as a standardized name referring to a single Azure subscription, Office 365 subscription, AWS account, or GCP project.

![Customer Cloud Account](../../image/Customer_Cloud_Account.png#thumbnail)

### 2.4	Cloudneeti Licenses and Accounts
A Cloudneeti license is a group of accounts. Multiple Cloudneeti licenses can be provided to the customer under one contract. Each customer’s cloud account is registered with a Cloudneeti account. 

Consider the following when deciding between using a single license or multiple licenses:
•	Data aggregation and reporting for cloud accounts will be aggregated at the license level

•	Each license can be configured to integrate with separate IT systems (reporting destinations, ticketing systems, audit report feed destinations, etc.)

•	Each license can be configured to choose a combination of compliance reporting packages (for example, BusinessUnit_1 might want PCI DSS, CIS, while BusinessUnit_2 might want HIPAA, NIST CSF, ISO27001)

•	Each license can enforce different baseline policies for their set of cloud accounts.

![Cloudneeti License and Accounts](../../image/Cloudneeti_License_and_Accounts.png#thumbnail)

### 2.5	Cloudneeti Application Users
Cloudneeti allows customers to bring in their identity providers for authentication purposes. For authorization, Cloudneeti allows customer license admins to invite and designate user access to Cloudneeti. 
#### 2.5.1	Authentication
Cloudneeti does not manage user passwords/credentials. Instead, the application integrates with the customer’s identity provider natively, allowing for SSO (Single Sign-On) with the customer’s Microsoft Azure AD, Office 365, and Microsoft accounts (Outlook, Hotmail, Live).

![Authentication](../../image/Authentication.png#thumbnail)

#### 2.5.2	Authorization
Cloudneeti supports “administrator” and “reader” roles under a license and under accounts. In other terms, a Cloudneeti user can be a License Administrator or License Reader, Account Administrator or Account Reader. 

![Authorization](../../image/Authorization.png#thumbnail)

Account users (Account Administrator and Account Reader) will have access only to information about specific cloud accounts onboarded to Cloudneeti. 

License users (License Administrator and License Reader) will have access to information about all Cloudneeti cloud accounts under those licenses.

 

License Administrators and Account Administrators have the rights to manage users (create, remove), manage configurations (policy configurations, integrations) and view dashboards and reports, while License Readers and Account Readers can only view dashboards and reports.

### 2.6	Cloudneeti Application Permissions 
The following permissions are required for Office 365 Account onboarding to Cloudneeti. 
#### 2.6.1	AWS account permissions
Cloudneeti requires the following permissions to access your AWS account.


| Type                  | Permission Name  |
|-----------------------|------------------|
| AWS control plane API | Security Auditor |



Refer [SecurityAudit access policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions.html#jf_security-auditor) documentation to read more about the role. Section ‘Register your AWS account to Cloudneeti’ will guide you through the process of registering the role.

#### 2.7	Customer Data Protection 

Cloudneeti customers retain control and ownership of their own data. 

The collected metadata about configurations of customer cloud accounts (Azure subscriptions, Office 365 Accounts or AWS Accounts) is well-protected within the Cloudneeti data store. The following information security policies are implemented by Cloudneeti:

•	**Data encryption at rest:** The customer’s data is always stored encrypted. Various cloud service components and encryption schemes (e.g. key vaults, AES symmetric key algorithms, higher-level cipher suites) are used.

•  **Data encryption in-transit:** TLS 2.0 encryption or higher is applied for encrypting data during transmission.

•	**Data access:** The production support team has access to the management plane at the data store level. They won’t have access to decrypt the configuration data unless a support request makes it necessary. Customers have to explicitly grant access to the support team to retrieve the data for a time-boxed period of time required for resolving a ticket.

•	**Customer lockbox:** Lockbox is a feature that ensures the Cloudneeti support team cannot access customer data to perform a service operation without explicit approval. 

•	**Data classification:** A data classification of ‘Restricted’ is applied to the data store.

•	**Audit logging:** All access requests are monitored through Privileged Identity Management (PIM) as well as operational logs.

•	**Data erasure:** Expiry/termination of a contract will result in automatic clean-up of all data collected.

•	**Data backup:** All backed up data is stored encrypted, and RBAC permissions are applied for the recovery team.

•	**Data retention:** Data retention for active contracts is applied at the contract provisioning level. Typically, this will be 30-90 days.

## 3	AWS Onboarding Preparation
AWS account onboarding to Cloudneeti is the process of granting Cloudneeti access to the customer’s cloud accounts.
### 3.1	Customer Team
Before onboarding, please ensure that users with the following roles are available:



| Role                                   | Action to Perform                        |
|----------------------------------------|------------------------------------------|
| ❑ IT Manager / Architect               | Ensure that a user is appointed as a customer [AdministratorAccess](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions.html#jf_administrator) |
| ❑ AWS Administrator Access             | Create a role to mark Cloudneeti's account as a trusted entity with the [SecurityAudit access policy.](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions.html#jf_security-auditor)  |
| ❑ Agree on an Onboarding Call          | Agree on a timeslot for an onboarding call with our consulting team |
| ❑ Sign appropriate Agreement documents | Review and sign the following documentation:<br>1. Mutual NDA <br>2. Cloud Services Agreements (necessary for a long-term contract) |


1.	Mutual NDA 
2.	Cloud Services Agreements (necessary for a long-term contract)

### 3.2	Consulting Team
The consulting team supporting the onboarding will typically consist of:

•	**Program Manager** - responsible for planning and delivery

•	**Cloud Architect** – supports technical dialog 
Below is a high-level checklist of things to review before the actual onboarding begins:

❑ Understand the customer’s environment and select appropriate cloud accounts for the onboarding.

❑ Provide a demo of the Cloudneeti product.

❑ Provide a walkthrough of the product onboarding. 

❑ Allow the customer to receive appropriate permissions for onboarding.

❑ Explain prerequisites for onboarding.

### 3.3	Prerequisites
Upon customer request, Cloudneeti license(s) will be configured and email invitation(s) will be sent to License Administrator(s). Additional users within Cloudneeti applications will be provisioned by the customer’s License Administrator.

The following activities need to be completed by the customer prior to onboarding.

#### 3.3.1	Users and Roles


| Activity                                 | Description                              |
|------------------------------------------|------------------------------------------|
| 1. Engage a user with **AWS account user with Administrator Access role** | The customer’s AWS administrator must have enough permissions to create a role as a trusted entity with the [SecurityAudit access policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions.html#jf_security-auditor). |
| 2. Download and review “**serverless.yml**” file for creation of role | A YAML template is used to create a role in AWS account to mark Cloudneeti's account as a trusted entity with the SecurityAudit access policy. [Download Link](https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/serverless.yml). |
| 3. Have the **AWS account id** handy         | This is a mandatory field for onboarding an AWS account to Cloudneeti. <br><br>1. Sign into your AWS account<br>2. Click your name located on the top right navigation pane<br>3. Select “My Account”. <br>4. Your AWS ID is the twelve-digit number located underneath the Account Settings section. |
| 4. Have the **AWS account access key id and secret** handy | This is a mandatory field for onboarding an AWS account to Cloudneeti.<br><br>1. Sign into your AWS account<br>2. Click your name located on the top right navigation pane.<br>3. Select “My Security Credentials”. <br>4. Access key id is under the section “Access keys for CLI, SDK, & API access”. If access key secret is not recorded while creation for this id, please create a new access key by clicking on “Create access key” button. |

#### 3.3.2	Workstation readiness

| Activity                                 | Description                              |
|------------------------------------------|------------------------------------------|
| 5. **Workstation**: Ensure you have the latest PowerShell version (v5 and above)  | Verify PowerShell version by running the $PSVersionTable.PSVersion command on the workstation where you will execute commands to add a role. If PowerShell version is lower than 5, then follow this link for installation of a later version:[ Download Link](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell?view=powershell-6). |
| 6. **Workstation**: Install AWS Command Line Interface  | To install AWS cli follow [link](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html)<br>AWS Command Line Interface (CLI) is a unified tool to manage your AWS services. |
| 7. **Workstation**: Install Nodejs           | Download latest stable version of nodejs from [here](https://nodejs.org/en/) and install on the workstation. |
| 8. Workstation: Install serverless npm module | Serverless Framework is a CLI tool to manage AWS deployments.<br>Execute below command to install serverless module,<br># npm install –g serverless |


## 4	AWS Onboarding Steps
Follow these steps to onboard the AWS account:


| # | Step                                     |
|---|------------------------------------------|
| 1 | Create an AWS role for Cloudneeti access |
| 2 | Add your AWS Account to Cloudneeti       |
| 3 | Verify Data Collection                   |
| 4 | Configure scan notifications             |


### 4.1	Create an AWS role for Cloudneeti access

Use serverless.yml file to create a role to mark Cloudneeti's account as a trusted entity with the SecurityAudit access policy. 

1.	Open PowerShell application as an administrator (right click on PowerShell and select run as administrator)
2.	In PowerShell application, navigate to folder location where you downloaded the file “serverless.yml” (e.g. “cd C:\Downloads”)
3.	Type “aws configure” and enter 
    a.	Account access key id and secret access key of an AWS IAM User (with **Administrator Access** policy) 
    b.	Default region name(eg. us-east-1). 
    c.	Default output format as "json" only.
4.	To add Cloudneeti data provisioning resource, execute the command “serverless deploy”
 
![Serverless Deploy](../../image/Serverless_Deploy.png#thumbnail)

5.	An AWS role will be created in the customer's account to mark Cloudneeti's account as a trusted entity with the SecurityAudit access policy. 

### 4.2	Add your AWS Account to Cloudneeti
1.	Log in to the Cloudneeti portal using the license admin user credentials.
2.	Click on the ‘Activate License’ button to activate the license. This step is needed if this is the first cloud account you are adding to the License.

 ![Activate License](../../image/4.2_2_ActivateLicense.png#thumbnail)
 
3.	Select AWS connector.
  
![AWS Connector](../../image/Connector_Type.png#thumbnail)

4.	Enter details Account Name, AWS Account Id

![Add AWS Account](../../image/Add_Account.png#thumbnail)
 
5.	Click on ‘Add Account’.

### 4.3	Verify Data Collection
1.	Click on ‘Go To Dashboard’ to see the data.
 
![Success](../../image/Success.png#thumbnail)

2.	Wait approx. 5 minutes for the data to be collected, processed, and rendered to the Cloudneeti Dashboard.
 
![Dashboard](../../image/Dashborad.png#thumbnail)

Congratulations! You have just on-boarded an AWS account to Cloudneeti. Subsequent onboardings will take less time (usually less than 10 minutes).

## 5	AWS Post-Onboarding Configurations
### 5.1	Configure scan notifications
Scan notifications allow a cloud account user to subscribe to changes in security posture. To receive email notifications on a scan from Cloudneeti Bot, please refer following steps.
1.	On Cloudneeti portal, navigate to settings
2.	Select desired License and Account 
3.	Click on configure button to select “Configure Notifications”
4.	Enter comma separated email addresses.

![Configure Notifications](../../image/Configure_notifications.png#thumbnail)

5.	Click on save button.

