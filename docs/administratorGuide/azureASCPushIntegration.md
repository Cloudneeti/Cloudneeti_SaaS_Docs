# Azure Security Center Integration

The following steps are required for configuration required to integrate with Microsoft Azure Security Center. Integration enables  Cloudneeti application to push assessment data of configured Azure cloud account to Microsoft Azure Security Center.

### Required Roles

One or more people with the following roles are required to complete Microsoft
Azure onboarding process.

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

Grant Azure Subscription contributor role to Cloudneeti application created while onboarding Micorsoft Azure cloud account.


Login to [Azure Portal](https://portal.azure.com/){target=_blank} with Microsoft Azure **Subscription Owner** role.

1.	Go to the subscription’s **Access control (IAM)** in the third level menu

    ![Assign role](.././images/ascPush/role_assign_0.png#thumbnail)

2.	Click on the **Add** button and select **Add role assignment**

3.	Select **Contributor** role 

4.  Select Cloudneeti application created while onboarding Azure Subscription in Cloudneeti.

4.	Select **Save** to complete the role assignment

    ![Assign role](.././images/ascPush/role_assign_1.png#thumbnail)


## Configure Azure Security Center Integration 

The following steps are done by Cloudneeti **License Admin** role.

1. Navigate to **Integrations** in **Configurations**

    ![Integrations](.././images/ascPush/integrations_0.png#thumbnail)


2. Click **edit** to configure **Azure Security Center Integration**

    ![Integrations](.././images/ascPush/integrations_1.png#thumbnail)

3. Select Azure cloud accounts for enabling integration to push assessment data.

4. Save

    ![Integrations](.././images/ascPush/integrations_2.png#thumbnail)

5. Configuration will be successfuly done if prerequisites are met.

    ![Integrations](.././images/ascPush/integrations_3.png#thumbnail)




## Verify assessment data pushed at ASC

1. Cloudneeti on successful integration will create custom policies

2. Custom policies created will have recommendations with resources
