Platform Architecture
---------------------

The Cloudneeti application is a multi-tenant software as a service (SaaS)
product hosted on Microsoft Azure within Cloudneeti’s Azure subscription. The
product is designed grounds up using highly scalable three-tier architecture
with web tier, serverless microservices tier and data and analytics tier with
NoSQL database.

Meta-data collection for AWS happens using serverless Lambda functions running
within Cloudneeti’s AWS account. Meta-data collection for Azure is part of
microservices tier and runs within Cloudneeti’s Azure subscription.

 ![Platform Architecture](.././images/introduction/PlatformArchitecture.png#thumbnail)

 The Cloudneeti application enables data security for all data types imported, stored and exported during data collection, data analysis, remediations, single sign on and integrations. Data protection, high-availability and resiliency is considered from the very outset. All traffic to and from Cloudneeti is always encrypted and access controlled. Cloudneeti uses TLS1.2 for data-in-transit encryption and AES 256-bit encryption for data at rest. Architecture includes Single Sign On with the customer’s preferred ID provider.

 Data Flow
---------

The data flow diagram outlines the data exchange between the Cloudneeti
application and external systems.

 ![Data Flow](.././images/introduction/DataFlow.png#thumbnail)

Access Permissions
------------------

Cloudneeti follows CSP guidelines for third-party SaaS application integrations.

**AWS:** The Cloudneeti application uses AWS External ID for AWS to access the
meta-data within a specific AWS account. The AWS External ID is assigned a
Security Audit role with specific Role-based Access Control (RBAC) permissions
for accessing the management plane. Cloud connector, located in Cloudneeti’s AWS
account, is communicating with the management plane using AWS Trusted ID
credentials.

**Azure:** The Cloudneeti application uses App Registration within Microsoft AD
to access the meta-data within a specific Azure subscription. The App
Registration is granted specific Role-based Access Control (RBAC) permissions
for accessing the management plane. Cloud connector, located in Cloudneeti’s
Azure subscription, is communicating with the management plane using App
Registration credentials.

**Office 365:** The Cloudneeti application uses App Registration within Office
365 AD Tenant to access the meta-data. The App Registration is granted specific
Role-based Access Control (RBAC) permissions for accessing the management plane.
Cloud connector, located in Cloudneeti’s Azure subscription, is communicating
with the management plane using App Registration credentials. For the Office 365
agent to collect the data, the agent requires Office 365 admin user ID and
password (MFA with App Password). Cloudneeti connects to the agent using
separate secure ID and credentials.


 ![Access Permissions](.././images/introduction/AzureAccessPermission.png#thumbnail)

Configuration Metadata
----------------------

The Cloudneeti application collects cloud resource configurations metadata to
compare them with cloud security best practices (security policies). The
Cloudneeti application doesn’t collect any application or user data from the
respective CSPs.

The table below provides a high-level overview of the metadata collected.

| **CSP**                                   | **Amazon Web Services** | **Microsoft Azure**   | **Microsoft Office 365**          |
|-------------------------------------------|-------------------------|-----------------------|-----------------------------------|
| Cloud accounts                            | AWS Billing ID     <br>  	AWS ID / AWS External ID roles    | Azure subscription ID <br>	Azure AD Tenant (ID, domain name)<br>	Azure App Registration (encrypted)| Azure AD Tenant (ID, domain name) <br> 	Azure App Registration (encrypted)|
| Cloud Resource Configurations (meta-data)  | Resource name,id,Tags <br> Tags<br>  Location<br>  [AWS Resource and Property Types](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)<br>[AWS Resource attributes](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-product-attribute-reference.html)| Resource name,id <br>Resource groups<br>Location<br>[Azure Resource Providers and Types](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-supported-services)<br>Azure Resource Manager (ARM) [Resources meta-data](https://docs.microsoft.com/en-us/azure/templates/)| Azure AD Users (summary count)    |



Data Encryption
---------------

The data within Cloudneeti application is well protected using data encryption:

-   **Data encryption at rest:** The customer’s data is stored encrypted.
    Various cloud service components and encryption schemes (e.g. key vaults,
    AES symmetric key algorithms, higher-level cipher suites) are used. All
    backed up data is stored encrypted, and RBAC permissions are applied to the
    recovery team.

-   **Data encryption in-transit**: The TLS 1.2 encryption or higher is applied
    for encrypting data during transmission.

Data Access
-----------

The cloud account data are owned by the customer. Cloudneeti support team
requires encryption keys with explicit permission from the customer to view the
data. The following access control mechanisms are implemented:

-   **Customer lockbox**: Lockbox is a feature that ensures the Cloudneeti
    support team cannot access customer data to perform a service operation
    without explicit approval from the customer.

-   **Data classification**: A ‘Restricted’ data classification is applied to
    the metadata in the data store.

-   **Data access**: The production support team has access to the management
    plane at the data store level. They won’t have access to decrypt the
    configuration data unless a support request makes it necessary. Customers
    have to explicitly grant access to the support team to retrieve the data for
    a time-boxed period of time required for resolving a ticket.

-   **Access control**: All access requests are managed through Privileged
    Identity Management (PIM).

-   **Access logging**: The access transactions to application and data in the
    data store are stored and monitored in operation logs.

Data Privacy
------------

Cloudneeti application does not store any cloud user information. It only
collects user counts and IAM configurations. The only personal identifiable
information (PII) stored in Cloudneeti application is Name and Email ID of the
Cloudneeti application users.

| **CSP**                      | **Amazon Web Services**            | **Microsoft Azure**                                         | **Microsoft Office 365**                                    |
|------------------------------|------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|
| Cloud Users                  | IAM user counts and configurations | Counts (Configuration information processed but not stored) | Counts (Configuration information processed but not stored) |
| Cloudneeti Application Users | Name <br> Email| Name <br> Email    | Name <br> Email|


The users provide an explicit consent for storing their personal data in
Cloudneeti datastore. This consent request appears when the user is signing in
to Cloudneeti application for the first time (see Sign In and Sign Out).

SOC 2 Type 1 Attestation
------------------------

Cloudneeti’s data protection and operational processes were assessed by a
third-party auditor and Cloudneeti received SOC 2 Type 1 attestation. The SOC 2
Type 1 report can be provided on request.

 ![SOC 2 Type 1 Attestation](.././images/introduction/SOC2.png#thumbnail)

