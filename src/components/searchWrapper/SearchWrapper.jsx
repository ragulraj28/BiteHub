import React from 'react'

const SearchWrapper = () => {

    const searchHandler = (e) => {

        e.preventDefault();

    }

  return (
    <div className='search-wrapper'>
        <form action="">
            <input type="search" placeholder="Find your favourite restaurant" />
            <button onClick={searchHandler}>Find</button>
        </form>
    </div>
  )
}

export default SearchWrapper