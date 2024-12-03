/*
    중간과제7 : 회원가입 과 로그인 구현 페이지 구현하기
    [요구사항] 
    1. (회원가입 구역 에서 ) 아이디 와 비밀번호를 입력받아 회원가입 처리 해주세요.
    2. (로그인 구역 에서 ) 아이디 와 비밀번호가 회원가입에 등록된 데이터정보와 일치하면 '로그인 성공' 아니면 '로그인실패' 출력해주세요.
    [제출]
    강의 카카오톡방에 ip 링크 제출
*/


let join = []


function 등록함수(){
    let joinId = document.querySelector('.joinId').value
    let joinPw = document.querySelector('.joinPw').value

    let joinArray = `${joinId},${joinPw}`
    //console.log(joinArray);

    join.push(joinArray);
    console.log('회원가입완료');
}

function 출력함수(){
    let loginId = document.querySelector('.loginId').value
    let loginPw = document.querySelector('.loginPw').value
    let res = false;

    //console.log(loginArray);

    for(let index = 0; index <= join.length -1; index++){

        let [inputId,inputPw] = join[index].split(',')
        
        console.log(join);
        if(loginId == inputId && loginPw == inputPw){
            res = true;
            break;
        }
    }
    if(res){
        console.log('로그인성공');
    }else{
        console.log('로그인실패');
    }
}

