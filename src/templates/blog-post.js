import React from 'react'
import { graphql } from 'gatsby'
import { Container, Heading, Text, Caps } from 'rebass'
import Header from '../components/Header'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <Header />
      <Container maxWidth="700px">
        <Heading mt={6}>{post.frontmatter.title}</Heading>
        <Caps mt={2}>{post.frontmatter.date}</Caps>
        <Text mt={4}>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Text>
      </Container>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
