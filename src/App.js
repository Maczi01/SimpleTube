import React from 'react';
import Header from "./components/Header";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

class App extends React.Component {

    state = {
        showModal: false,
        currentVideo: '',
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
        fetch('/db.json')
            .then(response => response.json())
            .then(data => {
                this.setState({movieList: data});
            });
    }

    render() {
        const {showModal, currentVideo} = this.state;
        return (
            <>
                <Header/>
                {showModal && <VideoPlayer link={currentVideo}
                                           closeModal={this.closeModal}
                />}
                <VideoList list={this.state.movieList}
                           openModal={this.openModal}
                />
            </>
        );
    }
}

export default App;
