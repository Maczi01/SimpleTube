import React from 'react';
import Header from "./components/Header";
import VideoList from "./components/VideoList";

class App extends React.Component {

    state = {
        movieList: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/videos')
            .then((response) => response.json())
            .then(booksList => {
                this.setState({ movieList: booksList });
            });
    }

    render() {
        return (
            <>
                {console.log(this.state)}
                <Header/>
                <VideoList list={this.state.movieList}/>
            </>
        );

    }
}

export default App;
