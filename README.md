# node-red-contrib-openwhisk

[![NPM](https://nodei.co/npm/node-red-contrib-openwhisk.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-red-contrib-openwhisk/)

[![npm](https://badge.fury.io/js/node-red-contrib-openwhisk.svg)](https://www.npmjs.com/package/node-red-contrib-openwhisk)
[![GitHub](https://img.shields.io/badge/github-code-blue.svg)](https://github.com/chyld/node-red-contrib-openwhisk)
[![NodeRED](https://img.shields.io/badge/nodered-usage-red.svg)](http://flows.nodered.org/node/node-red-contrib-openwhisk)


## Description
Compose OpenWhisk microservices from the NodeRED GUI.


## Install
```sh
$ npm install node-red-contrib-openwhisk --save
```

## Usage
The openwhisk node allows you to call OpenWhisk microservices from inside NodeRED.

To setup, double click the openwhisk node. Enter the Organization, Space, Action and Authorization Key.

The input to your openwhisk service is whatever is present inside msg.payload.

The openwhisk node will show colored lights as it is processing your request. The light will become green on success or red on failure. If a failure occurs, it will be displayed in the debug panel.

The resulting data will be present on msg.openwhisk.
  

## License
MIT © [Chyld Medford](https://github.com/chyld)
