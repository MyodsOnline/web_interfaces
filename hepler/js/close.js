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

// Формирование записей для журнала закрывателя
function updateRecords() {
    // Получаем значения всех полей
    const item = document.getElementById('item').value;
    const conditionStart = document.getElementById('condition_start').value;
    const condition = document.getElementById('condition').value;
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
    
    // Определяем состояния в зависимости от выбранных условий
    let conditionStartText = '';
    if (conditionStart === 'op') {
        conditionStartText = 'оперативно';
    } else if (conditionStart === 'lk') {
        conditionStartText = 'для технического обслуживания';
    }
    
    let conditionText = '';
    if (condition === 'work') {
        conditionText = 'в работу';
    } else if (condition === 'op') {
        conditionText = 'оперативно';
    } else if (condition === 'lk') {
        conditionText = 'для технического обслуживания';
    }
    
    // Формируем запись для журнала закрывателя
    let journalRecord = '';
    if (doc) {
        journalRecord += `По ТПП №${doc} `;
    }
    if (item) {
        journalRecord += `${item} `;
    }
    
    // Формируем текст перехода между состояниями
    if (conditionStartText && conditionText) {
        if (condition === 'work') {
            // Переход в работу
            journalRecord += `из состояния выведен ${conditionStartText} введен в работу`;
        } else if (conditionStart === 'op' && condition === 'lk') {
            // Из оперативно в техническое обслуживание
            journalRecord += `из состояния выведен оперативно переведен в состояние выведен для технического обслуживания`;
        } else if (conditionStart === 'lk' && condition === 'op') {
            // Из технического обслуживания в оперативно
            journalRecord += `из состояния выведен технического обслуживания переведен в состояние выведен оперативно`;
        } else {
            // Другие переходы
            journalRecord += `из состояния выведен ${conditionStartText} введен ${conditionText}`;
        }
    }
    
    // Добавляем объекты
    if (objs.length > 0) {
        journalRecord += ' на ';
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
        journalRecord += '.';
    }
    
    // Добавляем заявки
    if (apps.length > 0) {
        journalRecord += '\nЗакрыты заявки № ';
        journalRecord += apps.join(', ');
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
    
    // Обновляем запись на странице
    document.getElementById('journal-close-record').innerHTML = journalRecord;
}

// Обработчики событий для полей ввода
const inputs = document.querySelectorAll('input, select');
inputs.forEach(input => {
    input.addEventListener('input', updateRecords);
});

// Добавляем обработчики событий для сохранения изменений в полях
document.getElementById('journal-close-record').addEventListener('input', function() {
});

// Копирование в буфер обмена
document.getElementById('copy-close').addEventListener('click', function() {
    const btn = this;
    const text = document.getElementById('journal-close-record').innerText;
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

// Копирование в буфер обмена
document.getElementById('copy-close').addEventListener('click', function() {
    const btn = this;
    const text = document.getElementById('journal-close-record').innerText;
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
