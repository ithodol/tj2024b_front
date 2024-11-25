// 입력 : prompt(), 출력 : console.log()
/*
    1. 3개의 점수를 각 입력받아 총점 계산 하여 총점이 90 이상이면 '성공' 아니면 '실패' 출력하시오.
*/
/* 답안
    // 1. [입력/저장]
    let 점수1 = Number(prompt('[1] 점수1 : '));
    let 점수2 = Number(prompt('[1] 점수2 : '));
    let 점수3 = Number(prompt('[1] 점수3 : '));
    // 2. [연산처리]
    let 총점 = 점수1 + 점수2 + 점수3 ;
    // let 논리결과 = 총점 >= 90 ? '성공' : '실패' //삼항연산자
    // 3. [출력]
    if(총점>=90){
        console.log(`[1] 결과 : 성공`)
    }
    else{
        console.log(`[1] 결과 : 실패`)
    }
*/

/*
    2. 2개의 정수를 각 입력받아 더 큰수를 출력 하시오. (단, 동일한 수는 제외)
*/
/*  답안  
    // 1. [입력/저장]
    let 정수1 = Number(prompt('[2] 정수1 : '));
    let 정수2 = Number(prompt('[2] 정수2 : '));
    // 2. [연산처리]

    // 3. [출력]
    if(정수1 > 정수2){
        // 만약에 정수1이 정수2보다 크면
        console.log(`[2]결과 : ${정수1}`)
    }
    else{ // 아니면
        console.log(`[2]결과 : ${정수2}`)
    }

/*
    3. 3개의 정수를 각 입력받아 가장 큰수를 출력 하시오.
*/
    /* 답안
    let 정수1 = Number(prompt('[3] 정수1 : '));
    let 정수2 = Number(prompt('[3] 정수2 : '));
    let 정수3 = Number(prompt('[3] 정수3 : '));
    let max = 정수1 //첫번재값을 가장 큰 값으로 선정
    if(max<정수2){max=정수2;} // 만약 두번째 값이 가장 큰 값보다 크면 가장 큰 값(max)을 두번째 값으로 대입
    if(max<정수3){max=정수3;} // 만약 세번재 값이 가장 큰 값보다 크며 가장 큰 값(max)을 세번째 값으로 대입
        // if vs if ~ else
        // 조건이 다수일 때 if(조건1) if(조건2) if(조건3) vs if(조건1) ~ else if(조건2)~ eles if(조건3)
        // - 다수 조건의 다수 결과 vs 다수 조건의 1개의 결과
        // if if if = 각 if별 1개의 결과 얻기 vs if ~ else if ~ else= 하나의 조건문
    */

/*
    4. 3개의 정수를 각 입력받아 오름차순 또는 내림차순 하여 정렬해서 출력하시오. 
        A   B   C
        7   5   10 => 오름차순 : 5-7-10 / 내림차순 : 10-7-5
        [1. 정렬/비교]                                                      A       B       C
            (오름차순)                                                      10      7       9
            1. A와 B 비교해서 B가 더 작으면 B를 A와B 값 교체 A<--->B          7       10      9   교환O
                if(a<b){}
            2. A와 C 비교해서 C가 더 작으면 C를 A와C 값 교체 A<--->C          7       10      9   교환X
                if(a<c){}
            3. B와 C 비교해서 C가 더 작으면 C를 B와C 값 교체 B<--->c          7       9       10  교환O
                if(b<c){}
            (내림차순) 부등호 반대, 더 크면

        [2. 변수값 교환/swap]
            - 한번에 2개의 연산을 동시에 처리할 수 없다. 무조건 연산은 1개씩 처리한다.
            - 변수는 ** !!무조건!! 1개의 데이터(자료)를 저장함. **
            - 주의할 점 : 
                A = B ; A변수에 B값을 대입하면 기존의 A값은 사라진다
                A = B; B=a; // 컴퓨터는 순차처리 이므로 A값은 이미 사라졌다
            - swap방법
                임시변수 temp 활용
                let temp = A; A=b; B=temp;
*/
/* 답안
    let 정수1 = Number(prompt('[4] 정수1 : '));
    let 정수2 = Number(prompt('[4] 정수2 : '));
    let 정수3 = Number(prompt('[4] 정수3 : '));

    if(정수1 < 정수2){      // > : 오름차순 , < : 내림차순
        // 만약에 뒤에 있는 값이 더 작으면 스왑/교체
        let temp = 정수1; // A값을 temp 대입
        정수1 = 정수2; // B값을 A에 대입
        정수2 = temp; // temp값을 B에 대입
        // A와 B 변수간의 값은 교체되었다.
    }
    if(정수 < 정수3){
        let temp = 정수1;
        정수1 = 정수3;
        정수3 - temp;
    }
    if(정수2 < 정수3){
        let temp = 정수2;
        정수2 = 정수3;
        정수3 = temp;
    }
    console.log(`[4] 결과 : ${정수1} ${정수2} ${정수3}`)
        // - 다수의 데이터를 비교할 때는 if가 많아짐 --> "반복문"활용
*/



/*
    5. 1개의 점수를 입력받아 90점 이상이면 'A등급' 80점이상이면 'B등급' 70점이상 'C등급' 그외 '재시험' 출력하시오.
*/
/* 답안
    let 점수 = Number(prompt('[5] 점수 : '))

    if(점수 >= 90){console.log('[5] 결과 : A등급');}
    else if(점수 >= 80){console.log('[5] 결과 : B등급');}
    else if(점수 >= 70){console.log('[5] 결과 : C등급');}
    else{console.log('[5] 결과 : 재시험');}
*/




/*
    6. 아이디와 비밀번호 입력받아 아이디가 'admin' 이고 비밀번호가 '1234' 이면 '로그인 성공' 아니면 '로그인실패' 출력하시오.
*/
/* 답안
    let 아이디 = prompt('[6] 아이디 : ')
    let 비밀번호 = (prompt('[6] 비밀번호 : ')

    if(아이디=='admin' && 비밀번호=='1234'){
        console.log('[6] 로그인성공');
    }else{
        console.log('[6] 로그인실패');
    }
*/




/*
    7. 과일 배열 선언하고 let fruitList = [ '바나나' , '사과' ]
    하나의 과일명을 입력받아 fruitList 에 존재하는 과일이면 '이미 존재하는 과일입니다' 출력 
    아니면 배열에 입력받은 과일명 저장 하고 현재 배열을 출력하시오.
*/
    let fruitList = ['바나나', '사과']
    let 과일명 = prompt('[7] 과일명 ')
    let 존재여부 = fruitList.indexOf(과일명)
    // .indexOf('찾을값') : 지정한 찾을 값이 배열 내 존재하면 찾은 인덱스 반환, 없으면 -1 반환
    // .push(새로운 값) : 지정한 새로운 값을 배열내 마지막 인덱스 요소의 추가
    
    // 만약에 존재여부가 -1이 아니면(존재하지 않으면) 배열내 입력받은 과일명 추가
    if(존재여부==-1){fruitList.push(과일명);}
    // 아니면(존재하면)
    else{console.log('[7] 이미 존재하는 과일입니다.');}



/*
    8. 주민등록번호를 입력받아서 성별이 남자이면 색상변수에 'blue' 을 여자이면 'red' 을 대입 하고 색상변수 출력하시오.
*/





/*
    9. 가위바위보 게임 
    조건1 : 가위 0 , 바위 1 , 보 2 입니다.
    조건2 : 플레이어 2 명 입니다.
    실행조건 : 각 플레이어가 가위바위보 중에 한번씩 입력받기 
    출력조건 : 
    플레이어1 이겼을때 '플레이어1 승리' 출력 하시오.
    플레이어2 이겼을때 '플레이어2 승리' 출력 하시오.
    비겼을경우 '무승부' 출력 하시오.
*/




/*
    10. 좌석 3개의 상태를 가지는 배열 선언하고 let sheetList = [ 'O' , 'X' , 'O' ]
        하나의 좌석 순서번호를 입력받아 빈좌석 이면 '예약성공' 아니면 '예약불가' 출력하시오.
        빈좌석 : 'X'  사용중인좌석 : 'O'
*/




/*
    11 : 주차장 차량 검색대
        조건1 : let carArray = [ '250어7142' , '142가7415' ]  : 차량번호
        조건2 : let locationArray = [ 'A1' , 'B3' ]           : 주차위치
        조건3 : carArray, locationArray 인덱스가 같은 정보의 차량
        조건4 : 차량번호 입력받아 내 차량 위치 찾기 
*/
