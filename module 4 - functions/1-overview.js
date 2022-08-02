function displayGreeting(name, salutation = 'Hello') {
    const message = `${salutation}, ${name}`;
    console.log(message);
}

displayGreeting('Christopher1');
// displays "Hello, Christopher"

displayGreeting('Christopher2', 'Hi');
// displays "Hi, Christopher"

function createGreetingMessage(name) {
    const message = `Hello, ${name}`;
    return message;
}

let greetingMessage = createGreetingMessage('Christopher3');
console.log(greetingMessage);