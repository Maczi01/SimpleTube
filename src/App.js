import React from 'react';
import Header from "./components/Header";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

class App extends React.Component {

    state = {
        movieList: [
            {
                "title": "Flume - Hyperreal",
                "description": "Flume - Hyperreal feat. Kučka\nNew Flume apparel out now: http://flu.me/Store",
                "video_url": "https://www.youtube.com/watch?v=SPc-oWXEhQQ"
            },
            {
                "title": "BMX FLATLAND ",
                "description": "BMX FLATLAND FINALS HIGHLIGHTS - FISE CHINA 2019",
                "video_url": "https://www.youtube.com/watch?v=utPcddvD19o"
            },
            {
                "title": "Mega hits 2020",
                "description": "Dua Lipa, Coldplay, Martin Garrix & Kygo, The Chainsmokers Style - Feeling Me ",
                "video_url": "https://www.youtube.com/watch?v=OFc28hTZQL0"
            }
        ]
    }

    componentDidMount() {
        // this.getMovieList();
    }

    getMovieList() {
        fetch('http://localhost:3000/videos')
            .then((response) => (response.json()))
            .then(booksList => {
                this.setState({movieList: booksList});
            });
    }

    render() {
        return (
            <>
                {console.log(this.state)}
                <Header/>
                <VideoPlayer/>
                <VideoList list={this.state.movieList}/>
            </>
        );
    }
}

export default App;
