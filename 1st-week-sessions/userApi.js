/*
  Follow step by step instructions to complete these 
  multiple challenges related to arrays.
*/

/*
  This require statement conveniently brings in the entire set of user profile
  data for you from a neighbouring file.
  
  You can imagine that this is your network api call delivering you data
*/
const profiles = require("./userData");

/*
  1.1 Check the type of data returned
  Expected output: [object Array] OR true
  hint: google how to find type of data structures in javascript
*/

function isString (value) {
	return typeof value === 'string' || value instanceof String;
};

// Returns if a value is an array
function isArray (value) {
	return value && typeof value === 'object' && value.constructor === Array;
};

if(isString(profiles)){
	console.log("Data is of String type");
}else if(isArray(profiles)){
	console.log("Data is of Array type");
}

/*
  1.2 Log of the size of the data returned
  Expected output: "We just fetched [x] users" where x represents the actual number
*/

console.log('We just fetched '+profiles.length+' users');

/*
  1.3 Get the first five items from the data set
  Expected output: an array with the first 5 items
*/
console.log(profiles.slice(0,5));

/*
  1.4 Remove the first profile from this data while returning it at the same time
  Expected output: a) user by the name of dânia da mota and b) an array of profiles without dânia da mota 
*/
var firstProfile = profiles.shift();
console.log('----------------------------------');
console.log(profiles);
console.log('----------------------------------');
console.log(firstProfile); 
console.log('----------------------------------');
/*
  1.5 Paginate the api results in sets of variable amounts
  Example: Paginate(profiles, 2, 5)
  Expected output: An array of profiles containing items sliced from page 2 to page 3 containing 5 items
*/
function getProfilePaginatedList(profiles, splitValue){
var paginatedData = [];
  while (profiles.length) {
    paginatedData.push(profiles.splice(0, splitValue));
  }
  return paginatedData;
};
console.log(getProfilePaginatedList(profiles, 5)[2]);
console.dir();
