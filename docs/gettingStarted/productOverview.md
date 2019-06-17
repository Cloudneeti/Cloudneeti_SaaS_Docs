# **2	Cloudneeti Product**

## **2.1	Software-as-a-Service (SaaS)**
Cloud technologies enable a fast-paced digital transformation. However, businesses are struggling to protect their public cloud workloads, which impedes their digital transformation. 

**1.	Not able to prevent data breaches:**
a.	Nearly all successful attacks on cloud services are the result of cloud misconfiguration or mismanagement
b.	Increased complexity due to frequent release cycles, multi-cloud and multi-workloads (300+ services on Azure and AWS)
**2.	Not able to prove security:**
a.	Traditional tools don’t work for the public cloud (84% of organizations surveyed) to monitor, baseline, and adjust security posture
b.	Not able to prove compliance to internal/external auditors

Cloudneeti is Gartner-recognized and CIS-certified. Our product provides:
1.	**Visibility** into misconfigurations, compare against the defined standard (security baseline) to identify deviations
2.	**Enforced** remediation of discovered deviations via auto and guided remediations
3.	**Governance** with abilities to manage exceptions and adjust posture, 
4.	**Reporting** for 11+ compliance frameworks, deviation notifications and various data-feed integrations with IT and compliance oversight tooling 

![Cloudneeti Dashboard](.././images/productOverview1.png#thumbnail)

The Cloudneeti product is a multi-tenant software-as-a-service (SaaS) application. Cloudneeti application leverages cloud-native APIs to continuously discover customer workloads and monitor their configurations. 

## 2.2	Cloudneeti Application
The Cloudneeti application is hosted on Azure and consists of a data collection service, data processing service, data visualization service, and external IT systems integrations. 
•	The data collection service is granted read-only access to the customer’s cloud accounts and collects configuration information of cloud workloads (resources) within the cloud account. 
•	The data processing service compares this information against cloud security best practices and compliance controls. 
•	The data visualization service provides dashboards and reports about the comparison of actual configuration to cloud security best practices.
•	The IT systems integration service enables data sharing with external tools via API integration.

## 2.3	Customer Cloud Accounts
Cloudneeti application can integrate with multiple cloud accounts (Azure subscriptions) associated with a single or multiple Azure Active Directory (AD) tenants. The term “cloud account” is used as a standardized name referring to a single Azure subscription, Office 365 subscription, AWS account, or GCP project.

![Cloudneeti - Customer Cloud Accounts](.././images/productOverview2.png#thumbnail)



