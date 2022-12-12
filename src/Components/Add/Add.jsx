import React, { useState} from 'react';

import axios  from 'axios';



export default function Add(props) {



    const[title, setTitle] = useState('');
    const[artist, setArtist] = useState(''); 
    const[album, setAlbum] = useState(''); 
    const[release_date, setReleaseDate] = useState('');
    const[genre, setGenre] = useState(''); 
    // const[likes, setLikes] = useState(0); 
    const[link, setLink] = useState(''); 
    const[img, setImg] = useState(''); 

    async function addNewSong(song){
        let res = await axios.post(('http://127.0.0.1:8000/api/music/'), song);
        if(res.status === 201){
          console.log(res); 
          props.displayAllSongs(false);
        }
    }

    function handleSubmit(event){
        event.preventDefault();
       let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre,
            likes: 0,
            link: link,
            img: img,
        }
        console.log (newSong);
        debugger; 
        addNewSong(newSong);

    }

    


    return (  

 
        <form onSubmit ={handleSubmit} className = 'table'>
            <h2>Add New Song</h2>
            <label className = 'name'>Song Title</label>
            <input className ='form-control' type = 'text'  value={title} onChange={(event) => setTitle(event.target.value)} required></input>
    
            <label className = 'name'>Artist</label>
            <input className ='form-control' type = 'text'  value={artist} onChange={(event) => setArtist(event.target.value)} required></input>


            <label className = 'name'>Album Title</label>
            <input className ='form-control' type = 'text'  value={album} onChange={(event) => setAlbum(event.target.value)}required></input>


            <label className = 'name'>Release Date</label>
            <input className ='form-control' type = 'date'  value={release_date} onChange={(event) => setReleaseDate(event.target.value)}required></input>

            <label className = 'name'>Genre</label>
            <input className ='form-control' type = 'text'  value={genre} onChange={(event) => setGenre(event.target.value)}required></input>

        
            <label className = 'name'>Video Link</label>
            <input className ='form-control' type = 'text'  value={link} onChange={(event) => setLink(event.target.value)}required></input>

            <label className = 'name'>Thumbnail Image Link</label>
            <input className ='form-control' type = 'text'  value={img} onChange={(event) => setImg(event.target.value)}required></input>

            <button className = 'badge badge-pill btn btn-primary ' type = 'submit'>Submit</button>
        </form>
    );
}
 
