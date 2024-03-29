import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import {Link} from "react-router-dom";
import SidebarItems from "./SidebarItemsMenu";

function Sidebar(props, {defaultActive,}) {
    console.log("isAdmin ", props)
    const location = props.history.location;
    const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

    function changeActiveIndex(newIndex) {
        localStorage.setItem("lastActiveIndex", newIndex)
        setActiveIndex(newIndex)
    }

    function getPath(path) {
        if (path.charAt(0) !== "/") {
            return  "/" + path;
        }
        return path;
    }

    useEffect(()=> {
        const activeItem = SidebarItems.findIndex(item=> getPath(item.route) === getPath(location.pathname))
        changeActiveIndex(activeItem);
    }, [location])

    return (
            <SidebarParent>
                <div>
                    {
                        SidebarItems.map( (item, index) => {
                          if(item.name=="Admin") {
                            if(props.isAdmin==true) {
                              return (
                                    <Link to={item.route}>
                                        <SidebarItem key={item.name}
                                                    active={index === activeIndex}
                                        >
                                            <p>{item.name}</p>
                                        </SidebarItem>
                                    </Link>
                              );
                            }
                           } 
                           else {
                              return (
                                <Link to={item.route}>
                                    <SidebarItem key={item.name}
                                                active={index === activeIndex}
                                    >
                                        <p>{item.name}</p>
                                    </SidebarItem>
                                </Link>
                              );
                          }
                        })
                    }
                </div>
                <div className="behind-the-scenes"/>
            </SidebarParent>
    );
}

export default Sidebar;

const SidebarParent = styled.div`
  background: #cf3d2a;
  
  a {
    text-decoration: none;
  }
  
  & > div {
    width: 25vh;
  }
  
  .behind-the-scenes {
    width: 25vh;
  }
`;

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  background: ${props => props.active ? "#b15b00" : ""};
  margin: 4px 12px;
  border-radius: 4px;

  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
  
  &:hover {
    cursor:pointer;
  }
  
  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;
