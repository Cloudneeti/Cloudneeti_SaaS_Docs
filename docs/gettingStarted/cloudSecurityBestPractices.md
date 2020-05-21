
The Cloud Security Best Practices view provides a list of all security policies within the Cloudneeti application and their status. Following is the count of security policies within the Cloudneeti application, please refer [Release Notes](../../releaseNotes/2020/){target=_blank} for latest updates.


| **Connector Type​**              | **Total Policy Count​**    | **Automated Policy Count​** | **Manual Policy Count​** |
|---------------------------------|---------------------------|----------------------------|-------------------------|
|  AWS​                            | 450                       | 437                        | 13                      |
|  AWS​ VM baseline RHEL           | 162                       | 162                        | -                      |
|  Office365​                      | 136                       | 97                         | 39                      |
|  Azure​                          | 500                       | 469                        | 32                      |
|  Azure VM baseline Win 2012 R2​  | 212​                       | 212​                        | -                      |
|  Azure VM baseline Win 2016​     | 227​                       | 227​                        | -                      |
|  Azure VM baseline Ubuntu 18.04​ | 40​                        | 40​                         | -                      |
|  Azure VM baseline CentOS​       | 34​                        | 34​                         | -                      |
| **Grand Total**​                 | **1758**​                  | **1678**​                   |                   **80**      |



Following is the count of auto remediation avaiable for security policies within the Cloudneeti application.

| **Connector Type​**              | **Auto Remediation Policy​ Count**      | **Quick Wins Policy Count**      |
|---------------------------------|---------------------------|----------------------------|     
|  AWS​                            | [109](../../remediation/awsRemediation/)       |            [16](../../remediation/awsQuickWins/)             |  
|  AWS​ VM baseline RHEL           | -                                 | -                                              |
|  Office365​                      | -                                 | -                                              |                         
|  Azure​                          | [26](../../remediation/azureAutoRemediation/) | [137](../../remediation/azureQuickWins/) |                         
|  Azure VM baseline Win 2012 R2​  | -                                 | -                  |          
|  Azure VM baseline Win 2016​     | -                                 | [190](../../remediation/osBaselineQuickWins/#windows-server-2016-vm-baseline-policies-for-cloud-security-best-practices)                                              |
|  Azure VM baseline Ubuntu 18.04​ | -                                 | -                                              |
|  Azure VM baseline CentOS​       | -                                 | -                                              |
| **Grand Total**​                 | **135**​                            | **343**                                         |     