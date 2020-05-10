import styled from "styled-components";
import React from "react";
import VideoItem from "./VideoItem";
import VideoPlayer from "./VideoPlayer";


const MovieListGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    width: 80vw;
    margin-top: 30px;
    background-color: #90b4ce;
`

const VideoList = ({list, openModal, closeModal}) => (
    <>
        <MovieListGrid>
            {list.map((movie, index) =>
                <VideoItem
                    key={index}
                    openModal={openModal}
                    closeModal={closeModal}
                    title={movie.title}
                    description={movie.description}
                    link={movie.video_url}
                />
            )}
        </MovieListGrid>
    </>
)

export default VideoList;