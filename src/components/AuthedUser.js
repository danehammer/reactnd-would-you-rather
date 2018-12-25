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
      <div className='authed-user'>
        <img
          src={authedUser.avatarURL}
          alt='user avatar'
        />
        <div>{`Hello, ${authedUser.name}`}</div>
        <div
          className='sign-out'
          onClick={this.handleClick}
        >Sign Out</div>
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
