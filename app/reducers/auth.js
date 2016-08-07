/**
 * Created by perandre on 07.08.16.
 */

import {FACEBOOK_TOKEN} from '../actions/auth';

const initialState = {
    facebookToken:null
};

export default function auth(state=initialState, action) {
    switch (action.type){
        case FACEBOOK_TOKEN:
            return Object.assign({}, state, action.token);
        default:
            return state
    }
}