ServiceNow Integration
===============================
Cloudneeti supports integration with ticketing systems to automatically log incidents when a misconfiguration is discovered in the monitored production environment. Incident Management (Ticketing) allows integrations with ticketing systems such as ServiceNow.

## Prerequisites

1. ServiceNow instance is online

    ![ServiceNow integration](.././images/administratorGuide/servicenowInstanceOnline.png#thumbnail)

2. ServiceNow instance admin username and Password

3. ServiceNow instance user email id to assign tickets


| S. No. | Step                                   | Portal to use     | Role                    |
|--------|------------------------------------|-------------------|-------------------------|
| 1      | Configure ticketing system integration for ServiceNow     | Cloudneeti   | License Admin  |
| 2      | Configure Incident Management                            | Cloudneeti   | Subscription Owner  |
| 3      | Verify tickets created | ServiceNow    | Admin      |


### STEP 1: Configure ticketing system integration for ServiceNow or Zendesk
The following steps are required to configure Service Now ticketing system integration in the
Cloudneeti application.

License Admins will have the rights to managed configure integrations.

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

License Admins will have the rights to managed configure integrations.

1.  Select **Ticketing System** from dropdown (ServiceNow, ZenDesk).

2.  Select **Frequency of Ticket Creation**

3.  Select **All Accounts** or **Selected accounts**

4.  Select **Included Accounts**

5.  Select **Azure, Office365 or AWS**

6.  Select items in **Available Categories** section and click (6) to allocate
    High Priority or move them back to Available Categories. [Reference for Cloudneeti priority to ServiceNow ticket Impact, Urgency and Priority](../../administratorGuide/serviceNowIntegration/#priority-mapping)

7.  Select items in **Available Categories** section and click (7) to allocate
    Medium Priority or move them back to Available Categories

8.  Select items in **Available Categories** section and click (8) to allocate
    Low Priority or move them back to Available Categories

9.  Click **Save**
    
    ![Incident Management (Ticketing)](.././images/administratorGuide/Incident_Management_Ticketing.png#thumbnail)


### STEP 3: Verify tickets created
Tickets are created for non-compliant resources after every successful scan.

#### Sample ServiceNow Incident

1. Login to ServiceNow instance and click on **Incidents** to see the list

![ServiceNow integration](.././images/administratorGuide/ServiceNow_IncidentList.png#thumbnail)

2. Verify details for selected incident

![ServiceNow integration](.././images/administratorGuide/ServiceNow_Incident.png#thumbnail)

#### Sample ServiceNow Problem

1. Copy **Problem id** (2) related to Incident is available in **Releated Records** (1)

![ServiceNow integration](.././images/administratorGuide/ServiceNow_Incident_RelatedProblems.png#thumbnail)

2. Search Problem id in Problem, within Problem all related Problem Tasks are listed

![ServiceNow integration](.././images/administratorGuide/ServiceNowProblem.png#thumbnail)


#### Sample ServiceNow Problem Task

1. **Problem Task** has **Analysis** section

![ServiceNow integration](.././images/administratorGuide/ServiceNow_ProblemTask_Analysis.png#thumbnail)

2. Analysis section has Cloudneeti License, Account and failed policy details within **Workaround**

![ServiceNow integration](.././images/administratorGuide/ServiceNow_ProblemTask_LicenseDetails.png#thumbnail)



## Annexture


### Priority mapping

Cloudneeti Category Priority to ServiceNow Ticket Impact, Urgency and Priority. [ServiceNow priority lookup link](https://docs.servicenow.com/bundle/newyork-it-service-management/page/product/incident-management/task/def-prio-lookup-rules.html) 

| **Cloudneeti Category Priority** | **ServiceNow Ticket Impact** | **ServiceNow Ticket Urgency** | **ServiceNow Ticket Priority** |
|-----------------------------------------------|------------------------------|-------------------------------|--------------------------------|
| High                                          | 2                            | 1                             | 2                              |
| Medium                                        | 1                            | 3                             | 3                              |
| Low                                           | 3                            | 3                             | 4                              |
