var email = document.querySelector('#email');
var username = document.querySelector('#username');
var password = document.querySelector('#password');
var form = document.querySelector("#myForm");



function checkName(){
    var min = 3;
    var name = username.value.trim();
    if(name.length <= 3){
     showError(username , "Name Must be More Than 3 Character");
 }
 else{
    removeError(username)
}
    // console.log(name)
}



function checkEmail(){
    // Regular Expression
    console.log('teeest')
    var re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    console.log(re.test(emailValid))
    var emailValid = email.value.trim()
    console.log(emailValid)
    if(emailValid === ""){
        showError(email , "Email Must be Not Empty")
    }
    else if(!re.test(emailValid)) {
        showError(email , "Enter Valid Email")
    }
    else{
        removeError(email)
    }
}



function checkPass(){
    var re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var passValid = password.value.trim();
    if(passValid === "") showError(password , "password Must be Not Empty");
    else if(!re.test(passValid)) showError(password , "enter password has at least 1 lower character , 1 upper ............");
    else removeError(password)
}


function showError(input , message){
    // var inputParet = input.parentElement
    // console.log(inputParet)
    // var sm = inputParet.querySelector('small')
    var small = input.nextElementSibling;
    small.textContent=message;
    // input.classlist.add("border-red");
    console.log(input)
    input.style.borderColor="red"
    console.log(small)
}



function removeError(input){
    var small = input.nextElementSibling;
    small.textContent="";
    input.style.borderColor = "gray";
}



form.addEventListener('input', function (e) {
    console.log(e.target.id); // username - email - password

    switch (e.target.id) {
        case 'username':
        checkName()
        break;
        case 'email':
        checkEmail();
            // console.log('dddd')
            break;
            case 'password' :
            checkPass()
            // console.log('pass')
            break;    
        }


    })



