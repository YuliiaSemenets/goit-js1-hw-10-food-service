import gallerys from '../menu.json';
import galleryTemplate from '../templates/gallery.hbs';



const gallerysRef = document.querySelector('.menu');
const gallerysAllTemplate = gallerys.map(gallery => galleryTemplate(gallery)).join('');


gallerysRef.innerHTML = gallerysAllTemplate;