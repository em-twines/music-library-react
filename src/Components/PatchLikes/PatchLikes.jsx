import React, { useState } from 'react';

import axios from "axios";



export default function PatchLikes(props) {

const [active, setActive] = useState(true);

const handleClickLike = (songToLike) => {
    setActive(!active);
    // likeSong(songToLike);
}

// async function likeSong(songToLike){
//     const response = await axios.patch('http://127.0.0.1:8000/api/music/', {songToLike}, { likes: +1 });
//     console.log(props.featuredSong.likes)
//     console.log('Returned data:', response);
// }

  return (
    <div>
        <button type = 'button' className ="button btn bg-transparent"><i onClick = {handleClickLike(props.featuredSong)}className= {active? "bi bi-heart icon-size": "bi bi-heart-fill icon-size"}></i></button>
        <p>{props.featuredSong.likes}</p>
    </div>


  )
}
