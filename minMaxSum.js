
function minMaxSum(arr) {

    let asc = arr.sort(function(a, b){return a-b});
    let smallIntegers = asc.slice(0,4);
    let smallTotalSum = 0;
    for(let i in smallIntegers) {
        smallTotalSum += smallIntegers[i];
    }
   let largeIntegers = asc.slice(1,5);
   let largeTotalSum = 0;
   for(let i in largeIntegers) {
       largeTotalSum += largeIntegers[i];
   }

   console.log(smallTotalSum, largeTotalSum);
}

minMaxSum(arr);