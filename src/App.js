
import './App.css';
import React, { useState, useEffect } from 'react';
import axios  from 'axios';


function App() {

  const[songs, setSongs] = useState([])

  async function displayAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
  }

  useEffect(() => {
    displayAllSongs();
  }, [])



  return (
    <div className = 'App'>

      {songs.map((el) => {
        return(el.title)

      })}


    </div>
  );
}



export default App;
