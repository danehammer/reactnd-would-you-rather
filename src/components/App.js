import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'
import Nav from './Nav'
import NewQuestion from './NewQuestion'
import SignIn from './SignIn'
import AuthedUser from './AuthedUser'

class App extends Component {
  componentDidMount() {
    // TODO: protect this with them picking a user to auth as first,
    // but that will need to be a component and used for every route
    this.props.dispatch(handleInitialData())
  }

  render() {
    if (!this.props.authedUser) {
      return <SignIn/>
    }

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            <AuthedUser />
            <div>
              <Route path='/' exact component={Dashboard}/>
              {/* TODO: <Route path='/questions/:id' component={QuestionPage}/> */}
              <Route path='/new' component={NewQuestion}/>
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
