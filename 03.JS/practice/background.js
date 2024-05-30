const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg",]; // images 배열에 사진을 저장함

const randomImg = images[Math.floor(Math.random()*images.length)];

const img = document.createElement("img");

img.src = `img/${randomImg}`;

document.body.appendChild(img);
