
import './App.css';
import React, { useState, useEffect } from 'react';
import axios  from 'axios';



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
          <iframe className ="featured"
            id="ytplayer"
            type="text/html"
            width="854"
            height="480"
            src={featuredSong?.link}
            frameborder="0"
            >
          </iframe> 
      <div className = 'thumbnails-container' >
          {songs.map((el) => {
            return(
              <div> 
                <h4>{el.title}</h4>
                <img src={el.img} width="340" height="200" alt ='thumbnail of song video'></img>
              </div>
          )
        })}
      </div>

    </div>
  );
}



export default App;
