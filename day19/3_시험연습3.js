let 할일목록 = [
    { 할일코드 : 1, 할일내용 : "사료먹기", 할일상태 : false },
    { 할일코드 : 2, 할일내용 : "간식먹기", 할일상태 : false },
    { 할일코드 : 3, 할일내용 : "잠자기", 할일상태 : false },
]

let eno = 4;
function 등록함수(){
    let topInput = document.querySelector('.topInput').value

    let 할일 = {
        할일코드 : eno,
        할일내용 : topInput,
        할일상태 : false
    }


    if(topInput == ""){
        alert('내용을 입력하세요');
        return;
    }else{
        alert('등록완료');
        eno++;
    }
    할일목록.push(할일);
    전체출력함수();

}



전체출력함수();
function 전체출력함수(){
    let bottom = document.querySelector('#bottom')

    let html = ''
    
    for(let index = 0; index <= 할일목록.length-1; index++){
        let info = 할일목록[index]


        html += `
            
        `
    }



}