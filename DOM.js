function trigger() {
    document.getElementById('btn').addEventListener('click', () => {
        fieldsCheck();
    });
}

function removeErrTrigger() {

    document.getElementById('first-name').addEventListener('input', () => {
        removeError(document.getElementById('first-name'));
    });
    document.getElementById('last-name').addEventListener('input', () => {
        removeError(document.getElementById('last-name'));
    });
    document.getElementById('message').addEventListener('input', () => {
        removeError(document.getElementById('message'));
    });

    document.getElementById('genderF').addEventListener('change', () => {

        if (document.getElementById('label-f').classList.contains('error-text')) {
            
            document.getElementById('gender-span').classList.remove('error-text');
            
            document.getElementById('label-m').classList.remove('error-text');
            
            document.getElementById('label-f').classList.remove('error-text');
        }
    });
    
    document.getElementById('genderM').addEventListener('change', () => {

        if (document.getElementById('label-m').classList.contains('error-text')) {

            document.getElementById('gender-span').classList.remove('error-text');
            
            document.getElementById('label-m').classList.remove('error-text');
            
            document.getElementById('label-f').classList.remove('error-text');
        }
    });
    
}

trigger();
removeErrTrigger();

function removeError(input) {
    
    if (/^[a-zA-Z]+$/.test(input.value) || input.classList.contains('error-border')) {
        input.classList.remove('error-border');
    }
}

function fieldsCheck() {

    let firstName = [document.getElementById('first-name'), document.getElementById('first-name').value];

    let lastName = [document.getElementById('last-name'), document.getElementById('last-name').value];

    let arrValid = [];

    const gender = document.getElementById('gender-span');

    let textArea = document.getElementById('message');

    let i = 0;

    if (/^[a-zA-Z]+$/.test(firstName[1])) {
        
        arrValid[i] = 0;

        if (firstName[0].classList.contains('error-border')) {

            firstName[0].classList.remove('error-border');
        }

        i++;

    } else {
        
        firstName[0].classList.add('error-border');

        document.getElementById('successMessage').classList.remove('success');

        document.getElementById('successMessage').innerHTML = '';
    }
    
    if (/^[a-zA-Z]+$/.test(lastName[1])) {
        
        arrValid[i] = 1;

        if (lastName[0].classList.contains('error-border')) {

            lastName[0].classList.remove('error-border');
        }

        i++;

    } else {
        
        lastName[0].classList.add('error-border');

        document.getElementById('successMessage').classList.remove('success');

        document.getElementById('successMessage').innerHTML = '';
    }

    if (document.getElementById('genderF').checked || document.getElementById('genderM').checked) {

        arrValid[i] = 2;

        if (gender.classList.contains('error-text')) { 

            gender.classList.remove('error-text');

            document.getElementById('label-m').classList.remove('error-text');

            document.getElementById('label-f').classList.remove('error-text');
        }

        i++;

    } else {

        gender.classList.add('error-text');

        document.getElementById('label-m').classList.add('error-text');

        document.getElementById('label-f').classList.add('error-text');

        document.getElementById('successMessage').classList.remove('success');

        document.getElementById('successMessage').innerHTML = '';
    }

    if (textArea.value.length) {

        arrValid[i] = 3;

        if (textArea.classList.contains('error-border')) {

            textArea.classList.remove('error-border');
        }

        i++;

    } else {

        textArea.classList.add('error-border');

        document.getElementById('successMessage').classList.remove('success');

        document.getElementById('successMessage').innerHTML = '';
    }

    if (arrValid.length === 4) {

        document.getElementById('successMessage').classList.add('success');

        document.getElementById('successMessage').innerHTML = '<span id="checkMark">&#10004</span> Thank you for contacting us, ' + firstName[1] + '<input type="button" value="&#10006" id="btnSuccessMsg">';

        console.log('First name = ' + firstName[1]);

        console.log('Lastt name = ' + lastName[1]);

        if (document.getElementById('genderF').checked) {

            
            console.log('Gender = female');

        } else {

            if (document.getElementById('genderM').checked) {

                console.log('Gender = male');
            }
        }

        console.log('Text Area = ' + textArea.value);

        const xBtn = document.getElementById('btnSuccessMsg');

        xBtn.addEventListener('click', removeSuccess);

    } else {

        document.getElementById('successMessage').classList.remove('success');

        document.getElementById('successMessage').innerHTML = '';
    }
}

function removeSuccess() {
    
    document.getElementById('successMessage').classList.remove('success');

    document.getElementById('successMessage').innerHTML = '';
}
    