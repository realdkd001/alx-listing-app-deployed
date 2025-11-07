import React from 'react'
import SearchXL from './SearchXL'
import SearchSM from './SearchSM'

const SearchBar = () => {
    return (
        <>
        <div className='hidden sm:flex'>
            <SearchXL />
        </div>
        <div className='sm:hidden'>
            <SearchSM />
        </div>
        </>
    )
}

export default SearchBar
