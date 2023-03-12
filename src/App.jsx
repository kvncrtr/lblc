import React from 'react'
import './App.css'
import Nav from './components/Nav'

// assets 
import logo from './assets/nav-logo.png'

function App() {
  return (
    <div className="App">
      <header className='primary-header' >
        {/* logo 
        add a className and others to this node
        */}
        <img src={logo} alt='little brook learning center&#39s logo' />
        
        {/* navbar 
         add class utilities to these and swap for links 
         when we intergrate react router 
         */} 
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Enrollment</li>
            <li>For Parents</li>
            <li>Gallery</li>
            <li>Testimonies</li>
          </ul>
        </nav>

      </header>
    </div>
  )
}

export default App
