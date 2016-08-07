/**
 * Created by perandre on 07.08.16.
 */

export const FACEBOOK_TOKEN = 'FACEBOOK TOKE';
export function actionFacebookToken(token){
    return {type:FACEBOOK_TOKEN, token:token}
}