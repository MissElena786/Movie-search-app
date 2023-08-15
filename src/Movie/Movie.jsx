import React, { useEffect, useState } from 'react'
import axios from "axios"

function Movie() {

   const [movie, setMovie] = useState("")
   const [text, setText] = useState("")

 const fetchMovie = () =>{
   axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=24582adc")
   .then((res)=>{
      console.log(res);
      setMovie(res.data)
   })
   .catch((err)=>{
      console.log(err);
   })
 }
 useEffect(()=>{
    fetchMovie()

 },[])

  return (
    <div className='container'>
      {/* <button onClick={fetchMovie}>Movie Search</button> */}
      {/* {
         movie.map((value, index)=>{
            return(
               <div>
                  <img src={value.Poster} alt="imag" />
               <h1 key={index}>{value.Title}</h1>
               <h1 >{value.Year}</h1>
               </div>
            )

         })
      } */}
      

  <div className='upper-div'>
   <div className='upper'>
  
      <img src={movie.Poster} alt="" />
      </div>
      <div className='lower'>
      <h2>{movie.Title}</h2>
      <h2>{movie.Year}</h2>
      <p> Acotors : {movie.Actors}</p>
      <p>Plot :{movie.Plot}</p>
      </div>
    </div>
 </div>
  )
}

export default Movie
