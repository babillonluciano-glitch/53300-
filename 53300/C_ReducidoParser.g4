parser grammar C_ReducidoParser;

options {
    tokenVocab = C_ReducidoLexer;
}

// Regla inicial obligatoria
programa 
    : instrucciones EOF 
    ;

instrucciones 
    : instruccion

    | instrucciones instruccion
    ;

instruccion 
    : bucle 
    ;

bucle 
    : WHILE PAR_A condicion PAR_C LLA_A sentencia LLA_C 
    ;

sentencia 
    : salida
    | salida sentencia
    | terminar
    ;

salida 
    : PRINTF PAR_A cadena PAR_C P_COM 
    ;

terminar 
    : BREAK P_COM 
    ;

condicion 
    : C_FALSO

    | C_VERD
    ;

cadena 
    : COMILLA caracteres COMILLA 
    ;

caracteres 
    : caracter
    | caracteres caracter
    ;

caracter 
    : LETRA

    | DIGITO
    | SIMBOLO
    ;
