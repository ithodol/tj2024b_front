let 할일목록 = [
    { 할일코드 : 1, 할일내용 : "밥먹기", 할일상태 : false },
    { 할일코드 : 2, 할일내용 : "공부하기", 할일상태 : true },
    { 할일코드 : 3, 할일내용 : "게임하기", 할일상태 : false }
]

let eno = 4;
// 등록함수
function 등록함수(){
    // 가져오기
    let topInput = document.querySelector('.topInput').value
    //console.log(topInput);
    // 객체화
    let 할일 = {
        할일코드 : eno,
        할일내용 : topInput,
        할일상태 : false
    }
    console.log(할일목록);



    if(할일.할일내용 == ""){
        alert('내용을 입력하세요');
        return;
    }else{
        alert('등록완료')
        eno++;

    }
    // 출력
    할일목록.push(할일);

    전체출력함수();

}




// 전체출력함수
전체출력함수();
function 전체출력함수(){
    // 어디에
    let bottom = document.querySelector('#bottom')

    let html = ''
    // 무엇을
    for( let index = 0; index <= 할일목록.length -1; index++){
        let info = 할일목록[index]


        html += `
            <div class="contentBox ${info.할일상태 ? 'success' : ''}">
                <div class="content">${info.할일내용}</div>
                <div class="contentBtn">
                    <button type="button" onclick="수정함수(${info.할일코드})">수정</button>
                    <button type="button" onclick="삭제함수(${info.할일코드})">삭제</button>
                </div>
            </div>
        `
    }


    // 출력
    bottom.innerHTML = html;
    return;
}




// 수정함수
function 수정함수(수정클릭){
    for(let index = 0; index <= 할일목록.length -1; index++){
        if(할일목록[index].할일코드 == 수정클릭){
            할일목록[index].할일상태 = !할일목록[index].할일상태
            break;
        }
    }
    전체출력함수();
    return;

}




// 삭제함수
function 삭제함수(삭제클릭){
    for(let index = 0; index <= 할일목록.length -1; index++){
        if(할일목록[index].할일코드 == 삭제클릭){
            할일목록.splice(index, 1);
            break;
        }
    }
    전체출력함수();
    return;

}
