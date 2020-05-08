import React from 'react';
import Header from "./components/Header";
import MovieList from "./components/MovieList";
// import data from "../public/database";

class App extends React.Component {

    state = {
        movieList: []
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/typicode/demo/comments")
        // fetch('http://192.168.1.1:3004/database.json')
        // fetch('https://api.github.com/users/maczi01/repos?sort=updated&direction=desc')
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
                <MovieList list={this.state.movieList}/>
            </>
        );

    }
}

export default App;
