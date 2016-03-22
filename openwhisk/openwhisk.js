var OpenWhisk = require('openwhisk');

module.exports = function(RED){
  function OpenWhiskNode(config){
    RED.nodes.createNode(this, config);
    var node = this;

    node.on('input', function(msg){
      node.status({fill:'grey',shape:'ring',text:'request sent'});

      OpenWhisk(config.org, config.space, config.action, node.credentials.key, msg.payload)
      .then(function(response){
        msg.openwhisk = response;

        if(!msg.openwhisk.error){
          node.status({fill:'green',shape:'dot',text:'response received'});
        }else{
          processError(node, msg.openwhisk.error);
        }

        node.send(msg);
      })
      .catch(function(err){
        processError(node, err);
      });
    });
  }

  RED.nodes.registerType('openwhisk', OpenWhiskNode, {
    credentials: {
      key: {type:'password'}
    }
  });
}

function processError(node, err){
  node.status({fill:'red',shape:'dot',text:'request failed'});
  node.error(JSON.stringify(err));
}
