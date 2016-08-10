/**
 * Created by perandre on 05.08.16.
 */

import { combineReducers } from 'redux'
import navigation from './navigation'
import auth from './auth'
import groupsList from './groupsList'

const rootReducer = combineReducers({
    navigation,
    auth,
    groupsList
});

export default rootReducer