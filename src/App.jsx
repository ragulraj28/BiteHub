import React, { useState } from 'react'
import Header from './components/header/Header'
import CardWrapper from './components/cardWrapper/CardWrapper'
import { resDetails } from './utils/data'
import SearchWrapper from './components/searchWrapper/SearchWrapper'

const App = () => {

  const[resList, setResList] = useState(resDetails);
  const[search, setSearch] = useState('');

  const searchHandler = (e) => {

    e.preventDefault();  
    search ? setResList(resList.filter( item => item.name.toLowerCase().includes(search.toLowerCase()))) : setResList(resDetails);

  }

  return (
    <>
    <Header />
    <main>
      <SearchWrapper setSearch={setSearch} searchHandler={searchHandler}/>
      <CardWrapper resDetails={resList}/>
    </main>
    </>
  )
}

export default App