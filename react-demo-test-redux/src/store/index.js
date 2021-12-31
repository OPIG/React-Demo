import {createStore} from 'redux'
import { ADD_ITEM, HANDLE_ADD_CLICK } from './actionTypes'
import Reducers from './reducers'

const store = createStore(Reducers)

export default store