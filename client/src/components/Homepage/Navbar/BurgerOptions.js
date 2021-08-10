import React from "react";
import styled from "styled-components";
import "./BurgerOptions.scss";


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #ffc857;
    border-style: solid;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    transition: transform 0.2 ease-in-out;
    z-index: 20;

    li {
      color: #fff;
    }
  }
`;

export default function BurgerOptions({ open, ...props }) {
  const onFridge = { ...props }.onFridge;
  const onHome = { ...props }.onHome;
  return (
    <Ul open={open}>
      <button className="navButton" onClick={onHome}>Home</button>
      <button className="navButton" onClick={onFridge}>
        Fridge
      </button>
      <button className="navButton">Logout</button>
    </Ul>
  );
}
