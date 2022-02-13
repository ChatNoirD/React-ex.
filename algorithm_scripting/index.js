// Ex 5: Here we have to convert a string from an argument to a low case string, matched by dashes
function spinalCase(str) {

    let regex = /\s+|_+/g;

    return str.replace(regex, "-").toLowerCase();

}
  
spinalCase('This Is Spinal Tap');
// Firstly we have to create "regex" regular expression which sellects all spaces. After by using "replace" method we convert our string with regex and needed dash between
// words and also write "toLowerCase" method for a string to make all letters in low case.