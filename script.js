// Select the elements using correct selectors
const jokeElement = document.querySelector(".joke"); 
const btn = document.querySelector(".btn"); 

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,explicit";

const getJoke = async () => {

    try {
        const response = await fetch(url); // Await the fetch call
        const data = await response.json(); // Await the conversion to JSON

        
        //Check if the joke is a single part or two part joke
        const jokeText = data.type === "single" ? data.joke : `${data.setup} - ${data.delivery}`;
        jokeElement.innerText = jokeText; // Display the joke in the joke element
    } catch (error) {
        console.error("Error fetching joke:", error); // Handle any errors
        jokeElement.innerText = "Failed to load joke.";
    }
};

btn.addEventListener("click", getJoke);

//getJoke();

