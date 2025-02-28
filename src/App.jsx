import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import ProductDetailsImg from './components/ProductDetalisImg/ProductDetalisImg'
import DairyProducts from './components/DairyProducts/DairyProducts'
import Footer from './components/Footer/Footer'
import { Button } from '@heroui/button'

function App() {

  return (

    <>
      <Header/>
      <Banner/>
      <ProductDetailsImg/>
      <DairyProducts/>
      <Footer/>
    </>
  )
}

export default App
