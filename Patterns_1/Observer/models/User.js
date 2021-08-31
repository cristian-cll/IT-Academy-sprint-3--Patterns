class User {
    constructor(name) {
        this.name = name;
        this.inbox = [];
        app.emit('message',`${this.name} user has been created!`);
    }

    updateInbox(comments) {
        this.inbox.push(comments);
        app.emit('message',`${this.name} user received a comment`);
    }

    inboxMail() {
        app.emit('message',`***********************************************\n                ${this.name} MAIL INBOX                 \n***********************************************`);
        this.inbox.forEach(mail =>  app.emit("message", mail));
        app.emit('message',`***********************************************`);
    }
}

module.exports = User;