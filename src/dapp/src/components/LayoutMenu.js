import React from 'react';
import Routes from "../routes";
import Sidebar from "./SidebarMenu";
import styled from 'styled-components'
import Nav from "./Nav";
import NavEthAddress from "./NavEthAddress";
import "./layout.scss";

function LayoutMenu(props) {
    
    return (
      <div className="view">
              <div className="mainWrapper">
                  <Sidebar className="sideBar"
                   history={props.history}/>
                  
                  <div className="sidebarMargin">
                    <div className="SideMarginChild">
                        <Nav/>
                          <NavEthAddress/>
                        {props.children}
                    
                    </div>
                  </div>
              </div>
      </div>
  );
}

export default LayoutMenu;

