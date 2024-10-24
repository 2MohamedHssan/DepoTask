import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'
import NotFound from './pages/NotFound'
import Main from './layout/main'
import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const App = () => {
    const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once:true
    })
    const fetching = async () => {
     try {
       const res = await fetch('/api/Users')
       setLoading(true)
      const alldata = await res.json()
       setData(alldata)
       setLoading(false)
     } catch (error) {
      console.log(Error,"No Data Found")
     }
    }
    fetching()
  }, [])
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}>
              <Route index element={<Home loading={loading} data={data} />} />
              <Route path='/user/:id' element={ <User data={data} />} />
          </Route>
          <Route path='*' element={ <NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

