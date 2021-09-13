import JsonStore from './contract/build/JsonStore.json';
import Web3 from 'web3';

var web3; 

export default class Contract {

    constructor(network, callback) {
        this.jsonStoreVar = "";
        this.owner = "";

        this.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
        
        this.initialize(callback);
    }

    initialize(callback) {
        
        // Modern DApp Browsers -  it s a new way to connect metamask on web3 cause It's deprecated 
        if (window.ethereum) {
            this.web3 = new Web3(window.ethereum);
            try { 
            window.ethereum.enable().then(function() {
                // User has allowed account access to DApp...
            });
            } catch(e) {
            // User has denied account access to DApp...
            }
        }
        // Legacy DApp Browsers
        else if (window.web3) {
            this.web3 = new Web3(web3.currentProvider);
        }
        // Non-DApp Browsers
        else {
            alert('You have to install MetaMask !');
        }

        this.web3.eth.net.isListening()
        .then(() => {
            console.log('is connected');
            
        })
        .catch(e => console.log('Failed connection: '+ e));
        
        console.log("this.web3 : ", this.web3);

    }

    async setJsonData(json) {
        new Promise((resolve, error) => {
            var jsonStoreVar = new this.web3.eth.Contract(
                JsonStore.abi, 
                "0x4ec65365D4656Fe134fc446b5683D5B6aC631a6F");

            this.web3.eth.getAccounts().then(accounts => {
                var acc = accounts[0];
                console.log("jsonStoreVar.methods.set ", acc);
                console.log("jsonStoreVar.methods.set ", JSON.stringify(json));
                jsonStoreVar.methods
                    .set(
                        JSON.stringify(json)
                    )
                    .send({ 
                            from: acc
                        }, (error, json) => {
                            if(json) {
                                console.log("Information saved with success ", json)
                            } else {
                                console.log("Information saved ", error)
                            }
                    })
                });
        });
    }

    async getJsonData() {
        return new Promise((resolve, error) => {
            
            this.web3.eth.getAccounts().then(accounts => {
                var acc = accounts[0];
                console.log("jsonStoreVar.methods.get ", acc);
                var jsonStoreVar = new this.web3.eth.Contract(
                    JsonStore.abi, 
                    "0x4ec65365D4656Fe134fc446b5683D5B6aC631a6F");
                console.log("this.jsonStoreVar ", jsonStoreVar);

                jsonStoreVar.methods
                .get()
                .call({ 
                    from: acc
                }, (errorJson, json) => {
                    if(json) {
                        console.log("json ", json)
                        resolve(json);
                    } else {
                        console.log("error into get json ", json, errorJson)
                    }
                })
            });

        });
     
    }
}