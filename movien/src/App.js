import React, { useState} from "react";
import Row from "./Components/Row/Row.jsx";
import requests from "./requests.js";
import Banner from "./Components/Banner/Banner.jsx";
import "./App.css";
import Nav from "./Components/Nav/Nav.jsx";

function App() {
    const [currentVideo, setCurrentVideo] = useState(null);
    const playVideo = (youtube) => {
        setCurrentVideo(youtube);
    };
    const stopVideo = () => {
        setCurrentVideo(null);
    };
    return (
        <div className="App">
            <Nav />
            <Banner />
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                islarger
                playVideo={playVideo}
                stopVideo={stopVideo}
                currentVideo={currentVideo}
            />
            <Row
                title="TRENDING NOW"
                fetchUrl={requests.fetchTrending}
                playVideo={playVideo}
                stopVideo={stopVideo}
                currentVideo={currentVideo}
            />
            <Row
                title="ACTIONS"
                fetchUrl={requests.fetchAction}
                playVideo={playVideo}
                stopVideo={stopVideo}
                currentVideo={currentVideo}
            />
            <Row
                title="COMEDY"
                fetchUrl={requests.fetchComedy}
                playVideo={playVideo}
                stopVideo={stopVideo}
                currentVideo={currentVideo}
            />
            <Row
                title="DOCUMENTRIES"
                fetchUrl={requests.fetchDocumentaries}
                playVideo={playVideo}
                stopVideo={stopVideo}
                currentVideo={currentVideo}
            />
            <Row
                title="HORROR"
                fetchUrl={requests.fetchHorror}
                playVideo={playVideo}
                stopVideo={stopVideo}
                currentVideo={currentVideo}
            />
            <Row
                title="ROMANCE MOVIES"
                fetchUrl={requests.fetchRomance}
                playVideo={playVideo}
                stopVideo={stopVideo}
                currentVideo={currentVideo}
            />
            <Row
                title="NOW PLAYING"
                fetchUrl={requests.fetchTopRated}
                playVideo={playVideo}
                stopVideo={stopVideo}
                currentVideo={currentVideo}
            />
        </div>
    );
}

export default App;
