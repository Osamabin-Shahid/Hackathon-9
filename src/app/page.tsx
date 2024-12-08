import React from 'react'
import Hero from './component/Hero'
import About from './About/page'
import FoodCategory from './Food_Category/Food_category'
import MenuCom from './component/Menu'


const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <FoodCategory/>
      <MenuCom/>
      
      
    </div>
  )
}

export default Home

