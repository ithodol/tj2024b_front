/*
    TODOLIST 구현하기
*/

// [1] 메모리 구성
let 할일목록 = [
    { 할일코드 : 1, 할일내용 : "1교시 수업 듣기", 할일상태 : false },
    { 할일코드 : 2, 할일내용 : "밥먹기", 할일상태 : true }
]

let 식별번호 = 3;

// [2] 등록함수 (p:x , r:x)
function 등록함수(){

    // 1. 입력 / HTML로부터 입력받은 값(value) = (할 일 목록)을 JS로 가져온다
    let content = document.querySelector('.contentInput').value // value 호출

    // 2. 처리 / 객체 생성 -> 배열에 저장push
    let 할일 = {
        할일코드 : 식별번호, // '식별번호' 변수값을 대입
        할일내용 : content, // 입력받은 'content' 변수값을 대입
        할일상태 : false // 초기값을 false(미완료) 대입
    }
    할일목록.push(할일); // 생성한 객체를 배열에 저장/대입
    식별번호++; // 다음 할일이 등록될 때 식별코드가 1씩 증가하기 때문

    // 3. 출력 
    console.log(할일목록); // 확인용
    전체출력함수();

    // + 부가 코드
    alert('등록완료');
    document.querySelector('.contentInput').value = ``; // value 수정
    return; // 함수종료, 리턴 값이 없으면 생략 가능
}




// [3] 전체출력함수 (p:x , r:x)
전체출력함수();
function 전체출력함수(){
    // 어디에
    let todoBottom = document.querySelector('#todoBottom');

    // 무엇을
    let html = ``
        for( let index = 0; index <= 할일목록.length -1; index++){
            // index는 0부터 할일목록내 마지막인덱스까지 1씩 증가 반복
            let info = 할일목록[index] // index번째의 객체(할일)꺼내기
            // 객체정보를 HTML로 구성하기, 삼항연산자를 이용한 값에 따른 class 넣기/빼기
            // 만약에 index번째의 할일객체내 할일상태가 true이면 'success' 클래스명을 넣어주고 아니면 ''공백을 넣는다
            html += `<div class="contentBox ${info.할일상태 ? 'success' : ''}">
                        <div class="content">${info.할일내용}</div>
                        <div class="contentBtns">
                            <button onclick="수정함수(${info.할일코드})"class="updateBtn" type="button">수정</button>
                            <button onclick="삭제함수(${info.할일코드})" class="deleteBtn" type="button">삭제</button>
                        </div>
                    </div>`

        } // for end

    // 출력 innerHTML
    todoBottom.innerHTML = html;
    return; // 함수종료, 리턴값이 없으면 생략 가능

} // func end



// [4] 수정함수 (p:할일코드 , r:x)
function 수정함수(){
    


    전체출력함수();
    return;

}



// [5] 삭제함수 (p:할일코드 , r:x) [삭제]버튼 클릭시 실행
function 삭제함수(삭제할일코드){
    
    // 1. 배열내 삭제할 요소(객체)를 찾기
    for(let index = 0; index <= 할일목록.length -1; index++){
        if(할일목록[index].할일코드 == 삭제할일코드){
            // 만약 index번째의 할일객체내 할일코드와 삭제할일코드와 같으면
            할일목록.splice(index , 1); //현재 찾은 index요소를 삭제한다
            // 2. 배열내 요소(객체) 삭제 /  인덱스 필요함 / .splice(삭제할인덱스,갯수)
            break; // 삭제 성공했을 때 가장 가까운 반복문 종료
        } //if end
    } // for end

    전체출력함수();
    return;
} // func end
