import gallerys from '../menu.json';
import galleryTemplate from '../templates/gallery.hbs';



const gallerysRef = document.querySelector('.menu');

gallerysRef.insertAdjacentHTML('beforeend', galleryTemplate(gallerys));
// const gallerysAllTemplate = gallerys.map(gallery => galleryTemplate(gallery)).join('');


// gallerysRef.innerHTML = gallerysAllTemplate;