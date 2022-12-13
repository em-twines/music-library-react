import React from 'react'
import axios from 'axios'


export default function Delete(props) {

    

    async function deleteSong(){
        let response = await axios.delete(`http://127.0.0.1:8000/api/music/${props.featuredSong.id}/`);
        console.log('Returned data:', response);
    }


    return (

    <button type = 'button' className = "update-delete btn btn-danger" onClick = {deleteSong}>Delete Song</button>  

    )


}
