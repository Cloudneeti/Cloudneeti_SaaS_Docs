Overview
--------

The Cloudneeti application provides Single Sign On (SSO) for user
authentication, integrates with cloud service providers (CSPs) for meta-data
collection and remediations, enables integrations with customer’s IT systems.

 ![Overview](.././images/introduction/DeploymentArchitecture.png#thumbnail)

 **Single Sign On:** Users of the Cloudneeti application sign in with their
corporate credentials using Single Sign On (SSO). The product integrates with
customer’s identity providers like Microsoft Azure AD, Office 365 Tenant AD and
Microsoft Accounts such as Outlook, Live and Hotmail.

**Cloud Collectors:** The Cloudneeti application connects over APIs to the
management plane of different CSPs to collect actual cloud resource
configurations (meta-data). For Office 365 an agent is deployed to collect a
subset of configurations.

**Remediations:** The Cloudneeti application provides remediation guidance and
enables auto-remediation. For AWS accounts, a remediation agent is installed in
the customer’s AWS account. For Azure subscriptions, the Cloudneeti application
leverages the Azure Policy engine.

**Integrations:** Cloudneeti application integrates with customer’s IT Systems
to enable closed loop remediation process. The product enables data feeds for
reporting and audit logs, integrates with ticketing systems and CI/CD
automation.

Cloud Connectors
----------------

The Cloudneeti application integrates with cloud service providers (CSP) like
Microsoft Azure, Amazon Web Services (AWS), and Office 365. Google Cloud Product
(GCP) is on product roadmap. Cloud resource configurations are collected using
API calls to the management plane of the CSP. Configuration information for
Office 365 is collected using API calls and an Office 365 agent typically
installed inside customer’s Azure subscription.

 ![Cloud Connectors](.././images/introduction/CloudConnectors.png#thumbnail)

 AWS Connector is implemented using AWS Lambda functions running in Cloudneeti’s
AWS account. Azure Connector and Office 365 Connector are implemented using
Azure Functions running in Cloudneeti’s Azure subscription. Office 365 Agent is
a PowerShell script and is typically deployed in customer’s Azure subscription.

Remediation
-----------

Cloudneeti product offers auto-remediations and remediation guidance for AWS and
Azure resources. Remediation guidance is provided in form of documented steps
required to configure cloud resource in a secure way, whereas auto-remediation
executes the required steps automatically. To execute auto-remediation, a
remediation agent is installed within the AWS cloud account. Cloudneeti
application leverages Azure Policy for cloud native enforcement of security
policies on Microsoft Azure. Customers can turn on or off auto-remediation for
specific security policies.

 ![Remediation](.././images/introduction/Remediation.png#thumbnail)

 Integrations
------------

Cloudneeti application provides reporting and audit log information in form of
data feeds to customers storage account or a NoSQL database. Cloudneeti
application integrates with ticketing (incident management) systems and CI/CD
tools for DevOps automation.

 ![Integrations](.././images/introduction/Integrations.png#thumbnail)

 Single Sign On
--------------

The Cloudneeti application doesn’t store user password information. It enables
Single Sign On using SAML based token authentication with Microsoft Azure AD,
Office 365 AD Tenant and Microsoft Accounts (Outlook, Live, Hotmail).


 ![Single Sign On](.././images/introduction/SingleSignOn.png#thumbnail)

 