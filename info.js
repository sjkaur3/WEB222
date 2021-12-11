  
function error(){
    
    var myform = document.querySelector("form");
    var password = myform.querySelector("#psw").value;
    var repassword = myform.querySelector("#psw2").value;
    var username = myform.querySelector("#un").value;
    var error = document.querySelector("aside");
    var valid = true;


    if(password.length < 6)
    {
        valid = false;
        var errortext = document.createTextNode("Password must be 6 characters in length");
        var errorpara = document.createElement("p");
        error.appendChild(errorpara).appendChild(errortext);
    }
    
    if(!password.match(/^[A-Za-z]/))
    {
        valid = false;
        var errortext = document.createTextNode("Password must start with a letter");
        var errorpara = document.createElement("p");
        error.appendChild(errorpara).appendChild(errortext);
    }
    else if(!password.match(/\d/))
    {
        valid = false;
        var errortext = document.createTextNode("Password must have at least one number");
        var errorpara = document.createElement("p");
        error.appendChild(errorpara).appendChild(errortext);
    }
    else if(!password.match(/[A-Z]/))
    {
        valid = false;
        var errortext = document.createTextNode("Password must have at least one capital letter");
        var errorpara = document.createElement("p");
        error.appendChild(errorpara).appendChild(errortext);
    }
    
    if(password != repassword)
    {
        valid = false;
        var errortext = document.createTextNode("Passwords don't match");
        var errorpara = document.createElement("p");
        error.appendChild(errorpara).appendChild(errortext);
    }
    
    if(username.length < 6)
    {
        valid = false;
        var errortext = document.createTextNode("User name must be 6 characters in length");
        var errorpara = document.createElement("p");
        error.appendChild(errorpara).appendChild(errortext);
    }
    else if(!username.match(/^[A-Za-z]/))
    {
        valid = false;
        var errortext = document.createTextNode("User name must start with a letter");
        var errorpara = document.createElement("p");
        error.appendChild(errorpara).appendChild(errortext);
    }
    
    if(valid)
    {
        var message = document.createTextNode("Success. Form submitted");
        var messagepara = document.createElement("p");
        error.appendChild(messagepara).appendChild(message);
    }
    
    return valid;
}