import App, { Container } from 'next/app'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

const Body = styled.div`
  max-width: 1440px;
  margin: auto;
`;

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Body>
            <Component {...pageProps} />
          </Body>
        </ThemeProvider>
      </Container>
    )
  }
}
