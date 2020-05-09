import styled from "styled-components";
import React from "react";
import image from "../assets/coon.png"
import decline from "../assets/decline.svg"
import rs from "../assets/rs.png"

const VideoWrapper = styled.div`
  //width: 300px;
  height: 450px;
  background-color: blue;
  border-radius: 5px;
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

var Youtube = (function () {

    var video, results;

    var getThumb = function (url, size) {
        if (url === null) {
            return '';
        }
        size    = (size === null) ? 'big' : size;
        results = url.match('[\\?&]v=([^&#]*)');
        video   = (results === null) ? url : results[1];

        if (size === 'small') {
            return 'http://img.youtube.com/vi/' + video + '/2.jpg';
        }
        return 'http://img.youtube.com/vi/' + video + '/0.jpg';
    };

    return {
        thumb: getThumb
    };
}());


const VideoItem = ({title = "Mamma mia", description, link = "https://www.youtube.com/watch?v=UkhHY7U3LwU"}) => (
    <VideoWrapper>
        <Image src={Youtube.thumb(link)}/>
            {/*{console.log(Youtube.thumb('http://www.youtube.com/watch?v=F4rBAf1wbq4', 'small'))}*/}
            {/*<video  width="350" controls="controls" preload="metadata">*/}
            {/*    <source src=type="video/mp4"/>*/}
            {/*</video>*/}
        {/*</Image>*/}
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

