# Customer Cloud Accounts

Cloudneeti application can integrate with multiple cloud accounts (Azure subscriptions) associated with a single or multiple Azure Active Directory (AD) tenants. The term “cloud account” is used as a standardized name referring to a single Azure subscription, Office 365 subscription, AWS account, or GCP project.

Cloud account is AWS account, Azure subscription or GCP project
Cloud resource is a subscribed to instance of a cloud service.


## 1.1	Azure

Microsoft Azure is a set of cloud services providing access to Azure products such as VMs, storage accounts, databases, etc.

1.	Azure account is a billing account used for billing segregation purposes.

2.	Azure account can have multiple subscriptions used for resources segregation purposes

3.	Azure subscription can have multiple resource groups (a method of grouping resources within one subscription)

4.	Azure resources are individual instances of consumed Azure services / Azure products

![Activate License](.././images/customerCloudAccount/CustomerCloudAccount_Azure.png#thumbnail)
 

## 1.2	Office 365

Office 365 subscriptions (now also branded as Microsoft 365 or M365) comes bundled as Office 365, Windows 10 Pro, and Enterprise Mobility + Security (EMS).

![Activate License](.././images/customerCloudAccount/CustomerCloudAccount_Office365.png#thumbnail) 

## 1.3	AWS

1.	AWS accounts provide the highest level of resource and billing isolation

2.	An Amazon Resource Name (ARN) is a file naming convention used to identify a resource in the Amazon Web Services (AWS) public cloud.

![Activate License](.././images/customerCloudAccount/CustomerCloudAccount_AWS.png#thumbnail)
 
## 1.4	GCP

GCP projects form the basis for creating, enabling, and using all GCP services including managing APIs, enabling billing, adding and removing collaborators, and managing permissions for GCP resources.

1.	GCP resources are the fundamental components that make up all GCP services. 

2.	Examples of resources include Compute Engine Virtual Machines (VMs), Cloud Pub/Sub topics, Cloud Storage buckets, App Engine instances. 

3.	All these lower level resources can only be parented by projects, which represent the first grouping mechanism of the GCP resource hierarchy.
