// 매개변수 : parmeter, 매개(중매 매 - 양쪽의 연결)
// 인자값/인수 : 들어갈 인 , 인자값-변수
// 매개변수 ? 함수 호출시 인자값이 변수에 대입되는 변수

// (1) 함수 만들기/정의
    // [1] 매개변수 x , 반환값 x
    function func1 () {console.log('func1 execute');}
    // [2] 매개변수 o , 반환값 x
    function func2 (x,y){console.log(`func2 execute ${x+y}`);}
    // [3] 매개변수 o , 반환값 x / prompt() 등
    function func3 (x,y){
        console.log(`func3 execute`);
        let result = x+y;
        return result;
    }
    // [4] 매개변수 x , 반환값 o
    function func4() {console.log(`func4 execute`); return 10;}
// (2) 함수 호출
    func1() // 인자값도 없고 리턴값도 없는 함수 호출/사용
    func2(1,2) // 인자값이 1과 2가 있고 리턴값은 없는 함수 호출/사용
    func3(10,20) // 인자값이 1과 2가 있고 리턴값은 있는 함수 호출/사용,
    let result = func3(1,2)// 결과를 다음코드에서 사용할 예정이라면 변수에 대입
    let result4 = func4() // 인지값이 없고 리턴값이 있는 함수 호출/사용
