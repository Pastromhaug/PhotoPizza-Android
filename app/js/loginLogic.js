/**
 * Created by perandre on 09.08.16.
 */

const FBSDK = require('react-native-fbsdk');
const {
    AccessToken
} = FBSDK;

import FIREBASE from '../js/firebase';
import * as firebase from 'firebase';
const firAuth = firebase.auth();
const firFbProvider = firebase.auth.FacebookAuthProvider;

export async function signInToFacebookThenFirebase() {
    try {
        let fbTokenData = await AccessToken.getCurrentAccessToken();
        let fbToken = fbTokenData.accessToken;
        let firFbCredential = firFbProvider.credential(fbToken);
        let firSignInData = await firAuth.signInWithCredential(firFbCredential);
        let firToken = firSignInData.uid;
        return  {
            success: true,
            fbToken: fbToken,
            firToken: firToken
        }
    }
    catch(err) {
        console.log('login error: ');
        console.log(err);
        return {
            success: false,
            fbToken: null,
            firToken: null
        }
    }

}

export function loginAndGoToGroups(dispatchUpdateAuth, navigateToGroups, navigateToLogin) {
    let loginDataPromise = signInToFacebookThenFirebase();
    loginDataPromise.then( (loginData) => {
        if (loginData.success == true){
            console.log('login success');
            let fbToken = loginData.fbToken;
            let firToken = loginData.firToken;
            dispatchUpdateAuth(fbToken,firToken);
            navigateToGroups()
        }
        else {
            console.log('login failure');
            navigateToLogin()
        }
    })
}

export default signInToFacebookThenFirebase;