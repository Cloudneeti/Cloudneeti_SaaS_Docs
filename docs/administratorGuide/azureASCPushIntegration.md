# Azure Security Center Integration (Preview)

The integration between Azure Security Center and Cloudneeti provides a seamless experience to customers in protecting their Azure environments against cyber-threats and mitigating compliance risks. Cloudneeti application will push custom recommendations with assessment data of Azure Cloud Account(s) to Microsoft Azure Security Center. 

**Custom Recommendation** includes policies with description and remediation steps.

**Assessment data** includes listing policy related resources with their compliance state with respect to policy definition.

The following steps are required to configure integration of Cloudneeti application with Microsoft Azure Security Center for Azure Subscription(s) added as Cloud account(s) in Cloudneeti. 

### Required Roles

One or more people with the following roles are required to complete the Microsoft
Azure Security Center integration process.

| **Pre-requisite Role**  | **Portal to use**      |
|-------------------------|------------------------|
| License Admin           | Cloudneeti application |
| Subscription Owner      | Microsoft Azure        |

### Required Permissions

Cloudneeti application will be granted with Azure Subscription Contributor.

| Object | Role / Permission                                                 | Portal to use     | Required Role               | Step     | Type      | 
|------|-------------------------------------------------------------|-------------------|--------------------|----------|-----------|
| Azure Subscription | Contributor              | Microsoft Azure   | Subscription Owner | STEP 2   | mandatory | 


## Pre-requisites

Grant Azure Subscription contributor role to Cloudneeti application created while onboarding Micrsoft Azure cloud account.


Login to [Azure Portal](https://portal.azure.com/){target=_blank} with Microsoft Azure **Subscription Owner** role.

1.	Go to the subscription’s **Access control (IAM)** in the third level menu

    ![Assign role](.././images/ascPush/role_assign_0.png#thumbnail)

2.	Click on the **Add** button and select **Add role assignment**

3.	Select **Contributor** role 

4.  Select Cloudneeti application created while onboarding Azure Subscription in Cloudneeti.

5.	Select **Save** to complete the role assignment

    ![Assign role](.././images/ascPush/role_assign_1.png#thumbnail)


## STEP 1: Configure Azure Security Center Integration 

The following steps are done by Cloudneeti **License Admin** role.

1. Navigate to **Integrations** (2) in **Configurations** (1)

2. Click **edit** (3) to configure **Azure Security Center Integration**

    ![Integrations](.././images/ascPush/integrations_1.png#thumbnail)

3. Select Azure cloud accounts for enabling integration to push assessment data.

4. Save

    ![Integrations](.././images/ascPush/integrations_2.png#thumbnail)

5.	The configuration will be successfully done if prerequisites are met.

    ![Integrations](.././images/ascPush/integrations_3.png#thumbnail)


## STEP 2: Verify assessment data pushed at ASC

Cloudneeti on successful integration will create recommendations and assessments.

### Recommendations 

1. Custom policies 

    ![assessment data ](.././images/ascPush/assessment_data_1.png#thumbnail)

2. Custom policy description 

    ![assessment data ](.././images/ascPush/assessment_data_2.png#thumbnail)

3. Custom policy remediation steps

    ![assessment data ](.././images/ascPush/assessment_data_3.png#thumbnail)

### Assessment

Custom policy related resources state as Unhealthy, Healthy or Not Applicable

![assessment data ](.././images/ascPush/assessment_data_4.png#thumbnail)
