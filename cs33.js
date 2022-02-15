function solution(inputArray) {
    let arr = permutation(inputArray); 
    for (let i = 0; i < arr.length; i++) {
        if(isDifferOne(arr[i]))
            return true 
    }
    return false
}
function permutation (arr){
    let mainArr = [[arr[0]]];
    for (let i = 1; i < arr.length; i++) {
        let galacox = [];
        for (let j = 0; j < mainArr.length; j++) {
            for (let k = 0; k <= mainArr[j].length; k++) {
                let galacox1 = [...mainArr[j]];
                galacox1.splice(k,0,arr[i] );
                galacox.push(galacox1);
            }
        }
        mainArr = galacox;
    }
    return mainArr;
}
function isDifferOne (arr){
    let differency;
    for(let j = 0; j < arr.length-1; j++){
        differency = 0;
        for(let i = 0; i < arr[j].length; i++){
            if(arr[j][i] !== arr[j+1][i])
                differency++;
        }
        if(differency !== 1 )
            return false
    }
    if(differency == 1){
        console.log(arr)
        return true
    }
    else 
        return false
}
