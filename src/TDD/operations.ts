import { Matemagica } from "./Matematica";
import { ErrorMessage } from "./errorMessages"

export class Operations{
    
    sum(a,b){    
        let matemagica = new Matemagica(a,b); 
        if(typeof a !== "number" || typeof b !== "number"){
            return ErrorMessage.PARAM_ERROR_TYPE
        } 
        return matemagica.getSum(a,b);
    }

    sub(a,b){
        let matemagica = new Matemagica(a,b); 
        if(typeof a !== "number" || typeof b !== "number"){
            return ErrorMessage.PARAM_ERROR_TYPE
        } 
        return matemagica.getSub(a,b);
    
    }

    mult(a,b){
        let matemagica = new Matemagica(a,b); 
        if(typeof a !== "number" || typeof b !== "number"){
            return ErrorMessage.PARAM_ERROR_TYPE
        } 
        return matemagica.getMult(a,b);
    }

    div(a,b){
        let matemagica = new Matemagica(a,b); 
        if(typeof a !== "number" || typeof b !== "number"){
            return ErrorMessage.PARAM_ERROR_TYPE
        }
        if(b == 0){
            return ErrorMessage.PARAM_ERROR_DIV_ZERO
        }
        return matemagica.getDiv(a,b);
    }
}