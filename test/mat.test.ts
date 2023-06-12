import { describe, test, expect } from '@jest/globals'
import { Operations } from '../src/TDD/operations'
import { ErrorMessage } from '../src/TDD/errorMessages'

let operations = new Operations
//teste
describe('Somatórias', () =>{
    test('Deve receber dois números como parametros e retornar a somatória', () =>{
        expect(operations.sum(1,2)).toBe(3)
    })
})

describe('Subtrações', () =>{
    test('Deve receber dois números como parametros e retornar a subtração', () =>{
        expect(operations.sub(2,1)).toBe(1)
    })
})

describe('Multiplicações', () =>{
    test('Deve receber dois números como parametros e retornar a Multiplicação', () =>{
        expect(operations.mult(4,2)).toBe(8)
    })
})

describe('Divisões', () =>{
    test('Deve receber dois números como parametros e retornar a Divisão', () =>{
        expect(operations.div(10,2)).toBe(5)
    })

    test('Deve receber o segundo parametro com o valor 0 e retornar um erro',()=>{
        expect(operations.div(10,0)).toBe(ErrorMessage.PARAM_ERROR_DIV_ZERO)
    })
})