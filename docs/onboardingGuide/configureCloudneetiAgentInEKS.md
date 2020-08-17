STEP 4: Configuring Cloudneeti agent in Amazon Elastic Kubernetes Service (Amazon EKS) (Optional)
=================================================================================================

**This step is optional.**

Cloudneeti includes CIS recommendations for EKS and EC2-instance based Kubernetes by deploying a Cloudneeti agent to Amazon Kubernetes Cluster. A docker container-based agent is deployed as a cronjob in Kubernetes cluster to collect data for additional security policies. Cloudneeti then provides out-of-box mappings for all 13+ compliance frameworks included in the product. 

Deploying Cloudneeti agent on Amazon Elastic Kubernetes Service (Amazon EKS) enables compliance monitoring of Kubernetes cluster for security policies [listed here](../../securityPolicies/kubernetes/awsK8SSecurityPolcies/).


Prerequisites
-------------

| **Activity**                                                                                                               | **Description**                                                              |
|----------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1. **Workstation:** Install AWS Command Line Interface                           | To install AWS cli follow [link](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html) **AWS Command Line** Interface (CLI) is a unified tool to manage your AWS services.             |                                                      |
| 2. **Workstation:** Install and set up kubectl to execute PowerShell commands within Cloudneeti Agent configuration script | Please follow [link](https://kubernetes.io/docs/tasks/tools/install-kubectl/){target=_blank} to install and set up **kubectl** <br>``choco install kubernetes-cli``<br>      |                                                     
| 3. **Workstation:** Install and set up Helm 3.0 and higher to execute helm chart deployment commands | Please follow [link](https://helm.sh/docs/intro/install/){target=_blank} to install and set up Helm or install Helm using below commands <br> **Windows** <br>``choco install kubernetes-helm`` <br> **Unix** <br>``sudo apt-get install helm``  |
| 4. **Workstation:** Add Cloudneeti Helm repo | Add Cloudneeti Helm repo and verify using below commands, more details [here](../../onboardingGuide/configureCloudneetiAgentInEKS/#setup-cloudneeti-helm-repo) <br> **1 Add Cloudneeti Helm repo** <br>``helm repo add cloudneeti https://charts.cloudneeti.com`` <br> **2 Verify Helm repo addition** <br>``helm repo list`` <br> **3 List available Cloudneeti helm charts** <br> ``helm search repo cloudneeti -–versions``  |

4.1: Associate Kubernetes cluster with Cloud account in Cloudneeti
---------------------------------------------------------------------

Login to Cloudneeti portal with **License Admin** role

1.  Navigate to **Configurations** and **Cloud Accounts**

    ![Associate Kubernetes](.././images/kubernetes/CN_ManageAccounts_1.png#thumbnail)

2.  Expand **AWS** (1) section

3.  Click **Configure Accounts** (2) for the Cloud account where Kubernetes Cluster
    is to be associated.

3.  Click **K8s Clusters Association** (3)

    ![Associate Kubernetes](.././images/kubernetes/CN_ManageK8Cluster_EKS_2.png#thumbnail)

4.  Add **Kubernetes Cluster Name** (1)

5.  Select **Cluster Hosting** (2) from dropdown and **Save**

    ![Associate Kubernetes](.././images/kubernetes/CN_AssociateK8Cluster_EKS.png#thumbnail)

6.  It will download a JSON file **cloudneeti-agent-config** which will be used in
    step 2 to update agent configuration script.

Sample JSON file

        {"LicenseId":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX","AccountId":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX","ClusterName":"EKS Demo","ClusterHosting":"EKS","Environment":"prod"}


4.2: Collect Information
-------------------------

**Collect Information**

| **Information**                                            | **Source / Portal to use** | **User**      |
|------------------------------------------------------------|----------------------------|---------------|
| Cloudneeti License Id                                      | Cloudneeti (JSON file generated in step 4.1)      | License Admin |
| Cloudneeti Account Id                                      | Cloudneeti (JSON file generated in step  4.1)      | License Admin |
| Cluster Name                                               | Cloudneeti (JSON file generated in step  4.1)      | License Admin |
| Cloudneeti Environment                                     | Cloudneeti (JSON file generated in step  4.1)      | License Admin |
| Cluster Hosting                                            | Cloudneeti (JSON file generated in step  4.1)      | License Admin |
| **Cloudneeti API key**                                     | [Cloudneeti](../../onboardingGuide/configureCloudneetiAgentInEKS/#cloudneeti-api-key)                | License Admin |
| **CloudneetiApiAppId**                                     | [Cloudneeti](../../onboardingGuide/configureCloudneetiAgentInEKS/#cloudneetiapiappid-and-cloudneetiapiappsecret)                   | License Admin |
| **CloudneetiAPIAppSecret**                                 | [Cloudneeti](../../onboardingGuide/configureCloudneetiAgentInEKS/#cloudneetiapiappid-and-cloudneetiapiappsecret)                 | License Admin |
|                                                            |                            |               |


**Notes:**

####  **Cloudneeti API key** 

Set Cloudneeti API key and APIAPPSecret to base64 format : Please follow [steps](https://docs.cloudneeti.com/onboardingGuide/configureCloudneetiAgentInEKS/#set-api-key-in-base64) to
generate the key and set the key in base64 format.


####  **CloudneetiApiAppId** and **CloudneetiAPIAppSecret** 

Generate API app secret : Please
follow [steps](https://docs.cloudneeti.com/administratorGuide/configureCloudneetiAPIAccess/#step-1-create-cloudneeti-api-application) to configure API access for API **Account.InsertKubernetesClusterData** and generate API access secret.

4.3: Deploy Cloudneeti agent
-------------------------------

Deploy Cloudneeti agent on Kubernetes cluster node. Please use below steps to deploy Cloudneeti Agent on EKS, EC2-instance based Kubernetes Cluster. 

Access Kubernetes cluster with root account

### EKS

1. Access Kubernetes cluster with root account from local machine

        aws eks --region <region> update-kubeconfig --name <cluster_name>

2. Deploy Cloudneeti agent on Kubernetes cluster node

        helm install <ReleaseName> cloudneeti/cloudneeti-agent `
        --set clusterName=<cluster-name-as-onboarded-on-cloudneeti> `
        --set licenseId=<cloudneeti-license-id> `
        --set accountId=<cloudneeti-account-id> `
        --set cloudneetiEnvironment=<environment-prefix (qa/trial/prod) `
        --set cloudneetiApiAppId=<api-app-id> `
        --set cloudneetiAPIKey=<cloudneeti-apimgmt-key> `
        --set cloudneetiAPIAppSecret=<api-app-secret> `
        --set clusterHosting=”EKS”


### EC2-instance based

1. Access Kubernetes cluster with root account

2. Download the kubeconfig file from EC2-Instance-Based kubernetes cluster and store file on local/dev machine at secure place

3. Verify K8S cluster access

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
        --set clusterHosting=”EC2-Instance-Based”

4.4: Verify Cloudneeti agent installation
--------------------------------------------

Verify Cloudneeti agent installation using Kubernetes dashboard. Please follow [link](https://docs.aws.amazon.com/eks/latest/userguide/dashboard-tutorial.html){target=_blank}

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

4.5: Verify policy results
-----------------------------

Login to Cloudneeti portal with **License Admin** role

1. Navigate to CIS Kubernetes v1.5.0 benchmark

    ![Associate Kubernetes](.././images/kubernetes/CN_K8_Verify_EKS_1.png#thumbnail)

2. On successful agent configuration, policy results will appear on Cloudneeti portal

    ![Associate Kubernetes](.././images/kubernetes/CN_K8_Verify_EKS_2.png#thumbnail)


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

#### Set API key in base64

Below commands can be used to set API key in base64

##### Bash

        echo <apikey> | base64

##### Powershell

        $PlainTextKey = <apikey>
        $Bytes = [System.Text.Encoding]::Unicode.GetBytes($PlainTextKey)
        $EncodedKey =[Convert]::ToBase64String($Bytes)
        $EncodedKey

