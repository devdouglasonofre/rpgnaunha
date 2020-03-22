const FONT = "8px 'Press Start 2P'"
const	FONTSTYLE	= "#ffffff";
const WIDTH = 128
const HEIGHT = 120
const MAP_WIDTH = 32
const MAP_HEIGHT = 32
const SCR_WIDTH = 8
const SCR_HEIGHT = 8
const TILEROW = 4
const TILECOLUMN = 4
const TILESIZE = 8
const START_X = 15
const START_Y = 17

const SCROLL = 1


const mapaMundi = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 3, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 3, 6, 3, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 3, 3, 6, 6, 7, 7, 7, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 6, 3, 0, 0, 0, 3, 3, 0, 6, 6, 6, 0, 0, 0,
  0, 0, 3, 3, 6, 6, 6, 7, 7, 2, 2, 2, 7, 7, 2, 2, 2, 7, 7, 6, 3, 3, 3, 6, 6, 3, 6, 13, 6, 0, 0, 0,
  0, 3, 3, 10, 11, 3, 3, 6, 7, 7, 2, 2, 2, 2, 2, 2, 1, 1, 7, 6, 6, 6, 6, 6, 3, 0, 6, 6, 6, 0, 0, 0,
  0, 0, 3, 3, 3, 0, 3, 3, 3, 7, 7, 2, 2, 2, 2, 7, 7, 1, 1, 6, 6, 6, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 7, 7, 7, 7, 2, 7, 6, 3, 1, 3, 6, 6, 6, 3, 0, 0, 0, 3, 3, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 7, 2, 7, 6, 3, 1, 3, 3, 6, 6, 3, 0, 0, 0, 3, 3, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 7, 7, 7, 6, 3, 1, 1, 3, 3, 6, 3, 3, 0, 0, 3, 3, 3, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 6, 7, 7, 7, 6, 3, 1, 1, 3, 3, 6, 3, 3, 0, 3, 12, 3, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 6, 7, 7, 6, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 6, 6, 6, 6, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 6, 6, 3, 3, 3, 3, 1, 1, 3, 3, 3, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 5, 3, 3, 3, 6, 6, 6, 3, 3, 3, 1, 1, 1, 1, 1, 3, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 8, 9, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 3, 3, 3, 1, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 3, 3, 3, 3, 3, 3, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 3, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 6, 3, 6, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 3, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 3, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 6, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0,
  7, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0,
  7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7,
]

// Buffer de Input
const gKey = new Uint8Array(0x100)

// Frame do jogo
let gFrame = 0
// Map da Imagem 
let gImgMap = 0

// Tela virtual
let gScreen = document.createElement("canvas")
let gContext = gScreen.getContext("2d")
let gWidth
let gHeight
gScreen.width = WIDTH
gScreen.height = HEIGHT

// Tela "real" 
const canvasGame = document.getElementById("tela")
canvasGame.width = window.innerWidth - 30
canvasGame.height = window.innerHeight - 30

// Faz com que a tela real não suavize os pixels
const game = canvasGame.getContext("2d")
game.imageSmoothingEnabled = false

// Pega o tamanho da tela
gWidth = canvasGame.width
gHeight = canvasGame.height

// Mantém o AspectRation 
if (gWidth / WIDTH < gHeight / HEIGHT) {
  gHeight = gWidth * HEIGHT / WIDTH;
} else {
  gWidth = gHeight * WIDTH / HEIGHT;
}

// Jogador
const CHRHEIGHT = 9
const CHRWIDTH = 8
let gImgPlayer
let gPlayerX = START_X * TILESIZE
let gPlayerY = START_Y * TILESIZE
// Movimento X e Y
let gMoveX = 0
let gMoveY = 0
// Angulo
let gAngle = 0
// Frame da Animação
let gAnimFrame = 0

// Mensagem da caixa de texto
let gMessage = null

function draw() {
  // Transfere o conteúdo da tela virtual para a tela principal
  game.drawImage(gScreen, 0, 0, gScreen.width, gScreen.height, 0, 0, gWidth, gHeight)

  // Posições em medição de tiles do jogador
  let mx = Math.floor(gPlayerX / TILESIZE)
  let my = Math.floor(gPlayerY / TILESIZE)

  for (let dy = -SCR_HEIGHT; dy <= SCR_HEIGHT; dy++) {
    // Posição y do tile usando a posição do jogador como base
    let ty = my + dy
    // Posição x do tile usando a posição do jogador como base, matendo
    // a posição dentro de um limite caso o jogador tente dar a volta por loop
    let py = (ty + MAP_HEIGHT) % MAP_HEIGHT
    for (let dx = -SCR_WIDTH; dx <= SCR_WIDTH; dx++) {
      let tx = mx + dx
      let px = (tx + MAP_WIDTH) % MAP_WIDTH
      desenharTile(gContext,
        tx * TILESIZE + WIDTH / 2 - gPlayerX,
        ty * TILESIZE + HEIGHT / 2 - gPlayerY,
        mapaMundi[px + py * MAP_WIDTH])
    }
  }

  desenharMensagen(gContext)

  gContext.drawImage(gImgPlayer, gAnimFrame * CHRWIDTH, gAngle * CHRHEIGHT, CHRWIDTH, CHRHEIGHT, WIDTH / 2, HEIGHT / 2, CHRWIDTH, CHRHEIGHT)
}

function desenharMensagen(contexto){
  contexto.fillStyle = 'rgba(0,0,0,0.75)'
  contexto.fillRect(4,84,120, 30)
  
  contexto.font = FONT
  contexto.fillStyle = FONTSTYLE

  contexto.fillText(gMessage, 6, 96)
}

function desenharTile(contexto, x, y, idTile) {
  // Pega o tile correto baseado em seu número no mapa
  // No caso de X, ele pega o numero no mapa, ex 0,
  // divide pelo numero de tiles por coluna ( 4, nesse caso )
  // e pega a sobra. Nesse caso, o resto é 0, então será o primeiro de coluna
  let idX = (idTile % TILEROW) * TILESIZE
  // Já com o Y, ele fará a mesma divisão, mas dessa vez será arredondado para
  // para pegar o tile em relação à linha.
  let idY = Math.floor(idTile / TILECOLUMN) * TILESIZE
  // E, por fim, irá desenhar na tela.
  contexto.drawImage(gImgMap, idX, idY, TILESIZE, TILESIZE, x, y, TILESIZE, TILESIZE)
}

function update() {
  // Adiciona um frame a cada iteraÃ§Ã£o
  gFrame++

  if (gMoveX != 0 || gMoveY != 0) { }
  else if (gKey[37]) { gAngle = 1; gMoveX = -TILESIZE }
  else if (gKey[38]) { gAngle = 3; gMoveY = -TILESIZE }
  else if (gKey[39]) { gAngle = 2; gMoveX = TILESIZE }
  else if (gKey[40]) { gAngle = 0; gMoveY = TILESIZE }
  else if (gKey[16]) { }

  let mx = Math.floor((gPlayerX + gMoveX) / TILESIZE)
  let my = Math.floor((gPlayerY + gMoveY) / TILESIZE)

  mx += MAP_WIDTH
  mx %= MAP_WIDTH
  my += MAP_HEIGHT
  my %= MAP_HEIGHT

  let m = mapaMundi[mx + my * MAP_WIDTH]
  if (m<3){
    gMoveX = 0
    gMoveY = 0
  }

  if ( m== 8 || m==9 ){
    gMessage = "Mate o Rei Demonio!"
  }

  if ( m== 10 || m== 11 ){
    gMessage = "Tem uma vila a oeste."
  }

  if ( gFrame > 10*6){
    gFrame = 0
  } else {
    if ( Math.floor(gFrame/16) % 2 == 0 ){
      gAnimFrame = 0
    } else {
      gAnimFrame = 1
    }
  }

  gPlayerX += Math.sign(gMoveX) * SCROLL
  gPlayerY += Math.sign(gMoveY)  * SCROLL
  gMoveX -= Math.sign(gMoveX) * SCROLL
  gMoveY -= Math.sign(gMoveY) * SCROLL

  gPlayerX += (MAP_WIDTH * TILESIZE)
  gPlayerX %= (MAP_WIDTH * TILESIZE)
  gPlayerY += (MAP_HEIGHT * TILESIZE)
  gPlayerY %= (MAP_WIDTH * TILESIZE)

  draw()
}

function iniciarJogo() {
  gImgMap = new Image()
  gImgMap.src = "img/map.png"
  gImgPlayer = new Image()
  gImgPlayer.src = "img/player.png"

  setInterval(() => {
    update()
  }, 33)
}

iniciarJogo()

window.addEventListener('keydown', e => {
  gKey[e.keyCode] = 1
})

window.addEventListener('keyup', e => {
  gKey[e.keyCode] = 0
})