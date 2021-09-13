import Web3 from 'web3';

var thisVar;

export default {

    async getAddress() {
        thisVar = this;
        this.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
        console.log("web3 - ", this.web3);
        console.log("window - ", window);
        console.log("window.ethereum - ", window.ethereum);
        console.log("window.web3 - ", window.web3);
        
        return new Promise((resolve, reject) => {
            try {
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

                console.log("Start checking metamask");

                thisVar.web3.eth.getAccounts(function (error, accounts) {
                    var myaccount = accounts[0];
                    console.log("account ", myaccount);
                    
                    resolve(myaccount);
                });
                        
            } catch(error) {
                console.log("error ", error);
            }
              
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