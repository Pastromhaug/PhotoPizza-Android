/**
 * Created by perandre on 07.08.16.
 */

import {FACEBOOK_TOKEN, UPDATE_AUTH} from '../actions/auth';

const initialState = {
    facebookToken:null,
    firebaseToken: null
};

export default function auth(state=initialState, action) {
    switch (action.type){
        case FACEBOOK_TOKEN:
            return Object.assign({}, state, {facebookToken: action.token});
        case UPDATE_AUTH:
            return Object.assign({}, state, {facebookToken: action.auth.facebookToken,
                                            firebaseToken: action.auth.firebaseToken});
        default:
            return state
    }
}