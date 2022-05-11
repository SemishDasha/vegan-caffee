;(function() {
    if (typeof ymaps === 'undefined') {
      return;
    }
  
    ymaps.ready(function () {
      var myMap = new ymaps.Map('ymap', {
              center: [53.700367,23.838961],
              zoom: 16
          }, {
              searchControlProvider: 'yandex#search'
          }),
  
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              balloonContent: 'г. Гродно, ул.Дубко 20'
          }, {
                preset: 'islands#redIcon'
          });
  
      myMap.geoObjects.add(myPlacemark);
  
      myMap.behaviors.disable('scrollZoom');
  });
  
  
  })();