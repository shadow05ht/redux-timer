import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Fulltime from './pages/Fulltime'
import Stopwatch from './pages/Stopwatch'
import Timer from './pages/Timer'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Fulltime />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/timer" element={<Timer />} />k
      </Routes>
    </>
  )
}

export default App
