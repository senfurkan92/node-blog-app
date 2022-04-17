const { 
    compare,
    hash
} = require('bcrypt')

exports.compare = (data, encrypted) => compare(data, encrypted)

exports.hash = (data) => hash(data, 8)