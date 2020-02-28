AWS inspector configuration (Optional)
========================================

Includes installing and configuring AWS Inspector Agent to assess your assessment target EC2
instances (collections of AWS resources) for potential security issues and
vulnerabilities.

Please skip this step if AWS inspector is already configured for all EC2 instances.

STEP 1 Installing SSM agent
---------------------------

AWS Systems Manager Agent (SSM Agent) is Amazon software that can be
installed and configured on an Amazon EC2 instance. SSM Agent makes it
possible for Systems Manager to update, manage, and configure these
resources.

SSM Agent will be used by AWS Inspector to install the AWS Inspector Agent
on the instances so that it can fetch the instance data.

Follow links for installation

[SSM Agent is preinstalled, by default](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-install-ssm-agent.html)

[Install SSM Agent](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-manual-agent-install.html)


STEP 2 Creating Inspector Assessment target and template first time
-------------------------------------------------------------------
Login to [AWS portal](https://console.aws.amazon.com/) with AWS **Administrator** role.

### 2.1 Get started for inspector advance setup

1.  Navigate to the inspector page

2. Click **Get started**

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_Start.png#thumbnail)

3. Click **Advance setup**

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_AdvSetup.png#thumbnail)


### 2.2 Creating assessment target

1.  Add **Name** (1)

2.  Check the **All Instances** checkbox  (2)

    **All Instances** -  the assessment target will include all the instances in the region (region where the Inspector resides) for assessment

3. Check the **Install Agents** checkbox (3)
    **Install Agents** - AWS Inspector agent will be installed on all the instances in the assessment target.

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_AssessmentTarget.png#thumbnail)

4. Click **Next**


### 2.3 Creating assessment template

1. Add **Name**

2. Select rules package **CIS Operating System Security Configuration Benchmarks-1.0** Reference link [Center for Internet Security (CIS) (2)
    Benchmarks](https://docs.aws.amazon.com/inspector/latest/userguide/inspector_cis)

3. Set **Duration** (3)

4. Select **Schedule** (4)

5. Click **Next** (5)
    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_TemplateConfig.png#thumbnail)

6. Review details and **Create**

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_ReviewandCreate.png#thumbnail)


### 2.4 Run assessment template

1. Run the Assessment Template if required, by default assesment template is run on creation.

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_runTemplate.png#thumbnail)

2. Verify assessment run results.
    
    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_run.png#thumbnail)



OR STEP 2 Creating Inspector Assessment target and template
-----------------------------------------------------------

Once, SSM agent is installed, users need to enable AWS Inspector in the regions
where their instances reside and create assessment targets and templates.

Login to [AWS portal](https://console.aws.amazon.com/) with AWS **Administrator** role.


### 2.1 Creating Assessment target

1.  Navigate to the inspector page

2.  In the side menu, click on **Assessment targets** (1)

3.  Click **Create** (2)

4.  Add **Name** (3)

5.  Check the **All Instances** checkbox  (4)

    **All Instances** -  the assessment target will include all the instances in the region (region where the Inspector resides) for assessment

6. Check the **Install Agents** checkbox (5)
    **Install Agents** - AWS Inspector agent will be installed on all the instances in the assessment target.

6.  **Next**. (5)

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_create.png#thumbnail)

### 2.2 Verify assessment target

Once Assessment target is created, one can verify the status of the agents as follows:

1.  Expand the Assessment Target created (1)

2.  Click **Preview Target** (2)

3.  A list of all the instances connected to the assessment target will appear

4.  Verify the Agent Status Column (3)

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_preview.png#thumbnail)

**Note :** AWS Inspector and therefore Cloudneeti, will only be able to generate/display data for instances where **Agent Status is Healthy.**

### 2.3 Create and run Assessment Template

1.  In the side menu, click on **Assessment templates** (1)

3.  Click **Create** (2)

4.  Add **Name** (3) and **Target Name** (4) of the Assessment target created in 
[Step 1](../../onboardingGuide/awsVMBaselineConfiguration/#step-1-installing-ssm-agent/)

5.  Select rules package **CIS Operating System Security Configuration Benchmarks-1.0** Reference link [Center for Internet Security (CIS) (5)
    Benchmarks](https://docs.aws.amazon.com/inspector/latest/userguide/inspector_cis)

6.  Set **Duration** (6) 

7.  Create SNS topic for notifications of events(optional). (7)

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_template1.png#thumbnail)


8.  Set **Assessment Schedule** (1)

9.  Click **Create** or **Create and run** (2)

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_template2.png#thumbnail)

### 2.4 Run assessment template

1. Run the Assessment Template or wait for their schedule as per their requirement
    
    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_template_trigger_run.png#thumbnail)

2. Verify assessment run results.
    
    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_run.png#thumbnail)


STEP 3 Verify policy results on Cloudneeti 
-------------------------------------------

Cloudneeti will pick up latest analysis complete assessment run within last 30 days data from the AWS Inspector. Policies details will be available on Cloudneeti post next successful scan.

![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_RHEL_Results.png#thumbnail)


## AWS VM baseline policy list
The AWS inspector configuration enables the following 66 policies.

 | **Category**                                      | **Policy Title**                                                        |
    |---------------------------------------------------|-------------------------------------------------------------------------|
    | RHEL 7 - Access, Authentication and Authorization | Ensure at/cron is restricted to authorized users                                 |   |
    | RHEL 7 - Access, Authentication and Authorization | Ensure SSH Protocol is set to 2                                                  |   |
    | RHEL 7 - Access, Authentication and Authorization | Ensure SSH LogLevel is set to INFO                                               |   |
    | RHEL 7 - Initial Setup                            | Ensure updates, patches, and additional security software are installed          |   |
    | RHEL 7 - Initial Setup                            | Ensure nodev option set on /tmp partition                                        |   |
    | RHEL 7 - Initial Setup                            | Ensure nosuid option set on /tmp partition                                       |   |
    | RHEL 7 - Initial Setup                            | Ensure noexec option set on /tmp partition                                       |   |
    | RHEL 7 - Initial Setup                            | Ensure nodev option set on /dev/shm partition                                    |   |
    | RHEL 7 - Initial Setup                            | Ensure nosuid option set on /dev/shm partition                                   |   |
    | RHEL 7 - Initial Setup                            | Ensure noexec option set on /dev/shm partition                                   |   |
    | RHEL 7 - Initial Setup                            | Ensure mounting of cramfs filesystems is disabled                                |   |
    | RHEL 7 - Initial Setup                            | Ensure mounting of freevxfs filesystems is disabled                              |   |
    | RHEL 7 - Initial Setup                            | Ensure mounting of jffs2 filesystems is disabled                                 |   |
    | RHEL 7 - Initial Setup                            | Ensure mounting of hfs filesystems is disabled                                   |   |
    | RHEL 7 - Initial Setup                            | Ensure mounting of hfsplus filesystems is disabled                               |   |
    | RHEL 7 - Initial Setup                            | Ensure mounting of squashfs filesystems is disabled                              |   |
    | RHEL 7 - Initial Setup                            | Ensure mounting of udf filesystems is disabled                                   |   |
    | RHEL 7 - Initial Setup                            | Ensure gpgcheck is globally activated                                            |   |
    | RHEL 7 - Initial Setup                            | Ensure AIDE is installed                                                         |   |
    | RHEL 7 - Initial Setup                            | Ensure filesystem integrity is regularly checked                                 |   |
    | RHEL 7 - Initial Setup                            | Ensure permissions on bootloader config are configured                           |   |
    | RHEL 7 - Initial Setup                            | Ensure SELinux is installed                                                      |   |
    | RHEL 7 - Initial Setup                            | Ensure SELinux is not disabled in bootloader configuration                       |   |
    | RHEL 7 - Initial Setup                            | Ensure the SELinux state is enforcing                                            |   |
    | RHEL 7 - Initial Setup                            | Ensure SELinux policy is configured                                              |   |
    | RHEL 7 - Initial Setup                            | Ensure SETroubleshoot is not installed                                           |   |
    | RHEL 7 - Initial Setup                            | Ensure the MCS Translation Service (mcstrans) is not installed                   |   |
    | RHEL 7 - Logging and Auditing                     | Ensure rsyslog or syslog-ng is installed                                         |   |
    | RHEL 7 - Logging and Auditing                     | Ensure permissions on all logfiles are configured                                |   |
    | RHEL 7 - Logging and Auditing                     | Ensure rsyslog default file permissions configured                               |   |
    | RHEL 7 - Logging and Auditing                     | Ensure rsyslog is configured to send logs to a remote log host                   |   |
    | RHEL 7 - Logging and Auditing                     | Ensure syslog-ng default file permissions configured                             |   |
    | RHEL 7 - Logging and Auditing                     | Ensure auditing for processes that start prior to auditd is enabled              |   |
    | RHEL 7 - Logging and Auditing                     | Ensure events that modify date and time information are collected                |   |
    | RHEL 7 - Logging and Auditing                     | Ensure events that modify user/group information are collected                   |   |
    | RHEL 7 - Logging and Auditing                     | Ensure events that modify the system's network environment are collected         |   |
    | RHEL 7 - Logging and Auditing                     | Ensure events that modify the system's Mandatory Access Controls are collected   |   |
    | RHEL 7 - Logging and Auditing                     | Ensure login and logout events are collected                                     |   |
    | RHEL 7 - Logging and Auditing                     | Ensure session initiation information is collected                               |   |
    | RHEL 7 - Logging and Auditing                     | Ensure discretionary access control permission modification events are collected |   |
    | RHEL 7 - Logging and Auditing                     | Ensure unsuccessful unauthorized file access attempts are collected              |   |
    | RHEL 7 - Logging and Auditing                     | Ensure successful file system mounts are collected                               |   |
    | RHEL 7 - Logging and Auditing                     | Ensure file deletion events by users are collected                               |   |
    | RHEL 7 - Logging and Auditing                     | Ensure system administrator actions (sudolog) are collected                      |   |
    | RHEL 7 - Logging and Auditing                     | Ensure the audit configuration is immutable                                      |   |
    | RHEL 7 - Logging and Auditing                     | Ensure audit log storage size is configured                                      |   |
    | RHEL 7 - Logging and Auditing                     | Ensure system is disabled when audit logs are full                               |   |
    | RHEL 7 - Logging and Auditing                     | Ensure audit logs are not automatically deleted                                  |   |
    | RHEL 7 - Network Configuration                    | Ensure IP forwarding is disabled                                                 |   |
    | RHEL 7 - Network Configuration                    | Ensure packet redirect sending is disabled                                       |   |
    | RHEL 7 - Network Configuration                    | Ensure source routed packets are not accepted                                    |   |
    | RHEL 7 - Network Configuration                    | Ensure ICMP redirects are not accepted                                           |   |
    | RHEL 7 - Network Configuration                    | Ensure secure ICMP redirects are not accepted                                    |   |
    | RHEL 7 - Network Configuration                    | Ensure suspicious packets are logged                                             |   |
    | RHEL 7 - Network Configuration                    | Ensure broadcast ICMP requests are ignored                                       |   |
    | RHEL 7 - Network Configuration                    | Ensure bogus ICMP responses are ignored                                          |   |
    | RHEL 7 - Network Configuration                    | Ensure Reverse Path Filtering is enabled                                         |   |
    | RHEL 7 - Services                                 | Ensure X Window System is not installed                                          |   |
    | RHEL 7 - Services                                 | Ensure time synchronization is in use                                            |   |
    | RHEL 7 - Services                                 | Ensure ntp is configured                                                         |   |
    | RHEL 7 - Services                                 | Ensure chrony is configured                                                      |   |
    | RHEL 7 - Services                                 | Ensure NIS Client is not installed                                               |   |
    | RHEL 7 - Services                                 | Ensure rsh client is not installed                                               |   |
    | RHEL 7 - Services                                 | Ensure talk client is not installed                                              |   |
    | RHEL 7 - Services                                 | Ensure telnet client is not installed                                            |   |
    | RHEL 7 - Services                                 | Ensure LDAP client is not installed                                              |   |
                              |
