# Security policies

By default, all the security policies are enabled. Update Global Policies allows selection of security policies that should be excluded from data collection. Exclusion can be done at license and cloud account level

**License Level** Security policy will be applicable for the all accounts associated to license selected

**Cloud Account Level** Security policy will be applicable for the cloud account selected



## License level 

License Admins and Account Admins will have the rights to manage License users and Account users.

1. Click **Configurations**

2. Navigate to **Security Policies** 

3. Select **License level**

4. Select **License** from dropdown options

5. Select Azure Policies, Office365 policies or AWS Policies

6. Select single or multiple security policies from the left section

7. Click on icons to move security policies to the right section Excluded
    Policies and back

8. Click Save
	
![Update_Global_Policies](.././images/administratorGuide/Update_Global_Policies.png#thumbnail)


## Cloud account level 

Configure security policies allows users to enable and disable data collection at a security policy level for this specific Cloud Account.


### Configure Security Policies

1.  Navigate to **Security Policies** in **Configurations**

2.  Select **Account Level** (1)

3.  Select **License** (2) and **Cloud Account** (3) from dropdown options 

4.  Select **YES** to enable data collection for this security policy or **NO**
    to disable data collection (4)

5.  Select **ENABLE** to enable auto-remediations for this security policy or
    **DISBALE** to disable auto-remediations (5)

6. Click **Save** (6)
	
    ![Manage Accounts](.././images/administratorGuide/Policy_Configurations.png#thumbnail)


### Configure Security Policies Using CSV File

1.  Navigate to **Security Policies** in **Configurations**

2.  Select **Account Level** (1)

3.  Select **License** (2) and **Cloud Account** (3) from dropdown options 

4.  Click **Export Policies** (4) to get chosen account's policies csv file.

5. Update column **Policy_Enabled** in csv file, enter **TRUE** to enable data collection for this security policy or **FALSE** to disable data collection.

6. Update column **Remediation_Enabled** in csv file, enter **TRUE** to enable auto-remediation for this security policy or **FALSE** to disable auto-remediation.

7. Click **Import Policies** to upload updated csv file.

5. Click **Save** (6)
	
    ![Manage Accounts](.././images/administratorGuide/Security_Policy_Import_Export.png#thumbnail)




