import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Thumbnails from "./Components/Thumbnails/Thumbnails.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import "bootstrap/dist/css/bootstrap.css";
import Table from "./Components/Table/Table.jsx";
import Add from "./Components/Add/Add.jsx";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import PatchLikes from "./Components/PatchLikes/PatchLikes";
import Delete from "./Components/Delete/Delete.jsx"

//figure out put method
//search bar
//filter method to filter by album etc.
//update with modal popup window (click a button and window pops up)
//like songs
//delete songs

function App() {
  const [songs, setSongs] = useState([]);
  const [featuredSong, setFeaturedSong] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  let toChoose = true; 
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }


  const displayRandomSong = (array) => {
    let randInt = getRandomInt(0, array.length - 1);
    setFeaturedSong(array[randInt]);
    toChoose = false; 
  };

  async function displayAllSongs(fetchFeatured) {
    let response = await axios.get("http://127.0.0.1:8000/api/music/");
    setSongs(response.data);
    if (fetchFeatured && toChoose){
      displayRandomSong(response.data)
    }
  
  }

  function removeFeatured(){
    setFeaturedSong();
  }

  function handleClick(song) {
    setFeaturedSong(song);
    }


  useEffect(() => {
    displayAllSongs(true)
  }, []);





  return (
    <div className="App">
      <div className="top-buffer"></div>
      <NavBar songs = {songs} removeFeatured = {removeFeatured} handleClick = {handleClick} />
      
      
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
        
        <div className = 'trackInfo'>
          <h3>Track Information</h3>
          <h4>Title: {featuredSong.title}</h4>
          <h4>Artist: {featuredSong.artist}</h4>
          <h4>Album: {featuredSong.album}</h4>
          <h4>Release Date: {featuredSong.release_date}</h4>
          <h4>Genre: {featuredSong.genre}</h4>
        </div>
        <div className = 'like'><PatchLikes featuredSong = {featuredSong}/></div>

        <div className = 'add'>
          <Button variant="primary" onClick={() => setModalShow(true)}>Add New song</Button>
          <Add show={modalShow} onHide={() => setModalShow(false)} displayAllSongs={displayAllSongs} />
        </div>
        <Delete featuredSong = {featuredSong}/>
      </div>


      <h2 className="playlist">Your Playlist</h2>
      <div className="line"></div>
        <Thumbnails songs={songs} handleClick = {handleClick} removeFeatured = {removeFeatured}/>
    </div>
  );
}

export default App;




    
// function App() {
  
//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Add song
//       </Button>

//       <Add
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }
