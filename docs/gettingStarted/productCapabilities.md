#  Cloudneeti Product
## 1.1	Software-as-a-Service (SaaS)

The Cloudneeti product is a multi-tenant software-as-a-service (SaaS) application. Cloudneeti application leverages cloud-native APIs to continuously discover customer workloads and monitor their configurations. 

A private SaaS version is available on request, especially for customers with highly regulated workload requirements. Please talk to our Sales team for more information.

## 1.2	Cloudneeti Platform
The Cloudneeti platform is hosted on Microsoft Azure and Amazon Web Services (AWS). It consists of a data collection service, data processing service, data visualization service, and external IT systems integrations. 

The product is designed with in-built security controls, site-reliability engineering and multi-region deployment making it suitable for world-class software-as-a-service. 
Side-by-side (Blue/Green) versioned deployment models allow for high-availability (>99.9%) with frequent and smooth software upgrades.

![](.././images/productCapabilities/SaaS_Product.png#thumbnail)

**Agentless Onboarding:** 
Many initial products coming from the vulnerability management domain have been relying on proprietary agents for data collection, mostly within VM on premises or on IaaS. This model doesn’t fit for PaaS, Serverless and most other cloud native workloads. 
Cloudneeti from day one focused on API-based data collection and uses scripts or agents only on an exception basis (currently for Office365 where APIs are not provided). APIs allow quick onboarding of new customers and new cloud accounts, and they don’t require upgrades or maintenance efforts on the customer side (product vendor is responsible for maintaining APIs’ compatibility with the cloud provider). This is why a Customer can onboard their cloud accounts to Cloudneeti and start using it within minutes.

**Scalable Architecture:** 
Due to its serverless and NoSQL database architecture, Cloudneeti platform is infinitely scalable and can support millions of customer workloads. Data retrieval for Azure and AWS happens using serverless functions of the respective cloud platforms. Collected data are stored in a global NoSQL database optimized for global writes and millisecond reads.

•	The data collection service is granted read-only access to the customer’s cloud accounts and collects configuration information of cloud workloads (resources) within the cloud account. 

•	The data processing service compares this information against cloud security best practices and compliance controls. 

•	The data visualization service provides dashboards and reports about the comparison of actual configuration to cloud security best practices.

•	The IT systems integration service enables data sharing with external tools via API integration.

## 1.3 Product Features
### Administration: 
The products enable user and cloud account administration. Cloudneeti offers two levels of aggregation of cloud account information at an account and at a license level (group of cloud accounts). The product supports multiple licenses to be assigned under one contract, to enable multiple business-units and organizations within a company to operate independently. 

### Audit Logs: 
As a security product, it requires proper governance of all administrator and user actions. All user activities are logged and are available for audit purposes.

### Monitoring: 
Monitoring security posture configurations is the core of the product. Cloudneeti provides customizations in terms of policy selection at a license and account level, where selected policies can be disabled. Cloudneeti supports the addition of new security policies (best practices) using the method of policy development factory with a two-week SLA for a medium level of complexity. Cloudneeti has internal compliance controls to a security policies mapping editor that will soon be available for customer product administrators.

### Remediations: 
While discovering deviations from a set baseline is important for visibility, it is equally important to enforce compliance with a closed loop remediation process. Cloudneeti provides assessment procedures and remediation guidance for every security policy. Auto-remediations are not possible for all security policies but are a good fit for several categories of remediations such as Identity & Management controls, Core Networking, Logging, Auditing with low impact to application experience. The third category is delegated remediation where Cloudneeti is logging a ticket in a ticketing tool or SIEM product that can be assigned to a proper engineer for remediation action. Preventative policies are a set of policies that are usually enabled at the cloud accounts (CSPs) that prevent/forbid certain configurations as general guardrails.

### Integrations: 
Integration of this product into application deployment and security monitoring processes is essential for closed loop assurance. Cloudneeti has the most thought out integrations with DevOps and CloudOps organizations where secure configurations should be implemented (left-shift). Security monitoring in the production environment integrates with SOC to discover any unexpected deviations from the set baseline.

## 1.4	Customer Data Protection 
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
