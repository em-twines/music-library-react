import React, { useEffect, useState } from 'react';

import axios from "axios";



export default function PatchLikes(props) {
    const [active, setActive] = useState();
    const [likes, setLikes] = useState();

    const handleClickLike = () => {
        if (active){
            likeSong();
            setActive(false);
        }
        else if (!active){
            dislikeSong();
            setActive(true);

        }
    }

    useEffect(() => {
        if (props.featuredSong.likes > 0) {
            setLikes(props.featuredSong.likes);
            setActive(false);
        }
        else{
            setActive(true);
        }
        
    },[props.featuredSong.likes])

 
    async function likeSong(){
        let response = await axios.patch(`http://127.0.0.1:8000/api/music/${props.featuredSong.id}/`, {likes: 1});
        console.log('Returned data:', response);
        setLikes(response.data.likes);

    }

    async function dislikeSong(){
        let response = await axios.patch(`http://127.0.0.1:8000/api/music/${props.featuredSong.id}/`, {likes: -1});
        console.log('Returned data:', response);
        setLikes(response.data.likes);


    }

        
    // function tryLikes(){
    //     setLikes(props.featuredSong.likes);  

    // }

    // while (setLikes(likes) === 0){
    //     tryLikes();
    // }

  return (
    <div className = 'likes-container'>
        <button type = 'button' className ="button btn bg-transparent like"><i onClick = {handleClickLike}className= {active? "bi bi-heart icon-size": "bi bi-heart-fill icon-size"}></i></button>
        <p >{likes}</p>
    </div>


  )
}
