import styled from "styled-components";
import React from "react";
import rs from "../assets/rs.png"
import {imageFromYT, changeLinkForItem} from "../lib/Helper";

const VideoWrapper = styled.div`
  height: 450px;
  background-color: white;
  border-radius: 5px;
  border: 2px solid black;
  margin: 10px 30px 10px 30px;
  :hover{
  transform: scale(1.01);
  border: 2px solid #ef4565 ;
  }
`

const VideoFooter = styled.div`
  margin-top: 20px;
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
  margin: 5px;
  min-width: 50px;
  height: 50px;
  margin-right: 20px;
`

const VideoDescriptionWrapper = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
`

const VideoTitle = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`

const VideoAuthor = styled.h3`
  font-weight: normal;
  font-size: 16px;
`

const VideoItem = ({title, description, link, openModal}) => (
    <VideoWrapper onClick={() => openModal(changeLinkForItem(link))}>
        <Image src={imageFromYT(link)}/>
        <VideoFooter>
            <Avatar src={rs}/>
            <VideoDescriptionWrapper>
                <VideoTitle>
                    {title}
                </VideoTitle>
                <VideoAuthor>
                    {description}
                </VideoAuthor>
            </VideoDescriptionWrapper>
        </VideoFooter>
    </VideoWrapper>
)

export default VideoItem

