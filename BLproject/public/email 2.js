/* Checks for valid email, and sends info to server. */

/*Regex front-end check for valid email. */


function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/*Handles click on 'Next' button. */
function nextHandler() {
    let email = document.getElementById('email').value;
    if (emailIsValid(email)) {
        /* store email in backend */
        
        localStorage.setItem('email', email);
        window.location = 'selectBlogsPage.html';
    } else {
        alert("Invalid Email!")
    }
}

/* Remembers email input if page is relaoded, or revisited. */
function onLoad() {
    let inputBox = document.getElementById('email');
    let prevSub = localStorage.getItem('email');
    if (prevSub != null) {
        inputBox.value = prevSub;
    }
}

/* Loads previous submission if exists. */
onLoad();

function signIn() {
    // Sign into Firebase using popup auth & Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    let email = document.getElementById('email').value;
    firebase.auth().createUserWithEmailAndPassword(email, "hiii345")
  }


const next = document.getElementById('next');
next.addEventListener('click', nextHandler);