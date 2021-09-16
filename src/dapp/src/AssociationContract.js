import AssociationStore from './contract/build/AssociationStore.json';
import Web3 from 'web3';

var web3; 

export default class Contract {

    constructor(network, callback) {
        this.associationStoreVar = "";
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

    async getAssociationData() {
        return new Promise((resolve, error)  => {

            this.web3.eth.getAccounts().then(accounts => {
                
                var acc = accounts[0];
                console.log("associationStoreVar.methods.get ", acc);

                console.log("this.associationStoreVar ", associationStoreVar);

                var associationStoreVar = new this.web3.eth.Contract(
                    AssociationStore.abi, 
                    "0x7D45E2EDcFf7f4a3471f41a6eBDcc17E3c90b8CA");
                
                associationStoreVar.methods
                    .getCountTotalId().call({ 
                        from: acc
                    })
                    .then(maxValue => {
                        var resolvedPromisesArray = [];

                        for(var count = 1; count <= maxValue; count++) {
                            resolvedPromisesArray.push(this.getAssociationDataById(count))
                        }

                        Promise.all(resolvedPromisesArray).then(resultJson => {
                            var jsons = [];
                            resultJson.map(function(value) { 
                                return jsons.push(value);
                            });
                            resolve(jsons);
                        })

                    })
                
            })
        });
    }

    async getMyAssociationData() {
        return new Promise((resolve, error)  => {

            this.web3.eth.getAccounts().then(accounts => {
                
                var acc = accounts[0];
                console.log("associationStoreVar.methods.get ", acc);

                console.log("this.associationStoreVar ", associationStoreVar);

                var associationStoreVar = new this.web3.eth.Contract(
                    AssociationStore.abi, 
                    "0x7D45E2EDcFf7f4a3471f41a6eBDcc17E3c90b8CA");
                
                associationStoreVar.methods
                    .getMyIds().call({ 
                        from: acc
                    })
                    .then(listValue => {
                        var resolvedPromisesArray = [];

                        listValue.forEach(element => {
                            resolvedPromisesArray.push(this.getMyAssociationDataById(element))
                        });

                        Promise.all(resolvedPromisesArray).then(resultJson => {
                            var jsons = [];
                            resultJson.map(function(value) { 
                                return jsons.push(value);
                            });
                            resolve(jsons);
                        })

                    })
                
            })
        });
    }

    async getAssociationDataById(id) {
        return new Promise((resolve, error) => {
            
            this.web3.eth.getAccounts().then(accounts => {
                var acc = accounts[0];
                console.log("associationStoreVar.methods.get ", acc);

                var associationStoreVar = new this.web3.eth.Contract(
                    AssociationStore.abi, 
                    "0x7D45E2EDcFf7f4a3471f41a6eBDcc17E3c90b8CA");

                console.log("this.associationStoreVar ", associationStoreVar);

                associationStoreVar.methods
                .getPropertyById(id,"businessNetworkName").call({ 
                    from: acc
                })
                .then(businessNetworkName => {

                    associationStoreVar.methods
                    .getPropertyById(id,"businessNetworkId").call({ 
                        from: acc
                    })
                    .then(businessNetworkId => {
                        
                        associationStoreVar.methods
                        .getPropertyById(id,"status").call({ 
                            from: acc
                        })
                        .then(status => {

                            associationStoreVar.methods
                            .getPropertyById(id,"id").call({ 
                                from: acc
                            })
                            .then(associationId => {
                                var jsonReturn = {
                                    "Network" : businessNetworkName,
                                    "ID" : businessNetworkId,
                                    "Status" : status,
                                    "Contract" : "",
                                    "Subscribe request" : "",
                                    "associationId" : associationId
                                };

                                resolve(jsonReturn);
                            });
                        });
                    });
                });
            });

        });
     
    }


    async getMyAssociationDataById(id) {
        return new Promise((resolve, error) => {
            
            this.web3.eth.getAccounts().then(accounts => {
                var acc = accounts[0];
                console.log("associationStoreVar.methods.get ", acc);

                var associationStoreVar = new this.web3.eth.Contract(
                    AssociationStore.abi, 
                    "0x7D45E2EDcFf7f4a3471f41a6eBDcc17E3c90b8CA");

                console.log("this.associationStoreVar ", associationStoreVar);

                associationStoreVar.methods
                .getPropertyById(id,"businessNetworkName").call({ 
                    from: acc
                })
                .then(businessNetworkName => {

                    associationStoreVar.methods
                    .getPropertyById(id,"businessNetworkId").call({ 
                        from: acc
                    })
                    .then(businessNetworkId => {

                        associationStoreVar.methods
                        .getPropertyById(id,"role").call({ 
                            from: acc
                        })
                        .then(role => {
                            
                                associationStoreVar.methods
                                .getPropertyById(id,"status").call({ 
                                    from: acc
                                })
                                .then(status => {
                                    associationStoreVar.methods
                                    .getPropertyById(id,"id").call({ 
                                        from: acc
                                    })
                                    .then(associationId => {
                                        var jsonReturn = {
                                            "Select" : false,
                                            "Network" : businessNetworkName,
                                            "ID" : businessNetworkId,
                                            "Status" : status,
                                            "Role" : role,
                                            "Subscribe request" : "",
                                            "AssociationId":associationId
                                        };

                                        resolve(jsonReturn);
                                    });
                                });
                            });
                        });
                    });
                });

        });
     
    }

    async getMyAssociationDetailsDataById(id) {
        return new Promise((resolve, error) => {
            
            console.log("getMyAssociationDetailsDataById id ", id)
            this.web3.eth.getAccounts().then(accounts => {
                var acc = accounts[0];
                console.log("associationStoreVar.methods.get ", acc);

                var associationStoreVar = new this.web3.eth.Contract(
                    AssociationStore.abi, 
                    "0x7D45E2EDcFf7f4a3471f41a6eBDcc17E3c90b8CA");

                console.log("this.associationStoreVar ", associationStoreVar);

                associationStoreVar.methods
                .getPropertyById(id,"businessNetworkName").call({ 
                    from: acc
                })
                .then(businessNetworkName => {
                    associationStoreVar.methods
                    .getPropertyById(id,"taxId").call({ 
                        from: acc
                    })
                    .then(taxId => {
                        associationStoreVar.methods
                        .getPropertyById(id,"role").call({ 
                            from: acc
                        })
                        .then(role => {
                            associationStoreVar.methods
                            .getPropertyById(id,"businessNetworkId").call({ 
                                from: acc
                            })
                            .then(businessNetworkId => {
                                associationStoreVar.methods
                                .getPropertyById(id,"businessAddress").call({ 
                                    from: acc
                                })
                                .then(address => {
                                    associationStoreVar.methods
                                    .getPropertyById(id,"adminName").call({ 
                                        from: acc
                                    })
                                    .then(adminRole => {
                                        associationStoreVar.methods
                                        .getPropertyById(id,"businessCode").call({ 
                                            from: acc
                                        })
                                        .then(businessCode => {
                                            associationStoreVar.methods
                                            .getPropertyById(id,"details").call({ 
                                                from: acc
                                            })
                                            .then(detail => {
                                                associationStoreVar.methods
                                                .getPropertyById(id,"id").call({ 
                                                    from: acc
                                                })
                                                .then(associationId => {
                                                    var jsonReturn = {
                                                        "businessNetworkName" : businessNetworkName,
                                                        "taxId" : taxId,
                                                        "yourRole" : role,
                                                        "businessNetworkId" : businessNetworkId,
                                                        "address" : address,
                                                        "adminRole" : adminRole,
                                                        "businessCode" : businessCode,
                                                        "detail" : detail,
                                                        "associationId" : associationId
                                                    };

                                                    console.log("AssociationContract jsonReturn ", jsonReturn )

                                                    resolve(jsonReturn);
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                }); 
            });
        });
    
    }
}