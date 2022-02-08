// Ex 1 Write the function to calculate the summary of all values between elements in array
function sumAll(arr) {

    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);
    let sum = 0;

    for(let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;

}
  
sumAll([1, 4]);

// To solve the task we have to create two variables woth maximum and minimum values pf elements in array. Create the variable or summary and go through an array counting ala
// values and add it to summary. The function returns summary.