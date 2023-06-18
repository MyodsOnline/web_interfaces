let rounds = document.getElementsByTagName('circle');
let svg_area = document.getElementById('svg_area');

// let timeline_collection = document.getElementById('layer1').children

// timeline_points = []
// for (let point of timeline_collection) {
//     if (point.includes('circle')) {
//         timeline_points.push(point);
//     }    
// };
// timeline_points.forEach(p => console.log(p))

all_text = []
let text = document.getElementsByClassName('single_text')
for (let child of text) {
    all_text.push(child)
}


for (let item of rounds) {
   
    item.onclick = function(){
        tmp = item.getAttribute('inkscape:label');
        // console.log(tmp)
        let svg_img = document.getElementById('svg_img');

        text_tmp = `text_${tmp}`;
        drop_all();
        let text = document.getElementById(`${text_tmp}`);
        text.style.display = 'block';
        this.style.fill = 'black';

        svg_img.remove();
        svg_area.insertAdjacentHTML('beforeend', `<img src="static/asset/img_${tmp}.svg" width="100%" height="100%" id="svg_img">`);
    }


}

function drop_all() {
    all_text.forEach(element => {
        element.style.display = 'none';
    });
}

