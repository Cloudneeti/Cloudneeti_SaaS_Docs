Product Features
================

Overview
--------

Cloudneeti product features can be grouped into the following categories:

-   **Discovery** – discovering cloud assets and asset configurations with API
    based integrations with cloud services providers.

-   **Visibility** – dashboards, views, and reports about security and
    compliance posture.

-   **Governance** – adjusting and managing information security requirements
    and customer-specific configurations.

-   **Respond** – remediating misconfigurations using various techniques,
    including automatic and guided remediation capabilities.

-   **Other** – various other capabilities making the customer experience
    seamless.

Cloudneeti vision is to provide digital governance for security, compliance,
risk management, and data privacy. Accordingly, visibility and governance
product features are aligned to these four domains.

![Overview](.././images/introduction/overview.png#thumbnail_1)

Discovery
---------

Cloudneeti supports integration with AWS, Microsoft Azure and Office 365. Google
Cloud Platform (GCP) is on the product roadmap. Please go to [Onboarding
Guide](../../onboardingGuide/onboardingGuideOverview/) for
more information.

Visibility
----------

| **Product Feature**                                                                                                    | **Description**                                                                                                                                                                                                                                                       |
|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Security**                                                                                                           |                                                                                                                                                                                                                                                                       |
| [Cloud Infrastructure Configurations](../../userGuide/securityPolicies/)                         | Cloudneeti displays compliance of IaaS, PaaS and SaaS resource configurations continuously measured against cloud security best practices (security policies).                                                                                                        |
| [Cloud IAM Configurations](../../userGuide/securityPolicies/)                                    | Cloudneeti displays compliance of identity and access management (IAM) configurations against cloud security best practices (security policies).                                                                                                                      |
| [OS Baselines](../../userGuide/securityPolicies/)                                                | Cloudneeti displays compliance of operating system (OS) configurations against OS hardening baselines (CIS configuration guidelines).                                                                                                                                 |
| [Asset Level Security](../../userGuide/dashboards/#assets-security-preview)                      | Cloudneeti displays asset inventory and security posture against each of the assets.                                                                                                                                                                                  |
| Vulnerability Assessment Solution Integrations (Azure, AWS)                                                            | Cloudneeti aggregates information from third party vulnerability assessment products for an aggregated security posture view. Refer documentation for [Azure workloads](../../onboardingGuide/azureVulnerability/) and AWS workloads (roadmap). |
| Kubernetes Cluster Security                                                                                            | Cloudneeti discovers Kubernetes Containers and Cluster level hardening configurations and compares against defined security policies. Refer documentation for Microsoft Azure hosted K8 clusters and AWS hosted K8 clusters (roadmap).                                |
| **Compliance**                                                                                                         |                                                                                                                                                                                                                                                                       |
| [Compliance Posture](../../userGuide/complianceBenchmarks/)                                      | Cloudneeti provides compliance posture for a large number of cybersecurity benchmarks, laws and regulations, and industry benchmarks.                                                                                                                                 |
| **Risk**                                                                                                               |                                                                                                                                                                                                                                                                       |
| [ISO 27005 based Risk Prioritization matrix](../../gettingStarted/productFeatures/#risk-posture) | Cloudneeti assigns each security policy a risk impact and risk likelihood value and displays the categorization of security policies in form of risk matrix.                                                                                                          |
| [NIST CSF based Categorization](../../userGuide/userGuide/#risk)                                 | Cloudneeti provides the most comprehensive out-of-box NIST CSF based categorization to all security policies within the product.                                                                                                                                      |
| **Data Privacy**                                                                                                       | The data privacy features are on the product roadmap.                                                                                                                                                                                                                 |
| Data Discovery                                                                                                         | Cloudneeti is integrating with cloud service providers to receive information about the presence of Personally Identifiable Information (PII) and Personal Health Information (PHI) in databases and storage accounts.                                                |
| Data Classification                                                                                                    | Cloudneeti determines whether all classified confidential information is properly secured in line with the organization’s information security guidelines.                                                                                                            |

Governance
----------

| **Product Feature**                                                                        | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|--------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Security**                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Policy Management                                                                          | Cloudneeti provides various governance features to determine and adjust security posture. Policy Overrides - After an evaluation of a risk associated with policy compliance, Customers/Auditors can decide on overriding the policy to meet the internal governance needs. Various options to indicate 3rd party compensating controls, time-bound exceptions to exclude policies are available. [Security Policy Exclusions](../../administratorGuide/securityPolicyExclusions/) – Cloudneeti provides granular controls to turn off specific security policies from data collection and compliance reporting. Resource Exclusions (roadmap) – Cloudneeti plans to provide granular controls to exclude specific cloud resources from data collection and compliance reporting. |
| [CI/CD APIs](../../administratorGuide/configureCloudneetiAPIAccess/) | Cloudneeti offers various REST based APIs to integrate with CI/CD pipelines helping customers to make automated decisions to continue/rollback deployments based on security posture.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Compliance**                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Private Benchmark](../../administratorGuide/privateBenchmark/)      | Cloudneeti allows an organization to configure their own private (aka Custom) benchmarks and display compliance to this internal company standard.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

Respond
-------

| **Product Feature**                                                                                       | **Description**                                                                                                                                                      |
|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Remediations](../../remediation/overview/)                                         | Cloudneeti provides remediation guidance and auto-remediation capabilities.                                                                                          |
| [Quick Wins](../../remediation/overview/)                                           | Cloudneeti provides scripts to quickly mitigate quite a few low-hanging security configurations and improving posture soon after a cloud account has been onboarded. |
| [Notifications](../../administratorGuide/configureNotifications/)                   | Cloudneeti supports email notifications as part of the onboarding and ongoing operation of the product.                                                              |
| [Ticketing](../../administratorGuide/manageLicenses/#incident-management-ticketing) | Cloudneeti supports integration with ticketing systems to automatically log incidents when a misconfiguration is discovered in the monitored production environment. |

Other
-----

| **Product Feature**                                                             | **Description**                                                                                                                                                                                                 |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Partner Co-branding](../../tryAndBuy/partnerCobranding/) | Cloudneeti allows its partners to display their logos and other branding elements on the product along with “powered by Cloudneeti” statement.                                                                  |
| [Marketplace Offers](../../tryAndBuy/freeTrial/)          | Cloudneeti is available in Azure Marketplace to try and buy the product.                                                                                                                                        |
| Data Sovereign Instances                                                        | Primary instances for Cloudneeti are hosted in the United States and many other data sovereign instances are available or can be quickly deployed and operated in other regions based on customer requirements. |
|                                                                                 |                                                                                                                                                                                                                 |
