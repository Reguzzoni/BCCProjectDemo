import React from 'react';
import Routes from "../routes";
import Sidebar from "./SidebarMenu";
import styled from 'styled-components'
import Nav from "./Nav";
import "./layout.scss";

function LayoutMenu(props) {
    return (
        <div>
                <div className="mainWrapper">
                    <Sidebar history={props.history}/>
                    
                    <SidebarMargin>
                    <div>
                        <Nav/>
                        {props.children}
                    
                    </div>
                    </SidebarMargin>
                </div>
        </div>
    );
}

export default LayoutMenu;

const SidebarMargin = styled.div` 
  & > div {
    margin: 0px 50px 0px 50px;
    width: 100%
  }
`;
