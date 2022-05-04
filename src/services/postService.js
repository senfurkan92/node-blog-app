const BaseService = require('./baseService')

class PostService extends BaseService {
    constructor(){
        super('post')
    }
}

module.exports = new PostService();
