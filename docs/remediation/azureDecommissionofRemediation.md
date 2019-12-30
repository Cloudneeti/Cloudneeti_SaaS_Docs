To decommission the remediation functionality in Azure subscription,

**Disable all the remediation policies**- Azure account security policy remediation functionality can be disabled from Cloudneeti portal. On disabling the remediation policies stops the auto-remediation of new resources whenever deployed.

**Remove Resource Policy Contributor (Preview) role** access of Cloudneeti application from the subscription.

### 1. Disable Remediation policies
Login to Cloudneeti portal with **License Admin** role

1. Select desired License and Account 

2. Click **Configure**

3. Select **Configure security policies**

    ![Disable Remediation policies](.././images/cloudneetiRemediation/Azure_Remediation_Step5.3.png#thumbnail_1)

4. Select **Remediation Available** in filter to see only the policies with remediation available.

5. Disable the policy remediation 

6. Click **Save**

    ![Disable Remediation policies](.././images/cloudneetiRemediation/Azure_Remediation_Step5.4.png#thumbnail_1)

**Note:**

* Disabling remediation of security policies does not immediately effective, it will take some time to delete internal assignment present in Azure policy framework.

* The resource configuration updated during remediation will remain the same after disabling the remediation policies.

### 2. Remove “Policy Resource Contributor (Preview)” access

1. Click **Subscriptions** in primary menu (1)

2. Select desired **Subscription**

3. Click on **Access Control (IAM)** (2)

4. Select **Roles** tab

5. Select **Resource Policy Contributor (Preview)**

    ![Remove “Policy Resource Contributor (Preview)” access](.././images/cloudneetiRemediation/Azure_Remediation_Step5.5.png#thumbnail_1)

6. Select **Cloudneeti Application** (1)

7. Click **Remove** (2)

    ![Remove “Policy Resource Contributor (Preview)” access](.././images/cloudneetiRemediation/Azure_Remediation_Step5.6.png#thumbnail_1)
