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

Cloudneeti currently supports RHEL and Windows Server 16 instances and in the near future many other Linux distributions and Windows server editions will be supported.

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


### Windows Server 2016 OS baseline policies

| Category Name               | Policy Name                                                                                                                                                                                                                   |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Win OS-16 - Registry Policy | Ensure 'Disallow Digest authentication' is set to 'Enabled'                                                                                                                                                                   |
| Win OS-16 - Registry Policy | Ensure 'Include command line in process creation events' is set to 'Disabled'                                                                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'Turn off downloading of print drivers over HTTP' is set to 'Enabled'                                                                                                                                                  |
| Win OS-16 - Registry Policy | Ensure 'Turn off app notifications on the lock screen' is set to 'Enabled'                                                                                                                                                    |
| Win OS-16 - Registry Policy | Ensure 'Configure Offer Remote Assistance' is set to 'Disabled'                                                                                                                                                               |
| Win OS-16 - Registry Policy | Ensure 'Configure Solicited Remote Assistance' is set to 'Disabled'                                                                                                                                                           |
| Win OS-16 - Registry Policy | Ensure 'Disallow Autoplay for non-volume devices' is set to 'Enabled'                                                                                                                                                         |
| Win OS-16 - Registry Policy | Ensure 'Turn off Autoplay' is set to 'Enabled: All drives'                                                                                                                                                                    |
| Win OS-16 - Registry Policy | Ensure 'Do not display the password reveal button' is set to 'Enabled'                                                                                                                                                        |
| Win OS-16 - Registry Policy | Ensure 'Enumerate administrator accounts on elevation' is set to 'Disabled'                                                                                                                                                   |
| Win OS-16 - Registry Policy | Ensure 'Application: Control Event Log behavior when the log file reaches its maximum size' is set to 'Disabled'                                                                                                              |
| Win OS-16 - Registry Policy | Ensure 'Setup: Specify the maximum log file size (KB)' is set to 'Enabled: 32,768 or greater'                                                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'System: Specify the maximum log file size (KB)' is set to 'Enabled: 32,768 or greater'                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Security: Control Event Log behavior when the log file reaches its maximum size' is set to 'Disabled'                                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'Security: Specify the maximum log file size (KB)' is set to 'Enabled: 196,608 or greater'                                                                                                                             |
| Win OS-16 - Registry Policy | Ensure 'System: Control Event Log behavior when the log file reaches its maximum size' is set to 'Disabled'                                                                                                                   |
| Win OS-16 - Registry Policy | Ensure 'Turn off Data Execution Prevention for Explorer' is set to 'Disabled'                                                                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'Turn off heap termination on corruption' is set to 'Disabled'                                                                                                                                                         |
| Win OS-16 - Registry Policy | Ensure 'Turn off shell protocol protected mode' is set to 'Disabled'                                                                                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'Require secure RPC communication' is set to 'Enabled'                                                                                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'Set client connection encryption level' is set to 'Enabled: High Level'                                                                                                                                               |
| Win OS-16 - Registry Policy | Ensure 'Prevent downloading of enclosures' is set to 'Enabled'                                                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Turn on convenience PIN sign-in' is set to 'Disabled'                                                                                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'Sign-in last interactive user automatically after a system-initiated restart' is set to 'Disabled'                                                                                                                    |
| Win OS-16 - Registry Policy | Ensure 'Allow Basic authentication' is set to 'Disabled'                                                                                                                                                                      |
| Win OS-16 - Registry Policy | Ensure 'Do not allow passwords to be saved' is set to 'Enabled'                                                                                                                                                               |
| Win OS-16 - Registry Policy | Ensure 'Configure Windows Defender SmartScreen' is set to 'Enabled: Warn and prevent bypass'                                                                                                                                  |
| Win OS-16 - Registry Policy | Ensure 'Allow user control over installs' is set to 'Disabled'                                                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Disallow WinRM from storing RunAs credentials' is set to 'Enabled'                                                                                                                                                    |
| Win OS-16 - Registry Policy | Ensure 'Audit: Shut down system immediately if unable to log security audits' is set to 'Disabled'                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Interactive logon: Do not display last user name' is set to 'Enabled'                                                                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'Microsoft network client: Digitally sign communications (always)' is set to 'Enabled'                                                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'Microsoft network client: Digitally sign communications (if server agrees)' is set to 'Enabled'                                                                                                                       |
| Win OS-16 - Registry Policy | Ensure 'Microsoft network server: Digitally sign communications (if client agrees)' is set to 'Enabled'                                                                                                                       |
| Win OS-16 - Registry Policy | Ensure 'Network access: Restrict anonymous access to Named Pipes and Shares' is set to 'Enabled'                                                                                                                              |
| Win OS-16 - Registry Policy | Ensure 'Network security: Do not store LAN Manager hash value on next password change' is set to 'Enabled'                                                                                                                    |
| Win OS-16 - Registry Policy | Ensure 'Windows Firewall: Domain: Firewall state' is set to 'On (recommended)'                                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Windows Firewall: Domain: Outbound connections' is set to 'Allow (default)'                                                                                                                                           |
| Win OS-16 - Registry Policy | Ensure 'Accounts: Limit local account use of blank passwords to console logon only' is set to 'Enabled'                                                                                                                       |
| Win OS-16 - Registry Policy | Ensure 'Devices: Allowed to format and eject removable media' is set to 'Administrators'                                                                                                                                      |
| Win OS-16 - Registry Policy | Ensure 'Interactive logon: Do not require CTRL+ALT+DEL' is set to 'Disabled'                                                                                                                                                  |
| Win OS-16 - Registry Policy | Configure 'Network access: Remotely accessible registry paths and sub-paths'                                                                                                                                                  |
| Win OS-16 - Registry Policy | Configure 'Network access: Remotely accessible registry paths'                                                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Network access: Sharing and security model for local accounts' is set to 'Classic - local users authenticate as themselves'                                                                                           |
| Win OS-16 - Registry Policy | Ensure 'Network security: Allow LocalSystem NULL session fallback' is set to 'Disabled'                                                                                                                                       |
| Win OS-16 - Registry Policy | Ensure 'Network security: Configure encryption types allowed for Kerberos' is set to 'AES128_HMAC_SHA1, AES256_HMAC_SHA1, Future encryption types'                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Network security: LAN Manager authentication level' is set to 'Send NTLMv2 response only. Refuse LM & NTLM'                                                                                                           |
| Win OS-16 - Registry Policy | Ensure 'Network security: Minimum session security for NTLM SSP based (including secure RPC) clients' is set to 'Require NTLMv2 session security, Require 128-bit encryption'                                                 |
| Win OS-16 - Registry Policy | Ensure 'Network security: Minimum session security for NTLM SSP based (including secure RPC) servers' is set to 'Require NTLMv2 session security, Require 128-bit encryption'                                                 |
| Win OS-16 - Registry Policy | Ensure 'Shutdown: Allow system to be shut down without having to log on' is set to 'Disabled'                                                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'System objects: Strengthen default permissions of internal system objects (e.g. Symbolic Links)' is set to 'Enabled'                                                                                                  |
| Win OS-16 - Registry Policy | Ensure 'User Account Control: Admin Approval Mode for the Built-in Administrator account' is set to 'Enabled'                                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'User Account Control: Allow UIAccess applications to prompt for elevation without using the secure desktop' is set to 'Disabled'                                                                                      |
| Win OS-16 - Registry Policy | Ensure 'User Account Control: Behavior of the elevation prompt for administrators in Admin Approval Mode' is set to 'Prompt for consent on the secure desktop'                                                                |
| Win OS-16 - Registry Policy | Ensure 'User Account Control: Behavior of the elevation prompt for standard users' is set to 'Automatically deny elevation requests'                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'User Account Control: Detect application installations and prompt for elevation' is set to 'Enabled'                                                                                                                  |
| Win OS-16 - Registry Policy | Ensure 'User Account Control: Only elevate UIAccess applications that are installed in secure locations' is set to 'Enabled'                                                                                                  |
| Win OS-16 - Registry Policy | Ensure 'User Account Control: Run all administrators in Admin Approval Mode' is set to 'Enabled'                                                                                                                              |
| Win OS-16 - Registry Policy | Ensure 'User Account Control: Switch to the secure desktop when prompting for elevation' is set to 'Enabled'                                                                                                                  |
| Win OS-16 - Registry Policy | Ensure 'User Account Control: Virtualize file and registry write failures to per-user locations' is set to 'Enabled'                                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'Windows Firewall: Private: Settings: Display a notification' is set to 'No'                                                                                                                                           |
| Win OS-16 - Registry Policy | Ensure 'Windows Firewall: Public: Outbound connections' is set to 'Allow (default)'                                                                                                                                           |
| Win OS-16 - Registry Policy | Ensure 'Windows Firewall: Public: Settings: Apply local connection security rules' is set to 'No'                                                                                                                             |
| Win OS-16 - Registry Policy | Ensure 'Always install with elevated privileges' is set to 'Disabled'                                                                                                                                                         |
| Win OS-16 - Registry Policy | Ensure 'Prohibit use of Internet Connection Sharing on your DNS domain network' is set to 'Enabled'                                                                                                                           |
| Win OS-16 - Registry Policy | Ensure 'Enable insecure guest logons' is set to 'Disabled'                                                                                                                                                                    |
| Win OS-16 - Registry Policy | Ensure 'Turn off Internet Connection Wizard if URL connection is referring to Microsoft.com' is set to 'Enabled'                                                                                                              |
| Win OS-16 - Registry Policy | Ensure 'Block user from showing account details on sign-in' is set to 'Enabled'                                                                                                                                               |
| Win OS-16 - Registry Policy | Ensure 'Enable Windows NTP Client' is set to 'Enabled'                                                                                                                                                                        |
| Win OS-16 - Registry Policy | Ensure 'Turn off Microsoft consumer experiences' is set to 'Enabled'                                                                                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'Allow Telemetry' is set to 'Enabled: 0 - Security [Enterprise Only]' or 'Enabled: 1 - Basic'                                                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'Turn off multicast name resolution' is set to 'Enabled' (MS Only)                                                                                                                                                     |
| Win OS-16 - Registry Policy | Ensure 'Network access: Restrict clients allowed to make remote calls to SAM' is set to 'Administrators: Remote Access: Allow' (MS only)                                                                                      |
| Win OS-16 - Registry Policy | Ensure 'Prevent enabling lock screen camera' is set to 'Enabled'                                                                                                                                                              |
| Win OS-16 - Registry Policy | Ensure 'Allow input personalization' is set to 'Disabled'                                                                                                                                                                     |
| Win OS-16 - Registry Policy | Ensure 'Continue experiences on this device' is set to 'Disabled'                                                                                                                                                             |
| Win OS-16 - Registry Policy | Ensure 'Do not show feedback notifications' is set to 'Enabled'                                                                                                                                                               |
| Win OS-16 - Registry Policy | Ensure 'Shut down the system' is set to 'Administrators'                                                                                                                                                                      |
| Win OS-16 - Registry Policy | Ensure 'Enable RPC Endpoint Mapper Client Authentication' is set to 'Enabled' (MS only)                                                                                                                                       |
| Win OS-16 - Registry Policy | Ensure 'Prohibit installation and configuration of Network Bridge on your DNS domain network' is set to 'Enabled'                                                                                                             |
| Win OS-16 - Registry Policy | Ensure 'Boot-Start Driver Initialization Policy' is set to 'Enabled: Good, unknown and bad but critical'                                                                                                                      |
| Win OS-16 - Registry Policy | Ensure 'Set the default behavior for AutoRun' is set to 'Enabled: Do not execute any autorun commands'                                                                                                                        |
| Win OS-16 - Registry Policy | Ensure 'Application: Specify the maximum log file size (KB)' is set to 'Enabled: 32,768 or greater'                                                                                                                           |
| Win OS-16 - Registry Policy | Ensure 'Setup: Control Event Log behavior when the log file reaches its maximum size' is set to 'Disabled'                                                                                                                    |
| Win OS-16 - Registry Policy | Ensure 'Always prompt for password upon connection' is set to 'Enabled'                                                                                                                                                       |
| Win OS-16 - Registry Policy | Ensure 'Do not delete temp folders upon exit' is set to 'Disabled'                                                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Do not use temporary folders per session' is set to 'Disabled'                                                                                                                                                        |
| Win OS-16 - Registry Policy | Ensure 'Allow indexing of encrypted files' is set to 'Disabled'                                                                                                                                                               |
| Win OS-16 - Registry Policy | Ensure 'Allow unencrypted traffic' is set to 'Disabled'                                                                                                                                                                       |
| Win OS-16 - Registry Policy | Ensure 'Network access: Do not allow anonymous enumeration of SAM accounts and shares' is set to 'Enabled' (MS only)                                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings' is set to 'Enabled'                                                                               |
| Win OS-16 - Registry Policy | Ensure 'Microsoft network client: Send unencrypted password to third-party SMB servers' is set to 'Disabled'                                                                                                                  |
| Win OS-16 - Registry Policy | Ensure 'Network access: Do not allow anonymous enumeration of SAM accounts' is set to 'Enabled' (MS only)                                                                                                                     |
| Win OS-16 - Registry Policy | Ensure 'Microsoft network server: Amount of idle time required before suspending session' is set to '15 or fewer minute(s), but not 0'                                                                                        |
| Win OS-16 - Registry Policy | Ensure 'Network Security: Allow PKU2U authentication requests to this computer to use online identities' is set to 'Disabled'                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'Windows Firewall: Domain: Settings: Display a notification' is set to 'No'                                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Windows Firewall: Private: Firewall state' is set to 'On (recommended)'                                                                                                                                               |
| Win OS-16 - Registry Policy | Ensure 'Windows Firewall: Private: Outbound connections' is set to 'Allow (default)'                                                                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'Windows Firewall: Public: Firewall state' is set to 'On (recommended)'                                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Windows Firewall: Public: Settings: Apply local firewall rules' is set to 'No'                                                                                                                                        |
| Win OS-16 - Registry Policy | Ensure 'Prevent enabling lock screen slide show' is set to 'Enabled'                                                                                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'Minimize the number of simultaneous connections to the Internet or a Windows Domain' is set to 'Enabled'                                                                                                              |
| Win OS-16 - Registry Policy | Ensure 'Do not display network selection UI' is set to 'Enabled'                                                                                                                                                              |
| Win OS-16 - Registry Policy | Ensure 'Network security: Allow Local System to use computer identity for NTLM' is set to 'Enabled'                                                                                                                           |
| Win OS-16 - Registry Policy | Ensure 'Devices: Prevent users from installing printer drivers' is set to 'Enabled'                                                                                                                                           |
| Win OS-16 - Registry Policy | Ensure 'Microsoft network server: Disconnect clients when logon hours expire' is set to 'Enabled'                                                                                                                             |
| Win OS-16 - Registry Policy | Ensure 'System objects: Require case insensitivity for non-Windows subsystems' is set to 'Enabled'                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Microsoft network server: Digitally sign communications (always)' is set to 'Enabled'                                                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'Network access: Shares that can be accessed anonymously' is set to 'None'                                                                                                                                             |
| Win OS-16 - Registry Policy | Ensure 'Allow Microsoft accounts to be optional' is set to 'Enabled'                                                                                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'Add workstations to domain' is set to 'Administrators' (DC only)                                                                                                                                                      |
| Win OS-16 - Registry Policy | Ensure 'Impersonate a client after authentication' is set to 'Administrators, LOCAL SERVICE, NETWORK SERVICE, SERVICE' (DC only)                                                                                              |
| Win OS-16 - Registry Policy | Ensure 'Synchronize directory service data' is set to 'No One' (DC only)                                                                                                                                                      |
| Win OS-16 - Registry Policy | Configure 'Network access: Named Pipes that can be accessed anonymously' (DC only)                                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Account lockout duration' is set to '15 or more minute(s)'                                                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Account lockout threshold' is set to '10 or fewer invalid logon attempt(s), but not 0'                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Reset account lockout counter after' is set to '15 or more minute(s)'                                                                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'Adjust memory quotas for a process' is set to 'Administrators, LOCAL SERVICE, NETWORK SERVICE'                                                                                                                        |
| Win OS-16 - Registry Policy | Ensure 'Create symbolic links' is set to 'Administrators, NT VIRTUAL MACHINE\\Virtual Machines' (MS only)                                                                                                                     |
| Win OS-16 - Registry Policy | Ensure 'Debug programs' is set to 'Administrators'                                                                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Deny access to this computer from the network' is set to 'Guests, Local account and member of Administrators group' (MS only)                                                                                         |
| Win OS-16 - Registry Policy | Ensure 'Impersonate a client after authentication' is set to 'Administrators, LOCAL SERVICE, NETWORK SERVICE, SERVICE' and (when the Web Server (IIS) Role with Web Services Role Service is installed) 'IIS_IUSRS' (MS only) |
| Win OS-16 - Registry Policy | Ensure 'Accounts: Administrator account status' is set to 'Disabled' (MS only)                                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Accounts: Block Microsoft accounts' is set to 'Users can't add or log on with Microsoft accounts'                                                                                                                     |
| Win OS-16 - Registry Policy | Configure 'Accounts: Rename administrator account'                                                                                                                                                                            |
| Win OS-16 - Registry Policy | Configure 'Accounts: Rename guest account'                                                                                                                                                                                    |
| Win OS-16 - Registry Policy | Ensure 'Domain member: Digitally encrypt or sign secure channel data (always)' is set to 'Enabled'                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Domain member: Digitally encrypt secure channel data (when possible)' is set to 'Enabled'                                                                                                                             |
| Win OS-16 - Registry Policy | Ensure 'Domain member: Digitally sign secure channel data (when possible)' is set to 'Enabled'                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Domain member: Disable machine account password changes' is set to 'Disabled'                                                                                                                                         |
| Win OS-16 - Registry Policy | Ensure 'Domain member: Maximum machine account password age' is set to '30 or fewer days, but not 0'                                                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'Domain member: Require strong (Windows 2000 or later) session key' is set to 'Enabled'                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Interactive logon: Machine inactivity limit' is set to '900 or fewer second(s), but not 0'                                                                                                                            |
| Win OS-16 - Registry Policy | Configure 'Interactive logon: Message text for users attempting to log on'                                                                                                                                                    |
| Win OS-16 - Registry Policy | Configure 'Interactive logon: Message title for users attempting to log on'                                                                                                                                                   |
| Win OS-16 - Registry Policy | Ensure 'Interactive logon: Prompt user to change password before expiration' is set to 'between 5 and 14 days'                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Interactive logon: Require Domain Controller Authentication to unlock workstation' is set to 'Enabled' (MS only)                                                                                                      |
| Win OS-16 - Registry Policy | Ensure 'Interactive logon: Smart card removal behavior' is set to 'Lock Workstation' or higher                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Microsoft network server: Server SPN target name validation level' is set to 'Accept if provided by client' or higher (MS only)                                                                                       |
| Win OS-16 - Registry Policy | Ensure 'Network access: Allow anonymous SID/Name translation' is set to 'Disabled'                                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Network access: Let Everyone permissions apply to anonymous users' is set to 'Disabled'                                                                                                                               |
| Win OS-16 - Registry Policy | Configure 'Network access: Named Pipes that can be accessed anonymously' (MS only)                                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Windows Firewall: Domain: Inbound connections' is set to 'Block (default)'                                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Windows Firewall: Private: Inbound connections' is set to 'Block (default)'                                                                                                                                           |
| Win OS-16 - Registry Policy | Ensure 'Windows Firewall: Public: Inbound connections' is set to 'Block (default)'                                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Windows Firewall: Public: Settings: Apply local firewall rules' is set to 'No'                                                                                                                                        |
| Win OS-16 - Registry Policy | Ensure 'Do not use diagnostic data for tailored experiences' is set to 'Enabled'                                                                                                                                              |
| Win OS-16 - Registry Policy | Ensure 'Do not allow password expiration time longer than required by policy' is set to 'Enabled' (MS only)                                                                                                                   |
| Win OS-16 - Registry Policy | Ensure 'Enable Local Admin Password Management' is set to 'Enabled' (MS only)                                                                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'Apply UAC restrictions to local accounts on network logons' is set to 'Enabled' (MS only)                                                                                                                             |
| Win OS-16 - Registry Policy | Ensure 'Configure SMB v1 client driver' is set to 'Enabled: Disable driver'                                                                                                                                                   |
| Win OS-16 - Registry Policy | Ensure 'Configure SMB v1 server' is set to 'Disabled'                                                                                                                                                                         |
| Win OS-16 - Registry Policy | Ensure 'Enable Structured Exception Handling Overwrite Protection (SEHOP)' is set to 'Enabled'                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Turn on Windows Defender protection against Potentially Unwanted Applications' is set to 'Enabled'                                                                                                                    |
| Win OS-16 - Registry Policy | Ensure 'WDigest Authentication' is set to 'Disabled'                                                                                                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'MSS: (AutoAdminLogon) Enable Automatic Logon (not recommended)' is set to 'Disabled'                                                                                                                                  |
| Win OS-16 - Registry Policy | Ensure 'MSS: (DisableIPSourceRouting IPv6) IP source routing protection level (protects against packet spoofing)' is set to 'Enabled: Highest protection, source routing is completely disabled'                              |
| Win OS-16 - Registry Policy | Ensure 'MSS: (DisableIPSourceRouting) IP source routing protection level (protects against packet spoofing)' is set to 'Enabled: Highest protection, source routing is completely disabled'                                   |
| Win OS-16 - Registry Policy | Ensure 'MSS: (EnableICMPRedirect) Allow ICMP redirects to override OSPF generated routes' is set to 'Disabled'                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'MSS: (NoNameReleaseOnDemand) Allow the computer to ignore NetBIOS name release requests except from WINS servers' is set to 'Enabled'                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'MSS: (SafeDllSearchMode) Enable Safe DLL search mode (recommended)' is set to 'Enabled'                                                                                                                               |
| Win OS-16 - Registry Policy | Ensure 'MSS: (ScreenSaverGracePeriod) The time in seconds before the screen saver grace period expires (0 recommended)' is set to 'Enabled: 5 or fewer seconds'                                                               |
| Win OS-16 - Registry Policy | Ensure 'MSS: (WarningLevel) Percentage threshold for the security event log at which the system will generate a warning' is set to 'Enabled: 90% or less'                                                                     |
| Win OS-16 - Registry Policy | Set 'NetBIOS node type' to 'P-node' (Ensure NetBT Parameter 'NodeType' is set to '0x2 (2)')                                                                                                                                   |
| Win OS-16 - Registry Policy | Ensure 'Require domain users to elevate when setting a network's location' is set to 'Enabled'                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Hardened UNC Paths' is set to 'Enabled, with "Require Mutual Authentication" and "Require Integrity" set for all NETLOGON and SYSVOL shares'                                                                          |
| Win OS-16 - Registry Policy | Ensure 'Remote host allows delegation of non-exportable credentials' is set to 'Enabled'                                                                                                                                      |
| Win OS-16 - Registry Policy | Ensure 'Configure registry policy processing: Do not apply during periodic background processing' is set to 'Enabled: FALSE'                                                                                                  |
| Win OS-16 - Registry Policy | Ensure 'Configure registry policy processing: Process even if the Group Policy objects have not changed' is set to 'Enabled: TRUE'                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Turn off background refresh of Group Policy' is set to 'Disabled'                                                                                                                                                     |
| Win OS-16 - Registry Policy | Ensure 'Turn off Internet download for Web publishing and online ordering wizards' is set to 'Enabled'                                                                                                                        |
| Win OS-16 - Registry Policy | Ensure 'Turn off printing over HTTP' is set to 'Enabled'                                                                                                                                                                      |
| Win OS-16 - Registry Policy | Ensure 'Do not enumerate connected users on domain-joined computers' is set to 'Enabled'                                                                                                                                      |
| Win OS-16 - Registry Policy | Ensure 'Enumerate local users on domain-joined computers' is set to 'Disabled' (MS only)                                                                                                                                      |
| Win OS-16 - Registry Policy | Ensure 'Turn off picture password sign-in' is set to 'Enabled'                                                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Untrusted Font Blocking' is set to 'Enabled: Block untrusted fonts and log events'                                                                                                                                    |
| Win OS-16 - Registry Policy | Ensure 'Require a password when a computer wakes (on battery)' is set to 'Enabled'                                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Require a password when a computer wakes (plugged in)' is set to 'Enabled'                                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Configure enhanced anti-spoofing' is set to 'Enabled'                                                                                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'Require pin for pairing' is set to 'Enabled'                                                                                                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'Disable pre-release features or settings' is set to 'Disabled'                                                                                                                                                        |
| Win OS-16 - Registry Policy | Ensure 'Toggle user control over Insider builds' is set to 'Disabled'                                                                                                                                                         |
| Win OS-16 - Registry Policy | Ensure 'Block all consumer Microsoft account user authentication' is set to 'Enabled'                                                                                                                                         |
| Win OS-16 - Registry Policy | Ensure 'Prevent the usage of OneDrive for file storage' is set to 'Enabled'                                                                                                                                                   |
| Win OS-16 - Registry Policy | Ensure 'Do not allow drive redirection' is set to 'Enabled'                                                                                                                                                                   |
| Win OS-16 - Registry Policy | Ensure 'Turn off Windows Defender AntiVirus' is set to 'Disabled'                                                                                                                                                             |
| Win OS-16 - Registry Policy | Ensure 'Configure local setting override for reporting to Microsoft MAPS' is set to 'Disabled'                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Turn on behavior monitoring' is set to 'Enabled'                                                                                                                                                                      |
| Win OS-16 - Registry Policy | Ensure 'Scan removable drives' is set to 'Enabled'                                                                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Turn on e-mail scanning' is set to 'Enabled'                                                                                                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'Configure Attack Surface Reduction rules' is set to 'Enabled'                                                                                                                                                         |
| Win OS-16 - Registry Policy | Ensure 'Configure Attack Surface Reduction rules: Set the state for each ASR rule' is 'configured'                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Prevent users and apps from accessing dangerous websites' is set to 'Enabled: Block'                                                                                                                                  |
| Win OS-16 - Registry Policy | Ensure 'Prevent users from modifying settings' is set to 'Enabled'                                                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Allow Windows Ink Workspace' is set to 'Enabled: On, but disallow access above lock' OR 'Disabled' but not 'Enabled: On'                                                                                              |
| Win OS-16 - Registry Policy | Ensure 'Turn on PowerShell Script Block Logging' is set to 'Disabled'                                                                                                                                                         |
| Win OS-16 - Registry Policy | Ensure 'Turn on PowerShell Transcription' is set to 'Disabled'                                                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Configure Automatic Updates' is set to 'Enabled'                                                                                                                                                                      |
| Win OS-16 - Registry Policy | Ensure 'Configure Automatic Updates: Scheduled install day' is set to '0 - Every day'                                                                                                                                         |
| Win OS-16 - Registry Policy | Ensure 'No auto-restart with logged on users for scheduled automatic updates installations' is set to 'Disabled'                                                                                                              |
| Win OS-16 - Registry Policy | Ensure 'Manage preview builds' is set to 'Enabled: Disable preview builds'                                                                                                                                                    |
| Win OS-16 - Registry Policy | Ensure 'Select when Preview Builds and Feature Updates are received' is set to 'Enabled: Semi-Annual Channel, 180 or more days'                                                                                               |
| Win OS-16 - Registry Policy | Ensure 'Select when Quality Updates are received' is set to 'Enabled: 0 days'                                                                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'Enable screen saver' is set to 'Enabled'                                                                                                                                                                              |
| Win OS-16 - Registry Policy | Ensure 'Force specific screen saver: Screen saver executable name' is set to 'Enabled: scrnsave.scr'                                                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'Password protect the screen saver' is set to 'Enabled'                                                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Screen saver timeout' is set to 'Enabled: 900 seconds or fewer, but not 0'                                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Turn off toast notifications on the lock screen' is set to 'Enabled'                                                                                                                                                  |
| Win OS-16 - Registry Policy | Ensure 'Do not preserve zone information in file attachments' is set to 'Disabled'                                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Notify antivirus programs when opening attachments' is set to 'Enabled'                                                                                                                                               |
| Win OS-16 - Registry Policy | Ensure 'Configure Windows spotlight on lock screen' is set to Disabled'                                                                                                                                                       |
| Win OS-16 - Registry Policy | Ensure 'Prevent users from sharing files within their profile' is set to 'Enabled'                                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Do not suggest third-party content in Windows spotlight' is set to 'Enabled'                                                                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'Network access: Do not allow storage of passwords and credentials for network authentication' is set to 'Enabled'                                                                                                     |
| Win OS-16 - Registry Policy | Ensure 'Log on as a batch job' is set to 'Administrators' (DC Only)                                                                                                                                                           |
| Win OS-16 - Registry Policy | Ensure 'MSS: (KeepAliveTime) How often keep-alive packets are sent in milliseconds' is set to 'Enabled: 300,000 or 5 minutes (recommended)'                                                                                   |
| Win OS-16 - Registry Policy | Ensure 'Allow Online Tips' is set to 'Disabled'                                                                                                                                                                               |
| Win OS-16 - Registry Policy | Ensure 'MSS: (TcpMaxDataRetransmissions IPv6) How many times unacknowledged data is retransmitted' is set to 'Enabled: 3'                                                                                                     |
| Win OS-16 - Registry Policy | Ensure 'MSS: (PerformRouterDiscovery) Allow IRDP to detect and configure Default Gateway addresses (could lead to DoS)' is set to 'Disabled'                                                                                  |
| Win OS-16 - Registry Policy | Ensure 'Enable Font Providers' is set to 'Disabled'                                                                                                                                                                           |
| Win OS-16 - Registry Policy | Ensure 'MSS: (TcpMaxDataRetransmissions) How many times unacknowledged data is retransmitted' is set to 'Enabled: 3'                                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'Turn on Responder (RSPNDR) driver' is set to 'Disabled'                                                                                                                                                               |
| Win OS-16 - Registry Policy | Ensure 'Turn on Mapper I/O (LLTDIO) driver' is set to 'Disabled'                                                                                                                                                              |
| Win OS-16 - Registry Policy | Disable IPv6 (Ensure TCPIP6 Parameter 'DisabledComponents' is set to '0xff (255)')                                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Turn off Microsoft Peer-to-Peer Networking Services' is set to 'Enabled'                                                                                                                                              |
| Win OS-16 - Registry Policy | Ensure 'Prohibit access of the Windows Connect Now wizards' is set to 'Enabled'                                                                                                                                               |
| Win OS-16 - Registry Policy | Ensure 'Configuration of wireless settings using Windows Connect Now' is set to 'Disabled'                                                                                                                                    |
| Win OS-16 - Registry Policy | Ensure 'Turn off handwriting recognition error reporting' is set to 'Enabled'                                                                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'Turn off handwriting personalization data sharing' is set to 'Enabled'                                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Turn off Search Companion content file updates' is set to 'Enabled'                                                                                                                                                   |
| Win OS-16 - Registry Policy | Ensure 'Turn off Registration if URL connection is referring to Microsoft.com' is set to 'Enabled'                                                                                                                            |
| Win OS-16 - Registry Policy | Ensure 'Turn off the "Publish to Web" task for files and folders' is set to 'Enabled'                                                                                                                                         |
| Win OS-16 - Registry Policy | Ensure 'Turn off the "Order Prints" picture task' is set to 'Enabled'                                                                                                                                                         |
| Win OS-16 - Registry Policy | Ensure 'Turn off Windows Customer Experience Improvement Program' is set to 'Enabled'                                                                                                                                         |
| Win OS-16 - Registry Policy | Ensure 'Turn off the Windows Messenger Customer Experience Improvement Program' is set to 'Enabled'                                                                                                                           |
| Win OS-16 - Registry Policy | Ensure 'Support device authentication using certificate' is set to 'Enabled: Automatic'                                                                                                                                       |
| Win OS-16 - Registry Policy | Ensure 'Turn off Windows Error Reporting' is set to 'Enabled'                                                                                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'Allow network connectivity during connected-standby (on battery)' is set to 'Disabled'                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Disallow copying of user input methods to the system account for sign-in' is set to 'Enabled'                                                                                                                         |
| Win OS-16 - Registry Policy | Ensure 'Microsoft Support Diagnostic Tool: Turn on MSDT interactive communication with support provider' is set to 'Disabled'                                                                                                 |
| Win OS-16 - Registry Policy | Ensure 'Allow network connectivity during connected-standby (plugged in)' is set to 'Disabled'                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Turn off the advertising ID' is set to 'Enabled'                                                                                                                                                                      |
| Win OS-16 - Registry Policy | Ensure 'Enable/Disable PerfTrack' is set to 'Disabled'                                                                                                                                                                        |
| Win OS-16 - Registry Policy | Ensure 'Allow Use of Camera' is set to 'Disabled'                                                                                                                                                                             |
| Win OS-16 - Registry Policy | Ensure 'Allow a Windows app to share application data between users' is set to 'Disabled'                                                                                                                                     |
| Win OS-16 - Registry Policy | Ensure 'Turn off location' is set to 'Enabled'                                                                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Configure Authenticated Proxy usage for the Connected User Experience and Telemetry service' is set to 'Enabled: Disable Authenticated Proxy usage'                                                                   |
| Win OS-16 - Registry Policy | Ensure 'Do not allow COM port redirection' is set to 'Enabled'                                                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Restrict Remote Desktop Services users to a single Remote Desktop Services session' is set to 'Enabled'                                                                                                               |
| Win OS-16 - Registry Policy | Ensure 'Do not allow supported Plug and Play device redirection' is set to 'Enabled'                                                                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'Do not allow LPT port redirection' is set to 'Enabled'                                                                                                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Set time limit for disconnected sessions' is set to 'Enabled: 1 minute'                                                                                                                                               |
| Win OS-16 - Registry Policy | Ensure 'Set time limit for active but idle Remote Desktop Services sessions' is set to 'Enabled: 15 minutes or less'                                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'Allow Cloud Search' is set to 'Enabled: Disable Cloud Search'                                                                                                                                                         |
| Win OS-16 - Registry Policy | Ensure 'Turn off KMS Client Online AVS Validation' is set to 'Enabled'                                                                                                                                                        |
| Win OS-16 - Registry Policy | Ensure 'Join Microsoft MAPS' is set to 'Disabled'                                                                                                                                                                             |
| Win OS-16 - Registry Policy | Ensure 'Configure Watson events' is set to 'Disabled'                                                                                                                                                                         |
| Win OS-16 - Registry Policy | Ensure 'Allow suggested apps in Windows Ink Workspace' is set to 'Disabled'                                                                                                                                                   |
| Win OS-16 - Registry Policy | Ensure 'Prevent Internet Explorer security prompt for Windows Installer scripts' is set to 'Disabled'                                                                                                                         |
| Win OS-16 - Registry Policy | Ensure 'Allow remote server management through WinRM' is set to 'Disabled'                                                                                                                                                    |
| Win OS-16 - Registry Policy | Ensure 'Allow Remote Shell Access' is set to 'Disabled'                                                                                                                                                                       |
| Win OS-16 - Registry Policy | Ensure 'Turn off Help Experience Improvement Program' is set to 'Enabled'                                                                                                                                                     |
| Win OS-16 - Registry Policy | Ensure 'Do not use diagnostic data for tailored experiences' is set to 'Enabled'                                                                                                                                              |
| Win OS-16 - Registry Policy | Ensure 'Turn off all Windows spotlight features' is set to 'Enabled'                                                                                                                                                          |
| Win OS-16 - Registry Policy | Ensure 'Prevent Codec Download' is set to 'Enabled'                                                                                                                                                                           |
| Win OS-16 - Registry Policy | Ensure 'Interactive logon: Number of previous logons to cache (in case domain controller is not available)' is set to '4 or fewer logon(s)' (MS only)                                                                         |
| Win OS-16 - Registry Policy | Ensure 'Prohibit connection to non-domain networks when connected to domain authenticated network' is set to 'Enabled' (MS only)                                                                                              |
| Win OS-16 - Registry Policy | Ensure 'Restrict Unauthenticated RPC clients' is set to 'Enabled: Authenticated' (MS only)                                                                                                                                    |
| Win OS-16 - Registry Policy | Ensure 'Enable Windows NTP Server' is set to 'Disabled' (MS only)                                                                                                                                                             |
| Win OS-16 - Registry Policy | Ensure 'Turn On Virtualization Based Security' is set to 'Enabled' (MS Only)                                                                                                                                                  |
| Win OS-16 - Registry Policy | Ensure 'Turn On Virtualization Based Security: Select Platform Security Level' is set to 'Secure Boot and DMA Protection' (MS Only)                                                                                           |
| Win OS-16 - Registry Policy | Ensure 'Turn On Virtualization Based Security: Virtualization Based Protection of Code Integrity' is set to 'Enabled with UEFI lock' (MS Only)                                                                                |
| Win OS-16 - Registry Policy | Ensure 'Turn On Virtualization Based Security: Require UEFI Memory Attributes Table' is set to 'True (checked)' (MS Only)                                                                                                     |
| Win OS-16 - Registry Policy | Ensure 'Turn On Virtualization Based Security: Credential Guard Configuration' is set to 'Enabled with UEFI lock' (MS Only)                                                                                                   |
| Win OS-16 - Security Policy | Ensure 'Allow log on through Remote Desktop Services' is set to 'Administrators' (DC only)                                                                                                                                    |
| Win OS-16 - Security Policy | Ensure 'Replace a process level token' is set to 'LOCAL SERVICE, NETWORK SERVICE'                                                                                                                                             |
| Win OS-16 - Security Policy | Ensure 'Enable computer and user accounts to be trusted for delegation' is set to 'Administrators' (DC only)                                                                                                                  |
| Win OS-16 - Security Policy | Ensure 'Create symbolic links' is set to 'Administrators' (DC only)                                                                                                                                                           |
| Win OS-16 - Security Policy | Ensure 'Manage auditing and security log' is set to 'Administrators' and (when Exchange is running in the environment) 'Exchange Servers' (DC only)                                                                           |
| Win OS-16 - Security Policy | Ensure 'Modify an object label' is set to 'No One'                                                                                                                                                                            |
| Win OS-16 - Security Policy | Ensure 'Enforce password history' is set to '24 or more password(s)'                                                                                                                                                          |
| Win OS-16 - Security Policy | Ensure 'Maximum password age' is set to '60 or fewer days, but not 0'                                                                                                                                                         |
| Win OS-16 - Security Policy | Ensure 'Minimum password age' is set to '1 or more day(s)'                                                                                                                                                                    |
| Win OS-16 - Security Policy | Ensure 'Minimum password length' is set to '14 or more character(s)'                                                                                                                                                          |
| Win OS-16 - Security Policy | Ensure 'Password must meet complexity requirements' is set to 'Enabled'                                                                                                                                                       |
| Win OS-16 - Security Policy | Ensure 'Store passwords using reversible encryption' is set to 'Disabled'                                                                                                                                                     |
| Win OS-16 - Security Policy | Ensure 'Access Credential Manager as a trusted caller' is set to 'No One'                                                                                                                                                     |
| Win OS-16 - Security Policy | Ensure 'Act as part of the operating system' is set to 'No One'                                                                                                                                                               |
| Win OS-16 - Security Policy | Ensure 'Back up files and directories' is set to 'Administrators'                                                                                                                                                             |
| Win OS-16 - Security Policy | Ensure 'Change the system time' is set to 'Administrators, LOCAL SERVICE'                                                                                                                                                     |
| Win OS-16 - Security Policy | Ensure 'Change the time zone' is set to 'Administrators, LOCAL SERVICE'                                                                                                                                                       |
| Win OS-16 - Security Policy | Ensure 'Create a pagefile' is set to 'Administrators'                                                                                                                                                                         |
| Win OS-16 - Security Policy | Ensure 'Create a token object' is set to 'No One'                                                                                                                                                                             |
| Win OS-16 - Security Policy | Ensure 'Create global objects' is set to 'Administrators, LOCAL SERVICE, NETWORK SERVICE, SERVICE'                                                                                                                            |
| Win OS-16 - Security Policy | Ensure 'Create permanent shared objects' is set to 'No One'                                                                                                                                                                   |
| Win OS-16 - Security Policy | Ensure 'Deny log on as a batch job' to include 'Guests'                                                                                                                                                                       |
| Win OS-16 - Security Policy | Ensure 'Deny log on as a service' to include 'Guests'                                                                                                                                                                         |
| Win OS-16 - Security Policy | Ensure 'Deny log on locally' to include 'Guests'                                                                                                                                                                              |
| Win OS-16 - Security Policy | Ensure 'Generate security audits' is set to 'LOCAL SERVICE, NETWORK SERVICE'                                                                                                                                                  |
| Win OS-16 - Security Policy | Ensure 'Load and unload device drivers' is set to 'Administrators'                                                                                                                                                            |
| Win OS-16 - Security Policy | Ensure 'Lock pages in memory' is set to 'No One'                                                                                                                                                                              |
| Win OS-16 - Security Policy | Ensure 'Perform volume maintenance tasks' is set to 'Administrators'                                                                                                                                                          |
| Win OS-16 - Security Policy | Ensure 'Profile single process' is set to 'Administrators'                                                                                                                                                                    |
| Win OS-16 - Security Policy | Ensure 'Restore files and directories' is set to 'Administrators'                                                                                                                                                             |
| Win OS-16 - Security Policy | Ensure 'Modify firmware environment values' is set to 'Administrators'                                                                                                                                                        |
| Win OS-16 - Security Policy | Ensure 'Take ownership of files or other objects' is set to 'Administrators'                                                                                                                                                  |
| Win OS-16 - Security Policy | Ensure 'Force shutdown from a remote system' is set to 'Administrators'                                                                                                                                                       |
| Win OS-16 - Security Policy | Ensure 'Access this computer from the network' is set to 'Administrators, Authenticated Users, ENTERPRISE DOMAIN CONTROLLERS' (DC only)                                                                                       |
| Win OS-16 - Security Policy | Ensure 'Deny log on through Remote Desktop Services' is set to 'Guests' (DC only)                                                                                                                                             |
| Win OS-16 - Security Policy | Ensure 'Profile system performance' is set to 'Administrators, NT SERVICE\\WdiServiceHost'                                                                                                                                    |
| Win OS-16 - Security Policy | Ensure 'Deny access to this computer from the network' is set to 'Guests' (DC only)                                                                                                                                           |
| Win OS-16 - Security Policy | Ensure 'Increase scheduling priority' is set to 'Administrators'                                                                                                                                                              |
| Win OS-16 - Security Policy | Ensure 'Allow log on locally' is set to 'Administrators'                                                                                                                                                                      |
| Win OS-16 - Security Policy | Ensure 'Accounts: Guest account status' is set to 'Disabled' (MS only)                                                                                                                                                        |
| Win OS-16 - Security Policy | Ensure 'Password Settings: Password Complexity' is set to 'Enabled: Large letters + small letters + numbers + special characters' (MS only)                                                                                   |
| Win OS-16 - Security Policy | Ensure 'Password Settings: Password Length' is set to 'Enabled: 15 or more' (MS only)                                                                                                                                         |
| Win OS-16 - Security Policy | Ensure 'Password Settings: Password Age (Days)' is set to 'Enabled: 30 or fewer' (MS only)                                                                                                                                    |
| Win OS-16 - Audit Policy    | Ensure 'Audit Credential Validation' is set to 'Success and Failure'                                                                                                                                                          |
| Win OS-16 - Audit Policy    | Ensure 'Audit Account Lockout' is set to 'Success and Failure'                                                                                                                                                                |
| Win OS-16 - Audit Policy    | Ensure 'Audit Other Logon/Logoff Events' is set to 'Success and Failure'                                                                                                                                                      |
| Win OS-16 - Audit Policy    | Ensure 'Audit Special Logon' is set to 'Success'                                                                                                                                                                              |
| Win OS-16 - Audit Policy    | Ensure 'Audit Removable Storage' is set to 'Success and Failure'                                                                                                                                                              |
| Win OS-16 - Audit Policy    | Ensure 'Audit Authorization Policy Change' is set to 'Success'                                                                                                                                                                |
| Win OS-16 - Audit Policy    | Ensure 'Audit Sensitive Privilege Use' is set to 'Success and Failure'                                                                                                                                                        |
| Win OS-16 - Audit Policy    | Ensure 'Audit Group Membership' is set to 'Success'                                                                                                                                                                           |
| Win OS-16 - Audit Policy    | Ensure 'Audit User Account Management' is set to 'Success and Failure'                                                                                                                                                        |
| Win OS-16 - Audit Policy    | Ensure 'Audit Logoff' is set to 'Success'                                                                                                                                                                                     |
| Win OS-16 - Audit Policy    | Ensure 'Audit Logon' is set to 'Success and Failure'                                                                                                                                                                          |
| Win OS-16 - Audit Policy    | Ensure 'Audit Other System Events' is set to 'Success and Failure'                                                                                                                                                            |
| Win OS-16 - Audit Policy    | Ensure 'Audit Security State Change' is set to 'Success'                                                                                                                                                                      |
| Win OS-16 - Audit Policy    | Ensure 'Audit IPsec Driver' is set to 'Success and Failure'                                                                                                                                                                   |
| Win OS-16 - Audit Policy    | Ensure 'Audit Other Object Access Events' is set to 'Success and Failure'                                                                                                                                                     |
| Win OS-16 - Audit Policy    | Ensure 'Audit Application Group Management' is set to 'Success and Failure'                                                                                                                                                   |
| Win OS-16 - Audit Policy    | Ensure 'Audit PNP Activity' is set to 'Success'                                                                                                                                                                               |
| Win OS-16 - Audit Policy    | Ensure 'Audit Authentication Policy Change' is set to 'Success'                                                                                                                                                               |
| Win OS-16 - Audit Policy    | Ensure 'Audit Distribution Group Management' is set to 'Success and Failure' (DC only)                                                                                                                                        |
| Win OS-16 - Audit Policy    | Ensure 'Windows Firewall: Domain: Logging: Name' is set to '%SYSTEMROOT%\\System32\\logfiles\\firewall\\domainfw.log'                                                                                                         |
| Win OS-16 - Audit Policy    | Ensure 'Windows Firewall: Domain: Logging: Size limit (KB)' is set to '16,384 KB or greater'                                                                                                                                  |
| Win OS-16 - Audit Policy    | Ensure 'Windows Firewall: Domain: Logging: Log dropped packets' is set to 'Yes'                                                                                                                                               |
| Win OS-16 - Audit Policy    | Ensure 'Windows Firewall: Domain: Logging: Log successful connections' is set to 'Yes'                                                                                                                                        |
| Win OS-16 - Audit Policy    | Ensure 'Windows Firewall: Private: Logging: Name' is set to '%SYSTEMROOT%\\System32\\logfiles\\firewall\\privatefw.log'                                                                                                       |
| Win OS-16 - Audit Policy    | Ensure 'Windows Firewall: Private: Logging: Size limit (KB)' is set to '16,384 KB or greater'                                                                                                                                 |
| Win OS-16 - Audit Policy    | Ensure 'Windows Firewall: Private: Logging: Log dropped packets' is set to 'Yes'                                                                                                                                              |
| Win OS-16 - Audit Policy    | Ensure 'Windows Firewall: Private: Logging: Log successful connections' is set to 'Yes'                                                                                                                                       |
| Win OS-16 - Audit Policy    | Ensure 'Audit Computer Account Management' is set to 'Success and Failure'                                                                                                                                                    |
| Win OS-16 - Audit Policy    | Ensure 'Audit Other Account Management Events' is set to 'Success and Failure'                                                                                                                                                |
| Win OS-16 - Audit Policy    | Ensure 'Audit Security Group Management' is set to 'Success and Failure'                                                                                                                                                      |
| Win OS-16 - Audit Policy    | Ensure 'Audit Process Creation' is set to 'Success'                                                                                                                                                                           |
| Win OS-16 - Audit Policy    | Ensure 'Audit Audit Policy Change' is set to 'Success and Failure'                                                                                                                                                            |
| Win OS-16 - Audit Policy    | Ensure 'Audit Security System Extension' is set to 'Success and Failure'                                                                                                                                                      |
| Win OS-16 - Audit Policy    | Ensure 'Audit System Integrity' is set to 'Success and Failure'                                                                                                                                                               |
