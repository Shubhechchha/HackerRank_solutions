const arr = [1,1,0,-1,-1];

function plusMinus(arr) {
 
  let n = 0;
  let p = 0;
  let z = 0;

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < 0)
            n++;
         else if (arr[i] == 0)
             z++;
          else 
             p++;
    }
 
    let positiveRatio = p / arr.length;
    let negativeRatio = n / arr.length;
    let zeroRatio = z / arr.length;
    
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}

plusMinus(arr);
