Glossary
========

This online documentation uses a set of specific to the Cloudneeti application
terms. These terms are defined in the glossary table below.

| Term                   | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| License                | Cloudneeti creates for each customer one or multiple Cloudneeti License(s) to grant access to the Cloudneeti application. The customer activates the license during onboarding of the first cloud account. The time of License activation becomes the start date of the billing cycle for paid Cloudneeti users.                                                                                                                                                                     |
| Cloud Account          | The Cloud Account is a representation of AWS account, Azure subscription or Office 365 subscription within the Cloudneeti application. License Admin can create multiple Cloud Accounts under each License.                                                                                                                                                                                                                                                                          |
| Resources              | Resources are the cloud services subscribed to by the customer under respective Cloud Accounts. Microsoft Azure is also providing a resource group level of aggregation of individual resources. AWS is using tags as a method to aggregate individual resources.                                                                                                                                                                                                                    |
| Onboarding             | Onboarding is the process of granting required permissions to the Cloudneeti application for data collection and registering a cloud account in Cloudneeti application. Microsoft Azure and Office 365 subscriptions associated with a single or multiple Azure Active Directory (AD) tenants can be onboarded to the same license within the Cloudneeti application.                                                                                                                |
| Meta-data Collection   | Meta-data collection is the process of collecting cloud workload configuration information from CSPs.                                                                                                                                                                                                                                                                                                                                                                                |
| Re-scan                | On demand triggered meta-data collection is called a scan or re-scan.                                                                                                                                                                                                                                                                                                                                                                                                                |
| Security Best Practice | Security best practice is a recommended configuration of a cloud resource that enables maximum security of the cloud infrastructure.                                                                                                                                                                                                                                                                                                                                                 |
| Security Policy        | Security policy term used in compliance domain is fully equivalent to “security best practice” term used in security domain.                                                                                                                                                                                                                                                                                                                                                         |
| Compliance Control     | Security policies are mapped to compliance controls of different compliance frameworks. One compliance control can have one or multiple security policies mapped to it.                                                                                                                                                                                                                                                                                                              |
| Compliance Framework   | Compliance framework is referring to Cybersecurity Benchmarks, Laws and Regulations, and Industry Benchmarks. Compliance framework typically consists of controls grouped under control categories, and one or multiple security policies mapped to each compliance control.                                                                                                                                                                                                         |
| Users                  | Cloudneeti grants designated people from the customer’s organization sign-in access to the Cloudneeti application as users. Users can sign in using single sign on (SSO) with their corporate credentials (email ID and password).                                                                                                                                                                                                                                                   |
| Single Sign On         | Single sign-on (SSO) is an authentication process that allows a user to access multiple applications with one set of login credentials. Cloudneeti uses SSO authentication with the customer’s Microsoft Azure AD, Office 365, and Microsoft Accounts (Outlook, Hotmail, Live).                                                                                                                                                                                                      |
| License Admin          | Cloudneeti assigns the License Admin role to one customer representative (user) who will have administration rights to the respective License. License Admin has access to dashboards and reports for all Accounts under the License. License Admin can manage users (add / remove / configure) with the following roles: License Admin, Account Admin, License Reader and Account Reader roles. License Admin can manage all configuration settings at a License and Account level. |
| License Reader         | The License Reader role is assigned to a user who requires access to dashboards, views and reports for all cloud accounts under a specific license. License reader also doesn’t have the rights to configure the Cloudneeti application.                                                                                                                                                                                                                                             |
| Account Admin          | The License Admin can assign the Account Admin role to certain users who require access only to specific Accounts. The Account Admin can manage users only within the accounts they have access to. Account Admin can manage configurations available at an account level and doesn’t have access to configurations done at a License level (such as external data feed or ticketing interactions).                                                                                  |
| Account Reader         | The Account Reader role is assigned to a user who requires access to dashboards, views and reports for specific individual cloud accounts but not all cloud accounts under a specific license. Account reader also doesn’t have the rights to configure the Cloudneeti application.                                                                                                                                                                                                  |
| Subscription Term      | Subscription term is the time period when data collection by Cloudneeti application is enabled. Subscription term is tracked at a License level. It starts from the time when the License is activated when the first Cloud Account is onboarded.                                                                                                                                                                                                                                    |
| Data Retention Period  | The Data retention period is the time that all data collected is retained. When Cloudneeti License term ends, users can still sign in to see the data only from the previous completed scans. The data collection is disabled after License expiry. The standard Data Retention Period is 30 days, but it can be set differently at the time of the License creation.                                                                                                                |