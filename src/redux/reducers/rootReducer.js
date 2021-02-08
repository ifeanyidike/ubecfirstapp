import { combineReducers } from 'redux'

import { userLoginReducer } from './userReducers'

import {
    resultSetReducer,
    inCorrectResultSetReducer,
    correctResultSetReducer
} from './resultReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,

    resultSet: resultSetReducer,
    inCorrectResultSet: inCorrectResultSetReducer,
    correctResultSet: correctResultSetReducer
})

export default reducer