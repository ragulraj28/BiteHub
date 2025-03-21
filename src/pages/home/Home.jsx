import React from 'react'
import './Home.css'
import SearchWrapper from '../../components/searchWrapper/SearchWrapper'
import CardWrapper from '../../components/cardWrapper/CardWrapper'

const Home = ({search, setSearch, resDetails}) => {
  return (
    <main>
      <SearchWrapper search={search} setSearch={setSearch}/>
      <CardWrapper resDetails={resDetails}/>
    </main>
  )
}

export default Home