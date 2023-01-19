

/**
 * draw a 2D canvas on the web browser
 */
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;


/**
 * dinosaur: info of main character in this game
 */
var dinosaur = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
        context.fillStyle = 'blue';
        context.fillRect(this.x, this.y, this.width, this.height);
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
        context.fillStyle = 'green';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}


/**
 * cactuses approaching to the dinosaur
 */
var frame_timer = 0;
var cactuses = [];
var jump_timer = 0;

function executePerFrame() {
    requestAnimationFrame(executePerFrame)
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
