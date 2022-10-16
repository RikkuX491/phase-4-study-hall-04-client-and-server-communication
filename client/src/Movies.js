import MovieCard from './MovieCard'

function Movies({movies}){

    const movieComponents = movies.map(movie => {
        return <MovieCard key={movie.id} movie={movie}/>
    })

    return (
        <>
            {movieComponents}
        </>
    );

}

export default Movies;