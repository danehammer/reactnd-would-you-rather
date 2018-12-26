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
        <div className='title'>Would You Rather</div>
        <div className='answer'>
          <div>
            {question.optionOne.text}
            {answer === 'optionOne' && <span className='answer-tag'> your answer</span>}
          </div>
          <div className='stats'>
            <div className='user-count'>{optionOneVotes} out of {totalVotes} users</div>
            <div className='percentage'>{(optionOneVotes / totalVotes * 100).toFixed(1)}%</div>
          </div>
        </div>
        <div className='answer'>
          <div>
            {question.optionTwo.text}
            {answer === 'optionTwo' && <span className='answer-tag'> your answer</span>}
          </div>
          <div className='stats'>
            <div className='user-count'>{optionTwoVotes} out of {totalVotes} users</div>
            <div className='percentage'>{(optionTwoVotes / totalVotes * 100).toFixed(1)}%</div>
          </div>
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
