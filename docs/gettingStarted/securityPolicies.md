Security Policies
=================

Security policy term used in compliance domain is fully equivalent to “security best practice” term used in security domain.

## Security Policy compliance status
Security Policy Status is determined based on the number of compliant resources. The policy is assigned a “Pass”, “Warn”, "Manual", “Fail”, “No resources" or "Excluded" status based on Resource Status for relevant to this cloud policy resources:

**Resource Status**: The Cloudneeti application compares these actual Resource configurations against cloud security best practices (security policies) and determines security policy status “Pass” or “Fail” at a Resource level. “Pass” status means the Resource is compliant with the policy. “Fail” status means the Resource is not compliant with the policy.

### Pass

**Pass** status is assigned when configurations of all resources have "Pass" status.

### Warn

**Warn** status is assigned to a security policy when configurations of some resources have "Pass" status and the other resources have "Fail" status.

### Manual

**Manual** status is assigned to a security policy when automation is not available. User can override the policy status to Pass/NA/Fail.

### Fail

**Fail** status is assigned to a security policy when all Resources have "Fail" status.

### No resources

**No resources** status is assigned to a security policy when onboarded cloud accounts don’t have any relevant resources for this security policy.

### Excluded

Configure security policies allows users to enable and disable data collection at a security policy level. Please [refer page](../../administratorGuide/securityPolicyExclusions/) to exclude security policies at global and account level. 

## Override security policy status

Please [refer page](../../administratorGuide/securityPolicyExclusions/) to override security policies at account level. 