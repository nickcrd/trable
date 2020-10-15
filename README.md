![Trable Backend Logo](https://i.imgur.com/vxC6XBx.png)
# trable
Trable is an indoor-localization system powered by Bluetooth LE. 

## How to Install:
Make sure to have NodeJS and npm installed.
1. Clone this repo.
```sh
git clone https://github.com/nickcrd/trable && cd ./trable
``` 
2. Install with npm or yarn
```
npm install -g . --only=prod
```
3. Edit the config found in ``/config/default.json`` and ``/config/mapConfig.json``

## Setup Trable:
Before you can start using Trable, you need to tweak the config file ``default.json`` in the ``config`` folder. The table below explains the config keys and what you have to change. You must change authSecret and manifest.apiBaseUrl, otherwise the app won't work. You should also verify if the MongoDB Url matches the one specified in the "mongoDb" key.

|key|default value|description|
|---|---|---|
|authSecret|N\/A|Used to sign JWT tokens. Make sure to specify a secure secret token.|
|mongoDb|"mongodb://localhost:27017/trable"|URL to the MongoDB database to use|
|sentryUrl|null|Specify a sentry.io URL if you want to be notified of application errors. This is probably only useful for other developers. Set it to null if you want to disable sentry.io integration.| 
|configLevel|"debug"|Change the logger level, valid types are: info, verbose, debug|
|manifest.serverDisplayName|"A Trable Server"|This will identify your server within the Trable Mobile app and will be shown to the enduser.|
|manifest.apiBaseUrl|"http:\/\/172.16.4.35:8080/"|Specify an internal or public IP/URL that points to your api base url. Must be routeable from the enduser devices.|
|kalmanFilterConfig|{R: 0.008, Q: 4}|Change R and Q of the Kalman Filter used to filter RSSIs, only tweak this if you need to.|


## Starting Trable:
Start the Trable Master server by running `trable` inside your command line. You can always override any config keys by appending them to the command.

Example: To override the MongoDB server url, specified within the config as "mongoUrl", type 
```
trable --mongoUrl some-mongo-url-here
```

## Related Repositories:
|<a href="https://github.com/nickcrd/trable-ios/"><img src="https://i.imgur.com/SevbyjI.png" width="100" height="100"/></a>|<a href="https://github.com/nickcrd/trable/"><img src="https://i.imgur.com/5D8gFiS.png" width="100" height="100"/></a>|<a href="https://github.com/nickcrd/trable-node/"><img src="https://i.imgur.com/sNpxjbc.png" width="100" height="100"/></a>|
|-|-|-|
|[Trable iOS App](https://github.com/nickcrd/trable-ios/)|Trable Backend|[Trable Node](https://github.com/nickcrd/trable-node/)|

