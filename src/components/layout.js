import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Container } from 'rebass'
import { injectGlobal } from 'styled-components'

import Header from './Header'
import Footer from './Footer'

injectGlobal`
  * { box-sizing: border-box; }
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
html {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
}
body { margin: 0; }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        {/* <Header /> */}
        <Container>{children}</Container>
        {/* <Footer /> */}
      </Container>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
