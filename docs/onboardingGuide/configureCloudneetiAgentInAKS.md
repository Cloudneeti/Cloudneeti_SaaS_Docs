STEP 8: Configuring Cloudneeti agent in Azure Kubernetes Service (AKS)
======================================================================

**This step is optional.**

Cloudneeti includes and extends Azure Security Center recommendations for AKS by deploying a Cloudneeti agent to Azure Kubernetes Clusters - AKS, AKS-Engine and VM hosted Kubernetes Clusters. A docker container-based agent is deployed as a cronjob in Kubernetes cluster to collect data for additional security policies. Cloudneeti then provides out-of-box mappings for all 13+ compliance frameworks included in the product. 

Deploying Cloudneeti agent on Azure Kubernetes Service enables compliance monitoring of Kubernetes cluster for security policies [listed here](../../securityPolicies/kubernetes/azureK8SSecurityPolcies/).


Prerequisites
-------------

| **Activity**                                                                                                               | **Description**                                                              |
|----------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.	**Workstation**: Ensure you have the latest PowerShell version (v5 and above) | Verify PowerShell version by running the following command<br>`$PSVersionTable.PSVersion`<br>on the workstation where you will run the ServicePrincipal creation script. If PowerShell version is lower than 5, then follow this link for installation of a later version: [Download Link.](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell?view=powershell-6){target=_blank} |
| 2.	**Workstation:** Before executing the script, make sure there are no restrictions in running the PowerShell script  | Use this PowerShell command:<br>``Set-ExecutionPolicy ` ``<br>``-Scope Process ` ``<br>``-ExecutionPolicy Bypass``<br>PowerShell contains built-in execution policies that limit its use as an attack vector. By default, the execution policy is set to Restricted, which is the primary policy for script execution. The bypass allows for running scripts and keeps the lowered permissions isolated to just the current running process. |                                                     
| 3. **Workstation:** Azure CLI version 2.0.46 | Please follow [link](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest){target=_blank} to install Azure CLI version 2.0.46       |
| 4. **Workstation:** Install and set up kubectl to execute PowerShell commands within Cloudneeti Agent configuration script | Please follow [link](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-windows){target=_blank} to install and set up **kubectl** <br>``choco install kubernetes-cli``<br>      |
| 5. **Workstation:** Install OpenSSH | Please follow [link](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse){target=_blank} to install and set up **OpenSSH**   |
| 6. **Workstation:** Install and set up Helm 3.0 and higher to execute helm chart deployment commands | Please follow [link](https://helm.sh/docs/intro/install/){target=_blank} to install and set up Helm or install Helm using below commands <br> **Windows** <br>``choco install kubernetes-helm`` <br> **Unix** <br>``sudo apt-get install helm``  |
| 7. **Workstation:** Add Cloudneeti Helm repo | Add Cloudneeti Helm repo and verify using below commands, more details [here](../../onboardingGuide/configureCloudneetiAgentInAKS/#setup-cloudneeti-helm-repo) <br> **1 Add Cloudneeti Helm repo** <br>``helm repo add cloudneeti https://charts.cloudneeti.com`` <br> **2 Verify Helm repo addition** <br>``helm repo list`` <br> **3 List available Cloudneeti helm charts** <br> ``helm search repo cloudneeti -–versions``  |

8.1: Associate Kubernetes cluster with Cloud account in Cloudneeti
---------------------------------------------------------------------

Login to Cloudneeti portal with **License Admin** role

1.  Navigate to **Configurations** and **Cloud Accounts**

    ![Associate Kubernetes](.././images/kubernetes/CN_ManageAccounts_1.png#thumbnail)

2.  Expand Azure (1) section

3.  Click **Configure Accounts** (2) for the Cloud account where Kubernetes Cluster
    is to be associated.

3.  Click **K8s Clusters Association** (3)

    ![Associate Kubernetes](.././images/kubernetes/CN_ManageK8Cluster_2.png#thumbnail)

4.  Add **Kubernetes Cluster Name**

5.  Select **Cluster Hosting** type from drop-down and **Save**

    - Azure hosting type options

    ![Associate Kubernetes](.././images/kubernetes/CN_AssociateK8Cluster_3.png#thumbnail)

    - AWS hosting type options

    ![Associate Kubernetes](.././images/kubernetes/CN_AssociateK8Cluster_EKS.png#thumbnail)

6.  It will download a JSON file **cloudneeti-agent-config** which will be used in
    step 2 to update agent configuration script.

    ![Associate Kubernetes](.././images/kubernetes/CN_ConfigFile_4.png#thumbnail)

Sample JSON file

        {"LicenseId":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX","AccountId":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX","ClusterName":"AKS Demo","ClusterHosting":"AKS","Environment":"prod"}


8.2: Collect Information
-------------------------

**Collect Information**

| **Information**                                            | **Source / Portal to use** | **User**      |
|------------------------------------------------------------|----------------------------|---------------|
| [Cloudneeti License Id]                                      | Cloudneeti (JSON file generated in step 8.1)      | License Admin |
| Cloudneeti Account Id                                      | Cloudneeti (JSON file generated in step 8.1)      | License Admin |
| Cluster Name                                               | Cloudneeti (JSON file generated in step 8.1)      | License Admin |
| Cloudneeti Environment                                     | Cloudneeti (JSON file generated in step 8.1)      | License Admin |
| Cluster Hosting                                            | Cloudneeti (JSON file generated in step 8.1)      | License Admin |
| **Cloudneeti API key**                                     | Cloudneeti                 | License Admin |
| **CloudneetiApiAppId**                                     | Cloudneeti                 | License Admin |
| **CloudneetiAPIAppSecret**                                 | Cloudneeti                 | License Admin |
|                                                            |                            |               |


**Notes:**

-   **Generate Cloudneeti API key** : Please follow [steps](../../onboardingGuide/configureCloudneetiAgentInAKS/#generate-cloudneeti-api-key) for API key generation.

-   **Generate API app secret** : Please
follow [steps](../../administratorGuide/configureCloudneetiAPIAccess/#step-1-create-cloudneeti-api-application) to configure API access for API **Account.InsertKubernetesClusterData** and generate API access secret.

8.3: Deploy Cloudneeti agent
-----------------------------

Setup Cloudneeti Helm Repo and deploy Cloudneeti agent on Kubernetes cluster. Please use below steps to deploy Cloudneeti Agent on AKS, AKS engine and VM hosted Kubernetes Cluster. 

Access Kubernetes cluster with root account from local machine.

### AKS

1. Access Kubernetes cluster with root account from local machine

        az aks get-credentials --name <cluster-name> --resource-group <cluster-resource-group> --overwrite-existing 

2. Deploy Cloudneeti agent on Kubernetes cluster node

        helm install <ReleaseName> cloudneeti/cloudneeti-agent `
        --set clusterName=<cluster-name-as-onboarded-on-cloudneeti> `
        --set licenseId=<cloudneeti-license-id> `
        --set accountId=<cloudneeti-account-id> `
        --set cloudneetiEnvironment=<environment-prefix (qa/trial/prod) `
        --set cloudneetiApiAppId=<api-app-id> `
        --set cloudneetiAPIKey=<cloudneeti-apimgmt-key> `
        --set cloudneetiAPIAppSecret=<api-app-secret> `
        --set clusterHosting=”AKS”

### AKS Engine

1.	Access the AKS-Engine cluster by using the kubeconfig generated for the cluster at the time of provisioning aks-engine in below directory.

        _output/<ResourceGroupName>/kubeconfig/

2.	Copy kubeconfig. region .json file on local/dev machine at secure place.

        aks-engine generates kubeconfig files for each possible region (for eastus location refer kubeconfig.eastus.json file)

3.	Verify K8S cluster access

    ![Helm Setup - Kubernetes](.././images/kubernetes/AKS_Engine_1.png#thumbnail)

4.  Deploy Cloudneeti agent on Kubernetes cluster node

        helm install <ReleaseName> cloudneeti/cloudneeti-agent `
        --set clusterName=<cluster-name-as-onboarded-on-cloudneeti> `
        --set licenseId=<cloudneeti-license-id> `
        --set accountId=<cloudneeti-account-id> `
        --set cloudneetiEnvironment=<environment-prefix (qa/trial/prod) `
        --set cloudneetiApiAppId=<api-app-id> `
        --set cloudneetiAPIKey=<cloudneeti-apimgmt-key> `
        --set cloudneetiAPIAppSecret=<api-app-secret> `
        --set clusterHosting=”AKS-Engine”

### VM hosted Kubernetes

1. Access Kubernetes cluster with root account

2. Download the kubeconfig file from vm-based kubernetes cluster and store file on local/dev machine at secure place

3.	Verify K8S cluster access

    ![Helm Setup - Kubernetes](.././images/kubernetes/vm-based.png#thumbnail)


4.  Deploy Cloudneeti agent on Kubernetes cluster node
        
        helm install <ReleaseName> cloudneeti/cloudneeti-agent `
        --set clusterName=<cluster-name-as-onboarded-on-cloudneeti> `
        --set licenseId=<cloudneeti-license-id> `
        --set accountId=<cloudneeti-account-id> `
        --set cloudneetiEnvironment=<environment-prefix (qa/trial/prod) `
        --set cloudneetiApiAppId=<api-app-id> `
        --set cloudneetiAPIKey=<cloudneeti-apimgmt-key> `
        --set cloudneetiAPIAppSecret=<api-app-secret> `
        --set clusterHosting=”VM-Based”

8.4: Verify Cloudneeti agent installation
------------------------------------------

Access Kubernetes cluster with root account from local machine

1.	Verify the namespace

        kubectl get namespace

    ![kubectl - Kubernetes](.././images/kubernetes/namespace.png#thumbnail)

2.	Verify the Cloudneeti agent CronJob Deployment

        kubectl get cronjob --namespace Cloudneeti

    ![kubectl - Kubernetes](.././images/kubernetes/kubectl2.png#thumbnail)

3.	Trigger CronJob 

        kubectl create job <job-name> --from=cronjobs/cloudneeti-agent --namespace cloudneeti

    ![kubectl - Kubernetes](.././images/kubernetes/kubectl3.png#thumbnail)

4.	Get Jobs 

        kubectl get job --namespace cloudneeti

    ![kubectl - Kubernetes](.././images/kubernetes/kubectl4.png#thumbnail)

5.	Verify Job Logs of Cloudneeti agent

    Get Pod associated with the job 
        kubectl get pods --selector=job-name=<job-name> --namespace cloudneeti

    ![kubectl - Kubernetes](.././images/kubernetes/kubectl5.png#thumbnail)

    Get log of Cloudneeti agent pod and verify data has been successfully posted to Cloudneeti or not.

    ![kubectl - Kubernetes](.././images/kubernetes/kubectl6.png#thumbnail)

8.5: Verify policy results
-----------------------------

Login to Cloudneeti portal with **License Admin** role

1. Navigate to CIS Kubernetes v1.5.0 benchmark

    ![Associate Kubernetes](.././images/kubernetes/CN_K8_Verify_1.png#thumbnail)

2. On successful agent configuration, policy results will appear on Cloudneeti portal

    ![Associate Kubernetes](.././images/kubernetes/CN_K8_Verify_2.png#thumbnail)


## Appendix

### Setup Cloudneeti helm repo

1. Add Cloudneeti Helm repo 

        helm repo add cloudneeti https://charts.cloudneeti.com

    ![Helm Setup - Kubernetes](.././images/kubernetes/helm_1.png#thumbnail)

2. Verify Helm repo addition

        helm repo list

    ![Helm Setup - Kubernetes](.././images/kubernetes/helm_2.png#thumbnail)


3. List available Cloudneeti helm charts

        helm search repo cloudneeti -–versions

    ![Helm Setup - Kubernetes](.././images/kubernetes/helm_3.png#thumbnail)


### Upgrade Cloudneeti Agent

Access Kubernetes cluster with root account from local machine

#### Upgrade to latest Cloudneeti agent version
In case Cloudneeti releases a new version of the agent then first upgrade the helm repository to pull latest available agent versions.

1. Update the Cloudneeti helm repo

        helm repo update 
 
2. Upgrade the Cloudneeti agent

        helm upgrade <release-name> cloudneeti-agent

    ![Upgrade agent in Kubernetes](.././images/kubernetes/update_helm.png#thumbnail)

#### Update parameters 
Update parameters like API key, API Secret etc, using upgrade agent using the helm upgrade command with appropriate parameters

        helm upgrade <release-name> cloudneeti-agent `
        --set <parameter_to_update>=<value>

#### Rollback Cloudneeti Agent

In case while upgrading or after upgradation Cloudneeti agent didn’t work then switch back to the previously working version of the Cloudneeti agent using below commands,

        helm rollback <release-name>

### Offboard Kubernetes Cluster

#### Disassociate Kubernetes cluster 

Login to Cloudneeti portal with **License Admin** role

1.  Navigate to **Configurations** and **Cloud Accounts**

    ![Associate Kubernetes](.././images/kubernetes/CN_ManageAccounts_1.png#thumbnail)

2.  Expand Azure (1) section

3.  Click **Configure Accounts** (2) for the Cloud account where Kubernetes Cluster
    is to be associated.

3.  Click **K8s Clusters Association** (3)

4.	Click on delete button to disassociate kubernetes cluster from Cloudneeti

    ![Associate Kubernetes](.././images/kubernetes/delete_k81.png#thumbnail)


#### Delete Cloudneeti Agent from Kubernetes cluster

Access Kubernetes cluster with root account from local machine

1.	Connect to Kubernetes Cluster 

2.	List down the helm releases associated with Cloudneeti agent 

        helm list

3.	Delete the cluster and reinstall it using the helm install if required. Command to delete:

        helm delete <release-name>


### Generate Cloudneeti API key

#### Sign-up on Cloudneeti API portal.

1. Go to [API portal](https://portal.cloudneeti.com/){target=_blank} and Sign up.

2. Fill the required fields in the sign-up form

3. You will receive a confirmation mail for sign-up, Click on the confirmation
    link.

4. The confirmation link will ask you for change password (info: You can use
    the password your used when signing up)

5. You are signed up successfully

#### Retrieve and activate API key

Retrieve and activate your API key using the Cloudneeti API portal

1. Click on **PRODUCTS**
2. Select **Unlimited**
	![Cloudneeti API](.././images/onboardingOffice365Subscription/Cloudneeti_API.png#thumbnail)
3. Click on **Subscribe**
	![Subscribe](.././images/azureSubscriptions/API_Subscribe.png#thumbnail)

This will notify Cloudneeti to activate your API subscription access. Please
wait for the activation to be done. When Cloudneeti activates your subscription, you
will get an email notification.

Once you receive the confirmation, proceed with the following steps.

1. Click on **Username**
2. Select **Profile**
3. Click on **Show**
4. Copy the **Primary key** to your notepad.
	![Primary key](.././images/onboardingOffice365Subscription/Primary_key.png#thumbnail)
