// 1. localStorage에 배열정보 불러오기 함수
function getBoardList(){
    
    // 1. localStorage에 게시물 배열 배열 정보 요청, key
    let boardList = localStorage.getItem('boardList')
    if(boardList == null){ // 만약 localStorage에 게시물 배열이 비어있으면
        boardList = []; // 빈 배열을 대입하고
    }else{ // 있으면
        boardList = JSON.parse(boardList); // JSON(객체)로 변환해서 대입한다.
    }
    return boardList; // 현재 함수를 호출했던 곳으로 게시물 배열을 반환해준다.

}

// 2. localStorage에 배열 정보 저장 함수
function setBoardList(boardList){
    localStorage.setItem('boardList', // key
         JSON.stringify(boardList)); // value
}

// 3. localStorage에 특정한 게시물 불러오기 함수
function getBoard(bno){
    // 조회할 게시물번호를 매개변수로 지정

    // 1. 게시물 매열 요청
    let boardList = getBoardList();

    // 2. 조회할 게시물번호 찾기
    for(let index = 0; index <= boardList.length-1; index++){
        if(boardList[index].bno == bno){
            // 만약 index번째의 게시물번호와 조회할 번호가 같으면
            return boardList[index]; // 찾은 게시물 객체 반환
        }
    }
    return null; // 조회할 게시물번호와 일치한 게시물 객체 못 찾음
}

// 4. 특정한 게시물 1개 삭제 함수
function deleteBoard(bno){
// 1. 게시물목록 가져오기
    let boardList = getBoardList();
    
    // 2. 게시물 목록에서 삭제할 번호의 인덱스 찾기
    let deleteIndex = -1;
    for(let index = 0; index <= boardList.length-1; index++){
        if(boardList[index].bno == deleteBno){
            deleteIndex = index;
            break;
        }
    }

    // 3. 삭제할 번호의 게시물 인덱스를 게시물 목록에서 삭제
    boardList.splice(deleteIndex, 1);

    // 4. localStoreage 업데이트
    setBoardList(boardList);
    return true;
}