Audit summary report API
========================

The Audit Report API provide information related to your compliance posture across various compliance standards. The filters available through the API enable you to view your status across different cloud accounts and for different benchmarks [(list below)](../../userGuide/getBenchmarkSummary/#cloudneeti-supported-benchmarks) 

        GET https://<CLOUDNEETI API DOMAIN>/audit/license/<LICENSE ID>/account/<ACCOUNT ID>/benchmark/<BENCHMARK ID>/summary?jobId=<JOB ID>

| Environment	| Values for Cloudneeti API domain     |
|---------------|--------------------------------------|
| PROD 	        |   api.cloudneeti.com                 |
| TRIAL 	    | trialapi.cloudneeti.com              |

### URI Parameters

| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| LICENSE ID  |          [Cloudneeti license id​](#license-id)                  | Required|
| ACCOUNT ID  |          [Cloud account id​](#account-id)                       | Required|
| BENCHMARK ID |        [Benchmark id​](#cloudneeti-supported-benchmarks)       | Required|
| JOB ID      |  [Cloud account scan job id​](../../userGuide/initiateScanAPI/) | Optional, if not passed will give report for the last successful scan job|

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
                "name": "CIS Microsoft Azure Foundations Benchmark1.0.0",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "AZFDCIS1_0_0"
            },
            {
                "name": "CIS Microsoft Azure Foundations Benchmark1.1.0",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "AZFDCIS1_1_0"
            },
            {
                "name": "CIS Microsoft Windows Server 2012 R2 Benchmark1.0.0",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "AZMSWIN12R2CIS1_0_0"
            },
            {
                "name": "CIS Microsoft Windows Server 2016 Benchmark1.0.0",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "AZMSWIN16CIS1_0_0"
            },
            {
                "name": "PCI_DSS_3.2",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "PCI3_2"
            },
            {
                "name": "General Data Protection Regulation",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "GDPR2016_679"
            },
            {
                "name": "HIPAA Safeguards",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "HIPAA"
            },
            {
                "name": "FFIEC",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "FFIEC"
            },
            {
                "name": "NIST Cybersecurity Framework1.1",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "NISTCSF1_1"
            },
            {
                "name": "NIST SP 800-53 Rev. 4",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "NIST800_53Rev4"
            },
            {
                "name": "CSA CCM V.3.0.1",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "CSACCM3_0_1"
            },
            {
                "name": "ISO-IEC 27001-2013",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "ISO27001_2013"
            },
            {
                "name": "Cloud Security Best Practices",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "CSBP"
            },
            {
                "name": "UK NCSC",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "UKNCSC"
            },
            {
                "name": "Reserve Bank of India",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "RBI2015_16_418"
            },
            {
                "name": "SOC2 - AICPA TSC 2017",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "SOC2_AICPA_TSC_2017"
            },
            {
                "name": "GxP Life Science 21 CFR PART 11",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "GxP_Life_Science_21_CFR_PART_11"
            },
            {
                "name": "CIS Ubuntu Linux 18.04 LTS Benchmark v1.0.0",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "AZLinux18CIS1_1_0"
            },
            {
                "name": "CIS CentOS Linux 7 Benchmark v2.2.0",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "AZCentOSCIS2_2_0"
            },
            {
                "name": "CIS Kubernetes Benchmark_v1.5.0",
                "title": null,
                "category": null,
                "dummyImageUrl": null,
                "longName": null,
                "benchmarkId": "AZKUBERNETES1_5_0"
                }
            }
        ],
        "statusCode": 200,
        "message": "Request Successful"
    }
]
</code>
</pre>
</div>

### Cloudneeti supported benchmarks 

API is availabel to get supported benchmark, refer page [Get supported benchmarks API](../../userGuide/getSupportedBenchmarks/)


| **Cloud Account Type** | **Cloudneeti supported benchmark**                                                                                                                                                                                                                                                                                                                                 |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Azure                  | AZFDCIS1_0_0, AZFDCIS1_1_0, PCI3_2, GDPR2016_679, HIPAA, FFIEC, NISTCSF1_1, NIST800_53Rev4, CSACCM3_0_1, ISO27001_2013, CSBP, UKNCSC, RBI2015_16_418, SOC2_AICPA_TSC_2017, GxP_Life_Science_21_CFR_PART_11, U_NNPI, AZMSWIN12R2CIS1_0_0, AZMSWIN16CIS1_0_0, AZMSWIN19CIS1_0_0,AZLinux18CIS1_1_0, AZCentOSCIS2_2_0, AZKUBERNETES1_5_0 |
| AWS                    | AWSFDCIS1_2_0, CSBP, HIPAA, PCI3_2, GDPR2016_679, NIST800_53Rev4, ISO27001_2013, SOC2_AICPA_TSC_2017, NISTCSF1_1, FFIEC, GxP_Life_Science_21_CFR_PART_11, CSACCM3_0_1, RBI2015_16_418, U_NNPI, AWSRHEL7CIS1_1_0, AWSMSWIN16CIS1_0_0, AWSKUBERNETES1_5_0                    |
| Office 365             | CSBP, CSACCM3_0_1, M365CIS1_0_0, M365CIS1_1_0, PCI3_2, GDPR2016_679, HIPAA, FFIEC, NISTCSF1_1, NIST800_53Rev4, ISO27001_2013, UKNCSC, RBI2015_16_418, GxP_Life_Science_21_CFR_PART_11, U_NNPI         |


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


