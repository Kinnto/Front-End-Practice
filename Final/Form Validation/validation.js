document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationForm").onsubmit = function(event) {
        var formIsValid = true;

        var errorFields = {
            email: /^[^@]+@[^@]+\.[^@]+$/,
            password: /.{6,}/,
            firstName: /\S+/,
            lastName: /\S+/,
            address: /\S+/,
            city: /\S+/,
            state: /^[A-Za-z]{2}$/,
            zip: /^\d{5}(-\d{4})?$/,
            phone: /^\d{3}-\d{3}-\d{4}$/,
            cardType: /\S+/,
            cardNumber: /^\d{4}-\d{4}-\d{4}-\d{4}$/,
            expDate: /^(0[1-9]|1[0-2])\/\d{4}$/
        };

        for (var key in errorFields) {
            var input = document.getElementById(key);
            var isValid = typeof errorFields[key] === 'function' ? errorFields[key](input.value) : errorFields[key].test(input.value);
            document.getElementById("error" + key.charAt(0).toUpperCase() + key.slice(1)).textContent = isValid ? "" : "Invalid input for " + key;
            formIsValid = formIsValid && isValid;
        }

        var password = document.getElementById("password").value;
        var verifyPassword = document.getElementById("verifyPassword").value;
        if (password !== verifyPassword) {
            document.getElementById("errorVerifyPassword").textContent = "Must be at least 6 characters";
            formIsValid = false;
        }

        if (!formIsValid) {
            event.preventDefault();
        }
    };

    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].oninput = function() {
            this.nextElementSibling.textContent = "";
        };
    }
});
