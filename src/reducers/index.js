import { combineReducers } from 'redux'
import pets from './pets'

const petsApp = combineReducers({
  pets
})

export default petsApp