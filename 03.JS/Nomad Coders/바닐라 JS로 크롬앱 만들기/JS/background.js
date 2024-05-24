const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg",]; // images 배열에 사진을 저장함

const chosenImage = images[Math.floor(Math.random() * images.length)]; // 배열에 있는 사진을 무작위로 chosenImage에 저장

const beImage = document.createElement("img"); // html에 img라는 요소를 만듦. <img>

beImage.src = `img/${chosenImage}`; // <img src = "img/1.jpeg">로 만듦

// body가 조상이 되도록 beImage를 html에 저장함
document.body.appendChild(beImage);
