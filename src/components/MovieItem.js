import styled from "styled-components";
import React from "react";
import image from "../assets/coon.png"
import decline from "../assets/decline.svg"

const VideoWrapper = styled.div`
  //width: 300px;
  height: 350px;
  background-color: blue;
  border-radius: 20px;
  border: 2px solid black;
  margin: 10px 30px 10px 30px;
`

const VideoFooter = styled.div`
  display: flex;
`

const Image = styled.img`
  display: flex;
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
  padding: 0;
  margin: 0 auto;
`

const Avatar = styled.img`
  width: 80px;
`

const VideoDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const VideoTitle = styled.h3`
  font-weight: bold;
`

const VideoAuthor = styled.h3`
  
`


const VideoItem = () => (
    <VideoWrapper>
        <Image src={image}/>
        <VideoFooter>
            <Avatar img={decline}/>
            <VideoDescriptionWrapper>
                <VideoTitle>
                    Jak poznałem waszą matkę
                </VideoTitle>
                <VideoAuthor>
                    Mietczyński
                </VideoAuthor>
            </VideoDescriptionWrapper>
        </VideoFooter>
    </VideoWrapper>
)

export default VideoItem

