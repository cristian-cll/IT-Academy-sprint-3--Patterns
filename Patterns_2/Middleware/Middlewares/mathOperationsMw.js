const square = (obj, next) => {

    if (Array.isArray(obj)) {
        obj.forEach(item => item.square = Math.pow(item.result, 2));
        return next();
    }

    obj.square = Math.pow(obj.result, 2);
    next();
}

const cube = (obj, next) => {

    if (Array.isArray(obj)) {
        obj.forEach(item => item.cube = Math.pow(item.result, 3));
        return next();
    }

    obj.cube = Math.pow(obj.result, 3);
    next();
}

const half = (obj, next) => {

    if (Array.isArray(obj)) {
        obj.forEach(item => item.divByTwo = (item.result / 2));
        return next();
    }

    obj.divByTwo = (obj.result / 2);
    next();
}


module.exports = { square, cube, half };