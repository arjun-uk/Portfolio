import  firebase  from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAE7kBBkhzJb_8gXxdTR5TQCAM13pRwV5A",
  authDomain: "portfoliobackend-df6d2.firebaseapp.com",
  projectId: "portfoliobackend-df6d2",
  storageBucket: "portfoliobackend-df6d2.appspot.com",
  messagingSenderId: "1077657614279",
  appId: "1:1077657614279:web:96aa401c3429a6f9520be2"
};
const app = firebase.initializeApp(firebaseConfig);

export const Firebase = app;

