
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


let APC_svg = [
  document.getElementById('_x31_6'),
]

const showName = (event) => {
	let el = event.target;
	console.log(el);
}



let info_block = document.getElementById('infoBox')
let info_block_ars = document.getElementById('tixlit1')

let aopo = document.getElementById('t10.1')
let info_block_aopo = document.getElementById('tixlit2')


APC.addEventListener('click', () => {
  info_block.classList.toggle('hidden');
  info_block_ars.classList.toggle('hidden');
  ETL_layer.classList.toggle('st2');
});

aopo.addEventListener('click', () => {
  info_block.classList.toggle('hidden');
  info_block_aopo.classList.toggle('hidden');
});