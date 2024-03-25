const container = document.querySelector(".container");
const content = document.querySelector(".content");

// Ширина одного изображения
const imgWidth = document.querySelector(".img-main").offsetWidth;

document.querySelector(".container").addEventListener("wheel", (e) => {
  const container = document.querySelector(".container");
  container.scrollLeft += e.deltaY; // Прокрутка горизонтально
});

content.prepend(content.lastElementChild);
container.scrollLeft += imgWidth;

// Добавляем событие прокрутки
container.addEventListener("scroll", () => {
  // Проверяем, достигли ли мы конца контейнера
  const scrollRight = container.scrollLeft + container.offsetWidth;
  const scrollLeft = container.scrollLeft;
  const contentWidth = content.offsetWidth;

  // Перемещаем последний элемент в начало при скролле влево
  if (scrollLeft <= 0) {
    content.prepend(content.lastElementChild);
    container.scrollLeft += imgWidth;
  }

  // Перемещаем первый элемент в конец при скролле вправо
  if (scrollRight >= contentWidth) {
    content.appendChild(content.firstElementChild);
    container.scrollLeft -= imgWidth;
  }
});

// Получаем все элементы списка
const navItems = document.querySelectorAll(".nav-item");
const darkenElement = document.querySelector(".darken");

// Для каждого элемента списка добавляем слушатель события наведения мыши
navItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    // Добавляем класс active при наведении на элемент
    item.classList.add("active");
    // Добавляем класс active к darkenElement
    darkenElement.classList.add("active");
  });

  item.addEventListener("mouseleave", () => {
    // Удаляем класс active при уводе мыши с элемента
    item.classList.remove("active");
    // Удаляем класс active у darkenElement
    darkenElement.classList.remove("active");
  });
});



