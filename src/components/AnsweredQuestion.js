import React, {Component} from 'react'
import {connect} from 'react-redux'

export class AnsweredQuestion extends Component {

  render() {
    const {authedUser, question} = this.props
    const answer = authedUser.answers[question.id]
    const optionOneVotes = question.optionOne.votes.length
    const optionTwoVotes = question.optionTwo.votes.length
    const totalVotes = optionOneVotes + optionTwoVotes
    return (
      <div>
        {answer === 'optionOne' &&
          <div>Your answer</div>
        }
        <div>{question.optionOne.text}</div>
        <div>
          <span>{optionOneVotes} / {totalVotes}, </span>
          <span>{(optionOneVotes / totalVotes * 100).toFixed(1)}%</span>
        </div>
        {answer === 'optionTwo' &&
          <div>Your answer</div>
        }
        <div>{question.optionTwo.text}</div>
        <div>
        <span>{optionTwoVotes} / {totalVotes}, </span>
        <span>{(optionTwoVotes / totalVotes * 100).toFixed(1)}%</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser, questions, users}, {qid}) {
  const question = questions[qid]

  return {
    qid,
    authedUser: users[authedUser],
    question
  }
}

export default connect(mapStateToProps)(AnsweredQuestion)
