const firebaseConfig = {
    apiKey: "AIzaSyBhw8KkgaW3121tihOUUcDEKFJhf7u9rK4",
    authDomain: "contacts-88c17.firebaseapp.com",
    databaseURL: "https://contacts-88c17-default-rtdb.firebaseio.com",
    projectId: "contacts-88c17",
    storageBucket: "contacts-88c17.appspot.com",
    messagingSenderId: "515058595461",
    appId: "1:515058595461:web:9b8fe1254425c9fe229bec",
    measurementId: "G-VST9RYWH3W"
  };

  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref("contactForm");

  document.getElementById("contactForm").addEventListener("submit", submitForm)

  function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var message = getElementVal("message");

    saveMessages(name, email, message);

    alert("Message submitted successfully!");

    window.location.reload();
  }

  const saveMessages = (name, email, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
      name : name,
      email : email,
      message : message,
    });
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }
