import React from 'react'

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
