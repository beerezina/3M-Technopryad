// const colorPicker1 = document.getElementById("colorPicker1");
// const colorPicker2 = document.getElementById("colorPicker2");
// const path1 = document.getElementById("path1");
// const path2 = document.getElementById("path2");

// colorPicker1.addEventListener("input", function () {
//   const color = colorPicker1.value;
//   path1.setAttribute("fill", color);
// });

// colorPicker2.addEventListener("input", function () {
//   const color = colorPicker2.value;
//   path2.setAttribute("fill", color);
// });

// const images = [
//   "image1.png",
//   "image2.png",
//   "image3.png",
//   "image4.png",
//   "image5.png",
// ];

// let currentIndex = 0;
// const imageElement = document.getElementById("imageElement");

// function showImage(index) {
//   imageElement.src = images[index];
// }

// document.getElementById("prevButton").addEventListener("click", function () {
//   currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
//   showImage(currentIndex);
// });

// document.getElementById("nextButton").addEventListener("click", function () {
//   currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
//   showImage(currentIndex);
// });

// // Показать первое изображение при загрузке страницы
// showImage(currentIndex);
// const images = ["image1.png", "image2.png", "image3.png", "image4.png"];

// let currentIndex = 0;
// const imageElement = document.getElementById("imageElement");

// function showImage(index) {
//   imageElement.src = images[index];
// }

// document.getElementById("leftDiv").addEventListener("click", function () {
//   currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
//   showImage(currentIndex);
// });

// document.getElementById("rightDiv").addEventListener("click", function () {
//   currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
//   showImage(currentIndex);
// });

// // Показать первое изображение при загрузке страницы
// showImage(currentIndex);
const images = [
  "./images/image1.svg",
  "./images/image2.svg",
  "./images/image3.svg",
  "./images/image4.svg",
  "./images/image5.svg",
];

let currentIndex = 0;
const imageElement = document.getElementById("imageElement");

document.getElementById("prevButton").addEventListener("click", function () {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  imageElement.src = images[currentIndex];
});

document.getElementById("nextButton").addEventListener("click", function () {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  imageElement.src = images[currentIndex];
});

// звезды

// Получаем все SVG элементы
const stars = document.querySelectorAll('svg[class^="star-"]');

// Добавляем слушателя события click к каждому SVG элементу
stars.forEach((star) => {
  star.addEventListener("click", function () {
    // Снимаем класс 'paused' с текущего SVG элемента, чтобы возобновить анимацию или добавляем класс, чтобы остановить анимацию
    this.classList.toggle("paused");

    // Меняем цвет для соответствующего h-star элемента
    const hStar = this.querySelector(".h-" + this.classList[0]); // Находим соответствующий h-star
    hStar.style.fill = hStar.style.fill === "white" ? "#4200ff" : "white"; // Меняем цвет
  });
});
// f
let currentImageIndex = 0; // индекс текущего изображения
const svgImages = document.querySelectorAll("#svg1, #svg2"); // получаем все элементы SVG с id #svg1 и #svg2

function showPrevSVG() {
  svgImages[currentImageIndex].style.display = "none"; // скрываем текущее изображение

  currentImageIndex =
    (currentImageIndex - 1 + svgImages.length) % svgImages.length; // вычисляем индекс предыдущего изображения

  svgImages[currentImageIndex].style.display = "block"; // показываем предыдущее изображение
}

function showNextSVG() {
  svgImages[currentImageIndex].style.display = "none"; // скрываем текущее изображение

  currentImageIndex = (currentImageIndex + 1) % svgImages.length; // вычисляем индекс следующего изображения

  svgImages[currentImageIndex].style.display = "block"; // показываем следующее изображение
}
