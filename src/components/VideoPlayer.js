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
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            {/*<StyledVideo>*/}
            {/*    <div id="player" data-plyr-provider="youtube" data-plyr-embed-id="Pj79goqJAaQ"></div>*/}
            {/*</StyledVideo>*/}
        </VideoPlayerWrapper>
    )
}

export default VideoPlayer
