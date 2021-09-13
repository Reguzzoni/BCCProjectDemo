const JsonStore = artifacts.require("JsonStore");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(JsonStore)
}