const jwt = require('jsonwebtoken')

let secretKey = "anjali";

exports.createJWT = (payload) => {
    const token = jwt.sign(payload, secretKey);
    return token
}

exports.validateToken = (token) => {
    try {
        const verify = jwt.verify(token, secretKey)
        return verify
    } catch (error) {
        // console.log(error)
    }
}

