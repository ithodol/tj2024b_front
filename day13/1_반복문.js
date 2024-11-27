/*
    - 학생들의 점수를 출력하는 구현
        1. 학생이름배열
            let nameArray = ['유재석', '강호동', '신동엽']
        2. 학생점수배열
            let score = [92, 86, 72]
        3. 아래와 같이 출력 / 100점 만점이라고 했을 때 ●표기, 나머지 점수 ○표기
             이름                   점수
            유재석      ●●●●●●●●●●●●●●●●●●●●●●●●●○○○○
            강호동      ●●●●●●●●●●●●●●●●●●○○○○○○○○○○○
            신동엽      ●●●●●●●●●●●●●○○○○○○○○○○○○○○○○
    
*/  
    // 입력x / 저장o
    // (1) 지문에서 주어진 자료 준비
    let nameArray = ['유재석', '강호동', '신동엽']
    let scores = [92, 86, 72]
    // (2) 처리
        // 배열내 이름/요소들을 순차적으로 출력 => 배열 순회

        // * 출력할 HTML 구성
        let outHTML = '<div><span>이름</span></div>' // '이름'은 배열내 존재하지 않으므로 미리 구성
        // 1. nameArray 배열 순회 (배열내 인덱스는 항상 0부터 시작)
            for(let index = 0; index <= nameArray.length-1; index++){ // index는 0부터 마지막인덱스까지 1씩 증가
        // 2. 이름 출력 / index번째의 요소를 구성
                // console.log(nameArray[index]); (확인용)
        // 3. index 번재의 요소를 HTML(문자열) 구성
                outHTML += `<div><span>${nameArray[index]}</span>` // 변수 +=값, 누적합계, 변수에 기존값에 새로값과 연산 결과를 변수에 대입 , 변수 = 변수 + 값 
        // 4. 점수출력 / 현재 index번째의 점수 출력
                // console.log(scores[index]);  (확인용)
        // 5. 점수는 1부터 최대 점수 100까지 반복
                let pointHTML = ``; // 점수를 도형을 구성한 문자열을 저장하는 변수
                for(let point = 1; point <= 100; point++){
                    if(point <= scores[index]) {outHTML += `●`} // 만약에 점수가 index번째 점수 이하이면 ●
                    else{pointHTML += `○`} // 내 점수보다 커지면  ○
                    // console.log(pointHTML); (확인용)
                }
        // 6. 구성한 점수html을 이름과 연결하기
                outHTML += `<span>${pointHTML}</span></div>`
                // console.log(outHTML); (확인용)
            }
    //(3) 출력
    document.write(outHTML)
        