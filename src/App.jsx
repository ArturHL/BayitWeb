import Navbar from './Components/nav'
import SectionA from './Components/sections/typeA/index'
import GallerySection from './Components/sections/gallery'

import'./App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <header className='hero-section'>
          <h4>TU CAMINO A CASA</h4>
          <h1>ENCUNTRA TU PROPIEDAD PERFECTA</h1>
          <button>EXPLORE</button>
        </header>
      </main>
      <SectionA text={"Nuestro negocio no es vender propiedades, sino ayudar a nuestro cliente a tomar la decisión perfecta."}/>
      <GallerySection />
    </>
  )
}

export default App
