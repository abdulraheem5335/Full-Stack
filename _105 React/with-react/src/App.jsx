import { useState } from 'react'
import Navbar from "./component/Navbar.jsx"
import Footer from "./component/Footer.jsx"

function App() {
  const [value, setValue] = useState(0)


  return (
    <>
      <div className='App'>
        <Navbar logoText="Nustify Fuck"/>
        <div className="value">
          {value}
        </div>
        <button onClick={() => setValue(value+1)}>Counter</button>

        <Footer/>
      </div>
    </>
  )
}

export default App
