// Ex 8: If a string from first argument is longer then number from the second one - the string must be cutted with "..." at the ending
function truncateString(str, num) {

    return str.length > num? str.slice(0, num) + '...': str;

}
  
truncateString("A-tisket a-tasket A green and yellow basket", 8);
// Here we must use ternary operator that checks if the string is longer than a number from the second argument or not. If yes - operator must return string with length
// which is equal to the number with '...' ending. If not - just returns the string.