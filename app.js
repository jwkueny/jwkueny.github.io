'use strict'

var mqtt;
var reconnectTimeout = 5000;
var host = "mqtt.jwkueny.com";
var port = 8010;

function onConnect()
{
    console.log("Connected");
    message = new Paho.MQTT.Message("Hello World");

    message.destinationName = "/jwkueny/status/print";
    mqtt.send(message);
}

function MQTTconnect()
{
    console.log("connecting to " + host + port);
    mqtt = new Paho.MQTT.Client(host, port, "jwkueny");
    var options = 
    {
        timeout: 3,
        onSuccess: onConnect,
    };
    mqtt.connect(options);
}
    
MQTTconnect();

function button_0()
{
    console.log("Button 0");
}

function button_1()
{
    console.log("Button 1");
}

function button_2()
{
    console.log("Button 2");
}

function button_3()
{
    console.log("Button 3");
}

function button_4()
{
    console.log("Button 4");
}

function button_5()
{
    console.log("Button 5");
}

function button_6()
{
    console.log("Button 6");
}

function button_7()
{
    console.log("Button 7");
}

function button_8()
{
    console.log("Button 8");
}

function button_9()
{
    console.log("Button 9");
}

function button_10()
{
    console.log("Button 10");
}

function button_red()
{
    console.log("Button Red");
}

function button_yellow()
{
    console.log("Button Yellow");
}

function button_green()
{
    console.log("Button Green");
}

function button_blue()
{
    console.log("Button Blue");
}

function button_error()
{
    console.log("Button Error");
}