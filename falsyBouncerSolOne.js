/*
Basic Algorithm Scripting: Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

*/

//Solution One
function bouncer(arr) {                             //1
  let newArray = [];                                //2
  for (var i = 0; i < arr.length; i++) {            //3
    if (arr[i]) newArray.push(arr[i]);              //4
  }
  return newArray;                                  //5
}

console.log(bouncer([7, "ate", "", false, 9]));




//Notes
/*
//1
Function which takes in an array as an argument

//2
varialbe defined as an empty array (can also be thhought of as a container to store values in at a later stage)

//3
for loop which has three parameters:

[initialization];     = 'var i = 0;'          => The loop will start at index 0
[condition];          = 'i < arr.length;'     => The length of arr is 5
[final-expression]    = 'i++'                 => The loop will increment till the above condition is met

The above loop will run for the length of arr - 1 || arr < length || up until index 4 which is 5 iterations



//4
This statement checks if all values that are being iterated over in the 'arr' array is Truthy
If they are truthy then push all elements which meets the criteria to the newArray variable. (Which is an empty array.)

***Side note - If the statement should check for falsy values then replace the 'arr[i]' inside the if brackets to '!arr[i]'

The algorithm will then return all falsy values
[ '', false ]***

//5
will return the modified array with all truthy values
[ 7, 'ate', 9 ]

*/

