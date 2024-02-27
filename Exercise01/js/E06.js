
// Defining variables
let array = [11, 22, 33, 44];
let sum = 0;
let count = 0;
let average;
let lines = "";

// use for of loop to calculate sum and count

for (let num of array){
    sum += num;
    count++;
}

console.log(count);

// use for loop to create "lines" strings. One line is like "array[0] = 11" etc...
// line[0] = array[0] = 11
// line[1] = array[1] = 22

// i starts at 0, and continues till i is no longer smaller than the arrays lenght, and each iteration it increments with 1.
for (let i = 0; i < array.length; i++){
    // each iteration it adds the string to the lines variable. 
    // The format is in the type "array[index of array] = value", using template literals to get used to that
    lines += `array[${i}] = ${array[i]}<br>`;
};

if (count !== 0){
    average = (sum/count).toFixed(2);
}
else{
    average = "N/A" // Cant divide by 0
};


// show all lines, count, sum and average. Initially forgetting that the "whitespace" in lineshifts and spaces is not parsed as I would logically think, so adding <br> instead.
let display = document.getElementById("result");
display.innerHTML = lines + "<br>count: " + count + "<br>sum: " + sum + "<br>average: " + average;