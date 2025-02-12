

const dynamicKnapsack = (weightCap, weights, values) => {
    //initialize the matrix
    let matrix = [];
    // put the number of rows and columns in the matrix 
    for(let i = 0 ; i <= values.length; i ++){
        let row = [];
        for (let j = 0; j <= weightCap; j ++ ){
            // defaujlt value of 0 pushed to each cell 
            row.push(0);
        }
        matrix.push(row);
    };

    for( let i = 0; i < matrix.length; i++){
        if(i === 0){
            // if the value is 0 we basically continue
            continue;
        }

        //for the particular item we are considering in the matrix
        let itemWeight = weights[i - 1];
        let value = values[i - 1];

        // now to iterate through the columns 
        for(let j = 0 ; j < matrix[i].length ; j ++){
            // define the weight limit for that column
            let weightLimit = j;

            if(itemWeight <= weightLimit){
                let previousBestValue = matrix[i - 1][weightLimit - itemWeight];
                let inclusionValue = value + previousBestValue;

                // define the circumstance where you dont include the value 
                let declusionValue = matrix[i - 1][j];
                matrix[i][j] = Math.max(inclusionValue, declusionValue);
            }else{
                // this is the circumstance where the current item weight is greater than the 
                // weight limit as declared by the current column 
                // we just return the previous best weight 
                matrix[i][j] = matrix[i - 1][j];
            }
        }

    }

    return matrix[matrix.length -1][weightCap];

};


//Use this to test your function:
const weightCap = 150
const weights = [31, 10, 20, 19, 4, 3, 6, 15, 3, 5, 6, 7, 8]
const values = [70, 20, 39, 37, 7, 5, 10, 6, 7, 8, 9, 10, 11]
console.log(dynamicKnapsack(weightCap, weights, values))



// Example usage:
const weightCap2 = 50;
const weights2 = [10, 20, 30];
const values2 = [60, 100, 120];
const maxValue2 = dynamicKnapsack(weightCap2, weights2, values2);
console.log(maxValue2); // Output: 220