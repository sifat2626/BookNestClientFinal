import { createContext, useContext, useState } from 'react';

const Search = createContext();

const SearchContext = ({ children }) => {
    const [search, setSearch] = useState("")
    return (
        <Search.Provider value={{ search, setSearch }}>
            {children}
        </Search.Provider>
    );
};

export const SearchState = () => {
    return useContext(Search);
}

export default SearchContext