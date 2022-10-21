
  
  /******************************************************************************\
   Task: Find Your Friends
   \******************************************************************************/
  
  /****** INSTRUCTIONS ******/
  /* Here we are given three arrays: an array of friends, an array of second-level
  friends (friends of friends), and an array of all users. These arrays may share
  users. Write a function that takes in our existing friends and returns
  a function that will tell us if a given user is not already a friend. */
  
  var friends = ["Ahmed", "Khadijo", "Farah"];
  var secondLevelFriends = ["Mahad", "Farah", "Mohamed"];
  var allUsers = ["Ahmed", "Khadijo", "Farah", "Mahad", "Mohamed", "Bashir", "Ali"];
  
  function findPotentialFriends(existingFriends) {
  
  }
  
  var isNotAFriend = findPotentialFriends( friends );
  // isNotAFriend(allUsers[0]); // false
  // isNotAFriend(secondLevelFriends[2]); // true
  
  
  
  /* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */
  
  
  // ==== Create a counter function ====
  const counter = () => {
      // Return a function that when invoked increments and returns a counter variable.
    };
    // Example usage: const newCounter = counter();
    // newCounter(); // 1
    // newCounter(); // 2
    
    // ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
    const counterFactory = () => {
      // Return an object that has two methods called `increment` and `decrement`.
      // `increment` should increment a counter variable in closure scope and return it.
      // `decrement` should decrement the counter variable and return it.
    };