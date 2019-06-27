# Cloudneeti Product

## **1. Overview**
> **Cloudneeti accelerates cloud adoption by enabling businesses to continuously and proactively eliminate cloud security and compliance risks for their multi-cloud workloads.**
> 
Cloudneeti is recognized by Gartner, Center for Internet Security (CIS) and an ISV partner to Microsoft and Amazon Web Services.

## **Problem**

Cloud technologies are enabling a fast-paced digital transformation. However, businesses are struggling to protect their public cloud workloads impeding their digital transformation.  

**1. Not able to prevent data breaches:**  
* Nearly all successful attacks on cloud services are the result of cloud misconfiguration or mismanagement  
* Increased complexity due to frequent release cycles, multi-cloud and multi-workloads (300+ services on Azure and AWS)  

**2. Not able to prove security:**  
* Traditional tools don’t work for the public cloud (84% of organizations surveyed) to monitor, baseline, and adjust security posture  
* Not able to prove compliance to internal/external auditors  

## **Solution**
Cloudneeti is a Software-as-a-Service (SaaS) product that leverages cloud-native APIs to continuously discover and assess customer’s workloads, provides visibility into security, compliance and risk posture, enforces standards and enables continuous governance of security policies.  

* **Visibility** into current security posture, compliance reports for 12+ industry frameworks, Risk posture and prioritizations allow customer to understand their current state of cloud security. 
* **Enforce standards** with automatic and guided remediations of discovered misconfigurations.
* **Continuous Governance** with abilities to manage policy exceptions, adjust posture, deviation notifications and various data-feed integrations with IT and compliance oversight tooling. 


 ![Cloudneeti Dashboard](.././images/productOverview/CloudneetiProductOverview_DashboardUI.png#thumbnail)

The Cloudneeti product is a multi-tenant software-as-a-service (SaaS) application. Cloudneeti application leverages cloud-native APIs to continuously discover customer workloads and monitor their configurations. 

## 2	Cloudneeti Application
The Cloudneeti application is hosted on Azure and consists of a data collection service, data processing service, data visualization service, and external IT systems integrations. 
•	The data collection service is granted read-only access to the customer’s cloud accounts and collects configuration information of cloud workloads (resources) within the cloud account. 
•	The data processing service compares this information against cloud security best practices and compliance controls. 
•	The data visualization service provides dashboards and reports about the comparison of actual configuration to cloud security best practices.
•	The IT systems integration service enables data sharing with external tools via API integration.

## 3	Customer Cloud Accounts
Cloudneeti application can integrate with multiple cloud accounts (Azure subscriptions) associated with a single or multiple Azure Active Directory (AD) tenants. The term “cloud account” is used as a standardized name referring to a single Azure subscription, Office 365 subscription, AWS account, or GCP project.
![Cloudneeti - Customer Cloud Accounts](.././images/productOverview/CloudneetiProductOverview_CustomerCloudAccounts.png#thumbnail)

 

