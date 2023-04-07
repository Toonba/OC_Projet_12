import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/index.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Dashboard from './page/Dashboard'
import Home from './page/Home'
import Error from './page/Error'

/**
 * @return Routes path to reach the different part of our app
 */

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router basename="/OC_Projet_12">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/user/:id" element={<Dashboard />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
