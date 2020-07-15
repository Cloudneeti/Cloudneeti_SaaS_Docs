Red Hat Enterprise Linux 7
==========================


AWS 
---

| Category Name                                     | Policy Name                                                                              |
|---------------------------------------------------|------------------------------------------------------------------------------------------|
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure access to the su command is restricted                                    |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure permissions on /etc/crontab are configured                                |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure permissions on /etc/cron.hourly are configured                            |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure permissions on /etc/cron.daily are configured                             |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure permissions on /etc/cron.weekly are configured                            |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure permissions on /etc/cron.monthly are configured                           |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure permissions on /etc/cron.d are configured                                 |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure at/cron is restricted to authorized users                                 |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure permissions on /etc/ssh/sshd_config are configured                        |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure SSH Protocol is set to 2                                                  |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure SSH LogLevel is set to INFO                                               |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure SSH X11 forwarding is disabled                                            |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure SSH MaxAuthTries is set to 4 or less                                      |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure SSH IgnoreRhosts is enabled                                               |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure SSH HostbasedAuthentication is disabled                                   |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure SSH root login is disabled                                                |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure SSH PermitEmptyPasswords is disabled                                      |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure SSH PermitUserEnvironment is disabled                                     |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure only approved MAC algorithms are used                                     |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure SSH Idle Timeout Interval is configured                                   |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure SSH LoginGraceTime is set to one minute or less                           |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure SSH access is limited                                                     |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure SSH warning banner is configured                                          |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure password creation requirements are configured                             |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure lockout for failed password attempts is configured                        |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure password reuse is limited                                                 |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure password hashing algorithm is SHA-512                                     |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure system accounts are non-login                                             |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure default group for the root account is GID 0                               |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure password expiration is 90 days or less                                    |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure minimum days between password changes is 7 or more                        |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure password expiration warning days is 7 or more                             |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure inactive password lock is 30 days or less                                 |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure all users last password change date is in the past                        |
| RHEL 7 - Access, Authentication and Authorization | RHEL7 - Ensure default user shell timeout is 900 seconds or less                         |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure updates, patches, and additional security software are installed          |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure nodev option set on /tmp partition                                        |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure nosuid option set on /tmp partition                                       |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure noexec option set on /tmp partition                                       |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure nodev option set on /var/tmp partition                                    |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure nosuid option set on /var/tmp partition                                   |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure noexec option set on /var/tmp partition                                   |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure nodev option set on /home partition                                       |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure nodev option set on /dev/shm partition                                    |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure nosuid option set on /dev/shm partition                                   |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure noexec option set on /dev/shm partition                                   |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure sticky bit is set on all world-writable directories                       |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure mounting of cramfs filesystems is disabled                                |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure mounting of freevxfs filesystems is disabled                              |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure mounting of jffs2 filesystems is disabled                                 |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure mounting of hfs filesystems is disabled                                   |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure mounting of hfsplus filesystems is disabled                               |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure mounting of squashfs filesystems is disabled                              |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure mounting of udf filesystems is disabled                                   |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure gpgcheck is globally activated                                            |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure AIDE is installed                                                         |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure filesystem integrity is regularly checked                                 |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure permissions on bootloader config are configured                           |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure bootloader password is set                                                |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure authentication required for single user mode                              |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure core dumps are restricted                                                 |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure XD/NX support is enabled                                                  |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure address space layout randomization (ASLR) is enabled                      |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure prelink is disabled                                                       |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure GDM login banner is configured                                            |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure message of the day is configured properly                                 |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure local login warning banner is configured properly                         |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure remote login warning banner is configured properly                        |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure permissions on /etc/motd are configured                                   |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure permissions on /etc/issue are configured                                  |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure permissions on /etc/issue.net are configured                              |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure separate partition exists for /tmp                                        |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure separate partition exists for /var                                        |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure separate partition exists for /var/tmp                                    |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure separate partition exists for /var/log                                    |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure separate partition exists for /var/log/audit                              |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure separate partition exists for /home                                       |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure mounting of FAT filesystems is disabled                                   |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure SELinux is installed                                                      |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure SELinux is not disabled in bootloader configuration                       |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure the SELinux state is enforcing                                            |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure SELinux policy is configured                                              |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure SETroubleshoot is not installed                                           |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure the MCS Translation Service (mcstrans) is not installed                   |
| RHEL 7 - Initial Setup                            | RHEL7 - Ensure no unconfined daemons exist                                               |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure rsyslog or syslog-ng is installed                                         |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure permissions on all logfiles are configured                                |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure rsyslog default file permissions configured                               |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure rsyslog is configured to send logs to a remote log host                   |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure syslog-ng service is enabled                                              |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure syslog-ng default file permissions configured                             |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure auditing for processes that start prior to auditd is enabled              |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure events that modify date and time information are collected                |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure events that modify user/group information are collected                   |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure events that modify the system's network environment are collected         |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure events that modify the system's Mandatory Access Controls are collected   |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure login and logout events are collected                                     |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure session initiation information is collected                               |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure discretionary access control permission modification events are collected |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure unsuccessful unauthorized file access attempts are collected              |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure use of privileged commands is collected                                   |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure successful file system mounts are collected                               |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure file deletion events by users are collected                               |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure system administrator actions (sudolog) are collected                      |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure the audit configuration is immutable                                      |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure audit log storage size is configured                                      |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure system is disabled when audit logs are full                               |
| RHEL 7 - Logging and Auditing                     | RHEL7 - Ensure audit logs are not automatically deleted                                  |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure IP forwarding is disabled                                                 |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure packet redirect sending is disabled                                       |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure source routed packets are not accepted                                    |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure ICMP redirects are not accepted                                           |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure secure ICMP redirects are not accepted                                    |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure suspicious packets are logged                                             |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure broadcast ICMP requests are ignored                                       |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure bogus ICMP responses are ignored                                          |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure Reverse Path Filtering is enabled                                         |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure TCP SYN Cookies is enabled                                                |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure IPv6 router advertisements are not accepted                               |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure IPv6 redirects are not accepted                                           |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure IPv6 is disabled                                                          |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure TCP Wrappers is installed                                                 |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure /etc/hosts.allow is configured                                            |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure /etc/hosts.deny is configured                                             |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure permissions on /etc/hosts.allow are configured                            |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure permissions on /etc/hosts.deny are configured                             |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure DCCP is disabled                                                          |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure SCTP is disabled                                                          |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure RDS is disabled                                                           |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure TIPC is disabled                                                          |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure iptables is installed                                                     |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure default deny firewall policy                                              |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure loopback traffic is configured                                            |
| RHEL 7 - Network Configuration                    | RHEL7 - Ensure firewall rules exist for all open ports                                   |
| RHEL 7 - Services                                 | RHEL7 - Ensure X Window System is not installed                                          |
| RHEL 7 - Services                                 | RHEL7 - Ensure mail transfer agent is configured for local-only mode                     |
| RHEL 7 - Services                                 | RHEL7 - Ensure time synchronization is in use                                            |
| RHEL 7 - Services                                 | RHEL7 - Ensure ntp is configured                                                         |
| RHEL 7 - Services                                 | RHEL7 - Ensure chrony is configured                                                      |
| RHEL 7 - Services                                 | RHEL7 - Ensure NIS Client is not installed                                               |
| RHEL 7 - Services                                 | RHEL7 - Ensure rsh client is not installed                                               |
| RHEL 7 - Services                                 | RHEL7 - Ensure talk client is not installed                                              |
| RHEL 7 - Services                                 | RHEL7 - Ensure telnet client is not installed                                            |
| RHEL 7 - Services                                 | RHEL7 - Ensure LDAP client is not installed                                              |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure permissions on /etc/passwd are configured                                 |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure permissions on /etc/shadow are configured                                 |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure permissions on /etc/group are configured                                  |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure permissions on /etc/gshadow are configured                                |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure permissions on /etc/passwd- are configured                                |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure permissions on /etc/shadow- are configured                                |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure permissions on /etc/group- are configured                                 |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure permissions on /etc/gshadow- are configured                               |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure no world writable files exist                                             |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure no unowned files or directories exist                                     |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure no ungrouped files or directories exist                                   |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure password fields are not empty                                             |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure no legacy "+" entries exist in /etc/passwd                                |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure no legacy "+" entries exist in /etc/shadow                                |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure no legacy "+" entries exist in /etc/group                                 |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure root is the only UID 0 account                                            |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure root PATH Integrity                                                       |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure all users' home directories exist                                         |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure users' home directories permissions are 750 or more restrictive           |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure users own their home directories                                          |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure users' dot files are not group or world writable                          |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure no users have .forward files                                              |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure no users have .netrc files                                                |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure users' .netrc Files are not group or world accessible                     |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure no users have .rhosts files                                               |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure all groups in /etc/passwd exist in /etc/group                             |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure no duplicate UIDs exist                                                   |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure no duplicate GIDs exist                                                   |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure no duplicate user names exist                                             |
| RHEL 7 - System Maintenance                       | RHEL7 - Ensure no duplicate group names exist                                            |



Azure
-----