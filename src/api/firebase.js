
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBtwgvmCf-RZyPQrM9RH12JsfNeRC1TvL4",
  authDomain: "tower-war-7761c.firebaseapp.com",
  projectId: "tower-war-7761c",
  storageBucket: "tower-war-7761c.appspot.com",
  messagingSenderId: "892800771322",
  appId: "1:892800771322:web:26b8b7f62cfe44bc11d543"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;