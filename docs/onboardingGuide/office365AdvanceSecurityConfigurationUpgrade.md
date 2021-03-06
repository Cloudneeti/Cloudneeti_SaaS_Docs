# Office 365 - Upgrade Advanced Security Configuration
Upgrading existing Office 365 advance secuirty configuration to DataCollectorVersion 1.6 includes updating runbook inside automation account provisioned for Office 365 cloud account to get data for new security policies.

Please refer [Release Notes](../../releaseNotes/2020/){target=_blank} for latest security policy addition.

Login to Azure portal [https://portal.azure.com](https://portal.azure.com){target=_blank} as Subscription Contributor or Subscription Owner access.

Switch to Azure AD with the Azure Subscription with pre-requisite access.

1. Open **CloudShell**
2. Click on **Cloudshell** icon on the navigation bar to open Cloudshell
3. Choose PowerShell from shell drop down
4. Select **storage**
	![CloudShell](.././images/onboardingOffice365Subscription/CloudShell.png#thumbnail)
5. Execute below command in Cloudshell to download the Cloudneeti data
    collector update script.
	<pre>
	<code>```
		wget https://raw.githubusercontent.com/Cloudneeti/docs_cloudneeti/master/scripts/Upgrade-M365DataCollector.ps1 -O Upgrade-M365DataCollector.ps1
	```</code>
	</pre>
6. Switch to the User directory
	<pre>
	<code>```
		cd $User
	```</code>
	</pre>
7. Run update script with inline parameters
	<pre>
	<code>```
		./Upgrade-M365DataCollector.ps1 `
            -ArtifactsName <Cloudneeti office 365 Data Collector Artifact Name> `
            -DataCollectorVersion 1.6 `
            -AzureSubscriptionId <Azure Subscription Id where office 365 datacollector resouces will be created> `
            -DataCollectorName <Office 365 Data Collector Name>
	```</code>
	</pre>
**Note:** 
**Enter name of existing data collector automation account**</br>
**Contact Cloudneeti Team for ArtifactsName, DataCollectorVersion and ArtifactsAccessKey**

8. The script will execute and prompt you for below details:</br>
   Cloudneeti Office 365 data collector artifacts storage access Key </br>

9. This will update a runbook inside automation account

