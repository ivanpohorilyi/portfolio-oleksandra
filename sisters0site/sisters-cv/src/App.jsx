import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './ui/Header/Header'
import Body from './ui/Body/Body'
import Footer from './ui/Footer/Footer'


const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
