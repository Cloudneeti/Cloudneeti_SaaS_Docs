# STEP 4: AWS inspector Vulnerability Configurations (Optional)

**This step is optional.**

Includes installing and configuring AWS Inspector Agent to assess your assessment target EC2
instances (collections of AWS resources) for potential security issues and vulnerabilities.

Amazon Inspector is a security assessment service for your Amazon EC2 instances and the applications running on those instances. Enabling AWS Inspector for a host assessment allows Cloudneeti to collect common vulnerabilities and exposures (CVEs) and associate them to each of the cloud assets.

Please skip this step if AWS inspector is already configured for all EC2 instances.

### 4.1 Installing SSM agent

AWS Systems Manager Agent (SSM Agent) is Amazon software that can be
installed and configured on an Amazon EC2 instance. SSM Agent makes it
possible for Systems Manager to update, manage, and configure these
resources.

SSM Agent will be used by AWS Inspector to install the AWS Inspector Agent
on the instances so that it can fetch the instance data. Follow links for installation

[SSM Agent is preinstalled, by default](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-install-ssm-agent.html){target=_blank}

[Install SSM Agent](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-manual-agent-install.html){target=_blank}


### 4.2 Creating Inspector Assessment target and template 

Once, SSM agent is installed, enable AWS Inspector in the regions where instances reside and create assessment targets and templates.

Cloudneeti currently supports RHEL and Windows Server 16 instances and in the near future many other Linux distributions and Windows server editions will be supported.

Multiple assessment targets and templates can be created.  For exmaple, create an assessment target is each of the Operating systems separately, and add to separate template.
- OS = RedHat Linux
- Tags = All tags | None
- Instances = All instances

Login to [AWS portal](https://console.aws.amazon.com/){target=_blank} with AWS **Administrator** role.


### New to inspector

#### 4.2.1 Get started for inspector advance setup

1.  Navigate to the inspector page

2. Click **Get started**

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_Start.png#thumbnail)

3. Click **Advance setup**

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_AdvSetup.png#thumbnail)


#### 4.2.2 Creating assessment target

1.  Add **Name** (1)

2.  Check the **All Instances** checkbox  (2)

    **All Instances** -  the assessment target will include all the instances in the region (region where the Inspector resides) for assessment

3. Check the **Install Agents** checkbox (3)
    **Install Agents** - AWS Inspector agent will be installed on all the instances in the assessment target.

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_AssessmentTarget.png#thumbnail)

4. Click **Next**


#### 4.2.3 Creating assessment template

1. Add **Name**

2. Select below rules package for 

    -  **Common Vulnerabilities and Exposures-1.1** Reference link [Common vulnerabilities and exposures](https://docs.aws.amazon.com/inspector/latest/userguide/inspector_cves.html){target=_blank}

3. Set **Duration** (3), recommended is 1 hour

4. Select **Schedule** (4), recommend  is 7 days

5. Click **Next** (5)
    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_TemplateConfig.png#thumbnail){target=_blank}

6. Review details and **Create**

#### 4.2.4 Verify assessment target

Once Assessment target is created, one can verify the status of the agents. AWS Inspector and therefore Cloudneeti, will only be able to generate/display data for instances where **Agent Status** is **Healthy**.

1.  Expand the Assessment Target created (1)

2.  Click **Preview Target** (2)

3.  A list of all the instances connected to the assessment target will appear

4.  Verify the Agent Status Column (3)

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_preview_target.png#thumbnail)


#### 4.2.5 Run assessment template

1. Run the Assessment Template if required, by default assessment template is run on creation.

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_runTemplate.png#thumbnail)

2. Verify assessment run results.
    
    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_run.png#thumbnail)


### OR Already using inspector

Login to [AWS portal](https://console.aws.amazon.com/){target=_blank} with AWS **Administrator** role.


#### 4.2.1 Creating Assessment target

1.  Navigate to the inspector page

2.  In the side menu, click on **Assessment targets** (1)

3.  Click **Create** (2)

4.  Add **Name** (3)

5.  Check the **All Instances** checkbox  (4)

    **All Instances** -  the assessment target will include all the instances in the region (region where the Inspector resides) for assessment

6. Check the **Install Agents** checkbox (5)
    **Install Agents** - AWS Inspector agent will be installed on all the instances in the assessment target.

6.  **Next**. (5)

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_create.png#thumbnail)

#### 4.2.2 Verify assessment target

Once Assessment target is created, one can verify the status of the agents. AWS Inspector and therefore Cloudneeti, will only be able to generate/display data for instances where **Agent Status** is **Healthy**.

1.  Expand the Assessment Target created (1)

2.  Click **Preview Target** (2)

3.  A list of all the instances connected to the assessment target will appear

4.  Verify the Agent Status Column shows healthy for targeted instances (3)

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_preview.png#thumbnail)


#### 4.2.3 Create and run Assessment Template

1.  In the side menu, click on **Assessment templates** (1)

3.  Click **Create** (2)

4.  Add **Name** (3) and **Target Name** (4) of the Assessment target created in 
[Step 1](../../onboardingGuide/awsVMBaselineConfiguration/#step-1-installing-ssm-agent/)

5.  Select rules package 

    -  **Common Vulnerabilities and Exposures-1.1** Reference link [Common vulnerabilities and exposures](https://docs.aws.amazon.com/inspector/latest/userguide/inspector_cves.html){target=_blank}


6.  Set **Duration** (6), recommended is 1 hour

7.  Create SNS topic for notifications of events(optional). (7)

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_template1.png#thumbnail)

8.  Set **Assessment Schedule** (1), recommend is 7 days

9.  Click **Create** or **Create and run** (2)

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_template2.png#thumbnail)

#### 4.2.4 Run assessment template

1. Run the Assessment Template or wait for their schedule as per their requirement
    
    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_template_trigger_run.png#thumbnail)

2. Verify assessment run results.
    
    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_Inspector_run.png#thumbnail)


### 4.3 Verify policy results and vulnerability on Cloudneeti (to be performed after [Step 4](/onboardingGuide/amazonWebServiceAccounts/#step-4-add-aws-account))

1. Cloudneeti will pick up latest analysis complete assessment run within last 30 days data from the AWS Inspector. Policies details will be available on Cloudneeti post next successful scan.

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/aws_RHEL_Results.png#thumbnail)

2. After successful scan, AWS RHEL EC2 vulnerability assessment will appear on Vulnerability tab on Asset Security dashboard

    ![AWS Inspector - AWS Console](.././images/amazonWebServiceAccounts/vulnerability.png#thumbnail)

