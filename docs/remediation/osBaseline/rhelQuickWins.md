# Red Hat Enterprise Linux 7

 A collection of quick wins scripts that will help to harden operating system baseline configuration supported by Cloudneeti as defined in CIS Microsoft CRed Hat Enterprise Linux 7 benchmark v2.2.0. This remediates below Monitoring [policies listed here.](../../osBaseline/rhelQuickWins/#center-for-internet-security-aws-red-hat-enterprise-linux-7-benchmark-v220)

Note: The scripts are designed to harden the operating system baseline configurations, Please test it on the test/staging system before applying to the production system.


| **Configuration script**        | **Number of policies remediated** | **Cloud Account Type**|
|--------------------------------|-------------------------------|-----------------------------------|
| RHEL Linux 7 VM baseline policies for Cloud Security Best Practices            | 26                               | Azure|
| RHEL Linux 7 VM baseline policies for CIS Benchmark Red Hat Enterprise Linux 7 Benchmark v2.2.0   | 149                               | AWS|


#### Prerequisites 

The below steps are required for executing quick wins script to harden operating system baseline configuration

| Activity             | Description                |
|----------------------|----------------------------|
| 1.	Download and review **Bash script** to harden operating system baseline configuration | The PowerShell script is used to harden operating system baseline configuration: <br> [Azure - RHEL 7 VM baseline policies for CSBP](https://raw.githubusercontent.com/Cloudneeti/os-harderning-scripts/master/RHEL7/Azure_CSBP_RHEL7_Remediation.sh} <br> [AWS - RHEL Linux 7 VM baseline policies for CIS Benchmark RHEL Linux 7 Version 2.2.0](https://raw.githubusercontent.com/Cloudneeti/os-harderning-scripts/master/RHEL7/CIS_RHEL7_Benchmark_v2_2_0_Remediation.sh){target=_blank}|

Execute quick wins script
-------------------------

### CentOS Linux 7 VM baseline policies for Cloud Security Best Practices

Below steps are performed on Virtual Machine, as a root user

1. Open bash and switch user to root

        sudo su

2. Download quick wins script

        wget https://raw.githubusercontent.com/Cloudneeti/os-harderning-scripts/master/RHEL7/Azure_CSBP_RHEL7_Remediation.sh -O Azure_CSBP_CentOS_Linux7_Remediation.sh

3. Execute the script as a root user  

        bash Azure_CSBP_RHEL7_Remediation.sh

       <!-- ![Compliance score](../../images/osBaselineQuickWIns/CentOS_QuickWins_CSBP.png#thumbnail_1) -->

4. Script will update baseline configuration to harden operating system.

       <!-- ![Compliance score](../../images/osBaselineQuickWIns/CentOS_QuickWins_CSBP_1.png#thumbnail_1) -->

### CentOS Linux 7 VM baseline policies for CIS Benchmark CentOS Linux 7 Version 2.2.0

Below steps are performed on Virtual Machine as a root user

1. Open bash and switch user to root

        sudo su

2. Download quick wins script

        wget https://raw.githubusercontent.com/Cloudneeti/os-harderning-scripts/master/RHEL7/CIS_RHEL7_Benchmark_v2_2_0_Remediation.sh -O CIS_RHEL7_Benchmark_v2_2_0_Remediation.sh

3. Execute the script as a root user  

        bash CIS_RHEL7_Benchmark_v2_2_0_Remediation.sh

       <!-- ![Compliance score](../../images/osBaselineQuickWIns/CentOS_QuickWins_CIS.png#thumbnail_1) -->

4. Script will update baseline configuration to harden operating system for 149 policies.

       <!-- ![Compliance score](../../images/osBaselineQuickWIns/CentOS_QuickWins_CIS_1.png#thumbnail_1) -->


## Remediation policy list

### Center for Internet Security AWS - Red Hat Enterprise Linux 7 Benchmark v2.2.0

