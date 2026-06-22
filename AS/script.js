const caractere = document.getElementById('caractere')
const btnAdd = document.getElementById('btnAdd')
const lista = document.getElementById('lista')
const concluido = document.getElementById('concluido')
const prioridade = document.getElementById('prioridade')
const concluidas = document.getElementById('concluidas')
const pendentes = document.getElementById('pendentes')

function adicionar() {

    if(caractere.value == ''){
        alert("Digite uma tarefa")
        return
    }

    const li = document.createElement('li')
    li.classList.add("flex","items-center","gap-2","p-2","rounded"
    )

    // Texto da tarefa
    const texto = document.createElement('span')
    texto.textContent = caractere.value
    li.appendChild(texto)

    // Botão excluir
    const btnExcluir = document.createElement('button')
    btnExcluir.textContent = "Excluir"
    btnExcluir.classList.add("ml-auto")

    btnExcluir.addEventListener('click', function () {
        li.remove()
        contadores()
    })

    li.appendChild(btnExcluir)

    // Botão concluir
    const btnConcluido = document.createElement('button')
    btnConcluido.textContent = "Concluir"
    btnConcluido.classList.add("ml-2")

    btnConcluido.addEventListener('click', function () {
        const data = new Date()
    
        texto.textContent += ` --- ${prioridade.value} --- ${data.toLocaleDateString()} ${data.getHours().toString().padStart(2, '0')}:${data.getMinutes().toString().padStart(2, '0')}`
    

        btnConcluido.remove()
        concluido.appendChild(li)
        contadores()
    })
    
    li.appendChild(btnConcluido)

    // Prioridade
    if (prioridade.value == 'alta') {
        li.classList.add("bg-red-500")
    } else if (prioridade.value == 'media') {
        li.classList.add("bg-yellow-500")
    } else if (prioridade.value == 'baixa') {
        li.classList.add("bg-green-500")
    }

    lista.appendChild(li)
    contadores()
    caractere.value = ""
    caractere.focus()

    // contadores
    function contadores() {
        pendentes.textContent = lista.children.length
        concluidas.textContent = concluido.children.length
    }
}

btnAdd.addEventListener('click', adicionar)