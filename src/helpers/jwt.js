const {
    sign,
    verify
} = require('jsonwebtoken')

exports.sign = (data) => sign(data, 'secret_key', {
    algorithm: "HS256",
    expiresIn: "2 days"
})

exports.verify = (token) => {
    const result = verify(token, 'secret_key', {
        algorithms: ['HS256'],
        ignoreExpiration: true
    })
    return result
}

