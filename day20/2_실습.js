/*
    세션을 이용한 회원가입/로그인 구현
*/



// [1] 회원가입 함수 정의
    // - 함수를 언제 사용할건지? [회원가입]버튼 클릭했을 때
    // - 함수의 인자값(매개변수)? x
    // - 함수의 리턴값(반환)? x
// let memberList = [] // 쓰지않음. 회원목록을 세션/쿠키에 저장할 예정
function 회원가입함수(){

    // 1. 입력
    let id = document.querySelector('.signId').value;
    let pw = document.querySelector('.signPw').value;

    // 2. 처리
    let member = { 'id' : id, 'pw' : pw };  // 입력받은 값으로 객체 생성

    // - 회원정보목록 호출함수 실행
        let memberList = 회원정보목록반환함수();


        console.log(memberList);


        // 입력받은 객체를 배열에 저장
        memberList.push(member);
        console.log(memberList);

        // 변화가 있는 배열을 세션/쿠키에 다시 저장(새로고침)
        // - (1) key와 value값이 구성된 세션정보를 저장하는데 value값을 문자열타입으로 변환하여 저장한다
        sessionStorage.setItem('memberList', JSON.stringify(memberList))

    // 3. 


    return; //함수 종료 // 값이 없을 때는 생략 가능.
} // func end



function 로그인함수(){
    
    // C(회원가입) R(로그인/조회/비교) U D
    // 회원가입이란? 입력한 정보들을 어딘가에 저장/기록
    // 로그인이란? 로그(기록)으로 들어가는 것, 기록(회원가입)과 일치한 정보를 비교해서 들어감

    let loginId = document.querySelector('.loginId').value;
    let loginPw = document.querySelector('.loginPw').value;

    // - 회원정보목록 호출 함수 실행
    let memberList = 회원정보목록반환함수();

    // 로그인정보가 회원정보(기록)내 존재하는지 비교
    for(let index = 0; index <= memberList.length-1; index++){
        let info = memberList[index]; // index번째의 회원정보 객체 호출
        if(info.id == loginId && info.pw == loginPw){
            alert('로그인 성공');
            return; // 현재 함수 종료 // 아래 코드는 실행되지 않음
        }
    }
    alert('로그인 실패. 동일한 회원정보가 없습니다')

    return;
}


// [3] 세션에 있는 회원정보목록반환함수 반환 함수
function 회원정보목록반환함수(){ // 매개변수x, 리턴값 : memberList;

    // * 회원목록 정보를 전역변수에 선언하지 않고 세션/쿠키에 저장
    //   이유 : JS 외부(브라우저)에 저장하면 새로고침되거나 변화가 있어도 저장 유지되기 때문

    // (1) 현재 회원정보를 저장하기 위한 회원정보목록을 세션에서 가져오기
    let memberList = sessionStorage.getItem('memberList');
    //console.log(memberList); // 존재하지 않는 'key'를 호출하면 null이 반환됨
    // (2) 회원정보목록이 존재하면 존재하지 않으면
    if(memberList == null){
        // 만약 가져온 세션데이터(memberList)가 null(없다면)이면
        memberList = []; // 빈 배열을 생성하여 변수에 대입한다
    }else{ // 가져온세선데이터(memberList)가 존재하면
        // 문자열 ---> 객체(JSON)로 반환
        memberList = JSON.parse(memberList);
    }
    return memberList; // 함수가 종료되면서 함수를 호출했던 것으로 반환/리턴 하는 값
    
} // func end