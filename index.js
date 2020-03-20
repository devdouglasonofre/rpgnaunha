const FONT = "28px monospace"
const WIDTH = 128
const HEIGHT = 120

// Frame do jogo
let gFrame = 0
// Map da Imagem 
let gImgMap = 0

const canvasGame = document.getElementById("tela")
canvasGame.width = WIDTH
canvasGame.height = HEIGHT
const game = canvasGame.getContext("2d")

function draw() {
  // Desenha imagens na tela
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      game.drawImage(gImgMap, x * 32, y * 32)
    }
  }

  // Escreve o texto na tela
  game.font = FONT

  // Escreve o texto na tela
  game.fillText("Hello World" + gFrame, gFrame / 10, 64)
}

function update() {
  // Adiciona um frame a cada iteração
  gFrame++
  draw()
}

function iniciarJogo() {
  gImgMap = new Image()
  gImgMap.src = "img/map.png"
  setInterval(() => {
    update()
  }, 33)
}

iniciarJogo()