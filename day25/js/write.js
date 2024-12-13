// day14 중간과제8

function 등록함수(){ 
    let title = document.querySelector('.title').value; 
    let content = document.querySelector('.content').value; 
    let password = document.querySelector('.password').value; 

        let nowDate = new Date();
        let nowYear = nowDate.getFullYear(); 
        let nowMonth = nowDate.getMonth()+1; 
        let nowDay = nowDate.getDate(); 
        let date = `${nowYear}-${nowMonth}-${nowDay}`; 
        let view = 0;

    // let board = `${title},${content},${password},${date},${view}`// `백틱 문자열 탬플릿

    // localStorage에 배열을 운영하시오
    let boardList = getBoardList(); // 1. 게시물 배열 호출
    // 게시물번호(식별자) : 만약 게시물 배열이 존재하면 마지막 게시물 번호 +1, 아니면 1(첫게시물)
        // 배열변수.length-1 : 배열내 마지막요소의 인덱스번호
    let bno = boardList.length != 0 ? boardList[boardList.length-1].bno+1 : 1


    // board CSV를 객체로 변경
    let board = {
        bno : bno,
        title : title,
        content : content,
        password : password,
        date : date,
        view : view
    };

    boardList.push(board);
    // 2. 게시물 배열 상태를 localStorage
    setBoardList(boardList);
    // 3. 메세지 안내
    alert('게시물 등록 성공');
    // 4. JS에서 <a> 마크업과 동일한 기능, JS에서 페이지 전환 함수
    location.href="board.html";

    
} // f end