Use Create-ServicePrincipal-AzureOnboarding.ps1 script to create Cloudneeti Data Collector application. 

1.	Open PowerShell in administrator mode. Administrative prompt is needed only to install missing Azure PowerShell modules.
2.	Go to directory where Create-ServicePrincipal-AzureOnboarding.ps1 downloaded earlier.
3.	Run below command to create service principal,
.\Create-ServicePrincipal-AzureOnboarding.ps1 -azureActiveDirectoryId <Active_Directory_Id> -servicePrincipalName <data_collector_name> -expirationPeriod 1year

4.	Script will prompt the login screen; you need to login with Global AD Administrator or Application Administrator user.
5.	Store service principal information from the output in secure place. This information will be needed while onboarding the Azure Account in Cloudneeti application.

![](images/register_steps.png?raw=true)

![](images/register_console.png?raw=true)

In case user doesn’t want to provide Microsoft Graph permissions given in section Azure Active Directory permissions then you can use the disableADPolicies switch in Create-ServicePrincipal-AzureOnboarding.ps1 command.

.\Create-ServicePrincipal-AzureOnboarding.ps1 -azureActiveDirectoryId <Active_Directory_Id> -connectorType Azure -disableADPolicies -servicePrincipalName <data_collector_name> -expirationPeriod 1year
