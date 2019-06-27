# Administration

The products enable user and cloud account administration. Cloudneeti offers two levels of aggregation of cloud account information at an account and at a license level (group of cloud accounts). The product supports multiple licenses to be assigned under one contract, to enable multiple business-units and organizations within a company to operate independently.

## 1. Cloud Account Onboarding

Cloudneeti application can integrate with multiple cloud accounts (Azure subscriptions) associated with a single or multiple Azure Active Directory (AD) tenants. The term “cloud account” is used as a standardized name referring to a single Azure subscription, Office 365 subscription, AWS account, or GCP project. 

Please follow links for details:

[1. Microsoft Azure subscription](../azureSubscriptions/)

[2. Amazon Web Services (AWS) account](../amazonWebServiceAccounts/)

[3. Office 365 cloud account](../office365Subscriptions/)


## 2. Manage Users
Cloudneeti supports “administrator” and “reader” roles under a License and under specific Accounts. In other terms, a Cloudneeti application user can be a License Administrator or License Reader, Account Administrator or Account Reader. Account Administrator and Reader have access only to information about specific cloud accounts (subscriptions) onboarded to Cloudneeti accounts. License Administrator and Reader will have access to information about all Cloudneeti accounts under those Licenses.

Please follow links for details:

[License Users](../licenseUsers/)

[Cloud Account Users]../cloudAccountUsers/)

## 3. Manage Remediations
While discovering deviations from a set baseline is important for visibility, it is equally important to enforce compliance with a closed loop remediation process. Cloudneeti provides assessment procedures and remediation guidance for every security policy. Auto-remediations are not possible for all security policies but are a good fit for several categories of remediations such as Identity & Management controls, Core Networking, Logging, Auditing with low impact to application experience. The third category is delegated remediation where Cloudneeti is logging a ticket in a ticketing tool or SIEM product that can be assigned to a proper engineer for remediation action. Preventative policies are a set of policies that are usually enabled at the cloud accounts (CSPs) that prevent/forbid certain configurations as general guardrails.

Please follow link for details:

[For Azure Policies ](../forAzurePolicies/)







