Configuring Cloudneeti agent in Kubernetes cluster
==================================================

Prerequisites
-------------

| **Activity**                                                                                                               | **Description**                                                              |
|----------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.	Download and review **PowerShell script** scripts for configuration of Cloudneeti Agent | The PowerShell script is used to configure Cloudneeti Agent in Azure Kubernetes Cluster:<br>  [cloudneeti-namespace.yaml](https://github.com/Cloudneeti/docs_cloudneeti/blob/master/scripts/kubernetes-onboarding/cloudneeti-namespace.yaml)<br>[cloudneeti-agent-config.yaml](https://github.com/Cloudneeti/docs_cloudneeti/blob/master/scripts/kubernetes-onboarding/cloudneeti-agent-config.yaml)<br>[cloudneeti-agent-secret.yaml](https://github.com/Cloudneeti/docs_cloudneeti/blob/master/scripts/kubernetes-onboarding/cloudneeti-agent-secret.yaml)<br>[cloudneeti-agent.yaml](https://github.com/Cloudneeti/docs_cloudneeti/blob/master/scripts/kubernetes-onboarding/cloudneeti-agent.yaml) |
| 2.	**Workstation**: Ensure you have the latest PowerShell version (v5 and above) | Verify PowerShell version by running the following command<br>`$PSVersionTable.PSVersion`<br>on the workstation where you will run the ServicePrincipal creation script. If PowerShell version is lower than 5, then follow this link for installation of a later version: [Download Link.](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell?view=powershell-6) |
| 3.	**Workstation:** Before executing the script, make sure there are no restrictions in running the PowerShell script  | Use this PowerShell command:<br>``Set-ExecutionPolicy ` ``<br>``-Scope Process ` ``<br>``-ExecutionPolicy Bypass``<br>PowerShell contains built-in execution policies that limit its use as an attack vector. By default, the execution policy is set to Restricted, which is the primary policy for script execution. The bypass allows for running scripts and keeps the lowered permissions isolated to just the current running process. |                                                     
| 4. **Workstation:** Azure CLI version 2.0.46 | Please follow [link](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) to install Azure CLI version 2.0.46       |
| 5. **Workstation:** Install and set up kubectl to execute PowerShell commands within Cloudneeti Agent configuration script | Please follow [link](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-windows) to install and set up **kubectl** <br>``choco install kubernetes-cli``<br>      |

STEP 1: Associate Kubernetes cluster with Cloud account in Cloudneeti
---------------------------------------------------------------------

Login to Cloudneeti portal with **License Admin** role

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

### 2.1 

#### AKS

Login to masternode with root account.


#### AKS Engine

Login to Kubernetes cluster with root account.

        az aks get-credentials --name <cluster-name> --resource-group <cluster-resource-group> --overwrite-existing


### 2.2 Update agent configuration scripts

- **cloudneeti-namespace.yaml** metadata section with value for namespace name.

                metadata:
                    name: <Namespace>
    
- **cloudneeti-agent-config.yaml** data section with values **cloudneeti-agent-config** downloaded in [STEP 1.](../../onboardingGuide/configureCloudneetiAgentInKubernetesCluster/#step-1-associate-kubernetes-cluster-with-cloud-account-in-cloudneeti)

                
                data:
                    clusterName: "<uniqueclustername>"
                    licenseId: "<cloudneetilicenseid>"
                    accountId: "<cloudneetiaccountid>"
                    cloudneetiEnvironment: "<prod/trial>"

-  **cloudneeti-agent-secret.yaml** set the below values.
    -  **namespace** as given in cloudneeti-namespace.yaml.
    -  **cloudneetiAPIKey** Please follow steps to generate the key and set the key in base64 format.

                metadata:
                    name: cloudneeti-agent
                    namespace: <Namespace>
                data:
                    cloudneetiAPIKey: <cloudneetiapikey>

-  **cloudneeti-agent.yaml** update value for **schedule** in spec section, set cron job schedule as per your requirement.

                spec:
                    schedule: "0 12 * * *"
                

Note: It is recommended set the execution time of Cloudneeti agent once a day.

### 2.3 Deploy Cloudneeti agent on Kubernetes master

Login to Kubernetes master with **administrator** role.

1.  Create/copy below files on Kubernets master 
    - cloudneeti-namespace.yaml
    - cloudneeti-agent-config.yaml
    - cloudneeti-agent-secret.yaml
    - cloudneeti-agent.yaml

    ![Associate Kubernetes](.././images/kubernetes/Master_1.png#thumbnail)
    

2. Create a Cloudneeti namespace 

        kubectl apply -f cloudneeti-namespace.yaml

3.  Create Cloudneeti agent secret

        kubectl apply -f cloudneeti-agent-secret.yaml --namespace <namespace name>

4.  Create Cloudneeti agent config

        kubectl apply -f cloudneeti-agent-config.yaml --namespace <namespace name>

5.  Deploy Cloudneeti agent

        kubectl apply -f cloudneeti-agent.yaml --namespace <namespace name>

    ![Associate Kubernetes](.././images/kubernetes/Master_2.png#thumbnail)


STEP 3: Verify Cloudneeti agent installation
--------------------------------------------

Verify Cloudneeti agent installation using Kubernetes dashboard. Please follow [link](https://docs.microsoft.com/en-us/azure/aks/kubernetes-dashboard#start-the-kubernetes-dashboard)

1. Verify namespace created

    ![Associate Kubernetes](.././images/kubernetes/Verify_1.png#thumbnail)

2. Navigate cron jobs

    ![Associate Kubernetes](.././images/kubernetes/Verify_2.png#thumbnail)

3. Select latest job 

    ![Associate Kubernetes](.././images/kubernetes/Verify_3.png#thumbnail)

4. Check if Cloudneeti agent has sent the data successfully.

    ![Associate Kubernetes](.././images/kubernetes/Verify_4.png#thumbnail)    


STEP 4: Verify policy results
-----------------------------

Login to Cloudneeti portal with **License Admin** role

1. Navigate to CIS Kubernetes v1.5.0 benchmark

    ![Associate Kubernetes](.././images/kubernetes/CN_K8_Verify_1.png#thumbnail)

2. On successful agent configuration , policy results will appear on Cloudneeti portal

    ![Associate Kubernetes](.././images/kubernetes/CN_K8_Verify_2.png#thumbnail)


## Appendix

### Generate Cloudneeti API key

#### Sign-up on Cloudneeti API portal.

1. Go to [API portal](https://portal.cloudneeti.com/) and Sign up.

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

#### Set API key in base64

Below commands can be used to set API key in base64

##### Bash

        echo <apikey> | base64

##### Powershell

        $PlainTextKey = <apikey>
        $Bytes = [System.Text.Encoding]::Unicode.GetBytes($PlainTextKey)
        $EncodedKey =[Convert]::ToBase64String($Bytes)
        $EncodedKey

