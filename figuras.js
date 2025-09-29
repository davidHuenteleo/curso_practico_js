

console.group("Cuadrados");


//Codigo del cuadrado
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: "+ perimetroCuadrado)

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: "+ areaCuadrado + "cm´2")


console.groupEnd();




console.group("Triangulo");

//Codigo del triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triangulo miden: "
    + ladoTriangulo1
    + "cm, "

    + ladoTriangulo2
    + "cm, "

    + baseTriangulo
    + "cm"

);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: ")

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;


console.groupEnd();


//Codigo del circulo
console.group("Circulos");

//radio
const radioCirculo = 4;

//Diametro
const diametroCirculo = radioCirculo * 2;

//Pi
const PI = 3.1415;


//Circunferecia

console.groupEnd();
