// Ex 7: Need to repeat the string from first argument by times from second one

function repeatStringNumTimes(str, num) {

    let result = '';

    if (num < 1) {
        result = '';
    } else if (isNaN(num)) {
        throw 'Invalid expression!'
    } else {
        for (let i = 0; i < num; i++) {
            result += str;
        }
    }

    return result;

  }
  
repeatStringNumTimes("abc", 'frog');

// To solve the task we have to use 'for' cycle to count number of repeats of the string and add it to result. Number is equal to the seond argument.
// Also we have to write check if second argument equals 0 or an empty string - result should return empty string. And if it is a string - function returns error.