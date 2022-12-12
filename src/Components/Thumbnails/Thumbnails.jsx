import React, { useState, useEffect} from 'react';


export default function Thumbnails(props) {


 

  return (
    <div>
        <div className = 'thumbnails-container' >
        {props.songs.map((el) => {
        return(
            <div> 
            <h4>{el.title}</h4>
            <button className = "btn btn-default name" onClick= {() =>  {props.removeFeatured(); {props.handleClick(el)}}}>
                <img src={el.img} width="300" height="175" alt ='thumbnail of song video'></img>
            </button>
            </div>
            )
        })}
        </div>
    </div>
    )
}
