
// SUBSCRIBE-FORM EVENT LISTENERS
function subscribeFormEventListeners() {
    // Get the form
    let form = document.getElementById('subscribe-form');
    // Get the form inputs
    let formTextInputs = document.getElementsByClassName('form-text-input');
    // Create array from the form inputs
    formTextInputs = Array.from(formTextInputs);

    // Iterate over the form inputs
    // Add an onfocus event listener
    // If user focuses on form input, highlight the input in red
    formTextInputs.forEach((input) => {
        input.addEventListener('focus', function () {
            // Attribution:
            //  https://stackoverflow.com/questions/61992025/google-chrome-showing-black-border-on-focus-state-for-button-user-agent-styles
            input.style.outline = 'none';
            input.style.border = '2px solid var(--this-red)';
        })
        input.addEventListener('focusout', function () {
            input.style.border = '2px solid var(--off-black)';
        })
    })
    
    // Go through the same process as above to highlight checkbox options which have been selected
    var formCheckboxContainers = document.getElementsByClassName('checkbox-container');
    formCheckBoxContainers = Array.from(formCheckboxContainers);
    formCheckBoxContainers.forEach((container) => {
        // Making the container a variable makes it accessible in eventListener
        var container = container;
        let checkbox = container.getElementsByTagName('input')[0];
        let label = container.getElementsByTagName('label')[0];
        // Attribution:
        // https://stackoverflow.com/questions/9887360/how-can-i-check-if-a-checkbox-is-checked
        checkbox.addEventListener('change', e => {
            if (e.target.checked === true) {
                label.style.fontWeight = 'bolder';
            }
            else {
                label.style.fontWeight = 'normal';
            }
        })
    })

    // Get the form submit button
    var submitButton = document.getElementById('form-submit');
    // When button is clicked, do form validation
    submitButton.addEventListener('click', (e) => {
        // Counter keeps track of how many input errors the user has made
        var formInputErrors = 0;

        // Deletes all the error messages from previous submit
        if (document.getElementsByClassName('form-error')) {
            var errors = document.getElementsByClassName('form-error');
            errors = Array.from(errors);
            // Attribution: https://www.javascripttutorial.net/javascript-dom/javascript-removechild/
            errors.forEach(err => {
                form.removeChild(err);
            })
        }

        // Prevents automatic reload of page onclick of submit button
        // This is because we have no back-end --> 
        // Form data is not actually being sent anywhere...
        // Just generates a thank you text if the form's input is valid
        e.preventDefault();

        for (var i = 0; i < formTextInputs.length; i++) {
            // For all the obligatory (text) inputs in the form, reset border to black
            formTextInputs[i].style.border = '2px solid var(--off-black)';
            // Checks for empty inputs
            // Attribution: https://www.w3resource.com/javascript/form/non-empty-field.php
            if (formTextInputs[i].value.length === 0) {
                // Inserts an error message above the empty input
                var error = document.createElement("div");
                error.innerHTML = 'Please fill in this field!';
                error.className = 'form-error';
                error.id = `error${i + 1}`;
                formTextInputs[i].style.border = '2px solid var(--this-dark-red)';
                // Attribution: https://attacomsian.com/blog/javascript-dom-get-the-parent-of-an-element#:~:text=To%20get%20the%20parent%20node,element%20as%20a%20Node%20object.&text=The%20parentNode%20property%20is%20read,you%20can%20not%20modify%20it.
                form.insertBefore(error, formTextInputs[i].parentNode);
                // Increments the number of errors
                formInputErrors++;
            }
        }

        // Checks for invalid email address --> no '@' symbol in the email
        // Attribution: https://www.w3schools.com/jsref/jsref_includes.asp
        if (document.getElementById('email').value.length > 0 && !document.getElementById('email').value.includes('@')) {
            var error = document.createElement("div");
            error.innerHTML = 'Invalid email address.';
            error.className = 'form-error';
            error.id = `error${4}`;
            document.getElementById('email').style.border = '2px solid var(--this-dark-red)';
            form.insertBefore(error, document.getElementById('email').parentNode);
            // Increments the number of errors
            formInputErrors++;
        }

        // If form is valid, do this
        if (formInputErrors == 0) {
            // Hide form title and form
            let formTitle = document.getElementById('subscribe-form-heading');
            formTitle.style.display = 'none';
            formTitle.style.display = 'none';
            // Replace form with a thank you message and link back to homepage
            form.innerHTML = '<div id="thank-you-message"><h4>Thank you for signing up!</h4> <br> <h5 id="back-link">Back to <a href="index.html">Home</a></h5></div>';
            // Scroll to beginning of thank you message
            scrollToJustAboveElement(document.getElementById('thank-you-message'), 400);
        }
    })
}
