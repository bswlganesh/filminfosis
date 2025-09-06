import React from 'react'
import {Header,Footer} from './components'
//import { MovieDetails} from './pages'
import ScrollToTop from './components/ScrollToTop'
import {AllRoutes} from './routes/AllRoutes'
export default function App() {
  return (
    <>              
      <Header/>
      <main>
         <ScrollToTop />
          <AllRoutes />
        </main>
      
      <Footer/>   
      
    </>
    
  )
}
