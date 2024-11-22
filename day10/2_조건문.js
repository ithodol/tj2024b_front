/*
    조건문 : 조건 문법
        - 조건의 결과값 : true = 1 / false = 0
        - 삼항연산자 : 간단한 조건문
        1. if 조건문 : 조건문을 표현 가능한 문법
                - 조건에 true/false. 비교연산 또는 관계연산
        
        2. if 형태
            1. if(조건) 참, 거짓
            2. if(조건){ 참일경우코드; 참일경우코드; }
            3. if(조건){참일경우코드;}
                else{거짓일경우코드;}
            4. if(조건){참일경우코드;}
                else if(조건2){참2일경우코드;}
                else if(조건3){참3일경우코드;}
                else if(조건4){참4일경우코드;}
                else{거짓일경우코드;}
            5. if 중첩
                if(조건){
                    if(조건){ }
                    else{ }
                } else{ }
        - 1. 주의할점 : if(조건) {}사이에 ; 넣지 않기
          2. { } 중괄호 잘! 열고 닫기
*/ 

// [1] if(조건) 바로 뒤에 ; 넣지 않기
if(10>3)console.log('1. T > 10>3') // T -> 출력 o
if(10>20)console.log('2 T 10>20') // F -> 출력x
// if(10>20);console.log('3 T 10>20') // F -> 출력 o

//[2] 참일 경우 코드의 명령어가 2개 이상이면 { } 묶기
if(10>20)
    console.log('4-1 10>20');
    console.log('4-2 10>20');

if(10>20){ // if start
    console.log('5-1 10>20');
    console.log('5-2 10>20');
} // if end

if(10>3){
    console.log('6-1 10>3');
    console.log('6-2 10>3');
}
// [3] if ~ else
if(10>3){console.log('7. T 10 > 3');}
else{console.log('7. F 10 > 3');}

// [4] if ~ else if~else if~else
if(10>=20){console.log('8. T1 10>=20');}
else if(10>=15){console.log('8. T2 10>=15');}
else if(10>=10){console.log('8. T3 10>=10');}
else{console.log('8. F 그 외')}

// [5] if 중첩
let 성별 = '남';
let 점수 = 80;

if(성별=='남'){ // 만약 '성별'변수 값이 '남'이면 -- if start
    if(점수 >= 90){console.log('남자우수');} // 만약 성별이 남자이면서 점수가 90점 이상이면 '남자우수'
    else{console.log('남자');}
} // -- if end
else{ // 아니면 -- if strat
    if(점수 >= 90){console.log('여자우수');} // 만약 성별 여자이면서 점수가 90점 이상이면 '여자우수'
    else{console.log('여자');}
} // -- if end
