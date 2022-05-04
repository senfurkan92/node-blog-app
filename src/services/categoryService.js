const BaseService = require('./baseService')

class CategoryService extends BaseService {
    constructor(){
        super('category')
    }
}

module.exports = new CategoryService();
