let numberChart = [[1,2,3],[4,5,6],[7,8,9]];

for(let i = 0; i < numberChart.length; i++) {
    for(let j = 0; j < numberChart[i].length; j++) {
        if(j == 0){
            console.log(numberChart[i][i]);
        }
    }
}