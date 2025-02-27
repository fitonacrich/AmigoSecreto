
let lAmigos = [];

function agregarAmigo() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    let ingresaAmigos = document.getElementById("amigo").value;
    if (ingresaAmigos === "") {
        alert("Primero escriba el nombre y pulse `añadir`");
        return;
    }else{
        lAmigos.push(ingresaAmigos);
    }
    limpiar();
}

function limpiar() {
   document.getElementById("amigo").value = "";
   
   for (let i = 0; i < lAmigos.length; i++) {
    let li = document.createElement('li');
    li.textContent = lAmigos[i];
    listaAmigos.appendChild(li);
  }
}

////////////////////////////
function sortearAmigo() {   
    if (lAmigos.length === 0) {
      alert("Debes ingresar mas nombres")
      return;
    }  
    
    const indiceAleatorio = Math.floor(Math.random() * lAmigos.length);
    const amigoSorteado = lAmigos[indiceAleatorio];
    lAmigos.splice(indiceAleatorio, 1);
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `¡Tu amigo secreto es: ${amigoSorteado}!`;

}

function borrarTodo(){
  lAmigos = []
  const lista = document.getElementById('listaAmigos');
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    const lista2 = document.getElementById('resultado');
    while (lista2.firstChild) {
        lista2.removeChild(lista2.firstChild);
    }
    limpiar();
}