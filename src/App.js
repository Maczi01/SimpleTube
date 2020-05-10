import React from 'react';
import Header from "./components/Header";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";
import db from './db.json';

class App extends React.Component {

    state = {
        showModal: false,
        currentVideo: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        movieList: []
    };

    openModal = (link) => {
        this.setState({
                showModal: true,
                currentVideo: link
            }
        )
    };

    closeModal = () => {
        this.setState({
                showModal: false
            }
        )
    };

    componentDidMount() {
        this.getMovieList();
    }

    getMovieList() {
        this.setState({
            movieList: db
        })
        // fetch('http://localhost:3000/videos')
        //     .then((response) => (response.json()))
        //     .then(booksList => {
        //         this.setState({movieList: booksList});
        //     });
    }

    render() {
        const {showModal, currentVideo} = this.state;
        return (
            <>
                <Header/>
                {showModal && <VideoPlayer link={currentVideo}
                                           openModal={this.openModal}
                                           closeModal={this.closeModal}
                />}
                <VideoList list={this.state.movieList}
                           openModal={this.openModal}
                           closeModal={this.closeModal}
                />
            </>
        );
    }
}

export default App;
