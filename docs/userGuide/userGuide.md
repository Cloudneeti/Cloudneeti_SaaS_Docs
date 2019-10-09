Dashboards, Views and Reports
=============================

Dashboards
----------

### Compliance

Cloudneeti portal home page displays **Compliance** (1) dashboard. The left side
of the screen (2) displays various compliance benchmarks with the overall
compliance score and a daily trend. The right side of the screen (2) displays a
fly wheel that allows quick drill down into each compliance score.
	![Compliance](.././images/userGuide/Compliance_Dashboard.png#thumbnail)

Users can click on different part of the fly wheel for a quick drill down.

1.  Goes back to original fly wheel view after drilling down into individual
    data sets.

2.  Displays only security benchmarks section in full fly wheel view.

3.  Displays only the selected compliance framework.

4.  Redirects user to a security policies view (for NIST CSF v1.1).

The left side of the screen also allows navigation.
5.  Redirects user to a security policies view of respective compliance
    benchmark (for CIS Win R12 v1.1.0).

6.  Redirects user to a complete list of security policies within Cloudneeti
    application.
	![Compliance](.././images/userGuide/Compliance_Navigation_Dashboard.png#thumbnail)

### Security

By clicking on **Security** tab (1) on the top, users gain access to a security
dashboard that provides a compliance score by resource category. By clicking on
category header (2) user can navigate to a detailed security policy level report
for further analysis.
	![Security Dashboard](.././images/userGuide/Security_Dashboard.png#thumbnail)

### Risk

By clicking on **risk** tab (1) on the top, users gain access to a risk
dashboard that provides a risk posture view categorizing all security policies
by Risk Impact and Risk Likelihood. The upper right corner of the dashboard
displays high risk deviations from cloud security best practices. This allows
users to better understand their risk exposure and prioritize remediation
activities.
	![Risk Dashboard](.././images/userGuide/Risk_Dashboard.png#thumbnail)

### Assets

By clicking on the **Assets** tab (1) on the top, users gain access to an assets
dashboard that provides insights into the total number of resources, users, AD
admins and other metrics. By clicking on the bar (2) in the chart, the map shows
locations (3) of this resource category.
	![Assets_Dashboard](.././images/userGuide/Assets_Dashboard.png#thumbnail)

Security Policies
-----------------

The Cloud Security Best Practices view provides a list of all security policies
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

Compliance Benchmarks
---------------------

Compliance Benchmarks is referring to Cybersecurity Benchmarks, Laws and
Regulations, and Industry Benchmarks. Security Policies available in the
Cloudneeti application are mapped to compliance controls of different compliance
benchmarks. One compliance control can have one or multiple security policies
mapped to it.

The Cybersecurity Benchmarks, Laws and Regulations, Industry Benchmarks section
on the left menu can be expanded to select the required benchmark view. Users
can get access to views presenting pass/fail/warn status at a security policy
level. Users are also provided access to resource level information, definitions
of security policies, and remediation guidance.

1.  The benchmarks, laws and regulations area on the left menu can be expanded
    to select the required **Cybersecurity Benchmark, Law and Regulations,
    Industry Benchmark**.

2.  The upper left part of the view has charts for **Current Posture** and
    **Policy Compliance Trends**.

3.  The upper part of the security policies view has **Filters** for Category
    and Policy Status.

4.  Each **Category** presents a summary across all security policies within
    this category.

5.  The security policies view has a header with additional filters by Control
    Number and Security Policy Title. Individual security policies are mapped to
    the relevant Control Numbers of the benchmark.
	![Compliance Benchmark](.././images/userGuide/Compliance_Benchmark.png#thumbnail)

1.  Clicking on Security Policy line opens a window on the right side with
    additional details. The details window is identical to the one displayed in
    the Security Policies view.

2.  The upper part of the details window presents Summary & Recommendations,
    Audit Procedure and Remediation Procedure.

3.  The bottom part of the details windows presents security policy compliance
    status at an individual resource level.
	![compliance Status](.././images/userGuide/Compliance_Status.png#thumbnail)

Reports
-------

The reports button on the upper right side offers a dropdown for report format
selection. These reports are generated on the fly and are instantly available
for download.
	![Reports_Button](.././images/userGuide/Reports_Button.png#thumbnail)

The PDF report presents the same information as the Security Policies view.
	![PDF Report](.././images/userGuide/PDF_Report.png#thumbnail)

The Word report outlines Remediation recommendations and security policy
adherence status at a resource level.
	![Word Report](.././images/userGuide/Word_Report.png#thumbnail)
