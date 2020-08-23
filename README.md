# Alertín

Script para enviar mensajes de alerta del servidor a traves de discord usando Node.JS

# Ejemplos

Script de ejemplo desde consola unix: 

`curl -X POST -H "Content-Type: text/plain" -d 'mensaje' http://<ip>:<puerto>/alertin`

Script de ejemplo desde consola RouterOS:

`/tool fetch mode=https url="http://<ip>:<puerto>/alertin"  http-method=post  http-data="mensaje sito \n en otro renglon" http-header-field="content-type: text/plain"`

