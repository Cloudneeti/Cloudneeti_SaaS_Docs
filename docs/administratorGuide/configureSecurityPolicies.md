# Configure Security Policies

## 1.Overview

**Policy selection**
Cloudneeti provides customization in terms of policy selection at a license and account level, where selected policies can be disabled. 

By default, all the security policies are enabled. Administrator may disable specific security policies by expanding categories and switching off the policies. Data will not be collected for off policies. 

Security policies configuration can be done to switch on/of for data collection, updated configuration will be effective from next scan.

**Policy Remediation**
Associated service principal should have "Resource Policy Contributor" role at subscription level for remediation.

**Enable Policy Remediation** : This initiates remediation policy creation.

**Disable Policy Remediation** : This initiates remediation policy deletion.

## 2. Configuring security policies

1.	On Cloudneeti portal, navigate to settings
2.	Select desired License and Account 
3.	Click on configure button to select “Configure security policies”
4.	A filter to see only "Policy Enabled" (On), "Policy Disbaled" (Off) and "Remediation Available" (the policies which are available for remediation) can be used.
    
    ![Configure Policy Filer](.././images/configureSecurityPolicies/ConfigurePolicies_Filter.png#thumbnail)
    
5. Update policy status and policy remediation status.

    ![Configure Policy Filer](.././images/configureSecurityPolicies/Configure.png#thumbnail)

6. Click on Save and confirm by hitting “Yes Please” on confirmation message box.

    ![Configure Policy Filer](.././images/configureSecurityPolicies/ConfigurePolicies_ConfirmationBox.png#thumbnail)
    

7. Updated configuration for security policy will be effective from next scan. 
    a. Policy Selection 
        ![Configure Policy Filer](.././images/configureSecurityPolicies/PolicyUpdateSuccess.png#thumbnail)
    
    b. Policy Remediation
       ![Configure Policy Filer](.././images/configureSecurityPolicies/Remediation_PolicyCreation_Initiated.png#thumbnail)