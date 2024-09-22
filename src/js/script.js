let linhaQSeraAlterada = 1;

function salvarIdeias() {

    let ideia = document.getElementById('textoInput').value;

    if (ideia !== "") {

        let textoAlterado = document.querySelector(`#linha${linhaQSeraAlterada}`);
        
        if (textoAlterado) {
            textoAlterado.innerHTML = ideia;
        } else {
            alert("Elemento não encontrado!");
            linhaQSeraAlterada = 0; 
        }

        linhaQSeraAlterada += 1;
        console.log("Texto alterado!");
    } else {
        alert("Você precisa escrever uma ideia para salvá-la.");
    }

    document.getElementById('textoInput').value = "";
}




function irAoGithub() {
    window.location.replace('https://github.com/vithogigm')
}

function irAoLinkedin() {
    window.location.replace('https://www.linkedin.com/in/vithor-f%C3%A9lix-batista-a920b6272/') 
}
