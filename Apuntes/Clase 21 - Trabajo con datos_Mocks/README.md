# TDD (Test-Driven Developmen)

desarrollo dirigido por test, la intención es hacer un test primero, colocar las reglas y parametros y ir escribiendo codigo hasta ver en donde va rompiendo y arreglando las fiutures

Estructura de TDD -> 
- Hacer la prueba y debe fallar.
- Escribir codigo al minimo para que la prueba pase
- La prueba debe pasar y mostrarse en verde
- Se debe mejorar el código
- Se repite desde el inicio

# ¿Qué es Mocking y Mock?

Es una técnica para simular objetos en memoria con la finalidad de poder ejecutar pruebas unitarias.

son objetos preprogramados con expectativas que forman una especificación de las llamadas que se espera recibir.

Estos mocks se sirven desde un servidor web a tra vez de una . `Mock API`

## Mocks y TDD

El servidor Mocks debe de estar muy bien diseñada y documentada diciendo lo que va a requerir y va a devolver en las rutas del backend

# Facker.js

Es una libreria de JavaScript que nos permite generar varios tipos de datos aleatorios para poder hacer datos mocks desde el servidor https://fakerjs.dev/