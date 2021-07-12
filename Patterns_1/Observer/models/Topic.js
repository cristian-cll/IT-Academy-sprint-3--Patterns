const Comment = require("./Comment");
const EventEmitter = require('events').EventEmitter();


class Topic extends EventEmitter {

    constructor(name) {
        this.name = name;
        this.subscribers = [];
        this.comments = [];
        console.log(`${this.name} topic has been created!`);
    }

    getName(){
        return this.name;
    }

    addSubscriber(user) {
        this.subscribers.push(user);
        console.log(`${user.name} subscribed to ${this.getName()}`);
    }

    addComment(from, comment) {
        // Only subscribers can leave a comment
        const subscriber = this.subscribers.find(subscriber => subscriber.name === from);

        //this.emit("addComment", from)
        
        if(subscriber){
            this.comments.push(new Comment(from, comment));
            this.notify();
            return;
        }
        return console.log(`This user is not subscribed to this topic`);
    }

    // Notifies to subscribers. They are the OBSERVERS
    notify(){
        this.subscribers.forEach(subscriber => {
            subscriber.updateInbox(this.comments);
        })
    }

    viewDetails(){

        console.log(`***********************************************\n                ${this.name} TOPIC DETAILS                 \n***********************************************`);
        console.log("Subscribers: ", this.subscribers.length);
        console.log(this.subscribers.map(subscriber => subscriber.name))
        console.log(`------------------ Comments -------------------`);
        this.comments.map(comment => console.log(`From: ${comment.from} | Comment: ${comment.text}`))
        console.log(`***********************************************\n`);
    }

}


module.exports = Topic;