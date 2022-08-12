function myEach(collection, callback){
    let array = convertToArray(collection)
    for (let i = 0; i < array.length; i++){
        callback(array[i])
    }
    return collection
}

function myMap(collection, callback){
    let array = convertToArray(collection)
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(callback(array[i]))
    }
    return newArray
}

function convertToArray(collection){
    if (Array.isArray(collection) == false){
        return Object.values(collection)
    }
    else return collection
}

function myReduce(collection, callback, acc){
    let array = convertToArray(collection)
    let workingArray = [...array]
    if (acc === undefined){
        acc = workingArray[0]
        workingArray.shift()
    }
    for (let i = 0; i < workingArray.length; i++){
        let newValue = callback(acc, workingArray[i], array)
        console.log(newValue)
        acc =+ newValue
    }
    return acc
}