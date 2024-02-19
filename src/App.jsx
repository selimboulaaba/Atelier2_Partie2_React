import React, { Suspense, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {

  const Events = React.lazy(() => import('./components/Events'))
  const EventDetail = React.lazy(() => import('./components/EventDetail'))
  const NotFound = React.lazy(() => import('./components/NotFound'))

  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <Routes>
        <Route path="/events">
          <Route path="" element={<Events />} />
          <Route path=":id" element={<EventDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
