let score = [12,24,10,24];

function breakingRecords(score) {
    let min = [score[0]];
    let max = [score[0]];
    let minCount = 0;
    let maxCount = 0;

    for(i = 1; i < score.length; i++) {
        if(score[i] <= min[min.length-1]) {
            if(min.includes(score[i]) === false) {
                minCount++;
            }
            min.push(score[i]);
        }
        else if(score[i] >= max[max.length-1]) {
            if(max.includes(score[i]) === false){
                maxCount++;
            }
            max.push(score[i]);
        }
    }
    return[maxCount,minCount];
}

let breakingTheRecords = breakingRecords(score);
console.log(breakingTheRecords);