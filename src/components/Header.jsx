import React from 'react';
import { styled } from 'styled-components';

function Header() {
  // styled
  const StyledHeader = styled.h1`
    padding: 10px;
    background-color: #044704;
    color: white;
  `;

  return (
    <>
      <StyledHeader>redux-todolist</StyledHeader>
    </>
  );
}

export default Header;
