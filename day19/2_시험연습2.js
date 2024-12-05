let 할일목록 = [
    { 할일코드 : 1, 할일내용 : "사료먹기", 할일상태 : false },
    { 할일코드 : 2, 할일내용 : "간식먹기", 할일상태 : true },
    { 할일코드 : 3, 할일내용 : "잠자기", 할일상태 : false }
]



// 등록함수
let eno = 4;
function 등록함수(){
    let topInput = document.querySelector('.topInput').value

    let 할일 = {
        할일코드 : eno,
        할일내용 : topInput,
        할일상태 : false
    }
    console.log(할일);


    if(topInput == ""){
        alert('내용을 입력하세요');
        return;
    }else{
        alert('등록 완료');
        eno++;
    }

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
    for(let index = 0; index <= 할일목록.length-1; index++){
        let info = 할일목록[index]
        //console.log(info);


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