import { useState,useEffect } from "react";
import Header from "./Header";
import MovieList from './MovieList';
import Navbar from './Navbar';

export default function Home(){
  
  const [movies, setMovies]= useState([]);

  async function getData(){
      let response= await fetch(`${process.env.REACT_APP_SERVER}`);
      let data = await response.json();
      setMovies(data);   
  };

  useEffect(()=>{
    getData();
  },[])

  console.log(movies);
  return(
    <>
    <Header/>
    <div>
      {movies && <MovieList movies={movies}/>}
    </div>
    <Navbar/>
    </>
  )
}