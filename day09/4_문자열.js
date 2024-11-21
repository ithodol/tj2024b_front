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
// 유재석 => 문자(hs 회사에서 유재석을 미리 정의 x)


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