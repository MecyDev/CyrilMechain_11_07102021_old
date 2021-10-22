import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home'
import Apropos from '../../pages/Apropos'
import Error from '../error'
import Header from '../Header'
import Footer from '../Footer'
import DetailsAppart from '../../pages/DetailsAppart'
import { Component } from 'react'

class Routing extends Component {
  render() {
    return (
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
    )
  }
}

export default Routing
