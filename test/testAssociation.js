//var JsonStore = artifacts.require('./JsonStore.sol');
var AssociationStore = artifacts.require('./AssociationStore.sol');

contract('Contract Tests', async (accounts) => {

    // define objects to share with tests
    let owner = accounts[0];
    let owner1 = accounts[1];
    let owner2 = accounts[2];


    /****************************************************************************************/
    /* Operations and Settings                                                              */
    /****************************************************************************************/

    //1
    it(`mocha save test`, async function () {

        this.contract = await AssociationStore.new(
            {
                from: owner
            });

        let testStringSaved;
        try {
            console.log("try to getJsonContentByNetworkContract string")
            testStringSaved = await this.contract.getPropertyById(1, "businessNetworkName", {from: owner1});
            console.log("try to save string - SUCCESS")
        } catch(error) {
            console.log("Error into getJsonContentByNetworkContract test : ", error);
        }

        console.log("testStringSavedPersisted ", testStringSaved);
    });

    it(`mocha getCount test`, async function () {

        this.contract = await AssociationStore.new(
            {
                from: owner
            });

        let getCount;
        try {
            console.log("try to getCount")
            getCount = await this.contract.getCountTotalId({from: owner1});
            console.log("try to getCount - SUCCESS")
        } catch(error) {
            console.log("Error into getCount test : ", error);
        }

        console.log("try to get count ", getCount);
    });

    it(`mocha getMyCount test`, async function () {

        this.contract = await AssociationStore.new(
            {
                from: owner
            });

        let getCount;
        try {
            console.log("try to getMyCount")
            getCount = await this.contract.getMyIds({from: "0xdcc52FC934d151fbcafA412b29FA8565A6A98B60"});
            console.log("try to getMyCount - SUCCESS")
        } catch(error) {
            console.log("Error into getMyCount test : ", error);
        }

        console.log("try to get getMyCount ", getCount);
    });


    it(`mocha get role test`, async function () {

        this.contract = await AssociationStore.new(
            {
                from: owner
            });

        let role;
        try {
            console.log("try to get role string")
            role = await this.contract.getPropertyById(1, "role", {from:  "0xdcc52FC934d151fbcafA412b29FA8565A6A98B60"});
            console.log("try to get role string - SUCCESS")
        } catch(error) {
            console.log("Error into get role test : ", error);
        }

        console.log("get role ", role);
    });

    
    it(`mocha get members info test`, async function () {

        this.contract = await AssociationStore.new(
            {
                from: owner
            });

        let memberInfo;
        try {
            console.log("try to get members string")
            memberInfo = await this.contract.getMemberPropertyById(
                1,
                1, 
                "quota",
                {
                     from:  "0xdcc52FC934d151fbcafA412b29FA8565A6A98B60"
                });
            console.log("try to get members string - SUCCESS")
        } catch(error) {
            console.log("Error into get members test : ", error);
        }

        console.log("get members ", memberInfo);
    });
});
