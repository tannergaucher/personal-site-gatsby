import React from 'react'
import { StaticQuery } from 'gatsby'
import { Toolbar as toolbar, Lead } from 'rebass'
import styled from 'styled-components'

const StyledHeader = styled.div``

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
      <StyledHeader>
        <h1>{data.site.siteMetadata.title}</h1>
      </StyledHeader>
    )}
  />
)

export default Header
