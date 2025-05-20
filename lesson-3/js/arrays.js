// const output = document.querySelector('body p:nth-of-type(2)');
const output = document.querySelector('ul');

/* STEP 1: Creating an array
When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */
let myArray = ["string", true, 100, [5, "hello"]];
output.textContent = myArray;
/* STEP 2: Reading and changing array elements
You can refer to a particular element in an array with it's index number */
output.textContent = `The first element of the array inside myArray is ${myArray[3][0]}`;
// You can also change a particular element
myArray[1] = false;
// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it
myArray[3][1] = "goodbye";
/* STEP 3: Determining array length
Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */
let totalThingsInArray = myArray.length + myArray[3].length;
// output.textContent = `There are ${myArray.length} elements in myArray.`;
output.textContent = `There are a total of ${totalThingsInArray} elements in myArray.`;
output.textContent = "";
// In particular, looping through arrays
for (let i = 0; i < myArray.length; i ++) {
    let listItem = document.createElement("li");
    output.append(listItem);
    // check if element is an array
    if (Array.isArray(myArray[i])) {
        // We need a nested UL
        let childList = document.createElement("ul");
        listItem.append(childList);
        // we have an array, so we need to loop inside that array
        for (let j = 0; j < myArray[i].length; j ++) {
            let childItem = document.createElement("li");
            childList.append(childItem);
            childItem.textContent = `${myArray[i][j]}`;
        };  
    } else {
        listItem.textContent = `${myArray[i]}`;
    };
};
/* STEP 4: Convert a string to an array
If there is a common character that can act as a delimiter in a string, we can use this character to create an array */
let orig6 = `Toronto Maple Leafs, Chicago Black Hawks, Detroit Red Wings, Boston Bruins, Montreal Canadiens, New York Rangers`;
let orig6Array = orig6.split(", ");
console.log(orig6Array);
// Output one of the array items
console.log(orig6Array[3]);
// Output the last element of the array
console.log(`Last array element is ${orig6Array[orig6Array.length - 1]}`);

/* STEP 5: Convert an array back to a string
Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not */
// let orig6String = orig6Array.toString();
let orig6String = orig6Array.join(" | ");
console.log(orig6String);
/* STEP 6: Adding and removing items from an array
Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */

// Adding one or more items to an array with push()
orig6Array.push("Buffalo Sabres");
// If you would like to capture how many elements are in the array after you have edited it, then…
let orig6Length = orig6Array.push("Philadelphia Flyers");
// Removing an item from an array with pop()
// orig6Array.pop();
// pop() returns the item that was removed, rather than the length of the updated array, so…
let removedElement = orig6Array.pop();
// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()
console.log(orig6Array);
orig6Array.shift()
console.log(orig6Array);
orig6Array.unshift("Winnipeg Jets");
// We can also modify the array contents by deleting or substituting elements, or inserting one or more elements at a certain place with splice()
orig6Array.splice(2, 2, "Edmonton Oilers");
/* That's it for the basics of working with arrays! With these tools at your disposal, a whole new world of possibilities with JavaScript are at your command */