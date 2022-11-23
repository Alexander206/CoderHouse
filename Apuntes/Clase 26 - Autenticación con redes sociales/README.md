# Estrategia de autenticación con redes sociales

-   ## Twitter

-   Twitter permite a los usuarios iniciar sesión en una aplicación web utilizando su cuenta de twiter.
-   Internamente, la autenticación de twiter funciona con OAuth 1.0.a Se implementa mendiante passport-twiter

    `Twitter for Developers` https://developer.twitter.com/

-   ## JSON WEB Token

Es un método estandar y abierto para representar reclamaciones de forma segura entre dos partes. JWT.IO nos permite decodificar, verificar y generar JWT basicamante los JWT son cadenas de datos que se pueden utilizar para autentichar e intercambiar información entre un servidor y un cliente

### Instalación de modulos:

`npm i jsonwebtoken bcrypt`

bcrypt: Es una forma de encriptar la información del password o información sensible
