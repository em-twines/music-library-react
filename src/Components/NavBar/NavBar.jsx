import { index } from 'mathjs';
import React, { useState } from 'react';

export default function NavBar(props) {



  const[results, setResults] = useState('');
  const[criteria, setCriteria] = useState('');

  function handleSubmit(event){
      event.preventDefault();
      debugger;
      search(criteria);
  }


  // function search(input){
  //   let outcomes = props.songs.filter((el) => {
  //     // if(Object.values(el).includes(input) || Object.values(Object.values(el)).includes(input))
  //     let valuesArray = Object.values(el);
  //     if (valuesArray.includes(input)){
  //       return el;
  //     }
  //     let valuesArrayArray;
  //     for (let index = 0; index < valuesArray.length; index ++);
  //       if (valuesArray[index][1]){
  //         valuesArrayArray.push(el);
  //       }
  //     return valuesArrayArray;
  // })
  //   setResults(outcomes);
  // }



  function search(input){
    let outcomes = props.songs.filter((el)=> {
      return el.includes(input);
    })
    props.removeFeatured(); 
    props.handleClick(setResults(outcomes));
    }


  return (
    <div className = 'nav-container'>
      <div className = 'navbar'>
          <div >Sound<small className = 'text-muted'>Stream</small></div>    
      </div>
      <form onSubmit ={handleSubmit} className = 'search'>
            <label ></label>
            <input type = 'text' onChange={(event) => setCriteria(event.target.value)} value = {criteria}></input>
            <button className = 'badge badge-pill btn btn-primary create ' type = 'submit'>Go</button>
      </form>

    </div>
  )
}
