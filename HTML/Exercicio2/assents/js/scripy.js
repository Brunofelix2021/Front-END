
/*Case Sensitive = reconhece letras maiusculas e minusculas

Por tag: getElementByTagName()
por id : getElementById()
por nome: getElementByName();
por classe: getElementByClassName()
por seletor: querySelector()  -- é a melhor prática para acessar o DOM - boas práticas
*/ 

let nomesobrenome = window.document.getElementById("nomesobrenome");  
let email = document.querySelector("#email");
let telefone = document.querySelector("#telefone");
let mensagem = document.querySelector("#mensagem");
let nomeOk = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector("#mapa")



function validaNome(){
    let txtNome = document.querySelector('#txtnomee');

    if (nomesobrenome.value.length < 3)
    {
       txtNome.innerHTML ='Nome inválido!!'
       txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        let nomeOk = true
    }
}

function validaEmail(){
        let txtEmail = document.querySelector('#txtEmail');

        if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
            txtEmail.innerHTML = 'E-mail inválido'
            txtEmail.style.color = 'red'
        }
        else{
            txtEmail.innerHTML = 'E-mail válido'
            txtEmail.style.color = 'green'
            let emailOk = true
        }


    }

    function validaAssunto(){
        let txtAssunto = document.querySelector('#txtAssunto')

        if (mensagem.value.length >= 100) {

            txtAssunto.innerHTML = 'Texto é muito grande, digite até 100 caracteres'
            txtAssunto.style.color = 'red'
            txtAssunto.style.display = 'block'
            
        }
        else{

          
            txtAssunto.style.display = 'none'
            let assuntoOk = true
        }


        function enviarF() {

            if (nomeOk == true && emailOk == true && assuntoOK == true) {

                alert('Formulário enviado com sucesso!')
                
            }
            else{
                alert('Preencha o formulário corretamente')
            }
        }

        function zoomMapa(){

            mapa.style.width = '800px'
            mapa.style.height = '600px'


        }

        function mapaNormal(){

            mapa.style.width = '600px'
            mapa.style.height = '450px'

        }

    }



