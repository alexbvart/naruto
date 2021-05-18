import { useContext, useEffect } from 'react'
import SearchBarContext from '../context/SearchBar/SearchBarContext';

function useHiddenOrShow(){

    const { showSearchBar, setShowSearchBar} = useContext(SearchBarContext)

    useEffect(() => {
        console.log(showSearchBar);
    }, [showSearchBar])

    return [showSearchBar,setShowSearchBar]
}

export default useHiddenOrShow
