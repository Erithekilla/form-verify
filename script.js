const form = document.querySelector("#form")
const nomeInput = document.querySelector("#nome")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    if(nomeInput.value === ""){
        alert("Nome está vazio!");
        return;
    }
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Seu Email está vazio!");
        return;
    }
    if(!validatePassword(passwordInput.value, 8)){
        alert("A senha deve contar pelo menos 8 caracteres!");
        return;
    }
    if(jobSelect.value === ""){
        alert("Escolha sua situação!");
        return;
    }
    form.submit();
});

function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true
    } else {
        return false
    }
}

function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        return true
    } else{
        return false
    }
}
