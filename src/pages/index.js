import React from 'react'
import Layout from '../components/layout'
import { Container, Samp, Caps, Flex, Measure } from 'rebass'
import { Link } from 'gatsby'

export default ({ data }) => {
  console.log('data', data)
  return (
    <Layout>
      <Container maxWidth="800px" mt={[4, 6]}>
        <h6>{data.allMarkdownRemark.totalCount} posts</h6>
        <Flex flexWrap="wrap" justifyContent="center">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            //post
            <div key={node.id}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              <Samp>
                <Caps>{node.frontmatter.date}</Caps>
              </Samp>
              <Measure>{node.excerpt}</Measure>
            </div>
          ))}
        </Flex>
      </Container>
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
