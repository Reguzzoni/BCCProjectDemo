import Web3 from 'web3';

class MetamaskService {
    
    constructor() {
        this.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
        if (window.ethereum) {
            this.web3 = new Web3(window.ethereum);
        }
        // Legacy DApp Browsers
        else if (window.web3) {
            this.web3 = new Web3(this.web3.currentProvider);
        }
        // Non-DApp Browsers
        else {
            alert('You have to install MetaMask !');
        }
    }

    async connectToMetamask() {
        return new Promise(resolve => {
            // Modern DApp Browsers -  it s a new way to connect metamask on web3 cause It's deprecated 
            
            // is metamask connected
            this.web3.eth.net.isListening().then(() => {
                console.log('is connected')

                // is wallet connected
                this.web3.eth.getAccounts().then(accountsConnected => {
                    if(accountsConnected[0]){
                        console.log("resolve account ", accountsConnected[0])
                        resolve(accountsConnected[0]);
                    }
                });
            })
            .catch(e => console.log('Failed connection: '+ e));
        });
    }
  }
    
  export default MetamaskService;