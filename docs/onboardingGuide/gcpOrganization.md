GCP Organization onboarding guide (Preview)
===========================================

## Onboarding Steps

Organization based on-boarding helps you to onboard single or all the projects
at the start and it will help to onboard future projects which will be added
within the Organization. Adding GCP Organization to CSPM needs organization
level permissions.

![GCP Organization](.././images/gcp/overview_org.png#thumbnail_1)


1. **Enable APIs on all the GCP projects present within organization** To ingest data related to GCP services to the CSPM product, need to enable [APIs listed here](../../onboardingGuide/gcpAnnexure/#gcp-apis-used-by-cspm-to-ingest-the-data). In case required APIs are not enabled in GCP projects then CSPM will not be able to collect configuration data for respective services.

2. **Create a service account** requires a service account with below mentioned viewer roles for collecting the resource configuration data. Here, you need to first create a service account at project level. 

3. **Promote service account to organization level**  updating service account create with appropriate roles at organization level.

4. **Add GCP Organization** includes adding GCP project information to the respective Cloud Account and waiting until the first data collection is complete.

| S. No | Step                                          | Performed By | Portal      |
|-------|-----------------------------------------------|--------------|-------------|
| 1     | Enable GCP APIs                               | GCP Admin    | GCP Console |
| 2     | Create a service account and assign roles     | GCP Admin    | GCP Console |
| 3     | Promote service account to organization level | GCP Admin    | GCP Console |
| 4     | Add GCP Organization                          | CSPM Admin   | CSPM Portal |

### STEP 1: Enable APIs on all the GCP projects present within organization

To ingest data related to GCP services to the CSPM product, you must enable
below APIs. In case required APIs are not enabled in GCP projects then CSPM will
not be able to collect configuration data for respective services.

To enable the APIs on GCP project follow below steps

1.  Login to GCP [Console](https://console.cloud.google.com/){target=_blank} and Open GCP Cloud
    shell

    ![GCP Organization](.././images/gcp/gcp_org_1.png#thumbnail)

2.  Execute below command to enable APIs

        gcloud services enable cloudresourcemanager.googleapis.com compute.googleapis.com sqladmin.googleapis.com storage-component.googleapis.com iam.googleapis.com logging.googleapis.com monitoring.googleapis.com bigquery.googleapis.com dns.googleapis.com cloudasset.googleapis.com serviceusage.googleapis.com 


    ![GCP Organization](.././images/gcp/gcp_org_2.png#thumbnail)

3.  Open API and Services portal to verify API status

    ![GCP Organization](.././images/gcp/gcp_org_3.png#thumbnail)

    ![GCP Organization](.././images/gcp/gcp_org_4.png#thumbnail)


### STEP 2: Create a service account

GCP organization onboarding to the CSPM requires a service account with below
mentioned viewer roles for collecting the resource configuration data. Here, you
need to first create a service account at project level and then it needs to be
promoted to organization level.

Service account requires below roles on the GCP organization,

| Role                | Type     | Details                                                  |
|---------------------|----------|----------------------------------------------------------|
| Organization Viewer | Built-In | Read only access to view an organization                 |
| Folder Viewer       | Built-In | Read only access to get a folder and list the folders    |
| Project Viewer      | Built-In | Read only access to resource metadata present in project |
| Cloud Asset Viewer  | Built-In | Read only access to cloud assets metadata                |

Follow below steps to create, promote and assign roles to the service account at
organization level.

1.  Go to Service Accounts present in the **IAM & Admin** menu.

2.  Click on **CREATE SERVICE ACCOUNT**

    ![GCP Organization](.././images/gcp/gcp_org_5.png#thumbnail)

3.  Input service account name and description and click on **CREATE** to proceed

    ![GCP Organization](.././images/gcp/gcp_org_6.png#thumbnail)

4.  Click **CONTINUE** on the service account permissions screen

    ![GCP Organization](.././images/gcp/gcp_org_7.png#thumbnail)

5.  Click on **DONE** on Grant user access to this service account to finish the
    service account creation.

6.  Click on the service account created during the previous step and create a
    Keys.

    Select Key type as JSON and click on CREATE to create a service account key.

    ![GCP Organization](.././images/gcp/gcp_org_8.png#thumbnail)

7.  Service account key will get created and downloaded on your local machine.

    Store this JSON file in a secure location. This JSON file is used to perform
    onboarding in the CSPM.

    ![GCP Organization](.././images/gcp/gcp_org_9.png#thumbnail)

8.  Search service account and copy the email id

    ![GCP Organization](.././images/gcp/gcp_org_10.png#thumbnail)

### STEP 3: Promote service account to organization level with appropriate roles

To promote the service account at organization level, follow below steps.

1.  Click on project dropdown on the top and select your organization

    ![GCP Organization](.././images/gcp/gcp_org_11.png#thumbnail)

2.  Go to **IAM & Admin** menu from left navigation menu

3.  Click on **IAM**

4.  Click on **ADD** to add service account at organization level

5.  Fill the below information
    -   New Members 🡪 Service account email copied in step 2
    -   Role 🡪 Organization, Folder, Project and Cloud Asset Viewer

6.  Click on **SAVE** to finish.

    ![GCP Organization](.././images/gcp/gcp_org_12.png#thumbnail)

7.  Verify and confirm the required roles on newly promoted service account

    ![GCP Organization](.././images/gcp/gcp_org_13.png#thumbnail)

### STEP 4: Add GCP Organization

To onboard GCP project on the CSPM Portal, you need to perform below steps in
CSPM portal.

1.  Login to [CSPM portal](https://app.cloudneeti.com){target=_blank} with license admin role

2.  Activate the license by clicking on **Activate License**.

    This step needs to be performed only once after license provisioning from
    the CSPM team.

    <!-- ![GCP Organization](.././images/gcp/overview_org.png#thumbnail) -->

3.  Select GCP connector type

    ![GCP Organization](.././images/gcp/addAccount.png#thumbnail)

4.  Enter **Cloud Account Name** to identify the project and select Onboard
    Using as **Organization**

    ![GCP Organization](.././images/gcp/addAccount_org.png#thumbnail)

5.  Click on **Upload** button to upload service account credentials file created in
    step 2. 

    ![GCP Organization](.././images/gcp/addAccount_org_2.png#thumbnail)

6.  Select organization from the organization dropdown

7.  Select project from the **Select Project** dropdown which you want to
    onboard and click on Add Account button to add project to CSPM

    ![GCP Organization](.././images/gcp/addAccount_org_3.png#thumbnail)

8.  You will receive a confirmation that the GCP project has been added to CSPM

    ![GCP Organization](.././images/gcp/addAccount_org_4.png#thumbnail)

9.  CSPM takes 5-10 minutes to collect and process the configuration data in the
    backend before it can be displayed on dashboards. Click on **Go To Dashboard** to see collected data.

    ![GCP Organization](.././images/gcp/addAccount_org_5.png#thumbnail)

10.  Refer [Annexure](#../../onboardingGuide/gcpAnnexure/#onboarding-health-status-page) to check the Onboarding Health Status. It provides insights into the state of your cloud account onboarded in CSPM like completed pre-requisite permissions, configurations.

