import React from 'react'
import Header from './components/header/Header'
import CardWrapper from './components/cardWrapper/CardWrapper'
import { resDetails } from './utils/data'
import SearchWrapper from './components/searchWrapper/SearchWrapper'

const App = () => {

  return (
    <>
    <Header />
    <main>
      <SearchWrapper />
      <CardWrapper resDetails={resDetails}/>
    </main>
    </>
  )
}

export default App