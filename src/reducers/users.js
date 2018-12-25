import {RECEIVE_USERS} from '../actions/users'
import {ADD_QUESTION, ANSWER_QUESTION, REMOVE_ANSWER_QUESTION} from '../actions/questions';

export default function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ANSWER_QUESTION:
      const user = state[action.authedUser]
      return {
        ...state,
        [user.id]: {
          ...user,
          answers: {
            ...user.answers,
            [action.qid]: action.answer
          }
        }
      }
    case REMOVE_ANSWER_QUESTION:
      // TODO
      return state
    case ADD_QUESTION:
      // TODO:
      return state
    default:
      return state
  }
}
