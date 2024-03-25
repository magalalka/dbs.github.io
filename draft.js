/* const container = document.querySelector(".container");
const content = document.querySelector(".content");

// Ширина одного изображения
const imgWidth = document.querySelector(".img-main").offsetWidth;

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

  // Перемещаем последний элемент в начало при скролле влево
  if (scrollLeft <= 0) {
    cards.prepend(cards.lastElementChild);
    container.scrollLeft += cardWidth;
  }
});

// Центрируем изображения при загрузке страницы
const centerContent = () => {
  const scrollWidth = contentWidth - container.offsetWidth;
  container.scrollLeft = scrollWidth / 2;
};

window.addEventListener("load", centerContent); */



const container = document.querySelector(".container");
const content = document.querySelector(".content");

// Ширина одного изображения
const imgWidth = document.querySelector(".img-main").offsetWidth;

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

  // Перемещаем последний элемент в начало при скролле влево
  if (scrollLeft <= 0) {
    cards.prepend(cards.lastElementChild);
    container.scrollLeft += cardWidth;
  }
});

// Центрируем изображения при загрузке страницы
const centerContent = () => {
  const scrollWidth = contentWidth - container.offsetWidth;
  container.scrollLeft = scrollWidth / 2;
};

window.addEventListener("load", centerContent);
