// import './App.css'
// import { Route, Routes } from 'react-router'
// import Admin from './components/Admin/Admin'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
// import ProductDetails from './components/ProductDetails/ProductDetails'
// import Home from './components/Home/Home'
// import SignUp from './components/SignUp/SignUp'
// import Login from './components/Login/Login'

// import { CategoryProducts } from './components/Category/CategoryProdcuts'

// function App() {

//   return (

//     <>
//       <Header/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/category/:id" element={<CategoryProducts />} />
//         <Route path="/sign-up" element={<SignUp />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//       <Footer/>
//     </>
//   )
// }

// export default App


import "./App.css";
import { Route, Routes } from "react-router";
import Admin from "./components/Admin/Admin";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import { CategoryProducts } from "./components/Category/CategoryProdcuts";

function App() {
  return (
    <>
      <Routes>
        {/* Routes with Header & Footer */}
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/category/:id" element={<CategoryProducts />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* Admin Panel Route (Without Header & Footer) */}
        <Route path="/dashboard/*" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
