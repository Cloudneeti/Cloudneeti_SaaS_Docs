Overview
--------

The Cloudneeti application has the following product features:

-   **Administration** – Managing users, Licenses and Cloud accounts

-   **Meta-data Collection** – Cloud Connectors communicating with the CSP,
    gathering Assets Inventory and Configurations of cloud resources.

-   **Visibility** – Access to Security Posture, Compliance Posture and Risk
    Posture dashboards, views and reports.

-   **Governance** – Out of the box definitions of standard Security Policies,
    Compliance Frameworks, Risk impact and likelihood. This includes ability to
    do policy exceptions and prioritize fixes using risk-based prioritizations.

-   **Enforcement** – Providing Remediation Guidance, enabling
    Auto-Remediations, Integrations with customer’s IT systems to log Tickets,
    provide data feeds and send notifications.


![Overview](.././images/introduction/ProductFeatures.png#thumbnail_1)

Licenses
--------

Use of Cloudneeti application starts when a customer subscribes to Cloudneeti
SaaS product and is issued a License. One customer can have one or multiple
Licenses. Multiple Licenses may be required when customer’s business is a
portfolio of different business units and security assurance should be
segregated by business unit. With multiple Licenses, a customer can manage
security and compliance for each business unit individually.

![Licenses](.././images/introduction/Licenses.png#thumbnail_1)

Cloud Accounts
--------------

Under a License, a customer can create one or multiple Cloud Accounts. Each
Cloud Account serves as a representation of an AWS account, Azure or Office 365
subscription. “Onboarding cloud accounts” means integrating Cloudneeti
application with the cloud service provider (CSP) for cloud infrastructure
configurations metadata collection. Security posture analysis happens primarily
at a Cloud Account level.

![Cloud Accounts](.././images/introduction/CloudAccounts.png#thumbnail_1)

User Roles
----------

The Cloudneeti application supports Admin (administrator) and Reader user roles.
A License Admin role is assigned to the primary user of Cloudneeti application.
License Admin has access to dashboards, views and reports and can configure the
Cloudneeti application. A License Reader can only access dashboards, views and
reports.

![User Roles](.././images/introduction/UserRoles.png#thumbnail_1)

Access Permissions
------------------

License Admins and License Readers have access to all Cloud Accounts under a
specific License or multiple Licenses. Account users are given selective access
to specific Cloud Accounts under one or multiple Licenses.

In the example below, License User has access to all Cloud Accounts under
License 1. Account User has access to Cloud Account 2 under License 1 and Cloud
Account 4 under License 2.

![Access Permissions](.././images/introduction/AccessPermission.png#thumbnail_1)

Assets Inventory
----------------

As part of meta-data collection, during each scan, the Cloudneeti application
retrieves the Asset Inventory information for each Cloud Account and stores
these configurations in the data store. Assets Inventory includes Cloud
Connector (AWS, Azure, Office 365), Cloud Account, Resource Group for Azure and
Tags for AWS, Resource Name and Resource Configurations (meta-data).

![Assets Inventory](.././images/introduction/AccessInventory.png#thumbnail_1)

Security Posture
----------------

**Resource Status:** The Cloudneeti application compares these actual Resource
configurations against cloud security best practices (security policies) and
determines security policy status “Pass” or “Fail” at a Resource level. “Pass”
status means the Resource is compliant with the policy. “Fail” status means the
Resource is not compliant with the policy.

**Security Policy Status:** Security Policy Status is determined based on the
number of compliant resources. The policy is assigned a “Pass”,  “Pass(O)”, “Warn”, “Fail”, "Prerequisite", "Manual" or “No resources” status based on Resource Status for relevant to this cloud policy
resources:

-   “Pass” status is assigned when configurations of all resources have “Pass”
    status.

-   “Pass(O)” status is assigned when user overrides the securty policy status.

-   “Warn” status is assigned to a security policy when configurations of some
    resources have “Pass” status and the other resources have “Fail” status.

-   "Manual" status is assigned to a security policy when automation is not available. User can      override the policy status to Pass/NA/Fail.

-   “Fail” status is assigned to a security policy when all Resources have
    “Fail” status.

-   “No resources” status is assigned to a security policy when onboarded cloud
    accounts don’t have any relevant resources for this security policy.

-   "Prerequisite" is a status assigned to a security policy, indicates that the Customer would need to take additional actions to setup permissions/roles/enablement of services on the respective cloud service provider (Azure, AWS, Office365 etc).

-   "Excluded" status is assigned to a security policy when a security policy is excluded globally or at the cloud account level.


**Compliance Percentage:** Compliance Percentage is an aggregated percentage of
fully compliant security policies (all resources under this security policy are
compliant).

![Security Posture](.././images/introduction/SecurityPosture1.png#thumbnail_1)

Security Posture is displayed in the Cloudneeti application as views. A view shows Categories and category level number of Polices Pass/Total. Under each Category, a list of Security Policies is displayed with Security Policy Status and number of Resources Pass/Total.

![Security Posture](.././images/introduction/SecurityPosture2.png#thumbnail_1)

% Compliance and Policy Compliance Trends are also available within the view. 

![Security Posture](.././images/introduction/SecurityPosture3.png#thumbnail_1)

Compliance Posture
------------------

Cloudneeti application supports out-of-the-box multiple compliance frameworks.
Security policies are mapped to compliance controls for each compliance
framework, one or more security policies per compliance control.

**Resource Status:** The Cloudneeti application compares these actual Resource
configurations against cloud security best practices (security policies) and
determines security policy status “Pass” or “Fail” at a Resource level. “Pass”
status means the Resource is compliant with the policy. “Fail” status means the
Resource is not compliant with the policy.

**Security Policy Status:** Security Policy Status is determined based on the
number of compliant resources. The policy is assigned a “Pass” (Pass + Pass(O)), “Warn”, “Fail”, "Prerequisite", "Manual" or “No resources” status based on Resource Status for relevant to this cloud policy
resources.

**Compliance Percentage:** Compliance % is an aggregated percentage of fully
compliant security policies (all resources under this security policy are
compliant). Fully complaint security policies includes status Pass and Pass(O).

![Compliance Posture](.././images/introduction/CompliancePosture.png#thumbnail_1)

An aggregated Compliance % per Compliance Framework is displayed across multiple compliance frameworks in the compliance dashboard. It is calculated as a share of fully compliant cloud security policies out of the total number of security policies with data. 

![Compliance Posture](.././images/introduction/ComplianceDashboard.png#thumbnail_1)

Risk Posture
------------

Cloudneeti implemented risk-based prioritization matrix using the ISO 27005
standard. The risk matrix is created by automatically categorizing each security
policy for risk impact and risk likelihood. Risk impact can be “Very Low”,
“Low”, “Moderate”, “High” and “Critical”. Risk likelihood can be “Not Likely”,
“Low”, “Moderate”, “High” and “Certain”. Risk impact is preset for each
security policy. Risk likelihood is calculated each time based on multiple
metrics using machine learning algorithms.

![Risk Posture](.././images/introduction/RiskPosture1.png#thumbnail_1)

Risk matrix has X-axis and Y-axis showing the number of security policies in
each X / Y segment. Accordingly, Security Policies with high risk impact and
high-risk likelihood constitute a set of Security Policies with severity “High”.

Cloudneeti’s risk impact and risk likelihood categorization is based the
following inputs:

-   Common reasons of security breaches over the last several years derived from
    publicly available information disclosed by businesses

-   Prioritization of cloud security best practices provided by CSPs like
    Microsoft Azure, AWS, Office 365 etc.

-   Inputs from Auditors and Risk Advisors across various project over the last
    few years

-   Customer feedback on their experience with certain security controls.

Cloudneeti is continuously optimizing its Machine Learning algorithms to deliver
a high accuracy risk analytics.

![Risk Posture](.././images/introduction/RiskPosture2.png#thumbnail_1)

### Risk Impact

Risk Impact is often defined as the consequences, or effects of a certain risk
event happening, as related to a Software Application or an Organization. The
impact of risk events can be defined in both qualitative and quantitative
metrics. These metrics are cost, schedule, reputation, quality, scope, health,
safety, etc.

The Risk Impact five-point scale is defined below.

| Risk Impact | Objective: Cost Increase | Objective: Time Increase | Objective: Reputation Damage               |
|-------------|--------------------------|--------------------------|--------------------------------------------|
| Critical    | >40%                    | 20-40%                   | Possibly rendering project useless         |
| High        | 20-40%                   | 10-20%                   | Unacceptable to sponsors & stakeholders    |
| Moderate    | 10-20%                   | 10-20%                   | Might require additional sponsor approvals |
| Low         | <10%                    | <5%                     | Noticeable reduction in project quality    |
| Very Low    | insignificant            | insignificant            | Barely noticeable                          |

**Note:** Please consult with your Risk Advisor / Information Security team to
review the Cloudneeti’s assigned Risk Impact in the context of your application
architecture.

### Risk Likelihood

Risk Likelihood (or probability), is the possibility of a risk event occurring.
It usually is expressed in either quantitative scare (e.g. probability of 10%)
or a qualitative rating (e.g. Not Likely).

The Risk Likelihood five-point scale is defined below.

| Risk Likelihood | Definition                                                    |
|-----------------|---------------------------------------------------------------|
| Certain         | Highly likely to occur with a probability >90%.              |
| High            | Likely to occur with a probability of 60-90%.                 |
| Moderate        | Possible to occur with a probability of 30-60%.               |
| Low             | Will most likely not occur. Probability to occur is 10 - 30%. |
| Not Likely      | Highly unlikely to occur with a probability <10%             |
| Undetermined    | Security policies with status ‘No Resources’ or ‘Manual’ or ‘Prerequisite’ or ‘Excluded’ are marked with this risk likelihood.           |

**Note:** Please consult with your Risk Advisor / Information Security team to
review the Cloudneeti’s assigned Risk Likelihood in the context of your
application architecture.


