let 할일목록 = [
    { 할일코드 : 1, 할일내용 : "밥 먹기", 할일상태 : false },
    { 할일코드 : 2, 할일내용 : "시험보기", 할일상태 : true },
    { 할일코드 : 3, 할일내용 : "커피 마시기", 할일상태 : false }
]



// 등록
let eno = 4;
function 등록함수(){
    let topInput = document.querySelector('.topInput').value

    let 할일 = {
        할일코드 : eno,
        할일내용 : topInput,
        할일상태 : false
    }

    if(할일.할일내용 == ''){
        alert('내용을 입력하세요');
        return;
    }else{
        alert('등록완료');
        document.querySelector('.topInput').value = '';
        eno++;
    }

    할일목록.push(할일);
    //console.log(할일목록);
    전체출력함수();
    return;

}




// 전체출력
전체출력함수();
function 전체출력함수(){
    let bottom = document.querySelector('#bottom')

    let html = ''
    for(let index = 0; index <= 할일목록.length-1; index++){
        let info = 할일목록[index]

        html += `
                <div class="contBox ${info.할일상태 ? 'success' : ''}">
                    <div class="cont">${info.할일내용}</div>
                    <div class="contBtn">
                        <button type="button" onclick="수정함수(${info.할일코드})">수정</button>
                        <button type="button" onclick="삭제함수(${info.할일코드})">삭제</button>
                    </div>
                </div>
        `
    }
    bottom.innerHTML = html;
    return;
}



// 수정
function 수정함수(수정클릭){
    for(let index = 0; index <= 할일목록.length-1; index++){
        if(할일목록[index].할일코드 == 수정클릭){
            할일목록[index].할일상태 = !할일목록[index].할일상태
            break;
        }
    }

    전체출력함수();
    return;
}




// 삭제
function 삭제함수(삭제클릭){

    for(let index = 0; index <= 할일목록.length-1; index++){
        if(할일목록[index].할일코드 == 삭제클릭){
            할일목록.splice(index, 1);
            break;
        }
    }

    전체출력함수();
    return;

}