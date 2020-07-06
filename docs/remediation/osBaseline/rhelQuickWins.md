# Red Hat Enterprise Linux 7 VM Baseline Hardening

 A collection of scripts that will help to harden operating system baseline configuration supported by Cloudneeti as defined in CIS Red Hat Enterprise Linux 7 benchmark v2.2.0. This remediates policies, compliance status can be validated for below [policies listed here.](../../osBaseline/rhelQuickWins/#center-for-internet-security-aws-red-hat-enterprise-linux-7-benchmark-v220)

Note: The scripts are designed to harden the operating system baseline configurations, Please test it on the test/staging system before applying to the production system.


| **Configuration script**        | **Number of policies remediated** | **Cloud Account Type**|
|--------------------------------|-------------------------------|-----------------------------------|
| [RHEL Linux 7 VM baseline policies for Cloud Security Best Practices](https://raw.githubusercontent.com/Cloudneeti/os-harderning-scripts/master/RHEL7/Azure_CSBP_RHEL7_Remediation.sh){target=_blank}           | 26                               | Azure|
| [RHEL Linux 7 VM baseline policies for CIS Benchmark Red Hat Enterprise Linux 7 Benchmark v2.2.0](https://raw.githubusercontent.com/Cloudneeti/os-harderning-scripts/master/RHEL7/CIS_RHEL7_Benchmark_v2_2_0_Remediation.sh){target=_blank}   | 149                               | AWS|


#### Prerequisites 

The below steps are required for executing script to harden operating system baseline configuration

| Activity             | Description                |
|----------------------|----------------------------|
| 1.	Download and review **Bash script** to harden operating system baseline configuration | The PowerShell script is used to harden operating system baseline configuration: <br> [Azure - RHEL 7 VM baseline policies for CSBP](https://raw.githubusercontent.com/Cloudneeti/os-harderning-scripts/master/RHEL7/Azure_CSBP_RHEL7_Remediation.sh) <br> [AWS - RHEL Linux 7 VM baseline policies for CIS Benchmark RHEL Linux 7 Version 2.2.0](https://raw.githubusercontent.com/Cloudneeti/os-harderning-scripts/master/RHEL7/CIS_RHEL7_Benchmark_v2_2_0_Remediation.sh){target=_blank}|

Execute OS Baseline Hardening script
-------------------------------------

### RHEL Linux 7 VM baseline policies for Cloud Security Best Practices

Below steps are performed on Virtual Machine, as a root user

1. Open bash and switch user to root

        sudo su

2. Download script

        wget https://raw.githubusercontent.com/Cloudneeti/os-harderning-scripts/master/RHEL7/Azure_CSBP_RHEL7_Remediation.sh -O Azure_CSBP_CentOS_Linux7_Remediation.sh

3. Execute the script as a root user  

        bash Azure_CSBP_RHEL7_Remediation.sh

       <!-- ![Compliance score](../../images/osBaselineQuickWIns/CentOS_QuickWins_CSBP.png#thumbnail_1) -->

4. Script will update baseline configuration to harden operating system.

       <!-- ![Compliance score](../../images/osBaselineQuickWIns/CentOS_QuickWins_CSBP_1.png#thumbnail_1) -->

### RHEL Linux 7 VM baseline policies for CIS Benchmark CentOS Linux 7 Version 2.2.0

Below steps are performed on Virtual Machine as a root user

1. Open bash and switch user to root

        sudo su

2. Download script

        wget https://raw.githubusercontent.com/Cloudneeti/os-harderning-scripts/master/RHEL7/CIS_RHEL7_Benchmark_v2_2_0_Remediation.sh -O CIS_RHEL7_Benchmark_v2_2_0_Remediation.sh

3. Execute the script as a root user  

        bash CIS_RHEL7_Benchmark_v2_2_0_Remediation.sh

       <!-- ![Compliance score](../../images/osBaselineQuickWIns/CentOS_QuickWins_CIS.png#thumbnail_1) -->

4. Script will update baseline configuration to harden operating system for 149 policies.

       <!-- ![Compliance score](../../images/osBaselineQuickWIns/CentOS_QuickWins_CIS_1.png#thumbnail_1) -->


## Remediation policy list

### Center for Internet Security AWS - Red Hat Enterprise Linux 7 Benchmark v2.2.0

| **Category Name**                                                               | **Policy Name**                                                                  |
|---------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| Initial Setup                                                                   | Ensure updates, patches, and additional security software are installed          |
| Initial Setup - Filesystem Configuration                                        | Ensure nodev option set on /tmp partition                                        |
| Initial Setup - Filesystem Configuration                                        | Ensure nosuid option set on /tmp partition                                       |
| Initial Setup - Filesystem Configuration                                        | Ensure noexec option set on /tmp partition                                       |
| Initial Setup - Filesystem Configuration                                        | Ensure nodev option set on /dev/shm partition                                    |
| Initial Setup - Filesystem Configuration                                        | Ensure nosuid option set on /dev/shm partition                                   |
| Initial Setup - Filesystem Configuration                                        | Ensure noexec option set on /dev/shm partition                                   |
| Initial Setup - Disable unused filesystems                                      | Ensure mounting of cramfs filesystems is disabled                                |
| Initial Setup - Disable unused filesystems                                      | Ensure mounting of freevxfs filesystems is disabled                              |
| Initial Setup - Disable unused filesystems                                      | Ensure mounting of jffs2 filesystems is disabled                                 |
| Initial Setup - Disable unused filesystems                                      | Ensure mounting of hfs filesystems is disabled                                   |
| Initial Setup - Disable unused filesystems                                      | Ensure mounting of hfsplus filesystems is disabled                               |
| Initial Setup - Disable unused filesystems                                      | Ensure mounting of squashfs filesystems is disabled                              |
| Initial Setup - Disable unused filesystems                                      | Ensure mounting of udf filesystems is disabled                                   |
| Initial Setup - Disable unused filesystems                                      | Ensure mounting of FAT filesystems is disabled                                   |
| Initial Setup - Configure Software Updates                                      | Ensure gpgcheck is globally activated                                            |
| Initial Setup - Filesystem Integrity Checking                                   | Ensure AIDE is installed                                                         |
| Initial Setup - Filesystem Integrity Checking                                   | Ensure filesystem integrity is regularly checked                                 |
| Initial Setup - Secure Boot Settings                                            | Ensure permissions on bootloader config are configured                           |
| Initial Setup - Secure Boot Settings                                            | Ensure authentication required for single user mode                              |
| Initial Setup - Additional Process Hardening                                    | Ensure XD/NX support is enabled                                                  |
| Initial Setup - Additional Process Hardening                                    | Ensure address space layout randomization (ASLR) is enabled                      |
| Initial Setup - Additional Process Hardening                                    | Ensure prelink is disabled                                                       |
| Initial Setup - Warning Banners                                                 | Ensure GDM login banner is configured                                            |
| Initial Setup - Command Line Warning Banners                                    | Ensure message of the day is configured properly                                 |
| Initial Setup - Command Line Warning Banners                                    | Ensure local login warning banner is configured properly                         |
| Initial Setup - Command Line Warning Banners                                    | Ensure remote login warning banner is configured properly                        |
| Initial Setup - Command Line Warning Banners                                    | Ensure permissions on /etc/motd are configured                                   |
| Initial Setup - Command Line Warning Banners                                    | Ensure permissions on /etc/issue are configured                                  |
| Initial Setup - Command Line Warning Banners                                    | Ensure permissions on /etc/issue.net are configured                              |
| Services - Special Purpose Services                                             | Ensure X Window System is not installed                                          |
| Services - Special Purpose Services                                             | Ensure mail transfer agent is configured for local-only mode                     |
| Services - Time Synchronization                                                 | Ensure time synchronization is in use                                            |
| Services - Time Synchronization                                                 | Ensure ntp is configured                                                         |
| Services - Time Synchronization                                                 | Ensure chrony is configured                                                      |
| Services - Service Clients                                                      | Ensure NIS Client is not installed                                               |
| Services - Service Clients                                                      | Ensure rsh client is not installed                                               |
| Services - Service Clients                                                      | Ensure talk client is not installed                                              |
| Services - Service Clients                                                      | Ensure telnet client is not installed                                            |
| Services - Service Clients                                                      | Ensure LDAP client is not installed                                              |
| Network Configuration - Network Parameters (Host Only)                          | Ensure IP forwarding is disabled                                                 |
| Network Configuration - Network Parameters (Host Only)                          | Ensure packet redirect sending is disabled                                       |
| Network Configuration - Network Parameters (Host and Router)                    | Ensure source routed packets are not accepted                                    |
| Network Configuration - Network Parameters (Host and Router)                    | Ensure ICMP redirects are not accepted                                           |
| Network Configuration - Network Parameters (Host and Router)                    | Ensure secure ICMP redirects are not accepted                                    |
| Network Configuration - Network Parameters (Host and Router)                    | Ensure suspicious packets are logged                                             |
| Network Configuration - Network Parameters (Host and Router)                    | Ensure broadcast ICMP requests are ignored                                       |
| Network Configuration - Network Parameters (Host and Router)                    | Ensure bogus ICMP responses are ignored                                          |
| Network Configuration - Network Parameters (Host and Router)                    | Ensure Reverse Path Filtering is enabled                                         |
| Network Configuration - Network Parameters (Host and Router)                    | Ensure TCP SYN Cookies is enabled                                                |
| Network Configuration - IPv6                                                    | Ensure IPv6 router advertisements are not accepted                               |
| Network Configuration - IPv6                                                    | Ensure IPv6 redirects are not accepted                                           |
| Network Configuration - TCP Wrappers                                            | Ensure TCP Wrappers is installed                                                 |
| Network Configuration - TCP Wrappers                                            | Ensure /etc/hosts.allow is configured                                            |
| Network Configuration - TCP Wrappers                                            | Ensure /etc/hosts.deny is configured                                             |
| Network Configuration - TCP Wrappers                                            | Ensure permissions on /etc/hosts.allow are configured                            |
| Network Configuration - TCP Wrappers                                            | Ensure permissions on /etc/hosts.deny are 644                                    |
| Network Configuration - Uncommon Network Protocols                              | Ensure DCCP is disabled                                                          |
| Network Configuration - Uncommon Network Protocols                              | Ensure SCTP is disabled                                                          |
| Network Configuration - Uncommon Network Protocols                              | Ensure RDS is disabled                                                           |
| Network Configuration - Uncommon Network Protocols                              | Ensure TIPC is disabled                                                          |
| Network Configuration - Firewall Configuration                                  | Ensure iptables is installed                                                     |
| Network Configuration - Firewall Configuration                                  | Ensure firewall rules exist for all open ports                                   |
| Logging and Auditing - Configure Logging                                        | Ensure rsyslog or syslog-ng is installed                                         |
| Logging and Auditing - Configure Logging                                        | Ensure permissions on all logfiles are configured                                |
| Logging and Auditing - Configure rsyslog                                        | Ensure rsyslog default file permissions configured                               |
| Logging and Auditing - Configure syslog-ng                                      | Ensure syslog-ng default file permissions configured                             |
| Access, Authentication and Authorization                                        | Ensure access to the su command is restricted                                    |
| Access, Authentication and Authorization - Configure cron                       | Ensure permissions on /etc/crontab are configured                                |
| Access, Authentication and Authorization - Configure cron                       | Ensure permissions on /etc/cron.hourly are configured                            |
| Access, Authentication and Authorization - Configure cron                       | Ensure permissions on /etc/cron.daily are configured                             |
| Access, Authentication and Authorization - Configure cron                       | Ensure permissions on /etc/cron.weekly are configured                            |
| Access, Authentication and Authorization - Configure cron                       | Ensure permissions on /etc/cron.monthly are configured                           |
| Access, Authentication and Authorization - Configure cron                       | Ensure permissions on /etc/cron.d are configured                                 |
| Access, Authentication and Authorization - Configure cron                       | Ensure at/cron is restricted to authorized users                                 |
| Access, Authentication and Authorization - SSH Server Configuration             | Ensure permissions on /etc/ssh/sshd_config are configured                        |
| Access, Authentication and Authorization - SSH Server Configuration             | Ensure SSH Protocol is set to 2                                                  |
| Access, Authentication and Authorization - SSH Server Configuration             | Ensure SSH LogLevel is set to INFO                                               |
| Access, Authentication and Authorization - SSH Server Configuration             | Ensure SSH X11 forwarding is disabled                                            |
| Access, Authentication and Authorization - SSH Server Configuration             | Ensure SSH MaxAuthTries is set to 4 or less                                      |
| Access, Authentication and Authorization - SSH Server Configuration             | Ensure SSH IgnoreRhosts is enabled                                               |
| Access, Authentication and Authorization - SSH Server Configuration             | Ensure SSH HostbasedAuthentication is disabled                                   |
| Access, Authentication and Authorization - SSH Server Configuration             | Ensure SSH root login is disabled                                                |
| Access, Authentication and Authorization - SSH Server Configuration             | Ensure SSH PermitEmptyPasswords is disabled                                      |
| Access, Authentication and Authorization - SSH Server Configuration             | Ensure SSH PermitUserEnvironment is disabled                                     |
| Access, Authentication and Authorization - SSH Server Configuration             | Ensure only approved MAC algorithms are used                                     |
| Access, Authentication and Authorization - SSH Server Configuration             | Ensure SSH Idle Timeout Interval is configured                                   |
| Access, Authentication and Authorization - SSH Server Configuration             | Ensure SSH LoginGraceTime is set to one minute or less                           |
| Access, Authentication and Authorization - SSH Server Configuration             | Ensure SSH warning banner is configured                                          |
| Access, Authentication and Authorization - SSH Server Configuration             | Ensure SSH access is limited                                                     |
| Access, Authentication and Authorization - Configure PAM                        | Ensure password hashing algorithm is SHA-512                                     |
| Access, Authentication and Authorization - Configure PAM                        | Ensure password reuse is limited                                                 |
| Access, Authentication and Authorization - User Accounts and Environment        | Ensure default group for the root account is GID 0                               |
| Access, Authentication and Authorization - User Accounts and Environment        | Ensure system accounts are non-login                                             |
| Access, Authentication and Authorization - User Accounts and Environment        | Ensure default user shell timeout is 900 seconds or less                         |
| Access, Authentication and Authorization - Set Shadow Password Suite Parameters | Ensure minimum days between password changes is 7 or more                        |
| Access, Authentication and Authorization - Set Shadow Password Suite Parameters | Ensure password expiration is 90 days or less                                    |
| Access, Authentication and Authorization - Set Shadow Password Suite Parameters | Ensure inactive password lock is 30 days or less                                 |
| Access, Authentication and Authorization - Set Shadow Password Suite Parameters | Ensure password expiration warning days is 7 or more                             |
| Access, Authentication and Authorization - Set Shadow Password Suite Parameters | Ensure all users last password change date is in the past                        |
| System Maintenance - System File Permissions                                    | Ensure permissions on /etc/passwd are configured                                 |
| System Maintenance - System File Permissions                                    | Ensure permissions on /etc/shadow are configured                                 |
| System Maintenance - System File Permissions                                    | Ensure permissions on /etc/group are configured                                  |
| System Maintenance - System File Permissions                                    | Ensure permissions on /etc/gshadow are configured                                |
| System Maintenance - System File Permissions                                    | Ensure permissions on /etc/passwd- are configured                                |
| System Maintenance - System File Permissions                                    | Ensure permissions on /etc/shadow- are configured                                |
| System Maintenance - System File Permissions                                    | Ensure permissions on /etc/group- are configured                                 |
| System Maintenance - System File Permissions                                    | Ensure permissions on /etc/gshadow- are configured                               |
| System Maintenance - System File Permissions                                    | Ensure no world writable files exist                                             |
| System Maintenance - System File Permissions                                    | Ensure no unowned files or directories exist                                     |
| System Maintenance - System File Permissions                                    | Ensure no ungrouped files or directories exist                                   |
| System Maintenance - User and Group Settings                                    | Ensure password fields are not empty                                             |
| System Maintenance - User and Group Settings                                    | Ensure no legacy "+" entries exist in /etc/passwd                                |
| System Maintenance - User and Group Settings                                    | Ensure no legacy "+" entries exist in /etc/shadow                                |
| System Maintenance - User and Group Settings                                    | Ensure no legacy "+" entries exist in /etc/group                                 |
| System Maintenance - User and Group Settings                                    | Ensure root is the only UID 0 account                                            |
| System Maintenance - User and Group Settings                                    | Ensure root PATH Integrity                                                       |
| System Maintenance - User and Group Settings                                    | Ensure all users' home directories exist                                         |
| System Maintenance - User and Group Settings                                    | Ensure users' home directories permissions are 750 or more restrictive           |
| System Maintenance - User and Group Settings                                    | Ensure users own their home directories                                          |
| System Maintenance - User and Group Settings                                    | Ensure users' dot files are not group or world writable                          |
| System Maintenance - User and Group Settings                                    | Ensure no users have .forward files                                              |
| System Maintenance - User and Group Settings                                    | Ensure no users have .netrc files                                                |
| System Maintenance - User and Group Settings                                    | Ensure users' .netrc Files are not group or world accessible                     |
| System Maintenance - User and Group Settings                                    | Ensure no users have .rhosts files                                               |
| System Maintenance - User and Group Settings                                    | Ensure all groups in /etc/passwd exist in /etc/group                             |
| System Maintenance - User and Group Settings                                    | Ensure no duplicate UIDs exist                                                   |
| System Maintenance - User and Group Settings                                    | Ensure no duplicate GIDs exist                                                   |
| System Maintenance - User and Group Settings                                    | Ensure no duplicate user names exist                                             |
| System Maintenance - User and Group Settings                                    | Ensure no duplicate group names exist                                            |
| Initial Setup - Mandatory Access Control                                        | Ensure SELinux is installed                                                      |
| Initial Setup - Configure SELinux                                               | Ensure SELinux is not disabled in bootloader configuration                       |
| Initial Setup - Configure SELinux                                               | Ensure the SELinux state is enforcing                                            |
| Initial Setup - Configure SELinux                                               | Ensure SELinux policy is configured                                              |
| Initial Setup - Configure SELinux                                               | Ensure SETroubleshoot is not installed                                           |
| Initial Setup - Configure SELinux                                               | Ensure the MCS Translation Service (mcstrans) is not installed                   |
| Logging and Auditing - Configure System Accounting (auditd)                     | Ensure auditing for processes that start prior to auditd is enabled              |
| Logging and Auditing - Configure System Accounting (auditd)                     | Ensure events that modify date and time information are collected                |
| Logging and Auditing - Configure System Accounting (auditd)                     | Ensure events that modify user/group information are collected                   |
| Logging and Auditing - Configure System Accounting (auditd)                     | Ensure events that modify the system's network environment are collected         |
| Logging and Auditing - Configure System Accounting (auditd)                     | Ensure events that modify the system's Mandatory Access Controls are collected   |
| Logging and Auditing - Configure System Accounting (auditd)                     | Ensure login and logout events are collected                                     |
| Logging and Auditing - Configure System Accounting (auditd)                     | Ensure discretionary access control permission modification events are collected |
| Logging and Auditing - Configure System Accounting (auditd)                     | Ensure unsuccessful unauthorized file access attempts are collected              |
| Logging and Auditing - Configure System Accounting (auditd)                     | Ensure successful file system mounts are collected                               |
| Logging and Auditing - Configure System Accounting (auditd)                     | Ensure file deletion events by users are collected                               |
| Logging and Auditing - Configure System Accounting (auditd)                     | Ensure system administrator actions (sudolog) are collected                      |
| Logging and Auditing - Configure System Accounting (auditd)                     | Ensure the audit configuration is immutable                                      |
| Logging and Auditing - Configure Data Retention                                 | Ensure audit log storage size is configured                                      |
| Logging and Auditing - Configure Data Retention                                 | Ensure system is disabled when audit logs are full                               |
| Logging and Auditing - Configure Data Retention                                 | Ensure audit logs are not automatically deleted                                  |
