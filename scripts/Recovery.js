
var recovey = document.getElementById("recovery");

recovery.addEventListener("click", function () {

    var newPassword = document.getElementById("passwordRecovery").value;
    var ConfirmNewPassword = document.getElementById("passwordConfirmRecovery").value;

if(newPassword != ConfirmNewPassword){
    alert("Cetifique-se de que ambas senhas sejam iguais.");
    return;
}

sessionStorage.setItem("password", newPassword);

alert("Senha redefinida com sucesso.");

window.location.href = "../pages/login.html";

});