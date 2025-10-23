/*
  Este script crea un efecto de "fade-in" (aparecer suavemente)
  para las secciones de la página a medida que el usuario baja el scroll.
*/

// Espera a que todo el contenido de la página se cargue
document.addEventListener("DOMContentLoaded", function() {

    // Seleccionamos todos los elementos que tienen la clase ".hidden"
    // (los que queremos animar)
    const sectionsToAnimate = document.querySelectorAll('.hidden');

    // Opciones para el "Intersection Observer"
    // threshold: 0.15 significa que la animación se disparará
    // cuando el 15% del elemento esté visible en la pantalla.
    const options = {
        root: null, // Observa en relación al viewport (la pantalla)
        threshold: 0.15,
        rootMargin: "0px"
    };

    // Creamos un "Observer" (observador)
    const observer = new IntersectionObserver(function(entries, observer) {
        
        // Revisamos cada elemento que estamos observando
        entries.forEach(entry => {
            // si "isIntersecting" es verdadero, el elemento está en la pantalla
            if (entry.isIntersecting) {
                // Le quitamos la clase "hidden" y le ponemos la clase "show"
                entry.target.classList.remove('hidden');
                entry.target.classList.add('show');
                
                // Dejamos de observar este elemento, ya que la animación ya se hizo
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Le decimos al observador que vigile cada una de nuestras secciones
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

});