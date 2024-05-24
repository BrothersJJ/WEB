const API_KEY = "a4c65653270c30c5a4fd929bfb23e186"; // https://openweathermap.org/current 에서 나의 API를 얻어 API_KEY에 저장함

function onGeoOk(position) { // position에 요청 정보 있음
  const lat = position.coords.latitude; // 위도를 lat에 저장
  const lon = position.coords.longitude; // 경도를 lon에 저장
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // 출력 url에 해당 위도, 경도, api 값을 넣고 url에 저장. &units=metric을 추가로 넣어 화씨를 섭씨로 바꿈
  fetch(url) // 해당 url로 Http 요청을 보냄
    .then(response => response.json()) // 서버에 대한 응답 콜백(response객체)이 프로미스 타입으로 오게 되면 then(response => response.json())에서 response 객체를 받아 응답상태를 확인.
    .then(data => { // Fulfilled(이행)라면 서버에 요청한 내용을 볼 수 있는 것
      const weather = document.querySelector("#weather span:first-child"); // id가 weather인 첫 번 째 span을 weather에 저장.
      const city = document.querySelector("#weather span:last-child"); // id가 weather인 마지막 span을 city에 저장
    city.innerText = data.name; // data에 있는 name을 city의 innerText에 저장. 도시 이름 저장.
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`; // data이 있는 날씨와 온도 저장.
  }); // 직접 url에 갈 필요 없이 JS가 대신 url 부름, json()으로 값 불러드림
}

function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 현재 나의 위치를 얻어옴. 위치를 얻는데 성공하면 onGeoOk, 실패하면 onGeoError 함수를 출력함.

/*
fetch는 Request나 Response와 같은 객체를 이용해서 HTTP 파이프라인을 구성하는 요소를 조작하고 원격지에서 정보를 가져오기 위해 사용되는 프로미스타입의 메소드(함수).
즉 API 같은 주소에서 정보를 빼내올 때 쓴다.
fetch는 첫번째 인자로 URL(API 주소), 두번째 인자로 옵션 객체를 받고(필수는 아님), 프로미스 타입의 객체를 반환.
여기서 프로미스를 간략히 설명드리자면 서버에 무언가 요청을 했을 때 그 응답이 바로 오지 않고 어느 정도 시간이 지난 뒤 응답.
이때 이 요청코드 때문에 응답이 대기 중인 상태에선 다음 코드로 못 넘어가는 비효율적인 상태가 됨.
이 상태를 모면하기 위해 서버에 데이터를 불러오는 것을 요청을 해놓고 기다리는 것이 아닌 다음 코드로 넘어가는 비동기처리를 하게 됨.
이 비동기처리에 사용되는 객체를 프로미스.
한 마디로 서버에 데이터를 불러 오려고 요청을 했을 때,
시간이 많이 걸릴 때를 대비해 미리 다음 코드가 먼저 실행되고 응답이 왔을 때 응답에 따라 실행되는 것을 프로미스 객체.
구동 방식을 보자면 우선 fetch()에서 ()안에 주소를 인자로 넣으면
서버에 대한 응답 콜백(response객체)이 프로미스 타입으로 오게 되면 then(response => response.json())에서 response 객체를 받아 응답상태를 확인.
만약 Fulfilled(이행)라면 두번째 .then에서 서버에 요청한 내용을 볼 수 있는 것 입니다.
Fulfilled(이행) 상태는 101, 100, 404, 200과 같은 서버가 보내 주는 응답 콜백인데, 이 응답 콜백이 200(요청을 허락해줬다는 표시)이라면 Fulfilled(이행) 상태.
 */
