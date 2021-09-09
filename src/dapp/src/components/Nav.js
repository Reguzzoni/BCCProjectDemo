import React from 'react';
import styled from 'styled-components'
import MetamaskService from '../MetamaskService';

const BarParent = styled.div`
  
  a {
    text-decoration: none;
  }

  & > div {
    width: 100vh;
    height: 40px;
  }

  margin: 10px 25px;
`;

 const BarItem = styled.div`
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

class Nav extends React.Component {


  render() {
      return (
          <BarParent >
            <div >
                <h2>BCC Studio - BC Business Network Contract</h2>
            </div>
          </BarParent>
      );
  }
}
export default Nav;
