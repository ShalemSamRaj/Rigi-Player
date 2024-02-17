import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import VideoPlayerContainer from "./components/VideoPlayerContainer";
import PlayListContainer from "./components/PlayListContainer";
import Header from "./components/HeaderComponent.js";
import Footer from "./components/FooterComponent";
import mediaJSON from "./data/videoData";
import { SetVideos } from "./Actions/Actions";

function App() {
  const [playList] = useState(mediaJSON.categories[0].videos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetVideos(playList));
  }, [dispatch, playList]);
  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-between bg-blue-950">
        <VideoPlayerContainer />
        <PlayListContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
