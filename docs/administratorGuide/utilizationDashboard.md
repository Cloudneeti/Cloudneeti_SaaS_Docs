Utilization Dashboard
=====================

Utilization dashboard page provides utilization visibility to the consumed resource capacity. 

Zscaler CSPM product subscription fees are based on an average total number of workloads in
onboarded cloud accounts (Azure subscription, AWS accounts) and number of users in Office 365 subscription. Please follow the steps below to know resource and user count. 

Utilization visibility for a Cloud Account 
--------------------------------------------
Please follow the below steps to determine the average total number of resources for a selected Cloud Account.

Login to Zscaler CSPM portal as License Admin.

1. Navigate to **Utilization** (1)

2. Select **License** (2), **Cloud Service** (3) and **Account Name**

    ![Azure Resources](.././images/utilizationDashboard/account_level_nav.png#thumbnail)

3. Select **Cloud Service** 

    ![Azure Resources](.././images/utilizationDashboard/account_level_filter1.png#thumbnail)

4. Select **Account Name**

    ![Azure Resources](.././images/utilizationDashboard/account_level_filter2.png#thumbnail)

5. Select **Time Range** 

    ![Azure Resources](.././images/utilizationDashboard/account_level_filter4.png#thumbnail)

6. Select **Date** 

    ![Azure Resources](.././images/utilizationDashboard/account_level_filter5.png#thumbnail)

7. Resource counts across Workload types for a selected cloud account for selected Time Range and Date appears
    - Workload Trend 
    - Workload summary per account for chosen Cloud Service

    ![Azure Resources](.././images/utilizationDashboard/account_level.png#thumbnail)

      
Utilization visibility for Office 365 Account 
---------------------------------------------
Please follow the below steps to determine the average total number of resources for a selected Cloud Account of type Office 365.

Login to Zscaler CSPM portal as License Admin.

1. Navigate to **Utilization** (1) and **SaaS** (2) tab

2. Select **License** (3) 

    ![Azure Resources](.././images/utilizationDashboard/saas_nav.png#thumbnail)

3. Select **Time Range** and **Date** (1)

4. **Average recorded users** and **Subscribed** count is displayed for the chosen time range, aggregated for all Office 365 accounts under the selected License

    ![Azure Resources](.././images/utilizationDashboard/saas.png#thumbnail)

5. Select **Cloud Account** to see **Average recorded users** and **Subscribed** count for the chosen time range,

    ![Azure Resources](.././images/utilizationDashboard/saas_acc.png#thumbnail)
