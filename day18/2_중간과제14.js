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
        도서목록.push(info);

        // 출력
        eno++;
        alert('도서 등록완료');

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
                            <button onclick="도서수정()">수정</button>
                            <button onclick="도서삭제()">삭제</button>
                        </td>
                    </tr>
            `
        }

        // 출력
        tbody.innerHTML = html;

    }





    // 수정함수
        // (1) 수정 등록
        function 도서수정(도서수정코드){ // 매개변수 실행하려면 어디에 어떻게 넣어야 함? day16 객체활용 참고
            for(index = 0; index <= 도서목록.length-1; index++){
                if(도서목록[index] == 도서수정코드){
                    도서목록[idnex]
                }
            }

        }

        // (2) 수정 출력






    // 삭제함수
    function 도서삭제(){
        
    }










// 재고함수
    // 등록함수
    function 재고등록(){
        // 입력
        let bookNum = document.querySelector('#bookNum').value
        let bookCount = document.querySelector('#bookCount').value
        let bookDay = document.querySelector('#bookDay').value
        

        // 처리
        let info = {
            도서번호 : bookNum,
            도서개수 : bookCount,
            입고날짜 : bookDay
        }
        재고목록.push(info);
        //console.log(재고목록);

        // 출력

        alert('재고 등록완료')
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

            html += `
                    <tr> 
                        <td>${info.도서번호}</td> <td>${info.도서개수}</td> <td>${info.입고날짜}</td>
                        <td>
                            <button onclick="재고수정()">수정</button>
                            <button onclick="재고삭제()">삭제</button>
                        </td>
                    </tr>
            `// 도서목록에 있는 도서번호를 갖고 오고 싶음


        }




        // 출력
        tbody.innerHTML = html;

    }




    // 수정함수
    function 재고수정(){
        
    }



    // 삭제함수
    function 재고삭제(){
        
    }



