function login(){

    let user_input_email = document.getElementById("email").value;
    let user_input_password = document.getElementById("password").value;

    

    let local_data = localStorage.getItem("amit");
    let data = JSON.parse(local_data);
    console.log(data)

    if (user_input_email === ""){
        console.log("incorrect email")
        document.getElementById("logHome").innerHTML = "incorrect email";

    }
    else if (user_input_email === data.email && user_input_password === data.password){
        window.open = "index.html"
        document.getElementById("logHome").innerHTML = "Welcome " + data.firstName +" " + data.lastName;
        console.log("login success")
    
       
    }else{
        document.getElementById("logHome").innerHTML = "login failed";
        console.log("login failed")
    }
    

   
}