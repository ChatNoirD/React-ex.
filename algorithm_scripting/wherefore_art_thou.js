// Ex 4: Here we have to write a function that goes through array of objects and returns objects which have matching with name and value from second argument
function whatIsInAName(collection, source) {

    let objKeys = Object.keys(source);

    collection.filter(function(obj) {
        for (let i = 0; i < objKeys.length; i++) {
            if (!obj.hasOwnProperty(objKeys[i]) || obj[objKeys[i]] !== source[objKeys[i]]) {
            return false;
            }
        }
        return true;
    });

}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// Firstly we have to create a variable and write keys from the second argument in it. After we use "filter" method through all objects in this variable and
// using "if" we have to check if the array doesn't have any of keys from first argument. If not, functhion returns false, i it does - 
// function returns true and write matched keys to result.