Integrations
======================

## Overview

License Admins will have the rights to managed configure integrations.

Select **Configurations** on the left menu and click on **Integrations**.

1.  Select the required **License** from the dropdown menu

2.  Click **Edit** to **Configure Data Feed Destinations** that specifies where
    the data feeds provided by Cloudneeti application will be stored on the
    customer side.

3.  Turn **On / Off** to **Enable Reporting Data Feeds**

4.  Turn **On / Off** to **Enable Auditing Data Feeds**

5.  Click **Edit** to **Configure Data Feed Scope & Frequency**.

6.  **Incident Management (Ticketing)** allows integrations with ticketing
    systems such as ZenDesk and ServiceNow. Click **Edit** to configure Incident
    Management.

	![Manage Licenses](.././images/administratorGuide/Manage_Licenses.png#thumbnail)


## Data Feed – Reporting and Auditing
Cloudneeti application supports two types of data feed destinations:

1. Object storage system

2. NoSql storage system


| S. No. | Step                                   | Portal to use     | Role                    |
|--------|------------------------------------|-------------------|-------------------------|
| 1      | Create Object or NoSQL storage system    | Microsoft Azure   | Subscription Owner  |
| 2      | Configure Data Feed Destinations    | Cloudneeti   | Subscription Owner  |
| 3      | Enable Data Feeds | Cloudneeti   | License Admin      |
| 4      | Configure Data Feed Scope & Frequency        | Cloudneeti        | License Admin           |
| 5      | Verify Data Feeds        | Microsoft Azure        | Subscription Owner           |

### STEP 1: Create Object or NoSQL storage system

Please select the type of storage system you would like to use and create it in Azure Subscription.

1. Object storage system  - Follow this [link](https://docs.microsoft.com/en-us/azure/storage/common/storage-quickstart-create-account?tabs=azure-portal) to create a Object storage system.

2. NoSQL storage system - Follow this [link](https://docs.microsoft.com/en-us/azure/cosmos-db/how-to-manage-database-account#create-an-account) to create a NoSQL storage system.


### STEP 2: Configure Data Feed Destinations
#### Object storage system

CSV files will be streamed to the storage account after every successful data
collection.

1.  Select **Object storage system,** the customer’s Azure Storage Account with
    Blob containers where Cloudneeti will continuously publish detailed data on
    every successful scan.

2.  Enter **Azure Storage Account Connection String**, the connection string
    required for Cloudneeti to connect to Customer’s Storage account.

3.  Enter **Container name for reporting,** the name to the folder (aka
    Container) under which scan data will be published. If the Container name
    doesn’t exist, it’ll be created.

4.  Enter **Container name for auditing**, the separate container name where
    audit data will be published. If the Container name doesn’t exist, it’ll be
    created.

5.  **Select region** where the data will be sent to.

6.  Click **Verify Connection**

7.  Click **Save**

	![Storage System](.././images/administratorGuide/Storage_System.png#thumbnail)

#### NoSql storage system

JSON files will be streamed to the storage account after every successful data
collection.

1.  Select **NoSql storage system**, the customer’s Azure Cosmos DB account.

2.  Enter **Cosmos DB connection string**, the connection string required for
    Cloudneeti to connect to Customer’s Cosmos DB.

3.  Enter **Database Name**, where the data feed will be published.

4.  Enter **Collection name for reporting**, the name of Cosmos DB collection
    for storing scan data.

5.  Enter **TTL for reporting data**, the time-to-live (TTL) parameter for the
    documents. TTL will affect how long the documents are to be retained in the
    Cosmos DB, after which they will automatically expire.

6.  Enter **Collection name for auditing**, the name of Cosmos DB collection for
    storing Audit data.

7.  Enter **TTL for auditing data,** the time-to-live (TTL) parameter for the
    documents.

8.  **Select Region** where the data will be sent to

9.  Click **Verify Connection** to verify connection status

 10. Click **Save**

	![NoSql storage system](.././images/administratorGuide/NoSql_Storage_System.png#thumbnail)


### STEP 3: Enable Data Feeds

Login to Cloudneeti portal with License Admin role. Navigate to Configure
integrations to enable the Data Feeds.

Enable Reporting Data Feeds

![STEP 2: Enable Reporting Data Feeds](.././images/administratorGuide/Enable_Reporting_Data_feeds.png#thumbnail)

Enable Auditing Data Feeds

![STEP 3: Enable Auditing Data Feeds](.././images/administratorGuide/Enable_Auditing_Data_Feeds.png#thumbnail)


### STEP 4: Configure Data Feed Scope & Frequency

**Data Feed Scope & Frequency** allows selection of reporting and / or auditing
type of data feeds and the frequency of data feeds.

1. Select **Frequency of Detailed Data Feeds**

2. Select **Accounts to be notified for**

3. Edit data feeds for **each individual benchmark**

4. Click **Save**
	![Data Feed Scope](.././images/administratorGuide/Data_Feed_Scope.png#thumbnail)

The following settings can be updated at an individual benchmark level.
	![Data Feed Scope](.././images/administratorGuide/Benchmark_Level.png#thumbnail)


### STEP 5: Verify data feed 

1.  Reporting data feed gets triggered as per frequency configured and after
    every Cloud Account scan in Cloudneeti

2.  Auditing data feed is triggered as per set frequency.

#### Object storage system

CSV files will be streamed to the storage account after every successful data
collection.

Login to Azure portal and navigate to the Storage account configured for Data
Feed and verify the data.

Auditing Data Sample

![Object storage system](.././images/administratorGuide/Auditing_Data_Sample.png#thumbnail)

Reporting Data Sample
![Object storage system](.././images/administratorGuide/Reporting_Data_Sample.png#thumbnail)

#### NoSql storage system

JSON files will be streamed to the storage account after every successful data
collection.

Login to Azure portal and navigate to the Cosmos DB instance configured for Data
Feed and verify the data.

Auditing Data Sample
![NoSql storage system](.././images/administratorGuide/Auditing_Data_Sample_NoSql.png#thumbnail)

Reporting Data Sample
![NoSql storage system](.././images/administratorGuide/Reporting_Data_Sample_NoSql.png#thumbnail)


Incident Management (Ticketing)
-------------------------------
Incident Management (Ticketing) allows integrations with ticketing systems such
as ZenDesk and ServiceNow.


| S. No. | Step                                   | Portal to use     | Role                    |
|--------|------------------------------------|-------------------|-------------------------|
| 1      | Configure ticketing system integration for ServiceNow or Zendesk    | Cloudneeti   | License Admin  |
| 2      | Configure Incident Management   | Cloudneeti   | Subscription Owner  |
| 3      | Verify tickets created | ServiceNow or Zendesk   | Admin      |


### STEP 1: Configure ticketing system integration for ServiceNow or Zendesk
The following steps are required to configure ticketing system integration in the
Cloudneeti application.

#### ServiceNow 

1.  Select **Service Now** in the dropdown

2.  Click **Configure**

    ![ServiceNow integration](.././images/administratorGuide/ServiceNow.png#thumbnail)

3. Configure ServiceNow integration.

4.  Enter **Instance Name**

5.  Enter **Instance Username**

6.  Select **ServiceNow Access Type**

7.  Select **Instance password**

8.  Enter **Assign Ticket To**

9.  Click **Save**

    ![ServiceNow integration](.././images/administratorGuide/ServiceNow2.png#thumbnail)


#### ZenDesk 

The following steps are required to configure ZenDesk integration in the
Cloudneeti application.


1.  Select **ZenDesk** in the dropdown

2.  Click **Configure**

    ![ZenDesk integration](.././images/administratorGuide/Zendesk1.png#thumbnail)

3.  Configure ZenDesk integration.

4.  Enter **ZenDesk Subdomain**

5.  Enter **ZenDesk User ID**

6.  Select **ZenDesk Access Type**

7.  Enter **ZenDesk password/token**

8.  Enter **Assign Ticket To**

9.  Click **Save**


### STEP 2: Configure Incident Management

1.  Select **Ticketing System** from dropdown (ServiceNow, ZenDesk).

2.  Select **Frequency of Ticket Creation**

3.  Select **All Accounts** or **Selected accounts**

4.  Select **Included Accounts**

5.  Select **Azure, Office365 or AWS**

6.  Select items in **Available Categories** section and click (6) to allocate
    High Priority or move them back to Available Categories

7.  Select items in **Available Categories** section and click (7) to allocate
    Medium Priority or move them back to Available Categories

8.  Select items in **Available Categories** section and click (8) to allocate
    Low Priority or move them back to Available Categories

9.  Click **Save**
    
    ![Incident Management (Ticketing)](.././images/administratorGuide/Incident_Management_Ticketing.png#thumbnail)


### STEP 3: Verify tickets created
Tickets are created for non-compliant resources after every successful scan.

#### ServiceNow Incident Sample

Sample ServiceNow Incidents List

![ServiceNow integration](.././images/administratorGuide/ServiceNow_IncidentList.png#thumbnail)

Sample ServiceNow Incident

![ServiceNow integration](.././images/administratorGuide/ServiceNow_Incident.png#thumbnail)

Sample ServiceNow Problem

![ServiceNow integration](.././images/administratorGuide/ServiceNow_Incident_RelatedProblems.png#thumbnail)

Sample ServiceNow Problem Task

![ServiceNow integration](.././images/administratorGuide/ServiceNow_ProblemTask_LicenseDetails.png#thumbnail)


#### Zendesk Ticket Sample

Sample Zendesk Ticket List

![ZenDesk integration sample1](.././images/administratorGuide/ZendeskTicketList.png#thumbnail)

Sample Zendesk Ticket 
 
1. License and account details

    ![ZenDesk integration sample2](.././images/administratorGuide/ZendeskTicket_LicenseAccountDetails.png#thumbnail)

2. Policy Recommendation, Audit Procedure and Remediation 

    ![ZenDesk integration sample3](.././images/administratorGuide/ZendeskTicket_PolicySpecification.png#thumbnail)