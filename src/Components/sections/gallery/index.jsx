import './index.css'
import Post from './post/index'
// {src, ticket1, ticket2, price, title, rooms, baths, m2}
function GallerySection() {
  const post = [
    {
      src: "https://lh3.googleusercontent.com/t36DY6PH7c4H6v9FjRbzX8hPhDuvU6Pu-cqRnvgdv6MvJXeSCOesvq9YwaSr1xM9pIhb59tpz1wp-DmV41075ZwuM-ZAe6_0bympMZ_IpYUU8AoCm0pN06Pw4NYodLtxXw=w1280",
      ticket1: "En Renta",
      ticket2: "Disponible",
      price: "$15,000.00",
      title: "Departamento  en Renta Santa Inés, Azcapotzalco",
      rooms: "2",
      baths: "1",
      m2: "120"
    },
    {
      src: "https://propiedadescom.s3.amazonaws.com/files/original/a400f65c50b3a71f606425e878c4c246.jpg",
      ticket1: "En Renta",
      ticket2: "Disponible",
      price: "$15,000.00",
      title: "Oficinas Tláhuac desde",
      rooms: "2",
      baths: "1",
      m2: "120"
    },
    {
      src: "https://propiedadescom.s3.amazonaws.com/files/original/d234113b7aa1feeaafa69def2cc64346.JPG",
      ticket1: "En Renta",
      ticket2: "Disponible",
      price: "$15,000.00",
      title: "Casa San Vicente Chicoloapan ",
      rooms: "2",
      baths: "1",
      m2: "120"
    }
  ]
  return (
    <section className='gallery'>
      {post.map((post) => {
        return <Post key={post.title} src={post.src} ticket1={post.ticket1} ticket2={post.ticket2} price={post.price} title={post.title} rooms={post.rooms} baths={post.baths} m2={post.m2} />
      })}
      <button className='button2'>VER TODA LA LISTA</button>
    </section>
  )
}

export default GallerySection