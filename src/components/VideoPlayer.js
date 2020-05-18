import styled from "styled-components";
import React from "react";
import Plyr from 'plyr';

const VideoPlayerBackground = styled.div`
  background-color: white;
  position: fixed;
  top:0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: grayscale(1) blur(2px);
  z-index: 2;
`

const VideoPlayerWrapper = styled.div`
  padding: 10px 10px 10px 10px;
  top: 45%;
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
  display: flex;
  flex-direction: column;
`

const CloseButtonWrapper = styled.div`
  //margin: 10px 0;
  //padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  margin: 10px;
  padding: 3px;
  border-radius: 5px;
  background-color: yellow;
  color: blue;
  font-size: 18px;
`

class VideoPlayer extends React.Component {

    componentDidMount() {
        const player = new Plyr(document.getElementById("player"), {
            controls: [
                "rewind",
                "play",
                "fast-forward",
                "progress",
                "current-time",
                "duration",
                "mute",
                "volume",
                "settings",
                "fullscreen"
            ]
        });
        player.source = {
            sources: [{
                provider: 'youtube',
                src: this.props.link
            }]
        };
    }

    render() {
        const {closeModal} = this.props;
        return (
            <VideoPlayerBackground>
                <VideoPlayerWrapper>
                    <video id="player"/>
                    <CloseButtonWrapper>
                        <Button onClick={closeModal}>Close video</Button>
                    </CloseButtonWrapper>
                </VideoPlayerWrapper>
            </VideoPlayerBackground>
        )
    }
}

export default VideoPlayer;
