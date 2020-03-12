Configuring Cloudneeti agent in Kubernetes cluster
==================================================

Prerequisites
-------------

| **Activity**                                                                                                               | **Description**                                                              |
|----------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.	Download and review **PowerShell script** for creation of the service principal | The PowerShell script is used to create a service principal in Azure Tenant AD: [Download Link.](https://github.com/Cloudneeti/docs_cloudneeti/blob/master/scripts/Create-ServicePrincipal-AzureOnboarding.ps1) |
| 2.	**Workstation**: Ensure you have the latest PowerShell version (v5 and above) | Verify PowerShell version by running the following command<br>`$PSVersionTable.PSVersion`<br>on the workstation where you will run the ServicePrincipal creation script. If PowerShell version is lower than 5, then follow this link for installation of a later version: [Download Link.](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell?view=powershell-6) |
| 3.	**Workstation:** Before executing the script, make sure there are no restrictions in running the PowerShell script  | Use this PowerShell command:<br>``Set-ExecutionPolicy ` ``<br>``-Scope Process ` ``<br>``-ExecutionPolicy Bypass``<br>PowerShell contains built-in execution policies that limit its use as an attack vector. By default, the execution policy is set to Restricted, which is the primary policy for script execution. The bypass allows for running scripts and keeps the lowered permissions isolated to just the current running process. |
| 4. **Workstation:** Install and set up kubectl to execute PowerShell commands within Cloudneeti Agent configuration script | Please follow [link](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-windows) to install and set up **kubectl**         |

STEP 1: Associate Kubernetes cluster with Cloud account in Cloudneeti
---------------------------------------------------------------------

1.  Navigate to **Configurations** and **Cloud Accounts**

    ![Associate Kubernetes](.././images/kubernetes/CN_ManageAccounts_1.png#thumbnail)

2.  Click **Configure** Accounts for the Cloud account where Kubernetes Cluster
    is to be associated.

3.  Click **Manage K8 Clusters**

    ![Associate Kubernetes](.././images/kubernetes/CN_ManageK8Cluster_2.png#thumbnail)

4.  Add **Kubernetes Cluster Name**

5.  **Save**

    ![Associate Kubernetes](.././images/kubernetes/CN_AssociateK8Cluster_3.png#thumbnail)

6.  It will download a JSON file **cloudneeti-agent-config** which will be used in
    step 2 to update agent configuration script.

    ![Associate Kubernetes](.././images/kubernetes/CN_ConfigFile_4.png#thumbnail)

Sample JSON file

        {"LicenseId":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX","AccountId":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX","ClusterName":"K8 Cluster Demo","ClientId":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"}

STEP 2: Deploy Cloudneeti agent
-------------------------------

1.  Update agent configuration scripts


    - **cloudneeti-agent-config.yaml** data section with values **cloudneeti-agent-config** downloaded in [STEP 1.](../../onboardingGuide/configureCloudneetiAgentInKubernetesCluster/#step-1-associate-kubernetes-cluster-with-cloud-account-in-cloudneeti)

                
                data:
                    clusterName: "<uniqueclustername>"
                    licenseId: "<cloudneetilicenseid>"
                    accountId: "<cloudneetiaccountid>"
                    cloudneetiEnvironment: "<prod/trial>"

    -  **cloudneeti-agent-secret.yaml** set the cloudneetiAPIKey value in data section.

                data:
                    cloudneetiAPIKey: <cloudneetiapikey>

    -  **cloudneeti-agent.yaml** update value for **schedule** in spec section, set cron job schedule as per your requirement.

                spec:
                    schedule: "0 12 * * *"

    Note: It is recommended set the execution time of Cloudneeti agent once a day.

2.  Create a Cloudneeti namespace

        kubectl apply -f cloudneeti-namespace.yaml

3.  Create Cloudneeti agent secret

        kubectl apply -f cloudneeti-agent-secret.yaml

4.  Create Cloudneeti agent config

        kubectl apply -f cloudneeti-agent-config.yaml

5.  Deploy Cloudneeti agent

        kubectl apply -f cloudneeti-agent.yaml

6.  Verify agent configuration

STEP 3: Verify agent status and policy results
----------------------------------------------

