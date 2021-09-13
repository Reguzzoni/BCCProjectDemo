import React from 'react';
import styled from 'styled-components'

const BarParent = styled.div`
  
  a {
    text-decoration: none;
  }

  & > div {
    width: 100%;
    height: 30px;
  }

  margin: 25px 0px;
`;


class Nav extends React.Component {

  render() {
      return (
          <BarParent >
            <div >
                <h1>BCC Studio - BC Business Network Contract</h1>  
            </div>
          </BarParent>
      );
  }
}
export default Nav;
