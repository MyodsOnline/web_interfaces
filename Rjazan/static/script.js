let rounds = document.getElementsByTagName('circle');
let svg_area = document.getElementById('svg_area');

let timeline_collection = document.getElementsByTagName("circle");

let timeline_points = []

for (let i = 0; i < timeline_collection.length; i++) {
    const label = timeline_collection[i].getAttribute("inkscape:label");
    if (label !== null) {
        timeline_points.push(timeline_collection[i]);
    }
  }
console.log(timeline_points)


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
        
        setFillToBlack(tmp)
    }


}

function drop_all() {
    all_text.forEach(element => {
        element.style.display = 'none';
    });
}

function setFillToBlack(timeline_points, tmp) {
    for (var i = 0; i < timeline_points.length; i++) {
      if (timeline_points[i] < tmp) {
        timeline_points[i].style.fill = 'black';
      }
    }
  }
  