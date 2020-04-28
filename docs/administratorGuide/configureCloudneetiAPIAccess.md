To access the Cloudneeti API, it is required to have valid API access key, Cloudneeti API Application id and secret to generate the authorization token.

![Cloudneeti API Access Overview](.././images/cloudneetiAPIAccess/Cloudneeti_API_Access_Overview.png#thumbnail_1)


## STEP 1 Create Cloudneeti API application

Creation of Cloudneeti API application includes configuring access to Cloudneeti API for selected accounts.


The following steps are done by the Cloudneeti application License Admin role.

1. Select **license** (1) in which Cloudneeti API application is to be created.

2. Navigate to **Configuration** (2) and **Cloudneeti API Access** (3)

3. Click **Create API Application** (4)

    ![create API Applicationscribe](.././images/cloudneetiAPIAccess/Create_API_Application_1.png#thumbnail)

4. Enter **API Application Name** (1)

5. Select **APIs** (2)

    ![Create API Application](.././images/cloudneetiAPIAccess/Create_API_Application_2.png#thumbnail)

6. Select **Cloud Accounts** (1) for API application scope

7. Select **Token Expiry** (2) duration

    ![Create API Application](.././images/cloudneetiAPIAccess/Create_API_Application_3.png#thumbnail)

8. Select **Secret Expiry** (1) date

9. **Save** (2)

    ![Create API Application](.././images/cloudneetiAPIAccess/Create_API_Application_3a.png#thumbnail)

9. Copy **Cloudneeti API application secret** (1) and click **Done** (2)
    </br> Note : Please record the API Application secret that appears in the dialog window because you will not be able to retrieve the secret again after leaving the page.

    User can choose to regenrate the API secret, please follow steps.

    ![Create API Application](.././images/cloudneetiAPIAccess/Create_API_Application_4.png#thumbnail)

10. Copy Cloudneeti **API application id** (1)

    ![Create API Application](.././images/cloudneetiAPIAccess/Create_API_Application_5.png#thumbnail)

## STEP 2 Generate Cloudneeti API key

### Sign-up on Cloudneeti API portal.

1. Go to [API portal](https://portal.cloudneeti.com/){target=_blank} and Sign up.

2. Fill the required fields in the sign-up form

3. You will receive a confirmation mail for sign-up, Click on the confirmation
    link.

4. The confirmation link will ask you to change password (info: You can use
    the password given while signing up)

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

Cloudneeti advised not to store token in localstorage.

### License token

        POST https://<CLOUDNEETI API DOMAIN>/authorize/license/<LICENSE ID>/token

| Environment	| Values for CLOUDNEETI API DOMAIN     |
|---------------|--------------------------------------|
| PROD 	        |   api.cloudneeti.com                 |
| TRIAL 	 | trialapi.cloudneeti.com              |

#### URI Parameters

| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| LICENSE ID   |          Cloudneeti license id​              | Required|

#### Header

| Key	        | Value                                |
|---------------|--------------------------------------|
| Content-Type 	                |   application/json                 |
| Ocp-Apim-Subscription-Key 	| [Cloudneeti API key generated](../../administratorGuide/configureCloudneetiAPIAccess/#retrieve-cloudneeti-api-key)             |


#### Request body
        {
            APIApplicationId:<API Application Id>, 
            Secret:<API Application Secret>
        }

#### Responses

| Name           |           Type       |          Description  |
|----------------|----------------------|-----------------------|
| token	     |     Access Token     | Cloudneeti API access token      |
| statusCode |      Integer     | Cloudneeti API status code      |
| message    |      String     | Response describing operation result as success or failed.     |


### Account token

        POST https://<CLOUDNEETI API DOMAIN>/authorize/license/<LICENSE ID>/token?accountId=<ACCOUNT ID>

| Environment	| Values for CLOUDNEETI API DOMAIN     |
|---------------|--------------------------------------|
| PROD 	        |   api.cloudneeti.com                 |
| TRIAL 	| trialapi.cloudneeti.com              |


#### URI Parameters

| Parameter           |           Description                                |           Required/Optional  |
|-----------|----------------------------------------------------------------|----------------------------|
| LICENSE ID   |          Cloudneeti license id                    | Required|
| ACCOUNT ID   |          Cloudneeti cloud account id              | Required|

#### Header

| Key	        | Value                                |
|---------------|--------------------------------------|
| Content-Type 	                |   application/json                 |
| Ocp-Apim-Subscription-Key 	| [Cloudneeti API key generated](../../administratorGuide/configureCloudneetiAPIAccess/#retrieve-cloudneeti-api-key)             |


#### Request body
        {
            APIApplicationId:<API Application Id>,
            Secret:<API Application Secret>
        }


#### Responses

| Name           |           Type       |          Description  |
|----------------|----------------------|-----------------------|
| token	     |     Access Token         | Cloudneeti API access token      |
| statusCode |      Integer             | Cloudneeti API status code      |
| message    |      String              | Response describing operation result as success or failed.     

## Next Step

[API List](../../userGuide/restAPIs/)


## Appendix

### Regenearate API Secret 

1. Select **license** in which Cloudneeti API application is to be created.

2. Navigate to **Configuration** (1) and **Cloudneeti API Access** (2)

    ![create API Applicationscribe](.././images/cloudneetiAPIAccess/Regenerate_1.png#thumbnail)

3. Click **Configure App**

4. Select **Regenerate Secret Key**

    ![create API Applicationscribe](.././images/cloudneetiAPIAccess/Regenerate_2.png#thumbnail)

5. **Confirm**

    ![create API Applicationscribe](.././images/cloudneetiAPIAccess/Regenerate_3.png#thumbnail)

6. Copy regenerated secret (1)

7. Click **Done** (2)

    ![create API Applicationscribe](.././images/cloudneetiAPIAccess/Regenerate_4.png#thumbnail)