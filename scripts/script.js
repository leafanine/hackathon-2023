 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB63Q-39w6LeU-NW-fxvAc9PoSZOUxy29M",
    authDomain: "hackathon-2030-2308a.firebaseapp.com",
    projectId: "hackathon-2030-2308a",
    storageBucket: "hackathon-2030-2308a.appspot.com",
    messagingSenderId: "1075331485580",
    appId: "1:1075331485580:web:0620cea260ad4b2fa010a9",
    measurementId: "G-0PLBRJ17LQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth01 = getAuth(app);

    const submitButton = document.getElementById("submit");
    const signupButton = document.getElementById("sign-up");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const main = document.getElementById("main");
    const createacct = document.getElementById("create-acct")

    const signupEmailIn = document.getElementById("email-signup");
    const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
    const signupPasswordIn = document.getElementById("password-signup");
    const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
    const createacctbtn = document.getElementById("create-acct-btn");

    const returnBtn = document.getElementById("return-btn");

    var email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignUpPassword;

    createacctbtn.addEventListener("click", function() {
    var isVerified = true;

    signupEmail = signupEmailIn.value;
    confirmSignupEmail = confirmSignupEmailIn.value;
    if(signupEmail != confirmSignupEmail) {
        window.alert("Email fields do not match. Try again.")
        isVerified = false;
    }

    signupPassword = signupPasswordIn.value;
    confirmSignUpPassword = confirmSignUpPasswordIn.value;
    if(signupPassword != confirmSignUpPassword) {
        window.alert("Password fields do not match. Try again.")
        isVerified = false;
    }
    
    if(signupEmail == null || confirmSignupEmail == null || signupPassword == null || confirmSignUpPassword == null) {
        window.alert("Please fill out all required fields.");
        isVerified = false;
    }
    
    if(isVerified) {
        createUserWithEmailAndPassword(auth01, signupEmail, signupPassword)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        window.alert("Success! Account created.");
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        window.alert("Error occurred. Try again.");
        });
    }
    });

    submitButton.addEventListener("click", function() {
    email = emailInput.value;
    console.log(email);
    password = passwordInput.value;
    console.log(password);

    signInWithEmailAndPassword(auth01, email, password)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Success! Welcome back!");
        window.alert("Success! Welcome back!");
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error occurred. Try again.");
        window.alert("Error occurred. Try again.");
        });
    });

    signupButton.addEventListener("click", function() {
        main.style.display = "none";
        createacct.style.display = "block";
    });

    returnBtn.addEventListener("click", function() {
        main.style.display = "block";
        createacct.style.display = "none";
    });