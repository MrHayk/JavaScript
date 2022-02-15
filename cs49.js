console.log("encoded line is -->", solution("aabbbccckjjjjjttttt"))

function solution(s) {
    let answer = "";
    let storage = 0;
    let j = 0;
    let char;
    for(let i = 0; i < s.length; i++){
        char = s[i];
        while(s[j] == char){
            storage++
            j++;
            i++;
        }
        i--;
        if(storage > 1)
            answer += storage + char;
        else
            answer += char;
        storage = 0;
    }
    return answer
}
