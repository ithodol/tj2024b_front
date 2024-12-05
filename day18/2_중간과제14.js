let 도서목록 = [
    { 도서번호 : 1, 도서명 : '소년이 온다', 저자 : '한강', 출판사 : '창비' },
    { 도서번호 : 2, 도서명 : '파과', 저자 : '구병모', 출판사 : '위즈덤하우스' },
    { 도서번호 : 3, 도서명 : '종의 기원', 저자 : '정유정', 출판사 : '은행나무' }
]

let 재고목록 = [
    { 도서번호 : 1, 도서개수 : 1, 입고날짜 : '2024-05-12'},
    { 도서번호 : 2, 도서개수 : 2, 입고날짜 : '2024-04-12'},
    { 도서번호 : 3, 도서개수 : 3, 입고날짜 : '2024-03-12'}
]

let eno = 4;

// 도서함수
    // 등록함수
    function 도서등록(){
        // 입력
        let bookName = document.querySelector('#bookName').value
        let bookCom = document.querySelector('#bookCom').value
        let bookWri = document.querySelector('#bookWri').value

        // 처리
        let info = {
            도서번호 : eno,
            도서명 : bookName,
            저자 : bookCom,
            출판사 : bookWri
        }
        //console.log(info);



        // 출력
        if( bookName == "" || bookCom == "" || bookWri == "" ){
            alert('내용을 입력하세요');
            document.querySelector('#bookName').value = ``;
            document.querySelector('#bookCom').value = ``;
            document.querySelector('#bookWri').value = ``;
            return;
        }else{
            alert('도서 등록완료');
            eno++;
        }


        도서목록.push(info);

        도서출력();


    }




    // 출력함수
    도서출력();
    function 도서출력(){
        // 어디에
        let tbody = document.querySelector('.도서테이블')

        let html = '';

        // 무엇을
        for(let index = 0; index <= 도서목록.length -1; index++){
            let info = 도서목록[index]
            
            html +=  `
                    <tr>
                        <td>${info.도서명}</td> <td>${info.저자}</td> <td>${info.출판사}</td>
                        <td>
                            <button onclick="도서수정(${info.도서번호})">수정</button>
                            <button onclick="도서삭제(${info.도서번호})">삭제</button>
                        </td>
                    </tr>
            `
        }
        // 출력
        tbody.innerHTML = html;

    }





    // 수정함수
        // (1) 수정 등록
        function 도서수정(도서수정버튼){ 
        //console.log(도서수정버튼);
            let 클릭도서 = null
            for( let index = 0; index <= 도서목록.length-1; index++){
                let info = 도서목록[index]
                //console.log(info);
                if(info.도서번호 == 도서수정버튼){
                    클릭도서 = info;
                    break;
                }
            }
            if(클릭도서 == null){
                alert('도서 정보 없음');
            }
            
            // 어디에
            let div = document.querySelector('#도서수정')

            // 무엇을
            let html = `
                    <h3>도서수정</h3>
                    <form>
                        <h5>도서번호 :  ${클릭도서.도서번호}</h5>
                        도서명 <input type="text" style="margin: 5px;"/> <br/>
                        출판사 <input type="text" style="margin: 5px;"/> <br/>
                        저자 <input type="text" style="margin: 5px; margin-left: 20px;" /> <br/>
                        <button type="button" onclick="도서수정()" style="margin-top: 10px; margin-left : 165px;">수정</button>
                        <hr/>
                    </form>
                    `

            // 출력
            div.innerHTML = html;

            도서출력();
            return;
        }

        // (2) 수정 출력


        






    // 삭제함수 p:도서번호
    function 도서삭제(삭제도서목록){
        for( let index = 0; index <= 도서목록.length -1; index++){
            if(도서목록[index].도서번호 == 삭제도서목록){
                도서목록.splice(index , 1) 
                break;
            }
        }
        //console.log(도서목록);
        도서출력();
        return;
    }









let eno2 = 4;
// 재고함수
    // 등록함수
    function 재고등록(){
        // 입력
        let bookNum = document.querySelector('#bookNum').value
        let bookCount = document.querySelector('#bookCount').value
        let bookDay = document.querySelector('#bookDay').value
        

        // 처리
        let info = {
            도서번호 : eno2,
            도서개수 : bookCount,
            입고날짜 : bookDay
        }
        //console.log(재고목록);


        // 출력
        if( bookNum == "" || bookCount == "" || bookDay == "" ){
            alert('내용을 입력하세요');
            document.querySelector('#bookNum').value = ``;
            document.querySelector('#bookCount').value = ``;
            document.querySelector('#bookDay').value = ``;
            return;
        }else{
            alert('재고 등록완료');
            eno2++;
        }

        재고목록.push(info);


        재고출력();
    }


    // 출력함수
    재고출력();
    function 재고출력(){
        // 어디에
        let tbody = document.querySelector('.재고테이블')

        let html = ''
        // 무엇을
        for(let index = 0; index <= 재고목록.length -1; index++){
            let info = 재고목록[index]
            console.log(info);
            html += `
                    <tr> 
                        <td>${info.도서번호}</td> <td>${info.도서개수}</td> <td>${info.입고날짜}</td>
                        <td>
                            <button onclick="재고수정(${info.도서번호})">수정</button>
                            <button onclick="재고삭제(${info.도서번호})">삭제</button>
                        </td>
                    </tr>
            `
        }
        // 출력
        tbody.innerHTML = html;
    }




    // 수정함수
    function 재고수정(재고수정버튼){
        let 클릭재고 = null
        for( let index = 0; index <= 재고목록.length -1; index++){
            let info = 재고목록[index]
            console.log(info);
            if(info.도서번호 == 재고수정버튼){
                클릭재고 = info;
                break;
            }
        }
        if(클릭재고 == null){
            alert('도서 정보 없음');
        }
        // 어디에
        let div = document.querySelector('#재고수정')

        // 무엇을
        let html = `
                <h3>재고수정</h3>
                <form>
                    <h5>도서번호 : ${클릭재고.도서번호}</h5> 
                    도서번호 : <input type="text" style="margin: 5px;"/> <br/>
                    도서개수 : <input type="text" style="margin: 5px;"/> <br/>
                    입고날짜 : <input type="text" style="margin: 5px;"/> <br/>
                    <button type="button" onclick="도서수정()" style="margin-top: 10px; margin-left : 190px;">수정</button>
                </form>
        `

        // 출력
        div.innerHTML = html;

        재고출력();
        return;
    }



    // 삭제함수
    function 재고삭제(삭제재고목록){
        for( let index = 0; index <= 재고목록.length-1; index++){
            if(재고목록[index].도서번호 == 삭제재고목록){
                재고목록.splice(index, 1);
                break;
            }
        }
        재고출력();
    }


