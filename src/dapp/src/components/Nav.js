import React from 'react';
import styled from 'styled-components'
import logo from '../resource/logo.png'; // Tell webpack this JS file uses this image

const BarParent = styled.div`
  
  a {
    text-decoration: none;
  }

  & > div {
    width: 100%;
    height: 1%;
  }

  margin: 25px 0px;
`;


class Nav extends React.Component {

  render() {
      return (
          <BarParent >
            <div 
              className = "bar"
              style={{
              display:"flex",
              alignItems: 'center',}}>
                <img src={logo} alt="Logo" />
                <h1 style={{ marginLeft: '50px' }}> BCC Studio - BC Business Network Contract</h1>  
            </div>
          </BarParent>
      );
  }
}
export default Nav;
