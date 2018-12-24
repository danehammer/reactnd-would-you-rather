import {getInitialData} from '../utils/api'
import {setAuthedUser} from './authedUser'
import {receiveUsers} from './users'
import {receiveQuestions} from './questions'
import {showLoading, hideLoading} from 'react-redux-loading'

// TODO: make this not hard-coded
const AUTHED_ID = 'johndoe'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}
