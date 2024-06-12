var inputName = document.querySelector('#name');
var botaoSim = document.querySelector("#sim");
var bodyForm = document.querySelector('form');

//// EVENTO SIM
botaoSim.addEventListener('click', e => {
    e.preventDefault()

    if(inputName.value.length > 0) {

        let aviso = document.querySelector('#aviso')
        if (aviso) {
            aviso.remove();
        }

        let adultos = document.createElement("div")
        adultos.classList.add("dados");
        adultos.innerHTML = '<label for="adultos">Quantos adultos a mais?</label><input type="number" id="adultos" name="adultos">';

        let criancas = document.createElement("div")
        criancas.classList.add("dados");
        criancas.innerHTML = '<label for="criancas">E quantas crianças?</label><input type="number" id="criancas" name="criancas">';


        let proximo = document.createElement("button")
        proximo.classList.add("buttonProximo");
        proximo.innerHTML = 'Próximo...';

        bodyForm.append(adultos); 
        bodyForm.append(criancas); 
        bodyForm.append(proximo); 

        proximo.addEventListener('click', e => {
            e.preventDefault()
            var adultosN = document.querySelector('#adultos').value
            var criancasN = document.querySelector('#criancas').value
            var acompanhantes = Number(adultosN) + Number(criancasN)

            if(acompanhantes == 0) {
                let aviso = document.createElement("div")
                aviso.setAttribute("id", "aviso");
                aviso.innerHTML = '<p>Opa!! Está faltando algo...</p>';
        
                bodyForm.append(aviso);
            } else {
                proximo.remove();

                let aviso = document.querySelector('#aviso')
                if (aviso) {
                    aviso.remove();
                }

                let nomes = document.createElement("div")
                nomes.classList.add("dados");
                nomes.setAttribute("id", "nomes");
                nomes.innerHTML = '<label for="criancas">Pode nos informar os nomes?</label>';
                bodyForm.append(nomes);

                for(i = 0; i < acompanhantes; i++) {
                    let dadosBody = document.querySelector('#nomes')
                    let inputs = document.createElement("input")

                    inputs.innerHTML = '<input type="text" name="names">';
                    inputs.setAttribute("id", `name${i}`);

                    dadosBody.append(inputs);
                }
            
                let submit = document.createElement("button")
                submit.classList.add("buttonSubmit");
                submit.setAttribute('type', 'submit');
                submit.innerHTML = 'Enviar!';

                bodyForm.append(submit);         

                var submitButton = document.querySelector('.buttonSubmit');

                submitButton.addEventListener('click', async e => {
                    e.preventDefault()
                    let confirmados = []
                    confirmados.push(inputName.value)
                    
                    for(i = 0; i < acompanhantes; i++) {
                        let inputsNames = document.querySelector(`#name${i}`).value
                        confirmados.push(inputsNames)
                    }
                    

                    console.log('enviado!')
                    var formBody = document.querySelector('.form');
                    formBody.remove();

                    var h1 = document.querySelector('h1');
                    var subTittle = document.querySelector('#subTittle');

                    h1.innerHTML = "Obrigada pela ajuda!";
                    subTittle.innerHTML = "Nos vemos no dia 07/07 😁";                 

                })
            }
        })
    } else {
        let aviso = document.createElement("div")
        aviso.setAttribute("id", "aviso");
        aviso.innerHTML = '<p>OPA, preenche seu nome!!</p>';

        bodyForm.append(aviso);
    }
})

//////EVENTO BOTÃO 'NÃO'
var botaoNao = document.querySelector("#nao");
var bodyForm = document.querySelector('form');
botaoNao.addEventListener('click', e => {
    e.preventDefault()

    let submit = document.createElement("button")
    submit.classList.add("buttonSubmit");
    submit.innerHTML = 'Enviar!';

    bodyForm.append(submit); 

    var submitButton = document.querySelector('.buttonSubmit');
        submitButton.addEventListener('click', async e => {
            e.preventDefault()
            
            console.log('enviado!')
                
            var formBody = document.querySelector('.form');
            formBody.remove();

            var h1 = document.querySelector('h1');
            var subTittle = document.querySelector('#subTittle');

            h1.innerHTML = "Obrigada pela ajuda!";
            subTittle.innerHTML = "Nos vemos no dia 07/07 😁";                 
        })
})








