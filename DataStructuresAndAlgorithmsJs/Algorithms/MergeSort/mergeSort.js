const mergeSort = (startArray) => {
    const length = startArray.length;
    if (length === 1) {
      return startArray;
    }
    
    const mid = Math.floor(length / 2);
    const leftArray = startArray.slice(0, mid);
    const rightArray = startArray.slice(mid, length);
  
    return merge(mergeSort(leftArray), mergeSort(rightArray))
  }
  
  const merge = (leftArray, rightArray) => {
    const sortedArray = [];
    while(leftArray.length > 0 && rightArray.length > 0){
      if(leftArray[0] < rightArray[0]){
        sortedArray.push(leftArray[0]);
        leftArray.shift();
      }else{
        sortedArray.push(rightArray[0]);
        rightArray.shift();
      }
    };
  // the concatenation is important as what happens is that the while loop
  // runs only as much as both arrays have some values . so when one array still has values 
  // which will  generally occur then we concat them at the end of the array 
  
    return sortedArray.concat(leftArray).concat(rightArray);
  }
  
  
  const inputArr = [3, 5, 2, 90, 4, 7];
  
  console.log(mergeSort(inputArr));
  
  module.exports = {
    mergeSort
  };