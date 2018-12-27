import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'
import Nav from './Nav'
import NewQuestion from './NewQuestion'
import SignIn from './SignIn'
import AuthedUser from './AuthedUser'
import QuestionPage from './QuestionPage'
import Leaderboard from './Leaderboard'
import NotFound from './NotFound'

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
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard}/>
              <Route exact path={`${process.env.PUBLIC_URL}/questions/:id`} component={QuestionPage}/>
              <Route exact path={`${process.env.PUBLIC_URL}/add`} component={NewQuestion}/>
              <Route exact path={`${process.env.PUBLIC_URL}/leaderboard`} component={Leaderboard}/>
              <Route component={NotFound}/>
            </Switch>
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
