Zendesk Integration
====================

Incident Management (Ticketing) allows integrations with ticketing systems such
as Zendesk.


License Admins will have the rights to managed configure integrations.


| S. No. | Step                                   | Portal to use     | Role                    |
|--------|------------------------------------|-------------------|-------------------------|
| 1      | Configure ticketing system integration for Zendesk    | Cloudneeti   | License Admin  |
| 2      | Configure Incident Management   | Cloudneeti   | Subscription Owner  |
| 3      | Verify tickets created | ServiceNow or Zendesk   | Admin      |


### STEP 1: Configure ticketing system integration for ServiceNow or Zendesk
The following steps are required to configure ticketing system integration in the
Cloudneeti application.

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

    ![ZenDesk integration](.././images/administratorGuide/Zendesk2.png#thumbnail)


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

#### Zendesk Ticket Sample

Sample Zendesk Ticket List

![ZenDesk integration sample1](.././images/administratorGuide/ZendeskTicketList.png#thumbnail)

Sample Zendesk Ticket 
 
1. License and account details

    ![ZenDesk integration sample2](.././images/administratorGuide/ZendeskTicket_LicenseAccountDetails.png#thumbnail)

2. Policy Recommendation, Audit Procedure and Remediation 

    ![ZenDesk integration sample3](.././images/administratorGuide/ZendeskTicket_PolicySpecification.png#thumbnail)