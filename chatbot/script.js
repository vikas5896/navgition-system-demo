function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return; // Prevent empty messages

    // Display the user's message
    chatBox.innerHTML += `<div class="user-message">${userInput}</div>`;

    // Show 'Analyzing...' message while waiting for the response
    chatBox.innerHTML += `<div class="bot-message" id="analyzing">Analyzing...</div>`;

    // Automatically scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear the input field
    document.getElementById("user-input").value = "";

    // After 0.4 seconds, remove 'Analyzing...' and show the bot's response
    setTimeout(() => {
        const analyzingElement = document.getElementById("analyzing");
        if (analyzingElement) analyzingElement.remove(); // Remove 'Analyzing...'
        const botResponse = getBotResponse(userInput);
        chatBox.innerHTML += `<div class="bot-message">${botResponse}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom again
    }, 400);
}
 
function getBotResponse(input) {
    input = input.toLowerCase().trim(); // Normalize input

    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
        return "Hello! How can I assist you with your campus navigation?";
    }
    else if (input.includes("how to find faculty cabins") || input.includes("faculty cabins")) {
        return "on each floor there the different faculty cabins... which faculty you want to visit";
    } 
    else if (input.includes("Prof. Anuja Gaikwad") || input.includes("Anuja gaikwad cabin")){
        return "The cabin of Prof. Anuja Gaikwad ma'am is on 4th floor (411) in North block.";
    } 
    else {
        return "I'm sorry, I didn't understand that. Please try again!";
    }
}
