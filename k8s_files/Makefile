podname=$(value)
namespace=unir-act3-namespace

set-aws:
	sudo vim ~/.aws/credentials
get-aws:
	sudo cat ~/.aws/credentials

run-node:
	kubectl apply -f act3-node.deployment.yaml
	kubectl apply -f act3-node.service.yaml
	
stop-node:
	kubectl delete -f act3-mongo.deployment.yaml
	kubectl delete -f act3-mongo.service.yaml

run-mongo:
	kubectl apply -f act3-mongo.pv.yaml
	kubectl apply -f act3-mongo.pvc.yaml
	kubectl apply -f act3-mongo.deployment.yaml
	kubectl apply -f act3-mongo.service.yaml
	
new-deploy-mongo:
	kubectl apply -f act3-mongo.deployment.yaml

stop-mongo:
	kubectl delete -f act3-mongo.deployment.yaml
	kubectl delete -f act3-mongo.service.yaml
	kubectl delete -f act3-mongo.pvc.yaml
	kubectl delete -f act3-mongo.pv.yaml
	
del-deploy-mongo:
	kubectl delete -f act3-mongo.deployment.yaml
	
get-k8s:
	kubectl get deployments -n $(namespace)
	kubectl get pods -n $(namespace)
	kubectl get pv,pvc -n $(namespace)
	kubectl get service -n $(namespace)
	kubectl get events -n $(namespace)
	kubectl get pods -n $(namespace) -l app=aws-ebs-csi-driver
	kubectl get pod -o wide -n $(namespace)
	kubectl get all -n $(namespace)

describe-pod:
	kubectl describe pod $(podname) -n $(namespace)
	
bash-mongo:
	kubectl exec -it pods/$(podname) sh -n $(namespace)