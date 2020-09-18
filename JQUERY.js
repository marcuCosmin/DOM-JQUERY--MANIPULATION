$(function() {

    trigger();
    window.validateErrTrig = 0;
});

function trigger() {
    $('#btn').on('click', () => {
        validateErrTrig = 1;
        fieldsCheck();
    });
}

function removeErrTrigger() {

    $('#first-name').on('input', () => {
        removeError($('#first-name'));
    });

    $('#last-name').on('input', () => {
        removeError($('#last-name'));
    });

    $('#message').on('input', () => {
        removeError($('#message'));
    });

    $('#genderF').change(() => {

        if ($('#label-f').hasClass('error-text')) {
            
            
            $('#gender-span').removeClass('error-text');
            
            $('#label-m').removeClass('error-text');
            
            $('#label-f').removeClass('error-text');
        }
    });
    
    $('#genderM').change(() => {

        if ($('#label-m').hasClass('error-text')) {

            $('#gender-span').removeClass('error-text');
            
            $('#label-m').removeClass('error-text');
            
            $('#label-f').removeClass('error-text');
        }
    });
    
}

function removeError(input) {
    
    if (/^[a-zA-Z]+$/.test(input.val()) || input.hasClass('error-border')) {
        input.removeClass('error-border');
    }
}

function fieldsCheck() {

    if (validateErrTrig === 1) {

        removeErrTrigger();
    } 


    let firstName = [$('#first-name'), $('#first-name').val()];

    let lastName = [$('#last-name'), $('#last-name').val()];

    let arrValid = [];

    const gender = $('#gender-span');

    const textArea = $('#message');


    let i = 0;

    const successMsg = $('#successMessage');

    if (/^[a-zA-Z]+$/.test(firstName[1])) {
        
        arrValid[i] = 0;

        if (firstName[0].hasClass('error-border')) {

            firstName[0].removeClass('error-border');
        }

        i++;

    } else {
        
        firstName[0].addClass('error-border');

        successMsg.removeClass('success');

        successMsg.html('');
    }
    
    if (/^[a-zA-Z]+$/.test(lastName[1])) {
        
        arrValid[i] = 1;

        if (lastName[0].hasClass('error-border')) {

            lastName[0].removeClass('error-border');
        }

        i++;

    } else {
        
        lastName[0].addClass('error-border');

        successMsg.removeClass('success');

        successMsg.html('');
    }

    if ($('#genderF').is(':checked') || $('#genderM').is(':checked')) {

        arrValid[i] = 2;

        if (gender.hasClass('error-text')) { 

            gender.removeClass('error-text');

            $('#label-m').removeClass('error-text');

            $('#label-f').removeClass('error-text');
        }

        i++;

    } else {

        gender.addClass('error-text');

        $('#label-m').addClass('error-text');

        $('#label-f').addClass('error-text');

        successMsg.removeClass('success');

        successMsg.html('');
    }

    if (textArea.val().length) {

        arrValid[i] = 3;

        if (textArea.hasClass('error-border')) {

            textArea.removeClass('error-border');
        }

        i++;

    } else {

        textArea.addClass('error-border');

        successMsg.removeClass('success');

        successMsg.html('');
    }

    if (arrValid.length === 4) {

        successMsg.addClass('success');

        successMsg.html('<span id="checkMark">&#10004</span> Thank you for contacting us, ' + firstName[1] + '<input type="button" value="&#10006" id="btnSuccessMsg">');

        console.log('First name = ' + firstName[1]);

        console.log('Lastt name = ' + lastName[1]);

        if ($('#genderF').is(':checked')) {

            
            console.log('Gender = female');

        } else {

            if ($('#genderM').is(':checked')) {

                console.log('Gender = male');
            }
        }

        console.log('Text Area = ' + textArea.val());

        const xBtn = $('#btnSuccessMsg');

        xBtn.on('click', removeSuccess);

    } else {

        successMsg.removeClass('success');

        successMsg.html('');

    }

}

function removeSuccess() {

    const successMsg = $('#successMessage');
    
    successMsg.removeClass('success');

    successMsg.html('');
}
    