import React from 'react'
import styled from 'styled-components'

import {
  Container,
  Heading,
  Divider,
  Caps,
  Measure,
  Arrow,
  Subhead,
  Truncate,
  Box,
} from 'rebass'

import { Link as link } from 'gatsby'
import Layout from '../components/layout'

// Page level style-sheet move to seperate styles folder
const StyledIndex = styled.div`
  a {
    color: black;
    text-decoration: none;

    &:hover {
      color: fuchsia;
      /* delay */
    }
  }
`

const Link = styled(link)`
  color: black;
  text-decoration: none;
`

export default ({ data }) => {
  return (
    <Layout>
      <StyledIndex>
        <Container maxWidth={['500px', '600px', '790px']}>
          <Heading fontSize={[5, 6, 6]} mt={[3, 4]}>
            Tanner Gaucher
          </Heading>
          <Heading fontSize={[5, 6, 6]} color="grey">
            Developer
          </Heading>
          <Divider />
          <Heading fontSize={[5, 6, 6]}>
            <a href="https://github.com/tannergaucher" target="_blank">
              Github
            </a>
          </Heading>
          <Heading fontSize={[5, 6, 6]}>
            <Link to="writing">Writing</Link>
          </Heading>
          <Heading fontSize={[5, 6, 6]}>
            <Link to="/contact">Contact</Link>
          </Heading>
          <Divider />
          <Heading fontSize={[5, 6, 6]}>
            <a to="/miracle-morning">Six Minute Morning</a>
          </Heading>
          <Heading fontSize={[5, 6, 6]}>
            <a href="https://mrkdwn.netlify.com" target="_blank">
              Markdown Previewer
            </a>
          </Heading>
          <Heading fontSize={[5, 6, 6]}>
            <a to="/smart-pomo">Data Driven Pomodoro</a>
          </Heading>
          <Heading fontSize={[5, 6, 6]}>
            <a href="https://media-journal.netlify.com" target="_blank">
              Photo Journal
            </a>
          </Heading>
          <Divider />
        </Container>
      </StyledIndex>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
