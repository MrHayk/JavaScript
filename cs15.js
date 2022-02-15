function solution(picture) {
    let answer = []
        for(let i = 0; i < picture.length+2; i++){
            for(let j = 0; j < picture.length+2; j++){
                if(i == 0 || i == picture.length){
                    answer[i].push("*")
                }
            }
        }
    return answer 
    }
    console.log(solution(["abc",
    "ded"]));