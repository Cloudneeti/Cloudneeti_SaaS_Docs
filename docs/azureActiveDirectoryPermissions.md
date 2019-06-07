Cloudneeti application requires the following permissions.

| API     | Permission Name    | Type | Admin Consent Required? |
| --------|---------|-------|-------|
| Microsoft.Graph  | Directory.Read.All   | Application    |    Yes   |

Above mentioned graph permission allows the app to read data in organization's directory, such as user attributes, groups and applications, without a signed-in user.  You can find more details about Microsoft graph API permission here [https://docs.microsoft.com/en-us/graph/permissions-reference](https://docs.microsoft.com/en-us/graph/permissions-reference)

The following security policies require Active Directory (Microsoft.Graph) permissions:

| Policy Id     | Policy Name    | AAD entity used for evaluating misconfiguration | Data stored in Cloudneeti data store |
| --------|---------|-------|-------|
| 1800.1  | Ensure that AD Application keys are rotated before they expire   | **passwordCredentials** Meta-data information contained w/I the data entity will be key start-date, end-date, expiry policies. No actual values are retrievable.| •	AD Application Name •	AD Application ID  • Expiry date |
| 1100.11  | Ensure that Service Principal Certificate are renewed before it expires   | **keyCredentials** Meta-data information contained w/I the data involves start-date, end-date. Refer documentation [here](https://docs.microsoft.com/en-us/powershell/module/azuread/new-azureadserviceprincipalkeycredential?view=azureadps-2.0)| •	AD Application Name •	AD Application ID  •	Expiry date |
| 1100.12  | Ensure that there are no guest users   | **userType** Member or guest| •	No data is stored in Cloudneeti database. This policy only retrieves the count of total users and how many are the Guest users. |
| 1100.4  | Enforce the policy to set Password to ‘always’ expire in Azure Active Directory for all Organization Users   | **passwordPolicies** Meta-data involving length of password, password strength, password restrictions. Documentation [here](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-sspr-policy#password-policies-that-only-apply-to-cloud-user-accounts)| •	No data is stored in Cloudneeti database. This policy only retrieves the count of all organization users and how many of them have set Password always expired ‘On’|
| 1100.8  | Ensure that Azure resources are accessible only through Organization Account   | **userType** Member or guest| •	No data is stored in Cloudneeti database. This policy only retrieves count of external users in an organization who can access resources under Azure Subscription.|