import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Services from './pages/services/Services'

const App = () => {

  const[resDetailsStatic, setResDetailsStatic] = useState([]);
  const[search, setSearch] = useState('');
  const[resDetails, setResDetails] = useState([]);

  useEffect( () => {

    const fetchData = async () => {

      const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.7904833&lng=78.7046725&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");      
      const restaurantsData = await response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setResDetailsStatic(restaurantsData);
      setResDetails(restaurantsData);

    }

    fetchData();

  },[])

  useEffect(() => {

    setResDetails(resDetailsStatic.filter( item => item?.info?.name.toLowerCase().includes(search.toLowerCase())));

  },[search])

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home search={search} setSearch={setSearch} resDetails={resDetails}/>} />
      <Route path='about' element={<About />}/>
      <Route path='services' element={<Services />}/>
      <Route path='contact' element={<Contact />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App