import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import About from "./pages/About"

import './App.css'

export default function App () {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
