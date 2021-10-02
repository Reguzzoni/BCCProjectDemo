import React from 'react';
import Routes from "../routes";
import Sidebar from "./SidebarLogin";
import styled from 'styled-components'
import Nav from "./Nav";
import NavEthAddress from "./NavEthAddress";
import "./layout.scss";

function LayoutLogin(props) {
    
    return (
      <div className="view">
              <div className="mainWrapper">
                  <Sidebar className="sideBar"
                   history={props.history}/>
                  
                  <div className="sidebarMargin">
                  <div className="SideMarginHeader">
                      <div className="Header">
                      <Nav/>
                      </div>
                  </div>
                  <div className="SideMarginChild">
                        {props.children}
                    </div>
                  </div>
              </div>
      </div>
  );
}

export default LayoutLogin;

