import React from 'react';

const SearchBar = () => {

    // const handleSearch = (event) => {
    //     event.preventDefault(); 
    //     onSearch(); 
    // };

    return (
        <form onSearch=""
            className='searchBar'
        // onSubmit={handleSearch}
        >
            <input 
                type="text" 
                value=""
                onChange=''
                placeholder="You wanna Search...." 
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;