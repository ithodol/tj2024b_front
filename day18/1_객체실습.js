// - new Date() 현재시스템(pc)의 날짜/시간 반환 객체
// - new Date(연도, 월, 일) 지정한 연도월일에 해당하는 날짜 객체
/*
    console.log( new Date() ) //Wed Dec 04 2024 10:34:35 GMT+0900 (한국 표준시)
    console.log( new Date().getFullYear() ) // 2024
    console.log( new Date().getMonth() ) // 월. 11
    console.log( new Date().getDate() ) // 일. 4
    console.log( new Date().getDay()) // 요일. 3수 (0:일 ~ 6:토)
    console.log( new Date(2023, 4, 20) ) // Sat May 20 2023 00:00:00 GMT+0900 (한국 표준시)
*/

// 전역변수 : 특정한 { } 안에서 선언되지 않은 함수, 선언이란? 만들기/정의 :  let, const, function
let today = new Date();
let year = today.getFullYear();  // 오늘의 연도
let month = today.getMonth()+1; // 오늘의 월, +1 하는 이유 = 12월이 11로 반환되기 때문에

// + 달력의 일 일정/내용
let contentArray = [
    { cno : 1, content : '종수네 차짬먹기', date : '2024-12-4', color : 'pink' },
    { cno : 2, content : '풍향고 보기', date : '2024-12-10', color : 'orange' },
    { cno : 3, content : '칼바람 양학하기', date : '2024-12-10', color : 'lightgreen' },
    { cno : 4, content : '귀칼 풍뢰 뽑기', date : '2024-12-21', color : 'skyblue' },
    { cno : 5, content : '귀칼 영웅 렙업하기', date : '2024-12-23', color : 'lawngreen' }
]


// [1] 달력 출력함수 / 실행조건 : js가 실행될 때, 월변경될 때마다

calPrint(); // js가 실행될 때 최초 1번 함수 실행

function calPrint(){

    // (1) 상단의 달력 연도/월 표시
        // 어디에
        let h3 = document.querySelector('#calTop > h3')

        // 무엇을
        let html = `${year}년 ${month}월`

        // 출력
        h3.innerHTML = html;

    // (2) 하단의 현재 연도/월의 일 표시
        // 어디에
        let calBottom = document.querySelector('#calBottom')
        
        // 무엇을
        let html2 = ``;

        // - 요일 출력
        html2 += `<div class="week sunday">일</div><div class="week">월</div class="week"><div class="week">화</div><div class="week">수</div><div class="week">목</div><div class="week">금</div><div class="week saturday">토</div>`

        // - 1일부터 마지막 일까지 출력
            // (1) 현재 날짜의 마지막 일 구하기. 달력은 1일부터 마지막 일까지 출력하기 위해서
            let date = new Date(year, month, 0); // 지정한 연도와 월에 해당하는 전 달의 말일 날짜를 구할 수 있음 // Tue Dec 31 2024
                //console.log(date); 
            let endDay = date.getDate(); // 31
                //console.log(endDay); 
            
            // (2) 현재 날짜의 1일의 요일 구하기. 1일의 시작 위치를 찾기 위해서 
            let date2 = new Date(year, month-1, 1); // -1을 하는 이유 : 컴퓨터는 0:1월로 인식
                //console.log(date2); // Sun Dec 01 2024
            let startWeek = date2.getDay(); // 요일. 0:일
                //console.log(startWeek);


    // + 각 월의 1일 전까지의 공백 출력
    for(let blank = 1; blank <= startWeek ; blank++){
        html2 += `<div> </div>`
    } // for end


    //  + 달력의 날짜 출력 + 현재 일정도 함께 출력
    for(let day = 1; day <= endDay; day++){
        // day는 1부터 현재 날짜의 마지막 일까지 1씩 증가 반복


        // 일정출력
            // 1. 현재 날짜 형식 구성
            let date3 = `${year}-${month}-${day}`; // 현재 반복문이 처리 중인 날짜
                //console.log(date3);
                // 2. 현재 날짜와 등록된 일정날짜가 동일한 일정 찾기/검색해서 동일하면 일정내용 출력
            let planHTML = ``; // for문 밖에 만든 이유 : 동일한 날짜에 2개 이상의 일정이 있을경우 누적하기 위함
                              //  for문 안에 넣으면 : 누적되지 않고 반복문이 돌 때마다 초기화 됨  
            for(let index = 0; index <= contentArray.length -1; index++){
                let plan = contentArray[index]; // plan(변수)은 배열이 아닌 객체를 참조하고 있음
                    //console.log(plan); // 등록완료
                if(plan.date == date3){ // 만약 index번째의 일정객체내 일정이 현재 보고있는 날짜와 같으면                    
                    planHTML += `<div style="background-color : ${plan.color} "> ${plan.content} </div>`
                } // if end
            } // for end


        // 일 출력
        html2 += ` <div> ${day} ${planHTML} </div>`
    } // for end


    //  출력
    calBottom.innerHTML = html2;

    return; // 함수종료. 함수가 종료되면서 반환되는 값, 값이 없을 경우 생략 가능


} // func end



// [2] 월 변경함수 (이전달, 다음달) 실행조건 : [◀ or ▶] 버튼 클릭했을을 때
function monthChange( changeMonth ){ // 함수의 매개변수 : 이전달/다음달 식별데이터, 리턴값
    console.log(changeMonth);

    // 1. 매개변수에 따른 월 수정
    month += changeMonth;

    // 2. 월은 최소 1일부터 12월까지 있으니
    if(month < 1){  // 만약에 월이 1보다 미만이면 연도를 차감(-1)을 하고,
        year --; month = 12;
    }
    if(month > 12){ // 만약에 월이 12보다 초과이면 연도를 증가(1)시킨다
        year ++; month = 1;
    }

    // 날짜 변화에 따른 새로고침(출력함수 재실행)
    calPrint();

    return; // 함수종료.
} // func end