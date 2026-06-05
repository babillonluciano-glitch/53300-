# Analizador Léxico y Sintáctico - C Reducido

Proyecto de un analizador sintáctico y léxico generado con **ANTLR4** y **Node.js** para la cátedra de Diseño de Compiladores.

## Requisitos Previos
* Tener instalado **Node.js** (versión 14 o superior).
* Tener instalado **Java** (necesario para el compilador de ANTLR4).

## Integrantes
* Luciano Babillon

## Cómo Ejecutar la Aplicación
1. Descargue o clone este repositorio.
2. Abra una terminal en la carpeta del proyecto.
3. Instale las dependencias de Node.js necesarias con el comando:
   ```bash
   npm install
   ```
4. Para probar un código, copie el contenido de cualquiera de los ejemplos provistos (`ejemplo_correcto1.txt`, `ejemplo_incorrecto1.txt`, etc.) adentro del archivo `input.txt`.
5. Ejecute el analizador corriendo el siguiente comando en la terminal:
   ```bash
   node index.js
   ```

## Estructura del Repositorio
* `C_ReducidoLexer.g4`: Gramática del Analizador Léxico.
* `C_ReducidoParser.g4`: Gramática del Analizador Sintáctico.
* `index.js`: Script ejecutable principal de Node.js que procesa el archivo de entrada.
* `input.txt`: Archivo de entrada donde se coloca el código a analizar.
