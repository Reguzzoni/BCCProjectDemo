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

    async getAssociationMembersDataByAssociationId(associationId) {
        return new Promise((resolve, error)  => {

            this.web3.eth.getAccounts().then(accounts => {
                
                var acc = accounts[0];
                console.log("getAssociationMembersData.methods.get ", acc, associationId);

                var associationStoreVar = new this.web3.eth.Contract(
                    AssociationStore.abi, 
                    "0x21f16c8fc16d012D23f9B97253aAEB6C357c9Cd2");
                
                associationStoreVar.methods
                    .getCountMembersByAssociationId(associationId).call({ 
                        from: acc
                    })
                    .then(maxValue => {
                        console.log("maxValue ", maxValue);
                        var resolvedPromisesArray = [];

                        for(var countMember = 1; countMember <= maxValue; countMember++) {
                            console.log("Info member : ", countMember);
                            resolvedPromisesArray.push(this.getAssociationMemberDataById(
                                associationId, 
                                countMember));
                            console.log("resolved : ",resolvedPromisesArray);
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

    async getAssociationData() {
        return new Promise((resolve, error)  => {

            this.web3.eth.getAccounts().then(accounts => {
                
                var acc = accounts[0];
                console.log("associationStoreVar.methods.get ", acc);

                console.log("this.associationStoreVar ", associationStoreVar);

                var associationStoreVar = new this.web3.eth.Contract(
                    AssociationStore.abi, 
                    "0x21f16c8fc16d012D23f9B97253aAEB6C357c9Cd2");
                
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
                    "0x21f16c8fc16d012D23f9B97253aAEB6C357c9Cd2");
                
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

    async getAssociationMemberDataById(
        associationid, 
        memberId) {
        return new Promise((resolve, error) => {
            
            this.web3.eth.getAccounts().then(accounts => {
                var acc = accounts[0];
                console.log("getAssociationMemberDataById.methods.get ", memberId);

                var associationStoreVar = new this.web3.eth.Contract(
                    AssociationStore.abi, 
                    "0x21f16c8fc16d012D23f9B97253aAEB6C357c9Cd2"
                );

                console.log("start request address ", memberId);
                associationStoreVar.methods
                .getMemberPropertyById(
                    associationid,
                    memberId,
                    "address").call({ 
                    from: acc
                })
                .then(address => {
                    console.log("start request address ", address);
                    associationStoreVar.methods
                    .getMemberPropertyById(
                        associationid,
                        memberId,
                        "role").call({ 
                        from: acc
                    })
                    .then(role => {
                        
                        console.log("start request role ", role);
                        associationStoreVar.methods
                        .getMemberPropertyById(
                            associationid,
                            memberId,
                            "quota").call({ 
                            from: acc
                        })
                        .then(quota => {

                            console.log("start request quota ", quota);
                            associationStoreVar.methods
                            .getMemberPropertyById(
                                associationid,
                                memberId,
                                "votingRights").call({ 
                                from: acc
                            })
                            .then(votingRights => {

                                console.log("start request votingRights ", votingRights);
                                associationStoreVar.methods
                                .getMemberPropertyById(
                                    associationid,
                                    memberId,
                                    "name").call({ 
                                    from: acc
                                })
                                .then(name => {

                                    console.log("start request name ", name);
                                    associationStoreVar.methods
                                    .getMemberPropertyById(
                                        associationid,
                                        memberId,
                                        "taxId").call({ 
                                        from: acc
                                    })
                                    .then(taxId => {

                                        console.log("start request taxId ", taxId);
                                        var jsonReturn = {
                                            "address" : address,
                                            "Status" : role,
                                            "Quota" : quota,
                                            "VotingRights" : votingRights,
                                            "MemberName" : name,
                                            "TaxID" : taxId
                                        };

                                        resolve(jsonReturn);
                                    });
                                });
                            });
                        });
                    });
                });
            });

        });
     
    }


    async getAssociationDataById(id) {
        return new Promise((resolve, error) => {
            
            this.web3.eth.getAccounts().then(accounts => {
                var acc = accounts[0];
                console.log("associationStoreVar.methods.get ", acc);

                var associationStoreVar = new this.web3.eth.Contract(
                    AssociationStore.abi, 
                    "0x21f16c8fc16d012D23f9B97253aAEB6C357c9Cd2");

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
                                    "AssociationId" : associationId
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
                    "0x21f16c8fc16d012D23f9B97253aAEB6C357c9Cd2");

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
                    "0x21f16c8fc16d012D23f9B97253aAEB6C357c9Cd2");

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
                                            .getPropertyById(id,"members").call({ 
                                                from: acc
                                            })
                                            .then(detail => {
                                                associationStoreVar.methods
                                                .getPropertyById(id,"durataContratto").call({ 
                                                    from: acc
                                                })
                                                .then(durataContratto => {
                                                    associationStoreVar.methods
                                                    .getPropertyById(id,"id").call({ 
                                                        from: acc
                                                    })
                                                    .then(associationId => {

                                                        associationStoreVar.methods
                                                        .getPropertyById(id,"managementEntity").call({ 
                                                            from: acc
                                                        })
                                                        .then(managementEntity => {

                                                            associationStoreVar.methods
                                                            .getPropertyById(id,"sharedFund").call({ 
                                                                from: acc
                                                            })
                                                            .then(sharedFund => {

                                                                associationStoreVar.methods
                                                                .getPropertyById(id,"fondoComune").call({ 
                                                                    from: acc
                                                                })
                                                                .then(fondoComune => {

                                                                    var _detail = detail.replace(/\0/g, '').replaceAll("-","\n\r")
                                                                    console.log(`detail before ${detail} vs after ${_detail}`)
                                                                    var jsonReturn = {
                                                                        "businessNetworkName" : businessNetworkName,
                                                                        "taxId" : taxId,
                                                                        "yourRole" : role,
                                                                        "businessNetworkId" : businessNetworkId,
                                                                        "address" : address,
                                                                        "adminRole" : adminRole.replace(/\0/g, '').replaceAll("-","\n\r"),
                                                                        "businessCode" : businessCode,
                                                                        "detail" : _detail,
                                                                        "associationId" : associationId,
                                                                        "durataContratto" : durataContratto,
                                                                        "managementEntity" : managementEntity,
                                                                        "sharedFund": sharedFund,
                                                                        "fondoComune": fondoComune
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
                    });
                });
            });
        });
    }
}