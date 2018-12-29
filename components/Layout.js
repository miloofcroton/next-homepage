import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Meta from './Meta';
import Header from './Header';

import { theme, GlobalStyle } from './constants';


const LayoutDiv = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #DDD;
`;

const Inner = styled.div`
  margin: 0 auto;
`;

class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <LayoutDiv>
          <Meta />
          <GlobalStyle />
          <Header />
          <Inner>{this.props.children}</Inner>
        </LayoutDiv>
      </ThemeProvider>
    );
  }
}

export default Layout;
