class Comment {

    constructor(from, text) {
        this.from = from;
        this.text = text;
        this.date = new Date().toLocaleDateString();
        console.log(`New comment from ${this.from}`);
    }

}

module.exports = Comment;