const SearchBar =({ searchTerm, setSearchTerm }) =>{
    return(
        <div style={{width:"900px"}}>
        <div className=" searchBar">
        <input
          type="text"
          placeholder="Search fonts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
         </div>
    </div>
    )
}

export default SearchBar;