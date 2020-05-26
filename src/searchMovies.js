import React, {useState} from "react";

export default function SearchMovies(){
    
    // states: input query, movies
    const [query, setQuery] = useState('');
    
    const searchMovies = async (e) => {
        e.preventDefault();

        const query = "Jurassic Park";

        const url = `https://api.themoviedb.org/3/search/movie?api_key=e7f3345bd27e08419ec7a9eb7f4f4f8f&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();

            console.log(data);
        }
        catch(error) {
            console.log(error);
        }
    }
    
    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}