//const JsonStore = artifacts.require("JsonStore");
const AssociationStore = artifacts.require("AssociationStore");

module.exports = function(deployer, network, accounts) {
    //deployer.deploy(JsonStore)
    deployer.deploy(AssociationStore)
}