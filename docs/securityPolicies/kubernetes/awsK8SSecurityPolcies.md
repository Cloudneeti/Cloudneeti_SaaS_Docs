
The Security Policies view provides a list of all security policies within the Cloudneeti application. Following is the security policies within the Cloudneeti application for different cloud account types, please refer [Release Notes](../../releaseNotes/2020/){target=_blank} for latest updates.


EC2-Instance based Kubernetes Security Policies
-----------------------------------------------

| Category Name                                                           | Policy Name                                                                                                                   |
|-------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Kubernetes - Control Plane Components - Master Node Configuration Files | EC2-Instance based - Ensure that the API server pod specification file permissions are set to 644 or more restrictive         |
| Kubernetes - Control Plane Components - Master Node Configuration Files | EC2-Instance based - Ensure that the API server pod specification file ownership is set to root:root                          |
| Kubernetes - Control Plane Components - Master Node Configuration Files | EC2-Instance based - Ensure that the controller manager pod specification file permissions are set to 644 or more restrictive |
| Kubernetes - Control Plane Components - Master Node Configuration Files | EC2-Instance based - Ensure that the controller manager pod specification file ownership is set to root:root                  |
| Kubernetes - Control Plane Components - Master Node Configuration Files | EC2-Instance based - Ensure that the scheduler pod specification file permissions are set to 644 or more restrictive          |
| Kubernetes - Control Plane Components - Master Node Configuration Files | EC2-Instance based - Ensure that the scheduler pod specification file ownership is set to root:root                           |
| Kubernetes - Control Plane Components - Master Node Configuration Files | EC2-Instance based - Ensure that the etcd pod specification file permissions are set to 644 or more restrictive               |
| Kubernetes - Control Plane Components - Master Node Configuration Files | EC2-Instance based - Ensure that the etcd pod specification file ownership is set to root:root                                |
| Kubernetes - Control Plane Components - Master Node Configuration Files | EC2-Instance based - Ensure that the etcd data directory permissions are set to 700 or more restrictive                       |
| Kubernetes - Control Plane Components - Master Node Configuration Files | EC2-Instance based - Ensure that the etcd data directory ownership is set to etcd:etcd                                        |
| Kubernetes - Control Plane Components - Master Node Configuration Files | EC2-Instance based - Ensure that the admin.conf file permissions are set to 644 or more restrictive                           |
| Kubernetes - Control Plane Components - Master Node Configuration Files | EC2-Instance based - Ensure that the admin.conf file ownership is set to root:root                                            |
| Kubernetes - Control Plane Components - Master Node Configuration Files | EC2-Instance based - Ensure that the scheduler.conf file permissions are set to 644 or more restrictive                       |
| Kubernetes - Control Plane Components - Master Node Configuration Files | EC2-Instance based - Ensure that the scheduler.conf file ownership is set to root:root                                        |
| Kubernetes - Control Plane Components - Master Node Configuration Files | EC2-Instance based - Ensure that the controller-manager.conf file permissions are set to 644 or more restrictive              |
| Kubernetes - Control Plane Components - Master Node Configuration Files | EC2-Instance based - Ensure that the controller-manager.conf file ownership is set to root:root                               |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --basic-auth-file argument is not set                                                    |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --token-auth-file argument is not set                                                    |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --kubelet-https argument is set to true                                                  |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --kubelet-client-certificate and --kubelet-client-key arguments are set as appropriate   |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --kubelet-certificate-authority argument is set as appropriate                           |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --authorization-mode argument is not set to AlwaysAllow                                  |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --authorization-mode argument includes Node                                              |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --authorization-mode argument includes RBAC                                              |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the admission control plugin AlwaysAdmit is not set                                          |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the admission control plugin ServiceAccount is set                                           |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the admission control plugin NamespaceLifecycle is set                                       |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the admission control plugin PodSecurityPolicy is set                                        |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the admission control plugin NodeRestriction is set                                          |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --insecure-bind-address argument is not set                                              |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --insecure-port argument is set to 0                                                     |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --secure-port argument is not set to 0                                                   |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --profiling argument is set to false                                                     |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --request-timeout argument is set as appropriate                                         |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --service-account-lookup argument is set to true                                         |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --service-account-key-file argument is set as appropriate                                |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --etcd-certfile and --etcd-keyfile arguments are set as appropriate                      |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --tls-cert-file and --tls-private-key-file arguments are set as appropriate              |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --client-ca-file argument is set as appropriate                                          |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --etcd-cafile argument is set as appropriate                                             |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --encryption-provider-config argument is set as appropriate                              |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --audit-log-path argument is set                                                         |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --audit-log-maxage argument is set to 30 or as appropriate                               |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --audit-log-maxbackup argument is set to 10 or as appropriate                            |
| Kubernetes - Control Plane Components - API Server                      | EC2-Instance based - Ensure that the --audit-log-maxsize argument is set to 100 or as appropriate                             |
| Kubernetes - Control Plane Components - Controller Manager              | EC2-Instance based - Ensure that the --terminated-pod-gc-threshold argument is set as appropriate                             |
| Kubernetes - Control Plane Components - Controller Manager              | EC2-Instance based - Ensure that the --profiling argument is set to false                                                     |
| Kubernetes - Control Plane Components - Controller Manager              | EC2-Instance based - Ensure that the --use-service-account-credentials argument is set to true                                |
| Kubernetes - Control Plane Components - Controller Manager              | EC2-Instance based - Ensure that the --service-account-private-key-file argument is set as appropriate                        |
| Kubernetes - Control Plane Components - Controller Manager              | EC2-Instance based - Ensure that the --root-ca-file argument is set as appropriate                                            |
| Kubernetes - Control Plane Components - Controller Manager              | EC2-Instance based - Ensure that the RotateKubeletServerCertificate argument is set to true                                   |
| Kubernetes - Control Plane Components - Controller Manager              | EC2-Instance based - Ensure that the --bind-address argument is set to 127.0.0.1                                              |
| Kubernetes - Control Plane Components - Scheduler                       | EC2-Instance based - Ensure that the --profiling argument is set to false                                                     |
| Kubernetes - Control Plane Components - Scheduler                       | EC2-Instance based - Ensure that the --bind-address argument is set to 127.0.0.1                                              |
| Kubernetes - Worker Nodes - Worker Node Configuration Files             | EC2-Instance based - Ensure that the kubelet service file has permissions of 644 or more restrictive                          |
| Kubernetes - Worker Nodes - Worker Node Configuration Files             | EC2-Instance based - Ensure that the kubelet service file ownership is set to root:root                                       |
| Kubernetes - Worker Nodes - Worker Node Configuration Files             | EC2-Instance based - Ensure that the proxy kubeconfig file permissions are set to 644 or more restrictive                     |
| Kubernetes - Worker Nodes - Worker Node Configuration Files             | EC2-Instance based - Ensure that the proxy kubeconfig file ownership is set to root:root                                      |
| Kubernetes - Worker Nodes - Worker Node Configuration Files             | EC2-Instance based - Ensure that the kubelet.conf file permissions are set to 644 or more restrictive                         |
| Kubernetes - Worker Nodes - Worker Node Configuration Files             | EC2-Instance based - Ensure that the kubelet.conf file ownership is set to root:root                                          |
| Kubernetes - Worker Nodes - Worker Node Configuration Files             | EC2-Instance based - Ensure that the client certificate authorities file ownership is set to root:root                        |
| Kubernetes - Worker Nodes - Worker Node Configuration Files             | EC2-Instance based - Ensure that the kubelet configuration file has permissions set to 644 or more restrictive                |
| Kubernetes - Worker Nodes - Worker Node Configuration Files             | EC2-Instance based - Ensure that the kubelet configuration file ownership is set to root:root                                 |
| Kubernetes - Worker Nodes - Kubelet                                     | EC2-Instance based - Ensure that the --anonymous-auth argument is set to false                                                |
| Kubernetes - Worker Nodes - Kubelet                                     | EC2-Instance based - Ensure that the --authorization-mode argument is not set to AlwaysAllow                                  |
| Kubernetes - Worker Nodes - Kubelet                                     | EC2-Instance based - Ensure that the --client-ca-file argument is set as appropriate                                          |
| Kubernetes - Worker Nodes - Kubelet                                     | EC2-Instance based - Ensure that the --read-only-port argument is set to 0                                                    |
| Kubernetes - Worker Nodes - Kubelet                                     | EC2-Instance based - Ensure that the --streaming-connection-idle-timeout argument is not set to 0                             |
| Kubernetes - Worker Nodes - Kubelet                                     | EC2-Instance based - Ensure that the --protect-kernel-defaults argument is set to true                                        |
| Kubernetes - Worker Nodes - Kubelet                                     | EC2-Instance based - Ensure that the --make-iptables-util-chains argument is set to true                                      |
| Kubernetes - Worker Nodes - Kubelet                                     | EC2-Instance based - Ensure that the --hostname-override argument is not set                                                  |
| Kubernetes - Worker Nodes - Kubelet                                     | EC2-Instance based - Ensure that the --tls-cert-file and --tls-private-key-file arguments are set as appropriate              |
| Kubernetes - Worker Nodes - Kubelet                                     | EC2-Instance based - Ensure that the --rotate-certificates argument is not set to false                                       |
| Kubernetes - Worker Nodes - Kubelet                                     | EC2-Instance based - Ensure that the RotateKubeletServerCertificate argument is set to true                                   |
| Kubernetes - Worker Nodes - Kubelet                                     | EC2-Instance based - Ensure that the Kubelet only makes use of Strong Cryptographic Ciphers                                   |


EKS Security Policies
---------------------

| Category Name                                               | Policy Name                                                                                           |
|-------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| Kubernetes - Worker Nodes - Worker Node Configuration Files | AWS EKS - Ensure that the kubelet service file has permissions of 644 or more restrictive             |
| Kubernetes - Worker Nodes - Worker Node Configuration Files | AWS EKS - Ensure that the kubelet service file ownership is set to root:root                          |
| Kubernetes - Worker Nodes - Worker Node Configuration Files | AWS EKS - Ensure that the proxy kubeconfig file permissions are set to 644 or more restrictive        |
| Kubernetes - Worker Nodes - Worker Node Configuration Files | AWS EKS - Ensure that the proxy kubeconfig file ownership is set to root:root                         |
| Kubernetes - Worker Nodes - Worker Node Configuration Files | AWS EKS - Ensure that the kubelet.conf file permissions are set to 644 or more restrictive            |
| Kubernetes - Worker Nodes - Worker Node Configuration Files | AWS EKS - Ensure that the kubelet.conf file ownership is set to root:root                             |
| Kubernetes - Worker Nodes - Worker Node Configuration Files | AWS EKS - Ensure that the client certificate authorities file ownership is set to root:root           |
| Kubernetes - Worker Nodes - Worker Node Configuration Files | AWS EKS - Ensure that the kubelet configuration file has permissions set to 644 or more restrictive   |
| Kubernetes - Worker Nodes - Worker Node Configuration Files | AWS EKS - Ensure that the kubelet configuration file ownership is set to root:root                    |
| Kubernetes - Worker Nodes - Kubelet                         | AWS EKS - Ensure that the --anonymous-auth argument is set to false                                   |
| Kubernetes - Worker Nodes - Kubelet                         | AWS EKS - Ensure that the --authorization-mode argument is not set to AlwaysAllow                     |
| Kubernetes - Worker Nodes - Kubelet                         | AWS EKS - Ensure that the --client-ca-file argument is set as appropriate                             |
| Kubernetes - Worker Nodes - Kubelet                         | AWS EKS - Ensure that the --read-only-port argument is set to 0                                       |
| Kubernetes - Worker Nodes - Kubelet                         | AWS EKS - Ensure that the --streaming-connection-idle-timeout argument is not set to 0                |
| Kubernetes - Worker Nodes - Kubelet                         | AWS EKS - Ensure that the --protect-kernel-defaults argument is set to true                           |
| Kubernetes - Worker Nodes - Kubelet                         | AWS EKS - Ensure that the --make-iptables-util-chains argument is set to true                         |
| Kubernetes - Worker Nodes - Kubelet                         | AWS EKS - Ensure that the --hostname-override argument is not set                                     |
| Kubernetes - Worker Nodes - Kubelet                         | AWS EKS - Ensure that the --tls-cert-file and --tls-private-key-file arguments are set as appropriate |
| Kubernetes - Worker Nodes - Kubelet                         | AWS EKS - Ensure that the --rotate-certificates argument is not set to false                          |
| Kubernetes - Worker Nodes - Kubelet                         | AWS EKS - Ensure that the RotateKubeletServerCertificate argument is set to true                      |
| Kubernetes - Worker Nodes - Kubelet                         | AWS EKS - Ensure that the Kubelet only makes use of Strong Cryptographic Ciphers                      |
