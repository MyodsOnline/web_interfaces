
const element = document.getElementById('map')
const reset = document.getElementById('reset')
const AOPO = document.getElementById('AOPO')
const AOPO_layer = document.getElementById('Layer2')
const UPASK = document.getElementById('UPASK')
const UPASK_layer = document.getElementById('Layer3')
const YV = document.getElementById('YV')
const YV_layer = document.getElementById('Layer4')
const ETL = document.getElementById('ETL')
const ETL_layer = document.getElementById('Layer5')
const APC = document.getElementById('APC')
// const APC_layer = document.getElementById('Layer5')

const panzoom = Panzoom(element, {
    maxScale: 12,
    minScale: 1,
});


const parent = element.parentElement
parent.addEventListener('wheel', panzoom.zoomWithWheel);
reset.addEventListener('click', panzoom.reset)


AOPO.addEventListener('click', () => {
 AOPO_layer.classList.toggle('st2')
})
UPASK.addEventListener('click', () => {
  UPASK_layer.classList.toggle('st2')
})
YV.addEventListener('click', () => {
  YV_layer.classList.toggle('st2')
})
ETL.addEventListener('click', () => {
  ETL_layer.classList.toggle('st2')
})


const showName = (event) => {
	let el = event.target;
	console.log(el);
}



let aopo_tihlit = document.getElementById('infoBox')



APC.addEventListener('click', () => {
  aopo_tihlit.classList.toggle('hidden')
});