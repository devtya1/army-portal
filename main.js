function login(){
    if(document.getElementById("username").value == "agent0479"){
        if(document.getElementById("password").value == "Pass@123"){
            localStorage.setItem("Username_portal", document.getElementById("username").value);
            window.location = "loading.html";
        } 
        else{
            document.getElementById("err").style.color = "red";
            document.getElementById("err").innerHTML = "Incorrect Id or Password!";
        }
    }
    else{
        document.getElementById("err").style.color = "red";
        document.getElementById("err").innerHTML = "Incorrect Id or Password!";
    }
}

function key(){
    // Get the input field
var input = document.getElementById("password");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    login();
  }
});
}