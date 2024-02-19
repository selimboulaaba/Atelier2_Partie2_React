import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Events from './components/Events';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import EventDetail from './components/EventDetail';

function App() {

  return (
    <Routes>
      <Route path="/events">
        <Route path="" element={<Events/>}/>
        <Route path=":id" element={<EventDetail/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>  
    </Routes>
  )
}

export default App
