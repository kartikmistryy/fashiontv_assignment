"use client"
import './App.css'
import Footer from './components/Footer'
import About from './Sections/About'
import Franchise from './Sections/Franchise'
import Header from './Sections/Header'
import Outlets from './Sections/Outlets'
import SalesKitDownload from './Sections/SalesKitDownload'

function App() {


  return (
    <div className='w-full h-full flex flex-col'>
      <Header/>
      <About/>
      <Outlets/>
      <Franchise/>
      <SalesKitDownload/>
      <Footer/>
    </div>
  )
}

export default App
