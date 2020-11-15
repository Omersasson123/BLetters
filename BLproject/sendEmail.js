let email = localStorage.getItem("email");
fetch('https://us-central1-bletters-596de.cloudfunctions.net/emailSender?dest=' + email)
    //.then(response => response.json())
    //.then(json => console.log(json));