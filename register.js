function onRegister(){
    //alert("hello");firstName lastName email mobileNumber password male female other
let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let email = document.getElementById("email").value;
let mobileNumber = document.getElementById("mobileNumber").value;
let password = document.getElementById("password").value;
let male = document.getElementById("male").value;
let female = document.getElementById("female").value;
let other = document.getElementById("other").value;
let gender = '';

if (firstName === ""){
    document.getElementById("regHome").innerHTML = "enter firstname";

}
else if (lastName === ""){
    document.getElementById("regHome2").innerHTML = "enter lastname";
}



if (male === "male"){
    gender = "male";
}else if (female === "female"){
    gender = "female";
}else {
    gender = "other";
}



const student = {
     firstName: firstName,
     lastName: lastName,
     email: email,
     mobileNumber: mobileNumber,
     password: password,
     gender: gender
}
localStorage.setItem(firstName, JSON.stringify(student));

}

