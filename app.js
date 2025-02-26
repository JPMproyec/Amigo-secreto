let amigos = [];


function agregarAmigo(){
    let nuevoAmigo = (document.getElementById('amigo').value);
    if (nuevoAmigo == '') {
        alert('Debes  ingresar el nombre de un amigo');
        return;
    }
    if (amigos.includes(nuevoAmigo)){
        alert("Este amigo fue ingresada recientemente, verifique y cambie el nombre");
        limpiarCaja();
        }else {    
            amigos.push(nuevoAmigo);
            console.log(amigos);
            limpiarCaja();
        }
    mostrarAmigos();    
}


function mostrarAmigos() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
  
    for (let index = 0; index < amigos.length; index++) {
      const element = amigos[index];
  
      let listaHTML = document.createElement("li");
      listaHTML.textContent = element;
      listaAmigos.appendChild(listaHTML);
    }
  }
  
  

function limpiarCaja(){
    //limpia la caja donde se registra el amigo
    document.querySelector('#amigo').value = '';

}

function sortearAmigos(){
    if (amigos.length == 0) {
        alert('Debes ingresar amigos, para poder sortear');
        
    }else {
        let indiceAmigo = Math.floor(Math.random() * amigos.length);
        let resultadoHTML = document.querySelector("#resultado");
        resultadoHTML.innerHTML = amigos[indiceAmigo];
  }

}



//agregarAmigo();