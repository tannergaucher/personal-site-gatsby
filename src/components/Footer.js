import React from 'react'
import { Toolbar, Lead } from 'rebass'
import { graphql, StaticQuery } from 'gatsby'

const Footer = ({ data }) => (
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
        mb={4}
      >
        {/* <Lead>{data.site.siteMetadata.title}</Lead> */}
      </Toolbar>
    )}
  />
)

export default Footer
