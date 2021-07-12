const EventEmitter = require('events');
const topic = new EventEmitter();

const User = require("./models/User");
const Topic = require("./models/Topic");


const newUser = (name) => {
    const newUser = new User(name);
    topic.on("addComment", function(){
        console.log("Nuevo comentario");
    })
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
    Music.addComment("Laura", "me too");
    
    
    Music.viewDetails();

    Juan.inboxMail();
    Laura.inboxMail();

}

test();