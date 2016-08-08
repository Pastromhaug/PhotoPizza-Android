/**
 * Created by perandre on 07.08.16.
 */

export const FACEBOOK_TOKEN = 'FACEBOOK TOKE';
export function actionFacebookToken(token){
    return {type:FACEBOOK_TOKEN, token:token}
}

export const UPDATE_AUTH = 'UPDATE_AUTH';
export function actionUpdateAuth(facebookToken, firebaseToken) {
    return {type: UPDATE_AUTH, auth: {facebookToken:facebookToken, firebaseToken:firebaseToken}}
}