const natalia = {

    name: "natalia",
    agee: 20,
    cursosAprobados: ["curso de html y css",
"curso practico de html y css", ],

aprobarCurso: function ( nuevoCurso){

    this.cursosAprobados.push(nuevoCurso);


}
};



function Student(name, age, cursosAprobados){

    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados
    this.aprobarCurso = function (cursoNuevo){

        this.cursosAprobados.push(cursoNuevo);
    };

}

Student.prototype.aprobarCurso = function(curso){

    return this.cursosAprobados.push(curso);
}


const santiago = new Student("santiago", 23,["matematicas","sistemas"]);



// hacer que natalia apruebe el curso

natalia.cursosAprobados.push("responsive design")

console.log(natalia)






class estudiante{

    
constructor(nombre, edad, cursos){

    this.nombre = nombre;
    this.edad = edad;
    this.cursos = cursos;
    
}



 meterCursos(cursos){

    this.cursos += " "+cursos;

 }



}



const estudiante1 = new estudiante("kevin",24,"matematicas");