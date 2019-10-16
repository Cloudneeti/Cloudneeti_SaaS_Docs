Manage Licenses
===============

License Admins will have the rights to managed License level configurations.

Select Settings on the left menu and click on Manage Accounts.

1. Select the required **License** from the dropdown menu

2. You can view the License Name, License ID and License Status in the left
    upper corner

3. On the right upper side Enabled Cloud Connectors are shown

4. **License Features**, the left bottom section, outlines possible
    configurations at a License level

5. The center bottom section Compliance Bundles displays enabled compliance
    frameworks

6. The right bottom section **Point of Contact** lists the primary and
    secondary License Admin from the customer side and Cloudneeti points of
    contact for this License.
	![Manage Licenses](.././images/administratorGuide/Manage_Licenses.png#thumbnail)

1. Click **Update** to edit the License Name

2. **Configure Data Feed Destinations** specifies where on the customer side
    data feeds provided by Cloudneeti application will be stored.

3. **Data Feed Scope & Frequency** specifies next level of details of data
    feeds configuration

4. **Configure reporting data feeds** specifies whether the reporting data
    feeds functionality is enabled for this License or not.

5. **Configure auditing data feeds** specifies whether the auditing data feeds
    functionality is enabled for this License or not.

6. **Incident Management (Ticketing)** allows integrations with ticketing
    systems such as ZenDesk and ServiceNow.

7. **Update Global Policies** allows configuration of security policies –
    enabling and disabling policies where data collection should occur.

8. **Data Retention** displays the configured time period for retaining scan
    and report data after the License expires.

9. **Expiry / Renewal (UTC)** displays start and end date of the License.
	![License Features](.././images/administratorGuide/License_Features.png#thumbnail)

### License Name Update

You can edit the **License Name** and click **Save**.
	![License Name Update](.././images/administratorGuide/License_Name _Update.png#thumbnail)

### Data Feed – Reporting and Auditing
### STEP 1: Configure Data Feed Destinations

Cloudneeti application supports two types of data feed destinations:

1. Object storage system

2. NoSql storage system

Please select the type of storage system you would like to use.

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


### STEP 2: Enable Reporting Data Feeds

Login to Cloudneeti portal with License Admin role. Navigate to Configure
integrations to enable the Reporting Data Feeds.

![STEP 2: Enable Reporting Data Feeds](.././images/administratorGuide/Enable_Reporting_Data_feeds.png#thumbnail)

### STEP 3: Enable Auditing Data Feeds

Login to Cloudneeti portal with License Admin role. Navigate to Configure
integrations to enable the Reporting Data Feeds.
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

### Configure Incident Management system  

Incident Management (Ticketing) allows integrations with ticketing systems such
as ZenDesk and ServiceNow.Ticket prioritization based on policy categories. Tickets/incidents will be created for non-compliant policies from selected categories and for configured accounts.

1. Go to settings and click on **Configure Integrations** 

2. Click on **Edit** button of Incident Management (Ticketing). 

    ![Ticketing](.././images/administratorGuide/ConfigureIntegrations.png#thumbnail)

3. Select desired Ticketing system Zendesk or Service Now. 

4. Click on **Configure** button. 

    ![Ticketing](.././images/administratorGuide/ConfigureButton.png#thumbnail)

5. Enter Ticketing system configuration details

    #### Zendesk

    Zendesk Sub-Domain  

    Zendesk User Id 

    Choose and enter Zendesk Access Type: Password Access or Token Access 

    Assign Ticket To (Email Id Tickets will be assigned to email@example.com) 

    ![Ticketing](.././images/administratorGuide/Zendesk.png#thumbnail)

    #### Service Now

    Service Now Instance 

    Service Now User Id 

    ServiceNow Access Type: Password Access or Token Access 

    Assign Ticket To (Email Id, Tickets will be assigned to email@example.com) 

    ![Ticketing](.././images/administratorGuide/ServiceNow.png#thumbnail)

### Incident Management Scope & Frequency

1. **Select Ticketing System** from dropdown (ZenDesk, ServiceNow).

2. Select **Frequency of Ticket Creation**

3. Select **All Accounts** or **Selected accounts**

4. Select **Azure, Office365 or AWS**

5. Select items in **Available Categories** section and click (6), (7) or (8)
    to allocate High Priority, Medium Priority or Low Priority to related
    category of security policies. You can also select items in High Priority,
    Medium Priority or Low Priority sections and click (6), (7) or (8) to move
    them back to Available Categories and reallocate by moving into a different
    category section.

6. Click icon to move items between the **Available Categories** section and
    High Priority section

7. Click icon to move items between the **Available Categories** section and
    Medium Priority section

8. Click icon to move items between the **Available Categories** section and
    Low Priority section

9. Click Save
	![Incident Management](.././images/administratorGuide/Incident_Management.png#thumbnail)

### Update Global Policies

Update Global Policies allows selection of security policies that should be
excluded from data collection.

1. Select Azure Policies, Office365 policies or AWS Policies

2. Select single or multiple security policies from the left section

3. Click on icons to move security policies to the right section Excluded
    Policies and back

4. Click Save
	![Update_Global_Policies](.././images/administratorGuide/Update_Global_Policies.png#thumbnail)
