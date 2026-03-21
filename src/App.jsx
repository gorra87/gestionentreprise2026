

import 'bootstrap/dist/css/bootstrap.min.css'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import Accueil from './composants/accueil'
import './App.css'

function App() {
  

  return (
     <div>
   <div className='d-flex flex-column w-25 bg-primary rounded my-5'>
    <p className='fs-1 text-danger fw-900 w-100'>gora</p>
    <img src="agrielevage.jpg" alt="mon image" className='rounded-pill'/>
    <p className='w-100'>description</p>
   </div>
   <div className='d-flex flex-column w-25 bg-primary opacity-75 rounded my-5 bg-success-hover'>
    <p className='fs-1 text-danger fw-900 w-100'>gora</p>
    <img src="agrielevage.jpg" alt="mon image" className='rounded-pill'/>
        <p className='w-100 text-light'>description<span class="badge text-bg-danger">New</span></p>
        
   </div>
    </div>
  )
}

export default App
 

