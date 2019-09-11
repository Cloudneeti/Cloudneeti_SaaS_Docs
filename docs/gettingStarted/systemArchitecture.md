System Architecture
===================

Terminology
-----------

**Cloud Service Provider**

Cloud Service Providers (CSP) are companies such as Microsoft Azure, Amazon Web
Services (AWS) and Google Cloud Platform (GCP) that offer cloud hosting on their
cloud platforms.

**Resources**

Resources (“**Resource**”) are the cloud services subscribed to by the customer
under respective cloud accounts. Microsoft Azure is also providing a resource
group (“**Resource Group**”) level of aggregation of individual resources.

**Cloudneeti application**

The Cloudneeti application is a multi-tenant software as a service (SaaS)
product hosted on Microsoft Azure. The product is leveraging AWS serverless
functions for cloud workload configuration data collection from AWS cloud
accounts.

**Cloudneeti portal**

The Cloudneeti portal is a user interface of the Cloudneeti application allowing
users to navigate the product, access dashboards, views and reports and
configure the product.

**License**

Cloudneeti creates for each customer one or multiple Cloudneeti License(s)
(“**License**”) to grant access to the Cloudneeti application. The customer
needs to activate each license to gain access to the application. The time of
License activation becomes the start date of the billing cycle for paid
Cloudneeti users.

**Cloud Accounts**

The Cloud Account (“**Cloud Account**”) is an Azure subscription or AWS account
added in the Cloudneeti application under a License. License Admin can onboard
multiple Cloud Accounts under each License.

**Onboarding a Cloud Account**

Onboarding a Cloud Account to the Cloudneeti application is the process of
granting data collection rights to the Cloudneeti application. Multiple Azure
subscriptions with a single or multiple Azure Active Directory (AD) tenants can
be onboarded to the Cloudneeti application.

**Users**

Cloudneeti grants designated people from the customer’s organization sign-in
access to the Cloudneeti application as users (“**Users**”). Cloudneeti uses SSO
(Single Sign On) with the customer’s Microsoft Azure AD, Office 365, and
Microsoft Accounts (Outlook, Hotmail, Live). Users can sign in with their
corporate credentials (email ID and password).

**License Admin**

Cloudneeti assigns the License Admin (“**License Admin**”) role to one customer
representative who will have administration rights to the respective License.
License Admin has access to dashboards and reports for all Accounts under the
License. License Admin can manage users (add / remove / configure) with the
following roles: License Admin, Account Admin, License Reader and Account Reader
roles. License Admin can manage configuration settings at the License or Account
level.

**Account Admin**

The License Admin can assign the Account Admin (“**Account Admin**”) role to
certain users who require access only to specific Accounts. The Account Admin
can manage users only within the accounts they have access to. Account Admin can
manage configurations available at an account level and doesn’t have access to
configurations done at a License level (such as external data feed or ticketing
interactions).

**Reader Roles**

The License Reader (“**License Reader**”) and Account Reader (“**Account
Reader**”) roles are assigned to users who require only access to dashboards and
reports, but don’t need to be involved in configuring the Cloudneeti
application.

**Subscription Term**

Subscription term is the time period when data collection by Cloudneeti
application is enabled. Subscription term is tracked at a License level. It
starts from the time when the License is activated when the first Cloud Account
is onboarded.

**Data Retention Term**

The Data retention term is the time period when users can still sign in after
the Subscription Term ends, but data collection is disabled. Users will be able
to see the data only from previous scans. The standard Data Retention Period is
30 days, but it can be set at the time of the License request.

**Scan**

The scan is the process where the Cloudneeti application collects cloud workload
configuration data from CSPs.

**Security Policy**

Security policies are recommended configurations of cloud workloads that enable
maximum security of the cloud environment. Security policies are also called
cloud security best practices.

Cloudneeti Application
----------------------

### Single Sign On

Cloudneeti application doesn’t manage user ID and password information, rather
it enables single sign on (SSO) with corporate identity management system.
Cloudneeti currently supports Azure AD, Office 365 AD tenant and Microsoft
accounts (such as outlook, live, and Hotmail).

![Single Sign On](.././images/systemArchitecture/Single_Sign_On.png#thumbnail_1)

Users enter their corporate ID credentials to sign into the Cloudneeti
application.

Data Protection 
----------------

Cloudneeti customers retain control and ownership of their own data.

The collected metadata about configurations of customer cloud accounts (Azure
subscriptions) is well-protected within the Cloudneeti data store. The following
information security policies are implemented by Cloudneeti:

-   **Data encryption at rest:** The customer’s data is always stored encrypted.
    Various cloud service components and encryption schemes (e.g. key vaults,
    AES symmetric key algorithms, higher-level cipher suites) are used.

-   **Data encryption in-transit**: TLS 1.2 encryption or higher is applied for
    encrypting data during transmission.

-   **Data access**: The production support team has access to the management
    plane at the data store level. They won’t have access to decrypt the
    configuration data unless a support request makes it necessary. Customers
    have to explicitly grant access to the support team to retrieve the data for
    a time-boxed period of time required for resolving a ticket.

-   **Customer lockbox**: Lockbox is a feature that ensures the Cloudneeti
    support team cannot access customer data to perform a service operation
    without explicit approval.

-   **Data classification**: A data classification of ‘Restricted’ is applied to
    the data store.

-   **Audit logging**: All access requests are monitored through Privileged
    Identity Management (PIM) as well as operational logs.

-   **Data erasure:** Expiry/termination of a contract will result in automatic
    clean-up of all data collected.

-   **Data backup:** All backed up data is stored encrypted, and RBAC
    permissions are applied for the recovery team.

-   **Data retention:** Data retention for active contracts is set at the time
    of License provisioning. Typically, this will be 30 days.
