function validateForm() {
  var loginInput = document.getElementsByName("login")[0];
  var senhaInput = document.getElementsByName("senha")[0];
  var entrarButton = document.querySelector('.botao-entrar');

  if (loginInput.value.trim() === "" || senhaInput.value.trim() === "") {
    console.log("Evento acionado")
    entrarButton.disabled = true;
  } else {
    console.log("Evento acionado")
    entrarButton.disabled = false;
  }
}

function submitForm() {
  var loginInput = document.getElementsByName("login")[0];
  var senhaInput = document.getElementsByName("senha")[0];

  if (loginInput.value.trim() === "" || senhaInput.value.trim() === "") {
    console.log("Evento acionado")
    return;

  }
  console.log("Redirecionando para entrar.html")
  location.href = "entrar.html"; 
  

}