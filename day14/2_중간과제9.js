/*
    중간과제9
    기계식 주차장 시스템 구현
    =====================================================================
    [요구사항]
    1. 주차할 수 있는 차량은 총 20대 입니다.
    2. 차량번호와 주차할 위치를 클릭/입력받아 [입차]버튼을 클릭한다.
        단, 해당 위치에 입차된 차량이 존재하면 '입차불가' 안내 출력,
        존재하지 않으면 '입차성공' 안내 출력 (알림창 사용 가능)
    3. 차량번호를 입력받아 [출차] 버튼을 클릭한다.
        단, 출차되는 차량의 위치와 주차료(금액)을 안내 출력
            금액은 1초당 100원으로 계산 , 하루가 지나지 않는 조건
    =====================================================================
    [개발순서]
    1. 프론트엔드 html 구성
    2. JS 메모리구성 (배열/변수/CSV)
    3. 함수 구성(함수명, 실행조건, 매개변수 판단. 어떠한 함수가 필요한지)
    4. 각 함수별 기능 구현, 코드 작성
    5. 각 함수별 기능 구현 후 HTML(onclick) 연동
    6. 테스트
    =====================================================================
*/

/*
    배열
    차량위치 입차시간 차량번호

    입차시간 출차시간
    시간출력 함수

*/


let carInfo = [];

  function inCar() {
    let carLocation = document.querySelector(".carLocation").value; 
    let carNum = document.querySelector("#carNumber").value; // ID를 기준으로 선택

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
    carInfo.push(board);
    console.log(carInfo);

  }



functionIn();
function functionIn(){
    let table = document.querySelector('table')
    let html = ''

    for(let index = 0; index <= carInfo.length -1; index++){


    }
}

/*
for(){
    if(){
    }esle
}

    
*/