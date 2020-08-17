Estimate Pricing
=====================

Subscription Fee 
----------------------

Cloudneeti product subscription fees are based on an average total number of resources in
onboarded cloud accounts (Azure subscription, AWS accounts) and number of users
in Office 365 subscription. Please follow the steps below to collect resource
and user count.

Please refer [billing dashbord](../../administratorGuide/billingDashboard/) page to see resouce, user count on Cloudneeti portal.

Resources in Azure subscription
-------------------------------

Please follow the below steps to determine the total number of resources within
an Azure subscription.

Login to [Azure portal](https://portal.azure.com){target=_blank} as Subscription Reader/Owner.

### Manual 

1.  Click on **Subscriptions** (1)

2.  Select desired subscription

3.  Click on **Resources** (2) to get list of all resources

4.  Total resource count is mentioned on the upper left of the screen
    highlighted below

    ![Azure Resources](.././images/Subscribe/Azure_Resources.png#thumbnail)

### Automated 

1.	Open Cloudshell with bash

2.	Download script

        wget https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/workload-resource-count/scripts/Get-AzureResourceCount.ps1 -O Get-AzureResourceCount.ps1

3. Switch directory

        cd $user

4.	Get resource counts [put the subscriptionid in below command]

       .\Get-AzureResourceCount.ps1 -SubscriptionId <subscriptionId>

4.	Output will have protected workloads counts and all resource categories listed along with resource count.

    ![Azure Resources](.././images/azureMarketplace/Azure_Resource_Count_Auot.png#thumbnail)



Resources in AWS account
------------------------

Please the follow below steps to determine the total number of resources within
an AWS account.

### Automated

#### Workstation Readiness

| **Activity**                                        | **Description**                                                                                                                                                                             |
|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Workstation:** Python 3.7                       | [Download python web based installer](https://www.python.org/downloads/){target=_blank}.</br> Install python and make sure to check Add python to Path setting|
| **Workstation:** boto3 package | Amazon Web Services (AWS) Software Development Kit (SDK) for Python </br> # python -m pip install boto3 |
| Download and review **Python script**  | The Python script is used to to get Resource Count for given AWS Account: [Download Link.](https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/count_aws_resources.py){target=_blank} |

#### Required permissions

| **Pre-requisite**       |      **Role**          |  **Referense**
|-------------------------|------------------------|------------------------|
|AWS access and secret key| Root User, Security Audit| [AWS access and secret key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey){target=_blank}|


#### Get resource count
1. Run below command to get the count

        python .\count_aws_resources.py --accessKey <aws_access_key> --secretKey <aws_secret_key>

2. Output will have protected workloads and all services listed along with resource count for the given AWS account.

    ![AWS Resources](.././images/azureMarketplace/AWS_Resource_Count_Script_OP.png#thumbnail)


Users in Office 365
-------------------------

Please log into the [Office 365 portal](https://admin.microsoft.com){target=_blank} to look up the number of users in your
Office 365 subscription.

![Office 365 Resources](.././images/azureMarketplace/M365_Users.png#thumbnail)