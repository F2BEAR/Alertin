//cargar dotenv
const dotenv = require("dotenv");
dotenv.config();

//cargar express y definir puerto
var express = require("express");
var app = express();
const port = process.env.port;

//cargar bodyparser
const bodyParser = require("body-parser");

//cargar api discord
const Discord = require("discord.js");
const client = new Discord.Client();

//cargar datetime
var dateTime = require("node-datetime");

// inicializar express
app.listen(port, () => {
  console.log(`express escucha en el ${port}`);
});

// inicializar bodyparser
app.use(bodyParser.json(), bodyParser.text());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// login a discord
client.login(process.env.token);

// pone ready el discord
client.on("ready", () => {
  console.log(`sesion iniciada: ${client.user.tag}!`);

  // recibe el mensaje
  app.post("/alertin", (req, res) => {
    let message = req.body;
    const canal = client.channels.cache.get(process.env.channel);
    canal.send(message);
    var dt = dateTime.create();
    var fecha = dt.format("ymd_HMS");
    console.log("recibido a las: " + fecha + " - " + message);
    res.send("ok\n" + message + "\n");
  });
});
