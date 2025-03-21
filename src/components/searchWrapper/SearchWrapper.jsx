import React, { useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

const SearchWrapper = ({search, setSearch, price, setPrice, minMax}) => {

  return (
    <div className='search-wrapper'>
      <form action="" onSubmit={e => e.preventDefault()}>
        <input type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Find your favourite restaurant" />
        <div className="search">
        <svg viewBox="0 0 24 24" fill='none' stroke="currentColor"  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
      </form>
      <div className="price-filter">
        <p className='price'>Price: <span>{price[0]}</span> - <span>{price[1]}</span></p>
        <Slider range allowCross={false} value={price} min={minMax.min} max={minMax.max} onChange={e => setPrice(e)}/>
      </div>
    </div>
  )
}

export default SearchWrapper