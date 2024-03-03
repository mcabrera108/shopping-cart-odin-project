import { useState } from 'react'
import Header from '../Header/Header'
import Banner from '../Body/Banner'
import Location from '../Body/Location';
import Footer from '../Footer/Footer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <Location />
      <Footer />
    </>
  )
}

export default App
