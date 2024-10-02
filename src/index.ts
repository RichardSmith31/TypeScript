/*let nombre: string = "Cristian";
nombre = "Buitrago";
console.log(nombre)
let numero: number = 23;
console.log(numero);
*/
type address = {
    city : string;
    country : string;
    ad: string;
}

//crear objeto en typescript
type estudiante = {
    fistName: string;
    lastName: string;
    age?: number;
    address? : address;
}

const e1 : estudiante = {
    fistName : "Carlos",
    lastName : "Rodriguez",
    age : 23,
    address : {
        city: "Bogota",
        country: "Colombia",
        ad: "Calle52 13 65"
    }
}

const e2 : estudiante = {
    fistName : "Richard",
    lastName : "Sanchez",
    age : 17,
    address : {
        city: "Bogota",
        country: "Colombia",
        ad: "Cra 73 #56 41 sur"
    }
}

//funcion para mostrar info del estudiante
//version declarativa

const mostrarEstudiante =
    (estudiante: estudiante): string => {
        const {fistName, lastName } = estudiante;
        return `Nombre de estudiante: ${ fistName} 
                apellido ${lastName} `;
    }


console.log(mostrarEstudiante(e1));

//Arreglos
//Crear un arreglo de estudiantes

let estudiantes: estudiante[] = [e2]

estudiantes.forEach((estudiante) => {
    console.log(`Nombre: ${estudiante.fistName}, Apellido: ${estudiante.lastName}`);
});

const agregarEstudiante = (estudiante: estudiante ) => {
    estudiantes.push(estudiante)
}

const eliminarEstudiantePorEdad = (edad: number) => {
    estudiantes = estudiantes.filter(estudiante => estudiante.age !== edad);
};

agregarEstudiante({
    fistName: "Julian",
    lastName: "Ospina",
    age: 18
});

eliminarEstudiantePorEdad(18);

console.log(estudiantes);


