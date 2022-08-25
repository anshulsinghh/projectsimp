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

// set(ref(db, "gf"), {
//     isgf: false,
//     time: 0
// })

var countDownDate = new Date()
get(child(ref(db), "gf")).then((snapshot) => {
    if (snapshot.exists()) {
        if (snapshot.val().isgf) {
            countDownDate = new Date(snapshot.val().time)

            let elements = document.getElementsByClassName("shesaidyes")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "inline"
            }

            document.getElementById("envelope").style.display = "none"
        } else {
            let elements = document.getElementsByClassName("shesaidyes")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "none"
            }

            document.getElementById("envelope").style.display = "block";
        }
    }
})

var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = now - countDownDate.getTime();

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s 💗";
}, 1000);