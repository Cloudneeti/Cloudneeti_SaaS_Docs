
The Cloud Security Best Practices view provides a list of all security policies within the Cloudneeti application and their status. Following is the count of security policies within the Cloudneeti application, please refer [Release Notes](../../releaseNotes/2020/){target=_blank} for latest updates.


| **Connector Type​**              | **Total Policy Count​**    | **Automated Policy Count​** | **Manual Policy Count​** |
|---------------------------------|---------------------------|----------------------------|-------------------------|
|  AWS​                            | [456](../../securityPolicies/awsSecurityPolcies/)                       | 433                        | 23                      |
|  AWS​ VM baseline RHEL           | [174](../../securityPolicies/osBaseline/centOSSecurityPolcies/)                       | 174                        | -                       |
|  AWS VM baseline Win 2016​       | [351](../../securityPolicies/osBaseline/windows16SecurityPolcies/#aws)                       | 351                        | -                       |
|  Amazon EC2-instance based Kubernetes             | [75](../../securityPolicies/kubernetes/awsK8SSecurityPolcies/#ec2-instance-based-kubernetes-security-policies)                         | 75                      | -                      |
|  Amazon Elastic Kubernetes Service (Amazon EKS)             | [22](../../securityPolicies/kubernetes/awsK8SSecurityPolcies/#eks-security-policies)                         | 22                      | -                      |
|  Office365​                      | [133](../../securityPolicies/office365SecurityPolcies/)                       | 97                         | 36                      |
|  Azure​                          | [425](../../securityPolicies/azureSecurityPolcies/)                       | 392                        | 33                      |
|  Azure VM baseline Win 2012 R2​  | [182](../../http://127.0.0.1:8000/securityPolicies/osBaseline/windows12SecurityPolcies/#azure)                       | 182​                        | -                       |
|  Azure VM baseline Win 2016​     | [197](../../securityPolicies/osBaseline/windows16SecurityPolcies/)                       | 197                        | -                       |
|  Azure VM baseline Win 2019     | [193](../../securityPolicies/osBaseline/windows19SecurityPolcies/)                       | 193                        | -                       |
|  Azure VM baseline Ubuntu 18.04​ | [40](../../securityPolicies/osBaseline/ubuntuSecurityPolcies/)​                        | 40​                        | -                       |
|  Azure VM baseline CentOS​       | [34](../../securityPolicies/osBaseline/centOSSecurityPolcies/#azure)​                        | 34​                        | -                       |
|  Azure Kubernetes | [75](../../securityPolicies/kubernetes/azureK8SSecurityPolcies/#vm-based-kubernetes-security-policies)                        | 75                         | -                       |
|  Azure Kubernetes Service (AKS Engine) | [78](../../securityPolicies/kubernetes/azureK8SSecurityPolcies/#aks-engine-security-policies)                        | 78                         | -                       |
|  Azure Kubernetes Service (AKS) | [23](../../securityPolicies/kubernetes/azureK8SSecurityPolcies/#aks-security-policies)                        | 23                         | -                       |
| GCP (Preview)                         | [63](../../securityPolicies/azureSecurityPolcies/)                       | 49                        | 14                      |
| **Grand Total**​                 | **2521**​                  | **2415**​                   |                   **106**      |



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
|  Azure VM baseline Win 2019​     | -                                 | [198](](../../remediation/osBaseline/win19QuickWins/){target=_blank})                                              |
|  Azure VM baseline Ubuntu 18.04​ | -                                 | -                                              |
|  Azure VM baseline CentOS​       | -                                 | [26](../../remediation/osBaseline/centOSQuickWins/)                                             |
|  Azure Kubernetes Service (AKS)       | -                                 | -                                              |
| **Grand Total**​                 | **135**​                            | **842**                                         |     