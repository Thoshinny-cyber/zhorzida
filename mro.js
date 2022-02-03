const signinForm = document.querySelector('#login_div');
signinForm.addEventListener('submit',(e) => {
    e.preventDefault();

    //get user info 
    const email = signinForm['email'].value;
    const password = signinForm['password'].value;

    //sign up the user 
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(cred =>{
        console.log(cred.user); 
        window.alert("Logged In successfully!!");
        const modal = document.querySelector('#sign-in');  
        window.location.href="updateform.html";
    })
    .catch((error) => {
        var errorCode = error.code; 
        var errorMessage = error.message; 
        window.alert("Invalid Email id");
        signinForm.reset();
    })
});