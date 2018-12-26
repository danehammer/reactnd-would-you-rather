import React, {Component} from 'react'
import {connect} from 'react-redux'

export class Leaderboard extends Component {
  render() {
    return (
      <ul className='leader'>
        <li className='leader-header leader-row'>
          <div className='fake-img'/>
          <div>Name</div>
          <div>Questions Asked</div>
          <div>Questions Answered</div>
        </li>
        {this.props.users.map((user) => (
          <li className='leader-row' key={user.id}>
            <div>
              <img src={user.avatarURL} alt='leader avatar'/>
            </div>
            <div>{user.name}</div>
            <div>{user.questions && user.questions.length}</div>
            <div>{user.answers && Object.keys(user.answers).length}</div>
          </li>
        ))}
      </ul>
    )
  }
}

function userSorter(a, b) {
  const aQuestions = a.questions ? a.questions.length : 0
  const aAnswers = a.answers ? Object.keys(a.answers).length : 0
  const bQuestions = b.questions ? b.questions.length : 0
  const bAnswers = b.answers ? Object.keys(b.answers).length : 0
  return (bQuestions + bAnswers) - (aQuestions + aAnswers)
}

function mapStateToProps({users}) {
  let userArray = Object.keys(users).map(userId => users[userId])
  userArray = userArray.sort(userSorter)
  return {
    users: userArray
  }
}

export default connect(mapStateToProps)(Leaderboard)
