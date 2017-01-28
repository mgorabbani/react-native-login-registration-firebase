const firebase =  require('firebase')
var config = {
  apiKey: "AIzaSyAodm2Mq42LuYCA-W_6vNJxmAkaaWtJNj8",
  authDomain: "chatapp-7f66c.firebaseapp.com",
  databaseURL: "https://chatapp-7f66c.firebaseio.com",
  storageBucket: "chatapp-7f66c.appspot.com",
  messagingSenderId: "565127427721"
};
export default firebaseApp = firebase.initializeApp(config);
