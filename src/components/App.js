import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    // TODO: protect this with them picking a user to auth as first,
    // but that will need to be a component and used for every route
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}

export default connect()(App)
