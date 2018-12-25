import React, {Component} from 'react'
import {connect} from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion';
import UnansweredQuestion from './UnansweredQuestion';

export class QuestionPage extends Component {

  render() {
    const {authedUser, question} = this.props
    const answer = authedUser.answers[question.id]
    return (
      <div>
        <h3>Would You Rather</h3>
        <div>
          <img
            src={authedUser.avatarURL}
            alt='user avatar'
          />
          Asked by <span>{authedUser.name}</span>
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

  return {
    authedUser: users[authedUser],
    question
  }
}

export default connect(mapStateToProps)(QuestionPage)
