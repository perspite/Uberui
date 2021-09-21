import React from 'react';
import { HeaderContainer, Question, User } from './HeaderElements';

const Header = () => {
  return (
    <HeaderContainer>
      <h1>UBER</h1>
      <p>For Business</p>
      <Question/>
      <User/>
    </HeaderContainer>
  );
};

export default Header;
