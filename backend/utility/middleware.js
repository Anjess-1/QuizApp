const authManager = require('./auth')
const utils = require('./utils')

exports.validateToken = (req, res, next) => {
    try {
        const getTokenValue = req.headers.jwt;
        const validateResult = authManager.validateToken(getTokenValue)
        if (!validateResult) {
            utils.createCustomError(403, "jwt is invalid/expired")
        }
        res.locals.jwtPayload = validateResult
        next()
    } catch (error) {
        next(error)
    }
}

exports.validateAsUser = (req, res, next) => {
    try {
        if (res.locals.jwtPayload.role != 'user') {
            utils.createCustomError(403, "jwt is invalid/expired")
        }
        next()
    } catch (error) {
        next(error)
    }
}

exports.validateAsAdmin = (req, res, next) => {
    try {
        if (res.locals.jwtPayload.role != 'admin') {
            utils.createCustomError(403, "jwt is invalid/expired")
        }
        next()
    } catch (error) {
        next(error)
    }
}