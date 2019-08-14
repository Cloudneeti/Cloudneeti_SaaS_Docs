The Cloud Security & Risk Posture view provides a list of all security policies
within the Cloudneeti application and their status.

This page has the following sections.

1.  On the top of the page, users can select the **License** and **Cloud
    Account** for which the information should be displayed.

2.  The charts section presents for **Risk Posture**, **Policy Compliance**, and
    **Policy Compliance Trends**.

3.  The security policies section lists all **Security Policies** with their
    status by category.

4.  The header of the view has the buttons for **Remediations** and **Reports**.

![CSRP_Security_Policies](.././images/userGuide/CSRP_Security_Policies.png#thumbnail)

The charts section presents for Risk Posture, Policy Compliance, and Policy
Compliance Trends.

1.  The **Risk Posture** chart categorizes all security policies by Risk Impact
    (Very Low, Low, Moderate, High, and Critical) and Risk Likelihood (Not
    likely, Low, Moderate, High, and Certain). Users can click on individual
    cells within Risk Posture to select relevant security policies in the view
    below. A summary of security policies by risk level is presented on the left
    side (Low Risk, Moderate Risk, High).

2.  The **Policy Compliance** chart presents a summary of security policies by
    Policy Status (Fail, Warn, Pass). The Policy Compliance percentage is an
    aggregated score accounting for the number of security policies with Pass
    status out of the total number of security policies where data could be
    collected. Data are not collected (No Data) when there is no relevant
    resource types in the environment for this security policy. Fail means that
    all resources related to a security policy are not adhering to the security
    policy standard. Warn means that some resources (but not all) related to a
    security policy are adhering to the security policy standard. Pass means
    that all resources related to a security policy are adhering to the security
    policy standard. A summary of security policies by Policy Status is
    presented on the left side (Fail, Warn, Pass).

3.  The **Policy Compliance Trends** chart presents a trend line of security
    policies status on a daily basis over the last one month as a percentage of
    all security policies with available data by Policy Status (Fail, Warn,
    Pass).

![Policy Trade and Compliance](.././images/userGuide/Policy_Trade.png#thumbnail)

1.  The upper part of the view has filters for Risk **Impact**, Risk
    **Likelihood** and **Policy Status**. Users can filter security policies
    presented below using the dropdown options offered in these filters.

2.  Each view summarizes security policies status by **Category** (Azure –
    Business continuity and DR). The Category provides a summary of the number
    of resources adhering to security policy standards out of the total number
    of resources relevant for each security policy.

3.  The header of the security policies list has additional **filters** by
    Control Number and by Security Policy Title.

4.  By clicking on the Category (2), users can view the list of **Security
    Policies** in this Category with their Policy Status information.

![Policy_Details](.././images/userGuide/Policy_Details.png#thumbnail)

1.  Clicking on Security Policy line opens a window on the right side with
    additional details.

2.  The upper part of the details window presents Summary & Recommendations,
    Audit Procedure and Remediation Procedure.

3.  The bottom part of the details windows presents security policy compliance
    status at an individual resource level.

![Summary and Remediation](.././images/userGuide/Summary_Remediation.png#thumbnail)

**Summary & Recommendations** (1) shows Compliance Trends (2), Policy Status,
Risk Impact and Risk Likelihood (3), Summary of status across all resources (4),
and Recommendations (5) as definition of security policy.

![Summary and Recommendation](.././images/userGuide/Summary_Recommendation_Details.png#thumbnail)

Resource level information about Security Policy status per resource is
displayed in the bottom part of the details view.

1.  The header provides additional filters to select relevant resources in this
    list.

2.  Each resource is listed with its Status information, Resource Group and
    related resource level details.

![Resource_level_Information](.././images/userGuide/Resource_Level_Information.png#thumbnail)

1.  Click on **Audit Procedure** to see manual and command line ways to validate
    status of this security policy

2.  The **Azure Console** section shows manual steps to collect the same cloud
    infrastructure configuration information.

3.  The **Azure Command Line Interface** provides a command to collect the same
    information programmatically.

![Audit Procedure](.././images/userGuide/Audit_Procedure.png#thumbnail)

1.  Click on **Remediation Procedure** to see manual and command line
    remediation steps.

2.  The **Azure Console** section shows manual steps to change the cloud
    infrastructure configuration.

3.  The **Azure Command Line Interface** provides a command to change the cloud
    infrastructure configuration.

![Remediation Procedure](.././images/userGuide/Remediation_Procedure.png#thumbnail)

1.  The **Remediate** button provides access to manually triggered remediations.
    For more detail, see the remediation section.

2.  The **Reports** button allows download of a PDF and Word reports. You can
    find additional details in the Reports section.

![Remediate and Reports Button](.././images/userGuide/Remediate_Reports_Button.png#thumbnail)