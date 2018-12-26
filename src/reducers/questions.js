import {RECEIVE_QUESTIONS, ADD_QUESTION, REMOVE_ANSWER_QUESTION, ANSWER_QUESTION} from '../actions/questions'

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
    case ANSWER_QUESTION:
      const question = state[action.qid]
      const answer = question[action.answer]
      return {
        ...state,
        [action.qid]: {
          ...question,
          [action.answer]: {
            ...answer,
            votes: answer.votes ? answer.votes.concat([action.authedUser]) : [action.authedUser]
          }
        }
      }
    case REMOVE_ANSWER_QUESTION:
      const q = state[action.qid]
      const a = q[action.answer]
      return {
        ...state,
        [action.qid]: {
          ...q,
          [action.answer]: {
            ...a,
            votes: a.votes.filter(userId => userId !== action.authedUser)
          }
        }
      }
    default:
      return state
  }
}
