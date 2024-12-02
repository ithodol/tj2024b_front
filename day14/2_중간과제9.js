/*
   <!--
    중간과제9 : 기계식 주차장 시스템 구현 
        [요구사항]
        1. 주차할수 있는 총 차량 대수는 20대 입니다.
        2. 차량번호 와 주차 할 위치를 클릭/입력 받아 [입차] 버튼 클릭 한다.
            단] 해당 위치에 입차된 차량이 존재하면 '입차불가' 안내 출력 아니면 '입차성공' 안내 출력
        3. 차량번호 를 입력받아 [출차] 버튼 클릭한다.
            단] 출차 되는 차량의 위치 와 주차료(금액) 를 안내 출력
            단] 금액은 1초당 100원 계산 , 단 하루가 지나지 않는 조건
        ====================================================================================
        [개발순서]
        1. 프론트엔드 html 구성                                         ( 종이 제출 )
        2. JS 메모리 구성( 배열/변수/CSV )
            1. 목표에 따른 기록 정보 : 차량번호 , 주차위치 , 입차시간 , 요금 , 출차시간
            2. 정보 예시]   여러개 변수들의 값을 하나의 변수에서 관리하는 방법 -> 배열 
                [차 1대 - 유재석 차  ]  - 5개 정보 
                let 변수1= "111어1111"
                let 변수2= 'A-1'
                let 변수3= '10:14:30'
                let 변수4= '3000'
                let 변수5= '12:10:20'
                [차 2대 - 강호동 차 ]  - 5 개 정보 
                let 변수6= "222어222"
                let 변수7= 'A-2'
                let 변수8= '10:15:30'
                let 변수9= '6000'
                let 변수10= '14:10:20'
                ----> 차량 2대 주차 되면 정보는 10개 , 차량 20대 --> 정보는 100개

            3. 배열 활용 
                [1]
                    차량번호목록 = [  "111어1111" ,  "222어222" ]
                    주차위치목록 = [ 'A-1' , 'A-2' ]
                    입차시간목록 = [ '10:14:30' ,  '10:15:30' ]
                    요금목록 = [ '3000' , '6000'  ]
                    출차시간목록 = [ '12:10:20' , '14:10:20' ] 
                [2]
                    주차정보 1대 csv형식 문자열 표현 :  "111어1111,A-1,10:14:30,3000,12:10:20"
                    주차정보 1대 csv형식 문자열 표현 :  "222어2222,A-2,10:15:30,6000,14:10:20"

                    * 주차정보목록 = [  "111어1111,A-1,10:14:30,3000,12:10:20" , "222어2222,A-2,10:15:30,6000,14:10:20"  ]

                    * 주차정보목록 = [  "111어1111,A-1,10:14:30" , "222어2222,A-2,10:15:30"  ]
                    
                    * 주차정보목록 = [  "빈좌석","빈좌석","빈좌석","빈좌석","빈좌석","빈좌석","빈좌석","빈좌석","빈좌석",
                                        "빈좌석","빈좌석","빈좌석","빈좌석","빈좌석","빈좌석","빈좌석","빈좌석","빈좌석",
                                        "빈좌석","빈좌석"  ]
                    * 주차정보목록 = [  "111어1111,10:14:30" , "222어2222,10:15:30"  ]

                    - 주차정보목록 = [  "빈좌석","빈좌석","빈좌석","111어1111,10:14:30","빈좌석",
                                        "빈좌석","빈좌석","빈좌석","빈좌석","빈좌석",
                                        "빈좌석","빈좌석","222어2222,10:15:30","빈좌석","빈좌석",
                                        "빈좌석","빈좌석","빈좌석","빈좌석","빈좌석"  ]

        3. 함수 구성( 함수명 , 실행조건 , 매개변수 판단 )  
                1. 입차함수 : [입차] 버튼 클릭했을떄 , 차량번호/주차위치 
                2. 출차함수 : [출차] 버튼 클릭했을때 , 차량번호 
        4. 각 함수별 기능 구현 , 코드 작성 
        5. 각 함수별 기능 구현 후 HTML(onclick) 연동        
        6. 테스트                                                       
        제출 : 수업 카톡방에 ip 제출 
*/
let carInfo = [];




function outCar(index) {
  console.log('outCar 실행'); console.log(index);

  let board = carInfo[index];
  let info = board.split(',')


  document.querySelector('.carLocation').innerHTML = info[0];
  document.querySelector('.carNumber').innerHTML = info[1];
  document.querySelector('.inCarTime').innerHTML = info[2];
  document.querySelector('.deleteBox').innerHTML = `
                                  <button onclick="outCar(${index})" type="button">출차</button> `

}

function inCar() {
  let carLocation = document.querySelector(".carLocation").value; 
  let carNum = document.querySelector("#carNumber").value; // ID를 기준으로 선택

  let color = document.querySelector(`.${carLocation}`);

  if (carLocation === "none" || carNum === "") {
      alert("주차 자리와 차량 번호를 모두 입력해주세요!");
      return;
  }

  let today = new Date();   
  let hours = today.getHours(); 
  let minutes = today.getMinutes();  
  let seconds = today.getSeconds();  
  let time = `${hours}:${minutes}:${seconds}`

  let board = `${carLocation}, ${carNum}, ${time}`;


  for(let index = 0; index <= carInfo.length -1; index++){
      let full = carInfo[index]
      let info = full.split(',')
      if(info[0] == carLocation){
          alert("입차불가");
          return;
      }
  }
  alert("입차성공");
  color.style.backgroundColor = 'red';

  carInfo.push(board);
  console.log(carInfo);
}

function searchCar() {
  let tbody = document.querySelector('#outBox');
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let time = `${hours}:${minutes}:${seconds}`;
  tbody.innerHTML = '';

  let price;
  let html = '';

 
  for (let index = 0; index < carInfo.length; index++) {
    let board = carInfo[index];
    let carlist = board.split(',');

    let carloc = carlist[0];
    let inTime = carlist[2];
    let calc_inTime = inTime.split(':');

    let inHours = parseInt(calc_inTime[0]);
    let inMinutes = parseInt(calc_inTime[1]);
    let inSeconds = parseInt(calc_inTime[2]);

    let outHours = hours;
    let outMinutes = minutes;
    let outSeconds = seconds;

    let Second_calc = (outHours * 3600 + outMinutes * 60 + outSeconds) - (inHours * 3600 + inMinutes * 60 + inSeconds);
    price = Second_calc * 100;


    html += `<h1>출차</h1>
      주차 위치 : <span class="carLocation">${carlist[0]}</span> <br />
      차량 번호 : <input type="text" class="carNumber" placeholder='${carlist[1]}'> </span>
      <hr />
      입차 시간 : <span class="inCarTime">${carlist[2]}</span><br />
      출차 시간 : <span class="outCarTime">${time}</span>
      <hr />
      주차료(금액) : <span class="price">${price}</span>
      <div class="deleteBox">
      <button onclick="outCar(${index})" type="button">출차</button>`;
  }

  
  tbody.innerHTML = html;
}

function outCar(index) {
  let tbody = document.querySelector('#outBox');
  let html=''
  //tbody.innerHTML = '';

  carInfo.splice(index, 1);


  alert('출차가 완료되었습니다.');
  console.log(carInfo);
  html += `<h1>출차</h1>
  주차 위치 : <span class="carLocation"></span> <br />
  차량 번호 : <input type="text" class="carNumber" placeholder=''> </span>
  <hr />
  입차 시간 : <span class="inCarTime"></span><br />
  출차 시간 : <span class="outCarTime"></span>
  <hr />
  주차료(금액) : <span class="price"></span>
  <div class="deleteBox">
  <button onclick="outCar()" type="button">출차</button>`;
  
  tbody.innerHTML=html;
}