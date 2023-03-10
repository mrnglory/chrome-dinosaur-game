/**
 * draw a 2D canvas on the web browser
 */
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;


/**
 * image resources for dinosaur and cactus
 */
var dinosaurImage = new Image();
dinosaurImage.src = 'resources/dinosaur.png';

var cactusImage = new Image();
cactusImage.src = 'resources/cactus.png';


/**
 * dinosaur: info of main character in this game
 */
var dinosaur = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
        context.drawImage(dinosaurImage, this.x, this.y, this.width, this.height);
    }
}


/**
 * cactus: info of hurdle to avoid in this game
 */
class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        context.drawImage(cactusImage, this.x, this.y, this.width, this.height);
    }
}


/**
 * cactuses approaching to the dinosaur
 */
var frame_timer = 0;
var cactuses = [];
var jump_timer = 0;
var animation;

function executePerFrame() {
    animation = requestAnimationFrame(executePerFrame)
    frame_timer++;

    context.clearRect(0, 0, canvas.width, canvas.height);

    if (frame_timer % 100 === 0) {
        var cactus = new Cactus();
        cactuses.push(cactus);
    }

    cactuses.forEach((cactus, i, o) => {
        cactus.x--;
        if (cactus.x < 0) {
            o.splice(i, 1);
        }
        cactus.x--;

        is_collided(dinosaur, cactus);

        cactus.draw();
    })

    /***
     * dinosaur moves up and down when it jumps
     */
    if (jump === true) {
        dinosaur.y -= 1.5;
        jump_timer++;
    }

    if (jump === false) {
        if (dinosaur.y < 200) {
            dinosaur.y += 1.5;
        }
    }

    if (jump_timer > 100) {
        jump = false;
        jump_timer = 0;
    }


    dinosaur.draw();
}

executePerFrame();


/**
 * dinosaur jumps to avoid the cactuses
 */
var jump = false;
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        jump = true;
    }
})


/**
 * is dinosaur collided to the cactus?
 */
function is_collided(dinosaur, cactus) {
    var x_diff = cactus.x - (dinosaur.x + dinosaur.width);
    var y_diff = cactus.y - (dinosaur.y + dinosaur.height);

    if (x_diff < 0 && y_diff < 0) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animation);
    }
}
