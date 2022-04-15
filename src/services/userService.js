const BaseService = require('./baseService')

class UserService extends BaseService {
    constructor() {
        super('user')
    }
}

module.exports = new UserService()