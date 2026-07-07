document.addEventListener('DOMContentLoaded', () => {
  const mapContainer = document.querySelector('.contacts__map-container');
  const imageContainer = document.querySelector('.contacts__image-container');
  // const isAvailableJS = document.documentElement.classList.contains('page--no-js');

  if (!mapContainer) {
    return;
  }

  // if (isAvailableJS) {
  //   return;
  // }

  const ymaps = window.ymaps;

  ymaps.ready(() => {
    const yaMapContainer = document.createElement('div');
    yaMapContainer.classList.add('contacts__ya-map');
    yaMapContainer.id = 'map';

    imageContainer.replaceWith(yaMapContainer);

    const myMap = new ymaps.Map('map', {
        center: [59.938679, 30.3230044],
        zoom: 14,
        controls: []
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
        iconLayout: 'default#image',
        iconImageHref: '../icons/stack.svg#icon-pin',
        iconImageSize: [57, 53],
        iconImageOffset: [-26, -42]
      });

    myMap.geoObjects.add(myPlacemark);
  });

});
