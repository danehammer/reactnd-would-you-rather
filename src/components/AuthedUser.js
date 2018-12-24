import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

export class AuthedUser extends Component {
  handleClick = () => {
    this.props.dispatch(setAuthedUser(''))
  }

  render() {
    const {authedUser} = this.props
    return (
      <div>
        <img
          src={authedUser.avatarURL}
          alt='user avatar'
        />
        <div>{`Hello, ${authedUser.name}`}</div>
        <button
          onClick={this.handleClick}
        >Sign Out</button>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users}) {
  return {
    authedUser: users[authedUser]
  }
}

export default connect(mapStateToProps)(AuthedUser)
