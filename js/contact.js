'use strict';

//grab a form
const form = document.querySelector('.form-inline');

//grab an input
const inputEmail = form.querySelector('#inputEmail');


//config your firebase push
const config = {
    apiKey: "AIzaSyDu31ycnqzp2AeCLFm_c3zCJKvvDdGNNpY",
    authDomain: "smartview-md-contact.firebaseapp.com",
    databaseURL: "smartview-md-contact.firebaseio.com",
    projectId: "smartview-md-contact",
    storageBucket: "smartview-md-contact.appspot.com",
    messagingSenderId: "691381116793"
};


//create a functions to push
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

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputEmail);

            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    }