// ============================================================
// Google Firebase & Cloud Firestore Configuration
// 100% Free Plan (Google Sign-In + Cloud Database + Hosting)
// Dream Star Real Estate & Developers
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyC6U_kbk2MCzkAYXpaK_k2GWWNlmsQN0k4",
  authDomain: "dream-star-realestate.firebaseapp.com",
  projectId: "dream-star-realestate",
  storageBucket: "dream-star-realestate.firebasestorage.app",
  messagingSenderId: "70062189355",
  appId: "1:70062189355:web:1151ecf9a16bf32d1cf36e",
  measurementId: "G-6V7N0NWRW6"
};

// State variables
let isFirebaseReady = false;
let auth = null;
let db = null;
let googleProvider = null;

try {
  if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore();
    googleProvider = new firebase.auth.GoogleAuthProvider();
    isFirebaseReady = true;
    console.log('🔥 Firebase Cloud Database & Google Auth Connected to dream-star-realestate!');
  }
} catch (err) {
  console.warn('Firebase initialization notice:', err);
}

// Export to window for app.js
window.isFirebaseReady = isFirebaseReady;
window.firebaseAuth = auth;
window.firestoreDb = db;
window.firebaseGoogleProvider = googleProvider;
window.firebaseConfig = firebaseConfig;
