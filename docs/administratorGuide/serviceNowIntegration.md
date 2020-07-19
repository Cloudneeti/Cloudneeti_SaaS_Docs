Service Now Integration
===============================

Incident Management (Ticketing) allows integrations with ticketing systems such
as ServiceNow.


License Admins will have the rights to managed configure integrations.


| S. No. | Step                                   | Portal to use     | Role                    |
|--------|------------------------------------|-------------------|-------------------------|
| 1      | Configure ticketing system integration for ServiceNow     | Cloudneeti   | License Admin  |
| 2      | Configure Incident Management   | Cloudneeti   | Subscription Owner  |
| 3      | Verify tickets created | ServiceNow    | Admin      |


### STEP 1: Configure ticketing system integration for ServiceNow or Zendesk
The following steps are required to configure Service Now ticketing system integration in the
Cloudneeti application.

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

