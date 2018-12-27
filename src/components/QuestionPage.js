import React, {Component} from 'react'
import {connect} from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'
import {timeDifference} from '../utils/helpers'
import NotFound from './NotFound'

export class QuestionPage extends Component {

  render() {
    const {authedUser, question, questionUser, wasAskedByYou} = this.props

    // The router will match /questions/1234 where 1234 is not a real question
    // id, in that case, show our 404 component
    if (!question) {
      return <NotFound/>
    }

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
  const wasAskedByYou = question ? authedUser === question.author : false

  return {
    authedUser: users[authedUser],
    question,
    questionUser: question ? users[question.author] : null,
    wasAskedByYou
  }
}

export default connect(mapStateToProps)(QuestionPage)
