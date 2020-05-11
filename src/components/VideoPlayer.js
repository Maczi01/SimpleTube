import styled from "styled-components";
import React from "react";
import Plyr from "plyr";

const VideoPlayerWrapper = styled.div`
  padding: 10px;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 60vw;
  height: 80vh;
  border: 2px solid black;
  background-color: white;
  box-shadow: 0 20px 40px -5px rgba(#1e58ff, .3);
  position: fixed;
  z-index: 100;
`

const StyledButton = styled.div`
  width: 27px;
  height: 27px;
  padding-top: 5px;
  background: #1e58ff;
  border: none;
  text-align: center;
  position: absolute;
  right: 30px;
  top: 30px;
`

const StyledVideo = styled.iframe`
      margin-top: 60px;
`

const VideoPlayer = ({link, show, closeModal}) => {
    return (
        <VideoPlayerWrapper display={show ? 'none' : 'flex'} onClick={closeModal}>
            <StyledButton>X</StyledButton>
            <div className="plyr__video-embed" id="player">
                <StyledVideo width="100%" height="80%" src={link}>
                </StyledVideo>
            </div>
        </VideoPlayerWrapper>
    )
}


export default VideoPlayer;
