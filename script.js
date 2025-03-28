// Function to get a random prompt from an array
function getRandomPrompt(prompts) {
  return prompts[Math.floor(Math.random() * prompts.length)];
}

// Function to display prompts
function displayPrompts() {
  document.getElementById('prompt1').textContent = getRandomPrompt(prompts1);
  document.getElementById('prompt2').textContent = getRandomPrompt(prompts2);
  document.getElementById('prompt3').textContent = getRandomPrompt(prompts3);
}

// Event listener for the "Generate New Prompts" button
document.getElementById('generate-button').addEventListener('click', displayPrompts);