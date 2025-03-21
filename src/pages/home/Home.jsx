import React from 'react'
import './Home.css'
import SearchWrapper from '../../components/searchWrapper/SearchWrapper'
import CardWrapper from '../../components/cardWrapper/CardWrapper'

const Home = ({search, setSearch, resDetails, price, setPrice, minMax}) => {
  return (
    <main>
      <SearchWrapper search={search} setSearch={setSearch} price={price} setPrice={setPrice} minMax={minMax}/>
      <CardWrapper resDetails={resDetails}/>
    </main>
  )
}

export default Home