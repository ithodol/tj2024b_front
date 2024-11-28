/*
    [문제1] 아래 배열을 이욯나 아래 출력 형식으로 구현하기
        1. 영화이름 목록, 영화이름과 영화평점은 같은 인덱스를 사용한다
            - movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설']
        2. 영화 평점 목록, 각 영화별 평점은 10점 만점
            - movieRating = [ 8, 4, 7, 6]
        3. HTML 예시
            히든페이스      ★★★★★★★★☆☆
            위키드          ★★★★☆☆☆☆☆☆
            글래디에이터2   ★★★★★★★☆☆☆
            청설            ★★★★★★☆☆☆☆
        
    [문제2] 6개의 시트/좌석이 존재하는 좌석 상태 출력하기
        1. 좌석은 총 6개 / 빈좌석인지 예약석인지는 임의로 구성
        2. 아래와 같이 좌석을 출력한다.
        3. 빈좌석이면 blue 색상표기, 예약석이면 red로 색상표기
        4. HTML 예시
            ㅁ  ㅁ
            ㅁ  ㅁ
            ㅁ  ㅁ
*/

    // [문제1]
        /* 
        let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설']
        let movieRating = [8,4,7,6]

        let outHTML = '<ol>';
        for(let movieNames = 1; movieNames <= 4 ; movieNames++){
            for(let movieRating = 1; movieRating <= 4; movieRating++){
                
            } console.log(`${movieNames} ${movieRating}`)
        }
        document.write(outHTML);
        */

        let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설']
        let movieRating = [8,4,7,6]
        for( let i = 0; i < movieNames; i++){
            let star = movieNames[i];
        }