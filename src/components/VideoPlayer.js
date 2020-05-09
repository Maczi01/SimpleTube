import styled from "styled-components";
import React from "react";
import Plyr from "plyr";

const VideoPlayerWrapper = styled.div`
  width: 80vw;
  height: 80vh;
  margin: 20px auto  ;
`

const StyledVideo = styled.div`
      width:100%;
      height:100%;
`

const VideoPlayer = () => {
    const player = new Plyr('#player', {});
    return (
        <VideoPlayerWrapper>
            <StyledVideo>
                <div id="player" data-plyr-provider="youtube" data-plyr-embed-id="3jTjBt0Enyw"></div>
            </StyledVideo>
        </VideoPlayerWrapper>
    )
}

export default VideoPlayer
