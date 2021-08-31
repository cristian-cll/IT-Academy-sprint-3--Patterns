class MiddlewareHandler {

    constructor() {
        this.middlewares = [];
    }

    use(middleware) {
        this.middlewares.push(middleware);
        console.log("Added new middleware:", middleware);
    }

    executeMiddleware(data, done) {
        this.middlewares.reduce((done, next) => () => next(data, done), done)
            (data);
    }

    run(data) {
        this.executeMiddleware(data, done => console.log(data));
    }
}


module.exports = new MiddlewareHandler;