function Pessoa(customProperties) {
    return {
        name: 'Giovanna',
        lastname: 'Ramos',
        ...customProperties
    }
}

const p = Pessoa({name: 'Custom-Name', age: 27});
console.log(p);