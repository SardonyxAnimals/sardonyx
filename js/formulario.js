function validacao() {
    var nome = document.getElementById("nome_id")
    var email = document.getElementById("email_id")
    var msg = document.getElementById("msg_id")

    if (nome.value == "") {
        nome.focus();
        return;

    }
    if (email.value == "") {
        email.focus();
        return;

    }
    if (msg.value == "") {
        msg.focus();
        return;
    }
    alert("Obrigado, sr(a) " + nome.value + " por entrar em contato conosco. Responderemos em breve :)");

}