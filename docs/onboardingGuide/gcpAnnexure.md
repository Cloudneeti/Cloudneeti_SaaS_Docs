Annexure
========

GCP APIs used by CSPM to ingest the data
----------------------------------------

Following APIs are used by CSPM to ingest the data associated with GCP assets
and configurations.

| API Title                                | Role Name                                      | Permission Used by CSPM                           | 
|------------------------------------------|------------------------------------------------|---------------------------------------------------|
| Cloud Resource Manager API               | Organization Viewer                            | resourcemanager.organizations.get                 |
|                                          | Folder Viewer                                  | resourcemanager.folders.get                       |
|                                          | Project Viewer                                 | resourcemanager.projects.get                      |
|                                          |                                                | resourcemanager.projects.getIamPolicy             |
|                                          |                                                | resourcemanager.projects.get                      |
|                                          |                                                | resourcemanager.projects.getIamPolicy             |
| Compute Engine API                       | Project Viewer                                 | compute.firewalls.get                             |
|                                          |                                                | compute.firewalls.list                            |
|                                          |                                                | compute.instances.get                             |
|                                          |                                                | compute.instances.list                            |
|                                          |                                                | compute.networks.get                              |
|                                          |                                                | compute.networks.list                             |
|                                          |                                                | compute.projects.get                              |
|                                          |                                                | compute.regions.list                              |
|                                          |                                                | compute.sslPolicies.get                           |
|                                          |                                                | compute.sslPolicies.list                          |
|                                          |                                                | compute.subnetworks.get                           |
|                                          |                                                | compute.subnetworks.list                           |
|                                          |                                                | compute.targetHttpsProxies.get                     |
|                                          |                                                | compute.targetHttpsProxies.list                    |
|                                          |                                                | compute.zones.list                                 |
| Cloud SQL Admin API                      | Project Viewer                                 | cloudsql.instances.get                             |
|                                          |                                                | cloudsql.instances.list                            |
| Cloud Storage                            | Project Viewer                                 | storage.buckets.list                               |
|                                          |                                                | storage.buckets.get                                |
|                                          |                                                | storage.buckets.getIamPolicy                       |
| Identity and Access Management (IAM) API | Project Viewer                                 | iam.serviceAccountKeys.list                        |
|                                          |                                                | iam.serviceAccounts.list                           |
| Cloud Logging API                        | Project Viewer                                 | logging.logMetrics.list                            |
|                                          |                                                | logging.sinks.get                                  |
|                                          |                                                | logging.sinks.list                                 |
| Cloud Monitoring API                     | Project Viewer                                 | monitoring.alertPolicies.get                       |
|                                          |                                                | monitoring.alertPolicies.list                      |
|                                          |                                                | monitoring.metricDescriptors.get                   |
| BigQuery API                             | Project Viewer                                 | bigquery.datasets.get                              |
| Cloud DNS API                            | Project Viewer                                 | dns.managedZones.get                               |
|                                          |                                                | dns.managedZones.list                              |
| Cloud Asset API                          | Cloud Asset Viewer                             | cloudasset.assets.searchAllIamPolicies             |
|                                          |                                                | cloudasset.assets.searchAllResources               |
| Service Usage API                        | Project Viewer                                 | [serviceusage.googleapis.com](http://serviceusage.googleapis.com)  |

Provide service account access on multiple GCP project
------------------------------------------------------

To provide service account permission on multiple GCP project follow below steps

1.  Search and copy service account email

    ![GCP Annexture](.././images/gcp/gcp_common_1.png#thumbnail)

2.  Select different project which you want to onboard to CSPM

3.  Go to **IAM & Admin** menu from left navigation menu

4.  Click on **IAM**

5.  Click on **ADD** to add service account required access on the project

6.  Fill the below information

7.  Click on **SAVE** to finish.

    -   New Members 🡪 Service account email copied in step 1
    -   Role 🡪 Project and Cloud Asset Viewer

    ![GCP Annexture](.././images/gcp/gcp_common_2.png#thumbnail)



Onboarding Health Status Page
-----------------------------

The Onboarding Health Status page provides insights into the state of your cloud
account onboarded in CSPM like completed pre-requisite permissions,
configurations, scan quota consumed on every cloud account scan.

License Admins and Account Admins will have the rights to view cloud account's
onboarding Health Status

1.  Navigate to **Cloud Accounts** page from **Configurations** menu

    ![GCP Annexture](.././images/gcp/gcp_common_3.png#thumbnail)

2.  Click **Onboarding Health Status** in **Configure Account** menu

    ![GCP Annexture](.././images/gcp/gcp_common_4.png#thumbnail)

3.  Explore prerequisite sections to see status of related permissions and/or
    configurations

    ![GCP Annexture](.././images/gcp/gcp_common_5.png#thumbnail)
