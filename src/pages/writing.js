import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Caps,
  Measure,
  Truncate,
  Link,
  Subhead,
  Container,
  Flex,
} from 'rebass'
import Layout from '../components/layout'
// import Img from 'gatsby-image'

const Writing = props => (
  <Layout>
    <Container maxWidth="650px" mt={6}>
      {/* POST */}
      {props.data.allMarkdownRemark.edges.map(({ node }) => (
        <Box id={node.id} mt={4} bg="#fafafa">
          <Flex flexDirection="column" alignItems="center">
            <Link to={node.fields.slug}>
              <Subhead pt={2}>{node.frontmatter.title}</Subhead>
            </Link>
            <Caps mt={2} pt={2}>
              {node.frontmatter.date}
            </Caps>
            <Measure mt={2} pt={2} pb={4}>
              <Truncate>{node.excerpt}</Truncate>
            </Measure>
          </Flex>
        </Box>
      ))}
      {/* POSTS COUNT */}
      {/* <Caps mt={2} color="grey">
        {props.data.allMarkdownRemark.totalCount} more posts
        <Arrow direction="down" />
      </Caps> */}
    </Container>
  </Layout>
)

export default Writing

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
