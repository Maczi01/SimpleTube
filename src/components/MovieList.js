import styled from "styled-components";
import React from "react";
import image from "../assets/coon.png"
import MovieItem from "./MovieItem";

const MovieListGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    width: 80vw;
    margin-top: 20px;
    background-color: green;
`

const MovieList = () => (
    <MovieListGrid>
        <MovieItem/>
        <MovieItem/>
        <MovieItem/>
        <MovieItem/>
        <MovieItem/>
    </MovieListGrid>
)

export default MovieList;