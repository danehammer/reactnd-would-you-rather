import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/questions'

export class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleChange = (e, field) => {
    e.preventDefault()

    this.setState({[field]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const {optionOne, optionTwo} = this.state
    this.props.dispatch(handleAddQuestion(optionOne, optionTwo))
    this.setState({optionOne: '', optionTwo: ''})
  }

  render() {
    const {optionOne, optionTwo} = this.state

    return (
      <div className='new-question'>
        <form>
          <div className='title'>Would You Rather</div>
          <input
            placeholder='Option 1'
            value={optionOne}
            onChange={(e) => this.handleChange(e, 'optionOne')}
          />
          <div className='or'>or</div>
          <input
            placeholder='Option 2'
            value={optionTwo}
            onChange={(e) => this.handleChange(e, 'optionTwo')}
          />
          <br/>
          <button
            className='submit'
            onClick={this.handleSubmit}
          >Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)
