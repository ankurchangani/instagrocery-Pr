import './App.css'
import { Route, Routes } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Home from './components/Home/Home'

function App() {

  return (

    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
