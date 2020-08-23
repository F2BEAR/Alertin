# Alertín

Script para enviar mensajes de alerta del servidor a traves de discord usando Node.JS

# Ejemplos

Script de ejemplo desde consola unix: 

`curl -X POST -H "Content-Type: text/plain" -d 'mensaje' http://<ip>:<puerto>/alertin`

Script de ejemplo desde consola RouterOS:

`/tool fetch mode=https url="http://<ip>:<puerto>/alertin"  http-method=post  http-data="mensaje sito \n en otro renglon" http-header-field="content-type: text/plain"`

## Creadores
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/F2BEAR"><img src="https://avatars0.githubusercontent.com/u/29986740" width="100px;" alt="F2BEAR"/><br /><sub><b>4dd3r</b></sub></a><br /></a></td>
    <td align="center"><a href="https://github.com/agustt"><img src="https://avatars2.githubusercontent.com/u/46489419" width="100px;" alt="agustt"/><br /><sub><b>4katie</b></sub></a><br /></a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->