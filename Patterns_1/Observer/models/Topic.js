const Comment = require("./Comment");
const EventEmitter = require('events');

// The class inherits the events with the use of "this"
class Topic extends EventEmitter{

    constructor(name) {
        super(); // We need to invoke the father's super
        this.name = name;
        this.subscribers = [];
        this.comments = [];
        app.emit('message',`${this.name} topic has been created!`);
    }

    getName(){
        return this.name;
    }

    addSubscriber(user) {
        this.subscribers.push(user);
        app.emit('message',`${user.name} subscribed to ${this.getName()}`);
    }

    addComment(from, comment) {
        // Only subscribers can leave a comment
        const subscriber = this.subscribers.find(subscriber => subscriber.name === from);

        if(!subscriber){
            app.emit('message', `This user is not subscribed to this topic`);
            return;
        }
        const newComment = new Comment(from, comment)
        this.comments.push(newComment);
        this.notify();
        this.emit('comment', subscriber, newComment)
        return;
    }

    // Notifies to subscribers. They are the OBSERVERS
    notify(){
        // It is important to use the "once" instead of "on", to delete the listeners and not accumulate events
        this.once('comment', (subscriber, comment) => {
            const mail = `${this.name} topic has a new comment: ${comment.text} from ${subscriber.name} on ${comment.date}.`
            this.subscribers.forEach(subscriber =>{
                subscriber.updateInbox(mail);
            });
        });
    }

    viewDetails(){
        app.emit('message',`***********************************************\n                ${this.name} TOPIC DETAILS                 \n***********************************************`);
        app.emit('message', "Subscribers: ", this.subscribers.length);
        app.emit('message',this.subscribers.map(subscriber => subscriber.name))
        app.emit('message',`------------------ Comments -------------------`);
        this.comments.map(comment =>  app.emit('message',`From: ${comment.from} | Comment: ${comment.text}`))
        app.emit('message',`***********************************************\n`);
    }

}


module.exports = Topic;