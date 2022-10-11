/******************************************************************************\
	Task 1: `counterMaker`
\******************************************************************************/
/****** INSTRUCTIONS TASK 1 ******/
/* 
 * Study the code below for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
*/

// counter1 code
function counterMaker() {
    let count = 0;
    return function counter() {
      count++;
    }
  }
  
  const counter1 = counterMaker();
  
  // counter2 code
  let count = 0;
  
  function counter2() {
    return count++;
  }
  
  
  /******************************************************************************\
      Task 2: Get Motivated
  \******************************************************************************/
  
  /****** INSTRUCTIONS TASK 2 ******/
  /* Inside the motivation function create another function called message that
  will return 'You're doing awesome, keep it up firstname lastname.' */
  
  function motivation(firstname, lastname) {
  
    var welcomeText = 'You\'re doing awesome, keep it up ';
  
    // code message function here.
  
  
    //Uncommment this to return the value of your invoked message function
    //return message();
  
  }
  
  motivation('Mohamed', 'Ali'); // 'You're doing awesome keep it up Mohamed Ali.
  
  
  /******************************************************************************\
   Task 3: Find Your Friends
   \******************************************************************************/
  
  /****** INSTRUCTIONS PROBLEM 3 ******/
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