
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import PagenotFound from './pages/PagenotFound'
import { useEffect, useState } from 'react'
import Loading from './Loading'
function App() {
  const[loader, setloader]=useState(false)
  useEffect(()=>{
      setloader(true)
      setTimeout(()=>{
         setloader(false)
      },8000)
  },[])
  return (
    <div className='app'>
      {
        loader ?
         <Loading/>
        :
        <BrowserRouter>
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/About' element={<About/>}/>
             <Route path='/Contact' element={<Contact/>}/>
             <Route path='/Menu' element={<Menu/>}/>
             <Route path='*' element={<PagenotFound/>}/>
         </Routes>
    </BrowserRouter>

      }
    
    
    </div>
  );
}

export default App;
