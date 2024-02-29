import { useState } from 'react'
import Header from '../Header/Header'
import Banner from '../Body/Banner'
import Location from '../Body/Location';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <Location />
    </>
  )
}

export default App
