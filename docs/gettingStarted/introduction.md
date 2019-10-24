# Getting Started

Introduction
------------

### Product

Cloudneeti is a SaaS product (“Cloud Service”) for security and compliance
assurance. The Cloud Service has out-of-the-box definitions of security policies
and mapping of these policies to various industry compliance frameworks, laws
and regulations. The Cloud Service will collect cloud workload configuration
information for onboarded cloud accounts and provide dashboards and reports
comparing these actual cloud workload configurations against cloud security best
practices, compliance frameworks, laws and regulations.

The Cloud Service enables management of security policies and user and cloud
account administration; provides remediation guidance and allows
auto-remediation for a subset of security policies; allows integrations with
ticketing systems and data feeds; and sends notifications.

Customers will nominate users for the license admin role who will have the
ability to access information across all onboarded cloud accounts, configure the
product and add additional users who will have access only to dashboards and
reports.

You can find additional information about the product, solutions and customers
on Cloudneeti [website](https://www.cloudneeti.com/).

### Subscribe

Customers can request a free trial or a paid subscription License. This section
also outlines the steps to determine the number of resources in each Cloud
Account. This information will be used to estimate the product Subscription Fee.

[Subscribe](../subscribe/)

### System Architecture

Please review the terminology we use in this guide, such as cloud accounts,
resources, Cloudneeti application License and Cloud Account, Onboarding and
other. This will help you understand the meaning of each term used in this guide
for configuring and using the Cloudneeti product.

[System Architecture](../systemArchitecture/)

### Sign in and Sign Out

The License Admin can sign in to the Cloudneeti application and add additional
users with admin or reader roles.

Please follow the sign-in steps to access the Cloudneeti application using your
single sign on (SSO) credentials. This section also describes the full sign out
steps.

[Sign in and Sign out](../signInAndSignOut/)

Onboarding Guide
----------------

The Cloudneeti application integrates with CSPs for data collection over APIs in
read only mode. Cloudneeti has connectors to Microsoft Azure, Amazon Web
Services (AWS), and Office 365. Google Cloud Platform (GCP) is on product
roadmap. Licenses are activated by License Admin during onboarding of the first
Cloud Account to a License.

Please follow the onboarding steps to connect Cloudneeti application to your
cloud infrastructure.

[Azure Subscriptions](../../onboardingGuide/azureSubscriptions/)

[AWS Accounts](../../onboardingGuide/amazonWebServiceAccounts/)

[Office 365 Subscriptions](../../onboardingGuide/onboardingOffice365Subscription/)

User Guide
----------

Sign in to the Cloudneeti application to review dashboards, views and reports
about your security posture. You can see your aggregated compliance score for
each benchmark, compliance statistics for each security policy and drill down
into the compliance status of each individual resource where this security
policy is applicable.

[UI Navigation](../../userGuide/userGuideUINavigation/)

[Dashboards](../../userGuide/dashboards/)

[Security Policies](../../userGuide/securityPolicies/)

[Compliance Benchmarks](../../userGuide/complianceBenchmarks/)

[Reports](../../userGuide/reports/)

Administrator Guide
-------------------

License Admin and Account Admin can change Settings of the Cloudneeti
application. This includes management of users, configuration of integrations
with other systems, and management of security policies.

[Manage Accounts](../../administratorGuide/manageAccounts/)

[Manage Licenses](../../administratorGuide/manageLicenses/)

[Manage Users](../../administratorGuide/manageUsers/)

[Audit Log](../../administratorGuide/auditLog/)
