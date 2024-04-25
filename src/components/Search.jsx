/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce"
import searchIcon from "../assets/Search.svg"
import { useGlobalContext } from "../context/AppContext";

const Search = () => {
    const { handleFilterChange, filters } = useGlobalContext();
    const [searchValue, setSearchValue] = useState(filters.keyword);
    const { searchKeyword } = useDebounce(searchValue);

    useEffect(() => {
        handleFilterChange("keyword", searchKeyword);
    }, [searchKeyword]);

    return (
        <form className="relative w-full md:w-3/5 lg:w-[30%] " onSubmit={e => e.preventDefault()}>
            <img className="absolute left-2 top-1/2 -translate-y-1/2" src={searchIcon} alt="Search icon" />
            <input 
                type="text" 
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                name="search"
                className="bg-slate-400 outline-none rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-slate-300 text-sm w-full block"
                placeholder="Search by Name, Region, Subregion"
                autoComplete="off"
            />
        </form>
    );
}

export default Search;