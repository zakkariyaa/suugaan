import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Poet from './pages/Poet';
import Poem from './pages/Poem';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/maahmaaho' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/contact' element={<Home />} />
        <Route path='/gabayaa/:name' element={<Poet />} />
        <Route path='/gabayaa/:name/:title' element={<Poem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
