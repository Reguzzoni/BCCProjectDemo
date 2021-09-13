import React from 'react';
import styled from 'styled-components'
import MetamaskGetAddress from '../MetamaskGetAddress';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const BarParent = styled.div`
  
  a {
    text-decoration: none;
  }

  & > div {
    width: 100%;
    height: 40px;
  }

  margin: 50px 0px;
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
          <BarParent>
            <div style={{
              display:"flex",
              alignSelf:"flex-end",
              justifyContent: "flex-start", 
              alignItems: "flex-end"}}>
                <h4>
                  Metamask account connected : 
                </h4>
                <h4 style={{
                    fontSize: "30px",
                    margin : "0px 0 7px 20px"
                  }}> {this.state.ethAddress}
                </h4>
            </div>
          </BarParent>
      );
  }
}
export default NavEthAddress;
