// Crear colores RGB aleatorios con babel

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Color {
  static generarColorRGB() {
    const rojo = random(0, 255);
    const verde = random(0, 255);
    const azul = random(0, 255);
    return {
      rojo,
      verde,
      azul,
    };
  }
}

console.log("01", Color.generarColorRGB());
console.log("02", Color.generarColorRGB());
console.log("03", Color.generarColorRGB());
