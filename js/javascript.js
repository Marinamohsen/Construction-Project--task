var username = document.querySelector('#username');
var email = document.querySelector('#email');
var msg = document.querySelector('#msg');
var form = document.querySelector("#myForm");



function checkName(){
	var name = username.value.trim();
	if(name.length <= 4){
		showError(username , "Name Must be More Than 4 Character");
	}
	else{
		removeError(username)
	}

}


function checkEmail(){
	var re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	var emailValid = email.value.trim()
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



function checkMsg(){
	var msgContent = msg.value.trim();
			console.log(msgContent.length <= 5);

	if(msgContent.length == 0){

		showError(msg , "It shouldn't be empty");
	}
	else{
		removeError(msg)
	}

}

function showError(input , message){

	var small = input.nextElementSibling;
	small.textContent=message;
	input.style.border="1px solid red"
}


function removeError(input){
	var small = input.nextElementSibling;
	small.textContent="";
	input.style.borderColor = "gray";
}


form.addEventListener('input', function (e) {

	switch (e.target.id) {
		case 'username':
		checkName();
		break;

		case 'email':
		checkEmail();
		break;

		case 'msg' :
		checkMsg();
		break;

	}


})



