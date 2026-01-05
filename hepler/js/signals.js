// Данные сигналов (в реальном приложении будут загружаться с сервера)
const signalsData = [
    {
        id: 1,
        source: 'I/O',
        time: '14:11:09 04.10.2025',
        object: 'ПС 750 кВ Белозерская В 722',
        message: 'Вкл. Оборудование. "Включено"',
        type: 'info',
        acknowledged: false,
        group: 'main'
    },
    {
        id: 2,
        source: 'MTH',
        time: '14:11:09 04.10.2025',
        object: 'ВЛ 330 кВ Чудово – Окуловская',
        message: 'Превышение ДДТН, Кпд = 101%',
        type: 'danger',
        acknowledged: false,
        group: 'main'
    },
    {
        id: 3,
        source: 'МУН',
        time: '14:11:09 04.10.2025',
        object: 'ПС 220 кВ Заовражье',
        message: 'Превышение ДДТН, Кпд = 106%',
        type: 'danger',
        acknowledged: false,
        group: 'main'
    },
    {
        id: 4,
        source: 'КПОС',
        time: '14:11:09 04.10.2025',
        object: 'КС Невское',
        message: 'Нарушение графика напряжения на {0}: Uyсредн = {1}, график {2} - {3}',
        type: 'warning',
        acknowledged: false,
        group: 'main'
    },
    {
        id: 5,
        source: 'СКАМ',
        time: '14:11:09 04.10.2025',
        object: 'КС «Невское»',
        message: 'КС «{0}», фактический переток превысил МДП+НК',
        type: 'info',
        acknowledged: true,
        group: 'main'
    },
    {
        id: 6,
        source: 'ЖДИ',
        time: '14:11:09 04.10.2025',
        object: 'ОДУ Северо-Запада',
        message: 'В Журнале ДИ зарегистрирована запись № {0} (изменена запись № {1})',
        type: 'info',
        acknowledged: false,
        group: 'zhdy'
    },
    {
        id: 7,
        source: 'ЖДИ',
        time: '14:11:09 04.10.2025',
        object: 'КС «Невское»',
        message: 'КС «Невское», фактический переток превысил МДП+НК',
        type: 'info',
        acknowledged: true,
        group: 'zhdy'
    }
];

// Состояние приложения
let currentFilter = 'all';
let searchQuery = '';
let pinnedGroups = new Set();

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    initializeSearch();
    initializeGroups();
    loadSignals();
});

// Инициализация фильтров
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем активный класс со всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс к нажатой кнопке
            this.classList.add('active');
            
            // Обновляем фильтр
            currentFilter = this.dataset.filter;
            loadSignals();
        });
    });
}

// Инициализация поиска
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const clearButton = document.getElementById('clear-search');
    
    searchInput.addEventListener('input', function() {
        searchQuery = this.value.toLowerCase();
        loadSignals();
    });
    
    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        searchQuery = '';
        loadSignals();
    });
}

// Инициализация групп
function initializeGroups() {
    const groupHeaders = document.querySelectorAll('.group-header');
    
    groupHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const group = this.dataset.group;
            const content = document.getElementById(group + '-content');
            const icon = this.querySelector('.collapse-icon');
            
            if (content.classList.contains('collapsed')) {
                content.classList.remove('collapsed');
                icon.textContent = '▼';
            } else {
                content.classList.add('collapsed');
                icon.textContent = '▶';
            }
        });
        
        // Обработка закрепления групп
        const pinIcon = header.querySelector('.pin-icon');
        pinIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            const group = header.dataset.group;
            const section = header.closest('.group-section');
            
            if (pinnedGroups.has(group)) {
                pinnedGroups.delete(group);
                section.classList.remove('pinned');
                pinIcon.textContent = '📌';
            } else {
                pinnedGroups.add(group);
                section.classList.add('pinned');
                pinIcon.textContent = '📍';
            }
        });
    });
}

// Загрузка и отображение сигналов
function loadSignals() {
    const mainTbody = document.getElementById('signals-tbody');
    const zhdyTbody = document.getElementById('zhdy-tbody');
    const skamTbody = document.getElementById('skam-tbody');
    
    // Очищаем таблицы
    mainTbody.innerHTML = '';
    zhdyTbody.innerHTML = '';
    skamTbody.innerHTML = '';
    
    // Фильтруем данные
    const filteredData = signalsData.filter(signal => {
        const matchesFilter = currentFilter === 'all' || 
                             signal.source.toLowerCase().includes(currentFilter.toLowerCase()) ||
                             (currentFilter === 'skam' && signal.group === 'skam') ||
                             (currentFilter === 'zhdy' && signal.group === 'zhdy');
        
        const matchesSearch = searchQuery === '' || 
                             signal.object.toLowerCase().includes(searchQuery) ||
                             signal.message.toLowerCase().includes(searchQuery) ||
                             signal.source.toLowerCase().includes(searchQuery);
        
        return matchesFilter && matchesSearch;
    });
    
    // Разделяем данные по группам
    const mainSignals = filteredData.filter(signal => signal.group === 'main');
    const zhdySignals = filteredData.filter(signal => signal.group === 'zhdy');
    const skamSignals = filteredData.filter(signal => signal.group === 'skam');
    
    // Отображаем основные сигналы
    mainSignals.forEach(signal => {
        const row = createSignalRow(signal);
        mainTbody.appendChild(row);
    });
    
    // Отображаем сигналы ЖДИ
    zhdySignals.forEach(signal => {
        const row = createSignalRow(signal);
        zhdyTbody.appendChild(row);
    });
    
    // Отображаем сигналы СКАМ
    skamSignals.forEach(signal => {
        const row = createSignalRow(signal);
        skamTbody.appendChild(row);
    });
    
    // Показываем/скрываем группы в зависимости от наличия данных
    updateGroupVisibility('zhdy', zhdySignals.length > 0);
    updateGroupVisibility('skam', skamSignals.length > 0);
}

// Создание строки сигнала
function createSignalRow(signal) {
    const row = document.createElement('tr');
    
    // Добавляем класс для стилизации в зависимости от типа сообщения
    if (signal.type === 'danger') {
        row.classList.add('message-danger');
    } else if (signal.type === 'warning') {
        row.classList.add('message-warning');
    } else if (signal.type === 'info') {
        row.classList.add('message-info');
    }
    
    row.innerHTML = `
        <td>
            <span class="status-icon status-${signal.acknowledged ? 'active' : 'warning'}"></span>
            ${signal.source}
        </td>
        <td>${signal.time}</td>
        <td>${signal.object}</td>
        <td>${signal.message}</td>
        <td>
            <button class="action-btn view-btn" onclick="viewSignal(${signal.id})">
                Просмотреть
            </button>
        </td>
        <td>
            <button class="action-btn ack-btn ${signal.acknowledged ? 'disabled' : ''}" 
                    onclick="acknowledgeSignal(${signal.id})" 
                    ${signal.acknowledged ? 'disabled' : ''}>
                ${signal.acknowledged ? 'Квитировано' : 'Квитировать'}
            </button>
        </td>
        <td>
            <button class="action-btn delete-btn" onclick="deleteSignal(${signal.id})">
                ×
            </button>
        </td>
    `;
    
    return row;
}

// Обновление видимости групп
function updateGroupVisibility(groupName, hasData) {
    const section = document.getElementById(groupName + '-section');
    if (section) {
        section.style.display = hasData ? 'block' : 'none';
    }
}

// Функции действий с сигналами
function viewSignal(signalId) {
    const signal = signalsData.find(s => s.id === signalId);
    if (signal) {
        alert(`Просмотр сигнала:\nИсточник: ${signal.source}\nВремя: ${signal.time}\nОбъект: ${signal.object}\nСообщение: ${signal.message}`);
    }
}

function acknowledgeSignal(signalId) {
    const signal = signalsData.find(s => s.id === signalId);
    if (signal && !signal.acknowledged) {
        signal.acknowledged = true;
        loadSignals(); // Перезагружаем для обновления отображения
        console.log(`Сигнал ${signalId} квитирован`);
    }
}

function deleteSignal(signalId) {
    if (confirm('Вы уверены, что хотите удалить этот сигнал?')) {
        const index = signalsData.findIndex(s => s.id === signalId);
        if (index !== -1) {
            signalsData.splice(index, 1);
            loadSignals(); // Перезагружаем для обновления отображения
            console.log(`Сигнал ${signalId} удален`);
        }
    }
}

// Дополнительные функции для работы с группами
function toggleGroupCollapse(groupName) {
    const content = document.getElementById(groupName + '-content');
    const icon = document.querySelector(`[data-group="${groupName}"] .collapse-icon`);
    
    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        icon.textContent = '▼';
    } else {
        content.classList.add('collapsed');
        icon.textContent = '▶';
    }
}

function toggleGroupPin(groupName) {
    const section = document.getElementById(groupName + '-section');
    const pinIcon = section.querySelector('.pin-icon');
    
    if (pinnedGroups.has(groupName)) {
        pinnedGroups.delete(groupName);
        section.classList.remove('pinned');
        pinIcon.textContent = '📌';
    } else {
        pinnedGroups.add(groupName);
        section.classList.add('pinned');
        pinIcon.textContent = '📍';
    }
}

// Функция для добавления нового сигнала (для демонстрации)
function addNewSignal() {
    const newSignal = {
        id: Date.now(),
        source: 'Новый',
        time: new Date().toLocaleString('ru-RU'),
        object: 'Тестовый объект',
        message: 'Тестовое сообщение',
        type: 'info',
        acknowledged: false,
        group: 'main'
    };
    
    signalsData.unshift(newSignal);
    loadSignals();
}

// Экспорт функций для глобального доступа
window.viewSignal = viewSignal;
window.acknowledgeSignal = acknowledgeSignal;
window.deleteSignal = deleteSignal;
window.addNewSignal = addNewSignal;