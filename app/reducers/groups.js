/**
 * Created by perandre on 08.08.16.
 */

import {UPDATE_GROUPS} from '../actions/groupsList';

const initial_state = {
    groupsList: {}
};

export default function(action) {
    switch(action.type) {
        case UPDATE_GROUPS:
            let toMerge = {};
            return Object.assign({}, state, );
        default:
            return state
    }
}

