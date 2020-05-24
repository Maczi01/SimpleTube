import React from 'react';
import VideoList from "../components/VideoList";
import AppContext from "../context/context";

const MainView = () => (
    <AppContext.Consumer>
        {(context) => (
            <VideoList list={context.movieList}
                       openModal={context.openModal}/>

        )}

    </AppContext.Consumer>
)

export default MainView;