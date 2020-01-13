Enterprise Benchmark
====================

Overview
--------

Cloudneeti offers functionality/feature to create Enterprise benchmark, private
to their Organization or Business Unit. Enterprises can build and manage their
own internal Information Security benchmark by either deriving from an existing
baseline of Cloudneeti supported benchmarks or by creating completely on your
own.

![Configure Notifications](.././images/enterpriseBenchmark/enterpriseBenchmarkOverview.png#thumbnail1)



The following steps are done by Cloudneeti application **License Admin** role.

STEP 1 Create Enterprise Benchmark
---------------------------

Add basic details for Enterprise Benchmark.

1.  Click **Configurations**

2.  Navigate to **Private Benchmarks**

    ![Configure Notifications](.././images/enterpriseBenchmark/enterpriseBenchmarkCreate.png#thumbnail)

3.  Give **Name, Title, Long Name, Logo** and choose **Connector Type** for
    Benchmark to be created

    ![Configure Notifications](.././images/enterpriseBenchmark/enterpriseBenchmarkBasic.png#thumbnail)

    Note : Benchmark configuration can be done using categories and policies for
    chosen connector type only.

4.  **Save** and continue to configure the benchmark.



STEP 2 Configure Enterprise Benchmark
------------------------------

Enterprise Benchmark can be configured mapping policies to existing or new
categories. Cloudneeti allows custom control ids for mapping policies into a
category.

Repeat below steps to map, update categories and policies from baseline benchmarks.

### 2.1 Category Configuration

Enterprise Benchmark can be configured by adding new categories and/or existing
from baseline benchmarks.

#### 2.1.1 Select baseline benchmark to drag and drop existing categories

1.  Drag and drop categories

    ![Enterprise Benchmark](.././images/enterpriseBenchmark/mapCreateCategories.gif)

#### 2.1.2 Create category

1.  Click **Add** to create a Benchmark category

    ![Enterprise Benchmark](.././images/enterpriseBenchmark/addCategory.png#thumbnail)

2.  Enter **Category Name**

    ![Enterprise Benchmark](.././images/enterpriseBenchmark/addCategory_1.png#thumbnail)

3. Category will be added in the private benchmark

    ![Enterprise Benchmark](.././images/enterpriseBenchmark/addCategory_2.png#thumbnail)

#### 2.1.3 Update mapped categories

1. Click on **edit icon**

    ![Enterprise Benchmark](.././images/enterpriseBenchmark/editCategory_1.png#thumbnail)

2. Update benchmark category name

    ![Enterprise Benchmark](.././images/enterpriseBenchmark/editCategory_2.png#thumbnail)

#### 2.1.3 Delete category 

Click on **bin icon** to delete benchmark category

![Enterprise Benchmark](.././images/enterpriseBenchmark/deleteCategory.png#thumbnail)

### 2.2 Policy Configuration

#### 2.2.1 Add control number

Control number created can be mapped with one or more policies using below
steps.

1. Select category

2. **Add** control number

    ![Enterprise Benchmark](.././images/enterpriseBenchmark/addControl_1.png#thumbnail)

3. Enter control number

    ![Enterprise Benchmark](.././images/enterpriseBenchmark/addControl_2.png#thumbnail)

#### 2.2.2 Select policies from baseline benchmark and drag and drop policies

1. Select baseline benchmark and expand category to select policy.

2. Drag and drop policies in desired control id to map with private benchmark.

    ![Enterprise Benchmark](.././images/enterpriseBenchmark/mapPolicies.gif)


Association of Enterprise Benchmark with License/Licenses
---------------------------------------------------------

Enterprise Benchmark can be associated with License/Licenses having private benchmark feature, User is License Admin for.

Note : Enterprise Benchmark summary will be effective for Cloud Accounts of
connector type chosen on Benchmark creation.

### Associate with an active License 

Enterprise benchmark once associated with Cloudneeti License, Enterprise
benchmark summary of Cloud Account will be available post next successful scan.


### Disassociate from an active License

Enterprise benchmark once de-associated with Cloudneeti License, Enterprise
benchmark summary of Cloud Account will not be available post next successful
scan.

#### Steps

1. Navigate to **Private Benchmark** page 

2. Click **Associate**

    ![Enterprise Benchmark](.././images/enterpriseBenchmark/associate_1.png#thumbnail)

3. Select and move license to section **Associate with Licenses** to associate and move to **Disassociate with Licenses**

    Example : Move license Cloudneeti Demo and Cloudneeti Test to associate
    ![Enterprise Benchmark](.././images/enterpriseBenchmark/associate_2.png#thumbnail)

4. **Save**

    ![Enterprise Benchmark](.././images/enterpriseBenchmark/associate_3.png#thumbnail)

5. Benchmark summary page will appear on next successful scan

    ![Enterprise Benchmark](.././images/enterpriseBenchmark/summary.png#thumbnail)

Collaboration for Enterprise Benchmark
--------------------------------------

License Admins can collaborate for configuration of Enterprise Benchmark.
Collaborated users can Edit, Collaborate, remove Collaboration, Associate and
De-associate Enterprise Benchmark.

### Collaboration with users

License Admin can collaborate with other License Admins of License having private benchmark feature, User is License Admin for. 

Collaborated License Admins can update, configure, associate and collaborate Enterprise Benchmark.

### Steps

1. Navigate to **Private Benchmark** page 

2. Click **Collaborate**

    ![Enterprise Benchmark](.././images/enterpriseBenchmark/collaborate_1.png#thumbnail)

3. Select and move users to section **Collaborate with** to collaborate and move to **Available for collaboration** to remove collaboration.

    ![Enterprise Benchmark](.././images/enterpriseBenchmark/collaborate_2.png#thumbnail)

4. Click **Collaborate Now** 

    ![Enterprise Benchmark](.././images/enterpriseBenchmark/collaborate_3.png#thumbnail)


Update Enterprise Benchmark
---------------------------

Enterprise benchmark can be updated for basic details as well as configurations.

### Update Enterprise Benchmark basic details

1. Navigate to **Private Benchmark** page 

2. Click **Update**

    ![Enterprise Benchmark](.././images/enterpriseBenchmark/update_1.png#thumbnail)

3. Update benchmark long name, title logo and **Save**

    ![Enterprise Benchmark](.././images/enterpriseBenchmark/update_2.png#thumbnail)



<!-- ### Update Enterprise Benchmark configuration 

1. Navigate to **Private Benchmark** page 

2. Click **Configure**

>   **\<Steps and Screenshot Here\>**

Clone Benchmark
---------------

>   **\<Steps and Screenshot Here\>** -->
