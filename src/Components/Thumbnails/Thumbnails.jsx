import React from 'react'


    // useEffect(()=>{


    //     let tempSong = props.songs.map(el=>{
    //         return[el.title, el.artist, el.album, el.releaseDate, el.genre, el.likes, el.link, el.img]
           
    //     });
    //     setSong(tempSong);
    // })



export default function Thumbnails(props) {
  return (
    <div>
        <div className = 'thumbnails-container' >
        {props.songs.map((el) => {
        return(
            <div> 
            <h4>{el.title}</h4>
            <img src={el.img} width="300" height="175" alt ='thumbnail of song video'></img>
            </div>
            )
        })}
        </div>
    </div>
    )
}
