import React, {Component} from 'react'
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Question from './Question'

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <LoadingBar />
        <h3>Dashboard</h3>
        <ul>
          {this.props.questionIds.map((qid) => (
          <li key={qid}>
            <Question id={qid}/>
          </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({questions}) {
  return {
    questionIds: Object.keys(questions).sort((a,b) => (
      questions[b].timestamp - questions[a].timestamp
  ))}
}

export default connect(mapStateToProps)(Dashboard)
