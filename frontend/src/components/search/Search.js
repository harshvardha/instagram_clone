import { useState } from "react";
import SearchResult from "../SearchResult/SearchResult";
import "./Search.css";

const Search = ({ setOpen }) => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="search">
            <div className="search--header">
                <h1 style={{ color: "white" }}>Search</h1>
                <input
                    id="search"
                    size={43}
                    type="text"
                    placeholder="Search"
                    onChange={(event) => setSearchQuery(event.target.value)}
                />
            </div>
            <div className="search--results">
                <SearchResult setOpen={setOpen} />
                <SearchResult setOpen={setOpen} />
                <SearchResult setOpen={setOpen} />
                <SearchResult setOpen={setOpen} />
                <SearchResult setOpen={setOpen} />
                <SearchResult setOpen={setOpen} />
                <SearchResult setOpen={setOpen} />
                <SearchResult setOpen={setOpen} />
                <SearchResult setOpen={setOpen} />
                <SearchResult setOpen={setOpen} />
                <SearchResult setOpen={setOpen} />
                <SearchResult setOpen={setOpen} />
                <SearchResult setOpen={setOpen} />
                <SearchResult setOpen={setOpen} />
                <SearchResult setOpen={setOpen} />
                <SearchResult setOpen={setOpen} />
                <SearchResult setOpen={setOpen} />
            </div>
        </div>
    )
}

export default Search;