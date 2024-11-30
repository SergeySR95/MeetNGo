// Получаем элементы модальных окон
var loginModal = document.getElementById('login-modal');
var registerModal = document.getElementById('register-modal');

// Получаем кнопки, которые открывают модальные окна
var loginBtn = document.getElementById('login-btn');
var registerBtn = document.getElementById('register-btn');

// Получаем элементы <span>, которые закрывают модальные окна
var closeLogin = document.getElementById('close-login');
var closeRegister = document.getElementById('close-register');

// Когда пользователь нажимает на кнопку "Вход", открываем модальное окно входа
loginBtn.onclick = function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    loginModal.style.display = 'block';
}

// Когда пользователь нажимает на кнопку "Регистрация", открываем модальное окно регистрации
registerBtn.onclick = function(event) {
    event.preventDefault();
    registerModal.style.display = 'block';
}

// Когда пользователь нажимает на <span> (x), закрываем соответствующее модальное окно
closeLogin.onclick = function() {
    loginModal.style.display = 'none';
}
closeRegister.onclick = function() {
    registerModal.style.display = 'none';
}

// Когда пользователь нажимает в любом месте за пределами модального окна, закрываем его
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target == registerModal) {
        registerModal.style.display = 'none';
    }
}

// Получаем элементы модального окна редактирования профиля
var editProfileModal = document.getElementById('edit-profile-modal');
var editProfileBtn = document.getElementById('edit-profile-btn');
var closeEditProfile = document.getElementById('close-edit-profile');

// Открываем модальное окно при нажатии на кнопку "Редактировать профиль"
editProfileBtn.onclick = function(event) {
    event.preventDefault();
    editProfileModal.style.display = 'block';
}

// Закрываем модальное окно при нажатии на "×"
closeEditProfile.onclick = function() {
    editProfileModal.style.display = 'none';
}

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
    if (event.target == editProfileModal) {
        editProfileModal.style.display = 'none';
    }
}

// Получаем форму
const tripForm = document.getElementById('trip-form');

// Обработчик события отправки формы
tripForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем стандартное поведение

    // Проверяем введённые даты
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    if (new Date(startDate) > new Date(endDate)) {
        alert('Дата окончания не может быть раньше даты начала.');
        return;
    }

    // Если всё в порядке, отправляем данные на сервер
    alert('Путешествие успешно создано!');
    tripForm.reset(); // Сбрасываем форму после успешной отправки
});

// Получаем элементы фильтров
const filterDates = document.getElementById('filter-dates');
const filterType = document.getElementById('filter-type');
const filterBudget = document.getElementById('filter-budget');
const applyFilters = document.getElementById('apply-filters');

// Обработчик применения фильтров
applyFilters.addEventListener('click', function() {
    const selectedDate = filterDates.value;
    const selectedType = filterType.value;
    const maxBudget = parseInt(filterBudget.value);

    // Пример фильтрации (замените на реальный функционал)
    alert(`Фильтры применены:\nДата: ${selectedDate || 'Не выбрано'}\nТип: ${selectedType || 'Все'}\nБюджет: ${maxBudget || 'Не указан'}`);
});

// Получаем кнопку "Присоединиться к путешествию"
const joinTripBtn = document.getElementById('join-trip-btn');

// Обработчик нажатия на кнопку
joinTripBtn.addEventListener('click', function() {
    // Проверяем, авторизован ли пользователь
    const isLoggedIn = true; // Это значение должно определяться вашей логикой

    if (isLoggedIn) {
        // Отправляем запрос на сервер для присоединения к путешествию
        alert('Вы успешно присоединились к путешествию!');
        // Обновите список участников или выполните другие действия
    } else {
        // Предлагаем пользователю войти или зарегистрироваться
        alert('Пожалуйста, войдите или зарегистрируйтесь, чтобы присоединиться к путешествию.');
        // Открываем модальное окно входа или перенаправляем на страницу входа
    }
});

// Пример данных (замените на API или серверные данные)
const trips = [
    {
        name: "Путешествие в Париж",
        description: "Культурное путешествие с посещением основных достопримечательностей.",
        dates: "10.12.2023 - 20.12.2023",
        budget: 1000,
        type: "cultural",
        image: "images/trip1.jpg"
    },
    {
        name: "Экологическое путешествие на Бали",
        description: "Познакомьтесь с природой и культурой острова в экоформате.",
        dates: "05.01.2024 - 15.01.2024",
        budget: 800,
        type: "eco",
        image: "images/trip2.jpg"
    },
    {
        name: "Приключение в Альпах",
        description: "Горные походы и незабываемые виды.",
        dates: "20.02.2024 - 28.02.2024",
        budget: 1200,
        type: "adventure",
        image: "images/trip3.jpg"
    },
    // Добавьте больше данных по необходимости
];

// Элементы поиска и фильтров
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterDates = document.getElementById('filter-dates');
const filterType = document.getElementById('filter-type');
const filterBudget = document.getElementById('filter-budget');
const applyFilters = document.getElementById('apply-filters');
const resultsContainer = document.getElementById('results-container');

// Функция отображения результатов
function displayResults(filteredTrips) {
    resultsContainer.innerHTML = ""; // Очищаем контейнер результатов

    if (filteredTrips.length === 0) {
        resultsContainer.innerHTML = "<p>Путешествия не найдены.</p>";
        return;
    }

    filteredTrips.forEach(trip => {
        const tripHTML = `
            <div class="trip-item">
                <img src="${trip.image}" alt="${trip.name}">
                <div class="trip-info">
                    <h3>${trip.name}</h3>
                    <p>${trip.description}</p>
                    <p><strong>Даты:</strong> ${trip.dates}</p>
                    <p><strong>Бюджет:</strong> $${trip.budget}</p>
                    <a href="trip-detail.html" class="btn">Подробнее</a>
                </div>
            </div>
        `;
        resultsContainer.insertAdjacentHTML('beforeend', tripHTML);
    });
}

// Функция поиска
searchBtn.addEventListener('click', function() {
    const query = searchInput.value.toLowerCase();

    const filteredTrips = trips.filter(trip => 
        trip.name.toLowerCase().includes(query) ||
        trip.description.toLowerCase().includes(query)
    );

    displayResults(filteredTrips);
});

// Функция применения фильтров
applyFilters.addEventListener('click', function() {
    const selectedDate = filterDates.value;
    const selectedType = filterType.value;
    const maxBudget = parseInt(filterBudget.value);

    const filteredTrips = trips.filter(trip => {
        const matchesType = selectedType ? trip.type === selectedType : true;
        const matchesBudget = maxBudget ? trip.budget <= maxBudget : true;
        const matchesDate = selectedDate ? trip.dates.includes(selectedDate) : true;

        return matchesType && matchesBudget && matchesDate;
    });

    displayResults(filteredTrips);
});

// Изначально отображаем все путешествия
displayResults(trips);
