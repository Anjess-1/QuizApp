
exports.errorHandler = (err, req, res, next) => {
    console.log(err)
    console.log("statusCode: ", err.statusCode);
    console.log("message:", err.message);
    if(err.statusCode == 401 || err.statusCode==403 || err.statusCode==500 || err.statusCode == 400) return handleCommonErrors(res, err);
}

const handleCommonErrors = (res, err) => {
    return res.status(err.statusCode).json({
        code: err.statusCode,
        message: err.message
    })
}