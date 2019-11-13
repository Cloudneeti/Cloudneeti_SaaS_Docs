Remediation of Azure Resources that are non-compliant to a security policy can be put into a compliant state through remediation. Cloudneeti provides below ways to remediate

**1. [Guided remediation](.././azureSubscriptionRemediation/#guided-remediation)**

**2. [Quick Wins](.././azureSubscriptionRemediation/#quick-wins)**

**3. [Auto Remediation](.././azureSubscriptionRemediation/#auto-remediation)**

Guided Remediation
------------------
Every [security policy](../../userGuide/securityPolicies/) has **Remediation Procedure** (1), can be  avaiable for Azure Console (2) and Azure Command Line Interface (3). Using **Remediation Procedure** (1) non-complaint resources (4) can be put in compliant mode.

![Remediation of Azure Resources](.././images/cloudneetiRemediation/Azure_Guided_Remediation.png#thumbnail_1)


Quick Wins 
--------------------
Remediation policies from **Azure Security center, Logging and Monitoring** and **Storage and Databases** can be done using quick wins scripts. These scripts will update configurations and settings to make the Cloud account compliant for listed policies.

| **Configuration script**       | **Category**                  | **Number of policies remediated** |
|--------------------------------|-------------------------------|-----------------------------------|
| Configure ASC policies         | Azure – Security Center       | 120                               |
| Configure Activity Alerts      | Azure - Logging and Auditing  | 10                                |
| Configure Activity Log Profile | Azure - Logging and Auditing  | 5                                 |
| Configure Storage Account      | Azure - Storage and Databases | 2                                 |

### Prerequisite 

Access Needed on Subscription: **Contributor**

### Configure ASC policies 

Configure ASC policies to remediate policies [listed here ](.././azureSubscriptionRemediation/#configure-azure-security-center-policies-azure-security-center) using below steps.

#### Category Subscription Governance Policies [Increase compliance Score 30-50%]

#### Remediation Steps

1.  Login to Azure portal

2.  Open Cloud shell in PowerShell mode

3.  Download configuration script

    <pre>
	    <code>```
          wget https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/subscription-governance/configure-ASCPolicies.ps1 -O configure-ASCPolicies.ps1
        ```
        </code>
	</pre>

4.  Switch directory
    
    <pre>
	    <code>```
            cd $user
        ```</code>
	</pre>

5.  Execute script
    <pre>
	    <code>```
            .\configure-ASCPolicies.ps1 -SubscriptionId <subscriptionId>
    ```</code>
	</pre>

### Configure Activity Alerts 

Configure Activity Alerts to remediate policies [listed here](.././azureSubscriptionRemediation/#configure-activity-alerts-logging-and-auditing) using below steps.

#### Category: Logging and Auditing [Increase compliance score by 5-10%]

##### Remediation Steps

1.  Login to Azure portal

2.  Open Cloud shell in PowerShell mode

3.  Download configuration script

    <pre>
	    <code>```
            wget https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/subscription-governance/configure-ActivityAlerts.ps1 -O configure-ActivityAlerts.ps1           
            ```</code>
    </pre>

4.  Switch directory
    
    <pre>
	    <code>```
            cd $user 
        ```</code>
    </pre>

5.  Execute script
    
    <pre>
	    <code>```
        ./configure-ActivityAlerts.ps1 `
        -SubscriptionId <subscription Id> `
        -ResourceGroupName <Resource Group Name> `
        -ReceiverEmailIds <emailid1,emailid2>
        ```</code>
    </pre>

6.  OR In case of custom tags, script can be executed using below options. List of all tags are given in the documentation examples inside the script

    <pre>
	    <code>```
        ./configure-ActivityAlerts.ps1 `
        -SubscriptionId <subscription Id> `
        -ResourceGroupName <Resource Group Name> `
        -ReceiverEmailIds <emailid1,emailid2> `
        -ProjectOwnerTag <Owner> `
        -CostCenterTag <CostCenter>
        ```</code>
    </pre>

### Configure Activity Log Profile

Configure Activity Log to remediate policies [listed here](.././azureSubscriptionRemediation/#configure-activity-log-profile-logging-and-auditing) using below steps.

#### Category: Logging and Auditing

#### Remediation Steps

1.  Login to Azure portal

2.  Open Cloud shell in PowerShell mode

3.  Download configuration script
    <pre>
	    <code>```   
            wget https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/subscription-governance/configure-ActivityLogProfile.ps1 -O configure-ActivityLogProfile.ps1
        ```</code>
    </pre>

4.  Switch directory

    <pre>
	    <code>```
            cd $user
        ```</code>
    </pre>

5.  Execute script

    <pre>
	    <code>```        
        .\configure-ActivityLogProfile.ps1 `
        -SubscriptionId <SubscriptionId> `
        -ResourceGroupName <ResourceGroupName> `
        -StorageAccountName <StorageAccountName> `
        -StorageAccountSku <StorageAccountSku> `
        -Location <Location>
        ```</code>
    </pre>

6.  OR In case of custom tags, script can be executed using below options. List of all tags are
    given in the documentation examples inside the script
    <pre>
    <code>```  
    .\configure-ActivityLogProfile.ps1 `
    -SubscriptionId <SubscriptionId> `
    -ResourceGroupName <ResourceGroupName> `
    -StorageAccountName <StorageAccountName> `
    -StorageAccountSku <StorageAccountSku> `
    -Location <Location> `
    -ApplicationOwnerTag <ApplicationOwnerTag> `
    -ServiceNameTag <ServiceNameTag> `
    -BusinessUnitTag <BusinessUnitTag> `
    -ProjectOwnerTag <ProjectOwnerTag> `
    -ApplicationTag <ApplicationTag> `
    -DepartmentTag <DepartmentTag> `
    -ProjectNameTag <ProjectNameTag> `
    -CostCenterTag <CostCenterTag> `
    -DataProfileTag <DataProfileTag>
    ```</code>
    </pre>

### Configure Storage Account


Configure Storage Account to remediate policies [listed here ](.././azureSubscriptionRemediation/#configure-activity-alerts-logging-and-auditing) using below steps.

#### Category: Storage and Databases

#### Remediation Steps

1.  Login to Azure portal

2.  Open Cloud shell in PowerShell mode

3.  Download configuration script
        <pre>
            <code>```
               wget https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/subscription-governance/configure-ASCPolicies.ps1%20-O%20configure-ASCPolicies.ps1 -O configure-StorageAccounts.ps1
             ```</code>
        </pre>

4.  Switch directory
        <pre>
	        <code>```
                   cd $user
             ```</code>
        </pre>


5. Execute script to configure https and geo replication
        <pre>
	        <code>```
                .\configure-StorageAccounts.ps1 -SubscriptionId <subscriptionId> -All
            ```</code>
        </pre>


    OR To enable only https on storage account, 
            <pre>
                <code>```
                    .\configure-StorageAccounts.ps1 -SubscriptionId <subscriptionId> -EnableHttps
                ```</code>
            </pre>

    OR To enable only geo-replication setting,
            <pre>
                <code>```
                    .\configure-StorageAccounts.ps1 -SubscriptionId <subscriptionId> -EnableGeoReplication
                ```</code>
            </pre>

    In case few storage accounts to be excluded then provide **ExcludeStorageAccounts** parameter with comma separated storage account names.
        <pre>
            <code>```
            .\configure-StorageAccounts.ps1 `
            -SubscriptionId <subscriptionId> `
            -ExcludeStorageAccounts <excludeStorageAccounts> `
            -All
            ```</code>
        </pre>


Auto Remediation
----------------
Remediation is accomplished by instructing Security Policy to update the configuration of your existing resources and is effective for new resource deployment. This article shows the steps needed to understand and accomplish remediation with Cloudneeti.  

![Remediation of Azure Resources](.././images/cloudneetiRemediation/Azure_Remediation_Steps.png#thumbnail_1)

1.	**Assign permission to Cloudneeti Application** includes giving the Cloudneeti application access to the Azure subscription, assigning a Resource Policy Contributor (Preview)

2.	**Configure Policy Remediation** includes configuring security policies in the respective cloud account, upon enabling policy remediation triggers creation of policy assignments in Azure subscription.

3.	**Assign permissions to Assignments** includes assigning required roles to policy assignments in Azure. 

4.	**Initiate Remediation** includes triggering remediation feature to remediate resources that are non-compliant to a security policy.

5.	**Verify results** includes verifying policy result post next data scan on Cloudneeti.


| **Step**                               | **Product**      | **Role**                     |
|----------------------------------------|------------------|------------------------------|
| Assign permission to Service Principal | Azure Portal     | Subscription Owner           |
| Configure Policy Remediation           | Cloudneeti       | License Admin/ Account Admin |
| Assign permissions to Assignments      | Azure CloudShell | Subscription Owner           |
| Initiate Remediation                   | Cloudneeti       | License Admin/ Account Admin |
| Verify results                         | Cloudneeti       | License Admin/ Account Admin |


### Required Roles
One or more people with the following roles are required to complete Azure Remediation process.

| **Pre-requisite Role**      | **Portal to use**      |
|-----------------------------|------------------------|
| License Admin/Account Admin | Cloudneeti application |
| Subscription Owner          | Microsoft Azure        |


* Enabling policy remediation and initializing remediation requires the logged in user to be assigned the **License Admin** role in the Cloudneeti application.

* The Microsoft Azure **Subscription Owner** role is required for providing Cloudneeti application required access to the Subscription and Assignments in Azure.

### Required Permissions

The **Cloudneeti Application registered** while onboarding the Azure Account to Cloudneeti needs to be granted a Resource Policy Contributor (Preview) role. 

| **Information**                   | **Portal to use** | **Role**                                                                                                                                                                | **Step** |
|-----------------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Registered Cloudneeti Application | Microsoft Azure   | Resource Policy Contributor (Preview) [Refer here](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#resource-policy-contributor-preview) | STEP 1   |
| Azure Assignments                 | Microsoft Azure   | Roles as per policies enabled for remediation [Refer here](../azureSubscriptionRemediation/#roles-as-per-policies-enabled-for-remediation) | STEP 4   |


### STEP 1: Assign permission to Service Principal
Login to [Azure Portal](https://portal.azure.com/)  with Subscription Owner role.

1.	Click **Subscriptions in primary menu** (1)
2.	Select desired **Subscription**
3.	Click on **Access Control (IAM)** (2)
4.	Click **Add** (3)
5.	Select **Add role assignment** (4)
6.	Select **Resource Policy Contributor (Preview)** role (5)
7.	Select **Cloudneeti Application** (6)
8.	**Save** (7)

    ![STEP 1: Assign permission to Service Principal](.././images/cloudneetiRemediation/Azure_Remediation_Step1.png#thumbnail_1)

### STEP 2: Configure remediation policies
Login to Cloudneeti portal with **License Admin** role 

1.	Select desired **License** (1) and **Cloud Account** (2)
2.	Click **Configure** 
3.	Select **Configure security policies**

    ![STEP 2: Configure remediation policies](.././images/cloudneetiRemediation/Azure_Remediation_Step2.png#thumbnail_1)

4. Select **Remediation available** in filter (1)

5. **Enable** policies for remediation (2) (3)

6. Click **Save** (4)

    ![STEP 2: Configure remediation policies](.././images/cloudneetiRemediation/Azure_Remediation_Step2.1.png#thumbnail_1)

7. Confirm by hitting “Yes Please” on confirmation message box.

    ![STEP 2: Configure remediation policies](.././images/cloudneetiRemediation/Azure_Remediation_Step2.2.png#thumbnail_1)

**Note:**

* If Resource Policy Contributor (Preview) role is not assigned as mentioned in step1, enabling policy remediation will fail. Email notification to configured email ids will be sent.

* Assigning **Resource Policy Contributor (Preview)** role to Cloudneeti Application in Azure is prerequisite for this step.

### STEP 3: Assigning roles to MSI generated for remediation policies
Login to [Azure Portal](https://portal.azure.com/) with **Subscription Owner** role.

1. Open **Cloud Shell**

2. Choose **PowerShell** from shell drop 

    ![STEP 3: Assigning roles to MSI generated for remediation policies](.././images/cloudneetiRemediation/Azure_Remediation_Step3.png#thumbnail_1)

3. Download Assign-RolesToRemediationPolicy script

        wget https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/Assign-RolesToRemediationPolicy.ps1 -O Assign-RolesToRemediationPolicy.ps1

4.	Switch to the User directory

        cd $user

5.	Run role assignment script with inline parameters
        
        ./Assign-RolesToRemediationPolicy.ps1 `
        -azureActiveDirectoryId <Azure active directory Id> `
        -subscriptionId <Subscription Id>


Azure will start evaluation of resources related to enabled policies.

**Note:**

* Azure policy framework takes some time to evaluate the state of the resources internally. It may vary depending on the number of resources present in Azure subscription.

* Perform this step whenever user adds new or configures existing remediation policies.

### STEP 4: Initiate Remediation
Cloudneeti supports two ways to remediate non-compliant resources.

**Auto Remediation [for new resources]**- Cloudneeti remediation functionality make use of policy framework provided by Azure. Once we enable the remediation policies in Cloudneeti, the new resources get remediated at the time of deployment. It means all the resource are by default remediated. 

**Manually Triggered [for existing resources]**- To remediate all the existing non-compliant resources, follow below procedure.

#### Manually Triggered [for existing resources]
Login to Cloudneeti portal with **License Admin** role

1. Select desired **License** (1) and **Cloud Account** (2)

2. Click **Cloud Security Best Practices** (3)

3. Click **Remediate** (4)
    
    ![Manually Triggered [for existing resources]](.././images/cloudneetiRemediation/Manually_Triggered1.png#thumbnail_1)

4. All remediation enabled policies will appear. If the selection checkbox is disable state please check all prerequisites are met.

5. Select desired **policy/policies** (1) (2)

6. Click **Remediate Now** (3)

    ![Manually Triggered [for existing resources]](.././images/cloudneetiRemediation/Manually_Triggered2.png#thumbnail_1)

7. Remediation will change the configuration for resources to make them compliant with the policy with deploy if not exist.

    ![Manually Triggered [for existing resources]](.././images/cloudneetiRemediation/Manually_Triggered3.png#thumbnail_1)

 **Note:**

*	In case Azure evaluation is not complete a message will appear “Evaluation in progress, please try after sometime”

*	If Azure policy evaluation is done, the remediation process for selected policies will start. It will take some time to change resource configuration as per policy. This will change configuration for existing resources.

### STEP 5: Verify Resource Remediation
On remediation of non-compliant resources using manually triggered or auto-remediation will not show the updated resource configuration in Cloudneeti immediately. Verification of latest resource configurations can be done after next scan in the Cloudneeti portal. To get the latest configuration perform an on-demand re-scan the in Cloudneeti portal using below steps,

Login to Cloudneeti portal with **License Admin** role

1.	Select desired **License** (1) and **Cloud Account** (2)

2.	Click **Configure** (3)

3.	Select **Re-scan** (4)

    ![STEP 5: Verify Resource Remediation](.././images/cloudneetiRemediation/Azure_Remediation_Step5.1.png#thumbnail_1)

4. It will take a few minutes to scan and process data. On Dashboards **Last Scanned On** will be updated once data scan and processing is done.

5. Verify data on **Dashboard**

    ![STEP 5: Verify Resource Remediation](.././images/cloudneetiRemediation/Azure_Remediation_Step5.2.png#thumbnail_1)

## Decommission of remediation
To decommission the remediation functionality in Azure subscription,

**Disable all the remediation policies**- Azure account security policy remediation functionality can be disabled from Cloudneeti portal. On disabling the remediation policies stops the auto-remediation of new resources whenever deployed.

**Remove Resource Policy Contributor (Preview) role** access of Cloudneeti application from the subscription.

### 1. Disable Remediation policies
Login to Cloudneeti portal with **License Admin** role

1. Select desired License and Account 

2. Click **Configure**

3. Select **Configure security policies**

    ![Disable Remediation policies](.././images/cloudneetiRemediation/Azure_Remediation_Step5.3.png#thumbnail_1)

4. Select **Remediation Available** in filter to see only the policies with remediation available.

5. Disable the policy remediation 

6. Click **Save**

    ![Disable Remediation policies](.././images/cloudneetiRemediation/Azure_Remediation_Step5.4.png#thumbnail_1)

**Note:**

* Disabling remediation of security policies does not immediately effective, it will take some time to delete internal assignment present in Azure policy framework.

* The resource configuration updated during remediation will remain the same after disabling the remediation policies.

### 2. Remove “Policy Resource Contributor (Preview)” access

1. Click **Subscriptions** in primary menu (1)

2. Select desired **Subscription**

3. Click on **Access Control (IAM)** (2)

4. Select **Roles** tab

5. Select **Resource Policy Contributor (Preview)**

    ![Remove “Policy Resource Contributor (Preview)” access](.././images/cloudneetiRemediation/Azure_Remediation_Step5.5.png#thumbnail_1)

6. Select **Cloudneeti Application** (1)

7. Click **Remove** (2)

    ![Remove “Policy Resource Contributor (Preview)” access](.././images/cloudneetiRemediation/Azure_Remediation_Step5.6.png#thumbnail_1)

## Annexure
### Roles as per policies enabled for remediation

| **Policy-Id** | **Information**   | **Portal to use** | **Role**                                         | **Step** |
|---------------|-------------------|-------------------|--------------------------------------------------|----------|
| **1300.8**    | Azure Assignments | Microsoft Azure   | Network Contributor                              | STEP 4   |
| **1600.2**    | Azure Assignments | Microsoft Azure   | SQL DB Contributor                               | STEP 4   |
| **1600.6**    | Azure Assignments | Microsoft Azure   | SQL Security Manager                             | STEP 4   |
| **1600.23**   | Azure Assignments | Microsoft Azure   | SQL Security Manager Storage Account Contributor | STEP 4   |

Remediation policy list
-----------------------

### Configure Azure Security Center policies : Azure - Security Center

| **Policy Id** | **Policy Title**                                                                                                      | **Category**            |
|---------------|-----------------------------------------------------------------------------------------------------------------------|-------------------------|
| 2100.1        | Ensure that AAD authentication in Service Fabric is set to enabled in ASC                                             | Azure - Security Center |
| 2100.101      | Ensure that required diagnostic logs retention period in days for Batch accounts is set in ASC                        | Azure - Security Center |
| 2100.102      | Ensure that required diagnostic logs retention period in days in Azure Search service is set in ASC                   | Azure - Security Center |
| 2100.103      | Ensure that required diagnostic logs retention period in days in Data Lake Analytics is set in ASC                    | Azure - Security Center |
| 2100.104      | Ensure that required diagnostic logs retention period in days in Data Lake Store accounts is set in ASC               | Azure - Security Center |
| 2100.105      | Ensure that required diagnostic logs retention period in days in Event Hub accounts is set in ASC                     | Azure - Security Center |
| 2100.106      | Ensure that required diagnostic logs retention period in days in IoT Hub accounts is set in ASC                       | Azure - Security Center |
| 2100.107      | Ensure that required diagnostic logs retention period in days in Key Vault vaults is set in ASC                       | Azure - Security Center |
| 2100.108      | Ensure that required diagnostic logs retention period in days in Logic Apps workflows is set in ASC                   | Azure - Security Center |
| 2100.109      | Ensure that required diagnostic logs retention period in days in Service Bus is set in ASC                            | Azure - Security Center |
| 2100.111      | Ensure that monitoring of Kubernetes Services without RBAC is enabled in ASC                                          | Azure - Security Center |
| 2100.112      | Ensure that monitoring of sensitive data is classified on SQL database is enabled in ASC                              | Azure - Security Center |
| 2100.113      | Ensure that monitoring of SQL managed instances alerts being sent to admins and subscription owners is enabled in ASC | Azure - Security Center |
| 2100.114      | Ensure that monitoring of classic storage accounts migration to ARM is enabled in ASC                                 | Azure - Security Center |
| 2100.115      | Ensure that reporting of system updates in virtual machine scale sets is enabled in ASC                               | Azure - Security Center |
| 2100.116      | Ensure that monitoring of unencrypted SQL databases is enabled in ASC                                                 | Azure - Security Center |
| 2100.117      | Ensure that monitoring of classic virtual machines is enabled in ASC                                                  | Azure - Security Center |
| 2100.118      | Ensure that OS vulnerabilities monitoring for virtual machine scale sets is enabled in ASC                            | Azure - Security Center |
| 2100.119      | Ensure that the detection of VM vulnerabilities by a Vulnerability Assessment solution is enabled in ASC              | Azure - Security Center |
| 2100.12       | Ensure that diagnostics logs in Redis Cache is set to enabled in ASC                                                  | Azure - Security Center |
| 2100.121      | Ensure that Vulnerability Assessment on your SQL servers is enabled in ASC                                            | Azure - Security Center |
| 2100.122      | Ensure that monitoring of the use of HTTPS in Web App is enabled in ASC                                               | Azure - Security Center |
| 2100.13       | Ensure that diagnostics logs in Search Service is set to enabled in ASC                                               | Azure - Security Center |
| 2100.14       | Ensure that diagnostics logs in Service Bus is set to enabled in ASC                                                  | Azure - Security Center |
| 2100.15       | Ensure that diagnostics logs in Virtual Machine Scale Sets is set to enabled in ASC                                   | Azure - Security Center |
| 2100.16       | Ensure that diagnostics logs in Stream Analytics is set to enabled in ASC                                             | Azure - Security Center |
| 2100.17       | Ensure that disable unrestricted network to storage account is set to enabled in ASC                                  | Azure - Security Center |
| 2100.18       | Ensure that monitor disk encryption is set to enabled in ASC                                                          | Azure - Security Center |
| 2100.19       | Ensure that monitor for Endpoint Protection is set to enabled in ASC                                                  | Azure - Security Center |
| 2100.2        | Ensure that AAD authentication in SQL server is set to enabled in ASC                                                 | Azure - Security Center |
| 2100.22       | Ensure that MFA is enabled for all subscription accounts with owner permissions in ASC                                | Azure - Security Center |
| 2100.23       | Ensure that MFA is enabled for all subscription accounts with read permissions in ASC                                 | Azure - Security Center |
| 2100.24       | Ensure that MFA is enabled for all subscription accounts with write permissions in ASC                                | Azure - Security Center |
| 2100.25       | Ensure that deprecated accounts is removed on subscription are set to enabled in ASC                                  | Azure - Security Center |
| 2100.26       | Ensure that deprecated accounts with owner permissions are removed from subscription is set to enabled in ASC         | Azure - Security Center |
| 2100.27       | Ensure that external accounts with owner permissions are removed from subscription is set to enabled in ASC           | Azure - Security Center |
| 2100.28       | Ensure that external accounts with read permissions are removed from subscription is set to enabled in ASC            | Azure - Security Center |
| 2100.29       | Ensure that external accounts with write permissions are removed from subscription is set to enabled in ASC           | Azure - Security Center |
| 2100.3        | Ensure that monitor of Adaptive Application whitelisting is set to enabled in ASC                                     | Azure - Security Center |
| 2100.31       | Ensure that metric alerts in Batch account is set to enabled in ASC                                                   | Azure - Security Center |
| 2100.32       | Ensure that namespace authorization rules in service bus is set to enabled in ASC                                     | Azure - Security Center |
| 2100.33       | Ensure that monitoring of network security groups is set to enabled in ASC                                            | Azure - Security Center |
| 2100.34       | Ensure that next generation firewall is set to enabled in ASC                                                         | Azure - Security Center |
| 2100.35       | Ensure that monitoring of OS vulnerabilities is set to enabled in ASC                                                 | Azure - Security Center |
| 2100.36       | Ensure that secure transfer to storage account is set to enabled in ASC                                               | Azure - Security Center |
| 2100.37       | Ensure that security contact email is provided in ASC                                                                 | Azure - Security Center |
| 2100.38       | Ensure that phone number is provided in ASC                                                                           | Azure - Security Center |
| 2100.39       | Ensure that alert notification is set to On in ASC                                                                    | Azure - Security Center |
| 2100.4        | Ensure that Automatic Provisioning of monitoring agent is set to On in ASC                                            | Azure - Security Center |
| 2100.41       | Ensure that monitoring of SQL auditing is set to enabled in ASC                                                       | Azure - Security Center |
| 2100.42       | Ensure that SqlDb Vulnerability Assesment is set to enabled in ASC                                                    | Azure - Security Center |
| 2100.43       | Ensure that monitor SQL encryption is set to enabled in ASC                                                           | Azure - Security Center |
| 2100.44       | Ensure that monitor storage blob encryption is set to enabled in ASC                                                  | Azure - Security Center |
| 2100.45       | Ensure that monitor system updates is set to enabled in ASC                                                           | Azure - Security Center |
| 2100.46       | Ensure that in ASC standard tier is selected                                                                          | Azure - Security Center |
| 2100.47       | Ensure that vulnerability assessment is set to enabled in ASC                                                         | Azure - Security Center |
| 2100.48       | Ensure that web application firewall is set to enabled in ASC                                                         | Azure - Security Center |
| 2100.49       | Ensure that monitoring of permissive network access to app-services is enabled in ASC                                 | Azure - Security Center |
| 2100.5        | Ensure that Cluster Protection level in Service Fabric is set to enabled in ASC                                       | Azure - Security Center |
| 2100.51       | Ensure that monitoring of SQL managed server without Advanced Data Security is enabled in ASC                         | Azure - Security Center |
| 2100.53       | Ensure that all Advanced Threat Protection types on SQL server is enabled in ASC                                      | Azure - Security Center |
| 2100.54       | Ensure that monitoring of access rules in Event Hub namespaces is enabled in ASC                                      | Azure - Security Center |
| 2100.55       | Ensure that monitoring of the use of HTTPS in API app is enable in ASC                                                | Azure - Security Center |
| 2100.57       | Ensure that the Audit monitoring of SQL Servers is enabled in ASC                                                     | Azure - Security Center |
| 2100.58       | Ensure that monitoring of using built-in RBAC rules is enabled in ASC                                                 | Azure - Security Center |
| 2100.59       | Ensure that monitoring of access rules in Event Hubs is enabled in ASC                                                | Azure - Security Center |
| 2100.6        | Ensure that monitoring of Kubernetes Services without authorized IP ranges is enabled in ASC                          | Azure - Security Center |
| 2100.61       | Ensure that monitoring of Automation Account Encryption is enabled in ASC                                             | Azure - Security Center |
| 2100.63       | Ensure that monitoring of CORS restrictions for API Function is enabled in ASC                                        | Azure - Security Center |
| 2100.64       | Ensure that monitoring of CORS restrictions for API Web is enabled in ASC                                             | Azure - Security Center |
| 2100.65       | Ensure that monitoring of DDoS protection for virtual network is enabled in ASC                                       | Azure - Security Center |
| 2100.66       | Ensure that monitoring of diagnostics logs in selective app services is enabled in ASC                                | Azure - Security Center |
| 2100.67       | Ensure that monitoring of diagnostic logs in IoT Hubs is enabled in ASC                                               | Azure - Security Center |
| 2100.68       | Ensure that endpoint protection monitoring for virtual machine scale sets is enabled in ASC                           | Azure - Security Center |
| 2100.69       | Ensure that 'Send alerts to' is set in SQL server Advanced Data Security settings is enabled in ASC                   | Azure - Security Center |
| 2100.7        | Ensure that diagnostics logs in Data Lake Analytics is set to enabled in ASC                                          | Azure - Security Center |
| 2100.71       | Ensure that IP Forwarding monitoring on virtual machines is disabled in ASC                                           | Azure - Security Center |
| 2100.72       | Ensure that monitoring of network just In time access is enabled in ASC                                               | Azure - Security Center |
| 2100.73       | Ensure that monitoring of Open Management Ports on virtual machines is enabled in ASC                                 | Azure - Security Center |
| 2100.74       | Ensure that monitoring of IP restrictions for API App is enabled in ASC                                               | Azure - Security Center |
| 2100.75       | Ensure that monitoring of IP restrictions for Function App is enabled in ASC                                          | Azure - Security Center |
| 2100.76       | Ensure that monitoring of IP restrictions for Web App is enabled in ASC                                               | Azure - Security Center |
| 2100.77       | Ensure that monitoring of diagnostics logs in App Services is enabled in ASC                                          | Azure - Security Center |
| 2100.78       | Ensure that monitoring of web sockets for API App is enabled in ASC                                                   | Azure - Security Center |
| 2100.79       | Ensure that monitoring of web sockets for Function App is enabled in ASC                                              | Azure - Security Center |
| 2100.8        | Ensure that diagnostics logs in Data Lake Store is set to enabled in ASC                                              | Azure - Security Center |
| 2100.81       | Ensure that monitoring of Endpoint Protection is enabled in ASC                                                       | Azure - Security Center |
| 2100.82       | Ensure that monitoring of custom domain use in API App is enabled in ASC                                              | Azure - Security Center |
| 2100.83       | Ensure that monitoring of custom domain use in Function App is enabled in ASC                                         | Azure - Security Center |
| 2100.84       | Ensure that monitoring of custom domain use in Web App is enabled in ASC                                              | Azure - Security Center |
| 2100.85       | Ensure that monitoring of .Net version in API App is enabled in ASC                                                   | Azure - Security Center |
| 2100.86       | Ensure that monitoring of .Net version in Web App is enabled in ASC                                                   | Azure - Security Center |
| 2100.87       | Ensure that monitoring of Java version in API App is enabled in ASC                                                   | Azure - Security Center |
| 2100.88       | Ensure that monitoring of Java version in web app is enabled in ASC                                                   | Azure - Security Center |
| 2100.89       | Ensure that monitoring of Node.js version in Web App is enabled in ASC                                                | Azure - Security Center |
| 2100.9        | Ensure that diagnostics logs in Event Hub is set to enabled in ASC                                                    | Azure - Security Center |
| 2100.91       | Ensure that monitoring of PHP version in Web App is enabled in ASC                                                    | Azure - Security Center |
| 2100.92       | Ensure that monitoring of Python version in API App is enabled in ASC                                                 | Azure - Security Center |
| 2100.93       | Ensure that monitoring of Python version in Web App is enabled in ASC                                                 | Azure - Security Center |
| 2100.94       | Ensure that monitoring of Internet-facing VM for NSG traffic hardening is enabled in ASC                              | Azure - Security Center |
| 2100.95       | Ensure that monitoring of NSG for virtual machines is enabled in ASC                                                  | Azure - Security Center |
| 2100.96       | Ensure that monitoring of NSG for Subnet is enabled in ASC                                                            | Azure - Security Center |
| 2100.97       | Ensure that monitoring of Kubernetes Services without pod security policy is enabled in ASC                           | Azure - Security Center |
| 2100.98       | Ensure that monitoring of remote debugging for API App is enabled in ASC                                              | Azure - Security Center |
| 2100.99       | Ensure that monitoring of remote debugging for Function App is enabled in ASC                                         | Azure - Security Center |
| 2100.10       | Ensure that diagnostics logs in Key Vault is set to enabled in ASC                                                    | Azure - Security Center |
| 2100.100      | Ensure that monitoring of remote debugging for Web App is enabled in ASC                                              | Azure - Security Center |
| 2100.110      | Ensure that required diagnostic logs retention period in days in Stream Analytics is set in ASC                       | Azure - Security Center |
| 2100.120      | Ensure that Vulnerability Assessment on your SQL managed instances is enabled in ASC                                  | Azure - Security Center |
| 2100.16       | Ensure that diagnostics logs in Logic Apps is set to enabled in ASC                                                   | Azure - Security Center |
| 2100.30       | Ensure that JIT network access policy is set to enabled in ASC                                                        | Azure - Security Center |
| 2100.40       | Ensure that email notification is set to On to subscription owners in ASC                                             | Azure - Security Center |
| 2100.50       | Ensure that monitoring of SQL managed instances without Advanced Data Security is enabled in ASC                      | Azure - Security Center |
| 2100.52       | Ensure that all Advanced Threat Protection types on SQL managed instance is enabled in ASC                            | Azure - Security Center |
| 2100.56       | Ensure that monitoring of auditing policy Action-Groups and Actions setting is enabled in ASC                         | Azure - Security Center |
| 2100.60       | Ensure that diagnostics logs in Batch Account is set to enabled in ASC                                                | Azure - Security Center |
| 2100.62       | Ensure that monitoring of CORS restrictions for API App is enabled in ASC                                             | Azure - Security Center |
| 2100.70       | Ensure that monitoring of the use of HTTPS in function app is enabled in ASC                                          | Azure - Security Center |
| 2100.80       | Ensure that monitoring of web sockets for Web App is enabled in ASC                                                   | Azure - Security Center |
| 2100.90       | Ensure that monitoring of PHP version in the API App is enabled in ASC                                                | Azure - Security Center |

### Configure Activity Alerts : Logging and Auditing

| **Policy Id** | **Policy Title**                                                                       | **Category**                 |
|---------------|--------------------------------------------------------------------------------------------|------------------------------|
| 1900.5        | Ensure that Activity Log Alert exists for Create Policy Assignment                         | Azure - Logging and Auditing |
| 1900.6        | Ensure Activity Log Alert exists for Create or Update Network Security Group               | Azure - Logging and Auditing |
| 1900.7        | Ensure Activity Log Alert exists for Delete Network Security Group                         | Azure - Logging and Auditing |
| 1900.8        | Ensure Activity Log Alert exists for Create or Update Network Security Group Rule          | Azure - Logging and Auditing |
| 1900.9        | Ensure Activity Log Alert exists for Delete Network Security Group Rule                    | Azure - Logging and Auditing |
| 1900.10       | Ensure Activity Log Alert exists for Create or Update Security Solution                    | Azure - Logging and Auditing |
| 1900.11       | Ensure Activity Log Alert exists for Delete Security Solution                              | Azure - Logging and Auditing |
| 1900.12       | Ensure Activity Log Alert(s) have configured for Create or Update SQL Server Firewall Rule | Azure - Logging and Auditing |
| 1900.13       | Ensure Activity Log Alert exists for Delete SQL Server Firewall Rule                       | Azure - Logging and Auditing |
| 1900.14       | Ensure Activity Log Alert exists for Update Security Policy                                | Azure - Logging and Auditing |

### Configure Activity Log Profile : Logging and Auditing

| **Policy Id** | **Policy Title**                                                             | **Category**                 |
|---------------|------------------------------------------------------------------------------|------------------------------|
| 1900.3        | Ensure that a Log Profile exists for Azure Monitor                           | Azure - Logging and Auditing |
| 1900.4        | Ensure that retention period is set to 365 days or greater for Activity Logs | Azure - Logging and Auditing |
| 1900.21       | Ensure Audit Profile captures all the Activities                             | Azure - Logging and Auditing |
| 1900.22       | Ensure Log Profile captures activity logs for all Regions including global   | Azure - Logging and Auditing |
| 1900.23       | Ensure Storage Container storing activity logs is not Publicly accessible    | Azure - Logging and Auditing |


### Configure Storage Account : Storage and Databases

| **Policy Id** | **Policy Title**                                                        | **Category**                  |
|---------------|-------------------------------------------------------------------------|-------------------------------|
| 2200.10       | Ensure that 'Secure transfer required' is 'Enabled' for Storage Account | Azure - Storage and Databases |
| 2200.14       | Ensure that 'Geo-redundant' is enabled for Azure Storage                | Azure - Storage and Databases |
