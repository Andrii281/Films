import { useEffect, useState } from "react"
import Movies from "../../components/movies"
import Preloader from "../../components/preloader"
import Search  from "../../components/Search"

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {

    const [movies, changeMovies] = useState([])
    const [loading, changeLoadingState] = useState(true)

    useEffect(
        () => {
                fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix`)
                .then(response => response.json())
                .then(data => changeMovies(data.Search))
                changeLoadingState(false)
        }, [])


        const searchMovies = (movieName, filter = 'all') => {
            changeLoadingState(true)
            fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${movieName}${filter === 'all' ? `` : `&type=${filter}`}`)
            .then(response => response.json())
            .then(data => changeMovies(data.Search))
            changeLoadingState(false)

        }
         

     

    return(
        <main className = 'content container'>
         
            {
                loading ?  
                    <h5><Preloader/></h5>
                :
                <>
                    <Search searchMovies = {searchMovies}/> 
                    <Movies movies = {movies}/> 
                </>
            }
        </main>
    )
}

export default Main