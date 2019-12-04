import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <TopBar>
      <Logo>
        <Link to="/">G2 Prototypes</Link>
      </Logo>
    </TopBar>
  );
}

const TopBar = styled.div`
  position: fixed;
  display: flex;
  padding: 8px 20px;
  height: 48px;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: white;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;

  a {
    text-decoration: none;
    padding: 8px 0;
    display: block;
    color: black;
  }
`;
