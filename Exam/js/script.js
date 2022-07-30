
const element = document.getElementById('map')
const panzoom = Panzoom(element, {
      // options here
});

// enable mouse wheel
const parent = element.parentElement
parent.addEventListener('wheel', panzoom.zoomWithWheel);