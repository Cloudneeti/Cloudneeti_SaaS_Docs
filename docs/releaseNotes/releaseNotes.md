﻿Releases in 2019
===============

**September 2019- v2.15.1**
----------------------------
1.	**New Marketplace Offers**
	*	Microsoft Azure customers worldwide now gain access to Cloudneeti to take advantage of the Continuous Cloud Security and Compliance Assurance for Microsoft Azure, Amazon Web Services and Office 365. With the current release below SKU's are available on <a href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=Cloudneeti&page=1" target="_blank">Azure Marketplace.</a>

Refer to all the Cloudneeti’s Azure Marketplace offers here- <a href="https://www.cloudneeti.com/offers/" target="_blank">https://www.cloudneeti.com/offers</a>

**August 2019- v2.14.1**
------------------------

1.  **User Experience Improvements**
    *   Enhancements to Risk Dashboard for
        1.  Field name updates for aptness and clarity.
        2.  Removal of mitigated control % tile.
    *   Enhancement to Configure Integrations to show dependency between different tiles for relevance. 
    *   Updated the color for the ‘high’ risk impact -to differentiate with that of 'critical' risk impact.

2.  **Platform & Stability Improvements**
    *   Enhancement to display appropriate Authorization error message in Manage Users section in case if Azure Service Principal does not have permission to access Azure Active directory.

3.  **Policies & Benchmarks Additions/Updates**
    *   Enhancements to recommendation section Azure VM baseline policies.
    *   Removed duplicate policy numbers across different categories in Cloud Security Risk Posture.
    *   Updation of following Azure security policies for additional permission to collect data.

| Category | Policy Title |
| --- | --- |
| Azure - Storage and Databases | Ensure that &#39;Public access level&#39; is set to Private for Blob Containers |

*   Addition of the following 21 new AWS security policies.

| Category | Policy Title |
| --- | --- |
| AWS - Business Continuity | Ensure Auto Minor Version Upgrade feature is Enabled for Relational Database Service Instances |
| AWS - Business Continuity | Ensure backup retention policy is set for Relational Database Service |
| AWS - Business Continuity | Ensure that backtracking is enabled for Amazon Aurora MySQL database clusters |
| AWS - Business Continuity | Ensure Multi-AZ feature is Enabled for Relational Database Service |
| AWS - Business Continuity | Ensure that sufficient backup retention period is applied to RDS Instances |
| AWS - Governance | Ensure that Copy Tags to Snapshots feature is enabled for Amazon RDS instances |
| AWS - Data Protection | Ensure Deletion Protection feature is enabled for AWS RDS database instances |
| AWS - Data Protection | Ensure that encryption is enabled for RDS instances |
| AWS - Data Protection | Ensure Performance Insights feature is enabled for Amazon RDS database instances |
| AWS - Data Protection | Ensure that encryption for storage done with KMS CMKs for each RDS instance |
| AWS - Data Protection | Ensure that Deletion Protection feature is enabled for Aurora database clusters |
| AWS - Identity and Access Management | Ensure IAM Database Authentication feature is enabled for AWS RDS MySQL and PostgreSQL database instances |
| AWS - Identity and Access Management | Ensure that Amazon RDS database snapshots are not accessible to all AWS accounts |
| AWS - Audit and Logging | Ensure that Event Subscription is enabled for RDS instance |
| AWS - Business Continuity | Ensure Multi-AZ feature is Enabled for Relational Database Service |
| AWS - Data Protection | Ensure Performance Insights feature is enabled for Amazon RDS database instances |
| AWS - Audit and Logging | Ensure Log Exports feature is enabled for Amazon Aurora Serverless databases |
| AWS - Networking | Ensure that public access is not given to RDS database instance |
| AWS - Storage and Databases | Ensure that port number should not be set as default port number for AWS RDS Instances |
| AWS - Data Protection | Ensure that encryption for storage done with KMS CMKs for each RDS instance |
| AWS - Networking | Ensure that public subnets is not assigned to RDS database instances |
| AWS - Governance | Ensure that unique master user name is used for each RDS database instance |
| AWS - Identity and Access Management | Ensure that Amazon RDS database snapshots are not accessible to all AWS accounts |
| AWS - Business Continuity | Ensure that sufficient backup retention period is applied to RDS Instances |
| AWS - Governance | Ensure that Copy Tags to Snapshots feature is enabled for Amazon RDS instances |
| AWS - Governance | Ensure that AutoPause feature is enabled for Amazon Aurora Serverless clusters |
| AWS - Data In Transit Encryption | Ensure that Transport Encryption feature enabled for AWS RDS SQL Server instances |
| AWS - Data Protection | Ensure that Deletion Protection feature is enabled for Aurora database clusters |
| AWS - Audit and Logging | Ensure Log Exports feature is enabled for Amazon Aurora Serverless databases |
| AWS - Governance | Ensure that AutoPause feature is enabled for Amazon Aurora Serverless clusters |

## **August 2019- v2.13.1**

1.  **User Experience Improvements**
    *   Segregated Manage License menu into two menus.
        1. Features and Quotas: A new view that provides all the features and quotas associated with customer’s license.
        2. Configure Integrations: A new page that lists and allows customers to configure integrations available within product. Integrations like reporting data feeds, Ticketing (Incident management) etc.
    *   NIST Cybersecurity Framework v1.1 Benchmark: An update to the NIST CSF v1.1 summary view to clarify the level1 and level2 domains along with mappings to new Azure, AWS and Office365 policies.

    *   ‘Audit logs’ menu item has now been moved from under ‘Settings’ header to main menu for easy discoverability and relevance. 

    *    Azure Marketplace Free Trial: Customers will be able to try before they buy on [ Azure marketplace ](https://azuremarketplace.microsoft.com/en/marketplace/apps/cloudneeti.cloudneeti_azmkt_free_trial?tab=Overview) . With this offering Customers can try out our product for their Azure, AWS and O365 cloud accounts.

2.  **Platform & Stability Improvements**
    *   Enhancement to AWS data collection and data processing mechanism for better exception handling and retry mechanism for intermittent failures.
    *   Improved page load performance for various summary and detailed pages with content pagination.
    *   Improved parallization to collect and process data for various Azure and AWS cloud services.

3.  **Policies & Benchmarks Additions/Updates**
    *   Updation of following compliance benchmark for Azure and AWS cloud accounts.
        - AWS: GxP Life Sciences - FDA 21 CFR PART 11 AND PART 820.30 
        - Azure: GxP Life Science - FDA 21 CFR PART 11 AND PART 820.30 
    *   Addition of following compliance benchmark for M365 accounts.
        - M365: GxP Life Sciences - FDA 21 CFR PART 11 AND PART 820.30

    *   Updates to Azure NSG related policies to consider port ranges.
    *   Enhancements to Azure App service-related policies to include the latest updated versions.
    *   Addition of following 22 new Azure security policies.

| **Categoory** | **Policy Title** |
| --- | --- |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of diagnostics logs in app services is enabled in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of web sockets for API app  is enable in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of web sockets for function app is enabled in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of web sockets for web app  is enabled in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of custom domain use in API app is enabled in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of custom domain use in function app is enabled in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of custom domain use in web app is enabled in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of .Net version in API app is enabled in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of .Net version in web app is enabled in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of Java version in API app is enabled in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of Java version in web app is enabled in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of Node.js version in web app is enabled in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of PHP version in API app is enabled in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of PHP version in web app  is enabled  in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of Python version in API app is enabled in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of Python version in web app  is enabled in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of remote debugging for API app is enabled in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of remote debugging for function app  is enabled in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of remote debugging for web app  is enabled in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that required diagnostic logs retention period in days in Logic Apps workflows is set in ASC |
| Azure - Compute (PaaS and Serverless) | Ensure that monitoring of the use of HTTPS in Web App is enabled in ASC |
| Azure - Logging and Auditing | Ensure that required diagnostic logs retention period in days  in Data Lake Store accounts is set in ASC |

## **July 2019- v2.12.1**

1.  **User Experience Improvements**
    *   Self-service free trial experience the power of security and compliance automation in your AWS and Azure cloud environment with 1 month free trial of Cloudneeti Continuous Cloud Assurance. Cloudneeti self-service free trial is available at Azure Marketplace.
    *   Enhancements to Risk dashboard for screen resolution and “Risk Level Trend” chart.
    *   Enhancements to Manage Features page to show license type and cloud connector quotas.
    *   Notification message updated to include operation id.

2.  **Platform & Stability Improvements**
    *   Data collection and processing performance and scale improvements for many policies.
    *   Enhancements to OS and data disk encryption policies.

3.  **Policies & Benchmarks Additions/Updates**
    *   Addition of following compliance benchmark for Azure and AWS cloud account
        1.  AWS: GxP Life Sciences - FDA 21 CFR PART 11
        2.  Azure: GxP Life Science - FDA 21 CFR PART 11
    *   Addition of following 52 new Azure security policies

|   **Category**            |   **Policy Title**            |
|-----------------------|---------------------------|
|   Azure - Storage and Database    |   Ensure that monitoring of SQL managed server without Advanced Data Security is enabled in ASC |
|   Azure - Storage and Database    |   Ensure that all Advanced Threat Protection types on SQL managed instance is enabled in ASC   |
|   Azure - Storage and Databases    |   Ensure that all Advanced Threat Protection types on SQL server is enabled in ASC   |
|   Azure - Fundamentals    |   Ensure that monitoring of access rules in Event Hub namespaces is enabled in ASC   |
|   Azure - Storage and Databases    |   Ensure that monitoring of auditing policy Action-Groups and Actions setting is enabled in ASC   |
|   Azure - Storage and Databases    |   Ensure that the audit monitoring of SQL Servers is enabled in ASC   |
|   Azure - Fundamentals   |   Ensure that monitoring of using built-in RBAC rules is enabled in ASC   |
|   Azure - Fundamentals    |   Ensure that monitoring of access rules in Event Hubs is enabled in ASC   |
|   Azure - Kubernetes & Containers   |   Ensure that monitoring of kubernetes services without authorized IP ranges is enabled in ASC   |
|   Azure - Fundamentals   |   Ensure that monitoring of automation account encryption is enabled in ASC   |
|   Azure - Networking    |   Ensure that monitoring of DDoS protection for virtual network is enabled in ASC   |
|   Azure - Logging and Auditing   |   Ensure that monitoring of diagnostic logs in IoT Hubs is enabled in ASC   |
|   Azure - Compute (IaaS)    |   Ensure that endpoint protection monitoring for virtual machine scale sets is enabled in ASC   |
|   Azure - Storage and Databases    |   Ensure that 'Send alerts to' is set in SQL server Advanced Data Security settings is enabled in ASC   |
|   Azure - Compute (IaaS)    |   Ensure that IP forwarding monitoring on virtual machines is disabled in ASC   |
|   Azure - Compute (IaaS)    |   Ensure that monitoring of network just In time access is enabled in ASC   |
|   Azure - Compute (IaaS)    |   Ensure that monitoring of open management ports on virtual machines is enabled in ASC   |
|   Azure - Logging and Auditing    |   Ensure that monitoring of endpoint protection is enabled in ASC   |
|   Azure - Compute (IaaS)    |   Ensure that monitoring of Internet-facing VM for NSG traffic hardening is enabled in ASC   |
|   Azure - Compute (IaaS)    |   Ensure that monitoring of NSG for virtual machines is enabled in ASC   |
|   Azure - Compute (IaaS)    |   Ensure that monitoring of NSG for Subnet is enabled in ASC   |
|   Azure - Kubernetes & Containers    |   Ensure that monitoring of kubernetes services without pod security policy is enabled in ASC   |
|   Azure - Logging and Auditing    |   Ensure that required diagnostic logs retention period in days for Batch accounts is set in ASC   |
|   Azure - Logging and Auditing    |   Ensure that required diagnostic logs retention period in days in Azure Search service is set in ASC   |
|   Azure - Logging and Auditing    |   Ensure that required diagnostic logs retention period in days in Data Lake Analytics is set in ASC   |
|   Azure - Logging and Auditing    |   Ensure that required diagnostic logs retention period in days in Event Hub accounts is set in ASC   |
|   Azure - Logging and Auditing    |   Ensure that required diagnostic logs retention period in days in IoT Hub accounts is set in ASC   |
|   Azure - Logging and Auditing    |   Ensure that required diagnostic logs retention period in days in Key Vault vaults is set in ASC   |
|   Azure - Logging and Auditing    |   Ensure that required diagnostic logs retention period in days in Service Bus is set in ASC   |
|   Azure - Logging and Auditing    |   Ensure that required diagnostic logs retention period in days in Stream Analytics is set in ASC   |
|   Azure - Kubernetes & Containers    |   Ensure that monitoring of kubernetes services without RBAC is enabled in ASC   |
|   Azure - Storage and Databases    |   Ensure that monitoring of sensitive data is classified on SQL database is enabled in ASC   |
|   Azure - Storage and Databases    |   Ensure that monitoring of SQL managed instances alerts being sent to admins and subscription owners is enabled in ASC   |
|   Azure - Fundamentals    |   Ensure that monitoring of classic storage accounts migration to ARM is enabled in ASC   |
|   Azure - Compute (IaaS)    |   Ensure that reporting of system updates in virtual machine scale sets is enabled in ASC   |
|   Azure - Storage and Database    |   Ensure that monitoring of unencrypted SQL databases is enabled in ASC   |
|   Azure - Compute (IaaS)    |   Ensure that monitoring of classic virtual machines is enabled in ASC   |
|   Azure - Compute (IaaS)    |   Ensure that OS vulnerabilities monitoring for virtual machine scale sets is enabled in ASC   |
|   Azure - Fundamentals    |   Ensure that the detection of VM vulnerabilities by a vulnerability assessment solution is enabled in ASC   |
|   Azure - Storage and Databases    |   Ensure that Vulnerability assessment on your SQL managed instances is enabled in ASC   |
|   Azure - Storage and Database    |   Ensure that Vulnerability assessment on your SQL servers is enabled in ASC   |
|   Azure - Storage and Databases    |   Ensure that monitoring of SQL managed instances without Advanced Data Security is enabled in ASC   |
|   Azure - Compute (PaaS and Serverless)    |   Ensure that monitoring of permissive network access to app-services is enabled in ASC   |
|   Azure - Compute (PaaS and Serverless)    |   Ensure that monitoring of the use of HTTPS in API app is enable in ASC   |
|   Azure - Compute (PaaS and Serverless)    |   Ensure that monitoring of CORS restrictions for API app is enable in ASC   |
|   Azure - Compute (PaaS and Serverless)    |   Ensure that monitoring of CORS restrictions for API function is enabled in ASC   |
|   Azure - Compute (PaaS and Serverless)    |   Ensure that monitoring of CORS restrictions for API web is enable in ASC   |
|   Azure - Compute (PaaS and Serverless)    |   Ensure that monitoring of diagnostics logs in app services is enabled in ASC   |
|   Azure - Compute (PaaS and Serverless)    |   Ensure that monitoring of the use of HTTPS in function app is enabled in ASC   |
|   Azure - Compute (PaaS and Serverless)    |   Ensure that monitoring of IP restrictions for API app is enabled in ASC   |
|   Azure - Compute (PaaS and Serverless)    |   Ensure that monitoring of IP restrictions for function app is enabled in ASC   |
|   Azure - Compute (PaaS and Serverless)    |   Ensure that monitoring of IP restrictions for web app is enabled in ASC   |


## **July 2019- v2.11.1**

1.  **User Experience Improvements**
    *   Risk Dashboard: Cloudneeti introduces Risk dashboard based on “NIST Cyber Security Framework v1.1”. Last month we introduced our Industry leading Risk Posture (a matrix of machine learning infused Risk Likelihood prediction overlaid with Risk Impact). And this month we are topping that by combining it with a NIST CSF v1.1. A continuous risk assurance ensures a solid basis for justifying remediation plans, strategies and resource requests to management.
    *   Reporting: Cloudneeti added detailed report download in word format for Azure and AWS cloud accounts. This feature enables the user to download the report to get a list of resources and controls.
    *   Documentation: Cloudneeti released a user-friendly version of the documentation site.

2.  **Platform & Stability Improvements**
    *   Performance enhancements to data collection and processing mechanism.
    *   Azure and AWS - category name to category id updates for performance optimizations.

3.  **Policies & Benchmarks Additions/Updates**
    *   Added additional 16 controls to following compliance benchmark for AWS cloud accounts.
        1.  AWS: FFIEC - Federal Financial Institutions Examination Council (CAT).

## **July 2019- v2.10.1**

1.  **User Experience Improvements**
    *   Enhancements to Asset dashboard for AWS resource location map.
    *   Enhancements to Asset dashboard for Azure for Users count.

2.  **Platform & Stability Improvements**
    *   Enhancements to “Cloud Security and Risk Posture“.
    *   Performance improvements for AWS data collection with lambda parallelism and orchestration.
    *   NoSQL database automatic scale-out and performance optimizations.

3.  **Policies & Benchmarks Additions/Updates**
    *   Addition of following compliance benchmark for AWS cloud accounts.
        1.  AWS: FFIEC - Federal Financial Institutions Examination Council (CAT).
    *   Addition of following new Azure security policies

|   **Category**            |   **Policy Title**            |
|-----------------------|---------------------------|
|   Azure-Networking    |   Ensure that ingress traffic to SMTP (TCP:25) is restricted for Virtual Machine. |
|   Azure-Networking    |   Ensure that ingress traffic to 'POP3' (TCP:110) is restricted for Virtual Machine.  |

## **June 2019- v2.9.1**

1.  **User Experience Improvements**
    *   Auto-remediation: Cloudneeti delivers automated remediation for critical Microsoft Azure policies. When a misconfiguration           occurs, organizations need instant remediation to minimize the window of opportunity for malicious intentions. This self-healing     ability enables organizations to ensure their security and compliance policies are always enforced.
    *   Dashboards updated as follows
        1.   CISO Dashboard --> Compliance
        2.   SOC Dashboard --> Security
        3.   Assets Dashboard --> Assets
    *   Enhancements to download PDF report to include Risk Posture.

2.  **Platform & Stability Improvements**
    *   Performance enhancements to data collection and processing mechanism.
    *   Optimization with high performance AES 256 encryption/decryption
    *   Enhancement to notification systems if failed to connect to customer AWS account.
    *   Scale, stability and performance improvements for AWS data collection (batching and scaling)

3.  **Policies & Benchmarks Additions/Updates**
    *   Addition of following compliance benchmarks for Azure and AWS cloud accounts
        1.   Azure: SOC2 - AICPA TSC 2017
        2.   AWS: SOC2 - AICPA TSC 2017
        3.   AWS: NIST Cybersecurity Framework (CSF v1.1)
    *   Updated AWS Compliance Mapping for HIPAA, GDPR, and PCI DSS 3.2.1
    *   Addition of following new AWS security policies

|   **Category**            |   **Policy Title**            |
|-----------------------|---------------------------|
|   AWS - Business Continuity   |	Ensure all CloudFront Distributions require HTTPS between CloudFront and your ELB origin    |
|   AWS - Business Continuity   |	Configure HTTP to HTTPS redirects with a CloudFront Viewer Protocol Policy  |
|   AWS - Business Continuity   |	Ensure Elastic Load Balancer has application layer Health Check configured  |
|   AWS - Business Continuity   |	Ensure Amazon Auto Scaling Groups are utilizing cooldown periods    |
|   AWS - Business Continuity   |	Ensure each Auto-Scaling Group is configured for multiple Availability Zones    |
|   AWS - Business Continuity   |	Ensure each Auto-Scaling Group has an associated Elastic Load Balancer  |
|   AWS - Audit and Logging |	Ensure Global resources are included into Amazon Config service configuration   |
|   AWS - Audit and Logging |	Ensure that the log files (history files and snapshots) generated by AWS Config are delivered without any failures to designated S3 bucket  |
|   AWS - Audit and Logging |	Ensure AWS Config service is using an active SNS topic to monitor configuration changes |
|   AWS - Audit and Logging |	Ensure AWS Config service is using an active S3 bucket to store configuration changes files |
|   AWS - Storage and Databases |	Ensure AWS Kinesis streams are encrypted with KMS Customer Master Keys (CMKs) for complete control over data encryption and decryption  |
|   AWS - Storage and Databases |	Ensure enhanced monitoring is enabled for your AWS Kinesis streams using shard-level metrics    |
|   AWS - Storage and Databases |	Ensure Amazon Kinesis streams enforce Server-Side Encryption (SSE)  |
|   AWS - Storage and Databases |	Ensure in-transit and at-rest encryption is enabled for Amazon EMR clusters |
|   AWS - Storage and Databases |	Ensure AWS Elastic MapReduce (EMR) clusters capture detailed log data to Amazon S3  |
|   AWS - Storage and Databases |	Ensure AWS EMR clusters are launched in a Virtual Private Cloud (i.e. are using EC2-VPC platform)   |
|   AWS - Storage and Databases |	Ensure that user activity logging is enabled for your Amazon Redshift clusters  |
|   AWS - Storage and Databases |	Ensure AWS Redshift database clusters are not using 'awsuser' (default master user name) for database access    |
|   AWS - Storage and Databases |	Ensure that your AWS Redshift cluster nodes are of given types  |
|   AWS - Storage and Databases |	Ensure Deferred Maintenance feature is enabled for your Amazon Redshift clusters    |
|   AWS - Storage and Databases |	Ensure Amazon Redshift clusters are not using port 5439 (default port) for database access  |
|   AWS - Storage and Databases |	Ensure Redshift clusters are not publicly accessible to minimize security risks |
|   AWS - Storage and Databases |	Ensure AWS Redshift non-default parameter groups require SSL to secure data in transit  |
|   AWS - Storage and Databases |	Ensure Amazon Redshift clusters are launched within a Virtual Private Cloud (VPC)   |
|   AWS - Storage and Databases |	Ensure Redshift clusters are encrypted with KMS customer master keys (CMKs) in order to have full control over data encryption and decryption   |
|   AWS - Storage and Databases |	Ensure database encryption is enabled for AWS Redshift clusters to protect your data at rest    |
|   AWS - Storage and Databases |	Ensure audit logging is enabled for Redshift clusters for security and troubleshooting purposes |
|   AWS - Storage and Databases |	Ensure Version Upgrade is enabled for Redshift clusters to automatically receive upgrades during the maintenance window |
|   AWS - Storage and Databases |	Ensure that retention period is enabled for Amazon Redshift automated snapshots |

*   Addition/Updates to the following Azure security policies

## **June 2019- v2.8.1**

1.   **User Experience Improvements**
    *   Improved navigation from CISO dashboard - Sunburst chart to “Cloud Security and Risk Posture”.
    *   Added navigation from SOC dashboard - category to “Cloud Security and Risk Posture”.
    *   Enhancements to ‘Manage Users’ a menu under settings. This facilitates to manage account & license users (add/update/delete).
    *   Enhancements to ‘Audit log’ a menu under settings.
    *   Updates of mappings for PCI-DSS3.2, ISO/IEC 27001 with existing AWS related controls.

2.   **Platform & Stability Improvements**
    *   Stability and enhancement to Policy based Risk Posture. Refer blog for more details on: Cloudneeti Introduces Risk Posture.
    *   Performance enhancements to data collection and processing mechanism.
    *   Various stability and bug fixes.

3.    **Policies & Benchmarks Additions/Updates**
    *   Addition of following new AWS security policies

|   **Category**            |   **Policy Title**            |
|-----------------------|---------------------------|
|   AWS - Data In Transit Encryption    |	Ensure that wildcard certificates issued by Amazon Certificate Manager (ACM) or imported to ACM are not in use    |
|   AWS - Data In Transit Encryption    |	Ensure there are no failed SSL/TLS certificates in the AWS Certificate Manager (ACM)    |
|   AWS - Data In Transit Encryption    |	Ensure expired SSL/TLS certificates are removed from AWS Certificate Manager (ACM)    |
|   AWS - Data In Transit Encryption    |	Ensure that all the requests made during SSL/TLS certificate issue or renewal process are validated    |
|   AWS - Data In Transit Encryption    |	Ensure Amazon Certificate Manager (ACM) certificates are renewed 7 days before their expiration    |
|   AWS - Data In Transit Encryption    |	Ensure Amazon Certificate Manager (ACM) certificates are renewed 45 days before their expiration    |
|   AWS - Data In Transit Encryption    |	Ensure Amazon Certificate Manager (ACM) certificates are renewed 30 days before their expiration    |
|   AWS - Data In Transit Encryption    |	Ensure inactive SSL/TLS certificates are removed from AWS Certificate Manager (ACM)    |
|   AWS - Networking    |	Ensure that your EC2 security groups do not allow unrestricted outbound/egress access    |
|   AWS - Identity and Access Management    |	Ensure no AWS IAM users have been inactive for a long (specified) period of time    |
|   AWS - Data In Transit Encryption    |	Ensure that your server certificates are not vulnerable to Heartbleed security bug    |
|   AWS - Data In Transit Encryption    |	Ensure expired SSL/TLS certificates are removed from AWS IAM    |
|   AWS - Identity and Access Management    |	Ensure there is a maximum of one active access keys available for any single IAM user    |
|   AWS - Identity and Access Management    |	Ensure there is at least one IAM user currently used to access your AWS account    |
|   AWS - Storage and Databases    |	Identify and remove any unused AWS DynamoDB tables in your AWS account in order to follow AWS best practices    |
|   AWS - Storage and Databases    |	Ensure Amazon DynamoDB tables enforce Server-Side Encryption (SSE)    |
|   AWS - Storage and Databases    |	Ensure Amazon DynamoDB tables have continuous backups enabled    |
|   AWS - Storage and Databases    |	Ensure that Amazon DynamoDB data is encrypted using AWS-managed Customer Master Keys    |
|   AWS - Storage and Databases    |	Ensure on-demand backup and restore functionality is in use for AWS DynamoDB tables    |
|   AWS - Storage and Databases    |	Ensure AWS DynamoDB Auto Scaling is enabled to automate capacity management for tables and indexes    |

*   Addition/Updates to the following Azure security policies

|   **Category**            |   **Policy Title**            |
|-----------------------|---------------------------|
|   Azure - Business continuity and DR  |	Ensure that Backup feature is configured for Function Apps deployed on Standard and above App Service Plan  |
|   Azure - Business continuity and DR  |	Ensure that Backup feature is configured for Mobile Apps deployed on Standard and above App Service Plan  |
|   Azure - Business continuity and DR  |	Ensure that Backup feature is configured for API Apps  |
|   Azure - Business continuity and DR  |	Ensure that Backup feature is configured for App Service  |
|   Azure - Compute (PaaS and Serverless)  |	Ensure that 'Always On' is enabled for App Services deployed on Basic and above App Service Plan  |
|   Azure - Compute (PaaS and Serverless)  |	Ensure that 'Always On' is enabled for Api Apps deployed on Basic and above App Service Plan  |
|   Azure - Compute (PaaS and Serverless)  |	Ensure that 'Always On' is enabled for Mobile Apps deployed on Basic and above App Service Plan  |
|   Azure - Compute (PaaS and Serverless)  |	Ensure that 'Always On' is enabled for Function Apps deployed on Basic and above App Service Plan  |
|   Azure - Business continuity and DR  |	Ensure that backup feature is configured for Virtual Machines  |
|   Azure - Business continuity and DR  |	Ensure that backup policy is associated with every Backup Vault  |
|   Azure - Compute (IaaS)  |	Ensure that Virtual Machine backups are retained for atleast one week  |
|   Azure - Compute (IaaS)  |	Ensure that Virtual Machines backup are always successful  |
|   Azure - Compute (IaaS)  |	Ensure that backup frequency is set to at least once a week for Virtual Machines  |
|   Azure - Compute (IaaS)  |	Ensure that operating system disks are encrypted for Linux Virtual Machines  |
|   Azure - Compute (IaaS)  |	Ensure that data disks are encrypted for Windows Virtual Machines  |
|   Azure - Compute (IaaS)  |	Ensure that operating system disks are encrypted for Windows Virtual Machines  |
|   Azure - Storage and Databases  |	Ensure that Advanced Threat Protection is enabled for Azure Storage  |


## **May 2019- v2.7.1**

1.  **User Experience Improvements**
    *   Availability of Release Notes to the logged in users – These will list new features, updates to existing functionality, security     policies and compliance benchmarks etc.
    *   ‘Manage Users’ a separate menu under settings. Earlier this was part of managing licensing features. This facilitates to manage      account & license users (add/update/delete).

2.  **Platform & Stability Improvements**
    *  Introducing Policy based Risk Posture – An ability for customers to understand cloud risks with a matrix view of Risk severity vs    Risk likelihood. This feature allows customers to prioritize top risks for remediations.
    *  Stability updates and enhancements to ServiceNow ticketing integrations.
    *  Various stability and bug fixes.

3.  **Policies & Benchmarks Additions/Updates**
    *  Addition of following new AWS security policies

|   **Category**            |   **Policy Title**            |
|-----------------------|---------------------------|
|   Networking  |	Ensure Classic Load Balancer with unencrypted LDAP (TCP:389) is not exposed to the public internet  |
|   Networking  |	Ensure Classic Load Balancer with service 'Prevalent known internal port' (TCP:3000) is not exposed to the public internet  |
|   Networking  |	Ensure Classic Load Balancer with service 'NetBIOS Name Service' (TCP:137) is not exposed to the public internet  |
|   Networking  |	Ensure Classic Load Balancer with service 'NetBios Datagram Service' (TCP:138) is not exposed to the public internet  |
|   Networking  |	Ensure Classic Load Balancer with service 'NetBios Session Service' (TCP:139) is not exposed to the public internet  |
|   Networking  |	Ensure Classic Load Balancer with service 'Known internal web port' (TCP:8000) is not exposed to the public internet  |
|   Networking  |	Ensure Classic Load Balancer with service 'Known internal web port' (TCP:8080) is not exposed to the public internet  |
|   Networking  |	Ensure Classic Load Balancer with service 'NetBIOS Name Service' (UDP:137) is not exposed to the public internet  |
|   Networking  |	Ensure Classic Load Balancer with service 'NetBios Datagram Service' (UDP:138) is not exposed to the public internet  |
|   Networking  |	Ensure Classic Load Balancer with service 'NetBios Session Service' (UDP:139) is not exposed to the public internet  |
|   Networking  |	Ensure Classic Load Balancer with service 'SNMP' (UDP:161) is not exposed to the public internet  |
|   Networking  |	Ensure Classic Load Balancer with HTTPS (Port:443) is not exposed to the public internet  |
|   Networking  |	Ensure Classic Load Balancer with HTTP (Port:80) is not exposed to the public internet  |
|   Networking  |	Ensure Classic Load Balancer with administrative service: SSH (TCP:22) is not exposed to the public internet  |
|   Networking  |	Ensure Classic Load Balancer with administrative service: Remote Desktop (TCP:3389) is not exposed to the public internet  |
|   Networking  |	Ensure Classic Load Balancer with unencrypted Mongo (TCP:27017) is not exposed to the public internet  |
|   Networking  |	Ensure no Classic Load Balancer allows unrestricted inbound access using Internet Control Message Protocol v6 (ICMPv6).  |
|   Networking  |	Ensure no Classic Load Balancer allows unrestricted inbound access using Internet Control Message Protocol (ICMP).  |
|   Networking  |	Ensure no Classic Load Balancer allows unrestricted inbound access to all UDP traffic.  |
|   Networking  |	Ensure no Classic Load Balancer allows unrestricted inbound access to all TCP traffic.  |
|   Networking  |	Ensure no Classic Load Balancer allows unrestricted inbound access to all traffic.  |
|   Networking  |	Ensure no Network Load Balancer allows unrestricted inbound access using Internet Control Message Protocol v6 (ICMPv6).  |
|   Networking  |	Ensure no Network Load Balancer allows unrestricted inbound access using Internet Control Message Protocol (ICMP).  |
|   Networking  |	Ensure no Network Load Balancer allows unrestricted inbound access to all UDP traffic.  |
|   Networking  |	Ensure no Network Load Balancer allows unrestricted inbound access to all TCP traffic.  |
|   Networking  |	Ensure no Network Load Balancer allows unrestricted inbound access to all traffic.  |
|   Networking  |	Ensure no Application Load Balancer allows unrestricted inbound access using Internet Control Message Protocol v6 (ICMPv6).
|   Networking  |	Ensure no Application Load Balancer allows unrestricted inbound access using Internet Control Message Protocol (ICMP).  |
|   Networking  |	Ensure no Application Load Balancer allows unrestricted inbound access to all UDP traffic.  |
|   Networking  |	Ensure no Application Load Balancer allows unrestricted inbound access to all TCP traffic.  |
|   Networking  |	Ensure no Application Load Balancer allows unrestricted inbound access to all traffic.  |
|   Networking  |	Ensure Elastic IPs for NAT gateways are allocated  |
|   Networking  |	Ensure that a specific Internet/NAT gateway is attached to a specific VPC  |
|   Networking  |	Ensure Amazon VPC endpoints are not exposed to everyone  |
|   Networking  |	Ensure AWS default Virtual Private Cloud (VPC) is not being used  |
|   Data Protection  |	Ensure S3 buckets do not allow FULL_CONTROL access to AWS authenticated users via S3 ACLs  |
|   Data Protection  |	Ensure S3 buckets do not allow READ access to AWS authenticated users through ACLs  |
|   Data Protection  |	Ensure AWS S3 buckets do not allow READ_ACP access to AWS authenticated users using ACLs  |
|   Data Protection  |	Ensure S3 buckets do not allow WRITE access to AWS authenticated users through S3 ACLs  |
|   Data Protection  |	Ensure S3 buckets do not allow WRITE_ACP access to AWS authenticated users using S3 ACLs  |
|   Data Protection  |	Ensure that Amazon S3 buckets are encrypted with customer-provided AWS KMS CMKs  |
|   Data Protection  |	Ensure that Amazon S3 buckets use Transfer Acceleration feature for faster data transfers  |

*   Addition/Updates to the following Azure security policies

|   **Category**            |   **Policy Title**            |
|-----------------------|---------------------------|
|   Networking  |	Ensure that ingress traffic to Memcached (TCP:11211) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to 'MSSQL Server' (TCP:1433) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to Oracle DB (TCP:1521) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to SSH (TCP:22) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to 'SQL Server Analysis Services' (TCP:2383) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to Oracle DB (TCP:2483) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to Mongo (TCP:27017) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to 'MySQL' (TCP:3306) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to Remote Desktop (TCP:3389) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to 'Postgres SQL' (TCP:5432) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to Cassandra OpsCenter Monitoring (TCP:61620) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to Redis (TCP:6379) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to Cassandra Internode Communication (TCP:7000) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to 'Cassandra' (TCP:7001) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to Cassandra Monitoring (TCP:7199) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to 'Known internal web port' (TCP:8000) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to 'Known internal web port' (TCP:8080) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to Cassandra OpsCenter Website (TCP:8888) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to Cassandra Client (TCP:9042) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to CiscoSecure, websm (TCP:9090) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to Cassandra Thrift (TCP:9160) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to Elastic search (TCP:9200) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to Elastic search (TCP:9300) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to Memcached (UDP:11211) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to 'NetBIOS Name Service' (UDP:137) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to 'NetBios Datagram Service' (UDP:138) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to 'NetBios Datagram Service' (UDP:139) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to 'SNMP' (UDP:161) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to Oracle DB (UDP:2483) is restricted for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to LDAP (UDP:389) is restricted for Virtual Machine  |
|   Compute  |	Ensure that ASC showing healthy state for Virtual Machine  |
|   Networking  |	Ensure that ingress traffic to management ports is restricted for Virtual Machine  |
|   Compute  |	Ensure that Log Analytics VM extension is enabled for Linux Virtual Machines  |
|   Compute  |	Ensure that Log Analytics VM extension is enabled for Windows Virtual Machines  |


## **April 2019- v2.6.1**

1.  **User Experience Improvements**
    *   Look and Feel enhancements to PDF summary reports.
    *   Enhancements to CISO dashboard for All Accounts aggregation.
    *   Search and Alphabetical ordering of cloud accounts allowing easy access to 100s of cloud accounts.

2.  **Platform & Stability Improvements**
    *   Enhancements to system performance related telemetry for backend services.
    *   Various stability and bug fixes.

3.  **Policies & Benchmarks Additions/Updates**
    *   Addition of following AWS security policies

|   **Category**            |   **Policy Title**            |
|-----------------------|---------------------------|
|   Networking  |	Ensure AWS Application Load Balancers (ALBs) are using the latest predefined security policy
|   Networking  |	Identify unused Application Load Balancers and delete them in order to reduce AWS costs
|   Networking  |	Ensure Deletion Protection feature is enabled for your AWS Application load balancers to follow security best practices
|   Auditing and Logging  |	Ensure access logging is enabled for your AWS ALBs to follow security best practices
|   Networking  |	Ensure that your Application Load Balancer (ALB) listeners are using a secure protocol such as HTTPS
|   Networking  |	Ensure that all Application Load Balancers (ALBs) available in your AWS account are associated with valid and secure security groups
|   Networking  |	Identify and remove any unused Elastic Load Balancers for cost optimization
|   Networking  |	Ensure there are valid security groups associated with your Elastic Load Balancer
|   Networking  |	Ensure Connection Draining is enabled for your AWS Classic Load Balancer
|   Auditing and Logging  |	Ensure access logging is enabled for your AWS Classic Load Balancer to follow security best practices
|   Encryption and Key Management  |	Ensure that your AWS ELBs listeners are using a secure protocol (HTTPS or SSL)
|   Encryption and Key Management  |	Ensure SSL/TLS certificates are renewed 45 days before their expiration
|   Encryption and Key Management  |	Ensure SSL/TLS certificates are renewed 30 days before their expiration
|   Encryption and Key Management  |	Ensure SSL/TLS certificates are renewed 7 days before their expiration
|   Networking  |	Ensure AWS Network Load Balancers (NLBs) are using the latest predefined security policy
|   Networking  |	Identify unused Network Load Balancers and delete them in order to reduce AWS costs
|   Networking  |	Ensure Deletion Protection feature is enabled for your AWS Network load balancers to follow security best practices
|   Auditing and Logging  |	Ensure access logging is enabled for your AWS NLBs to follow security best practices
|   Networking  |	Ensure that your AWS Network Load Balancer listeners are using a secure protocol such as TLS
|   Networking  |	Ensure that all Network Load Balancers (NLBs) available in your AWS account are associated with valid and secure security groups
|   Networking  |	Ensure Network Load Balancer with unencrypted LDAP (TCP:389) is not exposed to the public internet
|   Networking  |	Ensure Network Load Balancer with service 'Prevalent known internal port' (TCP:3000) is not exposed to the public internet
|   Networking  |	Ensure Network Load Balancer with service 'NetBIOS Name Service' (TCP:137) is not exposed to the public internet
|   Networking  |	Ensure Network Load Balancer with service 'NetBios Datagram Service' (TCP:138) is not exposed to the public internet
|   Networking  |	Ensure Network Load Balancer with service 'NetBios Session Service' (TCP:139) is not exposed to the public internet
|   Networking  |	Ensure Network Load Balancer with service 'Known internal web port' (TCP:8000) is not exposed to the public internet
|   Networking  |	Ensure Network Load Balancer with service 'Known internal web port' (TCP:8080) is not exposed to the public internet
|   Networking  |	Ensure Network Load Balancer with service 'NetBIOS Name Service' (UDP:137) is not exposed to the public internet
|   Networking  |	Ensure Network Load Balancer with service 'NetBios Datagram Service' (UDP:138) is not exposed to the public internet
|   Networking  |	Ensure Network Load Balancer with service 'NetBios Session Service' (UDP:139) is not exposed to the public internet
|   Networking  |	Ensure Network Load Balancer with service 'SNMP' (UDP:161) is not exposed to the public internet
|   Networking  |	Ensure Network Load Balancer with HTTPS (Port:443) is not exposed to the public internet
|   Networking  |	Ensure Network Load Balancer with HTTP (Port:80) is not exposed to the public internet
|   Networking  |	Ensure Network Load Balancer with administrative service: SSH (TCP:22) is not exposed to the public internet
|   Networking  |	Ensure Network Load Balancer with administrative service: Remote Desktop (TCP:3389) is not exposed to the public internet
|   Networking  |	Ensure Network Load Balancer with unencrypted Mongo (TCP:27017) is not exposed to the public internet
|   Networking  |	Ensure no security group allows unrestricted inbound access using Internet Control Message Protocol v6 (ICMPv6).
|   Networking  |	Ensure no security group allows unrestricted inbound access to all UDP traffic.
|   Networking  |	Ensure no security group allows unrestricted inbound access to all TCP traffic.
|   Networking  |	Ensure no security group allows unrestricted inbound access to all traffic.


## **April 2019- v2.5.1**

1.  **User Experience Improvements**
    *   Introducing aggregation of all security and compliance benchmarks at a License level (aka Customer/Business Unit). Initial           release for CISO dashboards displaying All Accounts (Aggregated).
    *   Enhanced navigation of dashboard Separate URLs for CISO/SOC/Assets Dashboards.
    *   Enhancements to PDF reporting with summarized trend charts.
    *   Asset dashboard released in preview for AWS and M365 cloud accounts.

2.  **Platform & Stability Improvements**
    *   Database performance optimizations with re-indexing and re-partitioning.


## **April 2019- v2.4.1**

1.  **User Experience Improvements**
    *   Enhancements to AWS Asset Dashboard

2.  **Policies & Benchmarks**
    *   Addition of following AWS security policies

|   **Category**            |   **Policy Title**            |
|-----------------------|---------------------------|
|   Networking  |	Ensure that your Application Load Balancer (ALB) listeners are using a secure protocol such as HTTPS  |
|   Networking  |	Ensure Application Load Balancer with unencrypted Mongo (TCP:27017) is not exposed to the public internet  |
|   Networking  |	Ensure Application Load Balancer with administrative service: Remote Desktop (TCP:3389) is not exposed to the public internet  |
|   Networking  |	Ensure Application Load Balancer with administrative service: SSH (TCP:22) is not exposed to the public internet  |
|   Networking  |	Ensure Application Load Balancer with HTTP (Port:80) is not exposed to the public internet  |
|   Networking  |	Ensure Application Load Balancer with HTTPS (Port:443) is not exposed to the public internet  |
|   Networking  |	Ensure Application Load Balancer with service 'SNMP' (UDP:161) is not exposed to the public internet  |
|   Networking  |	Ensure Application Load Balancer with service 'NetBios Session Service' (UDP:139) is not exposed to the public internet  |
|   Networking  |	Ensure Application Load Balancer with service 'NetBios Datagram Service' (UDP:138) is not exposed to the public internet  |
|   Networking  |	Ensure Application Load Balancer with service 'NetBIOS Name Service' (UDP:137) is not exposed to the public internet  |
|   Networking  |	Ensure Application Load Balancer with service 'Known internal web port' (TCP:8080) is not exposed to the public internet  |
|   Networking  |	Ensure Application Load Balancer with service 'Known internal web port' (TCP:8000) is not exposed to the public internet  |
|   Networking  |	Ensure Application Load Balancer with service 'NetBios Session Service' (TCP:139) is not exposed to the public internet  |
|   Networking  |	Ensure Application Load Balancer with service 'NetBios Datagram Service' (TCP:138) is not exposed to the public internet  |
|   Networking  |	Ensure Application Load Balancer with service 'NetBIOS Name Service' (TCP:137) is not exposed to the public internet  |
|   Networking  |	Ensure Application Load Balancer with service 'Prevalent known internal port' (TCP:3000) is not exposed to the public internet  |
|   Networking  |	Ensure Application Load Balancer with unencrypted LDAP (TCP:389) is not exposed to the public internet  |
|   Compute  |	Ensure Amazon EC2 Reserved Instances (RI) are renewed before expiration. (expiration less than 30 days)  |
|   Compute  |	Ensure that none of your AWS EC2 Reserved Instance purchases are pending.  |
|   Compute  |	Ensure that none of your AWS EC2 Reserved Instance purchases have been failed.  |
|   Compute  |	Ensure no EC2 security group allows inbound traffic from RFC-1918 CIDRs in order to follow AWS security best practices.  |
|   Compute  |	Use Instance Profiles/IAM Roles to appropriately grant permissions to applications running on amazon EC2 instances  |
|   Compute  |	Check for running AWS EC2 instances older than 180 days available within your AWS account.  |
|   Compute  |	Ensure Termination Protection feature is enabled for EC2 instances that are not part of ASGs.  |
|   Compute  |	Ensure that the security group(s) associated with an EC2 instance does not have an excessive number of rules defined.  |
|   Compute  |	Identify any AWS EC2 instances that have scheduled events and take action to resolve them.  |
|   Compute  |	Ensure EC2 instances are launched using the EC2-VPC platform instead of EC2-Classic outdated platform.  |
|   Compute  |	Ensure every EC2 instance is launched inside an Auto Scaling Group (ASG) in order to follow AWS reliability and security best practices.  |
|   Compute  |	Ensure no backend EC2 instances are running in public subnets.  |
|   Compute  |	Ensure that detailed monitoring is enabled for the AWS EC2 instances that you need to monitor closely.  |
|   Compute  |	Ensure default EC2 security groups are not in use in order to follow AWS security best practices.  |
|   Compute  |	Ensure an IAM Role for Amazon EC2 is created.  |
|   Compute  |	Ensure that EC2 instances have no Elastic or Public IP addresses associated.  |
|   Compute  |	Ensure all AWS EC2 instances are launched from approved AMIs.  |
|   Compute  |	Ensure your Amazon Machine Images (AMIs) are not accessible to all AWS accounts.  |
|   Compute  |	Identify and remove any unused Amazon Machine Images (AMIs) to optimize AWS costs.  |
|   Compute  |	Check for any AMIs older than 180 days available within your AWS account.  |
|   Networking  |	Ensure your AWS account does not have an excessive number of security groups per region.  |
|   Networking  |	Ensure your EC2 security groups do not have an excessive number of rules defined.  |
|   Networking  |	Ensure no AWS EC2 security group allows unrestricted inbound access to TCP port 445 and (CIFS).  |
|   Networking  |	Ensure no AWS EC2 security group allows unrestricted inbound access to TCP and UDP port 53 (DNS).  |
|   Networking  |	Ensure no EC2 security group allows unrestricted inbound access to TCP ports 20 and 21 (FTP).  |
|   Networking  |	Ensure no security group allows unrestricted inbound access using Internet Control Message Protocol (ICMP).  |
|   Networking  |	Ensure no security group allows unrestricted ingress access to MongoDB port 27017  |
|   Networking  |	Ensure no security group allows unrestricted inbound access to TCP port 1433 (MSSQL).  |
|   Networking  |	Ensure no security group allows unrestricted inbound access to TCP port 3306 (MySQL).  |
|   Networking  |	Ensure no AWS EC2 security group allows unrestricted inbound access to TCP port 139 and UDP ports 137 and 138 (NetBIOS).  |
|   Networking  |	Ensure no security group allows unrestricted inbound access to TCP port 1521 (Oracle Database).  |
|   Networking  |	Ensure no security group allows unrestricted inbound access to TCP port 5432 (PostgreSQL Database).  |
|   Networking  |	Ensure no security group allows unrestricted inbound access to TCP port 135 (RPC).  |
|   Networking  |	Ensure no AWS EC2 security group allows unrestricted inbound access to TCP port 25 (SMTP).  |
|   Networking  |	Ensure no AWS EC2 security group allows unrestricted inbound access to TCP port 23 (Telnet).  |
|   Networking  |	Ensure no security group allows unrestricted inbound access to TCP port 80 (HTTP).  |
|   Networking  |	Ensure no security group allows unrestricted inbound access to TCP port 443 (HTTPS).  |
|   Networking  |	Ensure no security group allows unrestricted inbound access to TCP port 9200 (Elasticsearch).  |
|   Networking  |	Ensure AWS EC2 security group rules have descriptive text for organization and documentation.  |
|   Networking  |	Ensure no security group allows unrestricted inbound access to TCP port 110 (Pop3 Database).  |
|   Compute  |	Ensure that your existing AMIs are encrypted to meet security and compliance requirements  |

*   Addition of new Azure security policies

|   **Category**            |   **Policy Title**            |
|-----------------------|---------------------------|
|   Kubernetes & Containers |	Ensure that Diagnostics logs must be enabled with a retention period of at least 365 days for Azure Kubernetes Service |
|   Kubernetes & Containers |	Ensure Azure Kubernetes Service clusters are always running with latest Kubernetes versions |
|   Kubernetes & Containers |	Ensure that latest system updates are applied to all Azure Kubernetes Cluster nodes |
|   Storage and Databases |	Ensure that 'Auditing' Retention is 'greater than 90 days' for SQL Database |
|   Storage and Databases |	Ensure the 'Allow access to Azure services' flag is disabled for SQL Server |
|   Networking |	Ensure that ingress traffic to Memcached (TCP:11211) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to 'MSSQL Server' (TCP:1433) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to Oracle DB (TCP:1521) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to SSH (TCP:22) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to 'SQL Server Analysis Services' (TCP:2383) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to Oracle DB (TCP:2483) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to Mongo (TCP:27017) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to 'MySQL' (TCP:3306) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to Remote Desktop (TCP:3389) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to 'Postgres SQL' (TCP:5432) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to Cassandra OpsCenter Monitoring (TCP:61620) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to Redis (TCP:6379) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to Cassandra Internode Communication (TCP:7000) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to 'Cassandra' (TCP:7001) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to Cassandra Monitoring (TCP:7199) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to 'Known internal web port' (TCP:8000) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to 'Known internal web port' (TCP:8080) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to Cassandra OpsCenter Website (TCP:8888) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to Cassandra Client (TCP:9042) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to CiscoSecure,websm (TCP:9090) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to Cassandra Thrift (TCP:9160) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to Elastic search (TCP:9200) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to Elastic search (TCP:9300) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to Memcached (UDP:11211) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to 'NetBIOS Name Service' (UDP:137) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to 'NetBios Datagram Service' (UDP:138) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to 'NetBios Datagram Service' (UDP:139) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to 'SNMP' (UDP:161) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to Oracle DB (UDP:2483) is restricted for Virtual Machine |
|   Networking |	Ensure that ingress traffic to LDAP (UDP:389) is restricted for Virtual Machine |
|   Networking |	Ensure that Virtual Network Gateway(VPN/ExpressRoute) access is restricted for Virtual Network |
|   Networking |	Ensure that less than 3 Public IP's (i.e. NIC's with Public IP) are used for Virtual Network |


## **March 2019- v2.3.1**

1.  **Policies & Benchmarks Additions/Updates**
    *   Updates of mappings for “ISO/IEC 27001 Information Security Management Standards” with existing Azure, AWS and M365 related controls


## **March 2019- v2.2.1**

1.  **User Experience Improvements**
    *   New option for download PDF summary report is now available, depicting a high-level summary of your current compliance status        with respect to specific benchmark or standard.
    *   Account management menu is now easily accessible on every account page.
    *   Added support for multiple version benchmarks.

2.  **Platform & Stability Improvements**
    *  Added option for on demand data collection (available as a Re-Scan option for Cloud accounts).
    *  Daylight Savings Bug Patches.

3.  **Policies & Benchmarks Additions/Updates**
    *   [ CIS Microsoft Azure Foundations v1.1.0 ](https://www.cisecurity.org/partner/cloudneeti/) is now available
    *   CIS certified Cloudneeti for CIS Azure Foundations Benchmark v1.1 [ (https://www.cisecurity.org/partner/cloudneeti/)    ](https://www.cisecurity.org/partner/cloudneeti/)
    *   CIS certified Cloudneeti for Amazon Web Services Foundations Benchmark v1.2.0  [    (https://www.cisecurity.org/partner/cloudneeti/)    ](https://www.cisecurity.org/partner/cloudneeti/)
    *   Addition of new Azure security policies

|   **Category**            |   **Policy Title**            |
|-----------------------|---------------------------|
|   Kubernetes & Containers |	Ensure Azure Active Directory RBAC is enabled for Azure Kubernetes Services (AKS) |
|   Kubernetes & Containers |	Ensure that AAD is enabled in Kubernetes Service |
|   Kubernetes & Containers |	Ensure that Monitoring is enabled for Azure Kubernetes Service |