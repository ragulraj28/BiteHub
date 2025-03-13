import React, { useState } from 'react'

const SearchWrapper = ({setSearch, searchHandler}) => {

  return (
    <div className='search-wrapper'>
      <form action="">
        <input type="search" onChange={e => setSearch(e.target.value)} placeholder="Find your favourite restaurant" />
        <button onClick={searchHandler}>Find</button>
      </form>
    </div>
  )
}

export default SearchWrapper