import React from 'react'
import * as LivePhotosKit from 'livephotoskit'
import styled from 'styled-components'
import { Box } from 'rebass'

const StyledLivePhoto = styled(Box)`
  height: 500px;
  width: 800px;
`

const LivePhoto = props => (
  <StyledLivePhoto
    data-live-photo
    data-photo-src={props.photoSrc}
    data-video-src={props.videoSrc}
  />
)

export default LivePhoto
