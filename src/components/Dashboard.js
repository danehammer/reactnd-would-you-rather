import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionSummary from './QuestionSummary'

export class Dashboard extends Component {

  state = {
    showAnswered: false
  }

  handleChange = (e) => {
    this.setState({showAnswered: e.target.id === 'answered'})
  }

  render() {
    const {authedUser, questionIds} = this.props
    const {showAnswered} = this.state
    const {answers} = authedUser

    return (
      <div>
        <h3>Dashboard</h3>
        <input
          type='radio'
          name='questions'
          id='unanswered'
          checked={!showAnswered}
          onChange={this.handleChange}
        />
        <label>Unanswered</label>
        <input
          type='radio'
          name='questions'
          id='answered'
          checked={showAnswered}
          onChange={this.handleChange}
        />
        <label>Answered</label>
        <ul>
          {questionIds.map((qid) => {
            const hasAnswered = Object.keys(answers).includes(qid)
            if (hasAnswered === showAnswered) {
              return (
                <li key={qid}>
                  <QuestionSummary id={qid}/>
                </li>
              )
            } else {
              return null
            }
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}) {
  return {
    authedUser: users[authedUser],
    questionIds: Object.keys(questions).sort((a,b) => (
      questions[b].timestamp - questions[a].timestamp
  ))}
}

export default connect(mapStateToProps)(Dashboard)
