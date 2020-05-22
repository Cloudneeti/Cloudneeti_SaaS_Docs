# STEP 3: AWS inspector OS Baseline Configurations (Optional)

**This step is optional.**

Includes installing and configuring AWS Inspector Agent to assess your assessment target EC2
instances (collections of AWS resources) for potential security issues and vulnerabilities.

Amazon Inspector is a security assessment service for your Amazon EC2 instances and the applications running on those instances. Enabling AWS Inspector for a host assessment allows various OS baselines as defined by CIS automatically light up on the Cloudneeti dashboards. Please follow [link](https://aws.amazon.com/inspector/pricing/) for Amazon Inspector pricing.

Please skip this step if AWS inspector is already configured for all EC2 instances.

### 3.1 Installing SSM agent

AWS Systems Manager Agent (SSM Agent) is Amazon software that can be
installed and configured on an Amazon EC2 instance. SSM Agent makes it
possible for Systems Manager to update, manage, and configure these
resources.

SSM Agent will be used by AWS Inspector to install the AWS Inspector Agent
on the instances so that it can fetch the instance data. Follow links for installation

[SSM Agent is preinstalled, by default](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-install-ssm-agent.html){target=_blank}

[Install SSM Agent](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-manual-agent-install.html){target=_blank}


### 3.2 Creating Inspector Assessment target and template 

Once, SSM agent is installed, enable AWS Inspector in the regions where instances reside and create assessment targets and templates.

Cloudneeti currently supports RHEL instances and in the near future many other Linux distributions and Windows server editions will be supported.

Multiple assessment targets and templates can be created.  For exaple, create an assessment target is each of the Operating systems separately, and add to seperate template.
- OS = RedHat Linux
- Tags = All tags | None
- Instances = All instances

Login to [AWS portal](https://console.aws.amazon.com/){target=_blank} with AWS **Administrator** role.


### New to inspector

#### 3.2.1 Get started for inspector advance setup

1.  Navigate to the inspector page

2. Click **Get started**

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_Start.png#thumbnail)

3. Click **Advance setup**

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_AdvSetup.png#thumbnail)


#### 3.2.2 Creating assessment target

1.  Add **Name** (1)

2.  Check the **All Instances** checkbox  (2)

    **All Instances** -  the assessment target will include all the instances in the region (region where the Inspector resides) for assessment

3. Check the **Install Agents** checkbox (3)
    **Install Agents** - AWS Inspector agent will be installed on all the instances in the assessment target.

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_AssessmentTarget.png#thumbnail)

4. Click **Next**


#### 3.2.3 Creating assessment template

1. Add **Name**

2. Select rules package **CIS Operating System Security Configuration Benchmarks-1.0** Reference link [Center for Internet Security (CIS) (2)
    Benchmarks](https://docs.aws.amazon.com/inspector/latest/userguide/inspector_cis){target=_blank}

3. Set **Duration** (3), recommended is 1 hour

4. Select **Schedule** (4), recommned is 7 days

5. Click **Next** (5)
    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_TemplateConfig.png#thumbnail){target=_blank}

6. Review details and **Create**

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_ReviewandCreate.png#thumbnail){target=_blank}

#### 3.2.4 Verify assessment target

Once Assessment target is created, one can verify the status of the agents. AWS Inspector and therefore Cloudneeti, will only be able to generate/display data for instances where **Agent Status** is **Healthy**.

1.  Expand the Assessment Target created (1)

2.  Click **Preview Target** (2)

3.  A list of all the instances connected to the assessment target will appear

4.  Verify the Agent Status Column (3)

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_preview_target.png#thumbnail)


#### 3.2.5 Run assessment template

1. Run the Assessment Template if required, by default assesment template is run on creation.

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_runTemplate.png#thumbnail)

2. Verify assessment run results.
    
    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_run.png#thumbnail)


### OR Already using inspector

Login to [AWS portal](https://console.aws.amazon.com/){target=_blank} with AWS **Administrator** role.


#### 3.2.1 Creating Assessment target

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

#### 3.2.2 Verify assessment target

Once Assessment target is created, one can verify the status of the agents. AWS Inspector and therefore Cloudneeti, will only be able to generate/display data for instances where **Agent Status** is **Healthy**.

1.  Expand the Assessment Target created (1)

2.  Click **Preview Target** (2)

3.  A list of all the instances connected to the assessment target will appear

4.  Verify the Agent Status Column shows healthy for targeted instances (3)

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_preview.png#thumbnail)


#### 3.2.3 Create and run Assessment Template

1.  In the side menu, click on **Assessment templates** (1)

3.  Click **Create** (2)

4.  Add **Name** (3) and **Target Name** (4) of the Assessment target created in 
[Step 1](../../onboardingGuide/awsVMBaselineConfiguration/#step-1-installing-ssm-agent/)

5.  Select rules package **CIS Operating System Security Configuration Benchmarks-1.0** Reference link [Center for Internet Security (CIS) (5)
    Benchmarks](https://docs.aws.amazon.com/inspector/latest/userguide/inspector_cis){target=_blank}

6.  Set **Duration** (6), recommended is 1 hour

7.  Create SNS topic for notifications of events(optional). (7)

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_template1.png#thumbnail)


8.  Set **Assessment Schedule** (1), recommned is 7 days

9.  Click **Create** or **Create and run** (2)

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_template2.png#thumbnail)

#### 3.2.4 Run assessment template

1. Run the Assessment Template or wait for their schedule as per their requirement
    
    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_template_trigger_run.png#thumbnail)

2. Verify assessment run results.
    
    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_run.png#thumbnail)


### 3.3 Verify policy results on Cloudneeti (to be performed after [Step 4](/onboardingGuide/amazonWebServiceAccounts/#step-4-add-aws-account))

Cloudneeti will pick up latest analysis complete assessment run within last 30 days data from the AWS Inspector. Policies details will be available on Cloudneeti post next successful scan.

![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_RHEL_Results.png#thumbnail)


## AWS VM baseline policy list

The following Cloudneeti OS baseline policies get enabled due to AWS inspector integrations.

### RedHat Linux OS baseline policies

 | **Category**                                      | **Policy Title**                                                        |
    |---------------------------------------------------|-------------------------------------------------------------------------|
    | RHEL 7 - Access, Authentication and Authorization | Ensure at/cron is restricted to authorized users                                 |   |
    | RHEL 7 - Access, Authentication and Authorization | Ensure SSH Protocol is set to 2                                                  |   |
    | RHEL 7 - Access, Authentication and Authorization | Ensure SSH LogLevel is set to INFO                                               |   |
    | RHEL 7 - Access, Authentication and Authorization | Ensure default user shell timeout is 900 seconds or less                                               |   |
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
    | RHEL 7 - Services                                 | Ensure LDAP client is not installed                                              |   | |
    | RHEL 7 -  Initial Setup                            | Ensure address space layout randomization (ASLR) is enabled |
    | RHEL 7 -  Initial Setup                            | Ensure prelink is disabled                                  |
    | RHEL 7 -  Initial Setup                            | Ensure permissions on /etc/issue are configured             |
    | RHEL 7 -  Network Configuration                    | Ensure TCP SYN Cookies is enabled                           |
    | RHEL 7 -  Network Configuration                    | Ensure TCP Wrappers is installed                            |
    | RHEL 7 -  Network Configuration                    | Ensure iptables is installed                                |
    | RHEL 7 -  Network Configuration                    | Ensure firewall rules exist for all open ports              |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure SSH X11 forwarding is disabled                       |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure SSH MaxAuthTries is set to 4 or less                 |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure SSH IgnoreRhosts is enabled                          |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure SSH HostbasedAuthentication is disabled              |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure SSH root login is disabled                           |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure SSH PermitEmptyPasswords is disabled                 |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure SSH PermitUserEnvironment is disabled                |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure only approved MAC algorithms are used                |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure SSH Idle Timeout Interval is configured              |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure SSH LoginGraceTime is set to one minute or less      |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure SSH access is limited                                |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure SSH warning banner is configured                     |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure password reuse is limited                            |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure password hashing algorithm is SHA-512                |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure default group for the root account is GID 0          |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure minimum days between password changes is 7 or more   |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure password expiration warning days is 7 or more        |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure all users last password change date is in the past   |
    | RHEL 7 -  System Maintenance                       | Ensure permissions on /etc/shadow- are configured           |
    | RHEL 7 -  System Maintenance                       | Ensure permissions on /etc/group- are configured            |
    | RHEL 7 -  System Maintenance                       | Ensure permissions on /etc/gshadow- are configured          |
    | RHEL 7 -  System Maintenance                       | Ensure no world writable files exist                        |
    | RHEL 7 -  System Maintenance                       | Ensure no unowned files or directories exist                |
    | RHEL 7 -  System Maintenance                       | Ensure no ungrouped files or directories exist              |
    | RHEL 7 -  System Maintenance                       | Ensure no legacy "+" entries exist in /etc/passwd           |
    | RHEL 7 -  System Maintenance                       | Ensure no legacy "+" entries exist in /etc/shadow           |
    | RHEL 7 -  System Maintenance                       | Ensure no legacy "+" entries exist in /etc/group            |
    | RHEL 7 -  System Maintenance                       | Ensure root is the only UID 0 account                       |
    | RHEL 7 -  System Maintenance                       | Ensure no users have .forward files                         |
    | RHEL 7 -  System Maintenance                       | Ensure no users have .netrc files                           |
    | RHEL 7 -  Initial Setup | Ensure local login warning banner is configured properly |
    | RHEL 7 -  Initial Setup | Ensure remote login warning banner is configured properly |
    | RHEL 7 -  Initial Setup | Ensure permissions on /etc/motd are configured |
    | RHEL 7 -  Initial Setup | Ensure permissions on /etc/issue.net are configured |
    | RHEL 7 -  Network Configuration | Ensure IPv6 router advertisements are not accepted |
    | RHEL 7 -  Network Configuration | Ensure IPv6 redirects are not accepted |
    | RHEL 7 -  Network Configuration | Ensure IPv6 is disabled |
    | RHEL 7 -  Network Configuration | Ensure permissions on /etc/hosts.deny are 644 |
    | RHEL 7 -  Network Configuration | Ensure DCCP is disabled |
    | RHEL 7 -  Network Configuration | Ensure SCTP is disabled |
    | RHEL 7 -  Network Configuration | Ensure RDS is disabled |
    | RHEL 7 -  Network Configuration | Ensure TIPC is disabled |
    | RHEL 7 -  Access, Authentication and Authorization | Ensure password expiration is 90 days or less |
    | RHEL 7 -  Initial Setup | Ensure XD/NX support is enabled |
    | RHEL 7 - Initial Setup                            | Ensure bootloader password is set                                      |
| RHEL 7 - Initial Setup                            | Ensure authentication required for single user mode                    |
| RHEL 7 - Initial Setup                            | Ensure separate partition exists for /tmp                              |
| RHEL 7 - Initial Setup                            | Ensure separate partition exists for /var                              |
| RHEL 7 - Initial Setup                            | Ensure separate partition exists for /var/tmp                          |
| RHEL 7 - Initial Setup                            | Ensure separate partition exists for /var/log                          |
| RHEL 7 - Initial Setup                            | Ensure separate partition exists for /var/log/audit                    |
| RHEL 7 - Initial Setup                            | Ensure separate partition exists for /home                             |
| RHEL 7 - Initial Setup                            | Ensure mounting of FAT filesystems is disabled                         |
| RHEL 7 - Initial Setup                            | Ensure GDM login banner is configured                                  |
| RHEL 7 - Initial Setup                            | Ensure message of the day is configured properly                       |
| RHEL 7 - Services                                 | Ensure mail transfer agent is configured for local-only mode           |
| RHEL 7 - Network Configuration                    | Ensure /etc/hosts.allow is configured                                  |
| RHEL 7 - Network Configuration                    | Ensure /etc/hosts.deny is configured                                   |
| RHEL 7 - Network Configuration                    | Ensure permissions on /etc/hosts.allow are configured                  |
| RHEL 7 - Access, Authentication and Authorization | Ensure access to the su command is restricted                          |
| RHEL 7 - Access, Authentication and Authorization | Ensure permissions on /etc/crontab are configured                      |
| RHEL 7 - Access, Authentication and Authorization | Ensure permissions on /etc/cron.hourly are configured                  |
| RHEL 7 - Access, Authentication and Authorization | Ensure permissions on /etc/cron.daily are configured                   |
| RHEL 7 - Access, Authentication and Authorization | Ensure permissions on /etc/cron.weekly are configured                  |
| RHEL 7 - Access, Authentication and Authorization | Ensure permissions on /etc/cron.monthly are configured                 |
| RHEL 7 - Access, Authentication and Authorization | Ensure permissions on /etc/cron.d are configured                       |
| RHEL 7 - Access, Authentication and Authorization | Ensure permissions on /etc/ssh/sshd_config are configured              |
| RHEL 7 - Access, Authentication and Authorization | Ensure password creation requirements are configured                   |
| RHEL 7 - Access, Authentication and Authorization | Ensure system accounts are non-login                                   |
| RHEL 7 - Access, Authentication and Authorization | Ensure inactive password lock is 30 days or less                       |
| RHEL 7 - System Maintenance                       | Ensure permissions on /etc/passwd are configured                       |
| RHEL 7 - System Maintenance                       | Ensure permissions on /etc/shadow are configured                       |
| RHEL 7 - System Maintenance                       | Ensure permissions on /etc/group are configured                        |
| RHEL 7 - System Maintenance                       | Ensure permissions on /etc/gshadow are configured                      |
| RHEL 7 - System Maintenance                       | Ensure permissions on /etc/passwd- are configured                      |
| RHEL 7 - System Maintenance                       | Ensure password fields are not empty                                   |
| RHEL 7 - System Maintenance                       | Ensure root PATH Integrity                                             |
| RHEL 7 - System Maintenance                       | Ensure all users' home directories exist                               |
| RHEL 7 - System Maintenance                       | Ensure users' home directories permissions are 750 or more restrictive |
| RHEL 7 - System Maintenance                       | Ensure users own their home directories                                |
| RHEL 7 - System Maintenance                       | Ensure users' dot files are not group or world writable                |
| RHEL 7 - System Maintenance                       | Ensure users' .netrc Files are not group or world accessible           |
| RHEL 7 - System Maintenance                       | Ensure no users have .rhosts files                                     |
| RHEL 7 - System Maintenance                       | Ensure all groups in /etc/passwd exist in /etc/group                   |
| RHEL 7 - System Maintenance                       | Ensure no duplicate UIDs exist                                         |
| RHEL 7 - System Maintenance                       | Ensure no duplicate GIDs exist                                         |
| RHEL 7 - System Maintenance                       | Ensure no duplicate user names exist                                   |
| RHEL 7 - System Maintenance                       | Ensure no duplicate group names exist                                  |
