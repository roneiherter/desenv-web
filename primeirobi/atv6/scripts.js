const ul = document.getElementById("lista")

function AdicionarTarefa() {
    const input = document.getElementById("tarefa")
    const texto = input.value

    if (texto === "") return

    const li = document.createElement("li")
    
    const marcador = document.createElement("input")
    marcador.type = "checkbox"
    
    const label = document.createElement("label")
    label.appendChild(marcador)
    label.appendChild(document.createTextNode(texto))
    
    li.appendChild(label)
    ul.appendChild(li)

    input.value = ""
}

ul.addEventListener("click", function(event) {
    if (event.target.type === "checkbox") return

    const li = event.target.closest("li")
    if (li) {
        li.remove()
    }
})