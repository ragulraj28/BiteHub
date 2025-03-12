import React from 'react'
import Header from './components/header/Header'
import CardWrapper from './components/cardWrapper/CardWrapper'
import { resDetails } from './utils/data'

const App = () => {

  return (
    <>
    <Header />
    <main>
      <CardWrapper resDetails={resDetails}/>
    </main>
    </>
  )
}

export default App