import Web3 from 'web3';

export default {
    
    async connectToMetamask() {

        this.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
        console.log("web3 - ", this.web3);
        console.log("window - ", window);
        console.log("window.ethereum - ", window.ethereum);
        console.log("window.web3 - ", window.web3);
        var web3Var = this.web3;

        return new Promise(resolve => {
            // Modern DApp Browsers -  it s a new way to connect metamask on web3 cause It's deprecated 
            if (window.ethereum) {
                console.log("window.ethereum ", window.ethereum);
                web3Var = new Web3(window.ethereum);
                try { 

                    window.ethereum.enable().then(function() {
                        // User has allowed account access to DApp...
                        console.log("Connected ", web3Var.eth.net)

                        // is metamask connected
                        web3Var.eth.net.isListening().then((value, error) => {
                            console.log('is connected', value, error)

                            // is wallet connected
                            web3Var.eth.getAccounts().then(accountsConnected => {
                                if(accountsConnected[0]){
                                    console.log("resolve account ", accountsConnected[0])
                                    resolve(accountsConnected[0]);
                                }
                            });
                        })
                    .catch(e => console.log('Failed connection: '+ e));
                });
                } catch(e) {
                // User has denied account access to DApp...
                    console.log("e ", e)
                }
            }
            // Legacy DApp Browsers
            else if (window.web3) {
                web3Var = new Web3(web3Var.currentProvider);
                console.log("window.web3 ", window.web3);
            }
            // Non-DApp Browsers
            else {
                alert('You have to install MetaMask !');
            }

            
        });
        
    },

}
