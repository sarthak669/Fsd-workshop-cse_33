
const EventEmitter = require('events');

// Create a custom EventEmitter
const myEmitter = new EventEmitter();

// Listen for greet event
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome.`);
});

// Listen for exit event
myEmitter.on('exit', () => {
    console.log('Goodbye! Exiting the program.');
});

// Trigger events
myEmitter.emit('greet', 'John');
myEmitter.emit('exit');
