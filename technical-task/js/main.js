const textField = document.getElementById('text');
const hiddenInput = document.getElementById('input_status');

textField.addEventListener('input', function() {
    hiddenInput.value = textField.value;
});

textField.addEventListener('input', function() {
    textField.value = textField.value.replace(/\D/g, '');
});


// Функция для добавления обработчика клика к элементам path и rect
function addClickToPathAndRect() {
    var paths = document.querySelectorAll('path');
    var rects = document.querySelectorAll('rect');
  
    [...paths, ...rects].forEach(function(element) {
      element.addEventListener('click', function(event) {
        console.log(this.id, this.height);
      });
    });
  }
  
document.addEventListener('DOMContentLoaded', addClickToPathAndRect);
  