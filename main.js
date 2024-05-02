/*This will be a script that generates random workouts 
  for weight training days, 5 exercises per workout */

const exercises = ['Bicep Curls', 'Preacher Curls', 'Concentration Curls', 'Bench Press', 'Incline Press', 
                  'Military Press', 'Lateral Raises', 'Pull Ups', 'Bent-Over Barbell row', 'Deadlift', 'Barbell Shrug', 
                  'Barbell Squat', 'Calf Raises', 'Romanian Deadlifts (RDLs)', 'Glute Bridges', 'Kettlebell Lunges'];

// This function generate a random number to use as an index to randomly select exercises.
function randomNumberGenerator () {
  let randomNumber = Math.floor(Math.random()*(exercises.length));
  return randomNumber;
}


console.log("Your randomly generated workout is:")

let usedIndex = [] // Create an array to store indexes that we have already used so we don't get repeat execises.

for (let i = 0; i < 5; i++) { // For block selects 5 random exercises from our exercises array
  let index = randomNumberGenerator();
  while (usedIndex.includes(index)) { // If function generates an index we've already used, generate a new one
    index = randomNumberGenerator();
  }
  usedIndex.push(index);
  console.log(index);
  console.log(`${i+1}: ${exercises[index]}`); // Log workout in formatted manner
}