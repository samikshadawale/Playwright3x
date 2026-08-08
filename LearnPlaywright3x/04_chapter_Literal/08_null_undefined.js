//null vs undefined
//In JavaScript, both `null` and `undefined` represent the absence of a value, but they are used in different contexts and have different meanings.

/*
  SIMPLE DEFINITIONS:

  undefined  ->  A variable exists, but it has not been assigned any value yet.
                 JavaScript itself sets this automatically.

  null       ->  A variable exists, but the developer explicitly assigns 
                "no value" or "empty".
                 It is intentional absence of any value.
*/
//var x; // x is declared but not assigned a value, so it is undefined
//console.log(x); // Output: undefined

//null is an assignment value. It can be assigned to a variable as a representation of no value.
let y = null; // y is declared and explicitly assigned the value null
console.log(y); // Output: null

let profilePicture = null; // profilePicture is declared and explicitly assigned the value null
console.log(profilePicture); // Output: null and type object


//undefined is the default value for uninitialized variables, function parameters that are not provided, and missing properties of objects. It indicates that a variable has been declared but has not yet been assigned a value.
let a; // a is declared but not assigned a value
console.log(a); // Output: undefined

// --------------------------------------------------------
// 3. Key Differences (Summary Table)
// --------------------------------------------------------

/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | ==  comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/
