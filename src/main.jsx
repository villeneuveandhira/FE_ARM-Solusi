import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Category from './pages/category'
import Detail from './pages/detail'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/category"} element={<Category />} />
        <Route path={"/detail"} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
