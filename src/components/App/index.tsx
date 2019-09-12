import React from 'react'
import './App.scss'
import Home from 'pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {
  return (
    <div id="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}
