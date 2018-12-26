import React, {Component} from 'react'
import {connect} from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'
import {timeDifference} from '../utils/helpers'

export class QuestionPage extends Component {

  render() {
    const {authedUser, question, questionUser, wasAskedByYou} = this.props
    const answer = authedUser.answers[question.id]
    return (
      <div className='question-page'>
        <div className='question-page-summary'>
          <img
            src={questionUser.avatarURL}
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
        { answer ?
          <AnsweredQuestion qid={question.id}/>
          :
          <UnansweredQuestion qid={question.id}/>
        }
      </div>
    )
  }
}

function mapStateToProps({authedUser, questions, users}, props) {
  const {id} = props.match.params
  const question = questions[id]
  const wasAskedByYou = authedUser === question.author

  return {
    authedUser: users[authedUser],
    question,
    questionUser: users[question.author],
    wasAskedByYou
  }
}

export default connect(mapStateToProps)(QuestionPage)
