const mostrar = () => {
    $('#more-projects-1').html(
        `<h3 class="projects__title color-aux1">Desarrollo web</h3>
        <img class="projects__img" src="./img/img-8.jpg" alt="Proyecto Desarrollo Web Home simple">
        <p class="projects__par">Estructura de sitio web sencillo para el desarrollo de una homepage utilizando solamente herramientas de HTML y CSS.</p>
        <a class="button" href="https://simple-home-project.netlify.app/">Ver Proyecto</a>`);
    $('#more-projects-2').html(
        `<h3 class="projects__title color-aux1">Desarrollo web</h3>
        <img class="projects__img" src="./img/img-9.jpg" alt="Proyecto Desarrollo Web">
        <p class="projects__par">Estructura de una sola página, a excepción de los cursos, en la que se aplica HTML, CSS, Bootstrap y Javascript, utilizando preprocesadores como SASS, para desarrollar el portfolio que está visualizando.</p>
        <a class="button" href="https://portfolio-valeria-silveira.netlify.app/">Ver Proyecto</a>`)
    $('#more-projects-button').html(`<div class="button" onclick="contraer()">Ver menos proyectos</div>`);
}

const ocultar = () => {
    $('#more-projects-1').css("display", "none");
    $('#more-projects-2').css("display", "none");
    $('#more-projects-button').html(`<a href="javascript:void(0);" class="button" onclick="expandir()">Ver más proyectos</a>`);
}