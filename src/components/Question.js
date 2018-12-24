import React, {Component} from 'react'
import {connect} from 'react-redux'

export class Question extends Component {
  render() {
    const {question} = this.props
    return (
      <div>
        <div>{question.id}</div>
        <div>{question.author}</div>
        <div>{question.optionOne.text}</div>
        <div>{question.optionTwo.text}</div>
      </div>
    )
  }
}

function mapStateToProps({questions}, {id}) {
  return {
    question: questions[id]
  }
}

export default connect(mapStateToProps)(Question)
