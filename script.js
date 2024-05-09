let userName = document.getElementById("name");
let errorMessage = document.getElementById("name_error");
let userInfo = document.getElementById("form");

function invalid (name) {
    const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialCharacters.test(name);
}

userInfo.addEventListener("submit", function (e) {
    let messageName = [];
    let i;

    if (invalid(userName.value) == true) {
        messageName.push("* Special characters are not allowed")
       }
       if (messageName.value) {
        e.preventDefault();
        errorMessage.innerHTML = messageName;
       }

    // This will reprompt the user if they don't enter an input in the form
    if (userName.value === "" || userName.value === null) {
        messageName.push("* This field is required");
    }
    if (messageName.value) {
        e.preventDefault();
        errorMessage.innerHTML = messageName;
    }

    //Thid will prompt the user to enter more than 3 character input
    if (userName.value.length <= 2) {
        messageName.push("* Your name must be more than 2 characters");
    }
    if (messageName.length <= 2) {
        e.preventDefault();
        errorMessage.innerHTML = messageName
    }

    //This will reprompt the user to if they enter only number
    if (isNaN(userName.value) == false) {
        messageName.push("* Your name must not be numbers only");
    }
    if (messageName.length) {
        e.preventDefault();
        errorMessage.innerHTML = messageName;
    }

    //This will load to the next page if the user enter correct format of their name
    if (userName.value.length > 2 && isNaN(userName.value) == true && invalid(userName.value) == false) {
        e.preventDefault();
        // localStorage.setItem('user', userName.value);
        form.reset();
        window.location.href = 'second.html';
        
    }
});


