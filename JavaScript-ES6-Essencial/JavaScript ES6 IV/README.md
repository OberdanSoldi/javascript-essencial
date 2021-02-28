# Aula 4 - Manipulação e iteração de arrays JavaScript ES6

## Criando e manipulando arrays

### Criar um array

[Criar um array](./Array/Criar-um-array.js)
```JavaScript
const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
```

[Array-of](./Array/Criar-um-array.js)
```JavaScript
//Array.of
//Cria uma nova instância de array a partir do número de parâmetros informados

const arr = Array.of(1, 2, 3);
```

[Array](./Array/Array.js)
```JavaScript
//Array 
//Cria uma nova instância de array de acordo com os parâmetros informados

const arr = Array(3);
//empty

const arr2 = Array(3, 2);
//2, 3
```

[Array-from](./Array/Array-from.js)
```JavaScript
//Array.from
//Cria uma nova instância de array a partir de um parâmetro array-like ou iterable object

const divs = document.querySelectorAll("div");
const arr = Array.from("divs");
```
### Inserir e remover elementos 

[Push](./Inserir-e-remover-elementos/Push.js)
```JavaScript
//Push
//Adicionar um ou mais elementos no final do array e retorna o tamanho do novo array 

const arr = ['banana', 'melancia', 'abacate'];
const arrLength = arr.push('acerola');

console.log(arrLength);
// 4

console.log(arr);
// ['banana', 'melancia', 'abacate', 'acerola'];
```

[Pop](./Inserir-e-remover-elementos/pop.js)
```JavaScript
//pop
//Remove o último elemento de um array e retorna o elemento removido

const arr = ['banana', 'melancia', 'abacate'];
const removedItem = arr.pop();

console.log(removedItem);
// 'abacate'    

console.log(arr);
// ['banana', 'melancia'];
```

[Unshift](./Inserir-e-remover-elementos/Unshift.js)
```JavaScript
//unshift
//Adicionar um ou mais elementos no início do array e retorna o tamanho do novo array

const arr = ['banana', 'melancia', 'abacate'];
const arrLenght = arr.unshift('acerola');

console.log(arrLenght);
// 4

console.log(arr);
// ['banana', 'melancia', 'abacate', 'acerola'];
```

[Shift](./Inserir-e-remover-elementos/Shift.js)
```JavaScript
//Shift
//Remove o primeiro elemento do inicio de um array e retorna e retorna o elemento removido
const arr = ['banana', 'melancia', 'abacate'];
const arrLenght = arr.shift();

console.log(arrLenght);
// 'banana'

console.log(arr);
// ['melancia', 'abacate'];
```

[Concat](./Inserir-e-remover-elementos/Concat.js)
```JavaScript
//concat
//Concatena um ou mais arrays retornando um novo array

const frutas = ['banana', 'melancia', 'abacate'];
const salgados = ['coxinha', 'kibe', 'empada'];
const alimentos = frutas.concat(salgados); // Não altera os arrays que foram concatenados

console.log(alimentos);
// ['banana', 'melancia', 'abacate', 'coxinha', 'kibe', 'empada']

console.log(frutas);
// ['banana', 'melancia', 'abacate']
console.log(salgados);
// ['coxinha', 'kibe', 'empada']
```

[Slice](./Inserir-e-remover-elementos/Slice.js)
```JavaScript
//slice
//Retorna um novo array "Fatiando" o array de acordo com inicio e fim

const arr = [1, 2, 3, 4, 5];

arr.slice(0, 2);
// [1, 2]

arr.slice(2)
// [3, 4, 5]

arr.slice(-1);
// [5]

arr.slice(-3);
// [3, 4, 5]
```

[Splice](./Inserir-e-remover-elementos/Splice.js)
```JavaScript
const arr = [1, 2, 3, 4, 5];

arr.splice(2);
// [1, 2]

console.log(arr);
// [1, 2]

arr.slice(0, 0, 'first');
// []

console.log(arr);
// ["first", 1, 2]
```

---
---

## Iterar, buscar e transformar elementos

### Iterar elementos

[ForEach](./Iterar-elementos/forEach.js)
```JavaScript
//forEach
//iteração de cada item dentro de um array

const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});
```

[Fap](./Iterar-elementos/map.js)
```JavaScript
//map
//Retorna um novo array, de mesmo tamanho, iterando cada item de um array

const arr = [1, 2, 3, 4, 5];

arr.map(value => value * 2);
// [2, 4, 6, 8, 10]
```

[Flat](./Iterar-elementos/flat.js)
```JavaScript
//flat
//Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada(depth)

const arr = [1, 2, [3, 4]];

arr.flat();
// [1, 2, 3, 4]
```

[FlatMap](./Iterar-elementos/flatmap.js)
```JavaScript
//flatMap
//Retorna um novo array assim como função map e executa um flat de profundidade 1

const arr = [1, 2, 3, 4];

arr.flatMap(value => [value * 2]);
// [2, 4, 6, 8]

arr.flatMap(value => [[value * 2]])
// [[2], [4], [6], [8]]
```

[Keys](./Iterar-elementos/keys.js)
```JavaScript
//keys
//Retorna um array iterator que contém os chaves para cada elemento do array 

const arr = [1, 2, 3, 4, 5];
const arrIterator = arr.keys();

arrIterator.next();
// {value: 0, done: false}

arrIterator.next();
// {value: 1, done: false}

arrIterator.next();
//{value: 2, done: false}

arrIterator.next();
//{value: 3, done: true}
```

### Buscar elementos

[Find](Buscar-elementos/find.js)
```JavaScript
//find
//Retorna o primeiro item de um array que satisfaz a condição

const arr = [1, 2, 3, 4];

const firstGreaterThanTwo = arr.find(value => value > 2);

console.log(firstGreaterThanTwo);
// 3
```

[FindIndex](Buscar-elementos/findindex.js)
```JavaScript
//FindIndex
//Retorna o índicie do primeiro item de um array que satisfaz a condição

const arr = [1, 2, 3, 4];

const firstGreaterThanTwo = arr.findIndex(value => value > 2);

console.log(firstGreaterThanTwo);
// 2
```

[FindIndex](Buscar-elementos/findindex.js)
```JavaScript
//filter
//Retorna um novo array com todos os elementos que satisfazem a condição

const arr = [1, 2, 3, 4,];

const allValuesGreaterThanTwo = arr.filter(value => value > 2);

console.log(allValuesGreaterThanTwo);
// [3, 4]
```

[indexOf](Buscar-elementos/indexOf.js)
```JavaScript
//indexOf
//Retorna o primeiro índicie em que um elemento pode ser encontrado no array

const arr = [1, 2, 3, 4, 3];

const firstIndexOfItem = arr.indexOf(3);

console.log(firstIndexOfItem);
```

[lastIndexOf](Buscar-elementos/lastIndexOf.js)
```JavaScript
//lastIndexOf
//Retorna o último índicie em que um elemento pode ser encontrado no array 

const arr = [1, 3, 3, 4, 3];
const lirstIndexOfItem = arr.lastIndexOf(3)

console.log(lastIndexofItem);
// 4
```

[Includes](Buscar-elementos/includes.js)
```JavaScript
//includes
//Retorna um booleano verificando se determinado elemento existe no array

const arr = [1, 3, 3, 4, 3];

const hasItemOne = arr.includes(1);
// True

const hasItemTwo = arr.includes(2);
// False
```

[Some](Buscar-elementos/some.js)
```JavaScript
//some
//Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição

const arr = [1, 3, 3, 4, 3];
const hasSomeEverNumber = arr.some(value => value % 2 === 0);
// True
```

[Every](Buscar-elementos/every.js)
```JavaScript
//every
//Retorna um booleano verificando se todos os itens de um array satisfazem a condição

const allEvenNumbers = arr.every(value => value % 2 === 0);
// False
```

[sort](Buscar-elementos/sort.js)
```JavaScript
//sort 
//Ordena os elementos do um array de acordo com a condição

const arr = [1, 3, 2, 5, 4];

arr.sort();
// [1, 2, 3, 4, 5]
```

[reverse](Buscar-elementos/reverse.js)
```JavaScript
//reverse
//Inverte os elementos de um array

const arr = [1, 2, 3, 4, 5];

arr.reverse();
// [5, 4, 3, 2, 1]
```

### Transformar em outro tipo de dado

[Join](Transformar-em-outro-tipo-de-dados/join.js)
```JavaScript
//join
//Junta todos os elementos de um array, separados por um delimitador e retorna uma string 

const arr = [1, 2, 3, 4, 5];

arr.join('-');
// "1-2-3-4-5"
```

[Reduce](Transformar-em-outro-tipo-de-dados/reduce.js)
```JavaScript
//reduce
//Retorna um novo tipo de dado iterando cada posição de um array

const arr = [1, 2, 3, 4, 5];

arr.reduce((total, value) => total += value, 0);
// 15
```