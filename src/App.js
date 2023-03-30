import React from 'react'
import Container from './Container';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Accordion from './accordion';

export default function App() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
      <Route path='/home' element={<Container/>}/>
      </Routes>
      </BrowserRouter>
     <Accordion/>
    </div>
  )
}
