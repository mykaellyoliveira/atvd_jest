import { Product } from './Product';
import { ErrorMessage } from './errorMessages';

export class ArrayRandomValues{
    productsRandom: Product[] = [];
    array: Product[];
    qtd: number;

    getRandomProduct(array, qtd){
        if (array.length === 0) {
            return ErrorMessage.ARRAY_ERROR_NULL;
        }

        if (qtd > array.length) {
            return ErrorMessage.ARRAY_ERROR_LENGTH;
        }

        if (qtd <= 0) {
            return ErrorMessage.ARRAY_ERROR_QUANT;
        }

        while (this.productsRandom.length < qtd) {
            let numberIndex = Math.floor(Math.random() * array.length);
            if (!this.productsRandom.includes(array[numberIndex])) {
                this.productsRandom.push(array[numberIndex]);
            }
        }
        return this.productsRandom;
    }
    
}
