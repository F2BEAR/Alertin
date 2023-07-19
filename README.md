# Alertín

Discord Bot to send messages through HTTP(s).

## Installation

You need Node.js v16.x or higher for this package to work.

- Clone this directory:

```shell
git clone https://github.com/F2BEAR/Alertin alertin
cd /alertin
```

- Install dependencies:

```shell
npm install
```

- Build the project:

```shell
npm run build
```

Finally you can start it using `npm start`

## Examples

UNIX: 

```shell
curl -X POST -H "Content-Type: application/json" -d '{"channel":"15556884888488444", "message": "server at 192.0.0.1 not working"}' http://<ip>:<port>/message
```

RouterOS:

```shell
/tool fetch mode=https url="http://<ip>:<port>/message"  http-method=post  http-data='{"channel":"15556884888488444", "message": "server at 192.0.0.1 not working"}' http-header-field="content-type: application/json"
```

PowerShell

```shell
Invoke-WebRequest -uri "http://<ip>:<port>/message" -contenttype "application/json" -method post -body '{"channel":"15556884888488444", "message": "server at 192.0.0.1 not working"}'`
```