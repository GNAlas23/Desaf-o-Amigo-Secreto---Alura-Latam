let nombres = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {

    let listaNombres = document.getElementById("amigo").value.trim();

    if (listaNombres === "") {
        alert("Por favor, inserte un nombre.");

    } else {

        //Valida nombres duplicados
        if (validarDuplicados(listaNombres, nombres) > 0) {
            limpiarCaja();
            return;
        }

        // Agregar el nombre a la lista
        nombres.push(listaNombres);
        console.log(nombres);

        //limpiar el campo después de agregar
        limpiarCaja();

        // Mostrar lista actualizada
        mostrarNombreLista();



    }
}

function validarDuplicados(valor, lista) {

    for (i = 0; i < lista.length; i++) {

        if (valor == lista[i]) {
            alert("Nombre ya en la lista! Favor ingresar uno diferente");
            return true;
        }

    }
    return false;
}

// Función para limpiar la caja de texto
function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

// Función para mostrar la lista de amigos en pantalla
function mostrarNombreLista() {
    let miLista = document.getElementById("listaAmigos");
    let listaParticipantes = "";

    // Limpiar lista anterior
    miLista.innerHTML = "";

    // Recorrer y crear cada <li>
    nombres.forEach(item => {
        listaParticipantes += `<li>${item}</li>`;
    });

    miLista.innerHTML = listaParticipantes;
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (nombres.length > 0) {
        // Generar índice aleatorio
        let indiceLista = document.querySelector('.button-draw');
        indiceLista = Math.floor(Math.random() * nombres.length);
        console.log(indiceLista);

        nombres[indiceLista];

        // Mostrar resultado en pantalla
        let listaResultado = document.getElementById("resultado");

        listaResultado.innerHTML = " El amigo secreto sorteado es: " + nombres[indiceLista];

    } else {
        alert("Por favor, ingrese participantes.")
    }
}

function vaciarLista() {
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
    nombres = [];
    console.clear();
    let limpiarResultado = document.getElementById("resultado");
    limpiarResultado.innerHTML = "";
}

function nuevaLista() {
    generarLista = document.querySelector('.button-draw-New');
    vaciarLista();
}
