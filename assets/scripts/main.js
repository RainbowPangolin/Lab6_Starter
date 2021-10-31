// main.js

// Here is where the recipes that you will fetch.
// Feel free to add your own here for part 2, if they are local files simply add their path as a string.
const recipes = [
  'https://introweb.tech/assets/json/ghostCookies.json',
  'https://introweb.tech/assets/json/birthdayCake.json',
  'https://introweb.tech/assets/json/chocolateChip.json'
];

// Once all of the recipes that were specified above have been fetched, their
// data will be added to this object below. You may use whatever you like for the
// keys as long as it's unique, one suggestion might but the URL itself
const recipeData = {}

window.addEventListener('DOMContentLoaded', init);

// This is the first function to be called, so when you are tracing your code start here.
async function init() {
  
  //recipeData[recipes[0]] = fetch(recipes[0]).then(response => response.json());

  // //console.log("recipeData " + recipeData[recipes[0]]);

  // fetch the recipes and wait for them to load
  let fetchSuccessful = await fetchRecipes();

  setTimeout(() => {console.log( "after fetchrecipes " + Object.keys(recipeData).length)}, 600);
  for(let i = 0; i < recipes.length; i++){
    setTimeout(() => {console.log(recipeData[recipes[i]])}, 600);
  }
  

  // if they didn't successfully load, quit the function
  if (!fetchSuccessful) {
    console.log('Recipe fetch unsuccessful');
    return;
  };
  // Add the first three recipe cards to the page

  //Debug for seeing recipeData fetched
  console.log(recipeData)
  //setTimeout(() => {console.log(JSON.stringify(recipeData[recipes[0]]))}, 500);
  //await console.log(JSON.stringify(recipeData[recipes[0]]));
  console.log("recipeData " + recipeData);


  //console.log("recipeData")
  
  createRecipeCards();
  // Make the "Show more" button functional
  bindShowMore();
}

async function fetchRecipes() {
  return new Promise((resolve, reject) => {
    // This function is called for you up above
    // From this function, you are going to fetch each of the recipes in the 'recipes' array above.
    // Once you have that data, store it in the 'recipeData' object. You can use whatever you like
    // for the keys. Once everything in the array has been successfully fetched, call the resolve(true)
    // callback function to resolve this promise. If there's any error fetching any of the items, call
    // the reject(false) function.
    let fetchGood;
    for(let i = 0; i < recipes.length; i++){
      //console.log(recipes[i].slice(34, -5))
      //recipeData[recipes[i]] = 
      fetch(recipes[i])
      .then(response => response.json())
      .then(response => {
        //console.log(jsondata);
        recipeData[recipes[i]] = response;
      })
      .then( response => {
        if ((i == recipes.length - 1) && (Object.keys(recipeData).length == recipes.length)) {
          resolve(true);
        }
        else if (i == recipes.length){
          //console.log(Object.keys(recipeData));
          reject(false);
        }
        
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        reject(false);
      });
    }


    



    // For part 2 - note that you can fetch local files as well, so store any JSON files you'd like to fetch
    // in the recipes folder and fetch them from there. You'll need to add their paths to the recipes array.

    // Part 1 Expose - TODO
  });
}

function createRecipeCards() {
  // This function is called for you up above.
  // From within this function you can access the recipe data from the JSON 
  // files with the recipeData Object above. Make sure you only display the 
  // three recipes we give you, you'll use the bindShowMore() function to
  // show any others you've added when the user clicks on the "Show more" button.

  for (const data in recipeData) {
      //console.log(`${data}: ${recipeData[data]}`);
    const newCard = document.createElement("recipe-card");
    newCard.data = data;
    const mainElement = document.getElementsByTagName("main")[0];
    mainElement.appendChild(newCard);
  }
  // Part 1 Expose - TODO
}

function bindShowMore() {
  // This function is also called for you up above.
  // Use this to add the event listener to the "Show more" button, from within 
  // that listener you can then create recipe cards for the rest of the .json files
  // that were fetched. You should fetch every recipe in the beginning, whether you
  // display it or not, so you don't need to fetch them again. Simply access them
  // in the recipeData object where you stored them/

  // Part 2 Explore - TODO
}