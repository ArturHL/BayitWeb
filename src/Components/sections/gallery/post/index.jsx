import './index.css'
import PropTypes from 'prop-types'

Post.propTypes = {
  src: PropTypes.string.isRequired,
  ticket1: PropTypes.string.isRequired,
  ticket2: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rooms: PropTypes.string.isRequired,
  baths: PropTypes.string.isRequired,
  m2: PropTypes.string.isRequired
}


function Post({src, ticket1, ticket2, price, title, rooms, baths, m2}) {
  return (
    <>
      <section className='postItem'>
        <img src={src} alt="" />
        <div className='categories'>
          <div className='principalTicket'>
            {ticket1}
          </div>
          <div className='secondaryTicket'>
            {ticket2}
          </div>
        </div>
        <section className='postInfo'>
          <h4 className='price'>{price}</h4>
          <h3 className='address'>{title}</h3>
          <div className='characteristics'>
            <div>{rooms}Cuartos</div>
            <div>{baths}Baños</div>
            <div>{m2}m2</div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Post