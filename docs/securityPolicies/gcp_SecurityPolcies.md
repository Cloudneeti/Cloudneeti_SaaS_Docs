
The Security Policies view provides a list of all security policies within the Cloudneeti application. Following is the security policies within the Cloudneeti application for different cloud account types, please refer [Release Notes](../../releaseNotes/2020/){target=_blank} for latest updates.

**GCP Security Policies**
----------------------
	
   | **Category Name**           | **Policy Name**                                                                               |
   |------------------------|------------------------------------------------------------------------------------------------|
   | GCP - Identity and Access Management | Ensure that corporate login credentials are used                                                                           |
   | GCP - Identity and Access Management | Ensure that multi-factor authentication is enabled for all non-service accounts                                            |
   | GCP - Identity and Access Management | Ensure that there are only GCP-managed service account keys for each service account                                       |
   | GCP - Identity and Access Management | Ensure that Service Account has no Admin privileges                                                                        |
   | GCP - Identity and Access Management | Ensure that IAM users are not assigned the Service Account User or Service Account Token Creator roles at project level    |
   | GCP - Identity and Access Management | Ensure user-managed/external keys for service accounts are rotated every 90 days or less                                   |
   | GCP - Identity and Access Management | Ensure that Cloud KMS cryptokeys are not anonymously or publicly accessible                                                |
   | GCP - Identity and Access Management | Ensure KMS encryption keys are rotated within a period of 90 days                                                          |
   | GCP - Identity and Access Management | Ensure API keys are restricted to use by only specified Hosts and Apps                                                     |
   | GCP - Identity and Access Management | Ensure API keys are restricted to only APIs that application needs access                                                  |
   | GCP - Identity and Access Management | Ensure that corporate login credentials are used                                                                           |
   | GCP - Identity and Access Management | Ensure that Security Key Enforcement is enabled for all admin accounts                                                     |
   | GCP - Identity and Access Management | Ensure that Separation of duties is enforced while assigning service account related roles to users                        |
   | GCP - Identity and Access Management | Ensure that Separation of duties is enforced while assigning KMS related roles to users                                    |
   | GCP - Identity and Access Management | Ensure API keys are not created for a project                                                                              |
   | GCP - Logging and Monitoring         | Ensure that Cloud Audit Logging is configured properly across all services and all users from a project                    |
   | GCP - Logging and Monitoring         | Ensure that sinks are configured for all log entries                                                                       |
   | GCP - Logging and Monitoring         | Ensure that retention policies on log buckets are configured using Bucket Lock                                             |
   | GCP - Logging and Monitoring         | Ensure log metric filter and alerts exist for project ownership assignments/changes                                        |
   | GCP - Logging and Monitoring         | Ensure that the log metric filter and alerts exist for Audit Configuration changes                                         |
   | GCP - Logging and Monitoring         | Ensure that the log metric filter and alerts exist for Custom Role changes                                                 |
   | GCP - Logging and Monitoring         | Ensure that the log metric filter and alerts exist for VPC Network Firewall rule changes                                   |
   | GCP - Logging and Monitoring         | Ensure that the log metric filter and alerts exist for VPC network route changes                                           |
   | GCP - Logging and Monitoring         | Ensure that the log metric filter and alerts exist for VPC network changes                                                 |
   | GCP - Logging and Monitoring         | Ensure that the log metric filter and alerts exist for Cloud Storage IAM permission changes                                |
   | GCP - Logging and Monitoring         | Ensure that the log metric filter and alerts exist for SQL instance configuration changes                                  |
   | GCP - Networking                     | Ensure that the default network does not exist in a project                                                                |
   | GCP - Networking                     | Ensure legacy networks do not exist for a project                                                                          |
   | GCP - Networking                     | Ensure that DNSSEC is enabled for Cloud DNS                                                                                |
   | GCP - Networking                     | Ensure that RSASHA1 is not used for the key-signing key in Cloud DNS DNSSEC                                                |
   | GCP - Networking                     | Ensure that RSASHA1 is not used for the zone-signing key in Cloud DNS DNSSEC                                               |
   | GCP - Networking                     | Ensure that SSH access is restricted from the internet                                                                     |
   | GCP - Networking                     | Ensure that RDP access is restricted from the Internet                                                                     |
   | GCP - Networking                     | Ensure that VPC Flow Logs is enabled for every subnet in a VPC Network                                                     |
   | GCP - Networking                     | Ensure no HTTPS or SSL proxy load balancers permit SSL policies with weak cipher suites                                    |
   | GCP - Compute                        | Ensure that instances are not configured to use the default service account                                                |
   | GCP - Compute                        | Ensure that instances are not configured to use the default service account with full access to all Cloud APIs             |
   | GCP - Compute                        | Ensure "Block Project-wide SSH keys" is enabled for VM instances                                                           |
   | GCP - Compute                        | Ensure oslogin is enabled for a Project                                                                                    |
   | GCP - Compute                        | Ensure "Enable connecting to serial ports" is not enabled for VM Instance                                                  |
   | GCP - Compute                        | Ensure that IP forwarding is not enabled on Instances                                                                      |
   | GCP - Compute                        | Ensure VM disks for critical VMs are encrypted with Customer-Supplied Encryption Keys                                      |
   | GCP - Compute                        | Ensure Compute instances are launched with Shielded VM enabled                                                             |
   | GCP - Compute                        | Ensure that Compute instances do not have public IP addresses                                                              |
   | GCP - Compute                        | Ensure that App Engine applications enforce HTTPS connections                                                              |
   | GCP - Storage and Database           | Ensure that Cloud Storage bucket is not anonymously or publicly accessible                                                 |
   | GCP - Storage and Database           | Ensure that Cloud Storage buckets have uniform bucket-level access enabled                                                 |
   | GCP - Storage and Database           | Ensure that the Cloud SQL database instance requires all incoming connections to use SSL                                   |
   | GCP - Storage and Database           | Ensure that Cloud SQL database instances are not open to the world                                                         |
   | GCP - Storage and Database           | Ensure that Cloud SQL database instances do not have public IPs                                                            |
   | GCP - Storage and Database           | Ensure that Cloud SQL database instances are configured with automated backups                                             |
   | GCP - Storage and Database           | Ensure that a MySQL database instance does not allow anyone to connect with administrative privileges                      |
   | GCP - Storage and Database           | Ensure that the 'local_infile' database flag for a Cloud SQL Mysql instance is set to 'off'                                |
   | GCP - Storage and Database           | Ensure that the 'log_checkpoints' database flag for Cloud SQL PostgreSQL instance is set to 'on'                           |
   | GCP - Storage and Database           | Ensure that the 'log_connections' database flag for Cloud SQL PostgreSQL instance is set to 'on'                           |
   | GCP - Storage and Database           | Ensure that the 'log_disconnections' database flag for Cloud SQL PostgreSQL instance is set to 'on'                        |
   | GCP - Storage and Database           | Ensure that the 'log_lock_waits' database flag for Cloud SQL PostgreSQL instance is set to 'on'                            |
   | GCP - Storage and Database           | Ensure that the 'log_min_messages' database flag for Cloud SQL PostgreSQL instance is set appropriately                    |
   | GCP - Storage and Database           | Ensure that the 'log_temp_files' database flag for Cloud SQL PostgreSQL instance is set to '0' (on)                        |
   | GCP - Storage and Database           | Ensure that the 'log_min_duration_statement' database flag for Cloud SQL PostgreSQL instance is set to '-1' (disabled)     |
   | GCP - Storage and Database           | Ensure that the 'cross db ownership chaining' database flag for Cloud SQL SQL Server instance is set to 'off'              |
   | GCP - Storage and Database           | Ensure that the 'contained database authentication' database flag for Cloud SQL on the SQL Server instance is set to 'off' |
   | GCP - Storage and Database           | Ensure that BigQuery datasets are not anonymously or publicly accessible                                                   |


    
    
