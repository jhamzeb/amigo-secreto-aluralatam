// Arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    // Validar que el nombre no esté repetido (ignorando mayúsculas/minúsculas)
    if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre al arreglo
    amigos.push(nombre);

    // Mostrar la lista actualizada
    mostrarAmigos(amigos);

    // Limpiar el input
    inputAmigo.value = "";
}

// Función para mostrar los amigos en la lista HTML
function mostrarAmigos(amigos) {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach(nombre => {
        const elementoLista = document.createElement("li");
        elementoLista.textContent = nombre;
        listaAmigos.appendChild(elementoLista);
    });
}

// Función para mezclar un arreglo (algoritmo de Fisher-Yates)
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Función para realizar el sorteo de amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos 2 nombres para realizar el sorteo.");
        return;
    }

    // Mezclar los nombres
    const amigosMezclados = mezclarArray([...amigos]);

    // Asignar amigos secretos sin repeticiones y sin que alguien se asigne a sí mismo
    const resultados = [];
    const asignados = new Set(); // Para evitar repeticiones

    for (let i = 0; i < amigosMezclados.length; i++) {
        const amigo = amigosMezclados[i];
        let amigoSecreto;

        // Buscar un amigo secreto que no sea el mismo y no esté ya asignado
        do {
            amigoSecreto = amigosMezclados[Math.floor(Math.random() * amigosMezclados.length)];
        } while (amigoSecreto === amigo || asignados.has(amigoSecreto));

        // Registrar la asignación
        resultados.push(`${amigo} ➡️ ${amigoSecreto}`);
        asignados.add(amigoSecreto);
    }

    // Mostrar los resultados
    const listaResultados = document.getElementById("resultado");
    listaResultados.innerHTML = "";

    resultados.forEach(resultado => {
        const elementoLista = document.createElement("li");
        elementoLista.textContent = resultado;
        listaResultados.appendChild(elementoLista);
    });
}


// Función para limpiar la lista de amigos
function limpiarLista() {
    // 1. Vaciar el arreglo de amigos
    amigos = [];

    // 2. Limpiar la lista de amigos en el HTML
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    // 3. Limpiar la lista de resultados del sorteo
    const listaResultados = document.getElementById("resultado");
    listaResultados.innerHTML = "";

    // Mensaje opcional para el usuario
    alert("La lista de amigos se ha limpiado correctamente.");
}
//