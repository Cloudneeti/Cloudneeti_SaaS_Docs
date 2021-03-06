Utilization Dashboard
=====================

Utilization dashboard page provides utilization visibility to the consumed resource or worload capacity. 

Zscaler CSPM product subscription fees are based on an average total number of resources/workloads in
onboarded cloud accounts (Azure subscription, AWS accounts) and number of users in Office 365 subscription. Please follow the steps below to know resource and user count. 

Utilization visibility of resources at the License level
----------------------------------------------------

Please follow the below steps to determine the average total number of resources aggregated at a license level for all Cloud Accounts within selected License.

Login to Zscaler CSPM portal as License Admin.

1. Navigate to **Utilization** (1)

2. Select **License** (2)

    ![Azure Resources](.././images/utilizationDashboard/utilization.png#thumbnail)

3. Select **Time Range** (1) and **Date** (2)

    ![Azure Resources](.././images/utilizationDashboard/license_level.png#thumbnail)

4. Aggregated resource view is shown for all cloud accounts within a selected License.
    - Resource Trend 
    - Aggregated resource summary 

   ![Azure Resources](.././images/utilizationDashboard/license_level_avg.png#thumbnail)


Utilization visibility of resources for a Cloud Service at the License level
---------------------------------------------------------------------------

Please follow the below steps to determine the average total number of resources aggregated at a license level for all Cloud Accounts within selected License and Cloud Service.

Login to Zscaler CSPM portal as License Admin.

1. Navigate to **Utilization** (1)

2. Select **License** (2) and **Cloud Service** (3)

    ![Azure Resources](.././images/utilizationDashboard/csp_level_nav.png#thumbnail)

3. Select **Time Range** (1) and **Date** (2)

4. Aggregated resource view is shown for all cloud accounts within a selected License.
    - Resource Trend 
    - Aggregated resource summary for chosen Cloud Service
    - Aggregated resource summary Cloud Service average for CLoud Accounts

    ![Azure Resources](.././images/utilizationDashboard/csp_level.png#thumbnail)


Utilization visibility for the Cloud Account (Utilization based on resources)
----------------------------------------------------------------------------
Please follow the below steps to determine the average total number of resources for a selected Cloud Account.

Login to Zscaler CSPM portal as License Admin.

1. Navigate to **Utilization** (1)

2. Select **License** (2), **Cloud Service** (3) and **Account Name**

    ![Azure Resources](.././images/utilizationDashboard/account_level_nav.png#thumbnail)

3. Select **Time Range** (1) and **Date** (2)

4. Resource view is shown for a selected cloud account
    - Daily Resource Trend 
    - Resource summary per day for chosen Cloud Account

    ![Azure Resources](.././images/utilizationDashboard/account_level.png#thumbnail)

      

Utilization visibility for the Cloud Account (Utilization based on workloads) 
----------------------------------------------------------------------------
Please follow the below steps to determine the average total number of workloads for a selected Cloud Account.

Login to Zscaler CSPM portal as License Admin.

1. Navigate to **Utilization** (1)

2. Select **License** (2), **Cloud Service** (3) and **Account Name**

    ![Azure Resources](.././images/utilizationDashboard/account_level_nav_workload.png#thumbnail)

3. Select **Cloud Service** 

    ![Azure Resources](.././images/utilizationDashboard/account_level_filter1.png#thumbnail)

4. Select **Account Name**

    ![Azure Resources](.././images/utilizationDashboard/account_level_filter2.png#thumbnail)

5. Select **Time Range** 

    ![Azure Resources](.././images/utilizationDashboard/account_level_filter4.png#thumbnail)

6. Select **Date** 

    ![Azure Resources](.././images/utilizationDashboard/account_level_filter5.png#thumbnail)

7. Resource counts across Workload types for a selected cloud account for selected Time Range and Date appears
    - Daily Workload Utilization Trend 
    - Workload summary per day for chosen Cloud Account

    ![Azure Resources](.././images/utilizationDashboard/account_level_workload.png#thumbnail)

      
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
