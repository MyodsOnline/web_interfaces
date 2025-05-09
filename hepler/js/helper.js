// Счетчики для добавления полей
let appCounter = 3;
let objCounter = 3;

// Добавление новых заявок
document.getElementById('add-app-more').addEventListener('click', function() {
    if (appCounter <= 10) {
        addMoreApp();
    }
});

function addMoreApp() {
    const container = document.getElementById('apps-container');
    const row = document.createElement('div');
    row.className = 'app-item';    
    row.innerHTML = `<input type="text" id="app_${appCounter}" class="input-field" placeholder="Заявка №${appCounter}">`;    
    container.appendChild(row);
    
    document.getElementById(`app_${appCounter}`).addEventListener('input', updateRecords);
    
    appCounter++;
}

// Добавление новых объектов
document.getElementById('add-obj-more').addEventListener('click', function() {
    if (objCounter <= 10) {
        addMoreObj();
    }
});

function addMoreObj() {
    const container = document.getElementById('object-container');
    const row = document.createElement('div');
    row.className = 'obj-item';    
    row.innerHTML = `<input type="text" id="obj_${objCounter}" class="input-field white-input" placeholder="Объект №${objCounter}">`;    
    container.appendChild(row);
    
    document.getElementById(`obj_${objCounter}`).addEventListener('input', updateRecords);
    
    objCounter++;
}

// Формирование записей для журнала и пометки
function updateRecords() {
    // Получаем значения всех полей
    const item = document.getElementById('item').value;
    const condition = document.getElementById('condition').value;
    const timeEnd = document.getElementById('time_end').value;
    const ag = document.getElementById('ag').value;
    const doc = document.getElementById('document').value;
    const actionStart = document.getElementById('action_start').value;
    const actionEnd = document.getElementById('action_end').value;
    const comment = document.getElementById('comment').value;
    
    // Собираем все заявки
    const apps = [];
    for (let i = 1; i < appCounter; i++) {
        const appElem = document.getElementById(`app_${i}`);
        if (appElem && appElem.value) {
            apps.push(appElem.value);
        }
    }
    
    // Собираем все объекты
    const objs = [];
    for (let i = 1; i < objCounter; i++) {
        const objElem = document.getElementById(`obj_${i}`);
        if (objElem && objElem.value) {
            objs.push(objElem.value);
        }
    }
    
    // Определяем состояние в зависимости от выбранного условия
    let conditionText = '';
    if (condition === 'op') {
        conditionText = 'оперативно';
    } else if (condition === 'lk') {
        conditionText = 'для технического обслуживания';
    }
    
    // Формируем запись для журнала по примеру
    let journalRecord = '';
    if (doc) {
        journalRecord += `По ТПП №${doc} `;
    }
    if (item) {
        journalRecord += `${item} выведен `;
    }
    if (conditionText) {
        journalRecord += `${conditionText} `;
    }
    
    // Добавляем объекты
    if (objs.length > 0) {
        journalRecord += 'на ';
        for (let i = 0; i < objs.length; i++) {
            if (i > 0) {
                if (i === objs.length - 1) {
                    journalRecord += ' и ';
                } else {
                    journalRecord += ', ';
                }
            }
            journalRecord += `${objs[i]}`;
        }
        journalRecord += '. ';
    }
    
    // Добавляем заявки
    if (apps.length > 0) {
        journalRecord += '\nОткрыты заявки № ';
        journalRecord += apps.join(', ');
        
        if (timeEnd) {
            journalRecord += ` до ${timeEnd}`;
            if (ag) {
                journalRecord += ` с АГ – ${ag} ч.`;
            }
        }
        journalRecord += '\n';
    }
    
    // Добавляем время переключений
    if (actionStart) {
        journalRecord += `Время начала переключений – ${actionStart}\n`;
    }
    
    if (actionEnd) {
        journalRecord += `Время окончания переключений – ${actionEnd}\n`;
    }
    
    // Добавляем комментарий
    if (comment) {
        journalRecord += `${comment}`;
    }
    
    // Формируем запись для диспетчерской пометки по примеру
    let dispatchRecord = '';
    if (apps.length > 0) {
        dispatchRecord += apps.join(', ');
        dispatchRecord += ' ';
        if (conditionText) {
            dispatchRecord += `${conditionText} `;
        }
        dispatchRecord += 'выведен ';
    }
    
    if (item) {
        dispatchRecord += `${item} `;
    }
    
    if (timeEnd) {
        dispatchRecord += `до ${timeEnd}`;
        if (ag) {
            dispatchRecord += ` с АГ – ${ag} ч.`;
        }
        dispatchRecord += '\n';
    }
    
    if (comment) {
        dispatchRecord += `${comment}`;
    }
    
    // Обновляем записи на странице
    document.getElementById('journal-record').innerHTML = journalRecord;
    document.getElementById('dispatch-record').innerHTML = dispatchRecord;
}

// Обработчики событий для полей ввода
const inputs = document.querySelectorAll('input, select');
inputs.forEach(input => {
    input.addEventListener('input', updateRecords);
});

// Добавляем обработчики событий для сохранения изменений в полях
document.getElementById('journal-record').addEventListener('input', function() {
});

document.getElementById('dispatch-record').addEventListener('input', function() {
});

// Копирование в буфер обмена
document.getElementById('copy-journal').addEventListener('click', function() {
    const btn = this;
    const text = document.getElementById('journal-record').innerText;
    navigator.clipboard.writeText(text)
        .then(() => {
            const originalText = btn.textContent;
            btn.textContent = 'Готово!';
            setTimeout(() => {
                btn.textContent = originalText;
            }, 5000);
        })
        .catch(err => console.error('Ошибка копирования: ', err));
});

document.getElementById('copy-dispatch').addEventListener('click', function() {
    const btn = this;
    const text = document.getElementById('dispatch-record').innerText;
    navigator.clipboard.writeText(text)
        .then(() => {
            const originalText = btn.textContent;
            btn.textContent = 'Готово!';
            setTimeout(() => {
                btn.textContent = originalText;
            }, 5000);
        })
        .catch(err => console.error('Ошибка копирования: ', err));
});

// Функция инициализации
window.onload = function() {
    updateRecords();
};
