//Eventos

const expandir = () => {
    $('#more-projects-1').fadeIn(1000, mostrar ()); //--> HTMLfunctions.js
    $('#more-projects-2').fadeIn(1000, mostrar ());
}

const contraer = () => {
    $('#more-projects-1').fadeOut("slow", ocultar ()); //--> HTMLfunctions.js
    $('#more-projects-2').fadeOut("slow", ocultar ());
}

