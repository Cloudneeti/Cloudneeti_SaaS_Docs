# OS Baseline Quick Wins

 A collection of OS hardening scripts that will help to harden operating system baseline configuration supported by Cloudneeti as defined in CIS Microsoft Windows Server 2016 benchmark v1.0.0. This remediates below Monitoring [policies listed here.](../../remediation/osBaselineQuickWins/#cis-benchmark-windows-server-2016-version-100)

Note: The scripts are designed to harden the operating system baseline configurations, Please test it on the test/staging system before applying to the production system.


| **Configuration script**        | **Number of policies remediated** | **Cloud Account Type**|
|--------------------------------|-------------------------------|-----------------------------------|
| Windows Server 2016 VM baseline policies for Cloud Security Best Practices            | 190                               | Azure|
| Windows Server 2016 VM baseline policies for CIS Benchmark Windows Server 2016 Version 1.0.0   | 151                               | Azure|



#### Prerequisites 
The below steps are required for registering Cloudneeti application in Azure Tenant using PowerShell script.

| Activity             | Description                |
|----------------------|----------------------------|
| 1.	Download and review **PowerShell script** to harden operating system baseline configuration | The PowerShell script is used to harden operating system baseline configuration: <br> [Azure - Windows Server 2016 VM baseline policies for CSBP](https://raw.githubusercontent.com/Cloudneeti/os-harderning-scripts/master/WindowsServer2016/CSBP_WindowsServer2016.ps1){target=_blank}<br> [Azure - Windows Server 2016 VM baseline policies for CIS Benchmark Windows Server 2016 Version 1.0.0](https://raw.githubusercontent.com/Cloudneeti/os-harderning-scripts/master/WindowsServer2016/CIS_Benchmark_WindowsServer2016_v100.ps1){target=_blank} |
| 2.	**Virtual Machine**: Ensure you have the latest PowerShell version (v5 and above) | Verify PowerShell version by running the following command<br>`$PSVersionTable.PSVersion`<br>on the Virtual Machine where you will run the script to harden operating system baseline configuration. If PowerShell version is lower than 5, then follow this link for installation of a later version: [Download Link.](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell?view=powershell-6){target=_blank} |
| 3.	**Virtual Machine:** Before executing the script, make sure there are no restrictions in running the PowerShell script  | Use this PowerShell command:<br>``Set-ExecutionPolicy ` ``<br>``-Scope Process ` ``<br>``-ExecutionPolicy Bypass``<br>PowerShell contains built-in execution policies that limit its use as an attack vector. By default, the execution policy is set to Restricted, which is the primary policy for script execution. The bypass allows for running scripts and keeps the lowered permissions isolated to just the current running process. |
| 4.	**Virtual Machine:** Install DSC modules to execute PowerShell commands within quick wins script | DSC modules to be isnatlled: <br> AuditPolicyDsc <br> SecurityPolicyDsc <br> NetworkingDsc <br> PSDesiredStateConfiguration <br> Check module present or not <br>``Get-InstalledModule -Name <ModuleName> ` ``<br> Install the required modules by executing the below command <br>``Install-Module -Name <ModuleName>`` |

Execute quick wins script
-------------------------

### Windows Server 2016 VM baseline policies for Cloud Security Best Practices

Below steps are performed on Virtual Machine using RDP, as a system admninistrator

1. Run PowerShell script to compile DSC 

        .\CSBP_WindowsServer2016.ps1

2. Script will generate MOF files in the directory.

3. Run below command to apply baseline configuration

        Start-DscConfiguration -Path .\CSBP_WindowsServer2016  -Force -Verbose -Wait

    ![Compliance score](.././images/osBaselineQuickWIns/Script_Execution_1.png#thumbnail_1)

4. Scan related Cloud Account in Cloudneeti or wait for scheduled scan

5. Verify policy results in CSBP Benchmark 

    <!-- ![Compliance score](.././images/osBaselineQuickWIns/Compliance_Score_CIS_Win16.png#thumbnail_1) -->




### Windows Server 2016 VM baseline policies for CIS Benchmark Windows Server 2016 Version 1.0.0

Below steps are performed on Virtual Machine using RDP, as a system admninistrator

1. Run PowerShell script to compile DSC 

        .\CIS_Benchmark_WindowsServer2016_v100.ps1

2. Script will generate MOF files in the directory.

3. Run below command to apply baseline configuration

        Start-DscConfiguration -Path .\CIS_Benchmark_WindowsServer2016_v1_0_0  -Force -Verbose -Wait

    ![Compliance score](.././images/osBaselineQuickWIns/Config_Script_Execution.png#thumbnail_1)

4. Scan related Cloud Account in Cloudneeti or wait for scheduled scan

5. Verify policy results in CIS Benchmark Windows Server 2016 Version 1.0.0

    ![Compliance score](.././images/osBaselineQuickWIns/Compliance_Score_CIS_Win16.png#thumbnail_1)


## Remediation policy list

### CIS Benchmark Windows Server 2016 Version 1.0.0

| **Category Name**                                     | **Policy Title**                                                                                                                                                                             |
|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Win OS-16 - App runtime                               | Windows 2016 - Ensure 'Allow Microsoft accounts to be optional' is set to 'Enabled'                                                                                                          |
| Win OS-16 - Logon                                     | Windows 2016 - Ensure 'Do not display network selection UI' is set to 'Enabled'                                                                                                              |
| Win OS-16 - Logon                                     | Windows 2016 - Ensure 'Turn off app notifications on the lock screen' is set to 'Enabled'                                                                                                    |
| Win OS-16 - Logon                                     | Windows 2016 - Ensure 'Turn on convenience PIN sign-in' is set to 'Disabled'                                                                                                                 |
| Win OS-16 - Personalization                           | Windows 2016 - Ensure 'Prevent enabling lock screen slide show' is set to 'Enabled'                                                                                                          |
| Win OS-16 - Personalization                           | Windows 2016 - Ensure 'Prevent enabling lock screen camera' is set to 'Enabled'                                                                                                              |
| Win OS-16 - Network security                          | Windows 2016 - Ensure 'Network security: Allow Local System to use computer identity for NTLM' is set to 'Enabled'                                                                           |
| Win OS-16 - Network security                          | Windows 2016 - Ensure 'Network Security: Allow PKU2U authentication requests to this computer to use online identities' is set to 'Disabled'                                                 |
| Win OS-16 - Network security                          | Windows 2016 - Ensure 'Network Security: Configure encryption types allowed for Kerberos' is set to 'RC4_HMAC_MD5, AES128_HMAC_SHA1, AES256_HMAC_SHA1, Future encryption types'              |
| Win OS-16 - Network security                          | Windows 2016 - Ensure 'Network security: Allow LocalSystem NULL session fallback' is set to 'Disabled'                                                                                       |
| Win OS-16 - Network security                          | Windows 2016 - Ensure 'Network security: LDAP client signing requirements' is set to 'Negotiate signing' or higher                                                                           |
| Win OS-16 - Network security                          | Windows 2016 - Ensure 'Network security: Minimum session security for NTLM SSP based (including secure RPC) clients' is set to 'Require NTLMv2 session security, Require 128-bit encryption' |
| Win OS-16 - Network security                          | Windows 2016 - Ensure 'Network security: Minimum session security for NTLM SSP based (including secure RPC) servers' is set to 'Require NTLMv2 session security, Require 128-bit encryption' |
| Win OS-16 - Network security                          | Windows 2016 - Ensure 'Network security: LAN Manager authentication level' is set to 'Send NTLMv2 response only. Refuse LM & NTLM'                                                           |
| Win OS-16 - Network security                          | Windows 2016 - Ensure 'Network security: Do not store LAN Manager hash value on next password change' is set to 'Enabled'                                                                    |
| Win OS-16 - Windows Connection Manager                | Windows 2016 - Ensure 'Minimize the number of simultaneous connections to the Internet or a Windows Domain' is set to 'Enabled'                                                              |
| Win OS-16 - Private Profile                           | Windows 2016 - Ensure 'Windows Firewall: Private: Outbound connections' is set to 'Allow (default)'                                                                                          |
| Win OS-16 - Private Profile                           | Windows 2016 - Ensure 'Windows Firewall: Private: Firewall state' is set to 'On (recommended)'                                                                                               |
| Win OS-16 - Private Profile                           | Windows 2016 - Ensure 'Windows Firewall: Private: Settings: Display a notification' is set to 'No'                                                                                           |
| Win OS-16 - Account Management                        | Windows 2016 - Ensure 'Audit User Account Management' is set to 'Success and Failure'                                                                                                        |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Increase scheduling priority' is set to 'Administrators'                                                                                                              |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Take ownership of files or other objects' is set to 'Administrators'                                                                                                  |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Modify firmware environment values' is set to 'Administrators'                                                                                                        |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Configure 'Deny access to this computer from the network'                                                                                                                     |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Force shutdown from a remote system' is set to 'Administrators'                                                                                                       |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Profile system performance' is set to 'Administrators, NT SERVICE\\WdiServiceHost'                                                                                    |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Deny log on locally' is configured                                                                                                                                    |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Change the time zone' is set to 'Administrators, LOCAL SERVICE'                                                                                                       |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Configure 'Enable computer and user accounts to be trusted for delegation'                                                                                                    |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Load and unload device drivers' is configured                                                                                                                         |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Create global objects' is set to 'Administrators, LOCAL SERVICE, NETWORK SERVICE, SERVICE'                                                                            |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Deny log on as a service' is configured                                                                                                                               |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Configure 'Create symbolic links'                                                                                                                                             |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Deny log on through Remote Desktop Services' is configured                                                                                                            |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Lock pages in memory' is set to 'No One'                                                                                                                              |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Restore files and directories' is set to 'Administrators, Backup Operators'                                                                                           |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Create a token object' is set to 'No One'                                                                                                                             |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Create a pagefile' is set to 'Administrators'                                                                                                                         |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Generate security audits' is set to 'LOCAL SERVICE, NETWORK SERVICE'                                                                                                  |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Change the system time' is configured                                                                                                                                 |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Perform volume maintenance tasks' is set to 'Administrators'                                                                                                          |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Deny log on as a batch job' is configured                                                                                                                             |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Back up files and directories' is configured                                                                                                                          |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Configure 'Allow log on through Remote Desktop Services'                                                                                                                      |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Profile single process' is set to 'Administrators'                                                                                                                    |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Create permanent shared objects' is set to 'No One'                                                                                                                   |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Replace a process level token' is set to 'LOCAL SERVICE, NETWORK SERVICE'                                                                                             |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Act as part of the operating system' is set to 'No One'                                                                                                               |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Access Credential Manager as a trusted caller' is set to 'No One'                                                                                                     |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Configure 'Manage auditing and security log'                                                                                                                                  |
| Win OS-16 - User Rights Assignment                    | Windows 2016 - Ensure 'Modify an object label' is set to 'No One'                                                                                                                            |
| Win OS-16 - Policy Change                             | Windows 2016 - Ensure 'Audit Authentication Policy Change' is set to 'Success'                                                                                                               |
| Win OS-16 - OCR                                       | Windows 2016 - Ensure 'Allow indexing of encrypted files' is set to 'Disabled'                                                                                                               |
| Win OS-16 - Security                                  | Windows 2016 - Ensure 'Setup: Control Event Log behavior when the log file reaches its maximum size' is set to 'Disabled'                                                                    |
| Win OS-16 - Security                                  | Windows 2016 - Ensure 'Always prompt for password upon connection' is set to 'Enabled'                                                                                                       |
| Win OS-16 - Security                                  | Windows 2016 - Ensure 'Require secure RPC communication' is set to 'Enabled'                                                                                                                 |
| Win OS-16 - Security                                  | Windows 2016 - Ensure 'Set client connection encryption level' is set to 'Enabled: High Level'                                                                                               |
| Win OS-16 - Security                                  | Windows 2016 - Ensure 'Security: Specify the maximum log file size (KB)' is set to 'Enabled: 196,608 or greater'                                                                             |
| Win OS-16 - Security                                  | Windows 2016 - Ensure 'Security: Control Event Log behavior when the log file reaches its maximum size' is set to 'Disabled'                                                                 |
| Win OS-16 - Logon/Logoff                              | Windows 2016 - Ensure 'Audit Logoff' is set to 'Success'                                                                                                                                     |
| Win OS-16 - Logon/Logoff                              | Windows 2016 - Ensure 'Audit Logon' is set to 'Success and Failure'                                                                                                                          |
| Win OS-16 - Logon/Logoff                              | Windows 2016 - Ensure 'Audit Security Group Management' is set to 'Success'                                                                                                                  |
| Win OS-16 - Logon/Logoff                              | Windows 2016 - Ensure 'Audit Other Logon/Logoff Events' is set to 'Success and Failure'                                                                                                      |
| Win OS-16 - Logon/Logoff                              | Windows 2016 - Ensure 'Audit Account Lockout' is set to 'Success and Failure'                                                                                                                |
| Win OS-16 - Logon/Logoff                              | Windows 2016 - Ensure 'Audit Special Logon' is set to 'Success'                                                                                                                              |
| Win OS-16 - WinRM Client                              | Windows 2016 - Ensure 'Allow unencrypted traffic' is set to 'Disabled'                                                                                                                       |
| Win OS-16 - WinRM Client                              | Windows 2016 - Ensure 'Disallow Digest authentication' is set to 'Enabled'                                                                                                                   |
| Win OS-16 - AutoPlay Policies                         | Windows 2016 - Ensure 'Set the default behavior for AutoRun' is set to 'Enabled: Do not execute any autorun commands'                                                                        |
| Win OS-16 - AutoPlay Policies                         | Windows 2016 - Ensure 'Disallow Autoplay for non-volume devices' is set to 'Enabled'                                                                                                         |
| Win OS-16 - AutoPlay Policies                         | Windows 2016 - Ensure 'Turn off Autoplay' is set to 'Enabled: All drives'                                                                                                                    |
| Win OS-16 - Temporary folders                         | Windows 2016 - Ensure 'Do not use temporary folders per session' is set to 'Disabled'                                                                                                        |
| Win OS-16 - System                                    | Windows 2016 - Ensure 'Audit Security State Change' is set to 'Success'                                                                                                                      |
| Win OS-16 - System                                    | Windows 2016 - Ensure 'Boot-Start Driver Initialization Policy' is set to 'Enabled: Good, unknown and bad but critical'                                                                      |
| Win OS-16 - System                                    | Windows 2016 - Ensure 'Audit Security System Extension' is set to 'Success'                                                                                                                  |
| Win OS-16 - System                                    | Windows 2016 - Ensure 'Audit System Integrity' is set to 'Success'                                                                                                                           |
| Win OS-16 - System                                    | Windows 2016 - Ensure 'System: Control Event Log behavior when the log file reaches its maximum size' is set to 'Disabled'                                                                   |
| Win OS-16 - System                                    | Windows 2016 - Ensure 'System: Specify the maximum log file size (KB)' is set to 'Enabled: 32,768 or greater'                                                                                |
| Win OS-16 - Microsoft network server                  | Windows 2016 - Ensure 'Microsoft network server: Idle time required before suspending session' is set to '15 or fewer minute(s), but not 0'                                                  |
| Win OS-16 - Microsoft network server                  | Windows 2016 - Ensure 'Microsoft network server: Disconnect clients when logon hours expire' is set to 'Enabled'                                                                             |
| Win OS-16 - Microsoft network server                  | Windows 2016 - Ensure 'Microsoft network server: Digitally sign communications (always)' is set to 'Enabled'                                                                                 |
| Win OS-16 - Microsoft network server                  | Windows 2016 - Ensure 'Microsoft network server: Digitally sign communications (if client agrees)' is set to 'Enabled'                                                                       |
| Win OS-16 - Public Profile                            | Windows 2016 - Ensure 'Windows Firewall: Public: Settings: Display a notification' is set to 'Yes'                                                                                           |
| Win OS-16 - Public Profile                            | Windows 2016 - Ensure 'Windows Firewall: Public: Firewall state' is set to 'On (recommended)'                                                                                                |
| Win OS-16 - Public Profile                            | Windows 2016 - Ensure 'Windows Firewall: Public: Settings: Apply local firewall rules' is set to 'No'                                                                                        |
| Win OS-16 - Domain Profile                            | Windows 2016 - Ensure 'Windows Firewall: Domain: Settings: Display a notification' is set to 'No'                                                                                            |
| Win OS-16 - Domain Profile                            | Windows 2016 - Ensure 'Windows Firewall: Domain: Firewall state' is set to 'On (recommended)'                                                                                                |
| Win OS-16 - Domain Profile                            | Windows 2016 - Ensure 'Windows Firewall: Domain: Outbound connections' is set to 'Allow (default)'                                                                                           |
| Win OS-16 - Windows Firewall                          | Windows 2016 - Ensure 'Prohibit installation and configuration of Network Bridge on your DNS domain network' is set to 'Enabled'                                                             |
| Win OS-16 - Application                               | Windows 2016 - Ensure 'Application: Specify the maximum log file size(KB)' is set to 'Enabled: 32,768 or greater'                                                                            |
| Win OS-16 - Application                               | Windows 2016 - Ensure 'Do not delete temp folders upon exit' is set to 'Disabled'                                                                                                            |
| Win OS-16 - Application                               | Windows 2016 - Ensure 'Application: Control Event Log behavior when the log file reaches its maximum size' is set to 'Disabled'                                                              |
| Win OS-16 - Devices                                   | Windows 2016 - Ensure 'Devices: Prevent users from installing printer drivers'is set to 'Enabled'                                                                                            |
| Win OS-16 - Devices                                   | Windows 2016 - Ensure 'Devices: Allowed to format and eject removable media' is set to 'Administrators'                                                                                      |
| Win OS-16 - System objects                            | Windows 2016 - Ensure 'System objects: Require case insensitivity for non-Windows subsystems' is set to 'Enabled'                                                                            |
| Win OS-16 - System objects                            | Windows 2016 - Ensure 'System objects: Strengthen default permissions of internal system objects (e.g. Symbolic Links)' is set to 'Enabled'                                                  |
| Win OS-16 - Microsoft network client                  | Windows 2016 - Ensure 'Microsoft network client: Send unencrypted password to third-party SMB servers                                                                                        |
| Win OS-16 - Microsoft network client                  | Windows 2016 - Ensure 'Microsoft network client: Digitally sign communications (always)' is set to 'Enabled'                                                                                 |
| Win OS-16 - Microsoft network client                  | Windows 2016 - Ensure 'Microsoft network client: Digitally sign communications (if server agrees)' is set to 'Enabled'                                                                       |
| Win OS-16 - Audit                                     | Windows 2016 - Ensure 'Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings' is set to 'Enabled'                               |
| Win OS-16 - Audit                                     | Windows 2016 - Ensure 'Audit: Shut down system immediately if unable to log security audits' is set to 'Disabled'                                                                            |
| Win OS-16 - Network access                            | Windows 2016 - Ensure 'Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings' is set to 'Enabled'                               |
| Win OS-16 - Network access                            | Windows 2016 - Ensure 'Network access: Sharing and security model for local accounts' is set to 'Classic - local users authenticate as themselves'                                           |
| Win OS-16 - Network access                            | Windows 2016 - Configure 'Network access: Remotely accessible registry paths'                                                                                                                |
| Win OS-16 - Network access                            | Windows 2016 - Ensure 'Network access: Restrict anonymous access to Named Pipes and Shares' is set to 'Enabled'                                                                              |
| Win OS-16 - Network access                            | Windows 2016 - Configure 'Network access: Remotely accessible registry paths and sub-paths'                                                                                                  |
| Win OS-16 - Network access                            | Windows 2016 - Ensure 'Network access: Shares that can be accessed anonymously' is set to 'None'                                                                                             |
| Win OS-16 - Network access                            | Windows 2016 - Ensure 'Network access: Do not allow anonymous enumeration of SAM accounts' is set to 'Enabled' (MS only)                                                                     |
| Win OS-16 - Network access                            | Windows 2016 - Ensure 'Network access: Do not allow anonymous enumeration of SAM accounts and shares' is set to 'Enabled' (MS only)                                                          |
| Win OS-16 - Detailed Tracking                         | Windows 2016 - Ensure 'Audit Process Creation' is set to 'Success and Failure'                                                                                                               |
| Win OS-16 - Object Access                             | Windows 2016 - Ensure 'Audit Removable Storage' is set to 'Success and Failure'                                                                                                              |
| Win OS-16 - Account Logon                             | Windows 2016 - Ensure 'Audit Credential Validation' is set to 'Success and Failure'                                                                                                          |
| Win OS-16 - Account Logon                             | Windows 2016 - Ensure 'Audit Policy Change' is set to 'Success'                                                                                                                              |
| Win OS-16 - Remote Assistance                         | Windows 2016 - Ensure 'Configure Solicited Remote Assistance' is set to 'Disabled'                                                                                                           |
| Win OS-16 - Remote Assistance                         | Windows 2016 - Ensure 'Configure Offer Remote Assistance' is set to 'Disabled'                                                                                                               |
| Win OS-16 - Remote Assistance                         | Windows 2016 - Ensure 'Enable RPC Endpoint Mapper Client Authentication' is set to 'Enabled' (MS only)                                                                                       |
| Win OS-16 - Interactive logon                         | Windows 2016 - Ensure 'Interactive logon: Do not display last user name' is set to 'Enabled'                                                                                                 |
| Win OS-16 - Interactive logon                         | Windows 2016 - Ensure 'Interactive logon: Do not require CTRL+ALT+DEL' is set to 'Disabled'                                                                                                  |
| Win OS-16 - Audit Process Creation                    | Windows 2016 - Ensure 'Include command line in process creation events' is set to 'Disabled'                                                                                                 |
| Win OS-16 - WinRM Service                             | Windows 2016 - Ensure 'Disallow WinRM from storing RunAs credentials' is set to 'Enabled'                                                                                                    |
| Win OS-16 - WinRM Service                             | Windows 2016 - Ensure 'Allow Basic authentication' is set to 'Disabled'                                                                                                                      |
| Win OS-16 - Accounts                                  | Windows 2016 - Ensure 'Accounts: Limit local account use of blank passwords to console logon only' is set to 'Enabled'                                                                       |
| Win OS-16 - Accounts                                  | Windows 2016 - Ensure 'Accounts: Guest account status' is set to 'Disabled'                                                                                                                  |
| Win OS-16 - Explorer                                  | Windows 2016 - Ensure 'Configure Windows SmartScreen' is set to 'Enabled'                                                                                                                    |
| Win OS-16 - RSS Feeds                                 | Windows 2016 - Ensure 'Prevent downloading of enclosures' is set to 'Enabled'                                                                                                                |
| Win OS-16 - Windows Installer                         | Windows 2016 - Ensure 'Allow user control over installs' is set to 'Disabled'                                                                                                                |
| Win OS-16 - Windows Installer                         | Windows 2016 - Ensure 'Always install with elevated privileges' is set to 'Disabled'                                                                                                         |
| Win OS-16 - Credential User Interface                 | Windows 2016 - Ensure 'Do not display the password reveal button' is set to 'Enabled'                                                                                                        |
| Win OS-16 - Credential User Interface                 | Windows 2016 - Ensure 'Enumerate administrator accounts on elevation' is set to 'Disabled'                                                                                                   |
| Win OS-16 - Privilege Use                             | Windows 2016 - Ensure 'Audit Sensitive Privilege Use' is set to 'Success and Failure'                                                                                                        |
| Win OS-16 - Remote Desktop Connection Client          | Windows 2016 - Ensure 'Do not allow passwords to be saved' is set to 'Enabled'                                                                                                               |
| Win OS-16 - Setup                                     | Windows 2016 - Ensure 'Setup: Specify the maximum log file size (KB)' is set to 'Enabled: 32,768 or greater'                                                                                 |
| Win OS-16 - Internet Communication settings           | Windows 2016 - Ensure 'Turn off downloading of print drivers over HTTP' is set to 'Enabled'                                                                                                  |
| Win OS-16 - User Account Control                      | Windows 2016 - Ensure 'User Account Control: Virtualize file and registry write failures to per-user locations' is set to 'Enabled'                                                          |
| Win OS-16 - User Account Control                      | Windows 2016 - Ensure 'UAC: Elevation prompt for administrators in Admin Approval Mode' is set to 'Prompt for consent on the secure desktop'                                                 |
| Win OS-16 - User Account Control                      | Windows 2016 - Ensure 'UAC: Allow UIAccess applications to prompt for elevation without using the secure desktop' is set to 'Disabled'                                                       |
| Win OS-16 - User Account Control                      | Windows 2016 - Ensure 'UAC: Behavior of the elevation prompt for standard users' is set to 'Automatically deny elevation requests'                                                           |
| Win OS-16 - User Account Control                      | Windows 2016 - Ensure 'User Account Control: Run all administrators in Admin Approval Mode' is set to 'Enabled'                                                                              |
| Win OS-16 - User Account Control                      | Windows 2016 - Ensure 'User Account Control: Admin Approval Mode for the Built-in Administrator account' is set to 'Enabled'                                                                 |
| Win OS-16 - User Account Control                      | Windows 2016 - Ensure 'User Account Control: Detect application installations and prompt for elevation' is set to 'Enabled'                                                                  |
| Win OS-16 - User Account Control                      | Windows 2016 - Ensure 'User Account Control: Switch to the secure desktop when prompting for elevation' is set to 'Enabled'                                                                  |
| Win OS-16 - User Account Control                      | Windows 2016 - Ensure 'User Account Control: Only elevate UIAccess applications that are installed in secure locations' is set to 'Enabled'                                                  |
| Win OS-16 - Windows Logon Options                     | Windows 2016 - Ensure 'Sign-in last interactive user automatically after a system-initiated restart' is set to 'Disabled'                                                                    |
| Win OS-16 - File Explorer (formerly Windows Explorer) | Windows 2016 - Ensure 'Turn off heap termination on corruption' is set to 'Disabled'                                                                                                         |
| Win OS-16 - File Explorer (formerly Windows Explorer) | Windows 2016 - Ensure 'Turn off Data Execution Prevention for Explorer' is set to 'Disabled'                                                                                                 |
| Win OS-16 - Shutdown                                  | Windows 2016 - Ensure 'Shutdown: Allow system to be shut down without having to log on' is set to 'Disabled'                                                                                 |
| Win OS-16 - Password Policy                           | Windows 2016 - Ensure 'Minimum password length' is set to '14 or more character(s)'                                                                                                          |
| Win OS-16 - Password Policy                           | Windows 2016 - Ensure 'Store passwords using reversible encryption' is set to 'Disabled'                                                                                                     |
| Win OS-16 - Password Policy                           | Windows 2016 - Ensure 'Password must meet complexity requirements' is set to 'Enabled'                                                                                                       |
| Win OS-16 - Password Policy                           | Windows 2016 - Ensure 'Minimum password age' is set to '1 or more day(s)'                                                                                                                    |
| Win OS-16 - Password Policy                           | Windows 2016 - Ensure 'Maximum password age' is set to '70 or fewer days, but not 0'                                                                                                         |
| Win OS-16 - Password Policy                           | Windows 2016 - Ensure 'Enforce password history' is set to '24 or more password(s)'                                                                                                          |
