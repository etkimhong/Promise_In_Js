//callback hell = situation in javascrip where callbacks are nesed within other callback to the degree where the code is difficult to read.old pattern to handle asyncronous function. use Promisses + async/await to avoid callback hell


// Mock database
const mockDatabase = [
    { id: 1, name: "sok" },
    { id: 2, name: "sao" },
    { id: 3, name: "pisey" }
  ];
  
  // Function to get user info by id
  function getUserById(id, callback) {
    setTimeout(() => {
      const user = mockDatabase.find(user => user.id === id);
      if (user) {
        callback(null, user);
      } else {
        callback(new Error('User not found'));
      }
    }, 2000);
  }
 
  
  // Function to process user data by capitalizing the user name
  function processUserData(user, callback) {
    setTimeout(() => {
        user.name = user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase();
        callback(null, user);
    }, 1500);
  }
  
  // Execute and process callback hell
  getUserById(2, (err, user) => {
    if (err) {
      console.error(err.message);
      } else {
        processUserData(user, (err, processedUser) => {
          if (err) {
          console.error(err.message);
            } else {
            console.log(processedUser);
           }
       });
      }
  });
  

// Mock Database: An array of user objects.
// getUserById(id, callback): This function simulates fetching a user from the database by id. It uses setTimeout to mimic a 2-second delay. 
// If the user is found, it calls the callback with null as the first argument (indicating no error) and the user object as the second argument. 
// If not found, it calls the callback with an error.
// processUserData(user, callback): This function simulates processing user data by capitalizing the user name. 
// It uses setTimeout to mimic a 1.5-second delay. After processing, it calls the callback with null as the first argument and the processed user object as the second argument.
// Execution: The getUserById function is called with a user id and a callback function. If an error occurs (e.g., user not found), it logs the error message. 
// If successful, it proceeds to call processUserData with the retrieved user and another callback function. The processed user data is then logged to the console.