## Desafio generico

Dada la siguiente constante `const frase = "Hola mundo cómo están"`

Realizar un servidor con API Rest usando node.js y express que contenga los siguientes endpoints get:

| endPoint                   | Acción                                                      |
| -------------------------- | ----------------------------------------------------------- |
| 1. '/api/frase' ->         | Devuelve la frase en forma completa en un campo 'frase'.    |
| 2. '/api/letras/:num' ->   | Devuelve por numero de orden la letra de esa frase.         |
| 3. '/api/palabras/:num' -> | Devuelve por número de orden la palabra dentro de esa frase |
