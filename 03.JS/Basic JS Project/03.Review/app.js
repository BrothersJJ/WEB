let data = [
  {
    id: 0,
    img: "1.jpeg",
    author: "sara",
    job: "Designer",
    info: "asdfaskdjfksdjfksajkfjsld",
  },
  {
    id: 1,
    img: "./img/0.jpg",
    author: "Christian",
    job: "WEB DEVELOPER",
    info: `저는 창의적인 문제 해결과 협업을 통해 혁신적인 소프트웨어를 개발하는
  개발자입니다. 다양한 프로젝트 경험을 통해 빠르게 적응하며 지속적인
  성장을 추구하며, 사용자 중심의 사용하기 편리한 솔루션을 만들기 위해
  노력합니다.`,
  },
  {
    id: 2,
    img: "./img/1.jpg",
    author: "Ju Hyeong",
    job: "DEVELOPER",
    info: 'asdfsdfasldjfklsjdfkjakdjfk'
  },
  {
    id: 3,
    img: "./img/2.jpg",
    author: "Hello",
    job: "adfadfadf",
    info: 'asdㅁㅇ러ㅏㅁ어라머아럼아리ㅓㅁ아ㅣ럼이ㅏ럼아ㅓ라ㅣkdjfk'
  },
]

const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const radomBtn = document.querySelector(".random-btn");

let current = 0;

function showPerson(person) {
  const item = data[person];
  author.textContent = item.author;
  job.textContent = item.job;
  info.textContent = item.info;
  img.src = item.img;
}

showPerson(current);

prevBtn.addEventListener("click", function () {
  if (current !== 0) {
    current -= 1;
    showPerson(current);
  }
});

nextBtn.addEventListener("click", function () {
  if (current < data.length - 1) {
    current += 1;
    showPerson(current);
  }
});

radomBtn.addEventListener("click", function () {
  const random = Math.floor(Math.random() * data.length);
  showPerson(random);
});

