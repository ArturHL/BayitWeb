import './index.css'
import PropTypes from 'prop-types'

SectionA.propTypes = {
  text: PropTypes.string.isRequired
}

function SectionA({text}) {
  return (
    <>
      <section className='sectionA'>
        <h4>GRANDES PROPIEDADES</h4>
        <h2>Inmobiliaria Bayit</h2>
        <p>{text}</p>
        <button>CONTACTANOS</button>
      </section>
    </>
  )
}

export default SectionA