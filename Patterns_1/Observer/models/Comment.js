class Comment {

    constructor(from, text) {
        this.from = from;
        this.text = text;
        this.date = new Date().toLocaleDateString();
        app.emit('message',`New comment from ${this.from}`);
    }

}

module.exports = Comment;