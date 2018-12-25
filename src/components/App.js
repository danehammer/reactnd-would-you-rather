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
import QuestionPage from './QuestionPage'

class App extends Component {
  componentDidMount() {
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
            <div className='top-bar'>
              <Nav />
              <AuthedUser />
            </div>
            <div>
              <Route path='/' exact component={Dashboard}/>
              <Route path='/questions/:id' component={QuestionPage}/>
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
