// jQuery Code for Form Project

// Giving Variables to all Input-IDs

let $firstname = $('#firstname');
let $lastname = $('#lastname');
let $email = $('#email');
let $phonenumber = $('#phonenumber');
let $subject = $('#subject');
let $submit = $('#submit');
let $message = $('#message');

// Function to test if a string contains only letters, spaces and hyphens

const $noSpecChar = (str) => {
    return /^[a-zA-Z\- ]*$/.test(str);
  }

// Firstname validating

const $firstnameValidation = () => {
    $firstname.on('keyup', () => {
        if(!$noSpecChar($firstname.val())) {
            $('.firstname').html('Only letters, spaces and hyphens are considered as valid input!')
        } else {
            $('.firstname').html('');
            if($firstname.val().length >= 2) {
                $firstname.css({'border': '2px solid green'});
            } else {
                $firstname.css({'border': '1px solid #00ACEC'});
            }
        }
    })
}

// Lastname validation

const $lastnameValidation = () => {
    $lastname.on('keyup', () => {
        if(!$noSpecChar($lastname.val())) {
            $('.lastname').html('Only letters, spaces and hyphens are considered as valid input!')
        } else {
            $('.lastname').html('');
            if($lastname.val().length >= 2) {
                $lastname.css({'border': '2px solid green'});
            } else {
                $lastname.css({'border': '1px solid #00ACEC'});
            }
        }
    })
}

// Email Validation

// Reg Exp for Email

const $emailRegEx = (str) => {
    return /.+@.+\..+/.test(str);
} 

const $emailValidation = () => {
    $email.on('keyup', () => {
        if(!$emailRegEx($email.val())) {
            $('.email').html('Please enter a valid email address');
            $email.css({'border': '1px solid #00ACEC'});
        } else {
            $('.email').html('');
            $email.css({'border': '2px solid green'});
        }
    })
}

// Phonenumber validating

// Function to test if a string contains only numbers

const $onlyNumbers = (str) => {
    return /^\d+$/.test(str);
    }

const $phoneNumValidation = () => {
    $phonenumber.on('keyup', () => {
        if($onlyNumbers($phonenumber.val())) {
            $('.phonenumber').html('');
        } else {
            $('.phonenumber').html('Only numbers are considered as valid input!')
        }
    })
}

// Subject Validation

const $subjectValidation = () => {
    $subject.on('keyup', () => {
            if($subject.val().length >= 2) {
                $subject.css({'border': '2px solid green'})
            } else {
                $subject.css({'border': '1px solid #00ACEC'})
            }
        })
}


// Colorchange with minimum of 50 characters in textarea

const $charCount = () => {
    $message.on('keyup', event => {
        const $textLength = $message.val().length;
       
       if($textLength >= 50){
            $('.char-number').css('color', 'green');
            $('.char-number').html('Your message has enough characters: ' + $textLength);
            $message.css({'border': '2px solid green'})
       } else {
            $('.char-number').css('color', 'red');
            $('.char-number').html('You need to write at least 50 characters: ' + $textLength);
            $message.css({'border': '1px solid #00ACEC'})
                  
    }
    });
}


// Enabling to Submit the Form

const $enableSubmit = () => {
    $('.input').on('keyup', event => {
        if( $firstname.val().length >= 2 &&
            $lastname.val().length >= 2 &&
            $email.val().length >= 7 &&
            $subject.val().length >= 2 &&
            $message.val().length >= 50
           ) {
            $submit.removeAttr('disabled');
        } else {
            $submit.attr('disabled', 'disabled');
        }
    })
}

$(document).ready(() => {
    $firstnameValidation();
    $lastnameValidation();
    $emailValidation();
    $phoneNumValidation();
    $subjectValidation();
    $charCount();
    $enableSubmit();
});



// JSON.parse(); // Converting JSON string to JS Object
// JSON.stringify();  // to create JSON object