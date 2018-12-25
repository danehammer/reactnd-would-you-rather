import React, {Component} from 'react'
import {connect} from 'react-redux'

export class UnansweredQuestion extends Component {

  state = {
    optionOne: null
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.onSubmit(e.target.id)
  }

  render() {
    const {question} = this.props
    const {optionOne} = this.state

    return (
      <form>
        <input
          type='radio'
          id='optionOne'
          name='rather'
          checked={optionOne}
        />
        <label>{question.optionOne.text}</label>
        <input
          type='radio'
          id='optionTwo'
          name='rather'
          checked={!optionOne}
        />
        <label>{question.optionTwo.text}</label>
        <button
          onClick={this.handleClick}
        >Submit</button>
      </form>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, {qid}) {
  return {
    qid,
    authedUser: users[authedUser],
    question: questions[qid]
  }
}

export default connect(mapStateToProps)(UnansweredQuestion)
