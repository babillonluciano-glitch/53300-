// Generated from C_ReducidoParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import C_ReducidoParserListener from './C_ReducidoParserListener.js';
const serializedATN = [4,1,15,80,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,1,1,1,1,
1,1,1,1,1,5,1,31,8,1,10,1,12,1,34,9,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,4,1,4,1,4,1,4,1,4,3,4,51,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,
1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,5,9,73,8,9,10,9,12,9,76,9,9,
1,10,1,10,1,10,0,2,2,18,11,0,2,4,6,8,10,12,14,16,18,20,0,2,1,0,10,11,1,0,
12,14,72,0,22,1,0,0,0,2,25,1,0,0,0,4,35,1,0,0,0,6,37,1,0,0,0,8,50,1,0,0,
0,10,52,1,0,0,0,12,58,1,0,0,0,14,61,1,0,0,0,16,63,1,0,0,0,18,67,1,0,0,0,
20,77,1,0,0,0,22,23,3,2,1,0,23,24,5,0,0,1,24,1,1,0,0,0,25,26,6,1,-1,0,26,
27,3,4,2,0,27,32,1,0,0,0,28,29,10,1,0,0,29,31,3,4,2,0,30,28,1,0,0,0,31,34,
1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,3,1,0,0,0,34,32,1,0,0,0,35,36,3,6,
3,0,36,5,1,0,0,0,37,38,5,1,0,0,38,39,5,4,0,0,39,40,3,14,7,0,40,41,5,5,0,
0,41,42,5,6,0,0,42,43,3,8,4,0,43,44,5,7,0,0,44,7,1,0,0,0,45,51,3,10,5,0,
46,47,3,10,5,0,47,48,3,8,4,0,48,51,1,0,0,0,49,51,3,12,6,0,50,45,1,0,0,0,
50,46,1,0,0,0,50,49,1,0,0,0,51,9,1,0,0,0,52,53,5,2,0,0,53,54,5,4,0,0,54,
55,3,16,8,0,55,56,5,5,0,0,56,57,5,8,0,0,57,11,1,0,0,0,58,59,5,3,0,0,59,60,
5,8,0,0,60,13,1,0,0,0,61,62,7,0,0,0,62,15,1,0,0,0,63,64,5,9,0,0,64,65,3,
18,9,0,65,66,5,9,0,0,66,17,1,0,0,0,67,68,6,9,-1,0,68,69,3,20,10,0,69,74,
1,0,0,0,70,71,10,1,0,0,71,73,3,20,10,0,72,70,1,0,0,0,73,76,1,0,0,0,74,72,
1,0,0,0,74,75,1,0,0,0,75,19,1,0,0,0,76,74,1,0,0,0,77,78,7,1,0,0,78,21,1,
0,0,0,3,32,50,74];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class C_ReducidoParser extends antlr4.Parser {

    static grammarFileName = "C_ReducidoParser.g4";
    static literalNames = [ null, "'while'", "'printf'", "'break'", "'('", 
                            "')'", "'{'", "'}'", "';'", "'\"'", "'0'", "'1'" ];
    static symbolicNames = [ null, "WHILE", "PRINTF", "BREAK", "PAR_A", 
                             "PAR_C", "LLA_A", "LLA_C", "P_COM", "COMILLA", 
                             "C_FALSO", "C_VERD", "LETRA", "DIGITO", "SIMBOLO", 
                             "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "bucle", 
                         "sentencia", "salida", "terminar", "condicion", 
                         "cadena", "caracteres", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = C_ReducidoParser.ruleNames;
        this.literalNames = C_ReducidoParser.literalNames;
        this.symbolicNames = C_ReducidoParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.instrucciones_sempred(localctx, predIndex);
    	case 9:
    	    		return this.caracteres_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    instrucciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    caracteres_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, C_ReducidoParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.instrucciones(0);
	        this.state = 23;
	        this.match(C_ReducidoParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	instrucciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new InstruccionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, C_ReducidoParser.RULE_instrucciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.instruccion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 32;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new InstruccionesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, C_ReducidoParser.RULE_instrucciones);
	                this.state = 28;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 29;
	                this.instruccion(); 
	            }
	            this.state = 34;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, C_ReducidoParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.bucle();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, C_ReducidoParser.RULE_bucle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(C_ReducidoParser.WHILE);
	        this.state = 38;
	        this.match(C_ReducidoParser.PAR_A);
	        this.state = 39;
	        this.condicion();
	        this.state = 40;
	        this.match(C_ReducidoParser.PAR_C);
	        this.state = 41;
	        this.match(C_ReducidoParser.LLA_A);
	        this.state = 42;
	        this.sentencia();
	        this.state = 43;
	        this.match(C_ReducidoParser.LLA_C);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, C_ReducidoParser.RULE_sentencia);
	    try {
	        this.state = 50;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.salida();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.salida();
	            this.state = 47;
	            this.sentencia();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 49;
	            this.terminar();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, C_ReducidoParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(C_ReducidoParser.PRINTF);
	        this.state = 53;
	        this.match(C_ReducidoParser.PAR_A);
	        this.state = 54;
	        this.cadena();
	        this.state = 55;
	        this.match(C_ReducidoParser.PAR_C);
	        this.state = 56;
	        this.match(C_ReducidoParser.P_COM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, C_ReducidoParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(C_ReducidoParser.BREAK);
	        this.state = 59;
	        this.match(C_ReducidoParser.P_COM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, C_ReducidoParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        _la = this._input.LA(1);
	        if(!(_la===10 || _la===11)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, C_ReducidoParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(C_ReducidoParser.COMILLA);
	        this.state = 64;
	        this.caracteres(0);
	        this.state = 65;
	        this.match(C_ReducidoParser.COMILLA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	caracteres(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CaracteresContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, C_ReducidoParser.RULE_caracteres, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.caracter();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 74;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new CaracteresContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, C_ReducidoParser.RULE_caracteres);
	                this.state = 70;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 71;
	                this.caracter(); 
	            }
	            this.state = 76;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, C_ReducidoParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

C_ReducidoParser.EOF = antlr4.Token.EOF;
C_ReducidoParser.WHILE = 1;
C_ReducidoParser.PRINTF = 2;
C_ReducidoParser.BREAK = 3;
C_ReducidoParser.PAR_A = 4;
C_ReducidoParser.PAR_C = 5;
C_ReducidoParser.LLA_A = 6;
C_ReducidoParser.LLA_C = 7;
C_ReducidoParser.P_COM = 8;
C_ReducidoParser.COMILLA = 9;
C_ReducidoParser.C_FALSO = 10;
C_ReducidoParser.C_VERD = 11;
C_ReducidoParser.LETRA = 12;
C_ReducidoParser.DIGITO = 13;
C_ReducidoParser.SIMBOLO = 14;
C_ReducidoParser.WS = 15;

C_ReducidoParser.RULE_programa = 0;
C_ReducidoParser.RULE_instrucciones = 1;
C_ReducidoParser.RULE_instruccion = 2;
C_ReducidoParser.RULE_bucle = 3;
C_ReducidoParser.RULE_sentencia = 4;
C_ReducidoParser.RULE_salida = 5;
C_ReducidoParser.RULE_terminar = 6;
C_ReducidoParser.RULE_condicion = 7;
C_ReducidoParser.RULE_cadena = 8;
C_ReducidoParser.RULE_caracteres = 9;
C_ReducidoParser.RULE_caracter = 10;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	EOF() {
	    return this.getToken(C_ReducidoParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_instrucciones;
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.exitInstrucciones(this);
		}
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.exitInstruccion(this);
		}
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_bucle;
    }

	WHILE() {
	    return this.getToken(C_ReducidoParser.WHILE, 0);
	};

	PAR_A() {
	    return this.getToken(C_ReducidoParser.PAR_A, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	PAR_C() {
	    return this.getToken(C_ReducidoParser.PAR_C, 0);
	};

	LLA_A() {
	    return this.getToken(C_ReducidoParser.LLA_A, 0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	LLA_C() {
	    return this.getToken(C_ReducidoParser.LLA_C, 0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.exitBucle(this);
		}
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.exitSentencia(this);
		}
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_salida;
    }

	PRINTF() {
	    return this.getToken(C_ReducidoParser.PRINTF, 0);
	};

	PAR_A() {
	    return this.getToken(C_ReducidoParser.PAR_A, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	PAR_C() {
	    return this.getToken(C_ReducidoParser.PAR_C, 0);
	};

	P_COM() {
	    return this.getToken(C_ReducidoParser.P_COM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.exitSalida(this);
		}
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_terminar;
    }

	BREAK() {
	    return this.getToken(C_ReducidoParser.BREAK, 0);
	};

	P_COM() {
	    return this.getToken(C_ReducidoParser.P_COM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.exitTerminar(this);
		}
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_condicion;
    }

	C_FALSO() {
	    return this.getToken(C_ReducidoParser.C_FALSO, 0);
	};

	C_VERD() {
	    return this.getToken(C_ReducidoParser.C_VERD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.exitCondicion(this);
		}
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_cadena;
    }

	COMILLA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(C_ReducidoParser.COMILLA);
	    } else {
	        return this.getToken(C_ReducidoParser.COMILLA, i);
	    }
	};


	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.exitCadena(this);
		}
	}


}



class CaracteresContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_caracteres;
    }

	caracter() {
	    return this.getTypedRuleContext(CaracterContext,0);
	};

	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.enterCaracteres(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.exitCaracteres(this);
		}
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(C_ReducidoParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(C_ReducidoParser.DIGITO, 0);
	};

	SIMBOLO() {
	    return this.getToken(C_ReducidoParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoParserListener ) {
	        listener.exitCaracter(this);
		}
	}


}




C_ReducidoParser.ProgramaContext = ProgramaContext; 
C_ReducidoParser.InstruccionesContext = InstruccionesContext; 
C_ReducidoParser.InstruccionContext = InstruccionContext; 
C_ReducidoParser.BucleContext = BucleContext; 
C_ReducidoParser.SentenciaContext = SentenciaContext; 
C_ReducidoParser.SalidaContext = SalidaContext; 
C_ReducidoParser.TerminarContext = TerminarContext; 
C_ReducidoParser.CondicionContext = CondicionContext; 
C_ReducidoParser.CadenaContext = CadenaContext; 
C_ReducidoParser.CaracteresContext = CaracteresContext; 
C_ReducidoParser.CaracterContext = CaracterContext; 
