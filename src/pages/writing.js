import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Caps, Measure, Truncate } from 'rebass'
import Layout from '../components/layout'
import Img from 'gatsby-image'

const Post = () => (
  <Box>
    <Heading>title</Heading>
    <Caps>date</Caps>
    <Measure>
      <Truncate>
        This is the beginning of the blog post. Eventually it gets cut off.
      </Truncate>
    </Measure>
    {/* <Img /> */}
  </Box>
)

const Writing = () => (
  <Layout>
    <Post />
  </Layout>
)

export default Writing
