const admin = require("firebase-admin");

const serviceAccount = require('./firebase_keys.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mockpoints-default-rtdb.firebaseio.com"
});

let db = admin.firestore();

module.exports =  db;

