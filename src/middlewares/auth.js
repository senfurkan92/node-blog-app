const {
    verify
} = require('../helpers/jwt')

exports.auth = (...roles) => {
    return (req, resp, next) => {
        const token = req.headers['x-api-key']
        let verified = null
        try {
            verified = verify(token)
        } catch (error) {     
        }

        if(verified) {
            if (roles.length > 0) {
                if(verified.role && roles.includes(verified.role)) {
                    next()
                } else {
                    resp.status(401).json('unauthorized')
                }
            } else {
                next()
            }        
        } else {
            resp.status(401).json('unauthorized')
        }
    }
}