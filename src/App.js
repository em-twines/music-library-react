
import './App.css';
import React, { useState, useEffect } from 'react';
import axios  from 'axios';
import Thumbnails from './Components/Thumbnails/Thumbnails.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import Table from './Components/Table/Table.jsx';


function App() {

  const[songs, setSongs] = useState([])
  const[featuredSong, setFeaturedSong] = useState([])

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }

  async function displayAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
    displayRandomSong(response.data)
  }

  function displayRandomSong(array){
    let randInt = getRandomInt(0, array.length-1);
    setFeaturedSong(array[randInt]);
  }
 
  useEffect(() => {
    displayAllSongs();  
  }, []);



  return (
    <div className = 'App'>
      <div className = 'top-buffer'></div>
      <div><NavBar/></div>
      <div className= 'featured-container'>
        <iframe className ="featured"
          id="ytplayer"
          type="text/html"
          width="854"
          height="480"
          src={featuredSong?.link}
          frameborder="0"
          >
        </iframe> 
        <div><Table songs = {songs}/></div>
      </div>
      <h2 className = 'playlist'>Your Playlist</h2>
      <div className = 'line'></div>
      <Thumbnails songs = {songs}/>
    </div>
  );
}



export default App;
