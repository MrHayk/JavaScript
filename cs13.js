// function solution(inputString) {
//     let answer = "";
//     let preAnswer = "";
//     let storage = 1;
//     let j = 0;
//     // let firstOpen = inputString.indexOf("(");
//     // let firstClose = inputString.lastIndexOf(")");
//     "foo(bar(baz))blim(baz)"
//     for(let i = 0; i < inputString.length; i++){
//         if(inputString[i] == "(" && storage%2 == 1){
//             storage ++;
//             j = i;
//             while(inputString[j] !== ")"){
//                 preAnswer += inputString[j+1]
//                 // console.log(j,i);
//                 j++;
//                 i++;
//                 if(inputString[j] == "("  && storage%2 == 1){
//                 answer += reversing(preAnswer);
//                 }
//             }
//         }else{
//             storage = 1;
//             answer += inputString[i]
//         }
//     }
//     answer = answer.replaceAll(')',"");
//     answer = answer.replaceAll('(',"");
//     return answer
// }

// function reversing (arr){
//     let reversed = "";
//     for(let i = arr.length-1; i >= 0;i--){
//         reversed += arr[i];
//     }
//     return reversed
// }
// ete  arajin bacvoxic minchev arajin pakvoxy yngac hatvacum  unenq bacvox pakagic 
// while (string[erkrord bacvoxi index + 1] !== arajin pakvoxin)
// answer += string[erkrord bacvoxi index + 1]
//  
// while (string[arajin bacvox + 1] !== erkrord bacvoxi index)
// answer += string[arajin bacvoxi index + 1])
// }
// 
// ete erkrord pakvoxic heto unenq eli pakagic 
// 
// 
// answer +=
// ete arajin bacvoxic minchev arajin pakvoxy yngac hatvacum chunenq bacvox pakagic
// reversing(ed hatvacy)
function solution(inputString) {

}
"foo(bar(baz))blim(baz)"
function reversing(arr) {
    let reversed = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed += arr[i];
    }
    return reversed
}

console.log(solution("foo(bar)blim"));


let inputString = "foo(bar(baz))blim(baz)"
// "(baz)blim"
let arajiPakvox = inputString.indexOf(")")
let arajiPakvoghiBacvoghy = gtnelArajiPakvogiBacvoghy(inputString, arajiPakvox);
console.log(arajiPakvox, arajiPakvoghiBacvoghy);
function gtnelArajiPakvogiBacvoghy(string, arajiPakvox){
    let i = arajiPakvox;
    while(string[i] !== "(" && i >= 0){
        i--
    }
    return i;
}
let reversible = inputString.substring(arajiPakvoghiBacvoghy, arajiPakvox + 1);
let reversedString = reversing(inputString.substring(arajiPakvoghiBacvoghy + 1, arajiPakvox))
let inputString = inputString.replace(reversible, reversedString);
console.log(inputString, 1);
















/* 
if (ba
    cvox)
    if
        bacvoxic poqra  stringi tarry answer+= tarry
    else 
        function answerFill(bacvox, pakvox, bool){
            
            ete bacvox ic sksac ka  "(" &&  ")"  
                answerFill(bacvox , pakvox )

            function reversing(string)
        }
else
    return string
*/
