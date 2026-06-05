import fs from 'fs';
import antlr4 from 'antlr4';
import C_ReducidoLexer from './c_reducidolexer.js';
import C_ReducidoParser from './c_reducidoparser.js';

class ManejadorErrores extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.tieneErrores = false;
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.tieneErrores = true;
        console.error(`❌ Error sintáctico en Línea ${line}:${column} -> ${msg}`);
    }
}

function analizar() {
    const archivoInput = 'input.txt';

    if (!fs.existsSync(archivoInput)) {
        console.error(`Archivo ${archivoInput} no encontrado. Crealo primero.`);
        return;
    }

    const input = fs.readFileSync(archivoInput, 'utf-8');
    const chars = new antlr4.InputStream(input);
    const lexer = new C_ReducidoLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new C_ReducidoParser(tokens);

    const escuchador = new ManejadorErrores();
    parser.removeErrorListeners();
    parser.addErrorListener(escuchador);

    console.log("🚀 Analizando el código de input.txt...");
    parser.programa(); 

    if (escuchador.tieneErrores) {
        console.log("\n🔴 El código tiene errores.");
    } else {
        console.log("\n🟢 ¡Código válido! Cumple con la gramática.");
    }
}

analizar();
