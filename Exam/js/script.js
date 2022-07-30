
const element = document.getElementById('map')
const reset = document.getElementById('reset')
const AOPO = document.getElementById('AOPO')
const AOPO_layer = document.getElementById('Layer2')
const UPASK = document.getElementById('UPASK')
const UPASK_layer = document.getElementById('Layer3')

const panzoom = Panzoom(element, {
    maxScale: 10,
    minScale: 1,
});


const parent = element.parentElement
parent.addEventListener('wheel', panzoom.zoomWithWheel);
reset.addEventListener('click', panzoom.reset)
AOPO.addEventListener('click', () => {
 AOPO_layer.classList.toggle('hidden')
})
UPASK.addEventListener('click', () => {
  UPASK_layer.classList.toggle('hidden')
 })