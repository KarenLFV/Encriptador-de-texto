const texto = document.querySelector(".text");
const mensaje =  document.querySelector(".text-area");

let boton = document.querySelector("#reproductor")

    boton.addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "../sonido.mp3")
      etiquetaAudio.play();
    });
    
let boton1 = document.querySelector("#reproductor1")

    boton1.addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "../sonido.mp3")
      etiquetaAudio.play();
    });
let boton2 = document.querySelector("#reproductor2")

    boton2.addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "../sonido.mp3")
      etiquetaAudio.play();
    });

function imagen() {
    let clickImagen = document.querySelector("#input");
    alert("😊 Este es un encriptador de texto desarrollado para que puedas esconder cualquier mensaje a tu gusto ✨💖")
}

function copy() {
    let copyText = document.querySelector("#input");
    copyText.select();
    copyText.innerHTML = "copy";
    document.execCommand("copy");
  }
  
  browser.alarms.create({
    delayInMinutes: 0.1
  });
  
  browser.alarms.onAlarm.addListener(copy);

function btnencriptar() {
    const textoEncriptado = encriptar(texto.value);
    mensaje.value = textoEncriptado;
}
function encriptar(StringParaEncriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i=0; i< matrizCodigo.length; i++) {
        if (StringParaEncriptar.includes(matrizCodigo[i][0])) {
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
}

function btdesencriptar() {
    const textoDesencriptado = desencriptar(texto.value);
    mensaje.value = textoDesencriptado
}
function desencriptar(StringParaDesencriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for (let i=0; i<matrizCodigo.length; i++) {
        if (StringParaDesencriptar.includes(matrizCodigo[i][1])) {
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return StringParaDesencriptar;
}

