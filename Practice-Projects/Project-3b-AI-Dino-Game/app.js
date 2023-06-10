var RootElem = document.querySelector(":root")
var GameElem = document.querySelector("#game")
var DinoElem = GameElem.querySelector(".dino")
var ScoreElem = GameElem.querySelector(".score")
var GroundElem = GameElem.querySelector(".ground")
var CactusElem = GroundElem.querySelector(".cactus")

var GameSpeed = 4000
var JumpSpeed = (GameSpeed / 10) * 2
var MaxJump = 250
var SpeedScale = 1

var score = 0

var GameStarted = false
var GameOver = false

var Jumping = false
var SelfPlayMode = false

// (RootElem, "--game-speed", GameSpeed)
function setCustomProperty(elem, prop, value) {
    elem.style.setProperty(prop, value)
}

function handleJump(e) {
    if (e.code !== "Space") return;

    var audio = document.querySelector(".audio-jump")
    audio.play()
    DinoElem.classList.add("dino-jump")
    Jumping = true
    DinoElem.addEventListener("animationend", function() {
        Jumping = false
        DinoElem.classList.remove("dino-jump")
    })
}

function shouldJump() {
    var minGap = 250
    var cactusXPos = CactusElem.getBoundingClientRect().x

    // validations
    if (cactusXPos <= 0 || Jumping) return false

    if (cactusXPos < minGap) {
        return true
    }

    return false
}

function startGame() {
    GameStarted = true
    GameElem.classList.add("game-started")
    document.addEventListener("keydown", handleJump)

    window.requestAnimationFrame(updateGame)
}

function endGame() {
    GameOver = true
    GameElem.classList.add("game-over")
    document.removeEventListener("keydown", handleJump)
    var audio = document.querySelector(".audio-die")
    audio.play()
}

// As long the game is running, the function is running
function updateGame() {
    setCustomProperty(RootElem, "--game-speed", GameSpeed)
    setCustomProperty(RootElem, "--jump-speed", JumpSpeed)
    setCustomProperty(RootElem, "--max-jump", MaxJump)
    setCustomProperty(RootElem, "--speed-scale", SpeedScale)

    // auto-play
    if (SelfPlayMode) {
        if (shouldJump()) {
            handleJump({ code: "Space" }) // simulate a jump
        }
    }

    // update the score
    updateScore()

    // update the cactus
    updateCactus()

    // check if the game over
    if (checkGameOver()) {
        endGame()
        return
    }

    window.requestAnimationFrame(updateGame)
}

var scoreInterval = 15
var currentScoreInterval = 0

function updateScore() {
    currentScoreInterval += 1

    if (currentScoreInterval % scoreInterval !== 0) {
        return
    }
    
    score += 1
    
    if (score === 0) return
    
    if (score % 100 === 0) {
        var audio = document.querySelector(".audio-point")
        audio.play()
        GameSpeed -= SpeedScale
        JumpSpeed = (GameSpeed / 10) * 2
    }

    var currentScoreElem = ScoreElem.querySelector(".current-score")
    currentScoreElem.innerHTML = score.toString().padStart(5,"0")
}

function updateCactus() {
    var cactusXPos = CactusElem.getBoundingClientRect().x
    var isOffScreen = cactusXPos > window.innerWidth

    if (isOffScreen === false) return
    
    var cacti = ["cactus-small-1", "cactus-small-2", "cactus-small-3"]
    var randomNum = Math.floor(Math.random() * cacti.length)
    var cactus = cacti[randomNum]

    CactusElem.classList.remove(
        "cactus-small-1",
        "cactus-small-2",
        "cactus-small-3"
    )

    CactusElem.classList.add(cactus)
}

function isCollision(dinoRect, cactusRect) {  
    // AABB - Axis-aligned bounding box  
    return (
        dinoRect.x < cactusRect.x + cactusRect.width &&
        dinoRect.x + dinoRect.width > cactusRect.x &&
        dinoRect.y < cactusRect.y + cactusRect.height &&
        dinoRect.y + dinoRect.height > cactusRect.y
    );
}

function checkGameOver() {
    if (GameOver)  return true

    var dinoRect = DinoElem.getBoundingClientRect()
    var cactusRect = CactusElem.getBoundingClientRect()

    if (isCollision(dinoRect, cactusRect)) {
        return true
    }

    return false
}

function fitScreen() {
    var width = window.innerWidth
    var height = window.innerHeight / 2
    GameElem.style.width = width + "px"
    GameElem.style.height = height + "px"
    GameElem.style.zoom = 1.5
}

window.addEventListener("load", function() {
    fitScreen();

    window.addEventListener("resize", fitScreen)

    var autoPlayElem = document.querySelector("#auto-play")
    autoPlayElem.addEventListener("change", function() {
        SelfPlayMode = autoPlayElem.checked
    })
    document.addEventListener("keydown", startGame, { once:true })

})