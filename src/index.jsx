import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Error from './components/error'
import Header from './components/Header'
import Footer from './components/Footer'
import DetailsAppart from './pages/DetailsAppart'

import './styles/minireset.min.css'
import './styles/index.css'
import './styles/responsive.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/details/:id"
          render={(props) => <DetailsAppart {...props} />}
        />
        <Route path="/a-propos">
          <Apropos />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
