// Definimos una variable para almacenar las partículas
let particles = [];

// Función de configuración
function setup() {
    // Crear lienzo del tamaño de la ventana
    createCanvas(windowWidth, windowHeight);
    
    // Crear 1000 partículas
    for (let i = 0; i < 1000; i++) {
        particles.push(new Particle());
    }
}

// Función de dibujo
function draw() {
    // Establecer el color de fondo
    background('#000');
    
    // Actualizar y mostrar todas las partículas
    for (let particle of particles) {
        particle.update();
        particle.show();
    }
}

// Clase Particle para representar una partícula
class Particle {
    constructor() {
        // Posición inicial aleatoria
        this.pos = createVector(random(width), random(height));
        // Velocidad aleatoria
        this.vel = createVector(random(-2, 2), random(-2, 2));
    }

    // Método para actualizar la posición de la partícula
    update() {
        this.pos.add(this.vel);
        // Reiniciar posición si la partícula sale del lienzo
        if (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height) {
            this.pos.x = random(width);
            this.pos.y = random(height);
        }
    }

    // Método para mostrar la partícula
    show() {
        noStroke();
        fill(255);
        circle(this.pos.x, this.pos.y, 2);
    }
}


