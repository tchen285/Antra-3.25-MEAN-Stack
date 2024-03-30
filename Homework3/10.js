// Write a JavaScript function which returns the n rows by n columns identity matrix. 

function createIdentityMatrix(n) {
    let matrix = [];

    for (let i = 0; i < n; i++) {
        let row = [];

        for (let j = 0; j < n; j++) {
            if (j === i) {
                row.push(1);
            } else {
                row.push(0);
            }
        }

        matrix.push(row);
    }

    return matrix;
}

const n = 5;
console.log(createIdentityMatrix(n));