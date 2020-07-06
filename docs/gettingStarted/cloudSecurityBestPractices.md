
The Cloud Security Best Practices view provides a list of all security policies within the Cloudneeti application and their status. Following is the count of security policies within the Cloudneeti application, please refer [Release Notes](../../releaseNotes/2020/){target=_blank} for latest updates.


| **Connector Type​**              | **Total Policy Count​**    | **Automated Policy Count​** | **Manual Policy Count​** |
|---------------------------------|---------------------------|----------------------------|-------------------------|
|  AWS​                            | 448                       | 435                        | 13                      |
|  AWS​ VM baseline RHEL           | 162                       | 162                        | -                       |
|  AWS VM baseline Win 2016​       | 351                       | 351                        | -                       |
|  Amazon Elastic Kubernetes Service (Amazon EKS)             | 21                         | 21                      | -                      |
|  Office365​                      | 133                       | 96                         | 37                      |
|  Azure​                          | 425                       | 392                        | 33                      |
|  Azure VM baseline Win 2012 R2​  | 212​                       | 212​                        | -                       |
|  Azure VM baseline Win 2016​     | 227​                       | 227​                        | -                       |
|  Azure VM baseline Ubuntu 18.04​ | 40​                        | 40​                         | -                       |
|  Azure VM baseline CentOS​       | 34​                        | 34​                         | -                       |
|  Azure Kubernetes Service (AKS) | 73                        | 73                         | -                       |
| **Grand Total**​                 | **2126**​                  | **2043**​                   |                   **82**      |



Following is the count of auto remediation avaiable for security policies within the Cloudneeti application.

| **Connector Type​**              | **Auto Remediation Policy​ Count**      | **Quick Wins Policy Count**      |
|---------------------------------|---------------------------|----------------------------|     
|  AWS​                            | [109](../../remediation/awsRemediation/)       |            [16](../../remediation/awsQuickWins/)                |  
|  AWS​ VM baseline RHEL           | -                                              | [149](../../remediation/osBaseline/rhelQuickWins/)                                              |
|  Amazon Elastic Kubernetes Service (Amazon EKS)           | -                                 | -                                              |
|  Office365​                      | -                                 | -                                              |                         
|  Azure​                          | [26](../../remediation/azureAutoRemediation/) | [137](../../remediation/azureQuickWins/) |                         
|  Azure VM baseline Win 2012 R2​  | -                                 | [125](../../remediation/osBaseline/win12QuickWins/#cis-benchmark-windows-server-2012-r2-version-100)                 |          
|  Azure VM baseline Win 2016​     | -                                 | [190](../../remediation/osBaseline/win16QuickWins/#cis-benchmark-windows-server-2016-version-100)                                              |
|  Azure VM baseline Ubuntu 18.04​ | -                                 | -                                              |
|  Azure VM baseline CentOS​       | -                                 | [26](../../remediation/osBaseline/centOSQuickWins/)                                             |
|  Azure Kubernetes Service (AKS)       | -                                 | -                                              |
| **Grand Total**​                 | **135**​                            | **644**                                         |     