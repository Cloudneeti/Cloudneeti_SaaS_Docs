# STEP 3: Enable Azure Security Center audit policies

Remediation policies from **Azure Security center, Logging and Monitoring** and **Storage and Databases** can be done using quick wins scripts. These scripts will update configurations and settings to make the cloud account compliant for the policies [listed here](../../onboardingGuide/azureQuickWins/#remediation-policy-list).

## Prerequisite 

Access Needed on Subscription: **Contributor**

Note : Please note that it is advised to have only one ASC initiative. If there are multiple initiatives created, Cloud account compliance results in Cloudneeti may vary. 

## 3.1 Configure ASC default policies 

Configure ASC policies to remediate policies [listed here ](.././azureQuickWins/#configure-azure-security-center-policies-azure-security-center) using below steps.

#### Category Subscription Governance Policies [Increase compliance Score 30-50%]

#### Configuration Steps

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

5.  Configure ASC default policies
    <pre>
	    <code>```
            .\configure-ASCPolicies.ps1 -SubscriptionId <subscriptionId>
    ```</code>
	</pre>

## 3.2 Configure ASC policies at Management Group level

Configure ASC policies to remediate policies [listed here ](.././azureQuickWins/#configure-azure-security-center-policies-azure-security-center) using below steps.

#### Category Subscription Governance Policies [Increase compliance Score 30-50%]

#### #### Configuration Steps

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

5.  Configure ASC Policies at Management Group level
        <pre>
	        <code>```
                .\configure-ASCPolicies.ps1 -EnableManagementGroup -ManagementGroupId <ManagementGroupId>
            ```</code>
	</pre>


ASC policy list
---------------

### Configure Azure Security Center policies : Azure - Security Center

| **Control No** | **Policy Title**                                                                                                      | **Category**            |
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
| 2100.41       | Ensure that monitoring of SQL auditing is set to enabled in ASC                                                       | Azure - Security Center |
| 2100.42       | Ensure that SqlDb Vulnerability Assesment is set to enabled in ASC                                                    | Azure - Security Center |
| 2100.43       | Ensure that monitor SQL encryption is set to enabled in ASC                                                           | Azure - Security Center |
| 2100.44       | Ensure that monitor storage blob encryption is set to enabled in ASC                                                  | Azure - Security Center |
| 2100.45       | Ensure that monitor system updates is set to enabled in ASC                                                           | Azure - Security Center |
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
| 2100.50       | Ensure that monitoring of SQL managed instances without Advanced Data Security is enabled in ASC                      | Azure - Security Center |
| 2100.52       | Ensure that all Advanced Threat Protection types on SQL managed instance is enabled in ASC                            | Azure - Security Center |
| 2100.56       | Ensure that monitoring of auditing policy Action-Groups and Actions setting is enabled in ASC                         | Azure - Security Center |
| 2100.60       | Ensure that diagnostics logs in Batch Account is set to enabled in ASC                                                | Azure - Security Center |
| 2100.62       | Ensure that monitoring of CORS restrictions for API App is enabled in ASC                                             | Azure - Security Center |
| 2100.70       | Ensure that monitoring of the use of HTTPS in function app is enabled in ASC                                          | Azure - Security Center |
| 2100.80       | Ensure that monitoring of web sockets for Web App is enabled in ASC                                                   | Azure - Security Center |
| 2100.90       | Ensure that monitoring of PHP version in the API App is enabled in ASC                                                | Azure - Security Center |

