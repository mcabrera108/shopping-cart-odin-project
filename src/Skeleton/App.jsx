import { useState } from 'react'
import Header from '../Header/Header'
import Banner from '../Body/Banner'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
    </>
  )
}

export default App
