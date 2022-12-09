
import React from 'react'

export default function Table(props) {


    return (  
        <table className="table table-striped">
        <thead>
        <tr>
            <th>Title</th>
            <th>Artist</th>
        </tr>
        </thead>
        <tbody >
        {props.songs.map((el, index) => {
            return(
            <tr key = {index}>
                {index+1}
                <td>{el.title}</td>
                <td>{el.artist}</td>
            </tr>
            )
            })
        }
        </tbody>
    </table>
    );

}