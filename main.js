// function sumRange(n){
//     if (n == 1){
//         return 1;
//     }
//     else {
//         return n + sumRange(n - 1);
//     }
// }

// function power(b, x)
// {
//     if (x == 0)
//     {
//         return 1;
//     }
//     else {
//         return b * power(b, x - 1);
//     }
// }

// console.log(power(2, 4))

// function factorial(n)
// {
//     if (n === 1){
//         return 1;
//     }
//     else {
//         return n * factorial(n - 1);
//     }
// }


function fibs(count, current = 0, next = 1, fibSeq = []){
    if (count === 0){
        return fibSeq;
    }
    else 
    {
        fibSeq.push(current);
        return fibs(count - 1, next, current + next, fibSeq);
    }
}

console.log(fibs(8))