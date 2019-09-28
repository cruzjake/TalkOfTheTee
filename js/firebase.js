'use strict';

//grab a form
const form = document.querySelector('#contactForm');

//grab an input
const inputEmail = form.querySelector('#email');


//config your firebase push
const config = {
    apiKey: "AIzaSyCfI_1234455glTdTNjFA3kAvmimlU",
    authDomain: "example-9167e.firebaseapp.com",
    databaseURL: "example-9167e.firebaseio.com",
    projectId: "example-9167e",
    storageBucket: "example-9167e.appspot.com",
    messagingSenderId: "6271234586832"
};


//create a functions to push
function firebase.database() {

    function firebasePush(input) {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        //push itself
        var mailsRef = firebase.database().ref('emails').push().set(
            {
                mail: input.value
            }
        );

    }
}
//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputEmail);

            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    }