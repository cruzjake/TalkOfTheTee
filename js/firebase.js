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
    function firebasePush(input) {


        //prevents from braking
        if (!document.firebase.apps.length) {
            document.firebase.initializeApp(config);
        }

        //push itself
        var mailsRef = documents.firebase.database().ref('emails').push().set(
            {
                mail: input.value
            }
        );

    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            document.firebasePush(inputEmail);

            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    }