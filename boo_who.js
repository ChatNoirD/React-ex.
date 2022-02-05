// Ex 10: Need to write a function that returns true if an argument is a boolean
function booWho(bool) {

    if (typeof bool === 'boolean') {
        return true;
    }

    return false;

  }
  
booWho(null);
// To solve the task we have to write a check if the argument is strickly equal to a boolean. Then function just returns true or false.