exports.createCustomError = (status, msg) => {
        let err = new Error(msg);
        err.statusCode = status
        throw err;     
}

