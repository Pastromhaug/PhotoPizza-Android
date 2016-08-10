/**
 * Created by perandre on 08.08.16.
 */

import {UPDATE_GROUP_IDS} from '../actions/groupsList';

const initial_state = {
    groupIds: []
};

export default function(state=initial_state, action) {
    switch(action.type) {
        case UPDATE_GROUP_IDS:
            return Object.assign({}, state, {groupIds: action.groupIds});
        default:
            return state
    }
}

