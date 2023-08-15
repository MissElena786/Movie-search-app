import axios from 'axios';
import React, { useState } from 'react'
import "../App.css"
import Movie from './Movie';

function Navbar() {

   const [text, setText]= useState("")
   const [movie, setMovie]= useState([])
   const [submit, setSubmit]= useState(false)


   const TextChange =(e)=>{
         console.log(e);
         setText(e.target.value)
   }
   const getMovie= (e)=>{
      e.preventDefault();
      axios.get(`https://www.omdbapi.com/?s=${text}&apikey=24582adc`)
      .then((response)=>{
         console.log(response);
         setMovie(response.data.Search)
         setSubmit(true)
      }).catch((err)=>{
         console.log(err);
      })
   }

 
  return (
    <div>



      
  
<div className='container'>
  
   
   <div className='top'>
    <h1>Movie List</h1>
    <h3>You can serch  movie hear by the movie name</h3>
    <form action='/submit' className="d-flex  form" role="search" onSubmit={getMovie}>
        <input className="form-control input me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={TextChange}/>
        <button className=" submit" type="submit" >Search</button>
      </form>
   </div>

   <div className='wrapper'>

 



   {

   (submit) ? 

      movie.map((value, index)=>{
         return(
    <div class="card item my-3" style={{width :"15rem"}}>
  <div class="card-body">
  <img  key={value.imdbID} src={value.Poster ? value.Poster : "there is no Poster"} class="card-img-top" alt="Poster"/>
    <h5  class="card-title">{value.Year}</h5>
    <h4  class="card-text">{value.Title}</h4>
  </div>
</div>
         )
      })

      : <Movie/>
   }
   </div>


</div>

    </div>
  )
}

export default Navbar
