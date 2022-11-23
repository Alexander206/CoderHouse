# MongoDB

Es una base de datos no relacional, noSQL orientada a documentos que ofrece una gran escalabilidad y flexibilidad y un modelo de consultas e indexación avanzado.

## Modelo de documentos de MongoDB

El `modelo de documentos` de MongoDB resulta muy fácil de aprender y usar, proporciona a los desarrolladores todas las funcionalidades que necesitan para satisfacer los requisitos más complejos a cualquier escala.

-   ### Obciones de implementación:

-   Local
-   Remota( Cloud )

## Bentajas de trabajar con MongoDB

-   Almacenar dator en documentos similares a JSON.
-   El modelo de documento se asigna a los objetos en el código de su aplicacipon para facilitar el trabajo con los datos.
-   Es gratuito
-   Es una base de datos distribuida en su núcleo

# ¿Cómo funciona MongoDB?

El registro de información se apoya en el concepto de `colección, documento y propiedad`

-   ### Arquitectura:

Se crea una gerarquia de conjuntos de la siguiente manera:

    Servidor MongoDB
    |-> `DataBase1`
    |    |-> Colección1
    |    |   |->Docuemnto
    |    |   |->Documento
    |    |   |->Documento
    |    |->Colección2
    |        |->Docuemnto
    |        |->Documento
    |        |->Documento
    |-> `DataBase2`
         |-> Colección1
         |   |->Docuemnto
         |   |->Documento
         |   |->Documento
         |->Colección2
             |->Docuemnto
             |->Documento
             |->Documento

-   ### Colecciones

Una colencción en MongoDB son un conjunto de documentos que a su vez de manera interna tiene datos. Estos datos pueden NO parecerse a otros datos de la misma colección.

-   ### Documentos

Un documento esta compuesto por clave valor y cada documento puede tener variciones importantes con respecto al anterior.

-   ### Schema Free (Esquema libre)

Es cuando tenemos documentos muy diferenetes de uno al otro, como por ejemplo un usuario que tenga solo el nombre y otro usuario que tenga nombre, edad, profesion.

-   ### Documentos Embebidos

Es cuando un documento esta insertado dentro de otro y ambos estan ligados a la misma colección.

# Uso e instalación de MongoDB

Bucar en internet como instalar MongoDB ->> tener como enfoque el instalar `Mongo DB comunity Server`

Podemos Usar MongoDB Online con MongoCloud / Mongoatlas https://cloud.mongodb.com/v2#/org/6352fa5e2398402d95dbad1a/projects
Tambien lo podemos instalar en el sistema operativo del Pc. Si lo instalamos, se crearan 2 archivos importantes en la carpeta de instalación: `MongoDB(Shell)` y `MongoD(Servidor)`

creamos una carpeta en la que se va a guardar la base de datos en este caso lo hacemos asi `mongod --dbpath "C:\Users\Amaro\OneDrive\Documentos"`

Bueno, el profe se confundio mucho y lo hicimos online: entonces creamos la base de datos y podemos crear varias opciones, allí vamos a crear un usuario y su contraseña, en este caso mi usuario es `developerprueba` y la contraseña que me genero MongoDB fue `tl4IYJqOOPlO715F`

Cuando vayamos a conectar la base de datos con `MongoDB compass` nos va a generar un link. Este fue el que nos genero:

    mongodb+srv://developerprueba:<password>@cluster0.gqftryb.mongodb.net/test

Solo hace falta cambiar la parte de `<password>` por la que generamos en el usuario

-   ### Studio 3T

Es otra interfaz de usuario para administrar las bases de datos de MongoDB
