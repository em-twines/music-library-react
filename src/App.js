import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import Thumbnails from "./Components/Thumbnails/Thumbnails.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import "bootstrap/dist/css/bootstrap.css";
import Table from "./Components/Table/Table.jsx";
import Add from "./Components/Add/Add.jsx";
import axios from "axios";

//to do: add click functionality to thumbnails so that that song becomes the featured video
//figure out put method
//search bar
//filter method to filter by album etc.
//update with modal popup window (click a button and window pops up)
//like songs
//delete songs
//change form to popup window ot allow space for song details

function App() {
  const [songs, setSongs] = useState([]);
  const [featuredSong, setFeaturedSong] = useState([]);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // const randomSong = useCallback(() => {
  //   displayRandomSong(array){
  //   let randInt = getRandomInt(0, array.length-1);
  //   setFeaturedSong(array[randInt]);
  //   }
  // })
  
  const displayRandomSong = (array) => {
    let randInt = getRandomInt(0, array.length - 1);
    setFeaturedSong(array[randInt]);
  };

  async function displayAllSongs(fetchFeatured) {
    let response = await axios.get("http://127.0.0.1:8000/api/music/");
    setSongs(response.data);
    fetchFeatured && displayRandomSong(response.data);
  }

  useEffect(() => {
    // displayAllSongs().then(displayRandomSong(songs));
    displayAllSongs(true)
  }, []);

  return (
    <div className="App">
      <div className="top-buffer"></div>
      <NavBar />
      <div className="featured-container">
        <div>
          <Table songs={songs} />
        </div>

        <iframe
          className="featured"
          id="ytplayer"
          title="featured video"
          type="text/html"
          width="854"
          height="480"
          src={featuredSong?.link}
          frameborder="0"
        ></iframe>

        <div>
          <Add displayAllSongs={displayAllSongs} />
        </div>
      </div>
      <h2 className="playlist">Your Playlist</h2>
      <div className="line"></div>
      <Thumbnails songs={songs} />
    </div>
  );
}

export default App;
