import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import About from './Components/About'
import { Skills } from './Components/Skills'
import Projects from './Components/Projects'
import Contect from './Components/Contect'

export const AllROutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contect/>}/>
    </Routes>
  )
}
