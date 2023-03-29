// Code to switch between Login and Register


let $loginToggle = $('.logreghover');

// Firstname validating

const $logregchange = () => {
    $loginToggle.on('click', () => {
        $('#login').toggleClass('hide');
        $('#register').toggleClass('hide');
        
    })
}

$(document).ready(() => {
      $logregchange();
});