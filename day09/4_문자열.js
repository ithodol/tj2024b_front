/*
    문자열 처리 방법(기능이 없는 문자 그 자체)
        1. ' '
        2. " "
        3. ` `
    키워드 (문자인데 기능이 있는 문자들)
        let
        const
        console.log()
*/
// console.log(유재석) // 유재석 is not defined
// console.log => 문자
// 유재석 => 문자(js 회사에서 유재석을 미리 정의 x)


// [1] 문자열 처리
console.log('유재석1')
console.log("유재석2")
console.log(`유재석3`)

// [2] '작은따옴표', "큰따옴표" 출력
console.log("유재석'반장'")
console.log('유재석"반장"')
console.log(`유재석'반장',"반장"`)

// [3] 이스케이프/제어문자 , 백슬러시(원화기호)
    // 1. \n : console의 한줄 내림(줄바꿈)
    // 2. \" : "한개 출력  ,  \"\" 
    // 3. \' : '한개 출력  ,  \'\'
    // 4. \\ : \한개 출력  ,  \\\\
    // 5. \t : 탭(들여쓰기)
    console.log( '유재석\n \'반장\'')
    console.log( '유재석\n강호동' )
    console.log( '유재석\"강호동' )
    console.log( '유재석\'강호동' )
    console.log( '유재석\\강호동' ) 
    console.log( '유재석\t강호동' ) 

// [4] 문자열 연결, (`백틱) 탬플릿
console.log('유재석' + '강호동') // '문자A' + '문자B' => '문자A문자B' 하나의 문자가 됨
console.log('유재석' + 40) // '문자A' + 40 => 유재석40
console.log('40' + '100')  // '숫자1' + '숫자2' => 40100
let age = 40;
console.log('유재석' + age) // '문자A' + 변수명 => 유재석40
console.log(`유재석${age}강호동`) // `문자A${js코드}문자B)`
console.log(`평균 : ${100+50}`) // 평균 : 150
// 방법1 : `문자 그 자체 ${js코드} 문자 그 자체`
// 방법2 : `문자 그 자체` + `문자 그 자체`
    // JS 학습 목적 : HTML 조작/제어/이벤트
    // HTML 변수X, 연산X, 배열X, 타입X --> JS에서 HTML작성시 JS코드와 합쳐서 작성할 수 있다
    // 둘이 합친 게 메타에서 만든 리액트 
let 직원명1 = '유재석'
let 직원명2 = '강호동'
let nameHTML = `<ol> <li>${직원명1}</li> <li>${직원명2}</li> </ol>`
document.write(nameHTML) // document(html).write() : 현재 HTML에 출력하는 함수

// ex) 입력받은 데이터를 html 출력하시오.
    // prompt('알람메세지'), 반환값 : 입력받은 값 1개
let 결과2 = prompt('[알람내용] 데이터를 입력해주세요')
// prompt 함수로부터 입력받은 값을 아래 코드에서 재사용하고 싶다.
console.log(결과2)
let inputHTML = `<h3> 입력받은 데이터 : ${결과2} </h3>`
document.write(inputHTML)

let 결과1 = 10+5 // 반환값 : 두 값을 더한 값 1개
// 10 + 5 의 결과 15를 아래 코드에서 재사용하고 싶다 => 변수 만들기
console.log(결과1)


// ex) 2명의 사원의 이름을 입력받아서 아래와 같이 HTML에 (table)형식으로 출력하십시오.

// 이유 : HTML은 연산X, 저장X 등 없으므로 텍스트 그 자체임
// JS : 새로운 값을 입력받아서 연산처리, 가공 가능
// 순서도(알고리즘), 어떠한 작업의 순서/절차
    // 1. 1명의 사원이름을 입력받는다                           prompt(), 반환값 : 입력받은 값
    // 2. 입력받은 사원 이름을 변수에 저장한다                    let 사원1 = prompt()
    // 3. 1명의 사원 이름을 입력받는다                          prompt(), 반환값 : 입력받은 값
    // 4. 입력받은 사원이름을 변수에 저장한다                     let 사원2 = prompt()
    // 5. html형식의 문자로 출력할 변수와 같이 구성한다           let tableHTML = `<table>~~</table>`     
    // 6. 구성된 html형식의 문자를 html문서에 출력한다            document.write(), 반환값 : x
    // - 변수를 사용하는 이유 : 다음 코드에서 사용하려고.


let 사원1 = prompt('사원명1 입력해주세요'); //[1], [2] prompt()함수를 사용하여 입력받은 값을 변수에 대입
let 사원2 = prompt('사원명2 입력해주세요'); //[3], [4] prompt()함수를 사용하여 입력받은 값을 변수에 대입
let 출력할내용 = `<table>
                    <tr>
                        <th>번호</th>
                        <th>사원명</th>
                    </tr>
                    <tr>
                        <td>1</td> <td>${사원1}</td>
                    </tr>
                    <tr>
                        <td>2</td> <td>${사원2}</td>
                    </tr>
                </table>`
document.write(출력할내용)