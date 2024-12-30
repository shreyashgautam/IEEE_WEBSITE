import { useState } from 'react'
import About from './components/About.jsx';
import Heading from './components/heading.jsx';
import Aboutfac from './components/Aboutfac.jsx';
import Aboutfac2 from './components/Aboutfac2.jsx';
import PastEvents from './components/PastEvents.jsx';
import Gallery from './components/Gallery.jsx';
import Boards from './components/Boards.jsx';
import Advisory from './components/Advisory.jsx';
import Leads from './components/Leads.jsx';
function App() {
 
  return (
    <>
      <Heading />
      <About />
      <Aboutfac />
      <Aboutfac2 />
      <PastEvents />
      <Gallery/>
      <Boards/>
      <Advisory/>
      <Leads/>
    </>
  )

}

export default App
