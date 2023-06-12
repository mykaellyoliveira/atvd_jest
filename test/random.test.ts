import {describe, test, expect} from  '@jest/globals'
import { Product } from '../src/TDD/Product'
import { ArrayRandomValues } from '../src/TDD/random'
import { ErrorMessage } from '../src/TDD/errorMessages';


let array = new ArrayRandomValues;

describe('RandomNumbers', () =>{

    test('Deve receber um array de Produtos e uma quantidade e retornar aleatoriamente outro array com a quantidade solicitada', ()=>{
        const produtos: Product [] = [
            { name: "Caneta", quantity: 10, price: 7.99 },
            { name: "Impressora", quantity: 0, price: 649.5 },
            { name: "Caderno", quantity: 4, price: 27.1 },
            { name: "Lapis", quantity: 3, price: 5.82 },
            { name: "Tesoura", quantity: 1, price: 19.99 },
            { name: "Estojo", quantity: 7, price: 9.99 },
            { name: "Teclado", quantity: 2, price: 609.99 },
            { name: "Tenis", quantity: 3, price: 350.99 },
            { name: "Fone", quantity: 5, price: 198.99 },
            { name: "Mochila", quantity: 15, price: 150.99 },
          ];
          const result = array.getRandomProduct(produtos, 3);
          expect(result.length).toBe(3);
    })
    
    test('Deve receber uma array de Produtos vazio e a quantidade e retornar um erro', () =>{
        const produtos: Product[] = [];

        expect(array.getRandomProduct(produtos, 3)).toBe(ErrorMessage.ARRAY_ERROR_NULL)
    })

    test('Deve receber um array de Produtos e uma quantidade maior do que o tamanho do array e retornar um erro', () =>{
        const produtos: Product[] = [
            { name: "Caneta", quantity: 10, price: 7.99 },
            { name: "Impressora", quantity: 0, price: 649.5 },
            { name: "Caderno", quantity: 4, price: 27.1 },
        ]
        expect(array.getRandomProduct(produtos, 4)).toBe(ErrorMessage.ARRAY_ERROR_LENGTH)
    })

    test('Deve receber um array de Produtos e uma quantidade igual ou menor que zero e retornar um erro', () =>{
        const produtos: Product[] = [
            { name: "Caneta", quantity: 10, price: 7.99 },
            { name: "Impressora", quantity: 0, price: 649.5 },
            { name: "Caderno", quantity: 4, price: 27.1 },
        ]
        expect(array.getRandomProduct(produtos, 0)).toBe(ErrorMessage.ARRAY_ERROR_QUANT)
    })

})