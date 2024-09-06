import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Detail from "./pages/Detail"
import Payment from "./pages/Payment"
import ErrorPage from "./pages/ErrorPage"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
