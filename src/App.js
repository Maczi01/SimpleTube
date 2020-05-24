import React from 'react';
import Header from "./components/Header";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainView from "./views/MainView";
import AppContext from "./context/context";
import context from "react-router/modules/RouterContext";
import AddView from "./views/AddView";

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
        const contextElement = {
            ...this.state,
            openModal: this.openModal
        }
        return (
            <Router>
                <AppContext.Provider value={contextElement}>
                    <Header/>
                    <Route exact path="/" component={MainView}/>
                    <Route path="/add" component={AddView}/>
                    {/*{showModal && <VideoPlayer link={currentVideo}*/}
                    {/*                           closeModal={this.closeModal}*/}
                    {/*/>}*/}


                </AppContext.Provider>
            </Router>
        );
    }
}

export default App;
