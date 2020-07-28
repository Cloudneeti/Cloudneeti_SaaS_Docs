Get benchmarks API 
==================

The benchmarks API provides list of benchmark ids supported for given cloud account in Cloudneeti.

        GET https://<CLOUDNEETI API DOMAIN>/audit/license/<LICENSE ID>/account/<ACCOUNT ID>/benchmarks

| Environment	| Values for Cloudneeti API domain     |
|---------------|--------------------------------------|
| PROD 	        |   api.cloudneeti.com                 |
| TRIAL 	    | trialapi.cloudneeti.com              |

### URI Parameters

| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| LICENSE ID  |          [Cloudneeti license id​](#license-id)                  | Required|
| ACCOUNT ID  |          [Cloud account id​](#account-id)                          | Required|

### Authorization
| Type           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| Bearer Token  |          [Account Token](../../userGuide/tokenAPI/#account-token)                   | Required|

### Header

| Key	        | Value                                |
|---------------|--------------------------------------|
| Ocp-Apim-Subscription-Key 	| [Cloudneeti API key generated](../../administratorGuide/configureCloudneetiAPIAccess/)             |


### Response

| Name           |           Type       |          Description  |
|----------------|----------------------|-----------------------|
| result 	 |           Object     | Cloudneeti cloud account supported benchmark list       |
| statusCode |     Integer      | Cloudneeti API response status code      |
| message	 |           String     | Response describing operation result as success or failed.      |




Sample Report
-------------
<div class="policy-json-code">
<pre>
<code>
	[
        {
        "result": [
            {
                "name": "CIS Azure Foundations Benchmark1.0.0",
                "benchmarkId": "AZFDCIS1_0_0"
            },
            {
                "name": "CIS Azure Foundations Benchmark1.1.0",
                "benchmarkId": "AZFDCIS1_1_0"
            },
            {
                "name": "PCI_DSS_3.2",
                "benchmarkId": "PCI3_2"
            },
            {
                "name": "General Data Protection Regulation",
                "benchmarkId": "GDPR2016_679"
            },
            {
                "name": "HIPAA Safeguards",
                "benchmarkId": "HIPAA"
            },
            {
                "name": "FFIEC",
                "benchmarkId": "FFIEC"
            },
            {
                "name": "NIST Cybersecurity Framework1.1",
                "benchmarkId": "NISTCSF1_1"
            },
            {
                "name": "NIST SP 800-53 Rev. 4",
                "benchmarkId": "NIST800_53Rev4"
            },
            {
                "name": "CSA CCM V.3.0.1",
                "benchmarkId": "CSACCM3_0_1"
            },
            {
                "name": "ISO-IEC 27001-2013",
                "benchmarkId": "ISO27001_2013"
            },
            {
                "name": "Cloud Security Best Practices",
                "benchmarkId": "CSBP"
            },
            {
                "name": "UK NCSC",
                "benchmarkId": "UKNCSC"
            },
            {
                "name": "Reserve Bank of India",
                "benchmarkId": "RBI2015_16_418"
            },
            {
                "name": "SOC2 - AICPA TSC 2017",
                "benchmarkId": "SOC2_AICPA_TSC_2017"
            },
            {
                "name": "GxP Life Science 21 CFR PART 11",
                "benchmarkId": "GxP_Life_Science_21_CFR_PART_11"
            },
            {
                "name": "U-NNPI",
                "benchmarkId": "U_NNPI"
            },
            {
                "name": "CIS Azure Microsoft Windows Server 2012 R2 Benchmark1.0.0",
                "benchmarkId": "AZMSWIN12R2CIS1_0_0"
            },
            {
                "name": "CIS Azure Microsoft Windows Server 2016 Benchmark1.0.0",
                "benchmarkId": "AZMSWIN16CIS1_0_0"
            },
            {
                "name": "CIS Azure Ubuntu Linux 18.04 LTS Benchmark v1.0.0",
                "benchmarkId": "AZLinux18CIS1_1_0"
            },
            {
                "name": "CIS Azure CentOS Linux 7 Benchmark v2.2.0",
                "benchmarkId": "AZCentOSCIS2_2_0"
            },
            {
                "name": "CIS Azure Microsoft Windows Server 2019 RTM Release 1809 Benchmark v1.1.0",
                "benchmarkId": "AZMSWIN19CIS1_0_0"
            },
            {
                "name": "CIS Azure Kubernetes Benchmark_v1.5.1",
                "benchmarkId": "AZKUBERNETES1_5_0"
            },
            {
                "name": "CIS Azure AKS Engine Kubernetes Benchmark_v1.5.1",
                "benchmarkId": "AZAKSEngineKUBERNETES1_5_0"
            },
            {
                "name": "CIS Azure AKS Kubernetes Benchmark_v1.5.1",
                "benchmarkId": "AZAKSKUBERNETES1_5_0"
            },
            {
                "name": "Test PB-3.01",
                "benchmarkId": "69c99ba4-79aa-4557-a6a0-002aee0b9320"
            }
        ],
        "statusCode": 200,
        "message": "Request Successful"
    }
]
</code>
</pre>
</div>


Appendix 
---------

### Cloudneeti license and account details

Login to Cloudneeti portal as a License Admin.

##### LICENSE ID

1.  Navigate to **Features and Quota​s** under **Configurations**

2.  Copy License id and paste to notepad.

    ![License id](.././images/onboardingOffice365Subscription/License_Id.png#thumbnail)


##### ACCOUNT ID

1.  Navigate to **Cloud Accounts** in **Configurations**

2.  Copy Cloud Account id and paste to notepad.

    ![Manage Accounts](.././images/onboardingOffice365Subscription/Manage_Accounts.png#thumbnail)


