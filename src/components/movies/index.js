import Movie from '../movie'

const Movies = props => {
    const {movies} = props;

    return (
        <div className = 'movies'>
            {movies !== undefined ? movies.map(movie => (
                <Movie key = {movie.imdbID} {...movie}/>
            )) : <h4>Nothing found</h4>}
        </div>
    )
}

export default Movies