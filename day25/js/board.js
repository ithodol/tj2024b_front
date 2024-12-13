출력함수(); 
function 출력함수(){
    let boardList = getBoardList();
    let tbody = document.querySelector('table > tbody')

    let html = ''
        for(let index = 0; index <= boardList.length -1; index++){
            let board = boardList[index]; 
            html += `<tr> 
                        <td>${board.date}</td>
                        <td> <a href="view.html?bon=${board.bno}">${board.content}</a> </td>
                        <td>${board.view}</td>
                    </tr>`
        }

    tbody.innerHTML = html; 
} // f end