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

### Configure Data Feed Destinations

Cloudneeti application supports two types of data feed destinations:

1. Object storage system

2. NoSql storage system

Please select the type of storage system you would like to use.

#### Object storage system

CSV files will be streamed to the storage account after every successful data
collection.

1. Select **object storage system**

2. Enter **Azure Storage Account Connection String**

3. Enter **Container name for reporting**

4. Enter **Container name for auditing**

5. Click **Verify Connection** to verify connection status

6. Click **Save**
	![Storage System](.././images/administratorGuide/Storage_System.png#thumbnail)

#### NoSql storage system

JSON files will be streamed to the storage account after every successful data
collection.

1. Select **NoSql storage system**

2. Enter **Cosmos DB connection string**

3. Enter **Database Name**

4. Enter **Collection name for reporting**

5. Enter **TTL for reporting data**

6. Enter **Collection name for auditing**

7. Enter **TTL for auditing data**

8. Click **Verify Connection** to verify connection status

9. Click **Save**
	![NoSql storage system](.././images/administratorGuide/NoSql_Storage_System.png#thumbnail)

### Data Feed Scope & Frequency

**Data Feed Scope & Frequency** allows selection of reporting and / or auditing
type of data feeds and the frequency of data feeds.

1. Select **Frequency of Detailed Data Feeds**

2. Select **Accounts to be notified for**

3. Edit data feeds for **each individual benchmark**

4. Click **Save**
	![Data Feed Scope](.././images/administratorGuide/Data_Feed_Scope.png#thumbnail)

The following settings can be updated at an individual benchmark level.
	![Data Feed Scope](.././images/administratorGuide/Benchmark_Level.png#thumbnail)

### Incident Management (Ticketing)

Incident Management (Ticketing) allows integrations with ticketing systems such
as ZenDesk and ServiceNow.

Ticket prioritization based on policy categories. Tickets/incidents will be created for non-compliant policies from selected categories and for configured accounts. 

## Configure Incident Management system  

1. Go to settings and click on **Configure Integrations** 

2. Click on **Edit** button of Incident Management (Ticketing). 

    ![Ticketing](.././images/administratorGuide/ConfigureIntegrations.png#thumbnail)

3. Select desired Ticketing system Zendesk or Service Now. 

4. Click on **Configure** button. 

    ![Ticketing](.././images/administratorGuide/ConfigureButton.png#thumbnail)

5. Enter Ticketing system configuration details

    ### Zendesk

    Zendesk Sub-Domain  

    Zendesk User Id 

    Choose and enter Zendesk Access Type: Password Access or Token Access 

    Assign Ticket To (Email Id Tickets will be assigned to email@example.com) 

    ![Ticketing](.././images/administratorGuide/Zendesk.png#thumbnail)

    ### Service Now

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
