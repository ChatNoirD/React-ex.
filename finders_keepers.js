// Ex 9: In this task we have to find an elemnt of array from first argument that fitts the conditions from the second argument
function findElement(arr, func) {

    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }

    return undefined;

}
  
findElement([1, 3, 4, 76], num => num % 2 === 0);
// To solve a task we have to go through array from a first argument by 'for' cycle which checks for elements o the array wich are statisfying conditions of
// the function from the second argument. If it does - function returns the element, if not - it's undefined.