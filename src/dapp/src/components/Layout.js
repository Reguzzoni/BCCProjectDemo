import React from 'react';
import Routes from "../routes";
import Sidebar from "./Sidebar";
import styled from 'styled-components'
import Nav from "./Nav";
import "./layout.scss";

function Layout(props) {
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

export default Layout;

const SidebarMargin = styled.div` 
  & > div {
    margin: 0px 50px 0px 50px;
    width: 100%
  }
`;
