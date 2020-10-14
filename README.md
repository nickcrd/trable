![Trable Backend Logo](https://i.imgur.com/vxC6XBx.png)
# trable
Trable is an indoor-localization system powered by Bluetooth LE. 

## How to Install:
1. Clone this repo.
`git clone https://github.com/nickcrd/trable && cd ./trable` 
2. Install with npm or yarn
``npm install -g .``
3. Make sure to edit the config found in ./config/default.json

## Usage:
Start the Trable Master server by running `trable` inside your command line. You can always override any config keys by appending them to the command.

Example: To override the MongoDB server url, specified within the config as "mongoUrl", type `trable --mongoUrl some-mongo-url-here`

