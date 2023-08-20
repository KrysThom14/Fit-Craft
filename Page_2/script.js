
$(document).ready(function() {

    //Apply funtionality to "save changes" / "edit" button
    $("#toggle_button").click(function() {
        $(".textarea").each(function() {
            $(this).prop("readonly", !$(this).prop("readonly"));
            $(this).toggleClass("no_border");
            $(this).toggleClass("hide_placeholder");
        });
        $(".button_text").text($(".button_text").text() == "Edit" ? "Save Changes" : "Edit");

        const icon = $(".icon");
        icon.toggleClass("fa-floppy-disk fa-pen-to-square"); // Toggle between the save and edit icons
    });

    // Apply functionality the minus sign in the "add/delete row" section
    $('.minus').click(function () {
        var $input = $(this).parent().find('.num_input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        updateTableRows(count); // Update the table rows based on the input value
        return false;
    });

    // Apply functionality the plus sign in the "add/delete row" section
    $('.plus').click(function () {
        var $input = $(this).parent().find('.num_input');
        var count = parseInt($input.val()) + 1;
        count = count > 20 ? 20 : count; // Ensure the count doesn't exceed 20
        $input.val(count);
        $input.change();
        updateTableRows(count); // Update the table rows based on the input value
        return false;
    });

    // Call the updateTableRows function on page load
    updateTableRows(parseInt($(".num_input").val()));
});



// Function to update the table rows based on the input value
function updateTableRows(count) {
    $(".row").hide(); //Hide all rows at first
    $(".row_1").show(); // Show the first row by default
    for (var i = 1; i <=count; i++) {
        $(".row_" + i).show(); // Show the rows up to the selected count
    }
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


document.addEventListener("DOMContentLoaded", function() {

    // Make the horizontal nav bar change stylying when clicked on:
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        
        const parentLi = this.parentElement;

        // Remove active class from all other links' parent li
        navLinks.forEach(otherLink => {
            if (otherLink !== this) {
            otherLink.parentElement.classList.remove("active");
            }
        });

      // Toggle the "active" class on the parent li
      parentLi.classList.toggle("active");

      });
    });


    // Creating functionality to the BMI Calculator:
    const calculateButton = document.querySelector(".calculate_bmi_button button");
    const userBMIElement = document.getElementById("user-bmi");
    const bmiCategories = document.querySelectorAll(".bmi_categories > div");
    const bmiResultsSection = document.querySelector(".bmi_results_section");

    calculateButton.addEventListener("click", function () {
        const feetInput = document.getElementById("feet-input");
        const inchesInput = document.getElementById("inches-input");
        const weightInput = document.getElementById("weight-input");

        // Convert input values to numbers
        const feet = parseInt(feetInput.value) || 0;
        const inches = parseInt(inchesInput.value) || 0;
        const weight = parseFloat(weightInput.value) || 0;

        // Calculate BMI
        const totalHeightInInches = (feet * 12 + inches) ** 2;
        const bmi = (weight / totalHeightInInches) * 703;

        // Update user's BMI result
        userBMIElement.textContent = bmi.toFixed(1); // Limit to one decimal place

        // Apply styles to the user's BMI category
        if (bmi < 18.5) {
            applyCategoryStyle("underweight");
          } else if (bmi < 25) {
            applyCategoryStyle("normal_weight");
          } else if (bmi < 30) {
            applyCategoryStyle("overweight");
          } else {
            applyCategoryStyle("obese");
          }

        // Show the results section
        bmiResultsSection.style.display = "block";
    });

     // Apply styles to the selected BMI category
    function applyCategoryStyle(category) {
        bmiCategories.forEach(function (element) {
        element.classList.remove("highlighted");
        });

        const selectedCategory = document.querySelector(`.${category}`);
        selectedCategory.classList.add("highlighted");
    }

    // Make sure only numbers can be entered into the height and weight inputs
    const numericInputs = document.querySelectorAll(".height-input, .weight-input");

    numericInputs.forEach(function (input) {
        input.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
        });
    });


    // Toggle the visibility of the BMI section using the nav bar
    const bodyMassIndex = document.getElementById("body_mass_index_button");
    const bmiSection = document.getElementById("bmi");

    bodyMassIndex.addEventListener("click", function() {
        bmiSection.classList.toggle("visible");
    });


    // Toggle the visibility of the Body Composition section using the nav bar
    const bodyComposition = document.getElementById("body_comp_button");
    const bodyCompositionSection = document.getElementById("body_composition");

    bodyComposition.addEventListener("click", function() {
        bodyCompositionSection.classList.toggle("visible");
    });



    // Creating functionality to the Estimated Max Calculator:

    // 1. Ensure only numbers can be entered into the input boxes.
const numericInputsMaxCalculator = document.querySelectorAll(".weight_lifted_input, .reps_performed_input");

numericInputsMaxCalculator.forEach(function (input) {
    input.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    });
});

// 2. Calculate the user's estimated max based on the provided formula.
const calculateMaxButton = document.querySelector(".calculate_estimated_max_button button");
const userEstimatedMaxElement = document.querySelector(".user_estimated_max_result");
const estimatedMaxResultsSection = document.querySelector(".estimated_max_results_section");

calculateMaxButton.addEventListener("click", function () {
    const weightLiftedInput = document.querySelector(".weight_lifted_input");
    const repsPerformedInput = document.querySelector(".reps_performed_input");

    // Convert input values to numbers
    const weightLifted = parseFloat(weightLiftedInput.value) || 0;
    const repsPerformed = parseInt(repsPerformedInput.value) || 0;

    // Calculate estimated max
    const estimatedMax = weightLifted / ((100 - (repsPerformed * 2.5)) / 100);

    // 3. Display the result in the appropriate element.
    userEstimatedMaxElement.textContent = estimatedMax.toFixed(1); // Limit to one decimal place

    // 4. Show the results section.
    estimatedMaxResultsSection.style.display = "block";
});

    // Toggle the visibility of the Estimated Max section using the nav bar
    const repsAndMaxes = document.getElementById("reps_and_maxes_button");
    const repsMaxesSection = document.getElementById("reps_and_maxes");

    repsAndMaxes.addEventListener("click", function() {
        repsMaxesSection.classList.toggle("visible");
    });

    // Toggle the visibility of the Stopwatch/Timer section using the nav bar
    const stopwatchTimer = document.getElementById("stopwatch_timer_button");
    const stopwatchTimerSection = document.getElementById("stopwatch_timer");

    stopwatchTimer.addEventListener("click", function() {
        stopwatchTimerSection.classList.toggle("visible");
    });


  });


// Creating functionality for Stopwatch:
let [centiseconds, seconds, minutes] = [0, 0, 0];
let displayTime = document.getElementById("stopwatch_display");
let timer = null;

function stopWatch() {
    centiseconds++;
    if(centiseconds / 100 === 1) {
        centiseconds = 0;
        seconds++;
        if(seconds / 60 === 1) {
            seconds = 0;
            minutes++;
        }
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let c = centiseconds < 10 ? "0" + centiseconds : centiseconds;

    displayTime.innerHTML = m + ":" + s + ":" + c;
}

function watchStart() {
    if(timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 10); // Update every 10 milliseconds
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    [centiseconds, seconds, minutes] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Creating functionality for Timer:
const semicircles = document.querySelectorAll(".semicircle");
const timer_2 = document.querySelector(".timer");

timer_2.innerHTML = 
`<div>00</div>
<div class="colon">:</div>
<div>00</div>
<div class="colon">:</div>
<div>00</div>`;


let setTime;
let startTime;
let futureTime;
let timerLoop;
let remainingTimeGlobal;
let originalMinutes;
let originalSeconds;

function countDownTimer() {
    const currentTime = Date.now();
    if (typeof futureTime === 'undefined' || typeof setTime === 'undefined') {
        timer_2.innerHTML = 
        `<div>00</div>
        <div class="colon">:</div>
        <div>00</div>
        <div class="colon">:</div>
        <div>00</div>`;
        return;
    }
    const remainingTime = futureTime - currentTime;
    const angle = (remainingTime / setTime) * 360;

    //progress indicator
    if(angle > 180) {
        semicircles[2].style.display = "none";
        semicircles[0].style.transform = 'rotate(180deg)';
        semicircles[1].style.transform = `rotate(${angle}deg)`;
    } else {
        semicircles[2].style.display = "block";
        semicircles[0].style.transform = `rotate(${angle}deg)`;
        semicircles[1].style.transform = `rotate(${angle}deg)`;
    }

    //timer
    const mins = Math.floor((remainingTime / 60000) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    const secs = Math.floor((remainingTime / 1000) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    const centis = Math.floor((remainingTime / 10) % 100).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

    timer_2.innerHTML = 
    `<div>${mins}</div>
    <div class="colon">:</div>
    <div>${secs}</div>
    <div class="colon">:</div>
    <div>${centis}</div>`;

    //5sec-condition
    if(remainingTime <= 5000 && remainingTime > 4900) {
        semicircles[0].style.backgroundColor = "red";
        semicircles[1].style.backgroundColor = "red";
        timer_2.style.color = "red";
    }


    //stop timer
    if(remainingTime <= 0) {
        clearInterval(timerLoop);
        semicircles[0].style.display = "none";
        semicircles[1].style.display = "none";
        semicircles[2].style.display = "none";

        timer_2.innerHTML = 
        `<div>00</div>
        <div class="colon">:</div>
        <div>00</div>
        <div class="colon">:</div>
        <div>00</div>`;

        timer_2.style.color = "lightgray";
    }

}


// Add functionality to the timer input sections
const minutesInput = document.querySelector(".timer_minutes_input");
const secondsInput = document.querySelector(".timer_seconds_input");
const minutesPlus = document.querySelector(".timer_minutes_plus");
const minutesMinus = document.querySelector(".timer_minutes_minus");
const secondsPlus = document.querySelector(".timer_seconds_plus");
const secondsMinus = document.querySelector(".timer_seconds_minus");

minutesPlus.addEventListener("click", function() {
    let currentValue = parseInt(minutesInput.value);
    if (currentValue < 59) {
        minutesInput.value = currentValue + 1;
    }
});

minutesMinus.addEventListener("click", function() {
    let currentValue = parseInt(minutesInput.value);
    if (currentValue > 0) {
        minutesInput.value = currentValue - 1;
    }
});

secondsPlus.addEventListener("click", function() {
    let currentValue = parseInt(secondsInput.value);
    if (currentValue <= 50) {
        secondsInput.value = currentValue + 5;
    }
});

secondsMinus.addEventListener("click", function() {
    let currentValue = parseInt(secondsInput.value);
    if (currentValue >= 5) {
        secondsInput.value = currentValue - 5;
    }
});

// Add functionality to the timer stop/start/reset buttons
const startButton = document.querySelector(".start_timer");
const stopButton = document.querySelector(".stop_timer");
const resetButton = document.querySelector(".reset_timer");

startButton.addEventListener("click", function() {
    // Get values from input boxes
    const min = parseInt(minutesInput.value);
    const sec = parseInt(secondsInput.value);
    originalMinutes = parseInt(minutesInput.value);
    originalSeconds = parseInt(secondsInput.value);

    // Check if both values are 0
    if (min === 0 && sec === 0) {
        return;
    }

    // Update the timer's starting point
    const minutes_2 = min * 60000; // 1 min = 6000 centiseconds
    const seconds_2 = sec * 1000; // 1 second = 1000 centiseconds
    const centiseconds_2 = 0; // centiseconds are always 0 since we don't have an input for them
    if (typeof remainingTimeGlobal !== 'undefined' && remainingTimeGlobal > 0) {
        setTime = remainingTimeGlobal;
        futureTime = Date.now() + remainingTimeGlobal;
        remainingTimeGlobal = undefined; // Reset it for the next cycle
    } else {
        setTime = minutes_2 + seconds_2 + centiseconds_2;
        startTime = Date.now();
        futureTime = startTime + setTime;
    }


    // Start the timer
    clearInterval(timerLoop); // Clear any existing timers
    timerLoop = setInterval(countDownTimer, 10);

});

// Stop the timer
stopButton.addEventListener("click", function() {
    clearInterval(timerLoop);
    const currentTime = Date.now();
    remainingTimeGlobal = futureTime - currentTime;
});

function updateTimerDisplay(minutes, seconds) {
    timer_2.innerHTML = 
    `<div>${String(minutes).padStart(2, '0')}</div>
    <div class="colon">:</div>
    <div>${String(seconds).padStart(2, '0')}</div>
    <div class="colon">:</div>
    <div>00</div>`;
}

// Reset the timer
resetButton.addEventListener("click", function() {
    clearInterval(timerLoop);
   
    // Reset the input values to the original values
    minutesInput.value = originalMinutes;
    secondsInput.value = originalSeconds;

    // Reset the reamainingTimeGlobal variable
    remainingTimeGlobal = undefined;

    // Reset the timer display
    updateTimerDisplay(originalMinutes, originalSeconds);
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Create a connection between the "Add to Workout" button and the "Selected Exercises" section
window.onload = function() {
    let selectedExercises = JSON.parse(localStorage.getItem("selectedExercises") || "[]");
    let workoutDiv = document.getElementById('selected_exercises_container');
    selectedExercises.forEach(exercise => {
        let exerciseElement = document.createElement('p');
        exerciseElement.textContent = exercise;
        workoutDiv.appendChild(exerciseElement);
    });
}

function clearExercises() {
    // Remove the exercises from local storage
    localStorage.removeItem("selectedExercises");
    
    // Clear the contents of the selected_exercises_container
    let container = document.getElementById('selected_exercises_container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


// Save the text in the textarea to local storage
document.querySelectorAll('.textarea').forEach(textarea => {
    textarea.addEventListener('input', function() {
        let rowClass = this.closest('.row').classList[1]; // e.g., "row_1"
        let colClass = this.parentElement.classList[1];  // e.g., "r1c1"
        let key = `${rowClass}_${colClass}`;
        localStorage.setItem(key, this.value);
    });
});

// Load the text from local storage into the textarea
document.querySelectorAll('.textarea').forEach(textarea => {
    let rowClass = textarea.closest('.row').classList[1];
    let colClass = textarea.parentElement.classList[1];
    let key = `${rowClass}_${colClass}`;
    let savedValue = localStorage.getItem(key);
    if (savedValue) {
        textarea.value = savedValue;
    }
});


// Save the state of the checkboxes to local storage
document.querySelectorAll('.checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        let rowClass = this.closest('.row').classList[1]; // e.g., "row_1"
        let colClass = this.parentElement.classList[1];  // e.g., "r1c7"
        let key = `${rowClass}_${colClass}_checked`;
        localStorage.setItem(key, this.checked);
    });
});

// Load the state of the checkboxes from local storage
document.querySelectorAll('.checkbox').forEach(checkbox => {
    let rowClass = checkbox.closest('.row').classList[1];
    let colClass = checkbox.parentElement.classList[1];
    let key = `${rowClass}_${colClass}_checked`;
    let savedState = localStorage.getItem(key);
    if (savedState !== null) {
        checkbox.checked = (savedState === 'true');
    }
});

// Clear the local storage of all the textarea and checkbox data
document.getElementById('clearWorkoutBtn').addEventListener('click', function() {
    // Clear the text in the textareas
    document.querySelectorAll('.textarea').forEach(textarea => {
        let rowClass = textarea.closest('.row').classList[1];
        let colClass = textarea.parentElement.classList[1];
        let key = `${rowClass}_${colClass}`;
        localStorage.removeItem(key);  // Remove the saved text from local storage
        textarea.value = '';  // Clear the textarea
    });

    // Uncheck the checkboxes
    document.querySelectorAll('.checkbox').forEach(checkbox => {
        let rowClass = checkbox.closest('.row').classList[1];
        let colClass = checkbox.parentElement.classList[1];
        let key = `${rowClass}_${colClass}_checked`;
        localStorage.removeItem(key);  // Remove the saved state from local storage
        checkbox.checked = false;  // Uncheck the checkbox
    });
});


// Apply functionality to the "View Exercises" button
function toggleSelectedExercises() {
    var container = document.getElementById("selected_exercises_container");
    var button = document.querySelector(".selected_exercises_title_button");
    
    // Check the current display state of the container
    if (container.style.display === "none" || container.style.display === "") {
        // If it's hidden or not set, change it to flex
        container.style.display = "flex";
        // Change button text to "Hide Exercises"
        button.innerText = "Hide Exercises";
    } else {
        // If it's visible, hide it
        container.style.display = "none";
        // Change button text back to "View Exercises"
        button.innerText = "View Exercises";
    }
}

function toggleNotes() {
    var notesSection = document.getElementById("r1c6");
    
    // Check the current display state of the container
    if (notesSection.style.display === "none" || notesSection.style.display === "") {
        // If it's hidden or not set, change it to flex
        notesSection.style.display = "block";
    } else {
        // If it's visible, hide it
        notesSection.style.display = "none";
    }
}