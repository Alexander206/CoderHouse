"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Crear colores RGB aleatorios con babel
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var Color = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);
  }

  _createClass(Color, null, [{
    key: "generarColorRGB",
    value: function generarColorRGB() {
      var rojo = random(0, 255);
      var verde = random(0, 255);
      var azul = random(0, 255);
      return {
        rojo: rojo,
        verde: verde,
        azul: azul
      };
    }
  }]);

  return Color;
}();

console.log("01", Color.generarColorRGB());
console.log("02", Color.generarColorRGB());
console.log("03", Color.generarColorRGB());
