import React,{useState} from "react";
import './SearchBar.css';
import {FaSearch} from "react-icons/fa";
import {BsMicFill} from "react-icons/bs";
import SearchList from "./SearchList";
import {Link} from "react-router-dom";

function SearchBar(){

    const [searchquery,setsearchquery]=useState("");
    const [searchList,setsearchList]=useState(false);

    const Titlearray=["video1","video2","animation video","Movies"].filter(q=>q.toUpperCase().includes(searchquery.toUpperCase()));

    return(<div className="searchBar_Container">
        <div className="searchBar_container2">
            <div className="search_bar">
            <input type="text" className="iBox_SearchBar" placeholder="Search..." onChange={e=>setsearchquery(e.target.value)} value={searchquery} onClick={e=>setsearchList(true)} />

            <Link to={`/seacrh/${searchquery}`}>
                <FaSearch className="searchIcon" />
            </Link>
            
            <BsMicFill className="micIcon" />
            
            {searchquery&& searchList && 
            <SearchList setSearchQuery={setsearchquery} TitleArray={Titlearray} />
            }
        </div>
        </div>
    </div>);
}

export default SearchBar;