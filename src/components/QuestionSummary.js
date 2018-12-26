import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {timeDifference} from '../utils/helpers'

export class QuestionSummary extends Component {
  render() {
    const {question, user, wasAskedByYou} = this.props
    return (
      <Link to={`${process.env.PUBLIC_URL}/questions/${question.id}`}>
        <div className='question-summary'>
          <img
            src={user.avatarURL}
            alt='asker avatar'
          />
          <div className='summary'>
            <div className='timestamp'>
              {timeDifference(Date.now(), question.timestamp)}
            </div>
            <div className='asked'>
              {wasAskedByYou ? 'you' : question.author} asked...
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
  const question = questions[id]
  const user = users[question.author]
  const wasAskedByYou = authedUser === question.author
  return {
    id,
    question,
    user,
    wasAskedByYou
  }
}

export default connect(mapStateToProps)(QuestionSummary)
