// Zmieniający się baner, który można zmieniąc również za pomocą strzałek
// alert('to działa!')
const slideList = [
  {
    img: "images/1.jpg",
    text: "Styczeń"
  },
  {
    img: "images/2.jpg",
    text: "Luty",
    color: `#000`
  },
  {
    img: "images/3.jpg",
    text: "Marzec"
  },
  {
    img: "images/4.jpg",
    text: "Kwiecień"
  },
  {
    img: "images/5.jpg",
    text: "Maj"
  },
  {
    img: "images/6.jpg",
    text: "Czerwiec"
  },
  {
    img: "images/7.jpg",
    text: "Lipiec"
  },
  {
    img: "images/8.jpg",
    text: "Sierpień"
  },
  {
    img: "images/9.jpg",
    text: "Wrzesień"
  },
  {
    img: "images/10.jpg",
    text: "Październik"
  },
  {
    img: "images/11.jpg",
    text: "Listopad"
  },
  {
    img: "images/12.jpg",
    text: "Grudzień"
  }
];

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");

//Interfejs
const time = 2000;
let active = 0;
const dots = [...document.querySelectorAll(".dots span")]; //nodeList -> zamiana na tablice m.in findIndex
//Implementacja
const changeDot = () => {
  // console.log('zmiana kropki')
  const activeDot = dots.findIndex(dot => dot.classList.contains("active")); // zwraca numer indexu tego czego szukamy
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};
const changeSlide = () => {
  active++;
  if (active == slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
};
let indexInterval = setInterval(changeSlide, time);

// Przełączanie obrazków
const keyChangeSlide = e => {
  //console.log(e.keyCode);
  if (e.keyCode == 37 || e.keyCode == 39) {
    clearInterval(indexInterval); //polecenie to czyści przeskok samoczynny w momencie wciskania klawiszy
    e.keyCode == 37 ? active-- : active++;
    // console.log(active);
    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
    // console.log(active);
    indexInterval = setInterval(changeSlide, time);
  }
};

window.addEventListener("keydown", keyChangeSlide);
