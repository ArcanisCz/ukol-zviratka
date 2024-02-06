import React from "react";
import './style.css';

const Search = ({onSearchAnimal}) => {

    return (
        <div className="animal-search">
            <input onChange={(event) => {onSearchAnimal(event.target.value)}} type="text" placeholder="hledám zvíře.. :-)" name="search" id="search"/>
        </div>
    )
}

export default Search;