import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GlobalFooter = () => (
  <Wrapper>
    <List>
      <Tab>
        <Link to="/">HOME</Link>
      </Tab>
      <Tab>
        <Link to="/login">LOGIN</Link>
      </Tab>
      <Tab>
        <Link to="/search">SEARCH</Link>
      </Tab>
      <Tab>
        <Link to="/list">LIST</Link>
      </Tab>
    </List>
  </Wrapper>
);

const Wrapper = styled.ul`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  border-top: 1px solid #e3e3e3;
`;

const List = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tab = styled.li`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:first-child) {
    border-left: 1px solid #e3e3e3;
  }
`;

export default GlobalFooter;
