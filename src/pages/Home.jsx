import { ClipLoader } from 'react-spinners'
import Card from '../components/Card'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ImgeSwiper from '../components/Swiper'
function Home({ data, loading }) {
  return (
    <div className='bg-slate-100'>
      <ImgeSwiper />
      <Hero className=" fixed" />
        <h2 className='mx-auto w-fit py-8 text-4xl font-bold'>Our Team</h2>
      {
        loading ? <ClipLoader/> :  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2 container md:px-0 mx-auto bg-slate-100'>
         {data.map((e,index) => (
        <Card key={index} data={e} />
      ))}
      </div>
      }
      <Footer />
     </div>
  )
}

export default Home
