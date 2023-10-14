const refreshButton = document.getElementById('refreshButton');
const jokeElement = document.getElementById('jokeElement');

refreshButton.addEventListener('click', () => {
  // Fetch a new joke from the API.
  fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
      // Update the joke element with the new joke.
      const jokeText = jokeData.attachments[0].text;
      jokeElement.innerHTML = jokeText;
    });
});
