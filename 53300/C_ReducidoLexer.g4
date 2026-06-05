lexer grammar C_ReducidoLexer;

// Palabras reservadas fundamentales
WHILE   : 'while' ;
PRINTF  : 'printf' ;
BREAK   : 'break' ;

// Fijos y operadores de control
PAR_A   : '(' ;
PAR_C   : ')' ;
LLA_A   : '{' ;
LLA_C   : '}' ;
P_COM   : ';' ;
COMILLA : '"' ;

// Tokens lógicos de condición
C_FALSO : '0' ;
C_VERD  : '1' ;

// Clases de caracteres elementales
LETRA   : [a-zA-Z] ;
DIGITO  : [0-9] ;

// Símbolos estándar sin ambigüedades de escape
SIMBOLO : [.,;:!?()+*/=<>#$&_~-] ;

// Ocultar espacios en blanco y saltos de línea del Parser
WS      : [ \t\r\n]+ -> skip ;
