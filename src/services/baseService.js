const { PrismaClient } =  require('@prisma/client')

class BaseService {
    constructor(model){
        const prisma = new PrismaClient()
        this.dataSet = prisma[model]
    }

    read(where) {  
        console.log(where)  
        return this.dataSet.findUnique({
            where
        })
    } 
    
    readAll(filter) {    
        console.log(filter)
        return this.dataSet.findMany(filter)
    } 

    insert(entity) {
        return this.dataSet.create({data: entity})
    }

    insertMany(entities) {
        return this.dataSet.createMany({
            data: entities,
            skipDuplicates: true,
        })
    }

    update(where, data) {
        return this.dataSet.update({
            where,
            data
        })
    }

    updateMany(where, data) {
        return this.dataSet.updateMany({
            where,
            data
        })
    }

    remove(where) {
        console.log({
            where
        })
        return this.dataSet.delete({
            where
        })
    }

    removeMany(where) {
        return this.dataSet.deleteMany({
            where
        })
    }

    removeAll() {
        return this.dataSet.deleteMany({})
    }

    beginTransaction(actions) {
        return this.dataSet.$transaction(actions)
    }
}

module.exports = BaseService;