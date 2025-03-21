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
  const[minMax, setMinMax] = useState({min:0, max:0});
  const[price, setPrice] = useState([0,0]);

  useEffect( () => {

    const fetchData = async () => {

      try {

        const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.7904833&lng=78.7046725&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");      
        const restaurantsData = await response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // Getting this values for price filter purpose
        const priceList = restaurantsData?.map( data => parseInt(data?.info?.costForTwo?.split(" ")[0].slice(1)));
        setMinMax({
          min: priceList.length ? Math.min(...priceList) : 0,
          max: priceList.length ? Math.max(...priceList) : 0
        });
        setPrice([Math.min(...priceList), Math.max(...priceList)])
        setResDetailsStatic(restaurantsData);
        setResDetails(restaurantsData);

      } catch(err) {

        console.log(err);        

      }

    }

    fetchData();   

  },[]);  

  useEffect(() => {
    setResDetails(
      resDetailsStatic?.filter(item => {
        const nameMatch = item?.info?.name?.toLowerCase().includes(search.toLowerCase());
        const priceMatch = parseInt(item?.info?.costForTwo?.split(" ")[0].slice(1)) >= price[0] &&
                           parseInt(item?.info?.costForTwo?.split(" ")[0].slice(1)) <= price[1];
        return nameMatch && priceMatch;
      })
    );
  }, [search, price]);
  
  
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home search={search} setSearch={setSearch} resDetails={resDetails} price={price} setPrice={setPrice} minMax={minMax}/>} />
      <Route path='about' element={<About />}/>
      <Route path='services' element={<Services />}/>
      <Route path='contact' element={<Contact />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App