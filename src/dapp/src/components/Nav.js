import React from 'react';
import styled from 'styled-components'
import logo from '../resource/logo.png'; // Tell webpack this JS file uses this image
import "./nav.scss";

class Nav extends React.Component {

  render() {
      return (
            <div 
              className = "barParent"
              style={{
              display:"flex",
              alignItems: 'center',}}>
                <img src={logo} alt="Logo" />
                <h1 style={{ marginLeft: '50px' }}> BCC Studio - BC Business Network Contract</h1>  
            </div>
      );
  }
}
export default Nav;
