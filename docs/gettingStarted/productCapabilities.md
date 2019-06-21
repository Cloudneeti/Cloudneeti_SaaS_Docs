# 1	Cloudneeti Product
## 1.1	Software-as-a-Service (SaaS)
Cloud technologies enable a fast-paced digital transformation. However, businesses are struggling to protect their public cloud workloads, which impedes their digital transformation. 

1.	Not able to prevent data breaches:
    a.	Nearly all successful attacks on cloud services are the result of cloud misconfiguration or mismanagement
    b.	Increased complexity due to frequent release cycles, multi-cloud and multi-workloads (300+ services on Azure and AWS)
2.	Not able to prove security:
    a.	Traditional tools don’t work for the public cloud (84% of organizations surveyed) to monitor, baseline, and adjust security posture
    b.	Not able to prove compliance to internal/external auditors

Cloudneeti is Gartner-recognized and CIS-certified. Our product provides:
1.	Visibility into misconfigurations, compare against the defined standard (security baseline) to identify deviations
2.	Enforced remediation of discovered deviations via auto and guided remediations
3.	Governance with abilities to manage exceptions and adjust posture, 
4.	Reporting for 11+ compliance frameworks, deviation notifications and various data-feed integrations with IT and compliance oversight tooling 

 ![cloudneetiDashboard](.././images/productCapabilities/cloudneetiDashboard.png#thumbnail)

The Cloudneeti product is a multi-tenant software-as-a-service (SaaS) application. Cloudneeti application leverages cloud-native APIs to continuously discover customer workloads and monitor their configurations. 

## 1.2	Cloudneeti Application
The Cloudneeti application is hosted on Azure and consists of a data collection service, data processing service, data visualization service, and external IT systems integrations. 

•	The data collection service is granted read-only access to the customer’s cloud accounts and collects configuration information of cloud workloads (resources) within the cloud account. 

•	The data processing service compares this information against cloud security best practices and compliance controls. 

•	The data visualization service provides dashboards and reports about the comparison of actual configuration to cloud security best practices.

•	The IT systems integration service enables data sharing with external tools via API integration.

## 1.3	Customer Data Protection 
Cloudneeti customers retain control and ownership of their own data. 

The collected metadata about configurations of customer cloud accounts (Azure subscriptions, Office 365 Accounts or AWS Accounts) is well-protected within the Cloudneeti data store. The following information security policies are implemented by Cloudneeti:

•	**Data encryption at rest**: The customer’s data is always stored encrypted. Various cloud service components and encryption schemes (e.g. key vaults, AES symmetric key algorithms, higher-level cipher suites) are used.

•	**Data encryption in-transit**: TLS 2.0 encryption or higher is applied for encrypting data during transmission.

•	**Data access**: The production support team has access to the management plane at the data store level. They won’t have access to decrypt the configuration data unless a support request makes it necessary. Customers have to explicitly grant access to the support team to retrieve the data for a time-boxed period of time required for resolving a ticket.

•	**Customer lockbox**: Lockbox is a feature that ensures the Cloudneeti support team cannot access customer data to perform a service operation without explicit approval. 

•	**Data classification**: A data classification of ‘Restricted’ is applied to the data store.

•	**Audit logging**: All access requests are monitored through Privileged Identity Management (PIM) as well as operational logs.

•	**Data erasure**: Expiry/termination of a contract will result in automatic clean-up of all data collected.

•	**Data backup**: All backed up data is stored encrypted, and RBAC permissions are applied for the recovery team.

•	**Data retention**: Data retention for active contracts is applied at the contract provisioning level. Typically, this will be 30-90 days.
