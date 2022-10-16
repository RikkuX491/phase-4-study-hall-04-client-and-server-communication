function MovieCard({ movie }){

    const { id, title, quote } = movie

    return (
        <>
            <h1>{`Movie # ${id}`}</h1>
            <h2>{`Title: ${title}`}</h2>
            <h3>{`Quote: ${quote}`}</h3>
        </>
    );
}

export default MovieCard;