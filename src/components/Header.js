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
        color="gray"
        flexDirection="column"
        alignItems="flexStart"
        pt={4}
        mt={4}
      >
        <Lead>{data.site.siteMetadata.title}</Lead>
      </Toolbar>
    )}
  />
)

export default Header
