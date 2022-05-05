function login(){

    let user_input_email = document.getElementById("email").value.trim();
    let user_input_password = document.getElementById("password").value.trim();

    if (user_input_email === ""){
        console.log("incorrect email");
        document.getElementById("logHome").innerHTML = "empty email";

    }
    else if (user_input_password === ""){
        document.getElementById("logHome").innerHTML = "empty password";

    }
    else {
        let local_data = localStorage.getItem(user_input_email);
        let data = JSON.parse(local_data);
        console.log(data);
        if (user_input_email === data.email && user_input_password === data.password){
           
            document.getElementById("logHome").innerHTML = "Welcome " + data.firstName +" " + data.lastName;
            console.log("login success");
            location.href = "index.html";
           
        }else{
            document.getElementById("logHome").innerHTML = "login failed";
            console.log("login failed");
        }
    }
    
document.getElementById("logHome").innerHTML = "invalid data";
    
   
}
