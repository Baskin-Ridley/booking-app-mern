import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import './home.css'
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header type={undefined}/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        {/*<FeaturedProperties/>*/}
      </div>
      <MailList/>
      {/*<Footer/> currently disabled as styling is not perfect*/}
    </div>
  )
}

export default Home