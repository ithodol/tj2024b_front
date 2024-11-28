/*
    [실습]    
    주제 : 미니 웹페이지 가계부
        1. 가계부 정보(항목) : 1. 날짜 2. 항목명 3. 금액
        2. 세가지의 정보를 입력받아 각각 하나의 배열 저장 기능
        3. 등록된 모든 정보들을 출력 기능
        4. HTML 출력 예시
            날짜            항목            금액
            2024-11-26      콜라            1000
            2024-11-27      커피            1200
    [생각1] 시각적으로 보이는 목표의 데이터 구성을 어떻게 해야 하는지 생각
        변수 = 하나의 자료를 저장하는 메모리 공간,
        배열 = 여러개의 자료를 저장하는 하나의 타입,
        1. 날짜 데이터 여러개 저장
            let 날짜배열 = ['2024-11-26', '2024-11-27']
        2. 항목 데이터 여러개 저장
            let 항목배열 = ['콜라', '커피']
        3. 금액 데이터 여러개 저장
            let 금액배열 = [1000, 1200]
        4. 배열 선언 위치 : 전역변수(JS 실행될 때 1번 선언) vs 지역변수(지역{}이 실행될 때마다 선언 / 종료될 때마다 사라짐)
        5. 서로 다른 배열간의 인덱스가 동일하면 하나의 가계부 정보
            날짜배열[0] = '2024-11-26'
            항목배열[0] = '콜라'
            금액배열[0] = 1000
    [생각2] 제작할 기능/함수 몇개 필요한지 구성 / 처리할 로직
        1. [등록]버튼 클릭시 input으로부터 입력받은 세 값을 각 배열에 저장하는 함수
        2. 등록[배열push]시 현재 배열의 요소(값)들을 출력하는 함수
    [생각3] 등록함수에서 실행할 로직은?
        1. 입력/저장                                prompt() vs *document.querySelector()*
        2. 처리 : 입력된 정보를 배열에 추가(push)     배열명.push()
        3. 출력 : 출력함수 호출로 대체
    [생각4] 출력함수에서 실행할 로직은?
        1. 어디에                   document.write() vs *document.querySelector()*
        2. 무엇을                   배열순회해서 모든 배열내 요소(값)들을 html로 구성해서
        3. 출력
        
*/
// [1] 전역변수
let 날짜배열 = ['2024-11-26', '2024-11-27']
let 항목배열 = ['콜라', '커피']
let 금액배열 = [1000, 1200]

// [2] 등록함수 , 실행조건 : [등록]버튼 클릭했을 때
function 등록함수 (){
    console.log('등록함수 실행');
    // 1. 입력/저장
        // (날짜)
    let dateInput = document.querySelector('.dateInput');
    // html에 'dateInput'이라는 class명을 가진 마크업을 JS DOM객체 호출/반환
    let date = dateInput.value; // DOM객체는 마크업의 value 속성 값을 호출/반환
        // (항목)
    let contentInput = document.querySelector('.contentInput');
    let content = contentInput.value;
        // (금액)
    let moneyInput = document.querySelector('.moneyInput');
    let money = moneyInput.value;

    // 2. 처리, 입력받은 값들을 각 배열에 저장
    날짜배열.push(date);        console.log(날짜배열);
    항목배열.push(content);     console.log(항목배열);
    금액배열.push(money);       console.log(금액배열);

    // 3. 출력
    출력함수(); // 등록 이후 출력함수 호출
}

// [3] 출력함수 , 실행조건 : 배열에(push) 했을 때
function 출력함수 (){console.log('출력함수 실행');
    // 1. 어디에 : 테이블에
    let table = document.querySelector('table')

    // 2. 무엇을 <-- JAVA(백엔드)에게 제출
    let html = '싸다 싸' // 출력할 HTML 구성 변수
        // 2-1 배열 순회
    for(let index = 0; index <= 날짜배열.length -1; index++){
        // index는 0부터 마지막인덱스까지 1씩 증가 하면서 반복
        html += `<tr>
                    <td> ${날짜배열[index]} </td>
                    <td> ${항목배열[index]} </td>
                    <td> ${금액배열[index]} </td>
                </tr>` // += 누적합계(기존데이터에 문자열 연결)
    }            // 각 index 번째의 날짜/항목/금액을 각 <td>에 문자열로 구성

    // 3. 출력 , DOM 객체의 innerHTML 속성/필드를 이요한 html 대입해서 출력한다
    table.innerHTML = html;    
    
}
