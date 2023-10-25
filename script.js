// Página actual
let curPage = 0;
// Obtener páginas y botones
let pages = document.querySelectorAll('.form-page');
let btnPrev = document.querySelector('#btn-prev');
let btnNext = document.querySelector('#btn-next');

// Función para avanzar o retroceder, recibe 1 (avanzar) o -1 (retroceder)
function showPage(action) {
    // Página a mostrar según el valor recibido
    curPage += action;
    // Validar que la página a mostrar esté dentro de los límites
    if(curPage < 0) {
        curPage = 0;
    }
    if(curPage >= pages.length) {
        curPage = pages.length - 1;
    }
    // Recorrer para mostrar u ocultar
    pages.forEach((page, index) => {
        if(index == curPage) {
            // Es página actual, se debe mostrar
            page.classList.add('active');
        } else {
            // Las demás se van a ocultar
            page.classList.remove('active');
        }
    });
    // Habilitar o deshabilitar botones
    btnPrev.disabled = (curPage == 0);
    btnNext.disabled = (curPage == pages.length - 1);
};
// Asignar evento a botones para avanzar y retroceder
btnPrev.addEventListener('click', e => showPage(-1));
btnNext.addEventListener('click', e => showPage(1));