let fase = 0;
let botaoCoracao;
let coracoes = [];
let fontTitulo, fontTexto;
let papel, capa;

function preload() {
  fontTitulo = loadFont('https://fonts.gstatic.com/s/greatvibes/v16/RWmMoKWR9v4ksMfaWd_JN9XFiaQ4.woff2');
  fontTexto = loadFont('https://fonts.gstatic.com/s/dancingscript/v25/If2RXTr6YS-zF4S-kcSWSVi_szU.woff2');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  imageMode(CENTER);

  botaoCoracao = createButton("💖\nabra aqui");
  botaoCoracao.style('font-family', 'fantasy');
  botaoCoracao.style('font-size', '20px');
  botaoCoracao.style('padding', '20px');
  botaoCoracao.style('border-radius', '50%');
  botaoCoracao.style('background', '#ff4d6d');
  botaoCoracao.style('color', 'white');
  botaoCoracao.style('border', 'none');
  botaoCoracao.style('cursor', 'pointer');
  botaoCoracao.position(width / 2 - 50, height / 2 + 100);
  botaoCoracao.mousePressed(() => {
    fase = 1;
    botaoCoracao.remove();
  });

  for (let i = 0; i < 30; i++) {
    coracoes.push(new Coracao());
  }
}

function draw() {
  background('#1e1a1f');

  if (fase === 0) {
    drawCapa();
  } else if (fase === 1) {
    drawCarta();
  }
}

function drawCapa() {
  fill(255, 230, 240);
  stroke(200);
  strokeWeight(4);
  rect(width / 2 - 200, height / 2 - 150, 400, 300, 20);
  fill('#e63946');
  textFont(fontTitulo);
  textSize(40);
  text("Scrapbook de Iury e Karina", width / 2, height / 2);
}

function drawCarta() {
  // papel de fundo
  fill(255);
  noStroke();
  rect(width / 2 - 250, height / 2 - 200, 500, 400, 20);

  // texto
  fill('#c1121f');
  textFont(fontTexto);
  textSize(32);
  text("nesse dia dos namorados", width / 2, height / 2 - 100);

  textSize(48);
  text("Quer ficar abraçadinho comigo?", width / 2, height / 2);

  textSize(28);
  text("12/06", width / 2 - 60, height / 2 + 80);
  text("às 20:30", width / 2 + 80, height / 2 + 80);

  // corações subindo
  for (let c of coracoes) {
    c.update();
    c.show();
  }
}

class Coracao {
  constructor() {
    this.x = random(width);
    this.y = random(height, height + 300);
    this.size = random(15, 30);
    this.speed = random(0.5, 1.5);
    this.alpha = 255;
  }

  update() {
    this.y -= this.speed;
    this.alpha -= 0.5;
    if (this.y < -50 || this.alpha < 0) {
      this.y = random(height, height + 300);
      this.alpha = 255;
    }
  }

  show() {
    noStroke();
    fill(255, 0, 100, this.alpha);
    textSize(this.size);
    text('❤', this.x, this.y);
  }
}
