STEP 4: Configuring Cloudneeti agent in Amazon Elastic Kubernetes Service (Amazon EKS) (Optional)
=================================================================================================

**This step is optional.**

Cloudneeti includes CIS recommendations for EKS by deploying a Cloudneeti agent to Amazon Kubernetes Cluster. A docker container agent is deployed to collect data for additional security policies. Cloudneeti then provides out-of-box mappings for all 13+ compliance frameworks included in the product. 

Deploying Cloudneeti agent on Amazon Elastic Kubernetes Service (Amazon EKS) enables compliance monitoring of Kubernetes cluster for security policies [listed here](../../onboardingGuide/configureCloudneetiAgentInEKS/#kubernetes-policy-list).


Prerequisites
-------------

| **Activity**                                                                                                               | **Description**                                                              |
|----------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.	Download and review **yaml** files for configuration of Cloudneeti Agent | The yaml files are used to configure Cloudneeti Agent in AWS Kubernetes Cluster:<br>  [cloudneeti-namespace.yaml](https://github.com/Cloudneeti/docs_cloudneeti/blob/master/scripts/kubernetes-onboarding/cloudneeti-namespace.yaml){target=_blank}<br>[cloudneeti-agent-config.yaml](https://github.com/Cloudneeti/docs_cloudneeti/blob/master/scripts/kubernetes-onboarding/cloudneeti-agent-config.yaml){target=_blank}<br>[cloudneeti-agent-secret.yaml](https://github.com/Cloudneeti/docs_cloudneeti/blob/master/scripts/kubernetes-onboarding/cloudneeti-agent-secret.yaml){target=_blank}<br>[cloudneeti-agent-worker.yaml](https://github.com/Cloudneeti/docs_cloudneeti/blob/master/scripts/kubernetes-onboarding/cloudneeti-agent-worker.yaml){target=_blank} |
| 2. **Workstation:** Install AWS Command Line Interface                           | To install AWS cli follow [link](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html) **AWS Command Line** Interface (CLI) is a unified tool to manage your AWS services.             |                                                      |
| 3. **Workstation:** Install and set up kubectl to execute PowerShell commands within Cloudneeti Agent configuration script | Please follow [link](https://kubernetes.io/docs/tasks/tools/install-kubectl/){target=_blank} to install and set up **kubectl** <br>``choco install kubernetes-cli``<br>      |                                                     
| 4. **Workstation:** Install Helm | Install Helm using below commands <br> **Windows** <br>``choco install kubernetes-helm`` <br> **Unix** <br>``sudo apt-get install helm``  |

4.1: Associate Kubernetes cluster with Cloud account in Cloudneeti
---------------------------------------------------------------------

Login to Cloudneeti portal with **License Admin** role

1.  Navigate to **Configurations** and **Cloud Accounts**

    ![Associate Kubernetes](.././images/kubernetes/CN_ManageAccounts_AWS.png#thumbnail)

2.  Expand **AWS** (1) section

3.  Click **Configure Accounts** (2) for the Cloud account where Kubernetes Cluster
    is to be associated.

3.  Click **Manage K8s Clusters** (3)

    ![Associate Kubernetes](.././images/kubernetes/CN_ManageK8Cluster_EKS_2.png#thumbnail)

4.  Add **Kubernetes Cluster Name**

5.  **Save**

    ![Associate Kubernetes](.././images/kubernetes/CN_ManageK8Cluster_EKS_3.png#thumbnail)

6.  It will download a JSON file **cloudneeti-agent-config** which will be used in
    step 2 to update agent configuration script.

    ![Associate Kubernetes config](.././images/kubernetes/CN_ConfigFile_EKS.png#thumbnail)

Sample JSON file

        {"LicenseId":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX","AccountId":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX","ClusterName":"EKS Demo","Environment":"prod"}


4.2: Deploy Cloudneeti agent
-------------------------------

Please use below steps to deploy Cloudneeti Agent on EKS

### 4.2.1 Update agent configuration scripts

- **cloudneeti-namespace.yaml** metadata section with value for namespace name.

                metadata:
                    name: <Namespace>
    
- **cloudneeti-agent-config.yaml** data section with values **cloudneeti-agent-config** downloaded in [STEP 4.1.](../../onboardingGuide/configureCloudneetiAgentInEKS/#41-associate-kubernetes-cluster-with-cloud-account-in-cloudneeti)
    -  **cloudneetiApiAppId** Please follow [steps](../../administratorGuide/configureCloudneetiAPIAccess/#step-1-create-cloudneeti-api-application) to configure API access for API **Account.InsertKubernetesClusterData**                
                
                data:
                    clusterName: "<uniqueclustername>"
                    licenseId: "<cloudneetilicenseid>"
                    accountId: "<cloudneetiaccountid>"
                    cloudneetiEnvironment: "<prod/trial>"
                    cloudneetiApiAppId: "<cloudneetiapiappid>"

-  **cloudneeti-agent-secret.yaml** set the below values.
    -  **namespace** as given in cloudneeti-namespace.yaml.

    -  **cloudneetiAPIKey** 
    
        - Set Cloudneeti API key to base64 format : Please follow [steps](../../onboardingGuide/configureCloudneetiAgentInEKS/#set-api-key-in-base64) to generate the key and set the key in base64 format.
    
    - **cloudneetiAPIAppSecret** 
        - Generate API app secret : Please follow [steps](../../administratorGuide/configureCloudneetiAPIAccess/#step-1-create-cloudneeti-api-application) to configure API access for API **Account.InsertKubernetesClusterData** and generate API access secret.
        - Set API app secret to base64 format : Set the key in base64 format using [steps](../../onboardingGuide/configureCloudneetiAgentInEKS/#set-api-key-in-base64).

                metadata:
                    name: cloudneeti-agent
                    namespace: <Namespace>
                data:
                    cloudneetiAPIKey: <cloudneetiapikey>
                    cloudneetiAPIAppSecret: <cloudneetiapiappsecret>

-  **cloudneeti-agent-worker.yaml** update value for **schedule** in spec section, set cron job schedule as per your requirement.

                spec:
                    schedule: "0 12 * * *"
                

Note: The default value is set to scan the cluster every day at 12PM. It is recommended to set the execution time of Cloudneeti agent once a day.

### 4.2.2 Access Kubernetes cluster with root account from local machine

        aws eks --region <region> update-kubeconfig --name <EKS cluser name>

### 4.2.3 Deploy Cloudneeti agent on Kubernetes cluster node

1.  Create/copy below files on Kubernets master 
    - cloudneeti-namespace.yaml
    - cloudneeti-agent-config.yaml
    - cloudneeti-agent-secret.yaml
    - cloudneeti-agent-worker.yaml

    ![Associate Kubernetes](.././images/kubernetes/Master_1.png#thumbnail)
    
2. Create a Cloudneeti namespace 

        kubectl apply -f cloudneeti-namespace.yaml

3.  Create Cloudneeti agent secret

        kubectl apply -f cloudneeti-agent-secret.yaml --namespace <namespace name>

4.  Create Cloudneeti agent config

        kubectl apply -f cloudneeti-agent-config.yaml --namespace <namespace name>

5.  Deploy Cloudneeti agent

        kubectl apply -f cloudneeti-agent-worker.yaml --namespace <namespace name>


4.3: Verify Cloudneeti agent installation
--------------------------------------------

Verify Cloudneeti agent installation using Kubernetes dashboard. Please follow [link](https://docs.aws.amazon.com/eks/latest/userguide/dashboard-tutorial.html){target=_blank}

1. Verify namespace created

    ![Associate Kubernetes](.././images/kubernetes/Verify_1.png#thumbnail)

2. Navigate to a cron jobs

    ![Associate Kubernetes](.././images/kubernetes/Verify_2.png#thumbnail)

3. Select a latest job 

    ![Associate Kubernetes](.././images/kubernetes/Verify_3.png#thumbnail)

4. Check if Cloudneeti agent has sent the data successfully.

    ![Associate Kubernetes](.././images/kubernetes/Verify_EKS.png#thumbnail)    

4.4: Verify policy results
-----------------------------

Login to Cloudneeti portal with **License Admin** role

1. Navigate to CIS Kubernetes v1.5.0 benchmark

    ![Associate Kubernetes](.././images/kubernetes/CN_K8_Verify_EKS_1.png#thumbnail)

2. On successful agent configuration, policy results will appear on Cloudneeti portal

    ![Associate Kubernetes](.././images/kubernetes/CN_K8_Verify_EKS_2.png#thumbnail)


## Appendix

### Kubernetes policy list

The following CIS Kubernetes policies get enabled due to Cloudneeti Kubernetes agent configuration.

| Category_Name                                               | Policy_Title                                                                                |
|-------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| Kubernetes - Worker Nodes - Worker Node Configuration Files | Ensure that the kubelet service file has permissions of 644 or more restrictive             |
| Kubernetes - Worker Nodes - Worker Node Configuration Files | Ensure that the kubelet service file ownership is set to root:root                          |
| Kubernetes - Worker Nodes - Worker Node Configuration Files | Ensure that the proxy kubeconfig file permissions are set to 644 or more restrictive        |
| Kubernetes - Worker Nodes - Worker Node Configuration Files | Ensure that the proxy kubeconfig file ownership is set to root:root                         |
| Kubernetes - Worker Nodes - Worker Node Configuration Files | Ensure that the kubelet.conf file permissions are set to 644 or more restrictive            |
| Kubernetes - Worker Nodes - Worker Node Configuration Files | Ensure that the kubelet.conf file ownership is set to root:root                             |
| Kubernetes - Worker Nodes - Worker Node Configuration Files | Ensure that the client certificate authorities file ownership is set to root:root           |
| Kubernetes - Worker Nodes - Worker Node Configuration Files | Ensure that the kubelet configuration file has permissions set to 644 or more restrictive   |
| Kubernetes - Worker Nodes - Worker Node Configuration Files | Ensure that the kubelet configuration file ownership is set to root:root                    |
| Kubernetes - Worker Nodes - Kubelet                         | Ensure that the --anonymous-auth argument is set to false                                   |
| Kubernetes - Worker Nodes - Kubelet                         | Ensure that the --authorization-mode argument is not set to AlwaysAllow                     |
| Kubernetes - Worker Nodes - Kubelet                         | Ensure that the --client-ca-file argument is set as appropriate                             |
| Kubernetes - Worker Nodes - Kubelet                         | Ensure that the --read-only-port argument is set to 0                                       |
| Kubernetes - Worker Nodes - Kubelet                         | Ensure that the --streaming-connection-idle-timeout argument is not set to 0                |
| Kubernetes - Worker Nodes - Kubelet                         | Ensure that the --protect-kernel-defaults argument is set to true                           |
| Kubernetes - Worker Nodes - Kubelet                         | Ensure that the --make-iptables-util-chains argument is set to true                         |
| Kubernetes - Worker Nodes - Kubelet                         | Ensure that the --hostname-override argument is not set                                     |
| Kubernetes - Worker Nodes - Kubelet                         | Ensure that the --tls-cert-file and --tls-private-key-file arguments are set as appropriate |
| Kubernetes - Worker Nodes - Kubelet                         | Ensure that the --rotate-certificates argument is not set to false                          |
| Kubernetes - Worker Nodes - Kubelet                         | Ensure that the RotateKubeletServerCertificate argument is set to true                      |
| Kubernetes - Worker Nodes - Kubelet                         | Ensure that the Kubelet only makes use of Strong Cryptographic Ciphers                      |


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

#### Set API key in base64

Below commands can be used to set API key in base64

##### Bash

        echo <apikey> | base64

##### Powershell

        $PlainTextKey = <apikey>
        $Bytes = [System.Text.Encoding]::Unicode.GetBytes($PlainTextKey)
        $EncodedKey =[Convert]::ToBase64String($Bytes)
        $EncodedKey

