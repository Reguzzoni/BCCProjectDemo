import Config from './config.json';
import Web3 from 'web3';

export default {

    
    async getWalletAddressConnected(network) {
        console.log("accounts : ", this.web3.eth.getAccounts());
        return this.web3.eth.getAccounts();
    },
    
    async connectToMetamask(network) {
        
        var config = Config[network];
        this.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
        console.log("web3 - ", this.web3);
        console.log("window - ", window);
        console.log("window.ethereum - ", window.ethereum);
        console.log("window.web3 - ", window.web3);
        
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
            this.web3 = new Web3(this.web3.currentProvider);
        }
        // Non-DApp Browsers
        else {
            alert('You have to install MetaMask !');
        }

        this.web3.eth.net.isListening()
        .then(() => console.log('is connected'))
        .catch(e => console.log('Failed connection: '+ e));
        
        console.log("this.web3 : ", this.web3);

        this.owner = null;
        console.log("account 0 : ", this.web3.eth.accounts[0]);
        return this.web3.eth.accounts[0];
    },

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