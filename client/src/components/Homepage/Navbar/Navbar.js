import React from 'react';
import Burger from './Burger';
import styled from 'styled-components';
import "./Navbar.scss";

const Nav = styled.nav`
width: 100%;
height: 50px;
border-bottom: 2px solid #f1f1f1;
display: flex;
justify-content: space-between;
.logo {
  padding: 15px 0;
}
`;
 
export default function Navbar(props) {
  //console.log('propsfromnaavbar',props)
  return (
    <Nav>
      <div className="logo projectName">
        What's in the Fridge? <img className='fridgeIcon' src='icons/mini.png' alt='fridge-icon'/>
      </div>
      <Burger {...props}/>
    </Nav>
  )
}