import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

export class SignIn extends Component {
  handleChange = (e) => {
    this.props.dispatch(setAuthedUser(e.target.value))
  }

  render() {
    return (
      <div>
        <h3>Please sign in to continue</h3>
        <select
          defaultValue='Select a user'
          onChange={this.handleChange}
        >
          <option disabled>Select a user</option>
          {this.props.userIds.map(userId => <option key={userId}>{userId}</option>)}
        </select>
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return {
    userIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(SignIn)
