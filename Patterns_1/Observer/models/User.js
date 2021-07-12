class User {
    constructor(name) {
        this.name = name;
        this.inbox = [];
        console.log(`${this.name} user has been created!`);
    }

    updateInbox(comments) {
        this.inbox = comments;
    }

    inboxMail() {
        console.log(`***********************************************\n                ${this.name} MAIL INBOX                 \n***********************************************`);
        this.inbox.forEach(mail => console.log(`From: ${mail.from} | Subject: New Comment - ${mail.text}`));
        console.log(`***********************************************`);
    }
}

module.exports = User;