The collected metadata about configurations of customer’s cloud accounts (Azure subscriptions) are well protected within the Cloudneeti data store. The following information security policies are implemented by Cloudneeti:

*	Data encryption at rest: Customer’s data is always stored encrypted. Various cloud service components and encryption schemes (e.g. Key Vaults, AES symmetric key algorithms, higher level cipher suites) are used.
*	Data encryption in-transit: TLS 2.0 encryption or higher is applied for encrypting data during transmission.
*	Data access: Production support team has access to the management plane at the data store level. They won’t have access to decrypt the configuration data unless a support request makes it necessary. Customers have to explicitly grant access to the support team to retrieve the data for a time-boxed period of time required for resolving a ticket.
*	Customer lockbox: Lockbox is a feature that ensures Cloudneeti support team cannot access customer data to perform a service operation without explicit approval. 
*	Data classification: A data classification of ‘Restricted’ is applied to the data store.
*	Audit logging: All access requests are monitored through Privileged Identity Management (PIM) as well as operational logs.
*	Data erasure: Expiry/Termination of a contract will result into automatic clean-up of all data collected.
*	Data backup: All backed up is stored encrypted and RBAC permissions are applied for the recovery team.
*	Data retention: Data retention for active contracts are applied at the contract provisioning level. Typically, this will be 30-90 days.
