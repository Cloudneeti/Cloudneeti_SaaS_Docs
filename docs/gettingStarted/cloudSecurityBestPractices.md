
The Cloud Security Best Practices view provides a list of all security policies within the Cloudneeti application and their status. Following is the count of security policies within the Cloudneeti application, please refer [Release Notes](../../releaseNotes/2020/){target=_blank} for latest updates.


| **Connector Type​**              | **Total Policy Count​**    | **Automated Policy Count​** | **Manual Policy Count​** |
|---------------------------------|---------------------------|----------------------------|-------------------------|
|  AWS​                            | [460](../../securityPolicies/awsSecurityPolcies/)                       | 435                        | 13                      |
|  AWS​ VM baseline RHEL           | [162](../../securityPolicies/osBaseline/centOSSecurityPolcies/)                       | 162                        | -                       |
|  AWS VM baseline Win 2016​       | [351](../../securityPolicies/osBaseline/windows16SecurityPolcies/#aws)                       | 351                        | -                       |
|  Amazon EC2-instance based Kubernetes             | [75](../../securityPolicies/kubernetes/awsK8SSecurityPolcies/#ec2-instance-based-kubernetes-security-policies)                         | 75                      | -                      |
|  Amazon Elastic Kubernetes Service (Amazon EKS)             | [21](../../securityPolicies/kubernetes/awsK8SSecurityPolcies/#eks-security-policies)                         | 21                      | -                      |
|  Office365​                      | [133](../../securityPolicies/office365SecurityPolcies/)                       | 96                         | 37                      |
|  Azure​                          | [425](../../securityPolicies/azureSecurityPolcies/)                       | 392                        | 33                      |
|  Azure VM baseline Win 2012 R2​  | [212​](../../http://127.0.0.1:8000/securityPolicies/osBaseline/windows12SecurityPolcies/#azure)                       | 212​                        | -                       |
|  Azure VM baseline Win 2016​     | [227​](../../securityPolicies/osBaseline/windows16SecurityPolcies/)                       | 227​                        | -                       |
|  Azure VM baseline Win 2019     | [193](../../securityPolicies/osBaseline/windows19SecurityPolcies/)                       | 193                        | -                       |
|  Azure VM baseline Ubuntu 18.04​ | [40](../../securityPolicies/osBaseline/ubuntuSecurityPolcies/)​                        | 40​                         | -                       |
|  Azure VM baseline CentOS​       | [34](../../securityPolicies/osBaseline/centOSSecurityPolcies/#azure)​                        | 34​                         | -                       |
|  Azure Kubernetes | [73](../../securityPolicies/kubernetes/azureK8SSecurityPolcies/#vm-based-kubernetes-security-policies)                        | 73                         | -                       |
|  Azure Kubernetes Service (AKS Engine) | [73](../../securityPolicies/kubernetes/azureK8SSecurityPolcies/#aks-engine-security-policies)                        | 73                         | -                       |
|  Azure Kubernetes Service (AKS) | [21](../../securityPolicies/kubernetes/azureK8SSecurityPolcies/#aks-security-policies)                        | 21                         | -                       |
| **Grand Total**​                 | **2500**​                  | **2417**​                   |                   **82**      |



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