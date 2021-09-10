import Config from './config.json';
import Web3 from 'web3';

var thisVar;

export default {

    async getTrxHistory() {
        thisVar = this;
        this.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
        console.log("web3 - ", this.web3);
        console.log("window - ", window);
        console.log("window.ethereum - ", window.ethereum);
        console.log("window.web3 - ", window.web3);

        return new Promise((resolve, reject) => {

            // Modern DApp Browsers -  it s a new way to connect metamask on web3 cause It's deprecated 
            if (window.ethereum) {
                thisVar.web3 = new Web3(window.ethereum);
                try {
                    window.ethereum.enable().then(function () {
                        // User has allowed account access to DApp...
                    });
                } catch (e) {
                    // User has denied account access to DApp...
                }
            }
            // Legacy DApp Browsers
            else if (window.web3) {
                this.web3 = new Web3(this.web3.currentProvider);
            }
            // Non-DApp Browsers
            else {
                alert('You have to install MetaMask !');
            }

            this.web3.eth.net.isListening()
                .then(() => {
                    console.log('is connected');
                    console.log("this.web3 : ", this.web3);

                    thisVar.web3.eth.getAccounts(function (error, accounts) {
                        var myaccount = accounts[0];
                        console.log("account ", myaccount);

                        thisVar.web3.eth.getBlockNumber().then((endBlockNumber, error) => {
                            if (error) {
                                console.log("Error into blocknumber ", error);
                            } else {
                                console.log("Using endBlockNumber: " + endBlockNumber);

                                var startBlockNumber = endBlockNumber - 10;
                                console.log("Using startBlockNumber: " + startBlockNumber);

                                console.log("Searching for transactions to/from account \""
                                    + myaccount + "\" within blocks " + startBlockNumber + " and " + endBlockNumber);

                                var promiseArray = [];
                                for (var i = startBlockNumber; i <= endBlockNumber; i++) {
                                    
                                    if (i % 10 == 0) {
                                        console.log("Searching block " + i);
                                    }

                                    promiseArray.push(
                                        new Promise(resolvePromise => {
                                            //var block = thisVar.web3.eth.getBlock(i, true);
                                            thisVar.web3.eth.getBlock(i, true).then(block => {
                                                //console.log("block : ", block);

                                                if (block != null && block.transactions != null) {
                                                    block.transactions.forEach(function (e) {
                                                        if (myaccount == "*" || myaccount == e.from || myaccount == e.to) {
                                                            console.log("  tx hash          : " + e.hash + "\n"
                                                                + "   nonce           : " + e.nonce + "\n"
                                                                + "   blockHash       : " + e.blockHash + "\n"
                                                                + "   blockNumber     : " + e.blockNumber + "\n"
                                                                + "   transactionIndex: " + e.transactionIndex + "\n"
                                                                + "   from            : " + e.from + "\n"
                                                                + "   to              : " + e.to + "\n"
                                                                + "   value           : " + e.value + "\n"
                                                                + "   time            : " + block.timestamp
                                                                + " " + new Date(block.timestamp * 1000).toGMTString() + "\n"
                                                                + "   gasPrice        : " + e.gasPrice + "\n"
                                                                + "   gas             : " + e.gas + "\n"
                                                                + "   input           : " + e.input);

                                                            var trx = {
                                                                ID: e.transactionIndex ,
                                                                FROM: e.from ,
                                                                TO: e.to ,
                                                                AMOUNT: e.value,
                                                                TIME: new Date(block.timestamp * 1000).toGMTString(),
                                                                GAS: e.gasPrice,
                                                                BLOCK_NUMBER: e.blockNumber,
                                                                HASH: e.hash
                                                                };

                                                            resolvePromise(trx);
                                                        }
                                                    })
                                                }
                                            });
                                        })
                                    );

                                    (async () => {
                                        resolve (await Promise.all(promiseArray));
                                    })();
                                }
                            }
                        });
                    });

                })
                .catch(e => console.log('Failed connection: ' + e));
        });
    }
}

/*
    export default Contract = async () => {
        if (window.ethereum) { //check if Metamask is installed
              try {
                  const address = await window.ethereum.enable(); //connect Metamask
                  const obj = {
                          connectedStatus: true,
                          status: "",
                          address: address
                      }
                      return obj;

              } catch (error) {
                  return {
                      connectedStatus: false,
                      status: "🦊 Connect to Metamask using the button on the top right."
                  }
              }

        } else {
              return {
                  connectedStatus: false,
                  status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html"
              }
            }
      };
*/