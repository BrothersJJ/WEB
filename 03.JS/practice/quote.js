const quotes = [
  {
    quote: "너의 일상이 이제 나의 일상 속 즐거움이 된 것 같아 이야기 들려줘서 고마워",
    author: "winter",
  },
  {
    quote: "상상만 해도 나를 행복하게 하는 일들을 미래에 꼭 할 수 있을 거라는, 꼭 하게될 거라는 희망으로 하루하루 버텨내보자",
    author: "winter",
  },
  {
    quote: "내 돛단배는 느리지만 일렁일렁 둥실둥실 떠다니고 있어",
    author: "winter",
  },
  {
    quote: "그냥 누군가의 혼잣말, 숨소리라고 생각하고 편하게 흘리면서 들어줘",
    author: "winter",
  },
  {
    quote: "삶은 항상 진행 중이고 그래서 멈출 수 없기에 잘 쉬어줘야 해",
    author: "winter",
  },
  {
    quote: "너와의 대화가 내 가까이에 있는 행복 중 하나라는 걸 깨닫고 있어",
    author: "winter",
  },
  {
    quote: "행복은 특별하고 거대해 그런데 또 소소하고 가까이에 있네 그 말은 행복은 어디에나 있다는 말일까",
    author: "winter",
  },
  {
    quote: "너의 하루하루를 자주 응원하고 있어 내 마음이 전해졌기를",
    author: "winter",
  },
  {
    quote: "운명이니 미래니 하는 단어들이 닿지 않는 곳에서",
    author: "dolphin",
  },
  {
    quote: "죽어가는 자연에 대해서, 또 그 자연을 닮은 잃어버린 청춘에 대해서",
    author: "winter",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuotes.quote;
author.innerText = randomQuotes.author;
