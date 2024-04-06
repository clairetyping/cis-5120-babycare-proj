document.addEventListener('DOMContentLoaded', function() {
    
    let loginButton = document.getElementById('loginButton'); //log in
    let signUpButton = document.getElementById('signupButton'); // sign up
    let getStartedButton = document.getElementById('getStartedButton'); 

    let newFamilyButton = document.getElementById('newFamilyButton');

    let confirmButton = document.getElementById('confirmButton');
    let addButton = document.getElementById('addButton');
    let diaperIcon = document.getElementById('diaperIcon');
    let confirmDiaperButton = document.getElementById('confirmDiaperButton');
    let loginToMain = document.getElementById('loginToMain');

    if (loginButton) {
        loginButton.addEventListener('click', function() {
            window.location.href = 'loginPage.html';
        });
    }

    if (signUpButton) {
        signUpButton.addEventListener('click', function() {
            window.location.href = 'signupPage.html';
        });
    }

    if (getStartedButton) {
        getStartedButton.addEventListener('click', function() {
            console.log('clicking');
            window.location.href = 'newUserPage.html';
        });
    }


    if (newFamilyButton) {
        newFamilyButton.addEventListener('click', function() {
            window.location.href = 'registerUserPage.html';
        });
    }

    if(confirmButton){
        confirmButton.addEventListener('click', function() {
            window.location.href = 'mainPage.html';
        });
    }

    if(addButton){
        addButton.addEventListener('click', function(){
            window.location.href = "addRecord.html";
        });
    }

    if(diaperIcon){
        diaperIcon.addEventListener('click', function(){
            window.location.href = "recordDiaper.html";
        });
    }

    if(confirmDiaperButton){
        confirmDiaperButton.addEventListener('click', function(){
            window.location.href = "newAddedDiaper.html";
        });
    }

    if(loginToMain){
        loginToMain.addEventListener('click', function(){
            window.location.href = "mainPage.html";
        });
    }


});
