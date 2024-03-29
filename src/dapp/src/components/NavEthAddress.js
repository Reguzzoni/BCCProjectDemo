import React from 'react';
import styled from 'styled-components'
import MetamaskGetAddress from '../MetamaskGetAddress';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "./nav.scss"

const BarParent = styled.div`
  
  a {
    text-decoration: none;
  }

  & > div {
    width: 100%;
    height: 40px;
  }

  margin: 0 0px 2%;
`;


class NavEthAddress extends React.Component {

  constructor (props){
    super(props);
    
    this.state = {
      ethAddress: ""
    };

    this.getEthAddressMetamaskConnected();
  }

  async getEthAddressMetamaskConnected() {
    console.log("getEthAddressMetamaskConnected start")
    var addressConnected = await MetamaskGetAddress.getAddress();
    this.setState({ethAddress: addressConnected});
    console.log("addressConnected ", addressConnected)
    return addressConnected;
  }

  render() {
      return (
            <div className = "barParentNavEth">
                <h4 style={{
                    marginRight: "2vw"
                  }}>
                  Metamask account connected 
                </h4>
                <h4 style={{
                    fontSize: "3vh",
                  }}> {this.state.ethAddress}
                </h4>
            </div>
      );
  }
}
export default NavEthAddress;
