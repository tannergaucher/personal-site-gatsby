import React from 'react'
import { StaticQuery } from 'gatsby'
import { Toolbar, Lead } from 'rebass'

const Header = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Toolbar
        bg="#fafafa"
        color="white"
        alignItems="center"
        pt={4}
        justifyContent="flex-start"
      >
        <Lead>{data.site.siteMetadata.title}</Lead>
      </Toolbar>
    )}
  />
)

export default Header
