import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import CardWrapper from './components/cardWrapper/CardWrapper'
// import { resDetails } from './utils/data'
import SearchWrapper from './components/searchWrapper/SearchWrapper'
import axios from 'axios'

const App = () => {

  const[search, setSearch] = useState('');
  const[resDetails, setResDetails] = useState([]);
  const[resDetailsStatic, setResDetailsStatic] = useState([]);

  useEffect( () => {

    const fetchData = async () => {

      const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.7904833&lng=78.7046725&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");      
      const restaurantsData = await response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setResDetailsStatic(restaurantsData);
      setResDetails(restaurantsData);

    }

    fetchData();

  },[])

  const searchHandler = (e) => {

    e.preventDefault();  
    search ? setResDetails(resDetails.filter( item => item?.info?.name.toLowerCase().includes(search.toLowerCase()))) : setResDetails(resDetailsStatic);

  }  

  return (
    <>
    <Header />
    <main>
      <SearchWrapper setSearch={setSearch} searchHandler={searchHandler}/>
      <CardWrapper resDetails={resDetails}/>
    </main>
    </>
  )
}

export default App