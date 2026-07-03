const output = document.getElementById("output");
const terminal = document.getElementById("terminal");
const flash = document.getElementById("flash");
const noise = document.getElementById("noise");

const pantallaTerminal = document.getElementById("pantallaTerminal");
const pantallaRomantica = document.getElementById("pantallaRomantica");
const heart = document.getElementById("heart");
const mensaje = document.getElementById("mensaje");
const cursor = document.getElementById("cursor");

const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const contenedorBotones = document.getElementById("botones");

const cartel = document.getElementById("cartel");
const posicionesNo = [
    {
        left: 65,
        top: 25,
        frase: "¿Estás segura? 🤨"
    },
    {
        left: 10,
        top: 60,
        frase: "Mmm... creo que ese botón no funciona 😜"
    },
    {
        left: 70,
        top: 5,
        frase: "Yo probaría el otro ❤️"
    }
];

const pantallaFinal = document.getElementById("pantallaFinal");
const tituloFinal = document.getElementById("tituloFinal");
const textoFinal = document.getElementById("textoFinal");
const fechaFinal = document.getElementById("fechaFinal");

let velocidad = 40;
let intentosNo = 0;

async function escribirTexto(texto, clase = ""){
    const span = document.createElement("span");
    span.className = clase;
    output.appendChild(span);
    for(const letra of texto){
        span.innerHTML += letra === "\n" ? "<br>" : letra;
        await esperar(velocidad);
    }
}

function esperar(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function iniciar() {
    await escribirTexto("> Inicializando...\n");
    await esperar(400);
    await escribirTexto("✔ OK\n\n");
    await esperar(500);
    await escribirTexto("> Cargando sentimientos...\n");
    await barraProgreso();
    await esperar(700);
    await pensando();
    await esperar(400);
    await corrupcion();
    await falla();
    await mostrarError();
    await esperar(800);
    await mensajeImportante();
    await esperar(1200);
    await escribirTexto("Cerrando módulo lógico...\n");
    await esperar(900);
    await escribirTexto("Iniciando módulo emocional...\n");
    await esperar(1200);
    await cambiarEscena();
}

async function barraProgreso(){
    const span = document.createElement("span");
    output.appendChild(span);
    for(let i=0;i<=100;i+=4){
        const llenos = Math.floor(i/6.25);
        const barra =
            "[" +
            "█".repeat(llenos) +
            ".".repeat(16-llenos) +
            "] " +
            i +
            "%";
        span.innerHTML = barra;
        await esperar(80);
    }
    output.innerHTML += "<br><br>";
}

async function pensando(){
    const span = document.createElement("span");
    output.appendChild(span);

    const texto = "> Buscando palabras adecuadas";

    for(const letra of texto){

        span.innerHTML += letra;
        await esperar(40);

    }

    for(let i = 0; i < 4; i++){

        await esperar(400);
        span.innerHTML += ".";

    }

    span.innerHTML += "<br>";
}

async function mostrarError(){

    document.getElementById("terminal");

    terminal.classList.add("shake");

    await escribirTexto("ERROR\n", "error");

    await esperar(250);

    terminal.classList.remove("shake");
}

async function mensajeImportante() {
    await escribirTexto(
    `No existen suficientes palabras para 
    explicar lo mucho que me gustás.
    `, "white fade");
}

async function falla(){

    noise.classList.add("noise");

    flash.classList.add("flash");

    terminal.classList.add("shake");

    await esperar(180);

    noise.classList.remove("noise");

    flash.classList.remove("flash");

    terminal.classList.remove("shake");
}

async function corrupcion(){

    const span=document.createElement("span");
    output.appendChild(span);

    const textos=[
        "> B%$&cando palabras...\n",
        "> 001101001001110\n",
        "> ####@@@@@@@%%%\n",
        "> **************\n"
    ];

    for(const t of textos){
        span.innerHTML=t.replace("\n","<br>");
        await esperar(80);
    }
}

async function cambiarEscena(){

    cursor.style.opacity = 0;
    await esperar(700);
    pantallaTerminal.classList.add("ocultar");
    await esperar(1500);
    pantallaRomantica.classList.add("activa");
    await esperar(800);

    heart.style.opacity = 1;
    heart.style.animation =
        "latido .8s infinite";

    await esperar(1500);
    await escribirMensajeRomantico();
    await esperar(1500);
    await mostrarPregunta();
}

async function escribirMensajeRomantico() {

    mensaje.style.opacity = 1;

    const texto =
    `Pauli, desde que apareciste en mi vida 
    hay algo que cambió.
    Me encanta pasar tiempo con vos.
    Me hacés reír.
    Me das tranquilidad.
    Y cada día tengo más ganas de seguir compartiendo momentos juntos.`;

    mensaje.innerHTML = "";

    for(const letra of texto){

        mensaje.innerHTML += (letra === "\n") ? "<br>" : letra;

        await esperar(35);

    }
}

async function mostrarPregunta() {

    mensaje.style.transition = "opacity 1s";
    mensaje.style.opacity = 0;
    await esperar(1200);

    mensaje.style.display = "none";
    const pregunta = document.getElementById("pregunta");
    const intro = document.getElementById("introduccionPregunta");
    const titulo = document.getElementById("textoPregunta");
    pregunta.style.opacity = 1;
    const textoIntro = "Solo me queda hacerte una pregunta...";

    for (const letra of textoIntro) {
        intro.innerHTML += letra;
        await esperar(40);
    }

    await esperar(1000);
    const preguntaFinal = "¿Querés ser mi novia? ❤️";

    for (const letra of preguntaFinal) {
        titulo.innerHTML += letra;
        await esperar(45);
    }
    document.getElementById("botones").style.opacity = 1;
}

function escaparNo(){
    intentosNo++;
    moverBotonNo();
    agrandarBotonSi();
}

function moverBotonNo(){

    const indice = intentosNo - 1;

    if(indice >= posicionesNo.length){
        btnNo.style.display = "none";
        cartel.innerHTML = "Bueno... creo que ya no queda otra 😏";
        return;
    }

    const posicion = posicionesNo[indice];
    btnNo.style.left = posicion.left + "%";
    btnNo.style.top = posicion.top + "%";
    cartel.innerHTML = posicion.frase;
}

function agrandarBotonSi(){
    btnSi.style.width = (180 + intentosNo * 70) + "px";
    btnSi.style.height = (60 + intentosNo * 15) + "px";
    btnSi.style.fontSize = (22 + intentosNo * 3) + "px";
}

async function finalFeliz(){

    pantallaRomantica.style.opacity = 0;

    await esperar(1200);

    pantallaRomantica.style.display = "none";

    pantallaFinal.classList.add("activa");

    await escribirEnElemento(
        tituloFinal,
        "¡Sabía que ibas a decir que sí! ❤️",
        45
    );

    await esperar(600);

    await escribirEnElemento(
        textoFinal,
`Gracias por hacerme tan feliz.

Prometo seguir haciéndote reír,
acompañarte en los días buenos
y también en los difíciles.

Esta es apenas la primera línea de una 
hermosa historia que estamos por vivir.`,
        35
    );

    await esperar(800);

    fechaFinal.innerHTML =
        "❤️ Pauli y Alex - 03/07/2026 ❤️";
}

async function escribirEnElemento(elemento, texto, velocidad){
    elemento.innerHTML = "";
    for(const letra of texto){
        elemento.innerHTML +=
            (letra === "\n") ? "<br>" : letra;
        await esperar(velocidad);
    }
}

btnNo.addEventListener("click", escaparNo);
btnSi.addEventListener("click", finalFeliz);

iniciar();
