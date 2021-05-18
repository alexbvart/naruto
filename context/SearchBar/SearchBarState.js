import React, { useState } from 'react';
import SearchBarContext from './SearchBarContext';

const SearchBarState = ({children}) => {

    const [showSearchBar, setShowSearchBar] = useState(false)

    return ( 
        <SearchBarContext.Provider
            value={{
                showSearchBar, setShowSearchBar 
            }}
        >
            {children}
        </SearchBarContext.Provider>
    );
}
export default SearchBarState;