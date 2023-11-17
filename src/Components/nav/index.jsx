import './index.css'

import { RiMenu3Fill } from "react-icons/ri";

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='sectionLogo'>
          <img src="/assets/image-removebg-preview.png" alt="" />
          <h2>Bayit</h2>
        </div>
        <RiMenu3Fill className='iconMenu'/>
      </nav>
      <div className='toggableMenuNav'>
          <ul>
            <li></li>
          </ul>
      </div>
    </>
  )
}

export default Navbar