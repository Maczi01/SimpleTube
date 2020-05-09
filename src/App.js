import React from 'react';
import Header from "./components/Header";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";
import db from './db'

class App extends React.Component {

    state = {
        movieList: []
    }

    componentDidMount() {
        // fetch('http://localhost:3000/videos')
        fetch(db)
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
