// [1] 객체 선언
let 객체변수 = { }

// [2] 객체 호출
console.log(객체변수);

// [3] 객체 속성 구성   { 속성명 : 값 }
let 객체변수2 = { 속성1 : 10, 속성2 : '안녕' };
console.log(객체변수2);

// [4] 객체 속성값 호출
console.log(객체변수2.속성1);
console.log(객체변수2.속성2);

// [5] 객체 속성값 
객체변수2.속성3 = true;
console.log(객체변수2.속성3);

// [6] 객체 속성 값 수정
객체변수2.속성1 = 20;
console.log(객체변수2.속성1);

// [7] 객체 속성 값 삭제
delete 객체변수2.속성3;
console.log(객체변수2);

// [8] 객체내 다양한 속성값들
let 객체변수3 = {
    속성1 : 10, 속성2 : 'Hi', 속성3 : false,
    속성4 : [10,20,30,40],
    속성5 : function(){},
    속성6 : {속성7 : 10, 속성8 : 'Bye'}
};
console.log(객체변수3);
console.log(객체변수3.속성1);
console.log(객체변수3.속성4);
console.log(객체변수3.속성4[2]); // 배열내 배열요소 참조할 땐 [인덱스번호]
객체변수3.속성5(); //객체네 함수 호출
console.log(객체변수3.속성6);
console.log(객체변수3.속성6.속성8) // 객체를 참조할 땐 온점(.)
    // 객체내 속성들의 데이터를 알 수 없을 때는?
    // = console.log();를 이용해 객체 상태를 확인하면서 개발하자.
