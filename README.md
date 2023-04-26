# Alertín

Bot de Discord para enviar mensajes usando HTTP(s)

# Instalar

`wget https://git.stratus.services/stratus/alertin/-/raw/master/compose.yml`

`docker-compose -f compose.yml up -d`

o

`docker run --name alertin -p 80:8080 --env TOKEN=eoeoeo -d registry.stratus.services/stratus/alertin`


# Ejemplos

Script de ejemplo desde consola UNIX: 

```shell
curl -X POST -H "Content-Type: application/json" -d '{"channel":"15556884888488444", "message": "hi there"}' http://<ip>:<puerto>/message
```
Script de ejemplo desde consola RouterOS:

```shell
/tool fetch mode=https url="http://<ip>:<puerto>/message"  http-method=post  http-data='{"channel":"15556884888488444", "message": "hi there"}' http-header-field="content-type: application/json"
```

Script de ejemplo desde consola PowerShell

```shell
Invoke-WebRequest -uri "http://<ip>:<puerto>/message" -contenttype "application/json" -method post -body '{"channel":"15556884888488444", "message": "hi there"}'`
```