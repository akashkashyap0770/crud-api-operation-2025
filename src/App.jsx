import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Timetable from './pages/Timetable'
import Weather from './pages/Weather'
import Countdown from './pages/Countdown'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<Layout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/timetable' element={<Timetable />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/countdown' element={<Countdown />} />
        </Route>
      </Routes>
  )
}

export default App
