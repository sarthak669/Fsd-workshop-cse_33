const EventEmitter = require('events');

class Button extends EventEmitter {
    click() {
        console.log('Button was clicked!');
        this.emit('click');
    }
}

const myButton = new Button();

myButton.on('click', () => {
    console.log('Event Listener: Button click detected!');
});

myButton.on('click', () => {
    console.log('Event Listener: Performing an action...');
});

myButton.click();
