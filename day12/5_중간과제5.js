/*
    [문제1] 아래 배열을 이용한 아래 출력 형식으로 구현하기
        1. 영화이름 목록, 영화이름과 영화평점은 같은 인덱스를 사용한다
            - movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설']
        2. 영화 평점 목록, 각 영화별 평점은 10점 만점
            - movieRating = [ 8, 4, 7, 6]
        3. HTML 예시
            히든페이스      ★★★★★★★★☆☆
            위키드          ★★★★☆☆☆☆☆☆
            글래디에이터2   ★★★★★★★☆☆☆
            청설            ★★★★★★☆☆☆☆
    
*/

let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설']
let movieRating = [ 8, 4, 7, 6]

let html = ''
for(let index = 0; index <= movieNames.length -1; index++){

    html += `<div>${movieNames[index]}`

    let ratinghtml = ''
    for(let rating = 1; rating <= 10; rating++){
        if(rating <= movieRating[index]){html += `★`}
        else{ratinghtml += `☆`}
    }

    html += `${ratinghtml}</div>`

}
document.write(html);






/*
[문제2] 6개의 시트/좌석이 존재하는 좌석 상태 출력하기
1. 좌석은 총 6개 / 빈좌석인지 예약석인지는 임의로 구성
2. 아래와 같이 좌석을 출력한다.
3. 빈좌석이면 blue 색상표기, 예약석이면 red로 색상표기
4. HTML 예시
    ㅁ  ㅁ
    ㅁ  ㅁ
    ㅁ  ㅁ
*/


let 좌석 = [1,0,
            1,0,
            1,0]

let outhtml = `<div>`

for(let index = 0; index <= 좌석.length -1; index++){
    if(좌석[index] == 0) {
        outhtml += `<span style="color:blue">빈좌석<br/></span>`
    }else{
        outhtml += `<span style="color:red">예약석</span>`
    }
}
outhtml += `</div>`
document.write(outhtml);
