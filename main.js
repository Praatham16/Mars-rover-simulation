var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var roverX=100
var roverY=100
var bgImg="mars.jpg" 
var roverImg="rover.png"

function loadImages () {
    bg=new Image()
    bg.src=bgImg
    bg.onload=uploadbackground

    rover=new Image()
    rover.src=roverImg
    rover.onload=uploadrover
}

function uploadbackground () {
   ctx.drawImage(bg,0,0,canvas.width,canvas.height) 
}

function uploadrover () {
    ctx.drawImage(rover,roverX,roverY,100,100)
}

window.addEventListener("keydown",kd)
function kd (e){
    keynumber=e.keyCode
    console.log(keynumber)
    if (keynumber==37) {
        console.log("left is pressed")
        left()
    }
    if (keynumber==38) {
        console.log("up is pressed")
        up()
    }
    if (keynumber==39) {
        console.log("right is pressed")
        right()
    }
    if (keynumber==40) {
        console.log("down is pressed")
        down()
    }

}
function right () {
    if (roverX<700) {
      roverX=roverX+10  
      uploadbackground()
      uploadrover()
    }
}
function left () {
    if (roverX>0) {
      roverX=roverX-10
      uploadbackground()  
      uploadrover()
    }
}
function up () {
    if (roverY>0)
    roverY=roverY-10
    uploadbackground()
    uploadrover()
}
function down () {
    if (roverY<500)
    roverY=roverY+10
    uploadbackground()
    uploadrover()
}