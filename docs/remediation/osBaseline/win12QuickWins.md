# Windows Server 2012 R2 VM Baseline Quick Wins

 A collection of quick wins scripts that will help to harden operating system baseline configuration supported by Cloudneeti as defined in CIS Microsoft Windows Server 2016 benchmark v1.0.0. This remediates below Monitoring [policies listed here.](../../osBaseline/win12QuickWins/#cis-benchmark-windows-server-2012-r2-version-100)

Note: The scripts are designed to harden the operating system baseline configurations, Please test it on the test/staging system before applying to the production system.


| **Configuration script**        | **Number of policies remediated** | **Cloud Account Type**|
|--------------------------------|-------------------------------|-----------------------------------|
| Windows Server 2012 R2 VM baseline policies for Cloud Security Best Practices            | 125                               | Azure|
| Windows Server 2012 R2 VM baseline policies for CIS Benchmark Windows Server 2012 R2 Version 1.0.0   | 115                               | Azure|



#### Prerequisites 
The below steps are required for registering Cloudneeti application in Azure Tenant using PowerShell script.

| Activity             | Description                |
|----------------------|----------------------------|
| 1.	Download and review **PowerShell script** to harden operating system baseline configuration | The PowerShell script is used to harden operating system baseline configuration: <br> [Azure - Windows Server 2012 R2 VM baseline policies for CSBP](https://raw.githubusercontent.com/Cloudneeti/os-harderning-scripts/master/WindowsServer2012R2/CSBP_WindowsServer2012_R2.ps1){target=_blank}<br> [Azure - Windows Server 2012 R2 VM baseline policies for CIS Benchmark Windows Server 2012 R2 Benchmark v1.0.0](https://raw.githubusercontent.com/Cloudneeti/os-harderning-scripts/master/WindowsServer2012R2/CIS_Benchmark_WindowsServer2012_R2_v1_0_0.ps1){target=_blank} |
| 2.	**Virtual Machine**: Ensure you have the latest PowerShell version (v5 and above) | Verify PowerShell version by running the following command<br>`$PSVersionTable.PSVersion`<br>on the Virtual Machine where you will run the script to harden operating system baseline configuration. If PowerShell version is lower than 5, then follow this link for installation of a later version: [Download Link.](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell?view=powershell-6){target=_blank} |
| 3.	**Virtual Machine:** Before executing the script, make sure there are no restrictions in running the PowerShell script  | Use this PowerShell command:<br>``Set-ExecutionPolicy ` ``<br>``-Scope Process ` ``<br>``-ExecutionPolicy Bypass``<br>PowerShell contains built-in execution policies that limit its use as an attack vector. By default, the execution policy is set to Restricted, which is the primary policy for script execution. The bypass allows for running scripts and keeps the lowered permissions isolated to just the current running process. |
| 4.	**Virtual Machine:** Install DSC modules to execute PowerShell commands within quick wins script | DSC modules to be isnatlled: <br> AuditPolicyDsc <br> SecurityPolicyDsc <br> NetworkingDsc <br> PSDesiredStateConfiguration <br> Check module present or not <br>``Get-InstalledModule -Name <ModuleName> ` ``<br> Install the required modules by executing the below command <br>``Install-Module -Name <ModuleName>`` |

Execute quick wins script
-------------------------

### Windows Server 2012 R2 VM baseline policies for Cloud Security Best Practices

Below steps are performed on Virtual Machine using RDP, as a system admninistrator

1. Download quick wins script

        wget https://raw.githubusercontent.com/Cloudneeti/os-harderning-scripts/master/WindowsServer2012R2/CSBP_WindowsServer2012_R2.ps1 -O CSBP_WindowsServer2012_R2.ps1

2. Run PowerShell script to compile DSC 

        .\CSBP_WindowsServer2012_R2.ps1

3. Script will generate MOF files in the directory.

4. Run below command to apply baseline configuration

        Start-DscConfiguration -Path .\CSBP_WindowsServer2012_R2.ps1  -Force -Verbose -Wait

    <!-- ![Compliance score](.././images/osBaselineQuickWIns/Script_Execution_1.png#thumbnail_1) -->

5. Scan related Cloud Account in Cloudneeti or wait for scheduled scan

6. Verify policy results in CSBP Benchmark 

    ![Compliance score](../../images/osBaselineQuickWIns/Compliance_Score_CSBP_Win12.png#thumbnail_1)




### Windows Server 2012 R2 VM baseline policies for CIS Benchmark Windows Server 2012 R2 Version 1.0.0

Below steps are performed on Virtual Machine using RDP, as a system admninistrator

1. Download quick wins script

        wget https://raw.githubusercontent.com/Cloudneeti/os-harderning-scripts/master/WindowsServer2012R2/CIS_Benchmark_WindowsServer2012_R2_v1_0_0.ps1 -O CIS_Benchmark_WindowsServer2012_R2_v1_0_0.ps1

2. Run PowerShell script to compile DSC 

        .\CIS_Benchmark_WindowsServer2012_R2_v1_0_0.ps1

3. Script will generate MOF files in the directory.

4. Run below command to apply baseline configuration

        Start-DscConfiguration -Path .\CIS_Benchmark_WindowsServer2012_R2_v1_0_0  -Force -Verbose -Wait

    <!-- ![Compliance score](.././images/osBaselineQuickWIns/Config_Script_Execution.png#thumbnail_1) -->

5. Scan related Cloud Account in Cloudneeti or wait for scheduled scan

6. Verify policy results in CIS Benchmark Windows Server 2012 R2 Version 1.0.0

    ![Compliance score](../../images/osBaselineQuickWIns/Compliance_Score_CIS_Win12.png#thumbnail_1)


## Remediation policy list

### CIS Benchmark Windows Server 2012 R2 Version 1.0.0

| Category Name                                           | Policy Name                                                                                                                                                                       |
|---------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Win OS-12R2 - Password Policy                           | Windows 2012R2 - Ensure 'Enforce password history' is set to '24 or more password(s)'                                                                                             |
| Win OS-12R2 - Password Policy                           | Windows 2012R2 - Ensure 'Maximum password age' is set to '70 or fewer days, but not 0'                                                                                            |
| Win OS-12R2 - Password Policy                           | Windows 2012R2 - Ensure 'Minimum password age' is set to '1 or more day(s)'                                                                                                       |
| Win OS-12R2 - Password Policy                           | Windows 2012R2 - Ensure 'Minimum password length' is set to '14 or more character(s)'                                                                                             |
| Win OS-12R2 - Password Policy                           | Windows 2012R2 - Ensure 'Password must meet complexity requirements' is set to 'Enabled'                                                                                          |
| Win OS-12R2 - Password Policy                           | Windows 2012R2 - Ensure 'Store passwords using reversible encryption' is set to 'Disabled'                                                                                        |
| Win OS-12R2 - Network access                            | Windows 2012R2 - Configure 'Network access: Remotely accessible registry paths'                                                                                                   |
| Win OS-12R2 - Network access                            | Windows 2012R2 - Configure 'Network access: Remotely accessible registry paths and sub-paths'                                                                                     |
| Win OS-12R2 - Network access                            | Windows 2012R2 - Ensure 'Network access: Shares that can be accessed anonymously' is set to 'None'                                                                                |
| Win OS-12R2 - Network access                            | Windows 2012R2 - Network access: Sharing and security model for local accounts                                                                                                    |
| Win OS-12R2 - Network access                            | Windows 2012R2 - Network access: Let Everyone permissions apply to anonymous users                                                                                                |
| Win OS-12R2 - Network access                            | Windows 2012R2 - Network access: Restrict anonymous access to Named Pipes and Shares                                                                                              |
| Win OS-12R2 - Network access                            | Windows 2012R2 - Network access: Do not allow anonymous enumeration of SAM accounts                                                                                               |
| Win OS-12R2 - Network access                            | Windows 2012R2 - Network access: Do not allow anonymous enumeration of SAM accounts and shares                                                                                    |
| Win OS-12R2 - WinRM Service                             | Windows 2012R2 - Ensure 'Allow unencrypted traffic' is set to 'Disabled'                                                                                                          |
| Win OS-12R2 - WinRM Service                             | Windows 2012R2 - Ensure 'Allow Basic authentication' is set to 'Disabled'                                                                                                         |
| Win OS-12R2 - WinRM Service                             | Windows 2012R2 - Ensure 'Disallow WinRM from storing RunAs credentials' is set to 'Enabled'                                                                                       |
| Win OS-12R2 - Remote Desktop Connection Client          | Windows 2012R2 - Ensure 'Do not allow passwords to be saved' is set to 'Enabled'                                                                                                  |
| Win OS-12R2 - System                                    | Windows 2012R2 - Audit Policy: System: Security State Change                                                                                                                      |
| Win OS-12R2 - System                                    | Windows 2012R2 - Audit Policy: System: Security System Extension                                                                                                                  |
| Win OS-12R2 - System                                    | Windows 2012R2 - Audit Policy: System: System Integrity                                                                                                                           |
| Win OS-12R2 - System                                    | Windows 2012R2 - Ensure 'System: Control Event Log behavior when the log file reaches its maximum size' is set to 'Disabled'                                                      |
| Win OS-12R2 - Logon                                     | Windows 2012R2 - Ensure 'Turn on convenience PIN sign-in' is set to 'Disabled'                                                                                                    |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Access Credential Manager as a trusted caller' is set to 'No One'                                                                                        |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Configure 'Access this computer from the network'                                                                                                                |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Act as part of the operating system' is set to 'No One'                                                                                                  |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Configure 'Allow log on through Remote Desktop Services'                                                                                                         |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Back up files and directories' is set to 'Administrators'                                                                                                |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Change the system time' is set to 'Administrators, LOCAL SERVICE'                                                                                        |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Change the time zone' is set to 'Administrators, LOCAL SERVICE'                                                                                          |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Create a pagefile' is set to 'Administrators'                                                                                                            |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Create a token object' is set to 'No One'                                                                                                                |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Create global objects' is set to 'Administrators, LOCAL SERVICE, NETWORK SERVICE, SERVICE'                                                               |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Create permanent shared objects' is set to 'No One'                                                                                                      |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Configure 'Create symbolic links'                                                                                                                                |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Configure 'Deny access to this computer from the network'                                                                                                        |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Deny log on as a batch job' to include 'Guests'                                                                                                          |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Deny log on as a service' to include 'Guests'                                                                                                            |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Deny log on locally' to include 'Guests'                                                                                                                 |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Configure 'Deny log on through Remote Desktop Services'                                                                                                          |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Configure 'Enable computer and user accounts to be trusted for delegation'                                                                                       |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Force shutdown from a remote system' is set to 'Administrators'                                                                                          |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Generate security audits' is set to 'LOCAL SERVICE, NETWORK SERVICE'                                                                                     |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Increase scheduling priority' is set to 'Administrators'                                                                                                 |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Load and unload device drivers' is set to 'Administrators'                                                                                               |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Lock pages in memory' is set to 'No One'                                                                                                                 |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Configure 'Manage auditing and security log'                                                                                                                     |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Modify an object label' is set to 'No One'                                                                                                               |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Modify firmware environment values' is set to 'Administrators'                                                                                           |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Perform volume maintenance tasks' is set to 'Administrators'                                                                                             |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Profile single process' is set to 'Administrators'                                                                                                       |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Profile system performance' is set to 'Administrators, NT SERVICE-WdiServiceHost'                                                                        |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Replace a process level token' is set to 'LOCAL SERVICE, NETWORK SERVICE'                                                                                |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Restore files and directories' is set to 'Administrators'                                                                                                |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Shut down the system' is set to 'Administrators'                                                                                                         |
| Win OS-12R2 - User Rights Assignment                    | Windows 2012R2 - Ensure 'Take ownership of files or other objects' is set to 'Administrators'                                                                                     |
| Win OS-12R2 - Accounts                                  | Windows 2012R2 - Ensure 'Accounts: Guest account status' is set to 'Disabled' (MS only)                                                                                           |
| Win OS-12R2 - Accounts                                  | Windows 2012R2 - Ensure 'Accounts: Limit local account use of blank passwords to console logon only' is set to 'Enabled'                                                          |
| Win OS-12R2 - Audit                                     | Windows 2012R2 - Ensure 'Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings' is set to 'Enabled'                  |
| Win OS-12R2 - Audit                                     | Windows 2012R2 - Ensure 'Audit: Shut down system immediately if unable to log security audits' is set to 'Disabled'                                                               |
| Win OS-12R2 - Devices                                   | Windows 2012R2 - Ensure 'Devices: Allowed to format and eject removable media' is set to 'Administrators'                                                                         |
| Win OS-12R2 - Devices                                   | Windows 2012R2 - Ensure 'Devices: Prevent users from installing printer drivers' is set to 'Enabled'                                                                              |
| Win OS-12R2 - Interactive logon                         | Windows 2012R2 - Ensure 'Interactive logon: Do not require CTRL+ALT+DEL' is set to 'Disabled'                                                                                     |
| Win OS-12R2 - Microsoft network server                  | Windows 2012R2 - Ensure 'Microsoft network server: Idle time required before suspending session' is set to '15 or fewer minute(s), but not 0'                                     |
| Win OS-12R2 - Microsoft network server                  | Windows 2012R2 - Ensure 'Microsoft network server: Disconnect clients when logon hours expire' is set to 'Enabled'                                                                |
| Win OS-12R2 - Remote Assistance                         | Windows 2012R2 - Ensure 'Configure Offer Remote Assistance' is set to 'Disabled'                                                                                                  |
| Win OS-12R2 - Public Profile                            | Windows 2012R2 - Ensure 'Windows Firewall: Public: Settings: Apply local firewall rules' is set to 'No'                                                                           |
| Win OS-12R2 - Microsoft network client                  | Windows 2012R2 - Ensure 'Microsoft network client: Digitally sign communications (if server agrees)' is set to 'Enabled'                                                          |
| Win OS-12R2 - Microsoft network client                  | Windows 2012R2 - Ensure 'Microsoft network client: Send unencrypted password to third-party SMB servers' is set to 'Disabled'                                                     |
| Win OS-12R2 - Account Logon                             | Windows 2012R2 - Audit Policy: Account Logon: Credential Validation                                                                                                               |
| Win OS-12R2 - Account Management                        | Windows 2012R2 - Audit Policy: Account Management: Other Account Management Events                                                                                                |
| Win OS-12R2 - Account Management                        | Windows 2012R2 - Audit Policy: Account Management: Security Group Management                                                                                                      |
| Win OS-12R2 - Account Management                        | Windows 2012R2 - Audit Policy: Account Management: User Account Management                                                                                                        |
| Win OS-12R2 - Detailed Tracking                         | Windows 2012R2 - Audit Policy: Detailed Tracking: Process Creation                                                                                                                |
| Win OS-12R2 - Logon/Logoff                              | Windows 2012R2 - Audit Policy: Logon-Logoff: Account Lockout                                                                                                                      |
| Win OS-12R2 - Logon/Logoff                              | Windows 2012R2 - Audit Policy: Logon-Logoff: Logoff                                                                                                                               |
| Win OS-12R2 - Logon/Logoff                              | Windows 2012R2 - Audit Policy: Logon-Logoff: Logon                                                                                                                                |
| Win OS-12R2 - Logon/Logoff                              | Windows 2012R2 - Ensure 'Audit Other Logon/Logoff Events' is set to 'Success and Failure'                                                                                         |
| Win OS-12R2 - Logon/Logoff                              | Windows 2012R2 - Audit Policy: Logon-Logoff: Special Logon                                                                                                                        |
| Win OS-12R2 - Privilege Use                             | Windows 2012R2 - Audit Policy: Privilege Use: Sensitive Privilege Use                                                                                                             |
| Win OS-12R2 - Object Access                             | Windows 2012R2 - Ensure 'Audit Removable Storage' is set to 'Success and Failure'                                                                                                 |
| Win OS-12R2 - Policy Change                             | Windows 2012R2 - Audit Policy: Policy Change: Audit Policy Change'                                                                                                                |
| Win OS-12R2 - Policy Change                             | Windows 2012R2 - Audit Policy: Policy Change: Authentication Policy Change                                                                                                        |
| Win OS-12R2 - Consent                                   | Windows 2012R2 - Ensure 'Configure Default consent' is set to 'Enabled: Send all data'                                                                                            |
| Win OS-12R2 - Audit Process Creation                    | Windows 2012R2 - Ensure 'Include command line in process creation events' is set to 'Disabled'                                                                                    |
| Win OS-12R2 - Windows Logon Options                     | Windows 2012R2 - Ensure 'Sign-in last interactive user automatically after a system-initiated restart' is set to 'Disabled'                                                       |
| Win OS-12R2 - File Explorer (formerly Windows Explorer) | Windows 2012R2 - Ensure 'Turn off heap termination on corruption' is set to 'Disabled'                                                                                            |
| Win OS-12R2 - File Explorer (formerly Windows Explorer) | Windows 2012R2 - Ensure 'Turn off shell protocol protected mode' is set to 'Disabled'                                                                                             |
| Win OS-12R2 - File Explorer (formerly Windows Explorer) | Windows 2012R2 - Ensure 'Turn off Data Execution Prevention for Explorer' is set to 'Disabled'                                                                                    |
| Win OS-12R2 - Windows Connection Manager                | Windows 2012R2 - Ensure 'Minimize the number of simultaneous connections to the Internet or a Windows Domain' is set to 'Enabled'                                                 |
| Win OS-12R2 - Windows Installer                         | Windows 2012R2 - Ensure 'Always install with elevated privileges' is set to 'Disabled'                                                                                            |
| Win OS-12R2 - Windows Installer                         | Windows 2012R2 - Ensure 'Allow user control over installs' is set to 'Disabled'                                                                                                   |
| Win OS-12R2 - Security                                  | Windows 2012R2 - Ensure 'Security: Control Event Log behavior when the log file reaches its maximum size' is set to 'Disabled'                                                    |
| Win OS-12R2 - Security                                  | Windows 2012R2 - Ensure 'Set client connection encryption level' is set to 'Enabled: High Level'                                                                                  |
| Win OS-12R2 - Network security                          | Windows 2012R2 - Ensure 'Network Security: Allow PKU2U authentication requests to this computer to use online identities' is set to 'Disabled'                                    |
| Win OS-12R2 - Network security                          | Windows 2012R2 - Ensure 'Network Security: Configure encryption types allowed for Kerberos' is set to 'RC4_HMAC_MD5, AES128_HMAC_SHA1, AES256_HMAC_SHA1, Future encryption types' |
| Win OS-12R2 - Network security                          | Windows 2012R2 - Network security: LDAP client signing requirements                                                                                                               |
| Win OS-12R2 - Network security                          | Windows 2012R2 - Network security: Do not store LAN Manager hash value on next password change                                                                                    |
| Win OS-12R2 - Network security                          | Windows 2012R2 - Network security: Allow LocalSystem NULL session fallback                                                                                                        |
| Win OS-12R2 - Credential User Interface                 | Windows 2012R2 - Ensure 'Enumerate administrator accounts on elevation' is set to 'Disabled'                                                                                      |
| Win OS-12R2 - Setup                                     | Windows 2012R2 - Ensure 'Setup: Control Event Log behavior when the log file reaches its maximum size' is set to 'Disabled'                                                       |
| Win OS-12R2 - Application                               | Windows 2012R2 - Ensure 'Application: Control Event Log behavior when the log file reaches its maximum size' is set to 'Disabled'                                                 |
| Win OS-12R2 - Temporary folders                         | Windows 2012R2 - Ensure 'Do not delete temp folders upon exit' is set to 'Disabled'                                                                                               |
| Win OS-12R2 - Temporary folders                         | Windows 2012R2 - Ensure 'Do not use temporary folders per session' is set to 'Disabled'                                                                                           |
| Win OS-12R2 - System objects                            | Windows 2012R2 - System objects: Require case insensitivity for non-Windows subsystems                                                                                            |
| Win OS-12R2 - System objects                            | Windows 2012R2 - System objects: Strengthen default permissions of internal system objects (e.g. Symbolic Links)                                                                  |
| Win OS-12R2 - User Account Control                      | Windows 2012R2 - User Account Control: Run all administrators in Admin Approval Mode                                                                                              |
| Win OS-12R2 - User Account Control                      | Windows 2012R2 - User Account Control: Only elevate UIAccess applications that are installed in secure locations                                                                  |
| Win OS-12R2 - User Account Control                      | Windows 2012R2 - User Account Control: Detect application installations and prompt for elevation                                                                                  |
| Win OS-12R2 - User Account Control                      | Windows 2012R2 - User Account Control: Allow UIAccess applications to prompt for elevation without using the secure desktop                                                       |
| Win OS-12R2 - User Account Control                      | Windows 2012R2 - User Account Control: Virtualize file and registry write failures to per-user locations                                                                          |
| Win OS-12R2 - User Account Control                      | Windows 2012R2 - User Account Control: Switch to the secure desktop when prompting for elevation                                                                                  |
| Win OS-12R2 - Shutdown                                  | Windows 2012R2 - 'Shutdown: Allow system to be shut down without having to log on' is set to 'Disabled'                                                                           |
| Win OS-12R2 - Internet Communication settings           | Windows 2012R2 - Ensure 'Turn off downloading of print drivers over HTTP' is set to 'Enabled'                                                                                     |
