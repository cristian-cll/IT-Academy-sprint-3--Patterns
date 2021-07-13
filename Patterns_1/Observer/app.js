const EventEmitter = require('events');
// We define global "variable" of the global NodeJS module. Global availability
global.app = new EventEmitter();

const User = require("./models/User");
const Topic = require("./models/Topic");

// We use this event to invoke the console log
app.on("message", (msg) => console.log(msg));


const newUser = (name) => {
    const newUser = new User(name);
    return newUser;
}

const newTopic = (name) => {
    const newTopic = new Topic(name);
    return newTopic;
}


const test = () => {

    const Juan = newUser("Juan");
    const Laura = newUser("Laura");

    const Music = newTopic("Music");
    const Sports = newTopic("Sports");

    Music.addSubscriber(Juan);
    Music.addSubscriber(Laura);
    Sports.addSubscriber(Laura);
    Sports.addSubscriber(Juan);

    Music.addComment("Juan", "I like Rock Music");
    Music.addComment("Laura", "Me too. Specially 80's Rock");
    Music.addComment("Juan", "Good taste!");

    Music.viewDetails();

    Juan.inboxMail();
    Laura.inboxMail();

}

test();