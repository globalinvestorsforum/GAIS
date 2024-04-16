import './App.css'
import {
  RouterProvider , 
  createBrowserRouter , 
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import { Award, Contact, Gais, Home, Meet, Ticket, Conference } from './components/index';
import Layout from './components/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >

      <Route path='' element={<Conference/>}/>
      <Route path='/award' element={<Award/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/gais' element={<Gais/>}/>
      <Route path='/meet' element={<Meet/>}/>
      <Route path='/ticket' element={<Ticket/>}/>
      <Route path='/conference' element={<Conference/>}/>
      
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
