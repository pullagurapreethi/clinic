function signup(e) {
    e.preventDefault();

    let user = {
        name: name.value,
        email: email.value,
        password: password.value
    };

    if (password.value !== confirm.value) {
        msg.innerText = "Passwords do not match";
        return;
    }
    msg.innerText = "Signup successful!";
}

function login(e) {
    e.preventDefault();

    let savedUser = JSON.parse(localStorage.getItem("user"));

    if (
        savedUser &&
        loginEmail.value === savedUser.email &&
        loginPassword.value === savedUser.password
    ) {
        window.location.href = "index.html";
    } else {
        loginMsg.innerText = "Invalid login details";
    }
}


function contact(e) {
    e.preventDefault();
    contactMsg.innerText = "Message sent successfully!";
}


function searchDoctor() {
    let filter = search.value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display =
            cards[i].innerText.toLowerCase().includes(filter)
                ? "block"
                : "none";
    }
}