import React from 'react';
import Routes from "../routes";
import Sidebar from "./SidebarMenu";
import styled from 'styled-components'
import Nav from "./Nav";
import NavEthAddress from "./NavEthAddress";
import "./layout.scss";

function LayoutMenu(props) {
    console.log("layout menu isAdmin ", props.inputIsAdmin)
    return (
      <div className="view">
              <div className="mainWrapper">
                  <Sidebar className="sideBar"
                   isAdmin = {props.inputIsAdmin}
                   history={props.history}/>
                  
                  <div className="sidebarMargin">
                  <div className="SideMarginHeader">
                      <div className="Header">
                      <Nav/>
                      <NavEthAddress/>
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

export default LayoutMenu;

