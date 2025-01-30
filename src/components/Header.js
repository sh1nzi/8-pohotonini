import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 20px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Личный Блог</h1>
      <p>Добро пожаловать на мою страницу. Здесь я делюсь своими мыслями и опытом!</p>
    </HeaderContainer>
  );
};

export default Header;
