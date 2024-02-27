function inputSystem(){
    // Declaring and initializing constant variables that fetches each grade
    const points1 = document.getElementById("points1");
    const points2 = document.getElementById("points2");
    const points3 = document.getElementById("points3");
    const points4 = document.getElementById("points4");

    // Adding event listeners to the grade-input boxes
    points1.addEventListener("input", gradingSystem);
    points2.addEventListener("input", gradingSystem);
    points3.addEventListener("input", gradingSystem);
    points4.addEventListener("input", gradingSystem);   
};

inputSystem();

function gradingSystem(){
    // Declaring and initializing constant variable for each grade, 
    // the boxes are set as numbers but testing the OR || and set a 0 value in to avoid NaN,
    // not a number errors if i change the type of input field later
    const points1 = parseFloat(document.getElementById("points1").value) || 0;
    const points2 = parseFloat(document.getElementById("points2").value) || 0;
    const points3 = parseFloat(document.getElementById("points3").value) || 0;
    const points4 = parseFloat(document.getElementById("points4").value) || 0;

    // Calculate the sum of the grades
    const sum = points1 + points2 + points3 + points4;

    // Display the sum
    const sumEl = document.getElementById("sum");
    sumEl.textContent = `Points (sum): ${sum}`;
    
    // Calculating grade
    let grade = "";

    // setting value to variable grade based on the sum and point-definitions in the exercise
    if (sum >= 0 && sum <= 12) {
        grade = 0;
    } else if (sum >= 13 && sum <= 15) {
        grade = 1;
    } else if (sum >= 16 && sum <= 17) {
        grade = 2;
    } else if (sum >= 18 && sum <= 19) {
        grade = 3;
    } else if (sum >= 20 && sum <= 21) {
        grade = 4;
    } else if (sum >= 22 && sum <= 24) {
        grade = 5;
    } else{
        grade = "Something seems off, you have more points than avaliable"
    }

    // Display the calculated grade
    const gradeEl = document.getElementById("grade");
    gradeEl.textContent = `Grade: ${grade}`;
};