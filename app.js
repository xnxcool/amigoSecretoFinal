let listaAmigos = [];

//funcion para limpiar el input
function limpiarInput() {
    document.getElementById('amigo').value = '';
}

//funcion para limpiar la lista
/* function limpiarLista() {
    document.querySelector('#listaAmigos').innerHTML = '';
    listaAmigos = [];
}*/

//Función para agregar amigos a la lista
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo.trim() !== '') {
        //si el nombre ya existe, no se puede agregar
        if (listaAmigos.includes(nombreAmigo)) {
            alert('El nombre existe en la lista de amigos');
            return;
        }
        //Solo se puede agregar hasta 10 amigos
        if (listaAmigos.length >= 10) {
            alert('No puede agregar más de 10 amigos');
            return;
        }
        document.querySelector('#listaAmigos').innerHTML += `<li>${nombreAmigo}</li>`;
        listaAmigos.push(nombreAmigo);
        limpiarInput();
    } else {
        alert('Por favor, ingrese un nombre válido');
    }
}

//Función para sortear amigos
function sortearAmigo() {
    //si la lista no tiene amigos, no se puede sortear
    if (listaAmigos.length === 0) {
        alert('Por favor, ingrese al menos un nombre');
        return;
    }
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.querySelector('#resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}
function reiniciar() {
    
        document.querySelector('#listaAmigos').innerHTML = '';
        document.querySelector('#resultado').innerHTML = '';
        limpiarInput();
        listaAmigos = [];
    
} 

