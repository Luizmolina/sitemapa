let mapa;
let foto;
let musica;
let cardMusica;
let tituloMusica;
let artistaMusica;
let botaoPlay;
let cardMensagem;
let botaoDestruir;
let poema;


// Tamanhos

const larguraFoto = 300;
const alturaFoto = 300;

const larguraMapa = 450;
const alturaMapa = 300;

const larguraCard = 300;

const espaco = 40;



function preload() {

  musica = loadSound("musica.mp3");

}



function setup() {

  createCanvas(windowWidth, windowHeight);



  // FOTO

  foto = createImg("foto.jpg", "Nossa foto");

  foto.size(larguraFoto, alturaFoto);

  foto.style("border", "2px solid #5b1d28");
  foto.style("border-radius", "15px");
  foto.style("object-fit", "cover");
  foto.style("box-shadow", "0px 0px 20px rgba(120,20,40,0.6)");



  // MAPA

  mapa = createElement("iframe", "");

  mapa.attribute(
    "src",
    "https://www.google.com/maps/d/embed?mid=1zmtWT_l2_A74BqhBzEO01zXi42UI0-s&ehbc=2E312F"
  );

  mapa.attribute("width", larguraMapa);
  mapa.attribute("height", alturaMapa);

  mapa.style("border", "2px solid #5b1d28");
  mapa.style("border-radius", "15px");
  mapa.style("box-shadow", "0px 0px 20px rgba(120,20,40,0.6)");



  // CARD DA MÚSICA

  cardMusica = createDiv();

  cardMusica.style("width", larguraCard + "px");
  cardMusica.style("height", "120px");

  cardMusica.style("background", "#280b12");
  cardMusica.style("border", "2px solid #5b1d28");
  cardMusica.style("border-radius", "15px");

  cardMusica.style("box-shadow", "0px 0px 20px rgba(120,20,40,0.6)");

  cardMusica.style("padding", "15px");
  cardMusica.style("box-sizing", "border-box");
  cardMusica.style("text-align", "center");



  tituloMusica = createP("🎵 Eu e Você");

  tituloMusica.parent(cardMusica);

  tituloMusica.style("margin", "0");
  tituloMusica.style("color", "#ffe0e8");
  tituloMusica.style("font-size", "20px");



  artistaMusica = createP("Iguinho & Lulinha");

  artistaMusica.parent(cardMusica);

  artistaMusica.style("margin", "5px");
  artistaMusica.style("color", "#d8b8c0");
  artistaMusica.style("font-size", "14px");



  botaoPlay = createButton("▶ Play");

  botaoPlay.parent(cardMusica);

  botaoPlay.style("margin-top", "10px");

  botaoPlay.style("width", "100px");
  botaoPlay.style("height", "35px");

  botaoPlay.style("background", "#5b1d28");

  botaoPlay.style("color", "white");

  botaoPlay.style("border", "none");

  botaoPlay.style("border-radius", "10px");

  botaoPlay.style("font-size", "15px");

  botaoPlay.mousePressed(alternarMusica);



  // CARTÃO DE MENSAGEM

  cardMensagem = createDiv(
    "Você torna cada um desses lugares especiais para mim ❤️"
  );

  cardMensagem.style("width", larguraCard + "px");

  cardMensagem.style("background", "#280b12");

  cardMensagem.style("border", "2px solid #5b1d28");

  cardMensagem.style("border-radius", "15px");

  cardMensagem.style("box-shadow", "0px 0px 20px rgba(120,20,40,0.6)");

  cardMensagem.style("padding", "15px");

  cardMensagem.style("box-sizing", "border-box");

  cardMensagem.style("color", "#ffe0e8");

  cardMensagem.style("text-align", "center");

  cardMensagem.style("font-size", "16px");



  // BOTÃO DESTRUIR SITE

  botaoDestruir = createButton("💣 Destruir site");

  botaoDestruir.style("background", "#5b1d28");

  botaoDestruir.style("color", "white");

  botaoDestruir.style("border", "none");

  botaoDestruir.style("border-radius", "10px");

  botaoDestruir.style("padding", "8px");

  botaoDestruir.style("font-size", "12px");

  botaoDestruir.style("cursor", "pointer");

  botaoDestruir.position(
    width - 130,
    height - 50
  );

  botaoDestruir.mousePressed(mostrarPoema);
// CARTÃO DO POEMA

  poema = createDiv(
    "O amor não é um sonho.<br><br>" +
    "É esta fome<br>" +
    "de estar no mundo<br>" +
    "contigo,<br><br>" +
    "dividindo o pão,<br>" +
    "a pedra<br>" +
    "e o perigo."
  );


  poema.style("display", "none");

  poema.style("position", "absolute");

  poema.style("width", "300px");

  poema.style("background", "#280b12");

  poema.style("color", "#ffe0e8");

  poema.style("border", "2px solid #5b1d28");

  poema.style("border-radius", "15px");

  poema.style("padding", "25px");

  poema.style("text-align", "center");

  poema.style("font-size", "18px");

  poema.style("line-height", "1.5");

  poema.style("box-shadow", "0px 0px 20px rgba(120,20,40,0.6)");

  poema.style("z-index", "10");

  poema.position(
    width/2 - 150,
    height/2 - 180
  );



  posicionarElementos();

}



function draw() {

  background(20,5,8);


  fill(255,220,230);

  textAlign(CENTER);

  textSize(34);

  text(
    "Nosso Mapa ❤️",
    width/2,
    70
  );

}



function alternarMusica() {


  if (musica.isPlaying()) {

    musica.pause();

    botaoPlay.html("▶ Play");


  } else {

    musica.play();

    botaoPlay.html("⏸ Pause");

  }

}



function mostrarPoema(){

  poema.show();

  botaoDestruir.html("❤️ Restaurar site");

}



function windowResized() {

  resizeCanvas(
    windowWidth,
    windowHeight
  );

  posicionarElementos();

}



function posicionarElementos() {


  let larguraTotal = larguraFoto + larguraMapa + espaco;


  let inicioX = (windowWidth - larguraTotal) / 2;


  let y = (windowHeight - alturaMapa) / 2;



  // Foto

  foto.position(
    inicioX,
    y
  );



  // Mapa

  mapa.position(
    inicioX + larguraFoto + espaco,
    y
  );



  // Player

  cardMusica.position(
    inicioX,
    y + alturaFoto + 20
  );



  // Mensagem

  cardMensagem.position(
    inicioX + larguraFoto + espaco,
    y + alturaMapa + 20
  );


}
