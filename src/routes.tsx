import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

// import Details from './pages/Details'
import Home from './pages/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      {/* <Route path="/details" component={Details} /> */}

    </BrowserRouter>
  )
}

export default Routes
