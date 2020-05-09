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
            {/*<video width="100%" controls="controls" preload="metadata">*/}
            {/*    <source src="http://www.youtube.com/watch?v=F4rBAf1wbq4" type="video/mp4"/>*/}
            {/*</video>*/}
            <StyledVideo>
                <div id="player" data-plyr-provider="youtube" data-plyr-embed-id="SPc-oWXEhQQ"></div>
            </StyledVideo>
        </VideoPlayerWrapper>
    )
}

export default VideoPlayer
