const formulario = document.querySelector('form');



function formularioEnviado (resposta) {
    if(resposta.ok){

        formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7'><span style='color: #317A00;'>Mensagem Enviada.</span> Em breve entraremos em contato. </p>";

    } else {
        formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7'><span style='color: #E00000;'>Sua mensagem não foi enviada.</span> Caso prefira, nos mande mensagem via Whatsapp: (61) 99635-5576 </p>";
    }
}

function enviarFormulario (event){
    event.preventDefault();
    const botao = document.querySelector('form button');
    botao.disable = true;
    botao.innerText = 'Enviando...'

    const data = new FormData(formulario);


fetch("./envia.php", {
    method: "POST",
    body:data,
}).then(formularioEnviado);

}

formulario.addEventListener ("submit", enviarFormulario );