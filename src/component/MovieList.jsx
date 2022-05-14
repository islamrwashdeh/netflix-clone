
import Movie from './Movie';
let MovieList = ({ movies }) => {
  
 
  return (
    <>
      {
        movies.map(movies => {
          return (
            <div  key={movies.id}>

              <Movie movies={movies}/>
            </div>
          )
        })
      }
    </>
  )
};
export default MovieList;