GCP Project onboarding Guide (Preview)
======================================

## Onboarding Steps

Project based on-boarding helps to onboard single or multiple projects present
within organization or without any Organization. In case you want to onboard
multiple projects then provide CSPM service account access on multiple projects.

![GCP Project](.././images/gcp/overview.png#thumbnail_1)

1. **Enable APIs on the GCP project** to ingest data related to GCP services to the CSPM product, [APIs listed here](../../onboardingGuide/gcpAnnexure/#gcp-apis-used-by-cspm-to-ingest-the-data){target=_blank} needs to be enabled. In case required APIs are not enabled in GCP projects then CSPM will not be able to collect configuration data for respective services.

2. **Create a service account and assign roles** requires a service account with viewer roles for collecting the resource configuration data.

3. **Add GCP Project**  includes adding GCP project information to the respective Cloud Account and waiting until the first data collection is complete.


To onboard GCP projects to CSPM involves below steps,

| S. No | Step                                      | Performed By | Portal      |
|--------|-------------------------------------------|--------------|-------------|
| 1      | Enable GCP APIs                           | GCP Admin    | GCP Console |
| 2      | Create a service account and assign roles | GCP Admin    | GCP Console |
| 3      | Add GCP Organization or Project to CSPM   | CSPM Admin   | CSPM Portal |



## STEP 1: Enable APIs on the GCP project

To ingest data related to GCP services to the CSPM product, you must enable below APIs. In case required APIs are not enabled in GCP projects then CSPM will not be able to collect configuration data for respective services.

To enable the APIs on GCP project follow below steps

1.  Login to GCP [Console](https://console.cloud.google.com/){target=_blank} as project editor/owner role and open GCP Cloud shell.

    ![GCP Project](.././images/gcp/gcp_img_1.png#thumbnail)

2.  Execute below command to enable APIs

        gcloud services enable cloudresourcemanager.googleapis.com compute.googleapis.com sqladmin.googleapis.com storage-component.googleapis.com iam.googleapis.com logging.googleapis.com monitoring.googleapis.com bigquery.googleapis.com dns.googleapis.com cloudasset.googleapis.com serviceusage.googleapis.com 


    ![GCP Project](.././images/gcp/gcp_img_2.png#thumbnail)

3.  Open API and Services portal to verify API status

    ![GCP Project](.././images/gcp/gcp_img_3.png#thumbnail)


    ![GCP](.././images/gcp/gcp_img_4.png#thumbnail)


## STEP 2: Create a service account and assign roles

GCP Project onboarding to CSPM, requires a service account with below viewer
roles for collecting the resource configuration data.

Service account requires below roles on the GCP project,

| Role               | Type      | Details                                                  |
|--------------------|-----------|----------------------------------------------------------|
| Project Viewer     | Primitive | Read only access to resource metadata present in project |
| Cloud Asset Viewer | Primitive | Read only access to cloud assets metadata                |

Follow below steps to create and assign roles to the service account.

1.  Login to [GCP console](https://console.cloud.google.com/){target=_blank} with project
    editor/owner role.

2.  Go to Service Accounts present in the IAM & Admin menu

3.  Click on **CREATE SERVICE ACCOUNT**

    ![GCP Project](.././images/gcp/gcp_img_5.png#thumbnail)

4.  Input service account name and description and click on **CREATE** to proceed

    ![GCP Project](.././images/gcp/gcp_img_6.png#thumbnail)

5.  On Grant this service account access to project screen add the CSPM
    mentioned roles

6.  Click on Select a Role and assign Project Viewer role

    ![GCP Project](.././images/gcp/gcp_img_7.png#thumbnail)

7.  Click on **ADD ANOTHER ROLE** to add Cloud Asset Viewer role

    ![GCP Project](.././images/gcp/gcp_img_8.png#thumbnail)

8.  Click on **CONTINUE** to save the role selections

9.  Click on **DONE** on Grant user access to this service account to finish the
    service account creation.

    ![GCP Project](.././images/gcp/gcp_img_8.png#thumbnail)

10.  Click on the service account created during the previous step and create a
    Keys.

    -   Select Key type as JSON and click on CREATE to create a service account key.

    ![GCP Project](.././images/gcp/gcp_img_9.png#thumbnail)

11.  Service account key will get created and downloaded on your local machine.

    -   Store this JSON file in a secure location. This JSON file is used to perform onboarding in the CSPM.

    ![GCP Project](.././images/gcp/gcp_img_10.png#thumbnail)

**Note:** In case you want to onboard multiple projects on CSPM then enable APIs
and provide required permissions to the service account created in the step 2.

Refer [Annexure](../../onboardingGuide/gcpAnnexure/#provide-service-account-access-on-multiple-gcp-project) for providing service account access on multiple projects.

## STEP 3: Add GCP Project

To onboard GCP project on the CSPM Portal, you need to perform below steps in CSPM portal.

1.  Login to [CSPM portal](https://app.cloudneeti.com){target=_blank} with license admin role

2.  Activate the license by clicking on **Activate License**.
    This step needs to be performed only once after license provisioning from the CSPM team.

    <!-- ![GCP Project](.././images/gcp/gcp1.png#thumbnail) -->

3.  Select GCP connector type

    ![GCP Project](.././images/gcp/addAccount.png#thumbnail)

4.  Enter **Cloud Account Name** to identify the project and select Onboard Using as **Project**

    ![GCP Project](.././images/gcp/addAccount_2.png#thumbnail)

5.  Click on **Upload** button to upload service account credentials file created in
    step 2. 

    ![GCP Project](.././images/gcp/gcp_1.png#thumbnail)

6.  Select project from the **Select Project** dropdown and click on Add Account
    button to add project to CSPM

    ![GCP Project](.././images/gcp/gcp_2.png#thumbnail)

7.  You will receive a confirmation that the GCP project has been added to CSPM

    ![GCP Project](.././images/gcp/gcp_3.png#thumbnail)

8.  CSPM takes 5-10 minutes to collect and process the configuration data in the
    backend before it can be displayed on dashboards. Click on Go To Dashboard to see collected data.

    ![GCP Project](.././images/gcp/gcp_4.png#thumbnail)

9.  Refer [Annexure](../../onboardingGuide/gcpAnnexure/#onboarding-health-status-page){target=_blank} to check the Onboarding Health Status. It provides insights into the state of your cloud account onboarded in CSPM like completed pre-requisite permissions, configurations.

