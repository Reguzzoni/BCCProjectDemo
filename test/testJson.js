var JsonStore = artifacts.require('./JsonStore.sol');

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

        this.contract = await JsonStore.new(
            {
                from: owner
            });

        let testStringSaved = "Test String json saved";
        try {
            console.log("try to save string")
            await this.contract.set(testStringSaved, {"from":owner1});
            console.log("try to save string - SUCCESS")
        } catch(error) {
            console.log("Error into save test : ", error);
        }

        let testStringSavedPersisted;
        try {
            console.log("try to get string")
            testStringSavedPersisted = await this.contract.get({"from":owner1});
            console.log("try to get string - SUCCESS")
        } catch(error) {
            console.log("Error into get test : ", error);
        }

        console.log("testStringSavedPersisted ", testStringSavedPersisted);

        assert.equal(testStringSavedPersisted, testStringSaved, "Error with mocha save test");
    });

    it(`mocha save test 2`, async function () {

        this.contract = await JsonStore.new(
            {
                from: owner
            });

        let testStringSaved = "Test String json saved";
        try {
            console.log("try to save string")
            await this.contract.set(testStringSaved, {"from":owner1});
            console.log("try to save string - SUCCESS")
        } catch(error) {
            console.log("Error into save test : ", error);
        }

        let testStringSavedPersisted;
        try {
            console.log("try to get string")
            testStringSavedPersisted = await this.contract.get({"from":owner2});
            console.log("try to get string - SUCCESS")
        } catch(error) {
            console.log("Error into get test : ", error);
        }

        console.log("testStringSavedPersisted ", testStringSavedPersisted);

        assert.equal(testStringSavedPersisted, "", "Must be empty");
    });

});
