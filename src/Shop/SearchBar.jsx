import React, { useState } from "react";
import style from "./styles/searchbar.module.css";

function SearchBar(props) {
    //const [searchInput, setSearchInput] = useState("");

    return (
        <div className={style.searchBarContainer}>
            <input value={props.searchInput}
                onChange={props.handleSearchSubmit}
                className={style.searchBar}
                type="text" placeholder="Search">
            </input>
        </div>
    )
}
export default SearchBar;