import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"

const firebaseConfig = {
    apiKey: "AIzaSyABq3hUaDyxiF8rLzwHX1zGvuKTPOeAQEA",
    authDomain: "gorlfriend-5dffc.firebaseapp.com",
    databaseURL: "https://gorlfriend-5dffc-default-rtdb.firebaseio.com",
    projectId: "gorlfriend-5dffc",
    storageBucket: "gorlfriend-5dffc.appspot.com",
    messagingSenderId: "522343118983",
    appId: "1:522343118983:web:59623b12a193079bd52022"
}

const app = initializeApp(firebaseConfig)

import {getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js"
const db = getDatabase()

document.getElementById ("yesbtn").addEventListener ("click", clickedYes, false);

function clickedYes() {
    set(ref(db, "gf"), {
        isgf: true,
        time: new Date().toUTCString()
    }).then(() => {
        window.location.href = "index.html"
    })  
}