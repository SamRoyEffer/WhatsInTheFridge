import React from 'react';
import styled from 'styled-components';
import './BurgerOptions.scss';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.2 ease-in-out;

    li {
      color: #fff;
    }
  }
`;
const BurgerOptions = ({ open }) => {
  return (
    <Ul open={open}>
      <button className='navButton'>Login</button>
      <button className='navButton'>Register</button>
    </Ul>
  )
}

export default BurgerOptions