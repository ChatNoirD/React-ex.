// Ex 3: Here we have to write a function destroyer that returns values from arguments which ARE included in array too
function destroyer(arr) {

    const vals = Array.from(arguments).slice(1);

    return arr.filter(function(val) {

        return !vals.includes(val);

    });

}
  
destroyer([1, 2, 3, 4, 4, 8], 2, 3);
// Firstly we create an array from arguments, but cutting an from the first argument. Then we use filter method if there are items in arguments which are included in array
// I yes, the function returns this array without ones.