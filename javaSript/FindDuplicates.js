function findDuplicates(arr) {
    let duplicates = [];
    let seen = new Set();
    let single=[]
    arr.forEach(item => {
        if (seen.has(item)) {
            if (!duplicates.includes(item)) {
                duplicates.push(item);
            }
        } else {
            seen.add(item);
            single.push[item]
        }
    });

    return duplicates ;
}

let originalArray = [1, 2, 3, 4, 2, 5, 6, 1, 3, 7];
let duplicateArray = findDuplicates(originalArray);

console.log("Original Array:", originalArray);
console.log("Duplicate Elements:", duplicateArray);



function findDuplicates(arr) {
    let duplicates = [];  // Duplicate elements রাখার জন্য
    let nonDuplicates = []; // Non-duplicate elements রাখার জন্য
    let seen = new Set();  // Seen elements track করার জন্য
    let tempDuplicates = new Set(); // Duplicate element গুলো track করার জন্য

    arr.forEach(item => {
        if (seen.has(item)) {  // যদি item আগে দেখা হয়ে থাকে
            tempDuplicates.add(item); // Duplicate হিসেবে mark করি
        } else {
            seen.add(item); // প্রথমবার দেখা হলে set এ add করি
        }
    });

    // tempDuplicates থেকে duplicates array তে একক copy করি
    duplicates = Array.from(tempDuplicates);
    
    // nonDuplicates array তে সেটি যোগ করি যেগুলো duplicate নয়
    nonDuplicates = arr.filter(item => !tempDuplicates.has(item));

    return { duplicates, nonDuplicates };
}

let originalArray2= [1, 2, 3, 4, 2, 5, 6, 1, 3, 7];
let result2 = findDuplicates(originalArray);

console.log("Original Array:", originalArray2);
console.log("Duplicate Elements:", result2.duplicates);
console.log("Non-Duplicate Elements:", result2.nonDuplicates);


function findDuplicates(arr) {
    let seen = new Set();  // Seen elements track করার জন্য
    let duplicates = new Set();  // Duplicate elements track করার জন্য

    // Iterate through the array to find duplicates
    arr.forEach(item => {
        if (seen.has(item)) {  // যদি item আগে দেখা হয়ে থাকে
            duplicates.add(item);  // Duplicate হিসেবে mark করি
        } else {
            seen.add(item);  // প্রথমবার দেখা হলে set এ add করি
        }
    });

    // Convert the Set back to an array
    let duplicatesArray = Array.from(duplicates);

    // Remove duplicates from the original array
    let updatedArray = arr.filter(item => !duplicates.has(item));

    return { updatedArray, duplicatesArray };
}

let originalArray3 = [1, 2, 3, 4, 2, 5, 6, 1, 3, 7];
let result3 = findDuplicates(originalArray);

console.log("Original Array:", originalArray);
console.log("Array with Duplicates Removed:", result3.updatedArray);
console.log("Duplicate Elements:", result3.duplicatesArray);


function processArray(arr) {
    let seen = new Set();  // Seen elements track করার জন্য
    let duplicates = new Set();  // Duplicate elements track করার জন্য
    let uniqueArr = [];  // Unique elements রাখার জন্য
    let finalArray = [];  // Final array, where duplicates will be removed

    arr.forEach(item => {
        if (seen.has(item)) {  // যদি item আগে দেখা হয়ে থাকে
            duplicates.add(item);  // Duplicate হিসেবে mark করি
        } else {
            seen.add(item);  // প্রথমবার দেখা হলে set এ add করি
            uniqueArr.push(item);  // Non-duplicate item uniqueArr তে add করি
        }
    });

    // Remove duplicates from original array
    finalArray = Array.from(seen);  // Seen এর মধ্যে যেগুলো একবার এসেছে, সেগুলো finalArray তে থাকবে
    let duplicateArray = Array.from(duplicates);  // duplicates Set থেকে array তৈরি করা

    return { finalArray, duplicateArray, uniqueArr };
}

let OriginalArray4 = [10, 20, 30, 40, 50, 20, 10];
let result4 = processArray(OriginalArray4);

console.log("Original Array:", OriginalArray4);
console.log("Array with duplicates removed (Final Array):", result4.finalArray);
console.log("Duplicate Elements (Duplicate Array):", result4.duplicateArray);
console.log("Unique Elements (Unique Array):", result4.uniqueArr);



function processArray(arr) {
    let seen = new Set();  // Seen elements track করার জন্য
    let duplicates = new Set();  // Duplicate elements track করার জন্য
    let uniqueArr = [];  // Unique elements রাখার জন্য
    let finalArray = [];  // Final array, where duplicates will be removed

    arr.forEach(item => {
        if (seen.has(item)) {  // যদি item আগে দেখা হয়ে থাকে
            duplicates.add(item);  // Duplicate হিসেবে mark করি
        } else {
            seen.add(item);  // প্রথমবার দেখা হলে set এ add করি
        }
    });

    // Remove duplicates from original array
    finalArray = Array.from(seen);  // Seen এর মধ্যে যেগুলো একবার এসেছে, সেগুলো finalArray তে থাকবে

    // Filter out duplicates from the final array for unique elements
    uniqueArr = finalArray.filter(item => !duplicates.has(item));

    let duplicateArray = Array.from(duplicates);  // duplicates Set থেকে array তৈরি করা

    return { finalArray, duplicateArray, uniqueArr };
}

let OriginalArray5 = [10, 20, 30, 40, 50, 20, 10];
let result5 = processArray(OriginalArray5);

console.log("Original Array:", OriginalArray5);
console.log("Array with duplicates removed (Final Array):", result5.finalArray);
console.log("Duplicate Elements (Duplicate Array):", result5.duplicateArray);
console.log("Unique Elements (Unique Array):", result5.uniqueArr);
