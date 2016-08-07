/**
 * Created by perandre on 07.08.16.
 */

var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");


var config = {
    apiKey: "AIzaSyBzfyFyjNYq2PSkMgge3i2pFCmzx6wpG_M",
    authDomain: "photo-pizza.firebaseapp.com",
    databaseURL: "https://photo-pizza.firebaseio.com",
    storageBucket: "photo-pizza.appspot.com",
};

export default firebase.initializeApp(config);