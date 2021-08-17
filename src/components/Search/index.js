import { useEffect, useState } from "react"

const Search = ({searchMovies}) => {

    const [search, changeSearch] = useState('matrix')
    const [filter, changeFilter] = useState('all')

    console.log(changeFilter)

    const handleKey = event => {
        if(event.key === 'Enter'){
            searchMovies(search)
        }
    }

    const handleClick = () => {
        searchMovies(search)
    }

    const handleFilter = event => {
        changeFilter(event.target.value)
    }

    useEffect(() => searchMovies(search, filter),[filter])

    return(
        <div className="row">
            <div className="input-field inline row">
                    <input 
                        className="validate"
                        placeholder="search"
                        type="search"
                        value={search}
                        onChange = {event => changeSearch(event.target.value)}
                        onKeyDown={handleKey}
                    />
                    <button className="btn search-btn"
                        onClick = {handleClick}
                    >Search
                    </button>
                    <div className = 'filter-block'>
                        <label>
                            <input 
                                className="with-gap" 
                                name="filter" 
                                type="radio" 
                                value="all"
                                onChange = {handleFilter}
                                checked = {filter === "all"}/>
                            <span>All</span>
                        </label>
                
                    
                        <label>
                            <input 
                                className="with-gap" 
                                name="filter" 
                                type="radio" 
                                value="movie"
                                onChange = {handleFilter}
                                checked = {filter === "movie"}/>
                            <span>Movies Only</span>
                        </label>
                    
                        <label>
                            <input 
                                className="with-gap" 
                                name="filter" 
                                type="radio" 
                                value="series"
                                onChange = {handleFilter}
                                checked = {filter === "series"}/>
                            <span>Series Only</span>
                        </label>
                    </div>
            </div>
      </div>
    )
}

export default Search