import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAnswerQuestion} from '../actions/questions';

export class UnansweredQuestion extends Component {

  state = {
    option: null
  }

  handleChange = (e) => {
    this.setState({option: e.target.id})
  }

  handleClick = (e) => {
    e.preventDefault()
    const answer = this.state.option
    const {dispatch, qid} = this.props
    dispatch(handleAnswerQuestion(qid, answer))
  }

  render() {
    const {question} = this.props
    const {option} = this.state

    return (
      <form className='unanswered'>
        <div className='title'>Would You Rather</div>
        <div className='option'>
          <input
            type='radio'
            id='optionOne'
            name='rather'
            checked={option === 'optionOne'}
            onChange={this.handleChange}
          />
          <label>{question.optionOne.text}</label>
        </div>
        <div className='option'>
          <input
            type='radio'
            id='optionTwo'
            name='rather'
            checked={option === 'optionTwo'}
            onChange={this.handleChange}
          />
          <label>{question.optionTwo.text}</label>
        </div>
        <button
          className='submit'
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
