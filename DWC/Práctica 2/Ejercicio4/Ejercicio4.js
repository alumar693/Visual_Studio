let numericData = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let numericDataTraspuesta = new Array(numericData[0].length);

for (let j = 0; j < numericDataTraspuesta.length; j++) {
    numericDataTraspuesta[j] = new Array(numericData.length);
}

for (let i = 0; i < numericData.length; i++) {
    for (let j = 0; j < numericData[i].length; j++) {
        numericDataTraspuesta[j][i] = numericData[i][j];
    }
}

for (let i = 0; i < numericDataTraspuesta.length; i++) {
    for (let j = 0; j < numericDataTraspuesta[i].length; j++) {
        console.log(numericDataTraspuesta[i][j]);
    }
}
