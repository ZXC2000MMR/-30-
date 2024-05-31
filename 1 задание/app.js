function validateForm(){
    let name = document.getElementById("name").value
    let error = document.getElementById("error-message")
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value
    console.log(name)
    if (name == ""){
        error.innerHTML="Не правильное имя"
    }
    else if(email.includes("@")){
        error.innerHTML=""
    }else if(message == ""){
        error.innerHTML="Пустое сообщение"
    }else{
        error.innerHTML="Не правильный емаил"
    }
}