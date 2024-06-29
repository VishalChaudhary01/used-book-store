import React from 'react'
import Banner from '../components/Banner'
import LatestBooks from '../components/LatestBooks'
import FavBooks from '../components/FavBooks'
import PromoBanner from '../components/PromoBanner'
import OtherBook from '../components/OtherBooks'

const HomePage = () => {
  return (
    <div className="min-h-screen">
     <Banner />
     <LatestBooks />
     <PromoBanner />
     <FavBooks /> 
     <OtherBook />
    </div>
  )
}

export default HomePage