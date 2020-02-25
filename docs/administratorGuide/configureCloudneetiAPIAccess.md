To access the CLoundeeti API, it is required to have valid API access key, Cloudneeti API Application id and secret to generate the authoriztion token.

![Cloudneeti API Access Overview](.././images/cloudneetiAPIAccess/Cloudneeti_API_Access_Overview.png#thumbnail_1)


## STEP 1 Create Cloudneeti API application

Creation of Cloudneeti API application includes configuring access to Cloudneeti API for selected accounts.


The following steps are done by the Cloudneeti application License Admin role.

1. Select **license** (1) to create Cloudneeti API application

2. Navigate to **Configuration** (2) and **Cloudneeti API Access** (3)

3. Click **Create API Application** (4)

    ![create API Applicationscribe](.././images/cloudneetiAPIAccess/Create_API_Application_1.png#thumbnail)

4. Enter **API Application Name** (1)

5. Select **APIs** (2)

    ![Create API Application](.././images/cloudneetiAPIAccess/Create_API_Application_2.png#thumbnail)

6. Select **Cloud Accounts** (1) for API scope

7. Select **Token Expiry** duration

8. **Save**

    ![Create API Application](.././images/cloudneetiAPIAccess/Create_API_Application_3.png#thumbnail)

9. Copy Cloudneeti API application secret (1) and click **Done** (2)
    Note : Please record the API Application secret that appears in the dialog window because you will not be able to retrieve the secret again after leaving the page.

    ![Create API Application](.././images/cloudneetiAPIAccess/Create_API_Application_4.png#thumbnail)

10. Copy Cloudneeti API application id (1)

    ![Create API Application](.././images/cloudneetiAPIAccess/Create_API_Application_5.png#thumbnail)

## STEP 2 Generate Cloudneeti API key

### Sign-up on Cloudneeti API portal.

1. Go to [API portal](https://portal.cloudneeti.com/) and Sign up.

2. Fill the required fields in the sign-up form

3. You will receive a confirmation mail for sign-up, Click on the confirmation
    link.

4. The confirmation link will ask you for change password (info: You can use
    the password your used when signing up)

5. You are signed up successfully

### Activate API key

Retrieve and activate your API key using the Cloudneeti API portal

1. Click on **PRODUCTS**

2. Select **Unlimited**

	![Cloudneeti API](.././images/onboardingOffice365Subscription/Cloudneeti_API.png#thumbnail)

3. Click on **Subscribe**

	![Subscribe](.././images/onboardingOffice365Subscription/API_Subscribe.png#thumbnail)

This will notify Cloudneeti to activate your API subscription access. Please
wait for activation to be done. When Cloudneeti activates your subscription, you
will get an email notification.

### Retrieve Cloudneeti API key

Once you receive the confirmation, proceed with the following steps.

1. Click on **Username**
2. Select **Profile**
3. Click on **Show**
4. Copy the **Primary key** to your notepad.
	![Primary key](.././images/onboardingOffice365Subscription/Primary_key.png#thumbnail)


## STEP 3 Acquire an access token

### License token

        POST https://<CLOUDNEETI API DOMAIN>/api/authorize/license

| Environment	| Values for CLOUDNEETI API DOMAIN     |
|---------------|--------------------------------------|
| PROD 	        |   api.cloudneeti.com                 |
| TRIAL 	| trialapi.cloudneeti.com              |


#### Header

| Key	        | Value                                |
|---------------|--------------------------------------|
| Content-Type 	                |   application/json                 |
| Ocp-Apim-Subscription-Key 	| [Cloudneeti API key generated]()             |


#### Request body
        {
            appId:<API App Id>,
            secret:<API App Secret>
        }



| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| API App Id   |          [Cloudneeti API App Id​](#license-id)                  | Required|
| API App Secret   |          [Cloudneeti API App Secret](#account-id)                          | Required|

#### Responses

| Name           |           Type       |          Description  |
|----------------|----------------------|-----------------------|
| 200 OK	     |           Access Token     | Cloudneeti API access token      |
| Other Status Codes |      Error     | Error response describing why the operation failed.     |


### Account token

        POST https://<CLOUDNEETI API DOMAIN>/api/authorize/license/<License Id>/token?accountId=<AccountId>

| Environment	| Values for CLOUDNEETI API DOMAIN     |
|---------------|--------------------------------------|
| PROD 	        |   api.cloudneeti.com                 |
| TRIAL 	| trialapi.cloudneeti.com              |


#### Header

| Key	        | Value                                |
|---------------|--------------------------------------|
| Content-Type 	                |   application/json                 |
| Ocp-Apim-Subscription-Key 	| [Cloudneeti API key generated]()             |


#### Request body
        {
            appId:<API App Id>,
            secret:<API App Secret>
        }



| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| API App Id   |          [Cloudneeti API App Id​](#license-id)                  | Required|
| API App Secret   |          [Cloudneeti API App Secret](#account-id)                          | Required|

#### Responses

| Name           |           Type       |          Description  |
|----------------|----------------------|-----------------------|
| 200 OK	     |           Access Token     | Cloudneeti API access token      |
| Other Status Codes |      Error     | Error response describing why the operation failed.     |


## Next Step

[API List](../../userGuide/restAPIs/)