import { useState } from 'react'
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import UxuiPortfolio from './components/UxuiPortfolio';
import WebPortfolio from './components/WebPortfolio';
import Contact from './components/Contact';



function App() {
  const [count, setCount] = useState(0)

  return (
 <div>
  <Home/>
  <Aboutme/>
  <UxuiPortfolio/>
  <WebPortfolio/>
  <Contact/>
 </div>
  )
}

export default App
