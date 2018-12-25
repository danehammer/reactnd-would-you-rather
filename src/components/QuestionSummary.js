import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class QuestionSummary extends Component {
  render() {
    const {question} = this.props
    return (
      <Link to={`/questions/${question.id}`}>
        <div>{question.id}</div>
        <div>{question.author}</div>
        <div>{question.optionOne.text}</div>
        <div>{question.optionTwo.text}</div>
      </Link>
    )
  }
}

function mapStateToProps({questions}, {id}) {
  return {
    question: questions[id]
  }
}

export default connect(mapStateToProps)(QuestionSummary)
