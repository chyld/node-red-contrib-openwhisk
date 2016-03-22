var OpenWhisk = require("openwhisk");

module.exports = function(RED) {
    function OpenWhiskNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function(msg) {

            node.status({fill:"grey",shape:"ring",text:"request sent"});

            OpenWhisk(config.org, config.space, config.action, node.credentials.key, msg.payload)
            .then(function(response){
              node.status({fill:"green",shape:"dot",text:"response received"});
              msg.xyz = response;
              node.send(msg);
            });

            // node.warn(config.org);
            // node.warn(config.space);
            // node.warn(config.action);
            // node.error(node.credentials.key);

            // msg.payload = msg.payload.toLowerCase();
            // node.send(msg);
        });
    }
    RED.nodes.registerType("openwhisk",OpenWhiskNode, {
     credentials: {
         key: {type:"password"}
     }
   });
}
