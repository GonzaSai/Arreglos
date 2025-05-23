//1)

let colores = ['azul', 'amarillo', 'rojo', 'naranja', 'celeste'];

//2) 

console.log(colores[0]);

//3) 

console.log(colores.length);

//4)

colores.push('rosa');
console.log(colores[colores.length - 1])

//5)

colores.unshift('blanco')
console.log(colores[0])

//6) 

colores.pop()
console.log(colores[colores.length - 1])

//7)

colores.shift()
console.log(colores[0])

//8)

colores[1] = 'marron'
console.log(colores[1])

//9)

for (let indice = 0; indice < colores.length; indice++) {
    console.log(colores[indice])
    
}

//10)

let color1 = prompt('Introduce un color')
let color2 = prompt('Introduce un color')
let color3 = prompt('Introduce un color')
let nuevosColores = [color1, color2, color3]
console.log(nuevosColores)

