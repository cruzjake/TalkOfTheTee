'use strict';

//grab a form
const form = document.querySelector('#contactForm');

//grab an input
const inputEmail = form.querySelector('#email');


//create a functions to push
    function firebasePush(input) {
        //push itself
        var mailsRef = document.firebase.database().ref('emails').push().set(
            {
                mail: input.value
            }
        );

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